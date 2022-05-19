import {
  convertSvgToSymbol,
  getUseFromSvg,
  deriveUseFromSvg,
} from './utils.mjs'

const multiSVGSCoords = ({ name, backgroundColor, height, width, svgs }) => {
  const symbols = svgs.map((svg, index) => {
    return convertSvgToSymbol({ name, index, html: svg.str })
  })

  const uses = svgs.map((svg, index) => {
    return getUseFromSvg({ name, index, x: svg.x, y: svg.y })
  })

  return `<svg width=${width} height=${height} xmlns="http://www.w3.org/2000/svg">
            <rect fill=${backgroundColor} width=${width} height=${height} y="0" x="0"></rect>
            ${symbols}
            ${uses}
          </svg>`
}

// todo: align: left/center/right
const multiSVGSLayout = ({
  name,
  backgroundColor,
  rows,
  svgWidth,
  svgHeight,
  // padding,
  // gap,
}) => {
  if (rows.length > 3) {
    return 'error: 3 rows max'
  }

  const allSvgs = rows.flat()
  const symbols = allSvgs.map((svg, index) => {
    return convertSvgToSymbol({ name, index, html: svg.str })
  })

  const _uses = rows
    .map((row, index) => ({ index, row }))
    .map(({ row, index }) => {
      return deriveUseFromSvg({
        name,
        row,
        rows,
        index,
        width: svgWidth,
        height: svgHeight,
        // padding,
        // gap,
      })
    })

  const uses = _uses.flat().join('')

  const longestIndex = rows.reduce(
    (p, c, i, a) => (a[p].length > c.length ? p : i),
    0
  )

  const width = rows[longestIndex].length * svgWidth
  const height = rows.length * svgHeight

  return `<svg width=${width} height=${height} xmlns="http://www.w3.org/2000/svg">
            <rect fill=${backgroundColor} width=${width} height=${height} y="0" x="0"></rect>
            ${symbols}
            ${uses}
          </svg>`
}

const multiSVGS = ({
  name,
  padding,
  gap,
  rows,
  type,
  height,
  backgroundColor,
  width,
  svgs,
  align,
  svgWidth,
  svgHeight,
}) => {
  return type === 'coords'
    ? multiSVGSCoords({ name, backgroundColor, height, width, svgs })
    : type === 'layout'
    ? multiSVGSLayout({
        name,
        backgroundColor,
        padding,
        gap,
        rows,
        align,
        svgWidth,
        svgHeight,
      })
    : ''
}

export default multiSVGS

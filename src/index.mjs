import {
  getRandomNum,
  convertSvgToSymbol,
  getUseFromSvg,
  deriveUseFromSvg,
} from './utils.mjs'

const multiSVGSCoords = ({ backgroundColor, height, width, svgs }) => {
  const name = getRandomNum()

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
  backgroundColor,
  rows,
  svgWidth,
  svgHeight,
  padding = 0,
}) => {
  if (rows.length > 3) {
    return 'error: 3 rows max'
  }

  const name = getRandomNum()

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
        padding,
      })
    })

  const uses = _uses.flat().join('')

  const longestIndex = rows.reduce(
    (p, c, i, a) => (a[p].length > c.length ? p : i),
    0
  )

  const width = rows[longestIndex].length * svgWidth + padding * 2
  const height = rows.length * svgHeight + padding * 2

  return `<svg width=${width} height=${height} xmlns="http://www.w3.org/2000/svg">
            <rect fill=${backgroundColor} width=${width} height=${height} y="0" x="0"></rect>
            ${symbols}
            ${uses}
          </svg>`
}

const multiSVGS = ({
  padding,
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
    ? multiSVGSCoords({ backgroundColor, height, width, svgs })
    : type === 'layout'
    ? multiSVGSLayout({
        backgroundColor,
        padding,
        rows,
        align,
        svgWidth,
        svgHeight,
      })
    : ''
}

export default multiSVGS

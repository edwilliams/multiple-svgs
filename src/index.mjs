import { convertSvgToSymbol, getUseFromSvg } from './utils.mjs'

const multiSVGS = ({ background, svgs }) => {
  const symbols = svgs.map((svg, index) => {
    return convertSvgToSymbol({ index, html: svg.str })
  })

  const uses = svgs.map((svg, index) => {
    return getUseFromSvg({ index, x: svg.x, y: svg.y })
  })

  return `
        <svg width=${background.width} height=${background.height} xmlns="http://www.w3.org/2000/svg">
            <rect fill=${background.color} width=${background.width} height=${background.height} y="0" x="0"></rect>
            ${symbols}
            ${uses}
        </svg>
        `
}

export default multiSVGS

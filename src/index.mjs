import { getRandomNum, convertSvgToSymbol, getUseFromSvg } from './utils.mjs'

const multipleSvgs = ({ backgroundColor, height, width, svgs }) => {
  const name = getRandomNum()

  const symbols = svgs.map((svg, index) =>
    convertSvgToSymbol({ name, index, html: svg.str })
  )

  const uses = svgs.map((svg, index) =>
    getUseFromSvg({ name, index, x: svg.x, y: svg.y })
  )

  return `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
            <rect fill="${backgroundColor}" width="${width}" height="${height}" y="0" x="0"></rect>
            ${symbols}
            ${uses}
          </svg>`
}

export default multipleSvgs

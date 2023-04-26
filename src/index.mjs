import { convertSvgToG } from './utils.mjs'

const multipleSvgs = ({ id, height, width, svgs, defs }) => {
  const _defs = defs ? `<defs>${defs}</defs>` : ''

  const gs = svgs.map((svg) =>
    convertSvgToG({
      html: svg.str,
      x: svg.x,
      y: svg.y,
    })
  )

  const widthHeight =
    width && height ? `width="${width}" height="${height}"` : ''

  const _id = id ? `id="${id}"` : ''

  const str = `<svg ${_id} ${widthHeight} xmlns="http://www.w3.org/2000/svg">
      ${_defs}
      ${gs}
    </svg>`

  // techdebt: somehow, commas are being added along with an empty svg tag
  return str.replaceAll('</g>,', '</g>').replaceAll('<svg></svg>', '')
}

export default multipleSvgs

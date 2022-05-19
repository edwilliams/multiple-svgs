import _html2json from 'html2json'
import beautify from 'js-beautify'

const _HTML2JSON = ({ html }) => _html2json.html2json(beautify.html(html))

const _JSON2HTML = ({ json }) => beautify.html(_html2json.json2html(json))

export const getRandomNum = () => Math.floor(Math.random() * 100000)

export const convertSvgToSymbol = ({ name, index, html }) => {
  const json = _HTML2JSON({ html })
  const _json = json.child[0]

  // change tag from svg to symbol
  _json.tag = 'symbol'

  // keep only width and height
  Object.keys(_json.attr).forEach(key => {
    const valid = key === 'width' || key === 'height'
    if (!valid) delete _json.attr[key]
  })

  // add id attribute
  _json.attr.id = `item_${name}_${index}`

  return _JSON2HTML({ json: _json })
}

export const getUseFromSvg = ({ name, index, x, y }) => {
  return `<use href="#item_${name}_${index}" x=${x} y=${y} />`
}

const _getItemIndex = ({ index, rows, i }) => {
  if (index === 0) {
    return 0 + i
  } else if (index === 1) {
    return rows[index - 1].length + i
  } else if (index === 2) {
    return rows[index - 1].length + rows[index - 2].length + i
  } else {
    return undefined
  }
}

export const deriveUseFromSvg = ({
  name,
  row,
  rows,
  index,
  width,
  height,
  padding,
}) => {
  return row.map((o, i) => {
    const _index = _getItemIndex({ index, rows, i })
    const x = i * width + padding
    const y = index * height + padding
    return `<use href="#item_${name}_${_index}" x=${x} y=${y} />`
  })
}

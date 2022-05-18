import _html2json from 'html2json'
import beautify from 'js-beautify'

const _HTML2JSON = ({ html }) => _html2json.html2json(beautify.html(html))

const _JSON2HTML = ({ json }) => beautify.html(_html2json.json2html(json))

export const convertSvgToSymbol = ({ index, html }) => {
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
  _json.attr.id = `item_${index}`

  return _JSON2HTML({ json: _json })
}

export const getUseFromSvg = ({ index, x, y }) => {
  return `<use href="#item_${index}" x=${x} y=${y} />`
}

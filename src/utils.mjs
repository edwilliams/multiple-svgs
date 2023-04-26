import { html2json, json2html } from './html2json'
import beautify from 'js-beautify'

const _HTML2JSON = ({ html }) => html2json(beautify.html(html))

const _JSON2HTML = ({ json }) => beautify.html(json2html(json))

export const convertSvgToG = ({ html, x, y }) => {
  const json = _HTML2JSON({ html })
  const _json = json.child[0]

  // change tag from svg to g
  _json.tag = 'g'

  // keep only width, height and id
  Object.keys(_json.attr).forEach((key) => {
    const valid = key === 'width' || key === 'height' || key === 'id'
    if (!valid) delete _json.attr[key]
  })

  // add x and y
  _json.attr.transform = `translate(${x}, ${y})`

  return _JSON2HTML({ json: _json })
}

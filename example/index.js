import multiSVGS from '../src/index.mjs'

const HTML_coords = multiSVGS({
  type: 'coords',
  backgroundColor: 'pink',
  width: 220,
  height: 640,
  svgs: [
    {
      x: 10,
      y: 10,
      str: `<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
              <rect x="0" y="0" width="200" height="100" style="fill: red;" />
              <rect x="0" y="100" width="200" height="100" style="fill: orange;" />
            </svg>`,
    },
    {
      x: 10,
      y: 220,
      str: `<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
              <rect width="200" height="200" style="fill: yellow;" />
            </svg>`,
    },
    {
      x: 10,
      y: 430,
      str: `<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
              <rect width="200" height="200" style="fill: green;" />
            </svg>`,
    },
  ],
})

// NB all SVG must be same width / height
const HTML_layout = multiSVGS({
  type: 'layout',
  backgroundColor: 'pink',
  padding: 20,
  svgWidth: 200,
  svgHeight: 100,
  rows: [
    [
      {
        str: `<svg width="200" height="100" xmlns="http://www.w3.org/2000/svg">
                <rect x="0" y="0" width="200" height="100" style="fill: red;" />
              </svg>`,
      },
    ],
    [
      {
        str: `<svg width="200" height="100" xmlns="http://www.w3.org/2000/svg">
                <rect x="0" y="0" width="200" height="100" style="fill: black;" />
              </svg>`,
      },
      {
        str: `<svg width="200" height="100" xmlns="http://www.w3.org/2000/svg">
                <rect x="0" y="0" width="200" height="100" style="fill: grey;" />
              </svg>`,
      },
      {
        str: `<svg width="200" height="100" xmlns="http://www.w3.org/2000/svg">
                <rect x="0" y="0" width="200" height="100" style="fill: green;" />
              </svg>`,
      },
    ],
    [
      {
        str: `<svg width="200" height="100" xmlns="http://www.w3.org/2000/svg">
                <rect x="0" y="0" width="200" height="100" style="fill: blue;" />
              </svg>`,
      },
      {
        str: `<svg width="200" height="100" xmlns="http://www.w3.org/2000/svg">
                <rect x="0" y="0" width="200" height="100" style="fill: purple;" />
              </svg>`,
      },
      {
        str: `<svg width="200" height="100" xmlns="http://www.w3.org/2000/svg">
                <rect x="0" y="0" width="200" height="100" style="fill: orange;" />
              </svg>`,
      },
      {
        str: `<svg width="200" height="100" xmlns="http://www.w3.org/2000/svg">
                <rect x="0" y="0" width="200" height="100" style="fill: yellow;" />
              </svg>`,
      },
    ],
  ],
})

document.getElementById('root').innerHTML = `
<h3>type: coords</h3>
${HTML_coords}
<h3>type: layout</h3>
${HTML_layout}
`

import multiSVGS from '../src/index.mjs'

const HTML = multiSVGS({
  background: { width: 600, height: 800, color: 'pink' },
  svgs: [
    {
      x: 0,
      y: 0,
      str: `<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
              <rect x="0" y="0" width="200" height="100" style="fill: red;" />
              <rect x="0" y="100" width="200" height="100" style="fill: orange;" />
            </svg>`,
    },
    {
      x: 0,
      y: 300,
      str: `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="40" fill="red" />
            </svg>`,
    },
    {
      x: 0,
      y: 550,
      str: `<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
              <rect width="200" height="200" style="fill: green;" />
            </svg>`,
    },
  ],
})

document.getElementById('root').innerHTML = HTML

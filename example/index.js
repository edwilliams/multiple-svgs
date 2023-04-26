import multipleSvgs from '../src/index.mjs'

const nested = multipleSvgs({
  width: 50,
  height: 50,
  svgs: [
    {
      x: 0,
      y: 0,
      str: `<svg width="25" height="50" xmlns="http://www.w3.org/2000/svg">
              <rect x="0" y="0" width="25" height="50" style="fill: blue;" />
            </svg>`,
    },
    {
      x: 25,
      y: 0,
      str: `<svg width="25" height="50" xmlns="http://www.w3.org/2000/svg">
              <rect width="25" height="50" style="fill: yellow;" />
            </svg>`,
    },
  ],
})

const demo = multipleSvgs({
  id: 'demo',
  defs: `<style type="text/css">svg { background: pink; }</style>`,
  width: 320,
  height: 640,
  svgs: [
    {
      x: 250,
      y: 10,
      str: nested,
    },
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

document.getElementById('root').innerHTML = demo

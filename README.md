# Multiple SVGs

[![npm](https://img.shields.io/npm/v/multiple-svgs.svg)](https://www.npmjs.com/package/multiple-svgs)

This library would be better called combine SVGs!

## Install

```
$ npm install multiple-svgs
```

## Getting Started

Pass in an array of objects to receive a combined SVG. For example

```json
[
  {
    "x": 0,
    "y": 0,
    "str": `<svg>...</svg>`
  },
  {
    "x": 100,
    "y": 0,
    "str": `<svg>...</svg>`
  }
]
```

## Full Usage

**input**

```javascript
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
      str: nested, // multipleSvgs can be used recursively
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
```

**output**

```html
<svg id="demo" width="320" height="640" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style type="text/css">
      svg {
        background: pink;
      }
    </style>
  </defs>
  <g width="50" height="50" transform="translate(250, 10)">
    <g width="25" height="50" transform="translate(0, 0)">
      <rect x="0" y="0" width="25" height="50" style="fill: blue;"></rect>
    </g>
    <g width="25" height="50" transform="translate(25, 0)">
      <rect width="25" height="50" style="fill: yellow;"></rect>
    </g>
  </g>
  <g width="200" height="200" transform="translate(10, 10)">
    <rect x="0" y="0" width="200" height="100" style="fill: red;"></rect>
    <rect x="0" y="100" width="200" height="100" style="fill: orange;"></rect>
  </g>
  <g width="200" height="200" transform="translate(10, 220)">
    <rect width="200" height="200" style="fill: yellow;"></rect>
  </g>
  <g width="200" height="200" transform="translate(10, 430)">
    <rect width="200" height="200" style="fill: green;"></rect>
  </g>
</svg>
```

## Notes

The `html2json` repo has issues bundling, hence an edited version has been included in the src of this repo

# Multiple SVGs

[![npm](https://img.shields.io/npm/v/foo.svg)](https://www.npmjs.com/package/foo)

Convert multiple SVG's (as strings with co-ordinates) into one SVG. Making use of `<symbol>` and `<use>`

## Install

```
$ npm install multi-svgs
```

## Usage

```javascript
// input

multiSVGS({
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
```

```html
<!-- Output -->

<svg width="600" height="800" xmlns="http://www.w3.org/2000/svg">
  <rect fill="pink" width="600" height="800" y="0" x="0"></rect>
  <symbol width="200" height="200" id="item_0">
    <rect x="0" y="0" width="200" height="100" style="fill: red;"></rect>
    <rect x="0" y="100" width="200" height="100" style="fill: orange;"></rect>
  </symbol>
  <symbol width="100" height="100" id="item_1">
    <circle cx="50" cy="50" r="40" fill="red"></circle>
  </symbol>
  <symbol width="200" height="200" id="item_2">
    <rect width="200" height="200" style="fill: green;"></rect>
  </symbol>
  <use href="#item_0" x="0" y="0"></use>
  ,
  <use href="#item_1" x="0" y="300"></use>
  <use href="#item_2" x="0" y="550"></use>
</svg>
```

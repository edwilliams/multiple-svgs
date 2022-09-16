# Multiple SVGs

[![npm](https://img.shields.io/npm/v/multiple-svgs.svg)](https://www.npmjs.com/package/multiple-svgs)

Convert multiple SVG's (as strings with co-ordinates) into one SVG. Making use of `<symbol>` and `<use>`

## Install

```
$ npm install multiple-svgs
```

## Usage

**input**

```javascript
multipleSvgs({
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
```

**output**

```html
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
  <use href="#item_3755_0" x="0" y="0"></use>
  <use href="#item_3755_1" x="0" y="300"></use>
  <use href="#item_3755_2" x="0" y="550"></use>
</svg>
```

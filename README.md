# Multiple SVGs

[![npm](https://img.shields.io/npm/v/foo.svg)](https://www.npmjs.com/package/foo)

Convert multiple SVG's (as strings with co-ordinates) into one SVG. Making use of `<symbol>` and `<use>`

## Install

```
$ npm install multi-svgs
```

## Usage

```javascript
// input - coords

multiSVGS({
  name: 'foo',
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
  <use href="#item_foo_0" x="0" y="0"></use>
  <use href="#item_foo_1" x="0" y="300"></use>
  <use href="#item_foo_2" x="0" y="550"></use>
</svg>
```

```javascript
// input - layout

multiSVGS({
  name: 'bar',
  type: 'layout',
  backgroundColor: 'pink',
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
```

```html
<!-- Output -->

<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg">
  <rect fill="pink" width="800" height="300" y="0" x="0"></rect>
  <symbol width="200" height="100" id="item_one_0">
    <rect x="0" y="0" width="200" height="100" style="fill: red;"></rect>
  </symbol>
  <symbol width="200" height="100" id="item_one_1">
    <rect x="0" y="0" width="200" height="100" style="fill: black;"></rect>
  </symbol>
  <symbol width="200" height="100" id="item_one_2">
    <rect x="0" y="0" width="200" height="100" style="fill: grey;"></rect>
  </symbol>
  <symbol width="200" height="100" id="item_one_3">
    <rect x="0" y="0" width="200" height="100" style="fill: green;"></rect>
  </symbol>
  <symbol width="200" height="100" id="item_one_4">
    <rect x="0" y="0" width="200" height="100" style="fill: blue;"></rect>
  </symbol>
  <symbol width="200" height="100" id="item_one_5">
    <rect x="0" y="0" width="200" height="100" style="fill: purple;"></rect>
  </symbol>
  <symbol width="200" height="100" id="item_one_6">
    <rect x="0" y="0" width="200" height="100" style="fill: orange;"></rect>
  </symbol>
  <symbol width="200" height="100" id="item_one_7">
    <rect x="0" y="0" width="200" height="100" style="fill: yellow;"></rect>
  </symbol>
  <use href="#item_bar_0" x="0" y="0"></use>
  <use href="#item_bar_1" x="0" y="100"></use>
  <use href="#item_bar_2" x="200" y="100"></use>
  <use href="#item_bar_3" x="400" y="100"></use>
  <use href="#item_bar_4" x="0" y="200"></use>
  <use href="#item_bar_5" x="200" y="200"></use>
  <use href="#item_bar_6" x="400" y="200"></use>
  <use href="#item_bar_7" x="600" y="200"></use>
</svg>
```

## Notes

- _feature_: add gap / padding to type layout
- _bug_: errant (invisible) commas rendered out inside SVG elements
- _techdebt_: passing in name shouldn't be needed

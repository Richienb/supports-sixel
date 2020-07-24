# supports-sixel [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/supports-sixel/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/supports-sixel)

Detect whether a terminal can display [sixels](https://en.wikipedia.org/wiki/Sixel).

[![NPM Badge](https://nodei.co/npm/supports-sixel.png)](https://npmjs.com/package/supports-sixel)

## Install

```sh
npm install supports-sixel
```

## Usage

```js
const supportsSixel = require("supports-sixel");

(async () => {
	const isSupported = await supportsSixel();

	console.log(isSupported ? "Sixels are supported!" : "Sixels aren't supported!");
})();
```

## API

### supportsSixel()

Returns a promise that resolves with a boolean.

## Related

- [replied](https://github.com/Richienb/replied) - Log ansi codes and get the stdin response.

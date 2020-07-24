/**
Detect whether a terminal can display [sixels](https://en.wikipedia.org/wiki/Sixel).
@example
```
const supportsSixel = require("supports-sixel");

(async () => {
	const isSupported = await supportsSixel();

	console.log(isSupported ? "Sixels are supported!" : "Sixels aren't supported!");
})();
```
*/
declare function supportsSixel(): Promise<boolean>

export = supportsSixel

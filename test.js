const test = require("ava")
const supportsSixel = require(".")

test("main", async t => {
	t.is(typeof await supportsSixel(), "boolean")
})

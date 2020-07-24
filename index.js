"use strict"

const replied = require("replied")

const ESC = "\u001B["

module.exports = async () => {
	try {
		const attributes = await replied(ESC + "0c")
		return attributes.includes(";4")
	} catch (_) {
		return false
	}
}

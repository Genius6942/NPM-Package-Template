(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.replitNpmTemplate = {}));
})(this, (function (exports) { 'use strict';

	function changeBackgroundColor(color = 'transparent') {
	  document.body.style.background = color;
	}

	exports.changeBackgroundColor = changeBackgroundColor;

	Object.defineProperty(exports, '__esModule', { value: true });

}));

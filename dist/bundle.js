!function i(u,a,f){function s(r,e){if(!a[r]){if(!u[r]){var t="function"==typeof require&&require;if(!e&&t)return t(r,!0);if(c)return c(r,!0);var n=new Error("Cannot find module '"+r+"'");throw n.code="MODULE_NOT_FOUND",n}var o=a[r]={exports:{}};u[r][0].call(o.exports,function(e){return s(u[r][1][e]||e)},o,o.exports,i,u,a,f)}return a[r].exports}for(var c="function"==typeof require&&require,e=0;e<f.length;e++)s(f[e]);return s}({1:[function(e,r,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.greeter=void 0,t.greeter=function(e){return"Hello, 22ww "+e.firstName+" "+e.lastName}},{}],2:[function(e,r,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=e("./greeter"),o=new function e(r,t,n){!function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,e),this.age=r,this.firstName=t,this.lastName=n,this.fullName="age: "+r+", name: "+n+" "+t}(27,"HK","Lee");document.body.textContent=n.greeter(o)},{"./greeter":1}]},{},[2]);
//# sourceMappingURL=bundle.js.map

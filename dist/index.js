parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({197:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var n={min:function(n){return function(t){return t.length>=n}},max:function(n){return function(t){return t.length<=n}},isNumber:function(n){var t=Number(n);return"number"==typeof t&&!isNaN(t)&&"boolean"!=typeof n},isMatchingRegExp:function(n){return function(t){return RegExp(n).test(t)}},isFunction:function(n){return n&&"[object Function]"==={}.toString.call(n)},checkWithPromise:function(n,t,e){(function(n){return new Promise(function(t,e){setTimeout(function(){n.length>3&&e("error"),t("sukses")},3e3)})})(val).then(function(n){return t("done")}).catch(function(n){return e(n)})},isAsync:function(){return function(n,t,e){setTimeout(function(){n.length<3&&e("error"),t("done")},3e3)}}};exports.default=n;
},{}],1:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.plugins=void 0;var e=require("./plugins"),r=t(e);function t(e){return e&&e.__esModule?e:{default:e}}function n(e){return function(){var r=e.apply(this,arguments);return new Promise(function(e,t){return function n(u,a){try{var i=r[u](a),o=i.value}catch(e){return void t(e)}if(!i.done)return Promise.resolve(o).then(function(e){n("next",e)},function(e){n("throw",e)});e(o)}("next")})}}var u=function(){var e=n(regeneratorRuntime.mark(function e(r,t,n,u){var a,i,o=r.validations,s=(r.doWhileCheck,this);return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a=regeneratorRuntime.mark(function e(){var r,t,n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=o[i],t=r.rule,n=r.errMsg,e.next=3,convertToPromise(function(e,r){return t("te",e,r)});case 3:if("error"!==e.sent){e.next=7;break}return u(n),e.abrupt("return","break");case 7:case"end":return e.stop()}},e,s)}),i=0;case 2:if(!(i<o.length)){e.next=10;break}return e.delegateYield(a(),"t0",4);case 4:if("break"!==e.t0){e.next=7;break}return e.abrupt("break",10);case 7:i++,e.next=2;break;case 10:case"end":return e.stop()}},e,this)}));return function(r,t,n,u){return e.apply(this,arguments)}}();exports.plugins=r.default;
},{"./plugins":197}]},{},[1], null)
//# sourceMappingURL=/index.map
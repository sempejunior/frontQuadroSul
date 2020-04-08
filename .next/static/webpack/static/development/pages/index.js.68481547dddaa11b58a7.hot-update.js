webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Agency/Banner.js":
/*!*************************************!*\
  !*** ./components/Agency/Banner.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-modal-video */ "./node_modules/react-modal-video/lib/index.js");
/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_modal_video__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _node_modules_react_modal_video_scss_modal_video_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../node_modules/react-modal-video/scss/modal-video.scss */ "./node_modules/react-modal-video/scss/modal-video.scss");
/* harmony import */ var _node_modules_react_modal_video_scss_modal_video_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_node_modules_react_modal_video_scss_modal_video_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _novasImagens_fundo_fundoTeste3_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../novasImagens/fundo/fundoTeste3.png */ "./novasImagens/fundo/fundoTeste3.png");
/* harmony import */ var _novasImagens_fundo_fundoTeste3_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_novasImagens_fundo_fundoTeste3_png__WEBPACK_IMPORTED_MODULE_11__);







var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;






var Banner =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Banner, _Component);

  function Banner() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Banner);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Banner)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      isOpen: false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "openModal", function () {
      _this.setState({
        isOpen: true
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Banner, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx("div", {
        id: "home",
        className: "main-banner jarallax",
        "data-jarallax": "{\"speed\": 0.2}",
        style: {
          backgroundImage: "url(".concat(_novasImagens_fundo_fundoTeste3_png__WEBPACK_IMPORTED_MODULE_11___default.a, ")"),
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'repeat'
        }
      }, __jsx("div", {
        className: "d-table"
      }, __jsx("div", {
        className: "d-table-cell"
      }, __jsx("div", {
        className: "container"
      }, __jsx("div", {
        className: "main-banner-content"
      }, __jsx("a", {
        className: "navbar-brand"
      }, __jsx("img", {
        src: __webpack_require__(/*! ../../imagensQuadroSul/logoTitulo.png */ "./imagensQuadroSul/logoTitulo.png"),
        alt: "logo"
      })), __jsx("p", null, "Empresa especializada na produ\xE7\xE3o de quadros e de outros elementos essenciais para uma boa comunica\xE7\xE3o visual"), __jsx("div", {
        className: "btn-box"
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "#"
      }, __jsx("a", {
        className: "popup-youtube video-btn",
        onClick: function onClick(e) {
          e.preventDefault();

          _this2.openModal();
        }
      }, __jsx("i", {
        className: "fab fa-google-play"
      }), "Watch our video")))))))), __jsx(react_modal_video__WEBPACK_IMPORTED_MODULE_9___default.a, {
        channel: "youtube",
        isOpen: this.state.isOpen,
        videoId: "szuchBiLrEM",
        onClose: function onClose() {
          return _this2.setState({
            isOpen: false
          });
        }
      }));
    }
  }]);

  return Banner;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Banner);

/***/ }),

/***/ "./novasImagens/fundo/fundoTeste2.png":
false,

/***/ "./novasImagens/fundo/fundoTeste3.png":
/*!********************************************!*\
  !*** ./novasImagens/fundo/fundoTeste3.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABKgAAAJuCAIAAAAb3q3hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAABCZSURBVHhe7dk9rqRHGYbhGWekjiHDiyNgNQQsBLEaJ8iOIUVCQoex3IxmPK3u093fT9Vd15XU8y7hVn18e3v7AAAAQNd3lxcAAIAo4QcAABAn/AAAAOKEHwAAQJzwAwAAiBN+AAAAccIPAAAgTvgBAADECT8AAIA44QcAABAn/AAAAOKEHwAAQJzwAwAAiBN+AAAAccIPAAAgTvgBAADECT8AAIA44QcAABAn/AAAAOKEHwAAQJzwAwAAiBN+AAAAccIPAAAgTvgBAADECT8AAIA44QcAABAn/AAAAOKEHwAAQJzwAwAAiBN+AAAAccIPAAAgTvgBAADECT8AAIA44QcAABAn/AAAAOKEHwAAQJzwAwAAiBN+AAAAccIPAAAgTvgBAADECT8AAIA44QcAABAn/AAAAOKEHwAAQJzwAwAAiBN+AAAAccIPAAAgTvgBAADECT8AAIA44QcAABAn/AAAAOKEHwAAQJzwAwAAiBN+AAAAccIPAAAgTvgBAADECT8AAIA44QcAABAn/AAAAOKEHwAAQJzwAwAAiBN+AAAAccIPAAAgTvgBAADECT8AAIA44QcAABAn/AAAAOKEHwAAQJzwAwAAiBN+AAAAccIPAAAgTvgBAADECT8AAIA44QcAABAn/AAAAOKEHwAAQJzwAwAAiBN+AAAAccIPAAAgTvgBAADECT8AAIA44QcAABAn/AAAAOKEHwAAQJzwAwAAiBN+AAAAccIPAAAgTvgBAADECT8AAIA44QcAABAn/AAAAOKEHwAAQJzwAwAAiBN+AAAAccIPAAAgTvgBAADECT8AAIA44QcAABAn/AAAAOKEHwAAQJzwAwAAiBN+AAAAccIPAAAgTvgBAADECT8AAIA44QcAABAn/AAAAOKEHwAAQJzwAwAAiBN+AAAAccIPAAAgTvgBAADECT8AAIA44QcAABAn/AAAAOKEHwAAQJzwAwAAiBN+AAAAccIPAAAgTvgBAADECT8AAIA44QcAABAn/AAAAOKEHwAAQJzwAwAAiBN+AAAAccIPAAAgTvgBAADECT8AAIA44QcAABAn/AAAAOKEHwAAQJzwAwAAiBN+AAAAccIPAAAgTvgBAADECT8AAIA44QcAABAn/AAAAOKEHwAAQJzwAwAAiBN+AAAAccIPAAAgTvgBAADECT8AAIA44QcAABAn/AAAAOKEHwAAQJzwAwAAiBN+AAAAccIPAAAgTvgBAADECT8AAIA44QcAABAn/AAAAOKEHwAAQJzwAwAAiBN+AAAAccIPAAAgTvgBAADECT8AAIA44QcAABAn/AAAAOKEHwAAQJzwAwAAiBN+AAAAccIPAAAgTvgBAADECT8AAIA44QcAABAn/AAAAOKEHwAAQJzwAwAAiBN+AAAAccIPAAAgTvgBAADECT8AAIA44QcAABAn/AAAAOKEHwAAQJzwAwAAiBN+AAAAccIPAAAgTvgBAADECT8AAIA44QcAABAn/AAAAOKEHwAAQJzwAwAAiBN+AAAAccIPAAAgTvgBAADECT8AAIA44QcAABAn/AAAAOKEHwAAQJzwAwAAiBN+AAAAccIPAAAgTvgBAADECT8AAIA44QcAABAn/AAAAOKEHwAAQJzwAwAAiBN+AAAAccIPAAAgTvgBAADECT8AAIA44QcAABAn/AAAAOKEHwAAQJzwAwAAiBN+AAAAccIPAAAgTvgBAADECT8AAIA44QcAABAn/AAAAOKEHwAAQJzwAwAAiBN+AAAAccIPAAAgTvgBACf4z9/+/u+//PVyALAz4QcAnOC///jpd3/+0+UAYGcf397eLhMAAIAiP34AAABxwg8AACBO+AEAAMQJPwAAgDjhBwAAECf8AAAA4oQfAABAnPADAACIE34AAABxwg8AACBO+AEAAMQJPwAAgDjhBwAAECf8AAAA4oQfAABAnPADAACIE34AAABxwg8AACBO+AEAAMQJPwAAgDjhBwAAECf8AAAA4oQfAABAnPADAACIE34AAABxwg8AACBO+AEAAMQJPwAAgDjhBwAAECf8AAAA4oQfAABAnPADAACIE34AAABxwg8AACBO+AEAAMQJPwAAgDjhBwAAECf8AAAA4oQfAABAnPADAACIE34AAABxwg8AACBO+AEAAMQJPwAAgDjhBwAAECf8AAAA4oQfAABAnPADAACIE34AAABxwg8AACBO+AEAAMQJPwAAgDjhBwAAECf8AAAA4oQfAABAnPADAACIE34AAABxwg8AACBO+AEAAMQJPwAAgDjhBwAAECf8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nPADAACIE34AAABxwg8AACBO+AEAAMQJPwAAgDjhBwAAECf8AAAA4oQfAABAnPADAACIE34AAABxwg8AACBO+AEAAMQJPwAAgDjhBwAAECf8AAAA4oQfAABAnPADAACIE34AAABxwg8AACBO+AEAAMQJPwAAgDjhBwAAECf8AAAA4oQfAABAnPADAACIE34AAABxwg8AACBO+AEAAMQJPwAAgDjhBwAAECf8AAAA4oQfAABAnPADAACIE34AAABxwg8AACBO+AEAAMQJPwAAgDjhBwAAECf8AAAA4oQfAABAnPADAACIE34AAABxwg8AACBO+AEAAMQJPwAAgDjhBwAAECf8AAAA4oQfAABAnPADAACIE34AAABxwg8AACBO+AEAAMQJPwAAgDjhBwAAECf8AAAA4oQfAABAnPADAACIE34AAABxwg8AACBO+AEAAMQJPwAAgDjhBwAAECf8AAAA4oQfAABAnPADAACIE34AAABxwg8AACBO+AEAAMQJPwAAgDjhBwAAECf8AAAA4oQfAABAnPADAACIE34AAABxwg8AACBO+AEAAMQJPwAAgDjhBwAAECf8AAAA4oQfAABAnPADAACIE34AAABxwg8AACBO+AEAAMQJPwAAgDjhBwAAECf8AAAA4oQfAABAnPADAACIE34AAABxwg8AACBO+AEAAMQJPwAAgDjhBwAAECf8AAAA4oQfAABAnPADAACIE34AAABxwg8AACBO+AEAAMQJPwAAgDjhBwAAECf8AAAA4oQfAABAnPADAACIE34AAABxwg8AACBO+AEAAMQJPwAAgDjhBwAAECf8AAAA4oQfAABAnPADAACIE34AAABxwg8AACBO+AEAAMQJPwAAgDjhBwAAECf8AAAA4oQfAABAnPADAACIE34AAABxwg8AACBO+AEAAMQJPwAAgDjhBwAAECf8AAAA4oQfAABAnPADAACIE34AAABpHz78D2qkudBlzkt0AAAAAElFTkSuQmCC"

/***/ })

})
//# sourceMappingURL=index.js.68481547dddaa11b58a7.hot-update.js.map
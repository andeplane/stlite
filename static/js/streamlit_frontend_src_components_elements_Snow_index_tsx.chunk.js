"use strict";
(globalThis["webpackChunk_stlite_mountable"] = globalThis["webpackChunk_stlite_mountable"] || []).push([["streamlit_frontend_src_components_elements_Snow_index_tsx"],{

/***/ "../../streamlit/frontend/src/components/elements/Snow/Snow.tsx":
/*!**********************************************************************!*\
  !*** ../../streamlit/frontend/src/components/elements/Snow/Snow.tsx ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NUM_FLAKES": () => (/* binding */ NUM_FLAKES),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var src_assets_img_snow_flake_0_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/assets/img/snow/flake-0.png */ "../../streamlit/frontend/src/assets/img/snow/flake-0.png");
/* harmony import */ var src_assets_img_snow_flake_1_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/assets/img/snow/flake-1.png */ "../../streamlit/frontend/src/assets/img/snow/flake-1.png");
/* harmony import */ var src_assets_img_snow_flake_2_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/assets/img/snow/flake-2.png */ "../../streamlit/frontend/src/assets/img/snow/flake-2.png");
/* harmony import */ var src_components_elements_Particles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/components/elements/Particles */ "../../streamlit/frontend/src/components/elements/Particles/index.tsx");
/* harmony import */ var _styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styled-components */ "../../streamlit/frontend/src/components/elements/Snow/styled-components.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");

var _jsxFileName = "/Users/anders.hafreager@cognitedata.com/projects/cognite/dshublite/stlite/streamlit/frontend/src/components/elements/Snow/Snow.tsx";
/**
 * Copyright (c) Streamlit Inc. (2018-2022) Snowflake Inc. (2022)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



/*
 * IMPORTANT: If you change the asset imports below, make sure they still work if Streamlit is
 * served from a subpath.
 */






const NUM_FLAKES = 100;
const FLAKE_IMAGES = [src_assets_img_snow_flake_0_png__WEBPACK_IMPORTED_MODULE_1__, src_assets_img_snow_flake_1_png__WEBPACK_IMPORTED_MODULE_2__, src_assets_img_snow_flake_2_png__WEBPACK_IMPORTED_MODULE_3__];
const NUM_FLAKE_TYPES = FLAKE_IMAGES.length;
const Flake = _ref => {
  let {
    particleType
  } = _ref;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_styled_components__WEBPACK_IMPORTED_MODULE_5__.StyledFlake, {
    src: FLAKE_IMAGES[particleType]
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 3
  }, undefined);
};
_c = Flake;
const Snow = function Snow(_ref2) {
  let {
    scriptRunId
  } = _ref2;
  // Keys should be unique each time, so React replaces the images in the DOM and their animations
  // actually rerun.
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(src_components_elements_Particles__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "snow",
    scriptRunId: scriptRunId,
    numParticleTypes: NUM_FLAKE_TYPES,
    numParticles: NUM_FLAKES,
    ParticleComponent: Flake
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 5
  }, this);
};
_c2 = Snow;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_c3 = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(Snow));
var _c, _c2, _c3;
__webpack_require__.$Refresh$.register(_c, "Flake");
__webpack_require__.$Refresh$.register(_c2, "Snow");
__webpack_require__.$Refresh$.register(_c3, "%default%");

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (false) {}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "../../streamlit/frontend/src/components/elements/Snow/index.tsx":
/*!***********************************************************************!*\
  !*** ../../streamlit/frontend/src/components/elements/Snow/index.tsx ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NUM_FLAKES": () => (/* reexport safe */ _Snow__WEBPACK_IMPORTED_MODULE_0__.NUM_FLAKES),
/* harmony export */   "default": () => (/* reexport safe */ _Snow__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _Snow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Snow */ "../../streamlit/frontend/src/components/elements/Snow/Snow.tsx");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");

/**
 * Copyright (c) Streamlit Inc. (2018-2022) Snowflake Inc. (2022)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (false) {}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "../../streamlit/frontend/src/components/elements/Snow/styled-components.ts":
/*!**********************************************************************************!*\
  !*** ../../streamlit/frontend/src/components/elements/Snow/styled-components.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyledFlake": () => (/* binding */ StyledFlake)
/* harmony export */ });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled/base */ "../../node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/react */ "../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");


/**
 * Copyright (c) Streamlit Inc. (2018-2022) Snowflake Inc. (2022)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


const IMAGE_HEIGHT = 150;
const IMAGE_WIDTH = 150;
const POS_MIN_VW = 10;
const POS_MAX_VW = 90;
const DELAY_MAX_MS = 4000;
const rand = function (max) {
  let min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return Math.random() * (max - min) + min;
};
const moveDown = () => _emotion_react__WEBPACK_IMPORTED_MODULE_1__.keyframes`
  from {
    transform:
      translateY(0)
      rotateX(${rand(360)}deg)
      rotateY(${rand(360)}deg)
      rotateZ(${rand(360)}deg);
  }

  to {
    transform:
      translateY(calc(100vh + ${IMAGE_HEIGHT}px))
      rotateX(0)
      rotateY(0)
      rotateZ(0);
  }
`;
const StyledFlake = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("img",  false ? 0 : {
  target: "e1hbdfkw0",
  label: "StyledFlake"
})(_ref => {
  let {
    theme
  } = _ref;
  return {
    position: "fixed",
    top: `${-IMAGE_HEIGHT}px`,
    marginLeft: `${-IMAGE_WIDTH / 2}px`,
    zIndex: theme.zIndices.balloons,
    left: `${rand(POS_MAX_VW, POS_MIN_VW)}vw`,
    animationDelay: `${rand(DELAY_MAX_MS)}ms`,
    height: `${IMAGE_HEIGHT}px`,
    width: `${IMAGE_WIDTH}px`,
    pointerEvents: "none",
    animationDuration: "3000ms",
    animationName: moveDown(),
    animationTimingFunction: "ease-in",
    animationDirection: "normal",
    animationIterationCount: 1,
    opacity: 1
  };
},  false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRlcnMuaGFmcmVhZ2VyQGNvZ25pdGVkYXRhLmNvbS9wcm9qZWN0cy9jb2duaXRlL2RzaHVibGl0ZS9zdGxpdGUvc3RyZWFtbGl0L2Zyb250ZW5kL3NyYy9jb21wb25lbnRzL2VsZW1lbnRzL1Nub3cvc3R5bGVkLWNvbXBvbmVudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEMyQiIsImZpbGUiOiIvVXNlcnMvYW5kZXJzLmhhZnJlYWdlckBjb2duaXRlZGF0YS5jb20vcHJvamVjdHMvY29nbml0ZS9kc2h1YmxpdGUvc3RsaXRlL3N0cmVhbWxpdC9mcm9udGVuZC9zcmMvY29tcG9uZW50cy9lbGVtZW50cy9Tbm93L3N0eWxlZC1jb21wb25lbnRzLnRzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIFN0cmVhbWxpdCBJbmMuICgyMDE4LTIwMjIpIFNub3dmbGFrZSBJbmMuICgyMDIyKVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgeyBrZXlmcmFtZXMsIEtleWZyYW1lcyB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIlxuXG5jb25zdCBJTUFHRV9IRUlHSFQgPSAxNTBcbmNvbnN0IElNQUdFX1dJRFRIID0gMTUwXG5jb25zdCBQT1NfTUlOX1ZXID0gMTBcbmNvbnN0IFBPU19NQVhfVlcgPSA5MFxuY29uc3QgREVMQVlfTUFYX01TID0gNDAwMFxuXG5jb25zdCByYW5kID0gKG1heDogbnVtYmVyLCBtaW4gPSAwKTogbnVtYmVyID0+XG4gIE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pblxuXG5jb25zdCBtb3ZlRG93biA9ICgpOiBLZXlmcmFtZXMgPT4ga2V5ZnJhbWVzYFxuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06XG4gICAgICB0cmFuc2xhdGVZKDApXG4gICAgICByb3RhdGVYKCR7cmFuZCgzNjApfWRlZylcbiAgICAgIHJvdGF0ZVkoJHtyYW5kKDM2MCl9ZGVnKVxuICAgICAgcm90YXRlWigke3JhbmQoMzYwKX1kZWcpO1xuICB9XG5cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTpcbiAgICAgIHRyYW5zbGF0ZVkoY2FsYygxMDB2aCArICR7SU1BR0VfSEVJR0hUfXB4KSlcbiAgICAgIHJvdGF0ZVgoMClcbiAgICAgIHJvdGF0ZVkoMClcbiAgICAgIHJvdGF0ZVooMCk7XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IFN0eWxlZEZsYWtlID0gc3R5bGVkLmltZygoeyB0aGVtZSB9KSA9PiAoe1xuICBwb3NpdGlvbjogXCJmaXhlZFwiLFxuICB0b3A6IGAkey1JTUFHRV9IRUlHSFR9cHhgLFxuICBtYXJnaW5MZWZ0OiBgJHstSU1BR0VfV0lEVEggLyAyfXB4YCxcbiAgekluZGV4OiB0aGVtZS56SW5kaWNlcy5iYWxsb29ucyxcbiAgbGVmdDogYCR7cmFuZChQT1NfTUFYX1ZXLCBQT1NfTUlOX1ZXKX12d2AsXG4gIGFuaW1hdGlvbkRlbGF5OiBgJHtyYW5kKERFTEFZX01BWF9NUyl9bXNgLFxuICBoZWlnaHQ6IGAke0lNQUdFX0hFSUdIVH1weGAsXG4gIHdpZHRoOiBgJHtJTUFHRV9XSURUSH1weGAsXG4gIHBvaW50ZXJFdmVudHM6IFwibm9uZVwiLFxuXG4gIGFuaW1hdGlvbkR1cmF0aW9uOiBcIjMwMDBtc1wiLFxuICBhbmltYXRpb25OYW1lOiBtb3ZlRG93bigpLFxuICBhbmltYXRpb25UaW1pbmdGdW5jdGlvbjogXCJlYXNlLWluXCIsXG4gIGFuaW1hdGlvbkRpcmVjdGlvbjogXCJub3JtYWxcIixcbiAgYW5pbWF0aW9uSXRlcmF0aW9uQ291bnQ6IDEsXG4gIG9wYWNpdHk6IDEsXG59KSlcbiJdfQ== */");

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (false) {}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "../../streamlit/frontend/src/assets/img/snow/flake-0.png":
/*!****************************************************************!*\
  !*** ../../streamlit/frontend/src/assets/img/snow/flake-0.png ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/media/flake-0.beded754e8024c73d9d2.png";

/***/ }),

/***/ "../../streamlit/frontend/src/assets/img/snow/flake-1.png":
/*!****************************************************************!*\
  !*** ../../streamlit/frontend/src/assets/img/snow/flake-1.png ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/media/flake-1.8077dc154e0bf900aa73.png";

/***/ }),

/***/ "../../streamlit/frontend/src/assets/img/snow/flake-2.png":
/*!****************************************************************!*\
  !*** ../../streamlit/frontend/src/assets/img/snow/flake-2.png ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/media/flake-2.e3f07d06933dd0e84c24.png";

/***/ })

}]);
//# sourceMappingURL=streamlit_frontend_src_components_elements_Snow_index_tsx.chunk.js.map
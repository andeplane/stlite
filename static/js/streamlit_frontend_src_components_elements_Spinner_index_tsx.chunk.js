"use strict";
(globalThis["webpackChunk_stlite_mountable"] = globalThis["webpackChunk_stlite_mountable"] || []).push([["streamlit_frontend_src_components_elements_Spinner_index_tsx"],{

/***/ "../../streamlit/frontend/src/components/elements/Spinner/Spinner.tsx":
/*!****************************************************************************!*\
  !*** ../../streamlit/frontend/src/components/elements/Spinner/Spinner.tsx ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/react */ "../../node_modules/@emotion/react/dist/emotion-element-6a883da9.browser.esm.js");
/* harmony import */ var src_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/theme */ "../../streamlit/frontend/src/theme/index.ts");
/* harmony import */ var src_components_shared_StreamlitMarkdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/components/shared/StreamlitMarkdown */ "../../streamlit/frontend/src/components/shared/StreamlitMarkdown/index.tsx");
/* harmony import */ var src_components_core_AppContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/components/core/AppContext */ "../../streamlit/frontend/src/components/core/AppContext.tsx");
/* harmony import */ var _styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styled-components */ "../../streamlit/frontend/src/components/elements/Spinner/styled-components.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");

var _jsxFileName = "/home/runner/work/stlite/stlite/streamlit/frontend/src/components/elements/Spinner/Spinner.tsx",
  _s = __webpack_require__.$Refresh$.signature();
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








function Spinner(_ref) {
  _s();
  let {
    width,
    element
  } = _ref;
  const theme = (0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__.u)();
  const {
    activeTheme
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(src_components_core_AppContext__WEBPACK_IMPORTED_MODULE_3__.AppContext);
  const usingCustomTheme = !(0,src_theme__WEBPACK_IMPORTED_MODULE_1__.isPresetTheme)(activeTheme);
  const styleProp = {
    width
  };
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
    className: "stSpinner",
    style: styleProp,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styled_components__WEBPACK_IMPORTED_MODULE_4__.StyledSpinnerContainer, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styled_components__WEBPACK_IMPORTED_MODULE_4__.ThemedStyledSpinner, {
        $size: theme.iconSizes.twoXL,
        $usingCustomTheme: usingCustomTheme
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(src_components_shared_StreamlitMarkdown__WEBPACK_IMPORTED_MODULE_2__["default"], {
        source: element.text,
        allowHTML: false
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 5
  }, this);
}
_s(Spinner, "z3HtTnkdZnFuk3su93uKTN+O/lI=", false, function () {
  return [_emotion_react__WEBPACK_IMPORTED_MODULE_6__.u];
});
_c = Spinner;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Spinner);
var _c;
__webpack_require__.$Refresh$.register(_c, "Spinner");

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

/***/ "../../streamlit/frontend/src/components/elements/Spinner/index.tsx":
/*!**************************************************************************!*\
  !*** ../../streamlit/frontend/src/components/elements/Spinner/index.tsx ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _Spinner__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _Spinner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Spinner */ "../../streamlit/frontend/src/components/elements/Spinner/Spinner.tsx");
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

/***/ "../../streamlit/frontend/src/components/elements/Spinner/styled-components.ts":
/*!*************************************************************************************!*\
  !*** ../../streamlit/frontend/src/components/elements/Spinner/styled-components.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyledSpinnerContainer": () => (/* binding */ StyledSpinnerContainer),
/* harmony export */   "ThemedStyledSpinner": () => (/* binding */ ThemedStyledSpinner)
/* harmony export */ });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled/base */ "../../node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js");
/* harmony import */ var baseui_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! baseui/spinner */ "../../node_modules/baseui/esm/spinner/styled-components.js");
/* harmony import */ var _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/is-prop-valid */ "../../node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js");
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



const ThemedStyledSpinner = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])(baseui_spinner__WEBPACK_IMPORTED_MODULE_2__.StyledSpinner,  false ? 0 : {
  shouldForwardProp: _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_1__["default"],
  target: "e17lx80j1",
  label: "ThemedStyledSpinner"
})(_ref => {
  let {
    theme,
    $usingCustomTheme
  } = _ref;
  return {
    marginTop: theme.spacing.none,
    marginBottom: theme.spacing.none,
    marginRight: theme.spacing.none,
    marginLeft: theme.spacing.none,
    borderColor: theme.colors.fadedText10,
    borderTopColor: $usingCustomTheme ? theme.colors.primary : theme.colors.blue70,
    flexGrow: 0,
    flexShrink: 0
  };
},  false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3N0bGl0ZS9zdGxpdGUvc3RyZWFtbGl0L2Zyb250ZW5kL3NyYy9jb21wb25lbnRzL2VsZW1lbnRzL1NwaW5uZXIvc3R5bGVkLWNvbXBvbmVudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0JtQyIsImZpbGUiOiIvaG9tZS9ydW5uZXIvd29yay9zdGxpdGUvc3RsaXRlL3N0cmVhbWxpdC9mcm9udGVuZC9zcmMvY29tcG9uZW50cy9lbGVtZW50cy9TcGlubmVyL3N0eWxlZC1jb21wb25lbnRzLnRzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIFN0cmVhbWxpdCBJbmMuICgyMDE4LTIwMjIpIFNub3dmbGFrZSBJbmMuICgyMDIyKVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIlxuaW1wb3J0IHsgU3Bpbm5lciB9IGZyb20gXCJiYXNldWkvc3Bpbm5lclwiXG5pbXBvcnQgaXNQcm9wVmFsaWQgZnJvbSBcIkBlbW90aW9uL2lzLXByb3AtdmFsaWRcIlxuXG5leHBvcnQgY29uc3QgVGhlbWVkU3R5bGVkU3Bpbm5lciA9IHN0eWxlZChTcGlubmVyLCB7XG4gIHNob3VsZEZvcndhcmRQcm9wOiBpc1Byb3BWYWxpZCxcbn0pKCh7IHRoZW1lLCAkdXNpbmdDdXN0b21UaGVtZSB9KSA9PiB7XG4gIHJldHVybiB7XG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nLm5vbmUsXG4gICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nLm5vbmUsXG4gICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcubm9uZSxcbiAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nLm5vbmUsXG4gICAgYm9yZGVyQ29sb3I6IHRoZW1lLmNvbG9ycy5mYWRlZFRleHQxMCxcbiAgICBib3JkZXJUb3BDb2xvcjogJHVzaW5nQ3VzdG9tVGhlbWVcbiAgICAgID8gdGhlbWUuY29sb3JzLnByaW1hcnlcbiAgICAgIDogdGhlbWUuY29sb3JzLmJsdWU3MCxcbiAgICBmbGV4R3JvdzogMCxcbiAgICBmbGV4U2hyaW5rOiAwLFxuICB9XG59KVxuXG5leHBvcnQgY29uc3QgU3R5bGVkU3Bpbm5lckNvbnRhaW5lciA9IHN0eWxlZC5kaXYoKHsgdGhlbWUgfSkgPT4gKHtcbiAgZGlzcGxheTogXCJmbGV4XCIsXG4gIGdhcDogdGhlbWUuc3BhY2luZy5sZyxcbiAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgd2lkdGg6IFwiMTAwJVwiLFxufSkpXG4iXX0= */");
const StyledSpinnerContainer = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div",  false ? 0 : {
  target: "e17lx80j0",
  label: "StyledSpinnerContainer"
})(_ref2 => {
  let {
    theme
  } = _ref2;
  return {
    display: "flex",
    gap: theme.spacing.lg,
    alignItems: "center",
    width: "100%"
  };
},  false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3N0bGl0ZS9zdGxpdGUvc3RyZWFtbGl0L2Zyb250ZW5kL3NyYy9jb21wb25lbnRzL2VsZW1lbnRzL1NwaW5uZXIvc3R5bGVkLWNvbXBvbmVudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUNzQyIsImZpbGUiOiIvaG9tZS9ydW5uZXIvd29yay9zdGxpdGUvc3RsaXRlL3N0cmVhbWxpdC9mcm9udGVuZC9zcmMvY29tcG9uZW50cy9lbGVtZW50cy9TcGlubmVyL3N0eWxlZC1jb21wb25lbnRzLnRzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIFN0cmVhbWxpdCBJbmMuICgyMDE4LTIwMjIpIFNub3dmbGFrZSBJbmMuICgyMDIyKVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIlxuaW1wb3J0IHsgU3Bpbm5lciB9IGZyb20gXCJiYXNldWkvc3Bpbm5lclwiXG5pbXBvcnQgaXNQcm9wVmFsaWQgZnJvbSBcIkBlbW90aW9uL2lzLXByb3AtdmFsaWRcIlxuXG5leHBvcnQgY29uc3QgVGhlbWVkU3R5bGVkU3Bpbm5lciA9IHN0eWxlZChTcGlubmVyLCB7XG4gIHNob3VsZEZvcndhcmRQcm9wOiBpc1Byb3BWYWxpZCxcbn0pKCh7IHRoZW1lLCAkdXNpbmdDdXN0b21UaGVtZSB9KSA9PiB7XG4gIHJldHVybiB7XG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nLm5vbmUsXG4gICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nLm5vbmUsXG4gICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcubm9uZSxcbiAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nLm5vbmUsXG4gICAgYm9yZGVyQ29sb3I6IHRoZW1lLmNvbG9ycy5mYWRlZFRleHQxMCxcbiAgICBib3JkZXJUb3BDb2xvcjogJHVzaW5nQ3VzdG9tVGhlbWVcbiAgICAgID8gdGhlbWUuY29sb3JzLnByaW1hcnlcbiAgICAgIDogdGhlbWUuY29sb3JzLmJsdWU3MCxcbiAgICBmbGV4R3JvdzogMCxcbiAgICBmbGV4U2hyaW5rOiAwLFxuICB9XG59KVxuXG5leHBvcnQgY29uc3QgU3R5bGVkU3Bpbm5lckNvbnRhaW5lciA9IHN0eWxlZC5kaXYoKHsgdGhlbWUgfSkgPT4gKHtcbiAgZGlzcGxheTogXCJmbGV4XCIsXG4gIGdhcDogdGhlbWUuc3BhY2luZy5sZyxcbiAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgd2lkdGg6IFwiMTAwJVwiLFxufSkpXG4iXX0= */");

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

/***/ })

}]);
//# sourceMappingURL=streamlit_frontend_src_components_elements_Spinner_index_tsx.chunk.js.map
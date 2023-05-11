(globalThis["webpackChunk_stlite_mountable"] = globalThis["webpackChunk_stlite_mountable"] || []).push([["streamlit_frontend_src_components_elements_ImageList_index_tsx"],{

/***/ "../../streamlit/frontend/src/components/elements/ImageList/ImageList.tsx":
/*!********************************************************************************!*\
  !*** ../../streamlit/frontend/src/components/elements/ImageList/ImageList.tsx ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageList": () => (/* binding */ ImageList),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-html-parser */ "../../node_modules/react-html-parser/lib/index.js");
/* harmony import */ var _stlite_kernel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stlite/kernel */ "../kernel/dist/index.js");
/* harmony import */ var src_hocs_withFullScreenWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/hocs/withFullScreenWrapper */ "../../streamlit/frontend/src/hocs/withFullScreenWrapper/index.tsx");
/* harmony import */ var src_lib_UriUtil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/lib/UriUtil */ "../../streamlit/frontend/src/lib/UriUtil.ts");
/* harmony import */ var _styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styled-components */ "../../streamlit/frontend/src/components/elements/ImageList/styled-components.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");

var _jsxFileName = "/home/runner/work/stlite/stlite/streamlit/frontend/src/components/elements/ImageList/ImageList.tsx",
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








var WidthBehavior;
/**
 * Functional element for a horizontal list of images.
 */
(function (WidthBehavior) {
  WidthBehavior[WidthBehavior["OriginalWidth"] = -1] = "OriginalWidth";
  WidthBehavior[WidthBehavior["ColumnWidth"] = -2] = "ColumnWidth";
  WidthBehavior[WidthBehavior["AutoWidth"] = -3] = "AutoWidth";
})(WidthBehavior || (WidthBehavior = {}));
function ImageList(_ref) {
  _s();
  let {
    width,
    isFullScreen,
    element,
    height,
    endpoints
  } = _ref;
  const images = (0,_stlite_kernel__WEBPACK_IMPORTED_MODULE_2__.useStliteImageList)(element.imgs);

  // The width field in the proto sets the image width, but has special
  // cases for -1, -2, and -3.
  let containerWidth;
  const protoWidth = element.width;
  if (protoWidth === WidthBehavior.OriginalWidth || protoWidth === WidthBehavior.AutoWidth) {
    // Use the original image width.
    containerWidth = undefined;
  } else if (protoWidth === WidthBehavior.ColumnWidth) {
    // Use the column width
    containerWidth = width;
  } else if (protoWidth > 0) {
    // Set the image width explicitly.
    containerWidth = protoWidth;
  } else {
    throw Error(`Invalid image width: ${protoWidth}`);
  }
  const imgStyle = {};
  if (height && isFullScreen) {
    imgStyle.maxHeight = height;
    imgStyle["object-fit"] = "contain";
  } else {
    imgStyle.width = containerWidth;
    if (protoWidth === WidthBehavior.AutoWidth) {
      // Cap the image width, so it doesn't exceed the column width
      imgStyle.maxWidth = "100%";
    }
  }
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_styled_components__WEBPACK_IMPORTED_MODULE_5__.StyledImageList, {
    style: {
      width
    },
    children: images.map((iimage, idx) => {
      const image = iimage;
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_styled_components__WEBPACK_IMPORTED_MODULE_5__.StyledImageContainer, {
        "data-testid": "stImage",
        children: [image.markup ?
        // SVGs are received unsanitized
        (0,react_html_parser__WEBPACK_IMPORTED_MODULE_1__["default"])((0,src_lib_UriUtil__WEBPACK_IMPORTED_MODULE_4__.xssSanitizeSvg)(image.markup)) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("img", {
          style: imgStyle,
          src: endpoints.buildMediaURL(image.url),
          alt: idx.toString()
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 15
        }, this), image.caption && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_styled_components__WEBPACK_IMPORTED_MODULE_5__.StyledCaption, {
          "data-testid": "caption",
          style: imgStyle,
          children: ` ${image.caption} `
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 15
        }, this)]
      }, idx, true, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 11
      }, this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 98,
    columnNumber: 5
  }, this);
}
_s(ImageList, "cLF/IT2+qP1aw08IX357tzUorQE=", false, function () {
  return [_stlite_kernel__WEBPACK_IMPORTED_MODULE_2__.useStliteImageList];
});
_c = ImageList;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_c2 = (0,src_hocs_withFullScreenWrapper__WEBPACK_IMPORTED_MODULE_3__["default"])(ImageList));
var _c, _c2;
__webpack_require__.$Refresh$.register(_c, "ImageList");
__webpack_require__.$Refresh$.register(_c2, "%default%");

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

/***/ "../../streamlit/frontend/src/components/elements/ImageList/index.tsx":
/*!****************************************************************************!*\
  !*** ../../streamlit/frontend/src/components/elements/ImageList/index.tsx ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _ImageList__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _ImageList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ImageList */ "../../streamlit/frontend/src/components/elements/ImageList/ImageList.tsx");
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

/***/ "../../streamlit/frontend/src/components/elements/ImageList/styled-components.ts":
/*!***************************************************************************************!*\
  !*** ../../streamlit/frontend/src/components/elements/ImageList/styled-components.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyledCaption": () => (/* binding */ StyledCaption),
/* harmony export */   "StyledImageContainer": () => (/* binding */ StyledImageContainer),
/* harmony export */   "StyledImageList": () => (/* binding */ StyledImageList)
/* harmony export */ });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled/base */ "../../node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js");
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

const StyledImageList = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div",  false ? 0 : {
  target: "etr89bj2",
  label: "StyledImageList"
})(_ref => {
  let {
    theme
  } = _ref;
  return {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    // Not supported in Safari, but at least it's not a regression for those users:
    rowGap: theme.spacing.lg
  };
},  false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3N0bGl0ZS9zdGxpdGUvc3RyZWFtbGl0L2Zyb250ZW5kL3NyYy9jb21wb25lbnRzL2VsZW1lbnRzL0ltYWdlTGlzdC9zdHlsZWQtY29tcG9uZW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQitCIiwiZmlsZSI6Ii9ob21lL3J1bm5lci93b3JrL3N0bGl0ZS9zdGxpdGUvc3RyZWFtbGl0L2Zyb250ZW5kL3NyYy9jb21wb25lbnRzL2VsZW1lbnRzL0ltYWdlTGlzdC9zdHlsZWQtY29tcG9uZW50cy50cyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSBTdHJlYW1saXQgSW5jLiAoMjAxOC0yMDIyKSBTbm93Zmxha2UgSW5jLiAoMjAyMilcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCJcblxuZXhwb3J0IGNvbnN0IFN0eWxlZEltYWdlTGlzdCA9IHN0eWxlZC5kaXYoKHsgdGhlbWUgfSkgPT4gKHtcbiAgZGlzcGxheTogXCJmbGV4XCIsXG4gIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXG4gIGZsZXhXcmFwOiBcIndyYXBcIixcbiAgLy8gTm90IHN1cHBvcnRlZCBpbiBTYWZhcmksIGJ1dCBhdCBsZWFzdCBpdCdzIG5vdCBhIHJlZ3Jlc3Npb24gZm9yIHRob3NlIHVzZXJzOlxuICByb3dHYXA6IHRoZW1lLnNwYWNpbmcubGcsXG59KSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZEltYWdlQ29udGFpbmVyID0gc3R5bGVkLmRpdigoKSA9PiAoe1xuICBkaXNwbGF5OiBcImZsZXhcIixcbiAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgYWxpZ25JdGVtczogXCJzdHJldGNoXCIsXG4gIHdpZHRoOiBcImF1dG9cIixcbiAgZmxleEdyb3c6IDAsXG59KSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZENhcHRpb24gPSBzdHlsZWQuZGl2KCh7IHRoZW1lIH0pID0+ICh7XG4gIGZvbnRGYW1pbHk6IHRoZW1lLmdlbmVyaWNGb250cy5ib2R5Rm9udCxcbiAgZm9udFNpemU6IHRoZW1lLmZvbnRTaXplcy5zbSxcbiAgY29sb3I6IHRoZW1lLmNvbG9ycy5mYWRlZFRleHQ2MCxcbiAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcueHMsXG4gIHdvcmRXcmFwOiBcImJyZWFrLXdvcmRcIixcbiAgcGFkZGluZzogXCIwLjEyNXJlbVwiLFxufSkpXG4iXX0= */");
const StyledImageContainer = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div",  false ? 0 : {
  target: "etr89bj1",
  label: "StyledImageContainer"
})(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "stretch",
  width: "auto",
  flexGrow: 0
}),  false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3N0bGl0ZS9zdGxpdGUvc3RyZWFtbGl0L2Zyb250ZW5kL3NyYy9jb21wb25lbnRzL2VsZW1lbnRzL0ltYWdlTGlzdC9zdHlsZWQtY29tcG9uZW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQm9DIiwiZmlsZSI6Ii9ob21lL3J1bm5lci93b3JrL3N0bGl0ZS9zdGxpdGUvc3RyZWFtbGl0L2Zyb250ZW5kL3NyYy9jb21wb25lbnRzL2VsZW1lbnRzL0ltYWdlTGlzdC9zdHlsZWQtY29tcG9uZW50cy50cyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSBTdHJlYW1saXQgSW5jLiAoMjAxOC0yMDIyKSBTbm93Zmxha2UgSW5jLiAoMjAyMilcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCJcblxuZXhwb3J0IGNvbnN0IFN0eWxlZEltYWdlTGlzdCA9IHN0eWxlZC5kaXYoKHsgdGhlbWUgfSkgPT4gKHtcbiAgZGlzcGxheTogXCJmbGV4XCIsXG4gIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXG4gIGZsZXhXcmFwOiBcIndyYXBcIixcbiAgLy8gTm90IHN1cHBvcnRlZCBpbiBTYWZhcmksIGJ1dCBhdCBsZWFzdCBpdCdzIG5vdCBhIHJlZ3Jlc3Npb24gZm9yIHRob3NlIHVzZXJzOlxuICByb3dHYXA6IHRoZW1lLnNwYWNpbmcubGcsXG59KSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZEltYWdlQ29udGFpbmVyID0gc3R5bGVkLmRpdigoKSA9PiAoe1xuICBkaXNwbGF5OiBcImZsZXhcIixcbiAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgYWxpZ25JdGVtczogXCJzdHJldGNoXCIsXG4gIHdpZHRoOiBcImF1dG9cIixcbiAgZmxleEdyb3c6IDAsXG59KSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZENhcHRpb24gPSBzdHlsZWQuZGl2KCh7IHRoZW1lIH0pID0+ICh7XG4gIGZvbnRGYW1pbHk6IHRoZW1lLmdlbmVyaWNGb250cy5ib2R5Rm9udCxcbiAgZm9udFNpemU6IHRoZW1lLmZvbnRTaXplcy5zbSxcbiAgY29sb3I6IHRoZW1lLmNvbG9ycy5mYWRlZFRleHQ2MCxcbiAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcueHMsXG4gIHdvcmRXcmFwOiBcImJyZWFrLXdvcmRcIixcbiAgcGFkZGluZzogXCIwLjEyNXJlbVwiLFxufSkpXG4iXX0= */");
const StyledCaption = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div",  false ? 0 : {
  target: "etr89bj0",
  label: "StyledCaption"
})(_ref2 => {
  let {
    theme
  } = _ref2;
  return {
    fontFamily: theme.genericFonts.bodyFont,
    fontSize: theme.fontSizes.sm,
    color: theme.colors.fadedText60,
    textAlign: "center",
    marginTop: theme.spacing.xs,
    wordWrap: "break-word",
    padding: "0.125rem"
  };
},  false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3N0bGl0ZS9zdGxpdGUvc3RyZWFtbGl0L2Zyb250ZW5kL3NyYy9jb21wb25lbnRzL2VsZW1lbnRzL0ltYWdlTGlzdC9zdHlsZWQtY29tcG9uZW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQzZCIiwiZmlsZSI6Ii9ob21lL3J1bm5lci93b3JrL3N0bGl0ZS9zdGxpdGUvc3RyZWFtbGl0L2Zyb250ZW5kL3NyYy9jb21wb25lbnRzL2VsZW1lbnRzL0ltYWdlTGlzdC9zdHlsZWQtY29tcG9uZW50cy50cyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSBTdHJlYW1saXQgSW5jLiAoMjAxOC0yMDIyKSBTbm93Zmxha2UgSW5jLiAoMjAyMilcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCJcblxuZXhwb3J0IGNvbnN0IFN0eWxlZEltYWdlTGlzdCA9IHN0eWxlZC5kaXYoKHsgdGhlbWUgfSkgPT4gKHtcbiAgZGlzcGxheTogXCJmbGV4XCIsXG4gIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXG4gIGZsZXhXcmFwOiBcIndyYXBcIixcbiAgLy8gTm90IHN1cHBvcnRlZCBpbiBTYWZhcmksIGJ1dCBhdCBsZWFzdCBpdCdzIG5vdCBhIHJlZ3Jlc3Npb24gZm9yIHRob3NlIHVzZXJzOlxuICByb3dHYXA6IHRoZW1lLnNwYWNpbmcubGcsXG59KSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZEltYWdlQ29udGFpbmVyID0gc3R5bGVkLmRpdigoKSA9PiAoe1xuICBkaXNwbGF5OiBcImZsZXhcIixcbiAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgYWxpZ25JdGVtczogXCJzdHJldGNoXCIsXG4gIHdpZHRoOiBcImF1dG9cIixcbiAgZmxleEdyb3c6IDAsXG59KSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZENhcHRpb24gPSBzdHlsZWQuZGl2KCh7IHRoZW1lIH0pID0+ICh7XG4gIGZvbnRGYW1pbHk6IHRoZW1lLmdlbmVyaWNGb250cy5ib2R5Rm9udCxcbiAgZm9udFNpemU6IHRoZW1lLmZvbnRTaXplcy5zbSxcbiAgY29sb3I6IHRoZW1lLmNvbG9ycy5mYWRlZFRleHQ2MCxcbiAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcueHMsXG4gIHdvcmRXcmFwOiBcImJyZWFrLXdvcmRcIixcbiAgcGFkZGluZzogXCIwLjEyNXJlbVwiLFxufSkpXG4iXX0= */");

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

/***/ "?77f2":
/*!*********************************!*\
  !*** readable-stream (ignored) ***!
  \*********************************/
/***/ (() => {

/* (ignored) */

/***/ })

}]);
//# sourceMappingURL=streamlit_frontend_src_components_elements_ImageList_index_tsx.chunk.js.map
(globalThis["webpackChunk_stlite_mountable"] = globalThis["webpackChunk_stlite_mountable"] || []).push([["streamlit_frontend_src_components_elements_GraphVizChart_index_tsx"],{

/***/ "../../streamlit/frontend/src/components/elements/GraphVizChart/GraphVizChart.tsx":
/*!****************************************************************************************!*\
  !*** ../../streamlit/frontend/src/components/elements/GraphVizChart/GraphVizChart.tsx ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GraphVizChart": () => (/* binding */ GraphVizChart),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "../../node_modules/d3/src/index.js");
/* harmony import */ var d3_graphviz__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-graphviz */ "../../node_modules/d3-graphviz/build/d3-graphviz.js");
/* harmony import */ var d3_graphviz__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(d3_graphviz__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_lib_log__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/lib/log */ "../../streamlit/frontend/src/lib/log.ts");
/* harmony import */ var src_hocs_withFullScreenWrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/hocs/withFullScreenWrapper */ "../../streamlit/frontend/src/hocs/withFullScreenWrapper/index.tsx");
/* harmony import */ var _styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styled-components */ "../../streamlit/frontend/src/components/elements/GraphVizChart/styled-components.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");

var _jsxFileName = "/home/runner/work/stlite/stlite/streamlit/frontend/src/components/elements/GraphVizChart/GraphVizChart.tsx",
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








// Use d3Graphviz in a dummy expression so the library actually gets loaded.
// This way it registers itself in d3 as a plugin at this point.
const dummyGraphviz = d3_graphviz__WEBPACK_IMPORTED_MODULE_2__.graphviz;
dummyGraphviz; // eslint-disable-line @typescript-eslint/no-unused-expressions

function GraphVizChart(_ref) {
  _s();
  let {
    width: propWidth,
    element,
    height: propHeight
  } = _ref;
  const chartId = `graphviz-chart-${element.elementId}`;
  let originalHeight = 0;
  let originalWidth = 0;
  const getChartData = () => {
    return element.spec;
  };
  const getChartDimensions = () => {
    let chartWidth = originalWidth;
    let chartHeight = originalHeight;
    if (propHeight) {
      // fullscreen
      chartWidth = propWidth;
      chartHeight = propHeight;
    } else if (element.useContainerWidth) {
      chartWidth = propWidth;
    }
    return {
      chartWidth,
      chartHeight
    };
  };
  const updateChart = () => {
    try {
      // Layout and render the graph
      const graph = (0,d3_graphviz__WEBPACK_IMPORTED_MODULE_2__.graphviz)(`#${chartId}`).zoom(false).fit(true).scale(1).renderDot(getChartData()).on("end", () => {
        const node = (0,d3__WEBPACK_IMPORTED_MODULE_1__.select)(`#${chartId} > svg`).node();
        if (node) {
          originalHeight = node.getBBox().height;
          originalWidth = node.getBBox().width;
        }
      });
      const {
        chartHeight,
        chartWidth
      } = getChartDimensions();
      if (chartHeight > 0) {
        // Override or reset the graph height
        graph.height(chartHeight);
      }
      if (chartWidth > 0) {
        // Override or reset the graph width
        graph.width(chartWidth);
      }
    } catch (error) {
      (0,src_lib_log__WEBPACK_IMPORTED_MODULE_3__.logError)(error);
    }
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    updateChart();
  });
  const elementDimensions = getChartDimensions();
  const width = elementDimensions.chartWidth ? elementDimensions.chartWidth : propWidth;
  const height = elementDimensions.chartHeight ? elementDimensions.chartHeight : propHeight;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_styled_components__WEBPACK_IMPORTED_MODULE_5__.StyledGraphVizChart, {
    className: "graphviz stGraphVizChart",
    id: chartId,
    style: {
      width,
      height
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 112,
    columnNumber: 5
  }, this);
}
_s(GraphVizChart, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = GraphVizChart;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_c2 = (0,src_hocs_withFullScreenWrapper__WEBPACK_IMPORTED_MODULE_4__["default"])(GraphVizChart));
var _c, _c2;
__webpack_require__.$Refresh$.register(_c, "GraphVizChart");
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

/***/ "../../streamlit/frontend/src/components/elements/GraphVizChart/index.tsx":
/*!********************************************************************************!*\
  !*** ../../streamlit/frontend/src/components/elements/GraphVizChart/index.tsx ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _GraphVizChart__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _GraphVizChart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GraphVizChart */ "../../streamlit/frontend/src/components/elements/GraphVizChart/GraphVizChart.tsx");
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

/***/ "../../streamlit/frontend/src/components/elements/GraphVizChart/styled-components.ts":
/*!*******************************************************************************************!*\
  !*** ../../streamlit/frontend/src/components/elements/GraphVizChart/styled-components.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyledGraphVizChart": () => (/* binding */ StyledGraphVizChart)
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

const StyledGraphVizChart = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div",  false ? 0 : {
  target: "e1p558ko0",
  label: "StyledGraphVizChart"
})(_ref => {
  let {
    theme
  } = _ref;
  return {
    "& *": {
      fontFamily: theme.genericFonts.bodyFont,
      // Font sizes inside the SVG element are getting huge for some reason.
      // Hacking together a number by eyeballing it:
      // 12px in the SVG looks like 1rem outside, so 9.6px ~= 0.8rem.
      fontSize: "9.6px"
    },
    "& svg": {
      maxWidth: "100%"
    }
  };
},  false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3N0bGl0ZS9zdGxpdGUvc3RyZWFtbGl0L2Zyb250ZW5kL3NyYy9jb21wb25lbnRzL2VsZW1lbnRzL0dyYXBoVml6Q2hhcnQvc3R5bGVkLWNvbXBvbmVudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0JtQyIsImZpbGUiOiIvaG9tZS9ydW5uZXIvd29yay9zdGxpdGUvc3RsaXRlL3N0cmVhbWxpdC9mcm9udGVuZC9zcmMvY29tcG9uZW50cy9lbGVtZW50cy9HcmFwaFZpekNoYXJ0L3N0eWxlZC1jb21wb25lbnRzLnRzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIFN0cmVhbWxpdCBJbmMuICgyMDE4LTIwMjIpIFNub3dmbGFrZSBJbmMuICgyMDIyKVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIlxuXG5leHBvcnQgY29uc3QgU3R5bGVkR3JhcGhWaXpDaGFydCA9IHN0eWxlZC5kaXYoKHsgdGhlbWUgfSkgPT4gKHtcbiAgXCImICpcIjoge1xuICAgIGZvbnRGYW1pbHk6IHRoZW1lLmdlbmVyaWNGb250cy5ib2R5Rm9udCxcbiAgICAvLyBGb250IHNpemVzIGluc2lkZSB0aGUgU1ZHIGVsZW1lbnQgYXJlIGdldHRpbmcgaHVnZSBmb3Igc29tZSByZWFzb24uXG4gICAgLy8gSGFja2luZyB0b2dldGhlciBhIG51bWJlciBieSBleWViYWxsaW5nIGl0OlxuICAgIC8vIDEycHggaW4gdGhlIFNWRyBsb29rcyBsaWtlIDFyZW0gb3V0c2lkZSwgc28gOS42cHggfj0gMC44cmVtLlxuICAgIGZvbnRTaXplOiBcIjkuNnB4XCIsXG4gIH0sXG4gIFwiJiBzdmdcIjoge1xuICAgIG1heFdpZHRoOiBcIjEwMCVcIixcbiAgfSxcbn0pKVxuIl19 */");

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

/***/ "?6a95":
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?41ad":
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?5a98":
/*!**********************!*\
  !*** path (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

/***/ })

}]);
//# sourceMappingURL=streamlit_frontend_src_components_elements_GraphVizChart_index_tsx.chunk.js.map
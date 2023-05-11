(globalThis["webpackChunk_stlite_mountable"] = globalThis["webpackChunk_stlite_mountable"] || []).push([["streamlit_frontend_src_components_widgets_NumberInput_index_tsx"],{

/***/ "../../streamlit/frontend/src/components/shared/InputInstructions/InputInstructions.tsx":
/*!**********************************************************************************************!*\
  !*** ../../streamlit/frontend/src/components/shared/InputInstructions/InputInstructions.tsx ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var src_lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/lib/utils */ "../../streamlit/frontend/src/lib/utils.ts");
/* harmony import */ var src_components_widgets_BaseWidget__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/components/widgets/BaseWidget */ "../../streamlit/frontend/src/components/widgets/BaseWidget/index.tsx");
/* harmony import */ var _styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styled-components */ "../../streamlit/frontend/src/components/shared/InputInstructions/styled-components.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");

var _jsxFileName = "/home/runner/work/stlite/stlite/streamlit/frontend/src/components/shared/InputInstructions/InputInstructions.tsx",
  _this = undefined;
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






const InputInstructions = _ref => {
  let {
    dirty,
    value,
    maxLength,
    className,
    type = "single"
  } = _ref;
  const messages = [];
  const addMessage = function (text) {
    let shouldBlink = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    messages.push( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styled_components__WEBPACK_IMPORTED_MODULE_3__.StyledMessage, {
      includeDot: messages.length > 0,
      shouldBlink: shouldBlink,
      children: text
    }, messages.length, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, _this));
  };
  if (dirty) {
    if (type === "multiline") {
      if ((0,src_lib_utils__WEBPACK_IMPORTED_MODULE_1__.isFromMac)()) {
        addMessage("Press ⌘+Enter to apply");
      } else {
        addMessage("Press Ctrl+Enter to apply");
      }
    } else {
      addMessage("Press Enter to apply");
    }
  }
  if (maxLength) {
    addMessage(`${value.length}/${maxLength}`, dirty && value.length >= maxLength);
  }
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(src_components_widgets_BaseWidget__WEBPACK_IMPORTED_MODULE_2__.StyledWidgetInstructions, {
    className: className,
    children: messages
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 70,
    columnNumber: 5
  }, undefined);
};
_c = InputInstructions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InputInstructions);
var _c;
__webpack_require__.$Refresh$.register(_c, "InputInstructions");

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

/***/ "../../streamlit/frontend/src/components/shared/InputInstructions/styled-components.ts":
/*!*********************************************************************************************!*\
  !*** ../../streamlit/frontend/src/components/shared/InputInstructions/styled-components.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyledMessage": () => (/* binding */ StyledMessage)
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


const blink = _emotion_react__WEBPACK_IMPORTED_MODULE_1__.keyframes`
  50% {
    color: rgba(0, 0, 0, 0);
  }
`;
const StyledMessage = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("span",  false ? 0 : {
  target: "e1m4n6jn0",
  label: "StyledMessage"
})(_ref => {
  let {
    includeDot,
    shouldBlink,
    theme
  } = _ref;
  return {
    ...(includeDot ? {
      "&::before": {
        opacity: 1,
        content: '"•"',
        animation: "none",
        color: theme.colors.gray,
        margin: "0 5px"
      }
    } : {}),
    ...(shouldBlink ? {
      color: theme.colors.red,
      animationName: `${blink}`,
      animationDuration: "0.5s",
      animationIterationCount: 5
    } : {})
  };
},  false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3N0bGl0ZS9zdGxpdGUvc3RyZWFtbGl0L2Zyb250ZW5kL3NyYy9jb21wb25lbnRzL3NoYXJlZC9JbnB1dEluc3RydWN0aW9ucy9zdHlsZWQtY29tcG9uZW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4QjZCIiwiZmlsZSI6Ii9ob21lL3J1bm5lci93b3JrL3N0bGl0ZS9zdGxpdGUvc3RyZWFtbGl0L2Zyb250ZW5kL3NyYy9jb21wb25lbnRzL3NoYXJlZC9JbnB1dEluc3RydWN0aW9ucy9zdHlsZWQtY29tcG9uZW50cy50cyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSBTdHJlYW1saXQgSW5jLiAoMjAxOC0yMDIyKSBTbm93Zmxha2UgSW5jLiAoMjAyMilcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCJcbmltcG9ydCB7IGtleWZyYW1lcyB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiXG5cbmNvbnN0IGJsaW5rID0ga2V5ZnJhbWVzYFxuICA1MCUge1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xuICB9XG5gXG5cbmV4cG9ydCBpbnRlcmZhY2UgU3R5bGVkTWVzc2FnZVByb3BzIHtcbiAgaW5jbHVkZURvdDogYm9vbGVhblxuICBzaG91bGRCbGluazogYm9vbGVhblxufVxuXG5leHBvcnQgY29uc3QgU3R5bGVkTWVzc2FnZSA9IHN0eWxlZC5zcGFuPFN0eWxlZE1lc3NhZ2VQcm9wcz4oXG4gICh7IGluY2x1ZGVEb3QsIHNob3VsZEJsaW5rLCB0aGVtZSB9KSA9PiAoe1xuICAgIC4uLihpbmNsdWRlRG90XG4gICAgICA/IHtcbiAgICAgICAgICBcIiY6OmJlZm9yZVwiOiB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgY29udGVudDogJ1wi4oCiXCInLFxuICAgICAgICAgICAgYW5pbWF0aW9uOiBcIm5vbmVcIixcbiAgICAgICAgICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMuZ3JheSxcbiAgICAgICAgICAgIG1hcmdpbjogXCIwIDVweFwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICAgIDoge30pLFxuICAgIC4uLihzaG91bGRCbGlua1xuICAgICAgPyB7XG4gICAgICAgICAgY29sb3I6IHRoZW1lLmNvbG9ycy5yZWQsXG4gICAgICAgICAgYW5pbWF0aW9uTmFtZTogYCR7Ymxpbmt9YCxcbiAgICAgICAgICBhbmltYXRpb25EdXJhdGlvbjogXCIwLjVzXCIsXG4gICAgICAgICAgYW5pbWF0aW9uSXRlcmF0aW9uQ291bnQ6IDUsXG4gICAgICAgIH1cbiAgICAgIDoge30pLFxuICB9KVxuKVxuIl19 */");

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

/***/ "../../streamlit/frontend/src/components/widgets/NumberInput/NumberInput.tsx":
/*!***********************************************************************************!*\
  !*** ../../streamlit/frontend/src/components/widgets/NumberInput/NumberInput.tsx ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var _emotion_icons_open_iconic__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @emotion-icons/open-iconic */ "../../node_modules/@emotion-icons/open-iconic/Minus/Minus.esm.js");
/* harmony import */ var _emotion_icons_open_iconic__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @emotion-icons/open-iconic */ "../../node_modules/@emotion-icons/open-iconic/Plus/Plus.esm.js");
/* harmony import */ var sprintf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sprintf-js */ "../../node_modules/sprintf-js/src/sprintf.js");
/* harmony import */ var sprintf_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sprintf_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_components_widgets_Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/components/widgets/Form */ "../../streamlit/frontend/src/components/widgets/Form/index.tsx");
/* harmony import */ var src_lib_log__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/lib/log */ "../../streamlit/frontend/src/lib/log.ts");
/* harmony import */ var src_autogen_proto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/autogen/proto */ "../../streamlit/frontend/src/autogen/proto.js");
/* harmony import */ var src_components_shared_TooltipIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/components/shared/TooltipIcon */ "../../streamlit/frontend/src/components/shared/TooltipIcon/index.tsx");
/* harmony import */ var src_components_shared_Tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/components/shared/Tooltip */ "../../streamlit/frontend/src/components/shared/Tooltip/index.tsx");
/* harmony import */ var src_components_shared_Icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/components/shared/Icon */ "../../streamlit/frontend/src/components/shared/Icon/index.tsx");
/* harmony import */ var baseui_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! baseui/input */ "../../node_modules/baseui/esm/input/input.js");
/* harmony import */ var src_components_shared_InputInstructions_InputInstructions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/components/shared/InputInstructions/InputInstructions */ "../../streamlit/frontend/src/components/shared/InputInstructions/InputInstructions.tsx");
/* harmony import */ var src_components_widgets_BaseWidget__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/components/widgets/BaseWidget */ "../../streamlit/frontend/src/components/widgets/BaseWidget/index.tsx");
/* harmony import */ var src_lib_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/lib/utils */ "../../streamlit/frontend/src/lib/utils.ts");
/* harmony import */ var _styled_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./styled-components */ "../../streamlit/frontend/src/components/widgets/NumberInput/styled-components.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");

var _jsxFileName = "/home/runner/work/stlite/stlite/streamlit/frontend/src/components/widgets/NumberInput/NumberInput.tsx";
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
















class NumberInput extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor(props) {
    super(props);
    this.formClearHelper = new src_components_widgets_Form__WEBPACK_IMPORTED_MODULE_2__.FormClearHelper();
    this.inputRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createRef();
    this.formatValue = value => {
      const format = getNonEmptyString(this.props.element.format);
      if (format == null) {
        return value.toString();
      }
      try {
        return (0,sprintf_js__WEBPACK_IMPORTED_MODULE_1__.sprintf)(format, value);
      } catch (e) {
        // Don't explode if we have a malformed format string.
        (0,src_lib_log__WEBPACK_IMPORTED_MODULE_3__.logWarning)(`Error in sprintf(${format}, ${value}): ${e}`);
        return String(value);
      }
    };
    this.isIntData = () => {
      return this.props.element.dataType === src_autogen_proto__WEBPACK_IMPORTED_MODULE_4__.NumberInput.DataType.INT;
    };
    this.getMin = () => {
      return this.props.element.hasMin ? this.props.element.min : -Infinity;
    };
    this.getMax = () => {
      return this.props.element.hasMax ? this.props.element.max : +Infinity;
    };
    this.getStep = () => {
      const {
        step
      } = this.props.element;
      if (step) {
        return step;
      }
      if (this.isIntData()) {
        return 1;
      }
      return 0.01;
    };
    this.commitWidgetValue = source => {
      const {
        value
      } = this.state;
      const {
        element,
        widgetMgr
      } = this.props;
      const data = this.props.element;
      const min = this.getMin();
      const max = this.getMax();
      if (min > value || value > max) {
        const node = this.inputRef.current;
        if (node) {
          node.reportValidity();
        }
      } else {
        const valueToBeSaved = value || value === 0 ? value : data.default;
        if (this.isIntData()) {
          widgetMgr.setIntValue(element, valueToBeSaved, source);
        } else {
          widgetMgr.setDoubleValue(element, valueToBeSaved, source);
        }
        this.setState({
          dirty: false,
          value: valueToBeSaved,
          formattedValue: this.formatValue(valueToBeSaved)
        });
      }
    };
    this.onFormCleared = () => {
      this.setState((_, prevProps) => {
        return {
          value: prevProps.element.default
        };
      }, () => this.commitWidgetValue({
        fromUi: true
      }));
    };
    this.onBlur = () => {
      if (this.state.dirty) {
        this.commitWidgetValue({
          fromUi: true
        });
      }
      this.setState({
        isFocused: false
      });
    };
    this.onFocus = () => {
      this.setState({
        isFocused: true
      });
    };
    this.onChange = e => {
      const {
        value
      } = e.target;
      let numValue;
      if (this.isIntData()) {
        numValue = parseInt(value, 10);
      } else {
        numValue = parseFloat(value);
      }
      this.setState({
        dirty: true,
        value: numValue,
        formattedValue: value
      });
    };
    this.onKeyDown = e => {
      const {
        key
      } = e;
      switch (key) {
        case "ArrowUp":
          e.preventDefault();
          this.modifyValueUsingStep("increment")();
          break;
        case "ArrowDown":
          e.preventDefault();
          this.modifyValueUsingStep("decrement")();
          break;
        default: // Do nothing
      }
    };
    this.onKeyPress = e => {
      if (e.key === "Enter" && this.state.dirty) {
        this.commitWidgetValue({
          fromUi: true
        });
      }
    };
    this.modifyValueUsingStep = modifier => () => {
      const {
        value
      } = this.state;
      const step = this.getStep();
      switch (modifier) {
        case "increment":
          if (this.canIncrement) {
            this.setState({
              dirty: true,
              value: value + step
            }, () => {
              this.commitWidgetValue({
                fromUi: true
              });
            });
          }
          break;
        case "decrement":
          if (this.canDecrement) {
            this.setState({
              dirty: true,
              value: value - step
            }, () => {
              this.commitWidgetValue({
                fromUi: true
              });
            });
          }
          break;
        default: // Do nothing
      }
    };
    this.state = {
      dirty: false,
      value: this.initialValue,
      formattedValue: this.formatValue(this.initialValue),
      isFocused: false
    };
  }
  get initialValue() {
    // If WidgetStateManager knew a value for this widget, initialize to that.
    // Otherwise, use the default value from the widget protobuf
    const storedValue = this.isIntData() ? this.props.widgetMgr.getIntValue(this.props.element) : this.props.widgetMgr.getDoubleValue(this.props.element);
    return storedValue !== undefined ? storedValue : this.props.element.default;
  }
  componentDidMount() {
    if (this.props.element.setValue) {
      this.updateFromProtobuf();
    } else {
      this.commitWidgetValue({
        fromUi: false
      });
    }
  }
  componentDidUpdate() {
    this.maybeUpdateFromProtobuf();
  }
  componentWillUnmount() {
    this.formClearHelper.disconnect();
  }
  maybeUpdateFromProtobuf() {
    const {
      setValue
    } = this.props.element;
    if (setValue) {
      this.updateFromProtobuf();
    }
  }
  updateFromProtobuf() {
    const {
      value
    } = this.props.element;
    this.props.element.setValue = false;
    this.setState({
      value,
      formattedValue: this.formatValue(value)
    }, () => {
      this.commitWidgetValue({
        fromUi: false
      });
    });
  }
  /** True if the input's current value can be decremented by its step. */
  get canDecrement() {
    return this.state.value - this.getStep() >= this.getMin();
  }

  /** True if the input's current value can be incremented by its step. */
  get canIncrement() {
    return this.state.value + this.getStep() <= this.getMax();
  }
  render() {
    var _element$labelVisibil;
    const {
      element,
      width,
      disabled,
      widgetMgr
    } = this.props;
    const {
      formattedValue,
      dirty,
      isFocused
    } = this.state;
    const style = {
      width
    };
    const disableDecrement = !this.canDecrement || disabled;
    const disableIncrement = !this.canIncrement || disabled;

    // Manage our form-clear event handler.
    this.formClearHelper.manageFormClearListener(widgetMgr, element.formId, this.onFormCleared);
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("div", {
      className: "stNumberInput",
      style: style,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(src_components_widgets_BaseWidget__WEBPACK_IMPORTED_MODULE_9__.WidgetLabel, {
        label: element.label,
        disabled: disabled,
        labelVisibility: (0,src_lib_utils__WEBPACK_IMPORTED_MODULE_10__.labelVisibilityProtoValueToEnum)((_element$labelVisibil = element.labelVisibility) === null || _element$labelVisibil === void 0 ? void 0 : _element$labelVisibil.value),
        children: element.help && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(src_components_widgets_BaseWidget__WEBPACK_IMPORTED_MODULE_9__.StyledWidgetLabelHelp, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(src_components_shared_TooltipIcon__WEBPACK_IMPORTED_MODULE_5__["default"], {
            content: element.help,
            placement: src_components_shared_Tooltip__WEBPACK_IMPORTED_MODULE_6__.Placement.TOP_RIGHT
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 348,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 347,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 339,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_styled_components__WEBPACK_IMPORTED_MODULE_11__.StyledInputContainer, {
        className: isFocused ? "focused" : "",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(baseui_input__WEBPACK_IMPORTED_MODULE_13__["default"], {
          type: "number",
          inputRef: this.inputRef,
          value: formattedValue,
          onBlur: this.onBlur,
          onFocus: this.onFocus,
          onChange: this.onChange,
          onKeyPress: this.onKeyPress,
          onKeyDown: this.onKeyDown,
          disabled: disabled,
          "aria-label": element.label,
          overrides: {
            Input: {
              props: {
                step: this.getStep(),
                min: this.getMin(),
                max: this.getMax()
              },
              style: {
                lineHeight: "1.4",
                // Baseweb requires long-hand props, short-hand leads to weird bugs & warnings.
                paddingRight: ".5rem",
                paddingLeft: ".5rem",
                paddingBottom: ".5rem",
                paddingTop: ".5rem"
              }
            },
            InputContainer: {
              style: () => ({
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0
              })
            },
            Root: {
              style: () => ({
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
                // Baseweb requires long-hand props, short-hand leads to weird bugs & warnings.
                borderLeftWidth: 0,
                borderRightWidth: 0,
                borderTopWidth: 0,
                borderBottomWidth: 0
              })
            }
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 356,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_styled_components__WEBPACK_IMPORTED_MODULE_11__.StyledInputControls, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_styled_components__WEBPACK_IMPORTED_MODULE_11__.StyledInputControl, {
            className: "step-down",
            onClick: this.modifyValueUsingStep("decrement"),
            disabled: disableDecrement,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(src_components_shared_Icon__WEBPACK_IMPORTED_MODULE_7__["default"], {
              content: _emotion_icons_open_iconic__WEBPACK_IMPORTED_MODULE_14__.Minus,
              size: "xs",
              color: this.canDecrement ? "inherit" : "disabled"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 408,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 403,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_styled_components__WEBPACK_IMPORTED_MODULE_11__.StyledInputControl, {
            className: "step-up",
            onClick: this.modifyValueUsingStep("increment"),
            disabled: disableIncrement,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(src_components_shared_Icon__WEBPACK_IMPORTED_MODULE_7__["default"], {
              content: _emotion_icons_open_iconic__WEBPACK_IMPORTED_MODULE_15__.Plus,
              size: "xs",
              color: this.canIncrement ? "inherit" : "disabled"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 419,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 414,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 402,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 355,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_styled_components__WEBPACK_IMPORTED_MODULE_11__.StyledInstructionsContainer, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(src_components_shared_InputInstructions_InputInstructions__WEBPACK_IMPORTED_MODULE_8__["default"], {
          dirty: dirty,
          value: formattedValue,
          className: "input-instructions"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 428,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 427,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 338,
      columnNumber: 7
    }, this);
  }
}

/**
 * Return a string property from an element. If the string is
 * null or empty, return undefined instead.
 */
function getNonEmptyString(value) {
  return value == null || value === "" ? undefined : value;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NumberInput);

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

/***/ "../../streamlit/frontend/src/components/widgets/NumberInput/index.tsx":
/*!*****************************************************************************!*\
  !*** ../../streamlit/frontend/src/components/widgets/NumberInput/index.tsx ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _NumberInput__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _NumberInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NumberInput */ "../../streamlit/frontend/src/components/widgets/NumberInput/NumberInput.tsx");
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

/***/ "../../streamlit/frontend/src/components/widgets/NumberInput/styled-components.ts":
/*!****************************************************************************************!*\
  !*** ../../streamlit/frontend/src/components/widgets/NumberInput/styled-components.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyledInputContainer": () => (/* binding */ StyledInputContainer),
/* harmony export */   "StyledInputControl": () => (/* binding */ StyledInputControl),
/* harmony export */   "StyledInputControls": () => (/* binding */ StyledInputControls),
/* harmony export */   "StyledInstructionsContainer": () => (/* binding */ StyledInstructionsContainer)
/* harmony export */ });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled/base */ "../../node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");


function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }
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

const CONTROLS_WIDTH = 32; // px

const StyledInputContainer = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div",  false ? 0 : {
  target: "e1jwn65y3",
  label: "StyledInputContainer"
})(_ref => {
  let {
    theme
  } = _ref;
  return {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center",
    // Mimic the baseweb's borders here, so we can apply the focus style
    // to the entire container and not only the input itself
    borderWidth: "1px",
    borderStyle: "solid",
    // Mimic the logic from createThemeOverrides.
    borderColor: theme.colors.widgetBorderColor || theme.colors.widgetBackgroundColor || theme.colors.bgColor,
    transitionDuration: "200ms",
    transitionProperty: "border",
    transitionTimingFunction: "cubic-bezier(0.2, 0.8, 0.4, 1)",
    borderRadius: theme.radii.md,
    overflow: "hidden",
    // Fix rounded corner being overlayed with corner of internal input.

    "&.focused": {
      borderColor: theme.colors.primary
    },
    input: {
      MozAppearance: "textfield",
      "&::-webkit-inner-spin-button, &::-webkit-outer-spin-button": {
        WebkitAppearance: "none",
        margin: theme.spacing.none
      }
    }
  };
},  false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3N0bGl0ZS9zdGxpdGUvc3RyZWFtbGl0L2Zyb250ZW5kL3NyYy9jb21wb25lbnRzL3dpZGdldHMvTnVtYmVySW5wdXQvc3R5bGVkLWNvbXBvbmVudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0JvQyIsImZpbGUiOiIvaG9tZS9ydW5uZXIvd29yay9zdGxpdGUvc3RsaXRlL3N0cmVhbWxpdC9mcm9udGVuZC9zcmMvY29tcG9uZW50cy93aWRnZXRzL051bWJlcklucHV0L3N0eWxlZC1jb21wb25lbnRzLnRzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIFN0cmVhbWxpdCBJbmMuICgyMDE4LTIwMjIpIFNub3dmbGFrZSBJbmMuICgyMDIyKVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIlxuXG5jb25zdCBDT05UUk9MU19XSURUSCA9IDMyIC8vIHB4XG5cbmV4cG9ydCBjb25zdCBTdHlsZWRJbnB1dENvbnRhaW5lciA9IHN0eWxlZC5kaXYoKHsgdGhlbWUgfSkgPT4gKHtcbiAgZGlzcGxheTogXCJmbGV4XCIsXG4gIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXG4gIGZsZXhXcmFwOiBcIm5vd3JhcFwiLFxuICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuXG4gIC8vIE1pbWljIHRoZSBiYXNld2ViJ3MgYm9yZGVycyBoZXJlLCBzbyB3ZSBjYW4gYXBwbHkgdGhlIGZvY3VzIHN0eWxlXG4gIC8vIHRvIHRoZSBlbnRpcmUgY29udGFpbmVyIGFuZCBub3Qgb25seSB0aGUgaW5wdXQgaXRzZWxmXG4gIGJvcmRlcldpZHRoOiBcIjFweFwiLFxuICBib3JkZXJTdHlsZTogXCJzb2xpZFwiLFxuICAvLyBNaW1pYyB0aGUgbG9naWMgZnJvbSBjcmVhdGVUaGVtZU92ZXJyaWRlcy5cbiAgYm9yZGVyQ29sb3I6XG4gICAgdGhlbWUuY29sb3JzLndpZGdldEJvcmRlckNvbG9yIHx8XG4gICAgdGhlbWUuY29sb3JzLndpZGdldEJhY2tncm91bmRDb2xvciB8fFxuICAgIHRoZW1lLmNvbG9ycy5iZ0NvbG9yLFxuICB0cmFuc2l0aW9uRHVyYXRpb246IFwiMjAwbXNcIixcbiAgdHJhbnNpdGlvblByb3BlcnR5OiBcImJvcmRlclwiLFxuICB0cmFuc2l0aW9uVGltaW5nRnVuY3Rpb246IFwiY3ViaWMtYmV6aWVyKDAuMiwgMC44LCAwLjQsIDEpXCIsXG4gIGJvcmRlclJhZGl1czogdGhlbWUucmFkaWkubWQsXG4gIG92ZXJmbG93OiBcImhpZGRlblwiLCAvLyBGaXggcm91bmRlZCBjb3JuZXIgYmVpbmcgb3ZlcmxheWVkIHdpdGggY29ybmVyIG9mIGludGVybmFsIGlucHV0LlxuXG4gIFwiJi5mb2N1c2VkXCI6IHtcbiAgICBib3JkZXJDb2xvcjogdGhlbWUuY29sb3JzLnByaW1hcnksXG4gIH0sXG5cbiAgaW5wdXQ6IHtcbiAgICBNb3pBcHBlYXJhbmNlOiBcInRleHRmaWVsZFwiLFxuICAgIFwiJjo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiwgJjo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvblwiOiB7XG4gICAgICBXZWJraXRBcHBlYXJhbmNlOiBcIm5vbmVcIixcbiAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZy5ub25lLFxuICAgIH0sXG4gIH0sXG59KSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZElucHV0Q29udHJvbHMgPSBzdHlsZWQuZGl2KHtcbiAgZGlzcGxheTogXCJmbGV4XCIsXG4gIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXG4gIGFsaWduU2VsZjogXCJzdHJldGNoXCIsXG59KVxuXG5leHBvcnQgY29uc3QgU3R5bGVkSW5wdXRDb250cm9sID0gc3R5bGVkLmJ1dHRvbigoeyB0aGVtZSB9KSA9PiAoe1xuICBtYXJnaW46IHRoZW1lLnNwYWNpbmcubm9uZSxcbiAgYm9yZGVyOiBcIm5vbmVcIixcbiAgaGVpZ2h0OiB0aGVtZS5zaXplcy5mdWxsLFxuICBkaXNwbGF5OiBcImZsZXhcIixcbiAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgd2lkdGg6IGAke0NPTlRST0xTX1dJRFRIfXB4YCxcbiAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gIGNvbG9yOiB0aGVtZS5jb2xvcnMuYm9keVRleHQsXG4gIHRyYW5zaXRpb246IFwiY29sb3IgMzAwbXMsIGJhY2tncm91bmRDb2xvciAzMDBtc1wiLFxuICAvLyBNaW1pYyB0aGUgbG9naWMgZnJvbSBjcmVhdGVUaGVtZU92ZXJyaWRlcy5cbiAgYmFja2dyb3VuZENvbG9yOlxuICAgIHRoZW1lLmNvbG9ycy53aWRnZXRCYWNrZ3JvdW5kQ29sb3IgfHwgdGhlbWUuY29sb3JzLnNlY29uZGFyeUJnLFxuICBcIiY6aG92ZXI6ZW5hYmxlZCwgJjpmb2N1czplbmFibGVkXCI6IHtcbiAgICBjb2xvcjogdGhlbWUuY29sb3JzLndoaXRlLFxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuY29sb3JzLnByaW1hcnksXG4gICAgdHJhbnNpdGlvbjogXCJub25lXCIsXG4gICAgb3V0bGluZTogXCJub25lXCIsXG4gIH0sXG4gIFwiJjphY3RpdmVcIjoge1xuICAgIG91dGxpbmU6IFwibm9uZVwiLFxuICAgIGJvcmRlcjogXCJub25lXCIsXG4gIH0sXG4gIFwiJjpsYXN0LW9mLXR5cGVcIjoge1xuICAgIGJvcmRlclRvcFJpZ2h0UmFkaXVzOiB0aGVtZS5yYWRpaS5tZCxcbiAgICBib3JkZXJCb3R0b21SaWdodFJhZGl1czogdGhlbWUucmFkaWkubWQsXG4gIH0sXG4gIFwiJjpkaXNhYmxlZFwiOiB7XG4gICAgY3Vyc29yOiBcIm5vdC1hbGxvd2VkXCIsXG4gICAgY29sb3I6IHRoZW1lLmNvbG9ycy5mYWRlZFRleHQ0MCxcbiAgfSxcbn0pKVxuXG5leHBvcnQgY29uc3QgU3R5bGVkSW5zdHJ1Y3Rpb25zQ29udGFpbmVyID0gc3R5bGVkLmRpdigoeyB0aGVtZSB9KSA9PiAoe1xuICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZy50d29YUyxcbiAgbGVmdDogMCxcbiAgcmlnaHQ6IGAke0NPTlRST0xTX1dJRFRIICogMn1weGAsXG59KSlcbiJdfQ== */");
const StyledInputControls = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div",  false ? 0 : {
  target: "e1jwn65y2",
  label: "StyledInputControls"
})( false ? 0 : {
  name: "76z9jo",
  styles: "display:flex;flex-direction:row;align-self:stretch",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3N0bGl0ZS9zdGxpdGUvc3RyZWFtbGl0L2Zyb250ZW5kL3NyYy9jb21wb25lbnRzL3dpZGdldHMvTnVtYmVySW5wdXQvc3R5bGVkLWNvbXBvbmVudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0RtQyIsImZpbGUiOiIvaG9tZS9ydW5uZXIvd29yay9zdGxpdGUvc3RsaXRlL3N0cmVhbWxpdC9mcm9udGVuZC9zcmMvY29tcG9uZW50cy93aWRnZXRzL051bWJlcklucHV0L3N0eWxlZC1jb21wb25lbnRzLnRzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIFN0cmVhbWxpdCBJbmMuICgyMDE4LTIwMjIpIFNub3dmbGFrZSBJbmMuICgyMDIyKVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIlxuXG5jb25zdCBDT05UUk9MU19XSURUSCA9IDMyIC8vIHB4XG5cbmV4cG9ydCBjb25zdCBTdHlsZWRJbnB1dENvbnRhaW5lciA9IHN0eWxlZC5kaXYoKHsgdGhlbWUgfSkgPT4gKHtcbiAgZGlzcGxheTogXCJmbGV4XCIsXG4gIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXG4gIGZsZXhXcmFwOiBcIm5vd3JhcFwiLFxuICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuXG4gIC8vIE1pbWljIHRoZSBiYXNld2ViJ3MgYm9yZGVycyBoZXJlLCBzbyB3ZSBjYW4gYXBwbHkgdGhlIGZvY3VzIHN0eWxlXG4gIC8vIHRvIHRoZSBlbnRpcmUgY29udGFpbmVyIGFuZCBub3Qgb25seSB0aGUgaW5wdXQgaXRzZWxmXG4gIGJvcmRlcldpZHRoOiBcIjFweFwiLFxuICBib3JkZXJTdHlsZTogXCJzb2xpZFwiLFxuICAvLyBNaW1pYyB0aGUgbG9naWMgZnJvbSBjcmVhdGVUaGVtZU92ZXJyaWRlcy5cbiAgYm9yZGVyQ29sb3I6XG4gICAgdGhlbWUuY29sb3JzLndpZGdldEJvcmRlckNvbG9yIHx8XG4gICAgdGhlbWUuY29sb3JzLndpZGdldEJhY2tncm91bmRDb2xvciB8fFxuICAgIHRoZW1lLmNvbG9ycy5iZ0NvbG9yLFxuICB0cmFuc2l0aW9uRHVyYXRpb246IFwiMjAwbXNcIixcbiAgdHJhbnNpdGlvblByb3BlcnR5OiBcImJvcmRlclwiLFxuICB0cmFuc2l0aW9uVGltaW5nRnVuY3Rpb246IFwiY3ViaWMtYmV6aWVyKDAuMiwgMC44LCAwLjQsIDEpXCIsXG4gIGJvcmRlclJhZGl1czogdGhlbWUucmFkaWkubWQsXG4gIG92ZXJmbG93OiBcImhpZGRlblwiLCAvLyBGaXggcm91bmRlZCBjb3JuZXIgYmVpbmcgb3ZlcmxheWVkIHdpdGggY29ybmVyIG9mIGludGVybmFsIGlucHV0LlxuXG4gIFwiJi5mb2N1c2VkXCI6IHtcbiAgICBib3JkZXJDb2xvcjogdGhlbWUuY29sb3JzLnByaW1hcnksXG4gIH0sXG5cbiAgaW5wdXQ6IHtcbiAgICBNb3pBcHBlYXJhbmNlOiBcInRleHRmaWVsZFwiLFxuICAgIFwiJjo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiwgJjo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvblwiOiB7XG4gICAgICBXZWJraXRBcHBlYXJhbmNlOiBcIm5vbmVcIixcbiAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZy5ub25lLFxuICAgIH0sXG4gIH0sXG59KSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZElucHV0Q29udHJvbHMgPSBzdHlsZWQuZGl2KHtcbiAgZGlzcGxheTogXCJmbGV4XCIsXG4gIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXG4gIGFsaWduU2VsZjogXCJzdHJldGNoXCIsXG59KVxuXG5leHBvcnQgY29uc3QgU3R5bGVkSW5wdXRDb250cm9sID0gc3R5bGVkLmJ1dHRvbigoeyB0aGVtZSB9KSA9PiAoe1xuICBtYXJnaW46IHRoZW1lLnNwYWNpbmcubm9uZSxcbiAgYm9yZGVyOiBcIm5vbmVcIixcbiAgaGVpZ2h0OiB0aGVtZS5zaXplcy5mdWxsLFxuICBkaXNwbGF5OiBcImZsZXhcIixcbiAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgd2lkdGg6IGAke0NPTlRST0xTX1dJRFRIfXB4YCxcbiAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gIGNvbG9yOiB0aGVtZS5jb2xvcnMuYm9keVRleHQsXG4gIHRyYW5zaXRpb246IFwiY29sb3IgMzAwbXMsIGJhY2tncm91bmRDb2xvciAzMDBtc1wiLFxuICAvLyBNaW1pYyB0aGUgbG9naWMgZnJvbSBjcmVhdGVUaGVtZU92ZXJyaWRlcy5cbiAgYmFja2dyb3VuZENvbG9yOlxuICAgIHRoZW1lLmNvbG9ycy53aWRnZXRCYWNrZ3JvdW5kQ29sb3IgfHwgdGhlbWUuY29sb3JzLnNlY29uZGFyeUJnLFxuICBcIiY6aG92ZXI6ZW5hYmxlZCwgJjpmb2N1czplbmFibGVkXCI6IHtcbiAgICBjb2xvcjogdGhlbWUuY29sb3JzLndoaXRlLFxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuY29sb3JzLnByaW1hcnksXG4gICAgdHJhbnNpdGlvbjogXCJub25lXCIsXG4gICAgb3V0bGluZTogXCJub25lXCIsXG4gIH0sXG4gIFwiJjphY3RpdmVcIjoge1xuICAgIG91dGxpbmU6IFwibm9uZVwiLFxuICAgIGJvcmRlcjogXCJub25lXCIsXG4gIH0sXG4gIFwiJjpsYXN0LW9mLXR5cGVcIjoge1xuICAgIGJvcmRlclRvcFJpZ2h0UmFkaXVzOiB0aGVtZS5yYWRpaS5tZCxcbiAgICBib3JkZXJCb3R0b21SaWdodFJhZGl1czogdGhlbWUucmFkaWkubWQsXG4gIH0sXG4gIFwiJjpkaXNhYmxlZFwiOiB7XG4gICAgY3Vyc29yOiBcIm5vdC1hbGxvd2VkXCIsXG4gICAgY29sb3I6IHRoZW1lLmNvbG9ycy5mYWRlZFRleHQ0MCxcbiAgfSxcbn0pKVxuXG5leHBvcnQgY29uc3QgU3R5bGVkSW5zdHJ1Y3Rpb25zQ29udGFpbmVyID0gc3R5bGVkLmRpdigoeyB0aGVtZSB9KSA9PiAoe1xuICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZy50d29YUyxcbiAgbGVmdDogMCxcbiAgcmlnaHQ6IGAke0NPTlRST0xTX1dJRFRIICogMn1weGAsXG59KSlcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});
const StyledInputControl = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("button",  false ? 0 : {
  target: "e1jwn65y1",
  label: "StyledInputControl"
})(_ref2 => {
  let {
    theme
  } = _ref2;
  return {
    margin: theme.spacing.none,
    border: "none",
    height: theme.sizes.full,
    display: "flex",
    alignItems: "center",
    width: `${CONTROLS_WIDTH}px`,
    justifyContent: "center",
    color: theme.colors.bodyText,
    transition: "color 300ms, backgroundColor 300ms",
    // Mimic the logic from createThemeOverrides.
    backgroundColor: theme.colors.widgetBackgroundColor || theme.colors.secondaryBg,
    "&:hover:enabled, &:focus:enabled": {
      color: theme.colors.white,
      backgroundColor: theme.colors.primary,
      transition: "none",
      outline: "none"
    },
    "&:active": {
      outline: "none",
      border: "none"
    },
    "&:last-of-type": {
      borderTopRightRadius: theme.radii.md,
      borderBottomRightRadius: theme.radii.md
    },
    "&:disabled": {
      cursor: "not-allowed",
      color: theme.colors.fadedText40
    }
  };
},  false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3N0bGl0ZS9zdGxpdGUvc3RyZWFtbGl0L2Zyb250ZW5kL3NyYy9jb21wb25lbnRzL3dpZGdldHMvTnVtYmVySW5wdXQvc3R5bGVkLWNvbXBvbmVudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNERrQyIsImZpbGUiOiIvaG9tZS9ydW5uZXIvd29yay9zdGxpdGUvc3RsaXRlL3N0cmVhbWxpdC9mcm9udGVuZC9zcmMvY29tcG9uZW50cy93aWRnZXRzL051bWJlcklucHV0L3N0eWxlZC1jb21wb25lbnRzLnRzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIFN0cmVhbWxpdCBJbmMuICgyMDE4LTIwMjIpIFNub3dmbGFrZSBJbmMuICgyMDIyKVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIlxuXG5jb25zdCBDT05UUk9MU19XSURUSCA9IDMyIC8vIHB4XG5cbmV4cG9ydCBjb25zdCBTdHlsZWRJbnB1dENvbnRhaW5lciA9IHN0eWxlZC5kaXYoKHsgdGhlbWUgfSkgPT4gKHtcbiAgZGlzcGxheTogXCJmbGV4XCIsXG4gIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXG4gIGZsZXhXcmFwOiBcIm5vd3JhcFwiLFxuICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuXG4gIC8vIE1pbWljIHRoZSBiYXNld2ViJ3MgYm9yZGVycyBoZXJlLCBzbyB3ZSBjYW4gYXBwbHkgdGhlIGZvY3VzIHN0eWxlXG4gIC8vIHRvIHRoZSBlbnRpcmUgY29udGFpbmVyIGFuZCBub3Qgb25seSB0aGUgaW5wdXQgaXRzZWxmXG4gIGJvcmRlcldpZHRoOiBcIjFweFwiLFxuICBib3JkZXJTdHlsZTogXCJzb2xpZFwiLFxuICAvLyBNaW1pYyB0aGUgbG9naWMgZnJvbSBjcmVhdGVUaGVtZU92ZXJyaWRlcy5cbiAgYm9yZGVyQ29sb3I6XG4gICAgdGhlbWUuY29sb3JzLndpZGdldEJvcmRlckNvbG9yIHx8XG4gICAgdGhlbWUuY29sb3JzLndpZGdldEJhY2tncm91bmRDb2xvciB8fFxuICAgIHRoZW1lLmNvbG9ycy5iZ0NvbG9yLFxuICB0cmFuc2l0aW9uRHVyYXRpb246IFwiMjAwbXNcIixcbiAgdHJhbnNpdGlvblByb3BlcnR5OiBcImJvcmRlclwiLFxuICB0cmFuc2l0aW9uVGltaW5nRnVuY3Rpb246IFwiY3ViaWMtYmV6aWVyKDAuMiwgMC44LCAwLjQsIDEpXCIsXG4gIGJvcmRlclJhZGl1czogdGhlbWUucmFkaWkubWQsXG4gIG92ZXJmbG93OiBcImhpZGRlblwiLCAvLyBGaXggcm91bmRlZCBjb3JuZXIgYmVpbmcgb3ZlcmxheWVkIHdpdGggY29ybmVyIG9mIGludGVybmFsIGlucHV0LlxuXG4gIFwiJi5mb2N1c2VkXCI6IHtcbiAgICBib3JkZXJDb2xvcjogdGhlbWUuY29sb3JzLnByaW1hcnksXG4gIH0sXG5cbiAgaW5wdXQ6IHtcbiAgICBNb3pBcHBlYXJhbmNlOiBcInRleHRmaWVsZFwiLFxuICAgIFwiJjo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiwgJjo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvblwiOiB7XG4gICAgICBXZWJraXRBcHBlYXJhbmNlOiBcIm5vbmVcIixcbiAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZy5ub25lLFxuICAgIH0sXG4gIH0sXG59KSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZElucHV0Q29udHJvbHMgPSBzdHlsZWQuZGl2KHtcbiAgZGlzcGxheTogXCJmbGV4XCIsXG4gIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXG4gIGFsaWduU2VsZjogXCJzdHJldGNoXCIsXG59KVxuXG5leHBvcnQgY29uc3QgU3R5bGVkSW5wdXRDb250cm9sID0gc3R5bGVkLmJ1dHRvbigoeyB0aGVtZSB9KSA9PiAoe1xuICBtYXJnaW46IHRoZW1lLnNwYWNpbmcubm9uZSxcbiAgYm9yZGVyOiBcIm5vbmVcIixcbiAgaGVpZ2h0OiB0aGVtZS5zaXplcy5mdWxsLFxuICBkaXNwbGF5OiBcImZsZXhcIixcbiAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgd2lkdGg6IGAke0NPTlRST0xTX1dJRFRIfXB4YCxcbiAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gIGNvbG9yOiB0aGVtZS5jb2xvcnMuYm9keVRleHQsXG4gIHRyYW5zaXRpb246IFwiY29sb3IgMzAwbXMsIGJhY2tncm91bmRDb2xvciAzMDBtc1wiLFxuICAvLyBNaW1pYyB0aGUgbG9naWMgZnJvbSBjcmVhdGVUaGVtZU92ZXJyaWRlcy5cbiAgYmFja2dyb3VuZENvbG9yOlxuICAgIHRoZW1lLmNvbG9ycy53aWRnZXRCYWNrZ3JvdW5kQ29sb3IgfHwgdGhlbWUuY29sb3JzLnNlY29uZGFyeUJnLFxuICBcIiY6aG92ZXI6ZW5hYmxlZCwgJjpmb2N1czplbmFibGVkXCI6IHtcbiAgICBjb2xvcjogdGhlbWUuY29sb3JzLndoaXRlLFxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuY29sb3JzLnByaW1hcnksXG4gICAgdHJhbnNpdGlvbjogXCJub25lXCIsXG4gICAgb3V0bGluZTogXCJub25lXCIsXG4gIH0sXG4gIFwiJjphY3RpdmVcIjoge1xuICAgIG91dGxpbmU6IFwibm9uZVwiLFxuICAgIGJvcmRlcjogXCJub25lXCIsXG4gIH0sXG4gIFwiJjpsYXN0LW9mLXR5cGVcIjoge1xuICAgIGJvcmRlclRvcFJpZ2h0UmFkaXVzOiB0aGVtZS5yYWRpaS5tZCxcbiAgICBib3JkZXJCb3R0b21SaWdodFJhZGl1czogdGhlbWUucmFkaWkubWQsXG4gIH0sXG4gIFwiJjpkaXNhYmxlZFwiOiB7XG4gICAgY3Vyc29yOiBcIm5vdC1hbGxvd2VkXCIsXG4gICAgY29sb3I6IHRoZW1lLmNvbG9ycy5mYWRlZFRleHQ0MCxcbiAgfSxcbn0pKVxuXG5leHBvcnQgY29uc3QgU3R5bGVkSW5zdHJ1Y3Rpb25zQ29udGFpbmVyID0gc3R5bGVkLmRpdigoeyB0aGVtZSB9KSA9PiAoe1xuICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZy50d29YUyxcbiAgbGVmdDogMCxcbiAgcmlnaHQ6IGAke0NPTlRST0xTX1dJRFRIICogMn1weGAsXG59KSlcbiJdfQ== */");
const StyledInstructionsContainer = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div",  false ? 0 : {
  target: "e1jwn65y0",
  label: "StyledInstructionsContainer"
})(_ref3 => {
  let {
    theme
  } = _ref3;
  return {
    position: "absolute",
    marginRight: theme.spacing.twoXS,
    left: 0,
    right: `${CONTROLS_WIDTH * 2}px`
  };
},  false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3N0bGl0ZS9zdGxpdGUvc3RyZWFtbGl0L2Zyb250ZW5kL3NyYy9jb21wb25lbnRzL3dpZGdldHMvTnVtYmVySW5wdXQvc3R5bGVkLWNvbXBvbmVudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkYyQyIsImZpbGUiOiIvaG9tZS9ydW5uZXIvd29yay9zdGxpdGUvc3RsaXRlL3N0cmVhbWxpdC9mcm9udGVuZC9zcmMvY29tcG9uZW50cy93aWRnZXRzL051bWJlcklucHV0L3N0eWxlZC1jb21wb25lbnRzLnRzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIFN0cmVhbWxpdCBJbmMuICgyMDE4LTIwMjIpIFNub3dmbGFrZSBJbmMuICgyMDIyKVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIlxuXG5jb25zdCBDT05UUk9MU19XSURUSCA9IDMyIC8vIHB4XG5cbmV4cG9ydCBjb25zdCBTdHlsZWRJbnB1dENvbnRhaW5lciA9IHN0eWxlZC5kaXYoKHsgdGhlbWUgfSkgPT4gKHtcbiAgZGlzcGxheTogXCJmbGV4XCIsXG4gIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXG4gIGZsZXhXcmFwOiBcIm5vd3JhcFwiLFxuICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuXG4gIC8vIE1pbWljIHRoZSBiYXNld2ViJ3MgYm9yZGVycyBoZXJlLCBzbyB3ZSBjYW4gYXBwbHkgdGhlIGZvY3VzIHN0eWxlXG4gIC8vIHRvIHRoZSBlbnRpcmUgY29udGFpbmVyIGFuZCBub3Qgb25seSB0aGUgaW5wdXQgaXRzZWxmXG4gIGJvcmRlcldpZHRoOiBcIjFweFwiLFxuICBib3JkZXJTdHlsZTogXCJzb2xpZFwiLFxuICAvLyBNaW1pYyB0aGUgbG9naWMgZnJvbSBjcmVhdGVUaGVtZU92ZXJyaWRlcy5cbiAgYm9yZGVyQ29sb3I6XG4gICAgdGhlbWUuY29sb3JzLndpZGdldEJvcmRlckNvbG9yIHx8XG4gICAgdGhlbWUuY29sb3JzLndpZGdldEJhY2tncm91bmRDb2xvciB8fFxuICAgIHRoZW1lLmNvbG9ycy5iZ0NvbG9yLFxuICB0cmFuc2l0aW9uRHVyYXRpb246IFwiMjAwbXNcIixcbiAgdHJhbnNpdGlvblByb3BlcnR5OiBcImJvcmRlclwiLFxuICB0cmFuc2l0aW9uVGltaW5nRnVuY3Rpb246IFwiY3ViaWMtYmV6aWVyKDAuMiwgMC44LCAwLjQsIDEpXCIsXG4gIGJvcmRlclJhZGl1czogdGhlbWUucmFkaWkubWQsXG4gIG92ZXJmbG93OiBcImhpZGRlblwiLCAvLyBGaXggcm91bmRlZCBjb3JuZXIgYmVpbmcgb3ZlcmxheWVkIHdpdGggY29ybmVyIG9mIGludGVybmFsIGlucHV0LlxuXG4gIFwiJi5mb2N1c2VkXCI6IHtcbiAgICBib3JkZXJDb2xvcjogdGhlbWUuY29sb3JzLnByaW1hcnksXG4gIH0sXG5cbiAgaW5wdXQ6IHtcbiAgICBNb3pBcHBlYXJhbmNlOiBcInRleHRmaWVsZFwiLFxuICAgIFwiJjo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiwgJjo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvblwiOiB7XG4gICAgICBXZWJraXRBcHBlYXJhbmNlOiBcIm5vbmVcIixcbiAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZy5ub25lLFxuICAgIH0sXG4gIH0sXG59KSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZElucHV0Q29udHJvbHMgPSBzdHlsZWQuZGl2KHtcbiAgZGlzcGxheTogXCJmbGV4XCIsXG4gIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXG4gIGFsaWduU2VsZjogXCJzdHJldGNoXCIsXG59KVxuXG5leHBvcnQgY29uc3QgU3R5bGVkSW5wdXRDb250cm9sID0gc3R5bGVkLmJ1dHRvbigoeyB0aGVtZSB9KSA9PiAoe1xuICBtYXJnaW46IHRoZW1lLnNwYWNpbmcubm9uZSxcbiAgYm9yZGVyOiBcIm5vbmVcIixcbiAgaGVpZ2h0OiB0aGVtZS5zaXplcy5mdWxsLFxuICBkaXNwbGF5OiBcImZsZXhcIixcbiAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgd2lkdGg6IGAke0NPTlRST0xTX1dJRFRIfXB4YCxcbiAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gIGNvbG9yOiB0aGVtZS5jb2xvcnMuYm9keVRleHQsXG4gIHRyYW5zaXRpb246IFwiY29sb3IgMzAwbXMsIGJhY2tncm91bmRDb2xvciAzMDBtc1wiLFxuICAvLyBNaW1pYyB0aGUgbG9naWMgZnJvbSBjcmVhdGVUaGVtZU92ZXJyaWRlcy5cbiAgYmFja2dyb3VuZENvbG9yOlxuICAgIHRoZW1lLmNvbG9ycy53aWRnZXRCYWNrZ3JvdW5kQ29sb3IgfHwgdGhlbWUuY29sb3JzLnNlY29uZGFyeUJnLFxuICBcIiY6aG92ZXI6ZW5hYmxlZCwgJjpmb2N1czplbmFibGVkXCI6IHtcbiAgICBjb2xvcjogdGhlbWUuY29sb3JzLndoaXRlLFxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuY29sb3JzLnByaW1hcnksXG4gICAgdHJhbnNpdGlvbjogXCJub25lXCIsXG4gICAgb3V0bGluZTogXCJub25lXCIsXG4gIH0sXG4gIFwiJjphY3RpdmVcIjoge1xuICAgIG91dGxpbmU6IFwibm9uZVwiLFxuICAgIGJvcmRlcjogXCJub25lXCIsXG4gIH0sXG4gIFwiJjpsYXN0LW9mLXR5cGVcIjoge1xuICAgIGJvcmRlclRvcFJpZ2h0UmFkaXVzOiB0aGVtZS5yYWRpaS5tZCxcbiAgICBib3JkZXJCb3R0b21SaWdodFJhZGl1czogdGhlbWUucmFkaWkubWQsXG4gIH0sXG4gIFwiJjpkaXNhYmxlZFwiOiB7XG4gICAgY3Vyc29yOiBcIm5vdC1hbGxvd2VkXCIsXG4gICAgY29sb3I6IHRoZW1lLmNvbG9ycy5mYWRlZFRleHQ0MCxcbiAgfSxcbn0pKVxuXG5leHBvcnQgY29uc3QgU3R5bGVkSW5zdHJ1Y3Rpb25zQ29udGFpbmVyID0gc3R5bGVkLmRpdigoeyB0aGVtZSB9KSA9PiAoe1xuICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZy50d29YUyxcbiAgbGVmdDogMCxcbiAgcmlnaHQ6IGAke0NPTlRST0xTX1dJRFRIICogMn1weGAsXG59KSlcbiJdfQ== */");

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

/***/ "../../node_modules/@emotion-icons/open-iconic/Minus/Minus.esm.js":
/*!************************************************************************!*\
  !*** ../../node_modules/@emotion-icons/open-iconic/Minus/Minus.esm.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Minus": () => (/* binding */ Minus),
/* harmony export */   "MinusDimensions": () => (/* binding */ MinusDimensions)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "../../node_modules/@emotion-icons/open-iconic/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var _emotion_icons_emotion_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion-icons/emotion-icon */ "../../node_modules/@emotion-icons/emotion-icon/index.esm.js");



var Minus = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(function (props, ref) {
  var attrs = {
    "fill": "currentColor",
    "xmlns": "http://www.w3.org/2000/svg"
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_emotion_icons_emotion_icon__WEBPACK_IMPORTED_MODULE_2__.EmotionIconBase, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    iconAttrs: attrs,
    iconVerticalAlign: "middle",
    iconViewBox: "0 0 8 8"
  }, props, {
    ref: ref
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("path", {
    d: "M0 3v2h8V3H0z"
  }));
});
Minus.displayName = 'Minus';
var MinusDimensions = {
  height: 8,
  width: 8
};

/***/ }),

/***/ "../../node_modules/@emotion-icons/open-iconic/Plus/Plus.esm.js":
/*!**********************************************************************!*\
  !*** ../../node_modules/@emotion-icons/open-iconic/Plus/Plus.esm.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Plus": () => (/* binding */ Plus),
/* harmony export */   "PlusDimensions": () => (/* binding */ PlusDimensions)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "../../node_modules/@emotion-icons/open-iconic/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var _emotion_icons_emotion_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion-icons/emotion-icon */ "../../node_modules/@emotion-icons/emotion-icon/index.esm.js");



var Plus = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(function (props, ref) {
  var attrs = {
    "fill": "currentColor",
    "xmlns": "http://www.w3.org/2000/svg"
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_emotion_icons_emotion_icon__WEBPACK_IMPORTED_MODULE_2__.EmotionIconBase, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    iconAttrs: attrs,
    iconVerticalAlign: "middle",
    iconViewBox: "0 0 8 8"
  }, props, {
    ref: ref
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("path", {
    d: "M3 0v3H0v2h3v3h2V5h3V3H5V0H3z"
  }));
});
Plus.displayName = 'Plus';
var PlusDimensions = {
  height: 8,
  width: 8
};

/***/ }),

/***/ "../../node_modules/sprintf-js/src/sprintf.js":
/*!****************************************************!*\
  !*** ../../node_modules/sprintf-js/src/sprintf.js ***!
  \****************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_RESULT__;/* global window, exports, define */

!function () {
  'use strict';

  var re = {
    not_string: /[^s]/,
    not_bool: /[^t]/,
    not_type: /[^T]/,
    not_primitive: /[^v]/,
    number: /[diefg]/,
    numeric_arg: /[bcdiefguxX]/,
    json: /[j]/,
    not_json: /[^j]/,
    text: /^[^\x25]+/,
    modulo: /^\x25{2}/,
    placeholder: /^\x25(?:([1-9]\d*)\$|\(([^)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijostTuvxX])/,
    key: /^([a-z_][a-z_\d]*)/i,
    key_access: /^\.([a-z_][a-z_\d]*)/i,
    index_access: /^\[(\d+)\]/,
    sign: /^[+-]/
  };
  function sprintf(key) {
    // `arguments` is not an array, but should be fine for this call
    return sprintf_format(sprintf_parse(key), arguments);
  }
  function vsprintf(fmt, argv) {
    return sprintf.apply(null, [fmt].concat(argv || []));
  }
  function sprintf_format(parse_tree, argv) {
    var cursor = 1,
      tree_length = parse_tree.length,
      arg,
      output = '',
      i,
      k,
      ph,
      pad,
      pad_character,
      pad_length,
      is_positive,
      sign;
    for (i = 0; i < tree_length; i++) {
      if (typeof parse_tree[i] === 'string') {
        output += parse_tree[i];
      } else if (typeof parse_tree[i] === 'object') {
        ph = parse_tree[i]; // convenience purposes only
        if (ph.keys) {
          // keyword argument
          arg = argv[cursor];
          for (k = 0; k < ph.keys.length; k++) {
            if (arg == undefined) {
              throw new Error(sprintf('[sprintf] Cannot access property "%s" of undefined value "%s"', ph.keys[k], ph.keys[k - 1]));
            }
            arg = arg[ph.keys[k]];
          }
        } else if (ph.param_no) {
          // positional argument (explicit)
          arg = argv[ph.param_no];
        } else {
          // positional argument (implicit)
          arg = argv[cursor++];
        }
        if (re.not_type.test(ph.type) && re.not_primitive.test(ph.type) && arg instanceof Function) {
          arg = arg();
        }
        if (re.numeric_arg.test(ph.type) && typeof arg !== 'number' && isNaN(arg)) {
          throw new TypeError(sprintf('[sprintf] expecting number but found %T', arg));
        }
        if (re.number.test(ph.type)) {
          is_positive = arg >= 0;
        }
        switch (ph.type) {
          case 'b':
            arg = parseInt(arg, 10).toString(2);
            break;
          case 'c':
            arg = String.fromCharCode(parseInt(arg, 10));
            break;
          case 'd':
          case 'i':
            arg = parseInt(arg, 10);
            break;
          case 'j':
            arg = JSON.stringify(arg, null, ph.width ? parseInt(ph.width) : 0);
            break;
          case 'e':
            arg = ph.precision ? parseFloat(arg).toExponential(ph.precision) : parseFloat(arg).toExponential();
            break;
          case 'f':
            arg = ph.precision ? parseFloat(arg).toFixed(ph.precision) : parseFloat(arg);
            break;
          case 'g':
            arg = ph.precision ? String(Number(arg.toPrecision(ph.precision))) : parseFloat(arg);
            break;
          case 'o':
            arg = (parseInt(arg, 10) >>> 0).toString(8);
            break;
          case 's':
            arg = String(arg);
            arg = ph.precision ? arg.substring(0, ph.precision) : arg;
            break;
          case 't':
            arg = String(!!arg);
            arg = ph.precision ? arg.substring(0, ph.precision) : arg;
            break;
          case 'T':
            arg = Object.prototype.toString.call(arg).slice(8, -1).toLowerCase();
            arg = ph.precision ? arg.substring(0, ph.precision) : arg;
            break;
          case 'u':
            arg = parseInt(arg, 10) >>> 0;
            break;
          case 'v':
            arg = arg.valueOf();
            arg = ph.precision ? arg.substring(0, ph.precision) : arg;
            break;
          case 'x':
            arg = (parseInt(arg, 10) >>> 0).toString(16);
            break;
          case 'X':
            arg = (parseInt(arg, 10) >>> 0).toString(16).toUpperCase();
            break;
        }
        if (re.json.test(ph.type)) {
          output += arg;
        } else {
          if (re.number.test(ph.type) && (!is_positive || ph.sign)) {
            sign = is_positive ? '+' : '-';
            arg = arg.toString().replace(re.sign, '');
          } else {
            sign = '';
          }
          pad_character = ph.pad_char ? ph.pad_char === '0' ? '0' : ph.pad_char.charAt(1) : ' ';
          pad_length = ph.width - (sign + arg).length;
          pad = ph.width ? pad_length > 0 ? pad_character.repeat(pad_length) : '' : '';
          output += ph.align ? sign + arg + pad : pad_character === '0' ? sign + pad + arg : pad + sign + arg;
        }
      }
    }
    return output;
  }
  var sprintf_cache = Object.create(null);
  function sprintf_parse(fmt) {
    if (sprintf_cache[fmt]) {
      return sprintf_cache[fmt];
    }
    var _fmt = fmt,
      match,
      parse_tree = [],
      arg_names = 0;
    while (_fmt) {
      if ((match = re.text.exec(_fmt)) !== null) {
        parse_tree.push(match[0]);
      } else if ((match = re.modulo.exec(_fmt)) !== null) {
        parse_tree.push('%');
      } else if ((match = re.placeholder.exec(_fmt)) !== null) {
        if (match[2]) {
          arg_names |= 1;
          var field_list = [],
            replacement_field = match[2],
            field_match = [];
          if ((field_match = re.key.exec(replacement_field)) !== null) {
            field_list.push(field_match[1]);
            while ((replacement_field = replacement_field.substring(field_match[0].length)) !== '') {
              if ((field_match = re.key_access.exec(replacement_field)) !== null) {
                field_list.push(field_match[1]);
              } else if ((field_match = re.index_access.exec(replacement_field)) !== null) {
                field_list.push(field_match[1]);
              } else {
                throw new SyntaxError('[sprintf] failed to parse named argument key');
              }
            }
          } else {
            throw new SyntaxError('[sprintf] failed to parse named argument key');
          }
          match[2] = field_list;
        } else {
          arg_names |= 2;
        }
        if (arg_names === 3) {
          throw new Error('[sprintf] mixing positional and named placeholders is not (yet) supported');
        }
        parse_tree.push({
          placeholder: match[0],
          param_no: match[1],
          keys: match[2],
          sign: match[3],
          pad_char: match[4],
          align: match[5],
          width: match[6],
          precision: match[7],
          type: match[8]
        });
      } else {
        throw new SyntaxError('[sprintf] unexpected placeholder');
      }
      _fmt = _fmt.substring(match[0].length);
    }
    return sprintf_cache[fmt] = parse_tree;
  }

  /**
   * export to either browser or node.js
   */
  /* eslint-disable quote-props */
  if (true) {
    exports.sprintf = sprintf;
    exports.vsprintf = vsprintf;
  }
  if (typeof window !== 'undefined') {
    window['sprintf'] = sprintf;
    window['vsprintf'] = vsprintf;
    if (true) {
      !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
        return {
          'sprintf': sprintf,
          'vsprintf': vsprintf
        };
      }).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
  }
  /* eslint-enable quote-props */
}(); // eslint-disable-line

/***/ })

}]);
//# sourceMappingURL=streamlit_frontend_src_components_widgets_NumberInput_index_tsx.chunk.js.map
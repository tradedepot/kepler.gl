'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rangeSlider = require('../../common/range-slider');

var _rangeSlider2 = _interopRequireDefault(_rangeSlider);

var _styledComponents = require('../../common/styled-components');

var _interactionUtils = require('../../../utils/interaction-utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright (c) 2019 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

function BrushConfigFactory() {
  var BrushConfig = function BrushConfig(_ref) {
    var config = _ref.config,
        _onChange = _ref.onChange;
    return _react2.default.createElement(
      _styledComponents.SidePanelSection,
      null,
      _react2.default.createElement(
        _styledComponents.PanelLabel,
        null,
        'Brush Radius (km)'
      ),
      _react2.default.createElement(_rangeSlider2.default, {
        range: _interactionUtils.BRUSH_CONFIG.range,
        value0: 0,
        value1: config.size || 10 / 2,
        step: 0.1,
        isRanged: false,
        onChange: function onChange(value) {
          return _onChange((0, _extends3.default)({}, config, { size: value[1] }));
        },
        inputTheme: 'secondary'
      })
    );
  };

  return BrushConfig;
}

exports.default = BrushConfigFactory;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvaW50ZXJhY3Rpb24tcGFuZWwvYnJ1c2gtY29uZmlnLmpzIl0sIm5hbWVzIjpbIkJydXNoQ29uZmlnRmFjdG9yeSIsIkJydXNoQ29uZmlnIiwiY29uZmlnIiwib25DaGFuZ2UiLCJCUlVTSF9DT05GSUciLCJyYW5nZSIsInNpemUiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQW9CQTs7OztBQUNBOzs7O0FBRUE7O0FBSUE7Ozs7QUEzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBV0EsU0FBU0Esa0JBQVQsR0FBOEI7QUFDNUIsTUFBTUMsY0FBYyxTQUFkQSxXQUFjO0FBQUEsUUFBRUMsTUFBRixRQUFFQSxNQUFGO0FBQUEsUUFBVUMsU0FBVixRQUFVQSxRQUFWO0FBQUEsV0FDbEI7QUFBQyx3Q0FBRDtBQUFBO0FBQ0U7QUFBQyxvQ0FBRDtBQUFBO0FBQUE7QUFBQSxPQURGO0FBRUUsb0NBQUMscUJBQUQ7QUFDRSxlQUFPQywrQkFBYUMsS0FEdEI7QUFFRSxnQkFBUSxDQUZWO0FBR0UsZ0JBQVFILE9BQU9JLElBQVAsSUFBZSxLQUFLLENBSDlCO0FBSUUsY0FBTSxHQUpSO0FBS0Usa0JBQVUsS0FMWjtBQU1FLGtCQUFVO0FBQUEsaUJBQVNILHFDQUFhRCxNQUFiLElBQXFCSSxNQUFNQyxNQUFNLENBQU4sQ0FBM0IsSUFBVDtBQUFBLFNBTlo7QUFPRSxvQkFBVztBQVBiO0FBRkYsS0FEa0I7QUFBQSxHQUFwQjs7QUFlQSxTQUFPTixXQUFQO0FBQ0Q7O2tCQUVjRCxrQiIsImZpbGUiOiJicnVzaC1jb25maWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMTkgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJhbmdlU2xpZGVyIGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL3JhbmdlLXNsaWRlcic7XG5cbmltcG9ydCB7XG4gIFBhbmVsTGFiZWwsXG4gIFNpZGVQYW5lbFNlY3Rpb25cbn0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHtCUlVTSF9DT05GSUd9IGZyb20gJ3V0aWxzL2ludGVyYWN0aW9uLXV0aWxzJztcblxuZnVuY3Rpb24gQnJ1c2hDb25maWdGYWN0b3J5KCkge1xuICBjb25zdCBCcnVzaENvbmZpZyA9ICh7Y29uZmlnLCBvbkNoYW5nZX0pID0+IChcbiAgICA8U2lkZVBhbmVsU2VjdGlvbj5cbiAgICAgIDxQYW5lbExhYmVsPkJydXNoIFJhZGl1cyAoa20pPC9QYW5lbExhYmVsPlxuICAgICAgPFJhbmdlU2xpZGVyXG4gICAgICAgIHJhbmdlPXtCUlVTSF9DT05GSUcucmFuZ2V9XG4gICAgICAgIHZhbHVlMD17MH1cbiAgICAgICAgdmFsdWUxPXtjb25maWcuc2l6ZSB8fCAxMCAvIDJ9XG4gICAgICAgIHN0ZXA9ezAuMX1cbiAgICAgICAgaXNSYW5nZWQ9e2ZhbHNlfVxuICAgICAgICBvbkNoYW5nZT17dmFsdWUgPT4gb25DaGFuZ2Uoey4uLmNvbmZpZywgc2l6ZTogdmFsdWVbMV19KX1cbiAgICAgICAgaW5wdXRUaGVtZT1cInNlY29uZGFyeVwiXG4gICAgICAvPlxuICAgIDwvU2lkZVBhbmVsU2VjdGlvbj5cbiAgKTtcblxuICByZXR1cm4gQnJ1c2hDb25maWc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJydXNoQ29uZmlnRmFjdG9yeTtcbiJdfQ==
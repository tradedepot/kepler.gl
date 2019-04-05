'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CollapseButtonFactory = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  z-index: 99;\n  height: 100%;\n  width: ', 'px;\n  display: flex;\n  transition: width 250ms;\n  position: absolute;\n  padding-top: ', 'px;\n  padding-right: ', 'px;\n  padding-bottom: ', 'px;\n  padding-left: ', 'px;\n'], ['\n  z-index: 99;\n  height: 100%;\n  width: ', 'px;\n  display: flex;\n  transition: width 250ms;\n  position: absolute;\n  padding-top: ', 'px;\n  padding-right: ', 'px;\n  padding-bottom: ', 'px;\n  padding-left: ', 'px;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n  transition: left 250ms, right 250ms;\n  left: ', 'px;\n  align-items: stretch;\n  flex-grow: 1;\n'], ['\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n  transition: left 250ms, right 250ms;\n  left: ', 'px;\n  align-items: stretch;\n  flex-grow: 1;\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  background-color: ', ';\n  border-radius: 1px;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n'], ['\n  background-color: ', ';\n  border-radius: 1px;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n    align-items: center;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n    justify-content: center;\n    background-color: ', ';\n    border-radius: 1px;\n    color: ', ';\n    display: flex;\n    height: 20px;\n    position: absolute;\n    right: -8px;\n    top: ', 'px;\n    width: 20px;\n\n    :hover {\n      cursor: pointer;\n      box-shadow: none;\n      background-color: ', ';\n    }\n  '], ['\n    align-items: center;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n    justify-content: center;\n    background-color: ', ';\n    border-radius: 1px;\n    color: ', ';\n    display: flex;\n    height: 20px;\n    position: absolute;\n    right: -8px;\n    top: ', 'px;\n    width: 20px;\n\n    :hover {\n      cursor: pointer;\n      box-shadow: none;\n      background-color: ', ';\n    }\n  ']); // Copyright (c) 2019 Uber Technologies, Inc.
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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _icons = require('../common/icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyledSidePanelContainer = _styledComponents2.default.div(_templateObject, function (props) {
  return props.width + 2 * props.theme.sidePanel.margin.left;
}, function (props) {
  return props.theme.sidePanel.margin.top;
}, function (props) {
  return props.theme.sidePanel.margin.right;
}, function (props) {
  return props.theme.sidePanel.margin.bottom;
}, function (props) {
  return props.theme.sidePanel.margin.left;
});

var SideBarContainer = _styledComponents2.default.div(_templateObject2, function (props) {
  return props.left;
});

var SideBarInner = _styledComponents2.default.div(_templateObject3, function (props) {
  return props.theme.sidePanelBg;
});

var CollapseButtonFactory = exports.CollapseButtonFactory = function CollapseButtonFactory() {
  return _styledComponents2.default.div(_templateObject4, function (props) {
    return props.theme.sideBarCloseBtnBgd;
  }, function (props) {
    return props.theme.sideBarCloseBtnColor;
  }, function (props) {
    return props.theme.sidePanel.margin.top;
  }, function (props) {
    return props.theme.sideBarCloseBtnBgdHover;
  });
};

SidebarFactory.deps = [CollapseButtonFactory];

function SidebarFactory(CollapseButton) {
  var _class, _temp2;

  return _temp2 = _class = function (_Component) {
    (0, _inherits3.default)(SideBar, _Component);

    function SideBar() {
      var _ref;

      var _temp, _this, _ret;

      (0, _classCallCheck3.default)(this, SideBar);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = SideBar.__proto__ || Object.getPrototypeOf(SideBar)).call.apply(_ref, [this].concat(args))), _this), _this._onOpenOrClose = function () {
        _this.props.onOpenOrClose({ isOpen: !_this.props.isOpen });
      }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(SideBar, [{
      key: 'render',
      value: function render() {
        var _props = this.props,
            isOpen = _props.isOpen,
            minifiedWidth = _props.minifiedWidth,
            width = _props.width;

        var horizontalOffset = isOpen ? 0 : minifiedWidth - width;

        return _react2.default.createElement(
          StyledSidePanelContainer,
          {
            width: isOpen ? width : 0,
            className: 'side-panel--container'
          },
          _react2.default.createElement(
            SideBarContainer,
            { className: 'side-bar', style: { width: width + 'px' },
              left: horizontalOffset },
            isOpen ? _react2.default.createElement(
              SideBarInner,
              { className: 'side-bar__inner' },
              this.props.children
            ) : null,
            _react2.default.createElement(
              CollapseButton,
              {
                className: 'side-bar__close',
                onClick: this._onOpenOrClose
              },
              _react2.default.createElement(_icons.ArrowRight, {
                height: '12px',
                style: { transform: 'rotate(' + (isOpen ? 180 : 0) + 'deg)' }
              })
            )
          )
        );
      }
    }]);
    return SideBar;
  }(_react.Component), _class.defaultProps = {
    width: 300,
    minifiedWidth: 0,
    isOpen: true,
    onOpenOrClose: function noop() {}
  }, _class.propTypes = {
    width: _propTypes2.default.number,
    isOpen: _propTypes2.default.bool,
    minifiedWidth: _propTypes2.default.number,
    onOpenOrClose: _propTypes2.default.func
  }, _temp2;
}

exports.default = SidebarFactory;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvc2lkZS1iYXIuanMiXSwibmFtZXMiOlsiU3R5bGVkU2lkZVBhbmVsQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwicHJvcHMiLCJ3aWR0aCIsInRoZW1lIiwic2lkZVBhbmVsIiwibWFyZ2luIiwibGVmdCIsInRvcCIsInJpZ2h0IiwiYm90dG9tIiwiU2lkZUJhckNvbnRhaW5lciIsIlNpZGVCYXJJbm5lciIsInNpZGVQYW5lbEJnIiwiQ29sbGFwc2VCdXR0b25GYWN0b3J5Iiwic2lkZUJhckNsb3NlQnRuQmdkIiwic2lkZUJhckNsb3NlQnRuQ29sb3IiLCJzaWRlQmFyQ2xvc2VCdG5CZ2RIb3ZlciIsIlNpZGViYXJGYWN0b3J5IiwiZGVwcyIsIkNvbGxhcHNlQnV0dG9uIiwiX29uT3Blbk9yQ2xvc2UiLCJvbk9wZW5PckNsb3NlIiwiaXNPcGVuIiwibWluaWZpZWRXaWR0aCIsImhvcml6b250YWxPZmZzZXQiLCJjaGlsZHJlbiIsInRyYW5zZm9ybSIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsIm5vb3AiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJudW1iZXIiLCJib29sIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3kyQkFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBLElBQU1BLDJCQUEyQkMsMkJBQU9DLEdBQWxDLGtCQUdLO0FBQUEsU0FBU0MsTUFBTUMsS0FBTixHQUFjLElBQUlELE1BQU1FLEtBQU4sQ0FBWUMsU0FBWixDQUFzQkMsTUFBdEIsQ0FBNkJDLElBQXhEO0FBQUEsQ0FITCxFQU9XO0FBQUEsU0FBU0wsTUFBTUUsS0FBTixDQUFZQyxTQUFaLENBQXNCQyxNQUF0QixDQUE2QkUsR0FBdEM7QUFBQSxDQVBYLEVBUWE7QUFBQSxTQUFTTixNQUFNRSxLQUFOLENBQVlDLFNBQVosQ0FBc0JDLE1BQXRCLENBQTZCRyxLQUF0QztBQUFBLENBUmIsRUFTYztBQUFBLFNBQVNQLE1BQU1FLEtBQU4sQ0FBWUMsU0FBWixDQUFzQkMsTUFBdEIsQ0FBNkJJLE1BQXRDO0FBQUEsQ0FUZCxFQVVZO0FBQUEsU0FBU1IsTUFBTUUsS0FBTixDQUFZQyxTQUFaLENBQXNCQyxNQUF0QixDQUE2QkMsSUFBdEM7QUFBQSxDQVZaLENBQU47O0FBYUEsSUFBTUksbUJBQW1CWCwyQkFBT0MsR0FBMUIsbUJBR0k7QUFBQSxTQUFTQyxNQUFNSyxJQUFmO0FBQUEsQ0FISixDQUFOOztBQVFBLElBQU1LLGVBQWVaLDJCQUFPQyxHQUF0QixtQkFDZ0I7QUFBQSxTQUFTQyxNQUFNRSxLQUFOLENBQVlTLFdBQXJCO0FBQUEsQ0FEaEIsQ0FBTjs7QUFRTyxJQUFNQyx3REFBd0IsU0FBeEJBLHFCQUF3QjtBQUFBLFNBQ25DZCwyQkFBT0MsR0FENEIsbUJBS2I7QUFBQSxXQUFTQyxNQUFNRSxLQUFOLENBQVlXLGtCQUFyQjtBQUFBLEdBTGEsRUFPeEI7QUFBQSxXQUFTYixNQUFNRSxLQUFOLENBQVlZLG9CQUFyQjtBQUFBLEdBUHdCLEVBWTFCO0FBQUEsV0FBU2QsTUFBTUUsS0FBTixDQUFZQyxTQUFaLENBQXNCQyxNQUF0QixDQUE2QkUsR0FBdEM7QUFBQSxHQVowQixFQWtCWDtBQUFBLFdBQVNOLE1BQU1FLEtBQU4sQ0FBWWEsdUJBQXJCO0FBQUEsR0FsQlc7QUFBQSxDQUE5Qjs7QUF1QlBDLGVBQWVDLElBQWYsR0FBc0IsQ0FBQ0wscUJBQUQsQ0FBdEI7O0FBRUEsU0FBU0ksY0FBVCxDQUF3QkUsY0FBeEIsRUFBd0M7QUFBQTs7QUFDdEM7QUFBQTs7QUFBQTtBQUFBOztBQUFBOztBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQSx3TUFlRUMsY0FmRixHQWVtQixZQUFNO0FBQ3JCLGNBQUtuQixLQUFMLENBQVdvQixhQUFYLENBQXlCLEVBQUNDLFFBQVEsQ0FBQyxNQUFLckIsS0FBTCxDQUFXcUIsTUFBckIsRUFBekI7QUFDRCxPQWpCSDtBQUFBOztBQUFBO0FBQUE7QUFBQSwrQkFtQlc7QUFBQSxxQkFDZ0MsS0FBS3JCLEtBRHJDO0FBQUEsWUFDQXFCLE1BREEsVUFDQUEsTUFEQTtBQUFBLFlBQ1FDLGFBRFIsVUFDUUEsYUFEUjtBQUFBLFlBQ3VCckIsS0FEdkIsVUFDdUJBLEtBRHZCOztBQUVQLFlBQU1zQixtQkFBbUJGLFNBQVMsQ0FBVCxHQUFhQyxnQkFBZ0JyQixLQUF0RDs7QUFFQSxlQUNFO0FBQUMsa0NBQUQ7QUFBQTtBQUNFLG1CQUFPb0IsU0FBU3BCLEtBQVQsR0FBaUIsQ0FEMUI7QUFFRSx1QkFBVTtBQUZaO0FBSUU7QUFBQyw0QkFBRDtBQUFBLGNBQWtCLFdBQVUsVUFBNUIsRUFBdUMsT0FBTyxFQUFDQSxPQUFVQSxLQUFWLE9BQUQsRUFBOUM7QUFDa0Isb0JBQU1zQixnQkFEeEI7QUFFR0YscUJBQ0M7QUFBQywwQkFBRDtBQUFBLGdCQUFjLFdBQVUsaUJBQXhCO0FBQ0csbUJBQUtyQixLQUFMLENBQVd3QjtBQURkLGFBREQsR0FJRyxJQU5OO0FBT0U7QUFBQyw0QkFBRDtBQUFBO0FBQ0UsMkJBQVUsaUJBRFo7QUFFRSx5QkFBUyxLQUFLTDtBQUZoQjtBQUlFLDRDQUFDLGlCQUFEO0FBQ0Usd0JBQU8sTUFEVDtBQUVFLHVCQUFPLEVBQUNNLHdCQUFxQkosU0FBUyxHQUFULEdBQWUsQ0FBcEMsVUFBRDtBQUZUO0FBSkY7QUFQRjtBQUpGLFNBREY7QUF3QkQ7QUEvQ0g7QUFBQTtBQUFBLElBQTZCSyxnQkFBN0IsVUFDU0MsWUFEVCxHQUN3QjtBQUNwQjFCLFdBQU8sR0FEYTtBQUVwQnFCLG1CQUFlLENBRks7QUFHcEJELFlBQVEsSUFIWTtBQUlwQkQsbUJBQWUsU0FBU1EsSUFBVCxHQUFnQixDQUFFO0FBSmIsR0FEeEIsU0FRU0MsU0FSVCxHQVFxQjtBQUNqQjVCLFdBQU82QixvQkFBVUMsTUFEQTtBQUVqQlYsWUFBUVMsb0JBQVVFLElBRkQ7QUFHakJWLG1CQUFlUSxvQkFBVUMsTUFIUjtBQUlqQlgsbUJBQWVVLG9CQUFVRztBQUpSLEdBUnJCO0FBaUREOztrQkFFY2pCLGMiLCJmaWxlIjoic2lkZS1iYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMTkgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7QXJyb3dSaWdodH0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vaWNvbnMnO1xuXG5jb25zdCBTdHlsZWRTaWRlUGFuZWxDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICB6LWluZGV4OiA5OTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogJHtwcm9wcyA9PiBwcm9wcy53aWR0aCArIDIgKiBwcm9wcy50aGVtZS5zaWRlUGFuZWwubWFyZ2luLmxlZnR9cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHRyYW5zaXRpb246IHdpZHRoIDI1MG1zO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBhZGRpbmctdG9wOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNpZGVQYW5lbC5tYXJnaW4udG9wfXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNpZGVQYW5lbC5tYXJnaW4ucmlnaHR9cHg7XG4gIHBhZGRpbmctYm90dG9tOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNpZGVQYW5lbC5tYXJnaW4uYm90dG9tfXB4O1xuICBwYWRkaW5nLWxlZnQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2lkZVBhbmVsLm1hcmdpbi5sZWZ0fXB4O1xuYDtcblxuY29uc3QgU2lkZUJhckNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHRyYW5zaXRpb246IGxlZnQgMjUwbXMsIHJpZ2h0IDI1MG1zO1xuICBsZWZ0OiAke3Byb3BzID0+IHByb3BzLmxlZnR9cHg7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICBmbGV4LWdyb3c6IDE7XG5gO1xuXG5jb25zdCBTaWRlQmFySW5uZXIgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNpZGVQYW5lbEJnfTtcbiAgYm9yZGVyLXJhZGl1czogMXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMCU7XG5gO1xuXG5leHBvcnQgY29uc3QgQ29sbGFwc2VCdXR0b25GYWN0b3J5ID0gKCkgPT4gKFxuICBzdHlsZWQuZGl2YFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNpZGVCYXJDbG9zZUJ0bkJnZH07XG4gICAgYm9yZGVyLXJhZGl1czogMXB4O1xuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNpZGVCYXJDbG9zZUJ0bkNvbG9yfTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IC04cHg7XG4gICAgdG9wOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNpZGVQYW5lbC5tYXJnaW4udG9wfXB4O1xuICAgIHdpZHRoOiAyMHB4O1xuXG4gICAgOmhvdmVyIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNpZGVCYXJDbG9zZUJ0bkJnZEhvdmVyfTtcbiAgICB9XG4gIGBcbik7XG5cblNpZGViYXJGYWN0b3J5LmRlcHMgPSBbQ29sbGFwc2VCdXR0b25GYWN0b3J5XTtcblxuZnVuY3Rpb24gU2lkZWJhckZhY3RvcnkoQ29sbGFwc2VCdXR0b24pIHtcbiAgcmV0dXJuIGNsYXNzIFNpZGVCYXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICB3aWR0aDogMzAwLFxuICAgICAgbWluaWZpZWRXaWR0aDogMCxcbiAgICAgIGlzT3BlbjogdHJ1ZSxcbiAgICAgIG9uT3Blbk9yQ2xvc2U6IGZ1bmN0aW9uIG5vb3AoKSB7fVxuICAgIH07XG5cbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgd2lkdGg6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICBpc09wZW46IFByb3BUeXBlcy5ib29sLFxuICAgICAgbWluaWZpZWRXaWR0aDogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIG9uT3Blbk9yQ2xvc2U6IFByb3BUeXBlcy5mdW5jXG4gICAgfTtcblxuICAgIF9vbk9wZW5PckNsb3NlID0gKCkgPT4ge1xuICAgICAgdGhpcy5wcm9wcy5vbk9wZW5PckNsb3NlKHtpc09wZW46ICF0aGlzLnByb3BzLmlzT3Blbn0pO1xuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICBjb25zdCB7aXNPcGVuLCBtaW5pZmllZFdpZHRoLCB3aWR0aH0gPSB0aGlzLnByb3BzO1xuICAgICAgY29uc3QgaG9yaXpvbnRhbE9mZnNldCA9IGlzT3BlbiA/IDAgOiBtaW5pZmllZFdpZHRoIC0gd2lkdGg7XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxTdHlsZWRTaWRlUGFuZWxDb250YWluZXJcbiAgICAgICAgICB3aWR0aD17aXNPcGVuID8gd2lkdGggOiAwfVxuICAgICAgICAgIGNsYXNzTmFtZT1cInNpZGUtcGFuZWwtLWNvbnRhaW5lclwiXG4gICAgICAgID5cbiAgICAgICAgICA8U2lkZUJhckNvbnRhaW5lciBjbGFzc05hbWU9XCJzaWRlLWJhclwiIHN0eWxlPXt7d2lkdGg6IGAke3dpZHRofXB4YH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdD17aG9yaXpvbnRhbE9mZnNldH0+XG4gICAgICAgICAgICB7aXNPcGVuID8gKFxuICAgICAgICAgICAgICA8U2lkZUJhcklubmVyIGNsYXNzTmFtZT1cInNpZGUtYmFyX19pbm5lclwiPlxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgICA8L1NpZGVCYXJJbm5lcj5cbiAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgPENvbGxhcHNlQnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNpZGUtYmFyX19jbG9zZVwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX29uT3Blbk9yQ2xvc2V9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxBcnJvd1JpZ2h0XG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTJweFwiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3t0cmFuc2Zvcm06IGByb3RhdGUoJHtpc09wZW4gPyAxODAgOiAwfWRlZylgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvQ29sbGFwc2VCdXR0b24+XG4gICAgICAgICAgPC9TaWRlQmFyQ29udGFpbmVyPlxuICAgICAgICA8L1N0eWxlZFNpZGVQYW5lbENvbnRhaW5lcj5cbiAgICAgICk7XG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyRmFjdG9yeTtcbiJdfQ==
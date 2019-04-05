'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  display: inline-block;\n  margin-left: 6px;\n'], ['\n  display: inline-block;\n  margin-left: 6px;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  .logo__link {\n    color: ', ';\n    font-size: 14px;\n    font-weight: 600;\n    letter-spacing: 1.17px;\n  }\n'], ['\n  .logo__link {\n    color: ', ';\n    font-size: 14px;\n    font-weight: 600;\n    letter-spacing: 1.17px;\n  }\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  font-size: 10px;\n  color: ', ';\n  letter-spacing: 0.83px;\n  line-height: 14px;\n'], ['\n  font-size: 10px;\n  color: ', ';\n  letter-spacing: 0.83px;\n  line-height: 14px;\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n  display: flex;\n  align-items: flex-start;\n'], ['\n  display: flex;\n  align-items: flex-start;\n']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n  margin-top: 3px;\n'], ['\n  margin-top: 3px;\n']); // Copyright (c) 2019 Uber Technologies, Inc.
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

var _defaultSettings = require('../../constants/default-settings');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LogoTitle = _styledComponents2.default.div(_templateObject);

var LogoName = _styledComponents2.default.div(_templateObject2, function (props) {
  return props.theme.activeColor;
});
var LogoVersion = _styledComponents2.default.div(_templateObject3, function (props) {
  return props.theme.subtextColor;
});

var LogoWrapper = _styledComponents2.default.div(_templateObject4);

var LogoSvgWrapper = _styledComponents2.default.div(_templateObject5);

var LogoSvg = function LogoSvg() {
  return _react2.default.createElement(
    'svg',
    {
      className: 'side-panel-logo__logo',
      width: '22px',
      height: '15px',
      viewBox: '0 0 22 15'
    },
    _react2.default.createElement(
      'g',
      { transform: 'translate(11, -3) rotate(45.000000)' },
      _react2.default.createElement('rect', { fill: '#535C6C', x: '0', y: '5', width: '10', height: '10' }),
      _react2.default.createElement('rect', { fill: '#1FBAD6', x: '5', y: '0', width: '10', height: '10' })
    )
  );
};

var KeplerGlLogo = function KeplerGlLogo(_ref) {
  var _ref$appName = _ref.appName,
      appName = _ref$appName === undefined ? _defaultSettings.KEPLER_GL_NAME : _ref$appName,
      _ref$version = _ref.version,
      version = _ref$version === undefined ? _defaultSettings.KEPLER_GL_VERSION : _ref$version,
      _ref$homeUrl = _ref.homeUrl,
      homeUrl = _ref$homeUrl === undefined ? _defaultSettings.KEPLER_GL_WEBSITE : _ref$homeUrl;
  return _react2.default.createElement(
    LogoWrapper,
    { className: 'side-panel-logo' },
    _react2.default.createElement(
      LogoSvgWrapper,
      null,
      _react2.default.createElement(LogoSvg, null)
    ),
    _react2.default.createElement(
      LogoTitle,
      { className: 'logo__title' },
      _react2.default.createElement(
        LogoName,
        { className: 'logo__name' },
        _react2.default.createElement(
          'a',
          { className: 'logo__link', target: '_blank', rel: 'noopener noreferrer', href: homeUrl },
          appName
        )
      ),
      version ? _react2.default.createElement(
        LogoVersion,
        { className: 'logo__version' },
        version
      ) : null
    )
  );
};

KeplerGlLogo.defaultProps = {
  appName: _propTypes2.default.string,
  version: _propTypes2.default.string,
  homeUrl: _propTypes2.default.string
};

exports.default = KeplerGlLogo;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9sb2dvLmpzIl0sIm5hbWVzIjpbIkxvZ29UaXRsZSIsInN0eWxlZCIsImRpdiIsIkxvZ29OYW1lIiwicHJvcHMiLCJ0aGVtZSIsImFjdGl2ZUNvbG9yIiwiTG9nb1ZlcnNpb24iLCJzdWJ0ZXh0Q29sb3IiLCJMb2dvV3JhcHBlciIsIkxvZ29TdmdXcmFwcGVyIiwiTG9nb1N2ZyIsIktlcGxlckdsTG9nbyIsImFwcE5hbWUiLCJLRVBMRVJfR0xfTkFNRSIsInZlcnNpb24iLCJLRVBMRVJfR0xfVkVSU0lPTiIsImhvbWVVcmwiLCJLRVBMRVJfR0xfV0VCU0lURSIsImRlZmF1bHRQcm9wcyIsIlByb3BUeXBlcyIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7cUhBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFNQSxJQUFNQSxZQUFZQywyQkFBT0MsR0FBbkIsaUJBQU47O0FBS0EsSUFBTUMsV0FBV0YsMkJBQU9DLEdBQWxCLG1CQUVPO0FBQUEsU0FBU0UsTUFBTUMsS0FBTixDQUFZQyxXQUFyQjtBQUFBLENBRlAsQ0FBTjtBQVFBLElBQU1DLGNBQWNOLDJCQUFPQyxHQUFyQixtQkFFSztBQUFBLFNBQVNFLE1BQU1DLEtBQU4sQ0FBWUcsWUFBckI7QUFBQSxDQUZMLENBQU47O0FBT0EsSUFBTUMsY0FBY1IsMkJBQU9DLEdBQXJCLGtCQUFOOztBQUtBLElBQU1RLGlCQUFpQlQsMkJBQU9DLEdBQXhCLGtCQUFOOztBQUlBLElBQU1TLFVBQVUsU0FBVkEsT0FBVTtBQUFBLFNBQ2Q7QUFBQTtBQUFBO0FBQ0UsaUJBQVUsdUJBRFo7QUFFRSxhQUFNLE1BRlI7QUFHRSxjQUFPLE1BSFQ7QUFJRSxlQUFRO0FBSlY7QUFNRTtBQUFBO0FBQUEsUUFBRyxXQUFVLHFDQUFiO0FBQ0UsOENBQU0sTUFBSyxTQUFYLEVBQXFCLEdBQUUsR0FBdkIsRUFBMkIsR0FBRSxHQUE3QixFQUFpQyxPQUFNLElBQXZDLEVBQTRDLFFBQU8sSUFBbkQsR0FERjtBQUVFLDhDQUFNLE1BQUssU0FBWCxFQUFxQixHQUFFLEdBQXZCLEVBQTJCLEdBQUUsR0FBN0IsRUFBaUMsT0FBTSxJQUF2QyxFQUE0QyxRQUFPLElBQW5EO0FBRkY7QUFORixHQURjO0FBQUEsQ0FBaEI7O0FBY0EsSUFBTUMsZUFBZSxTQUFmQSxZQUFlO0FBQUEsMEJBQ25CQyxPQURtQjtBQUFBLE1BQ25CQSxPQURtQixnQ0FDVEMsK0JBRFM7QUFBQSwwQkFFbkJDLE9BRm1CO0FBQUEsTUFFbkJBLE9BRm1CLGdDQUVUQyxrQ0FGUztBQUFBLDBCQUduQkMsT0FIbUI7QUFBQSxNQUduQkEsT0FIbUIsZ0NBR1RDLGtDQUhTO0FBQUEsU0FLakI7QUFBQyxlQUFEO0FBQUEsTUFBYSxXQUFVLGlCQUF2QjtBQUNFO0FBQUMsb0JBQUQ7QUFBQTtBQUNFLG9DQUFDLE9BQUQ7QUFERixLQURGO0FBSUU7QUFBQyxlQUFEO0FBQUEsUUFBVyxXQUFVLGFBQXJCO0FBQ0U7QUFBQyxnQkFBRDtBQUFBLFVBQVUsV0FBVSxZQUFwQjtBQUNFO0FBQUE7QUFBQSxZQUFHLFdBQVUsWUFBYixFQUEwQixRQUFPLFFBQWpDLEVBQTBDLEtBQUkscUJBQTlDLEVBQW9FLE1BQU1ELE9BQTFFO0FBQW9GSjtBQUFwRjtBQURGLE9BREY7QUFJR0UsZ0JBQVU7QUFBQyxtQkFBRDtBQUFBLFVBQWEsV0FBVSxlQUF2QjtBQUF3Q0E7QUFBeEMsT0FBVixHQUEyRTtBQUo5RTtBQUpGLEdBTGlCO0FBQUEsQ0FBckI7O0FBa0JBSCxhQUFhTyxZQUFiLEdBQTRCO0FBQzFCTixXQUFTTyxvQkFBVUMsTUFETztBQUUxQk4sV0FBU0ssb0JBQVVDLE1BRk87QUFHMUJKLFdBQVNHLG9CQUFVQztBQUhPLENBQTVCOztrQkFNZVQsWSIsImZpbGUiOiJsb2dvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDE5IFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7XG4gIEtFUExFUl9HTF9OQU1FLFxuICBLRVBMRVJfR0xfVkVSU0lPTixcbiAgS0VQTEVSX0dMX1dFQlNJVEUsXG59IGZyb20gJ2NvbnN0YW50cy9kZWZhdWx0LXNldHRpbmdzJztcblxuY29uc3QgTG9nb1RpdGxlID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tbGVmdDogNnB4O1xuYDtcblxuY29uc3QgTG9nb05hbWUgPSBzdHlsZWQuZGl2YFxuICAubG9nb19fbGluayB7XG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYWN0aXZlQ29sb3J9O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAxLjE3cHg7XG4gIH1cbmA7XG5jb25zdCBMb2dvVmVyc2lvbiA9IHN0eWxlZC5kaXZgXG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc3VidGV4dENvbG9yfTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuODNweDtcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XG5gO1xuXG5jb25zdCBMb2dvV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuYDtcblxuY29uc3QgTG9nb1N2Z1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tdG9wOiAzcHg7XG5gO1xuXG5jb25zdCBMb2dvU3ZnID0gKCkgPT4gKFxuICA8c3ZnXG4gICAgY2xhc3NOYW1lPVwic2lkZS1wYW5lbC1sb2dvX19sb2dvXCJcbiAgICB3aWR0aD1cIjIycHhcIlxuICAgIGhlaWdodD1cIjE1cHhcIlxuICAgIHZpZXdCb3g9XCIwIDAgMjIgMTVcIlxuICA+XG4gICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDExLCAtMykgcm90YXRlKDQ1LjAwMDAwMClcIj5cbiAgICAgIDxyZWN0IGZpbGw9XCIjNTM1QzZDXCIgeD1cIjBcIiB5PVwiNVwiIHdpZHRoPVwiMTBcIiBoZWlnaHQ9XCIxMFwiIC8+XG4gICAgICA8cmVjdCBmaWxsPVwiIzFGQkFENlwiIHg9XCI1XCIgeT1cIjBcIiB3aWR0aD1cIjEwXCIgaGVpZ2h0PVwiMTBcIiAvPlxuICAgIDwvZz5cbiAgPC9zdmc+XG4pO1xuXG5jb25zdCBLZXBsZXJHbExvZ28gPSAoe1xuICBhcHBOYW1lID0gS0VQTEVSX0dMX05BTUUsXG4gIHZlcnNpb24gPSBLRVBMRVJfR0xfVkVSU0lPTixcbiAgaG9tZVVybCA9IEtFUExFUl9HTF9XRUJTSVRFLFxufSkgPT4gKFxuICAgIDxMb2dvV3JhcHBlciBjbGFzc05hbWU9XCJzaWRlLXBhbmVsLWxvZ29cIj5cbiAgICAgIDxMb2dvU3ZnV3JhcHBlcj5cbiAgICAgICAgPExvZ29TdmcgLz5cbiAgICAgIDwvTG9nb1N2Z1dyYXBwZXI+XG4gICAgICA8TG9nb1RpdGxlIGNsYXNzTmFtZT1cImxvZ29fX3RpdGxlXCI+XG4gICAgICAgIDxMb2dvTmFtZSBjbGFzc05hbWU9XCJsb2dvX19uYW1lXCI+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwibG9nb19fbGlua1wiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiBocmVmPXtob21lVXJsfT57YXBwTmFtZX08L2E+XG4gICAgICAgIDwvTG9nb05hbWU+XG4gICAgICAgIHt2ZXJzaW9uID8gPExvZ29WZXJzaW9uIGNsYXNzTmFtZT1cImxvZ29fX3ZlcnNpb25cIj57dmVyc2lvbn08L0xvZ29WZXJzaW9uPiA6IG51bGx9XG4gICAgICA8L0xvZ29UaXRsZT5cbiAgICA8L0xvZ29XcmFwcGVyPlxuICApO1xuXG5LZXBsZXJHbExvZ28uZGVmYXVsdFByb3BzID0ge1xuICBhcHBOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB2ZXJzaW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBob21lVXJsOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgS2VwbGVyR2xMb2dvO1xuIl19
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  height: 48px;\n  margin-bottom: 5px;\n  opacity: 1;\n  position: relative;\n  transition: opacity 0.05s ease-in, height 0.25s ease-out;\n\n  &.collapsed {\n    height: 0;\n    margin-bottom: 0;\n    opacity: 0;\n  }\n\n  :hover {\n    cursor: pointer;\n    background-color: ', ';\n  }\n\n  .map-title-block img {\n    margin-right: 12px;\n  }\n\n  .map-preview {\n    border-radius: 3px;\n    height: 30px;\n    width: 40px;\n  }\n'], ['\n  height: 48px;\n  margin-bottom: 5px;\n  opacity: 1;\n  position: relative;\n  transition: opacity 0.05s ease-in, height 0.25s ease-out;\n\n  &.collapsed {\n    height: 0;\n    margin-bottom: 0;\n    opacity: 0;\n  }\n\n  :hover {\n    cursor: pointer;\n    background-color: ', ';\n  }\n\n  .map-title-block img {\n    margin-right: 12px;\n  }\n\n  .map-preview {\n    border-radius: 3px;\n    height: 30px;\n    width: 40px;\n  }\n']); // Copyright (c) 2019 Uber Technologies, Inc.
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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _icons = require('../../common/icons');

var _panelHeaderAction = require('../panel-header-action');

var _panelHeaderAction2 = _interopRequireDefault(_panelHeaderAction);

var _styledComponents = require('../../common/styled-components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyledMapDropdown = _styledComponents.StyledPanelHeader.extend(_templateObject, function (props) {
  return props.theme.panelBackgroundHover;
});

function MapStyleSelectorFactory() {
  var MapStyleSelector = function MapStyleSelector(_ref) {
    var mapStyle = _ref.mapStyle,
        onChange = _ref.onChange,
        toggleActive = _ref.toggleActive,
        isSelecting = _ref.isSelecting;
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        _styledComponents.PanelLabel,
        null,
        'Map style'
      ),
      Object.keys(mapStyle.mapStyles).map(function (op) {
        return _react2.default.createElement(
          StyledMapDropdown,
          {
            className: (0, _classnames2.default)('map-dropdown-option', {
              collapsed: !isSelecting && mapStyle.styleType !== op
            }),
            key: op,
            onClick: isSelecting ? function () {
              return onChange(op);
            } : toggleActive
          },
          _react2.default.createElement(
            _styledComponents.PanelHeaderContent,
            { className: 'map-title-block' },
            _react2.default.createElement('img', { className: 'map-preview', src: mapStyle.mapStyles[op].icon }),
            _react2.default.createElement(
              _styledComponents.PanelHeaderTitle,
              { className: 'map-preview-name' },
              mapStyle.mapStyles[op].label
            )
          ),
          !isSelecting ? _react2.default.createElement(_panelHeaderAction2.default, {
            className: 'map-dropdown-option__enable-config',
            id: 'map-enable-config',
            IconComponent: _icons.ArrowDown,
            tooltip: 'Select Base Map Style',
            onClick: toggleActive
          }) : null
        );
      })
    );
  };

  return MapStyleSelector;
}

exports.default = MapStyleSelectorFactory;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvbWFwLXN0eWxlLXBhbmVsL21hcC1zdHlsZS1zZWxlY3Rvci5qcyJdLCJuYW1lcyI6WyJTdHlsZWRNYXBEcm9wZG93biIsIlN0eWxlZFBhbmVsSGVhZGVyIiwiZXh0ZW5kIiwicHJvcHMiLCJ0aGVtZSIsInBhbmVsQmFja2dyb3VuZEhvdmVyIiwiTWFwU3R5bGVTZWxlY3RvckZhY3RvcnkiLCJNYXBTdHlsZVNlbGVjdG9yIiwibWFwU3R5bGUiLCJvbkNoYW5nZSIsInRvZ2dsZUFjdGl2ZSIsImlzU2VsZWN0aW5nIiwiT2JqZWN0Iiwia2V5cyIsIm1hcFN0eWxlcyIsIm1hcCIsImNvbGxhcHNlZCIsInN0eWxlVHlwZSIsIm9wIiwiaWNvbiIsImxhYmVsIiwiQXJyb3dEb3duIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O2c3QkFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFFQTs7OztBQU9BLElBQU1BLG9CQUFvQkMsb0NBQWtCQyxNQUF0QyxrQkFla0I7QUFBQSxTQUFTQyxNQUFNQyxLQUFOLENBQVlDLG9CQUFyQjtBQUFBLENBZmxCLENBQU47O0FBNkJBLFNBQVNDLHVCQUFULEdBQW1DO0FBQ2pDLE1BQU1DLG1CQUFtQixTQUFuQkEsZ0JBQW1CO0FBQUEsUUFBRUMsUUFBRixRQUFFQSxRQUFGO0FBQUEsUUFBWUMsUUFBWixRQUFZQSxRQUFaO0FBQUEsUUFBc0JDLFlBQXRCLFFBQXNCQSxZQUF0QjtBQUFBLFFBQW9DQyxXQUFwQyxRQUFvQ0EsV0FBcEM7QUFBQSxXQUN2QjtBQUFBO0FBQUE7QUFDRTtBQUFDLG9DQUFEO0FBQUE7QUFBQTtBQUFBLE9BREY7QUFFR0MsYUFBT0MsSUFBUCxDQUFZTCxTQUFTTSxTQUFyQixFQUFnQ0MsR0FBaEMsQ0FBb0M7QUFBQSxlQUNuQztBQUFDLDJCQUFEO0FBQUE7QUFDRSx1QkFBVywwQkFBVyxxQkFBWCxFQUFrQztBQUMzQ0MseUJBQVcsQ0FBQ0wsV0FBRCxJQUFnQkgsU0FBU1MsU0FBVCxLQUF1QkM7QUFEUCxhQUFsQyxDQURiO0FBSUUsaUJBQUtBLEVBSlA7QUFLRSxxQkFBU1AsY0FBYztBQUFBLHFCQUFNRixTQUFTUyxFQUFULENBQU47QUFBQSxhQUFkLEdBQW1DUjtBQUw5QztBQU9FO0FBQUMsZ0RBQUQ7QUFBQSxjQUFvQixXQUFVLGlCQUE5QjtBQUNFLG1EQUFLLFdBQVUsYUFBZixFQUE2QixLQUFLRixTQUFTTSxTQUFULENBQW1CSSxFQUFuQixFQUF1QkMsSUFBekQsR0FERjtBQUVFO0FBQUMsZ0RBQUQ7QUFBQSxnQkFBa0IsV0FBVSxrQkFBNUI7QUFDR1gsdUJBQVNNLFNBQVQsQ0FBbUJJLEVBQW5CLEVBQXVCRTtBQUQxQjtBQUZGLFdBUEY7QUFhRyxXQUFDVCxXQUFELEdBQ0MsOEJBQUMsMkJBQUQ7QUFDRSx1QkFBVSxvQ0FEWjtBQUVFLGdCQUFHLG1CQUZMO0FBR0UsMkJBQWVVLGdCQUhqQjtBQUlFLHFCQUFTLHVCQUpYO0FBS0UscUJBQVNYO0FBTFgsWUFERCxHQVFHO0FBckJOLFNBRG1DO0FBQUEsT0FBcEM7QUFGSCxLQUR1QjtBQUFBLEdBQXpCOztBQStCQSxTQUFPSCxnQkFBUDtBQUNEOztrQkFFY0QsdUIiLCJmaWxlIjoibWFwLXN0eWxlLXNlbGVjdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDE5IFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHtBcnJvd0Rvd259IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2ljb25zJztcbmltcG9ydCBQYW5lbEhlYWRlckFjdGlvbiBmcm9tICdjb21wb25lbnRzL3NpZGUtcGFuZWwvcGFuZWwtaGVhZGVyLWFjdGlvbic7XG5cbmltcG9ydCB7XG4gIFBhbmVsTGFiZWwsXG4gIFBhbmVsSGVhZGVyVGl0bGUsXG4gIFBhbmVsSGVhZGVyQ29udGVudCxcbiAgU3R5bGVkUGFuZWxIZWFkZXJcbn0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBTdHlsZWRNYXBEcm9wZG93biA9IFN0eWxlZFBhbmVsSGVhZGVyLmV4dGVuZGBcbiAgaGVpZ2h0OiA0OHB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIG9wYWNpdHk6IDE7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjA1cyBlYXNlLWluLCBoZWlnaHQgMC4yNXMgZWFzZS1vdXQ7XG5cbiAgJi5jb2xsYXBzZWQge1xuICAgIGhlaWdodDogMDtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cblxuICA6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnBhbmVsQmFja2dyb3VuZEhvdmVyfTtcbiAgfVxuXG4gIC5tYXAtdGl0bGUtYmxvY2sgaW1nIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gIH1cblxuICAubWFwLXByZXZpZXcge1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgd2lkdGg6IDQwcHg7XG4gIH1cbmA7XG5cbmZ1bmN0aW9uIE1hcFN0eWxlU2VsZWN0b3JGYWN0b3J5KCkge1xuICBjb25zdCBNYXBTdHlsZVNlbGVjdG9yID0gKHttYXBTdHlsZSwgb25DaGFuZ2UsIHRvZ2dsZUFjdGl2ZSwgaXNTZWxlY3Rpbmd9KSA9PiAoXG4gICAgPGRpdj5cbiAgICAgIDxQYW5lbExhYmVsPk1hcCBzdHlsZTwvUGFuZWxMYWJlbD5cbiAgICAgIHtPYmplY3Qua2V5cyhtYXBTdHlsZS5tYXBTdHlsZXMpLm1hcChvcCA9PiAoXG4gICAgICAgIDxTdHlsZWRNYXBEcm9wZG93blxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnbWFwLWRyb3Bkb3duLW9wdGlvbicsIHtcbiAgICAgICAgICAgIGNvbGxhcHNlZDogIWlzU2VsZWN0aW5nICYmIG1hcFN0eWxlLnN0eWxlVHlwZSAhPT0gb3BcbiAgICAgICAgICB9KX1cbiAgICAgICAgICBrZXk9e29wfVxuICAgICAgICAgIG9uQ2xpY2s9e2lzU2VsZWN0aW5nID8gKCkgPT4gb25DaGFuZ2Uob3ApIDogdG9nZ2xlQWN0aXZlfVxuICAgICAgICA+XG4gICAgICAgICAgPFBhbmVsSGVhZGVyQ29udGVudCBjbGFzc05hbWU9XCJtYXAtdGl0bGUtYmxvY2tcIj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibWFwLXByZXZpZXdcIiBzcmM9e21hcFN0eWxlLm1hcFN0eWxlc1tvcF0uaWNvbn0gLz5cbiAgICAgICAgICAgIDxQYW5lbEhlYWRlclRpdGxlIGNsYXNzTmFtZT1cIm1hcC1wcmV2aWV3LW5hbWVcIj5cbiAgICAgICAgICAgICAge21hcFN0eWxlLm1hcFN0eWxlc1tvcF0ubGFiZWx9XG4gICAgICAgICAgICA8L1BhbmVsSGVhZGVyVGl0bGU+XG4gICAgICAgICAgPC9QYW5lbEhlYWRlckNvbnRlbnQ+XG4gICAgICAgICAgeyFpc1NlbGVjdGluZyA/IChcbiAgICAgICAgICAgIDxQYW5lbEhlYWRlckFjdGlvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYXAtZHJvcGRvd24tb3B0aW9uX19lbmFibGUtY29uZmlnXCJcbiAgICAgICAgICAgICAgaWQ9XCJtYXAtZW5hYmxlLWNvbmZpZ1wiXG4gICAgICAgICAgICAgIEljb25Db21wb25lbnQ9e0Fycm93RG93bn1cbiAgICAgICAgICAgICAgdG9vbHRpcD17J1NlbGVjdCBCYXNlIE1hcCBTdHlsZSd9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZUFjdGl2ZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIDwvU3R5bGVkTWFwRHJvcGRvd24+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgKTtcblxuICByZXR1cm4gTWFwU3R5bGVTZWxlY3Rvcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFwU3R5bGVTZWxlY3RvckZhY3Rvcnk7XG4iXX0=
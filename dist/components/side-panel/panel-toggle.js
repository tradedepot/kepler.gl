'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  background-color: ', ';\n  padding: 0 16px;\n  display: flex;\n  min-height: 30px;\n'], ['\n  background-color: ', ';\n  padding: 0 16px;\n  display: flex;\n  min-height: 30px;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  align-items: flex-end;\n  border-bottom-style: solid;\n  border-bottom-width: 2px;\n  border-bottom-color: ', ';\n  color: ', ';\n  display: flex;\n  justify-content: center;\n  margin-right: 12px;\n  padding-bottom: 6px;\n  width: 30px;\n\n  :hover {\n    cursor: pointer;\n    color: ', ';\n  }\n'], ['\n  align-items: flex-end;\n  border-bottom-style: solid;\n  border-bottom-width: 2px;\n  border-bottom-color: ', ';\n  color: ', ';\n  display: flex;\n  justify-content: center;\n  margin-right: 12px;\n  padding-bottom: 6px;\n  width: 30px;\n\n  :hover {\n    cursor: pointer;\n    color: ', ';\n  }\n']); // Copyright (c) 2019 Uber Technologies, Inc.
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

var _styledComponents3 = require('../common/styled-components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  panels: _propTypes2.default.array,
  activePanel: _propTypes2.default.string,
  togglePanel: _propTypes2.default.func
};

var PanelHeaderBottom = _styledComponents2.default.div.attrs({
  className: 'side-side-panel__header__bottom'
})(_templateObject, function (props) {
  return props.theme.sidePanelHeaderBg;
});

var PanelTab = _styledComponents2.default.div.attrs({
  className: 'side-panel__tab'
})(_templateObject2, function (props) {
  return props.active ? props.theme.subtextColorActive : 'transparent';
}, function (props) {
  return props.active ? props.theme.subtextColorActive : props.theme.subtextColor;
}, function (props) {
  return props.theme.textColorHl;
});

var PanelToggleFactory = function PanelToggleFactory() {
  var PanelToggle = function PanelToggle(_ref) {
    var panels = _ref.panels,
        activePanel = _ref.activePanel,
        togglePanel = _ref.togglePanel;
    return _react2.default.createElement(
      PanelHeaderBottom,
      null,
      panels.map(function (panel) {
        return _react2.default.createElement(
          PanelTab,
          {
            key: panel.id,
            'data-tip': true,
            'data-for': panel.id + '-nav',
            active: activePanel === panel.id,
            onClick: function onClick() {
              return togglePanel(panel.id);
            }
          },
          _react2.default.createElement(panel.iconComponent, { height: '20px' }),
          _react2.default.createElement(
            _styledComponents3.Tooltip,
            {
              id: panel.id + '-nav',
              effect: 'solid',
              delayShow: 500,
              place: 'bottom'
            },
            _react2.default.createElement(
              'span',
              null,
              panel.label || panel.id
            )
          )
        );
      })
    );
  };

  PanelToggle.propTypes = propTypes;
  return PanelToggle;
};

exports.default = PanelToggleFactory;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvcGFuZWwtdG9nZ2xlLmpzIl0sIm5hbWVzIjpbInByb3BUeXBlcyIsInBhbmVscyIsIlByb3BUeXBlcyIsImFycmF5IiwiYWN0aXZlUGFuZWwiLCJzdHJpbmciLCJ0b2dnbGVQYW5lbCIsImZ1bmMiLCJQYW5lbEhlYWRlckJvdHRvbSIsInN0eWxlZCIsImRpdiIsImF0dHJzIiwiY2xhc3NOYW1lIiwicHJvcHMiLCJ0aGVtZSIsInNpZGVQYW5lbEhlYWRlckJnIiwiUGFuZWxUYWIiLCJhY3RpdmUiLCJzdWJ0ZXh0Q29sb3JBY3RpdmUiLCJzdWJ0ZXh0Q29sb3IiLCJ0ZXh0Q29sb3JIbCIsIlBhbmVsVG9nZ2xlRmFjdG9yeSIsIlBhbmVsVG9nZ2xlIiwibWFwIiwicGFuZWwiLCJpZCIsImxhYmVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztxcUJBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQSxJQUFNQSxZQUFZO0FBQ2hCQyxVQUFRQyxvQkFBVUMsS0FERjtBQUVoQkMsZUFBYUYsb0JBQVVHLE1BRlA7QUFHaEJDLGVBQWFKLG9CQUFVSztBQUhQLENBQWxCOztBQU1BLElBQU1DLG9CQUFvQkMsMkJBQU9DLEdBQVAsQ0FBV0MsS0FBWCxDQUFpQjtBQUN6Q0MsYUFBVztBQUQ4QixDQUFqQixDQUFwQixrQkFHZ0I7QUFBQSxTQUFTQyxNQUFNQyxLQUFOLENBQVlDLGlCQUFyQjtBQUFBLENBSGhCLENBQU47O0FBU0EsSUFBTUMsV0FBV1AsMkJBQU9DLEdBQVAsQ0FBV0MsS0FBWCxDQUFpQjtBQUNoQ0MsYUFBVztBQURxQixDQUFqQixDQUFYLG1CQU1tQjtBQUFBLFNBQ3ZCQyxNQUFNSSxNQUFOLEdBQWVKLE1BQU1DLEtBQU4sQ0FBWUksa0JBQTNCLEdBQWdELGFBRHpCO0FBQUEsQ0FObkIsRUFRSztBQUFBLFNBQ1RMLE1BQU1JLE1BQU4sR0FBZUosTUFBTUMsS0FBTixDQUFZSSxrQkFBM0IsR0FBZ0RMLE1BQU1DLEtBQU4sQ0FBWUssWUFEbkQ7QUFBQSxDQVJMLEVBa0JPO0FBQUEsU0FBU04sTUFBTUMsS0FBTixDQUFZTSxXQUFyQjtBQUFBLENBbEJQLENBQU47O0FBc0JBLElBQU1DLHFCQUFxQixTQUFyQkEsa0JBQXFCLEdBQU07QUFDL0IsTUFBTUMsY0FBYyxTQUFkQSxXQUFjO0FBQUEsUUFBRXJCLE1BQUYsUUFBRUEsTUFBRjtBQUFBLFFBQVVHLFdBQVYsUUFBVUEsV0FBVjtBQUFBLFFBQXVCRSxXQUF2QixRQUF1QkEsV0FBdkI7QUFBQSxXQUNsQjtBQUFDLHVCQUFEO0FBQUE7QUFDR0wsYUFBT3NCLEdBQVAsQ0FBVztBQUFBLGVBQ1Y7QUFBQyxrQkFBRDtBQUFBO0FBQ0UsaUJBQUtDLE1BQU1DLEVBRGI7QUFFRSw0QkFGRjtBQUdFLHdCQUFhRCxNQUFNQyxFQUFuQixTQUhGO0FBSUUsb0JBQVFyQixnQkFBZ0JvQixNQUFNQyxFQUpoQztBQUtFLHFCQUFTO0FBQUEscUJBQU1uQixZQUFZa0IsTUFBTUMsRUFBbEIsQ0FBTjtBQUFBO0FBTFg7QUFPRSx3Q0FBQyxLQUFELENBQU8sYUFBUCxJQUFxQixRQUFPLE1BQTVCLEdBUEY7QUFRRTtBQUFDLHNDQUFEO0FBQUE7QUFDRSxrQkFBT0QsTUFBTUMsRUFBYixTQURGO0FBRUUsc0JBQU8sT0FGVDtBQUdFLHlCQUFXLEdBSGI7QUFJRSxxQkFBTTtBQUpSO0FBTUU7QUFBQTtBQUFBO0FBQU9ELG9CQUFNRSxLQUFOLElBQWVGLE1BQU1DO0FBQTVCO0FBTkY7QUFSRixTQURVO0FBQUEsT0FBWDtBQURILEtBRGtCO0FBQUEsR0FBcEI7O0FBd0JBSCxjQUFZdEIsU0FBWixHQUF3QkEsU0FBeEI7QUFDQSxTQUFPc0IsV0FBUDtBQUNELENBM0JEOztrQkE2QmVELGtCIiwiZmlsZSI6InBhbmVsLXRvZ2dsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAxOSBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQge1Rvb2x0aXB9IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgcHJvcFR5cGVzID0ge1xuICBwYW5lbHM6IFByb3BUeXBlcy5hcnJheSxcbiAgYWN0aXZlUGFuZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHRvZ2dsZVBhbmVsOiBQcm9wVHlwZXMuZnVuY1xufTtcblxuY29uc3QgUGFuZWxIZWFkZXJCb3R0b20gPSBzdHlsZWQuZGl2LmF0dHJzKHtcbiAgY2xhc3NOYW1lOiAnc2lkZS1zaWRlLXBhbmVsX19oZWFkZXJfX2JvdHRvbSdcbn0pYFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNpZGVQYW5lbEhlYWRlckJnfTtcbiAgcGFkZGluZzogMCAxNnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBtaW4taGVpZ2h0OiAzMHB4O1xuYDtcblxuY29uc3QgUGFuZWxUYWIgPSBzdHlsZWQuZGl2LmF0dHJzKHtcbiAgY2xhc3NOYW1lOiAnc2lkZS1wYW5lbF9fdGFiJ1xufSlgXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDJweDtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJHtwcm9wcyA9PlxuICBwcm9wcy5hY3RpdmUgPyBwcm9wcy50aGVtZS5zdWJ0ZXh0Q29sb3JBY3RpdmUgOiAndHJhbnNwYXJlbnQnfTtcbiAgY29sb3I6ICR7cHJvcHMgPT5cbiAgcHJvcHMuYWN0aXZlID8gcHJvcHMudGhlbWUuc3VidGV4dENvbG9yQWN0aXZlIDogcHJvcHMudGhlbWUuc3VidGV4dENvbG9yfTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1yaWdodDogMTJweDtcbiAgcGFkZGluZy1ib3R0b206IDZweDtcbiAgd2lkdGg6IDMwcHg7XG5cbiAgOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dENvbG9ySGx9O1xuICB9XG5gO1xuXG5jb25zdCBQYW5lbFRvZ2dsZUZhY3RvcnkgPSAoKSA9PiB7XG4gIGNvbnN0IFBhbmVsVG9nZ2xlID0gKHtwYW5lbHMsIGFjdGl2ZVBhbmVsLCB0b2dnbGVQYW5lbH0pID0+IChcbiAgICA8UGFuZWxIZWFkZXJCb3R0b20+XG4gICAgICB7cGFuZWxzLm1hcChwYW5lbCA9PiAoXG4gICAgICAgIDxQYW5lbFRhYlxuICAgICAgICAgIGtleT17cGFuZWwuaWR9XG4gICAgICAgICAgZGF0YS10aXBcbiAgICAgICAgICBkYXRhLWZvcj17YCR7cGFuZWwuaWR9LW5hdmB9XG4gICAgICAgICAgYWN0aXZlPXthY3RpdmVQYW5lbCA9PT0gcGFuZWwuaWR9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4gdG9nZ2xlUGFuZWwocGFuZWwuaWQpfVxuICAgICAgICA+XG4gICAgICAgICAgPHBhbmVsLmljb25Db21wb25lbnQgaGVpZ2h0PVwiMjBweFwiIC8+XG4gICAgICAgICAgPFRvb2x0aXBcbiAgICAgICAgICAgIGlkPXtgJHtwYW5lbC5pZH0tbmF2YH1cbiAgICAgICAgICAgIGVmZmVjdD1cInNvbGlkXCJcbiAgICAgICAgICAgIGRlbGF5U2hvdz17NTAwfVxuICAgICAgICAgICAgcGxhY2U9XCJib3R0b21cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxzcGFuPntwYW5lbC5sYWJlbCB8fCBwYW5lbC5pZH08L3NwYW4+XG4gICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICA8L1BhbmVsVGFiPlxuICAgICAgKSl9XG4gICAgPC9QYW5lbEhlYWRlckJvdHRvbT5cbiAgKTtcblxuICBQYW5lbFRvZ2dsZS5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG4gIHJldHVybiBQYW5lbFRvZ2dsZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFuZWxUb2dnbGVGYWN0b3J5O1xuIl19
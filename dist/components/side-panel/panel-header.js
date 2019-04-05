'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SaveExportDropdown = exports.PanelAction = undefined;

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

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  background-color: ', ';\n  padding: 12px 16px 0 16px;\n'], ['\n  background-color: ', ';\n  padding: 12px 16px 0 16px;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 16px;\n  width: 100%;\n'], ['\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 16px;\n  width: 100%;\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  display: flex;\n'], ['\n  display: flex;\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n  align-items: center;\n  border-radius: 2px;\n  color: ', ';\n  display: flex;\n  height: 26px;\n  justify-content: space-between;\n  margin-left: 4px;\n  width: 70px;\n  padding: 5px;\n  font-weight: bold;\n  a {\n    height: 20px;\n  }\n\n  :hover {\n    cursor: pointer;\n    background-color: ', ';\n    color: ', ';\n\n    a {\n      color: ', ';\n    }\n  }\n'], ['\n  align-items: center;\n  border-radius: 2px;\n  color: ', ';\n  display: flex;\n  height: 26px;\n  justify-content: space-between;\n  margin-left: 4px;\n  width: 70px;\n  padding: 5px;\n  font-weight: bold;\n  a {\n    height: 20px;\n  }\n\n  :hover {\n    cursor: pointer;\n    background-color: ', ';\n    color: ', ';\n\n    a {\n      color: ', ';\n    }\n  }\n']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n  background-color: ', ';\n  box-shadow: ', ';\n  font-size: 11px;\n  padding: 16px 0;\n  position: absolute;\n  transition: ', ';\n  display: flex;\n  margin-top: ', ';\n  opacity: ', ';\n  transform: translateX(calc(-50% + 20px));\n  pointer-events:  ', ';\n  z-index: 1000;\n\n  .save-export-dropdown__inner {\n    box-shadow: none;\n    background-color: transparent;\n    display: flex;\n  }\n\n  .save-export-dropdown__item {\n    align-items: center;\n    border-right: 1px solid ', ';\n    color: ', ';\n    display: flex;\n    flex-direction: column;\n    padding: 0 22px;\n\n    :hover {\n      cursor: pointer;\n      color: ', ';\n    }\n\n    &:last-child {\n      border-right: 0;\n    }\n  }\n\n  .save-export-dropdown__title {\n    white-space: nowrap;\n    margin-top: 4px;\n  }\n'], ['\n  background-color: ', ';\n  box-shadow: ', ';\n  font-size: 11px;\n  padding: 16px 0;\n  position: absolute;\n  transition: ', ';\n  display: flex;\n  margin-top: ', ';\n  opacity: ', ';\n  transform: translateX(calc(-50% + 20px));\n  pointer-events:  ', ';\n  z-index: 1000;\n\n  .save-export-dropdown__inner {\n    box-shadow: none;\n    background-color: transparent;\n    display: flex;\n  }\n\n  .save-export-dropdown__item {\n    align-items: center;\n    border-right: 1px solid ', ';\n    color: ', ';\n    display: flex;\n    flex-direction: column;\n    padding: 0 22px;\n\n    :hover {\n      cursor: pointer;\n      color: ', ';\n    }\n\n    &:last-child {\n      border-right: 0;\n    }\n  }\n\n  .save-export-dropdown__title {\n    white-space: nowrap;\n    margin-top: 4px;\n  }\n']); // Copyright (c) 2019 Uber Technologies, Inc.
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

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents3 = require('../common/styled-components');

var _logo = require('../common/logo');

var _logo2 = _interopRequireDefault(_logo);

var _icons = require('../common/icons');

var _panelDropdown = require('./panel-dropdown');

var _panelDropdown2 = _interopRequireDefault(_panelDropdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyledPanelHeader = _styledComponents2.default.div.attrs({
  className: 'side-side-panel__header'
})(_templateObject, function (props) {
  return props.theme.sidePanelHeaderBg;
});

var StyledPanelHeaderTop = _styledComponents2.default.div.attrs({
  className: 'side-panel__header__top'
})(_templateObject2);

var StyledPanelTopActions = _styledComponents2.default.div.attrs({
  className: 'side-panel__header__actions'
})(_templateObject3);

var StyledPanelAction = _styledComponents2.default.div.attrs({
  className: 'side-panel__header__actions'
})(_templateObject4, function (props) {
  return props.active ? props.theme.textColorHl : props.theme.subtextColor;
}, function (props) {
  return props.theme.secondaryBtnActBgd;
}, function (props) {
  return props.theme.textColorHl;
}, function (props) {
  return props.theme.textColorHl;
});

var StyledPanelDropdown = _styledComponents2.default.div(_templateObject5, function (props) {
  return props.theme.dropdownListBgd;
}, function (props) {
  return props.theme.dropdownListShadow;
}, function (props) {
  return props.theme.transitionSlow;
}, function (props) {
  return props.show ? '6px' : '20px';
}, function (props) {
  return props.show ? 1 : 0;
}, function (props) {
  return props.show ? 'all' : 'none';
}, function (props) {
  return props.theme.panelHeaderIcon;
}, function (props) {
  return props.theme.textColor;
}, function (props) {
  return props.theme.textColorHl;
});

var PanelAction = exports.PanelAction = function PanelAction(_ref) {
  var item = _ref.item,
      onClick = _ref.onClick;
  return _react2.default.createElement(
    StyledPanelAction,
    { className: 'side-panel__panel-header__action',
      'data-tip': true, 'data-for': item.id + '-action', onClick: onClick },
    item.label ? _react2.default.createElement(
      'p',
      null,
      item.label
    ) : null,
    _react2.default.createElement(
      'a',
      { target: item.blank ? '_blank' : '', href: item.href },
      _react2.default.createElement(item.iconComponent, { height: '20px' })
    ),
    item.tooltip ? _react2.default.createElement(
      _styledComponents3.Tooltip,
      {
        id: item.id + '-action',
        place: 'bottom',
        delayShow: 500,
        effect: 'solid'
      },
      _react2.default.createElement(
        'span',
        null,
        item.tooltip
      )
    ) : null
  );
};

var PanelItem = function PanelItem(_ref2) {
  var onClose = _ref2.onClose,
      onClickHandler = _ref2.onClickHandler,
      label = _ref2.label,
      icon = _ref2.icon;
  return _react2.default.createElement(
    'div',
    { className: 'save-export-dropdown__item', onClick: function onClick(e) {
        e.stopPropagation();
        onClose();
        onClickHandler();
      } },
    icon,
    _react2.default.createElement(
      'div',
      { className: 'save-export-dropdown__title' },
      label
    )
  );
};

var SaveExportDropdown = exports.SaveExportDropdown = function SaveExportDropdown(_ref3) {
  var onExportImage = _ref3.onExportImage,
      onExportData = _ref3.onExportData,
      onExportConfig = _ref3.onExportConfig,
      onSaveMap = _ref3.onSaveMap,
      show = _ref3.show,
      onClose = _ref3.onClose;

  return _react2.default.createElement(
    StyledPanelDropdown,
    { show: show, className: 'save-export-dropdown' },
    _react2.default.createElement(
      _panelDropdown2.default,
      { className: 'save-export-dropdown__inner',
        show: show,
        onClose: onClose },
      _react2.default.createElement(PanelItem, {
        label: 'Export Image',
        onClickHandler: onExportImage,
        onClose: onClose,
        icon: _react2.default.createElement(_icons.Picture, { height: '16px' })
      }),
      _react2.default.createElement(PanelItem, {
        label: 'Export Data',
        onClickHandler: onExportData,
        onClose: onClose,
        icon: _react2.default.createElement(_icons.Files, { height: '16px' })
      }),
      _react2.default.createElement(PanelItem, {
        label: 'Export Config',
        onClickHandler: onExportConfig,
        onClose: onClose,
        icon: _react2.default.createElement(_icons.CodeAlt, { height: '16px' })
      }),
      onSaveMap ? _react2.default.createElement(PanelItem, {
        label: 'Save Map Url',
        onClickHandler: onSaveMap,
        onClose: onClose,
        icon: _react2.default.createElement(_icons.Share, { height: '16px' })
      }) : null
    )
  );
};

var defaultActionItems = [{
  id: 'save',
  iconComponent: _icons.Save,
  onClick: function onClick() {},
  label: 'Share',
  dropdownComponent: SaveExportDropdown
}];

function PanelHeaderFactory() {
  var _class, _temp;

  return _temp = _class = function (_Component) {
    (0, _inherits3.default)(PanelHeader, _Component);

    function PanelHeader() {
      (0, _classCallCheck3.default)(this, PanelHeader);
      return (0, _possibleConstructorReturn3.default)(this, (PanelHeader.__proto__ || Object.getPrototypeOf(PanelHeader)).apply(this, arguments));
    }

    (0, _createClass3.default)(PanelHeader, [{
      key: 'render',
      value: function render() {
        var _props = this.props,
            appName = _props.appName,
            version = _props.version,
            homeUrl = _props.homeUrl,
            actionItems = _props.actionItems,
            onSaveMap = _props.onSaveMap,
            onExportImage = _props.onExportImage,
            onExportData = _props.onExportData,
            onExportConfig = _props.onExportConfig,
            visibleDropdown = _props.visibleDropdown,
            showExportDropdown = _props.showExportDropdown,
            hideExportDropdown = _props.hideExportDropdown;


        return _react2.default.createElement(
          StyledPanelHeader,
          { className: 'side-panel__panel-header' },
          _react2.default.createElement(
            StyledPanelHeaderTop,
            { className: 'side-panel__panel-header__top' },
            _react2.default.createElement(this.props.logoComponent, { appName: appName, version: version, homeUrl: homeUrl }),
            _react2.default.createElement(
              StyledPanelTopActions,
              null,
              actionItems.map(function (item) {
                return _react2.default.createElement(
                  'div',
                  { className: 'side-panel__panel-header__right',
                    key: item.id, style: { position: 'relative' } },
                  _react2.default.createElement(PanelAction, {
                    item: item,
                    onClick: function onClick() {
                      if (item.dropdownComponent) {
                        showExportDropdown(item.id);
                      }
                      item.onClick();
                    }
                  }),
                  item.dropdownComponent ? _react2.default.createElement(item.dropdownComponent, {
                    onClose: hideExportDropdown,
                    show: visibleDropdown === item.id,
                    onSaveMap: onSaveMap,
                    onExportData: onExportData,
                    onExportImage: onExportImage,
                    onExportConfig: onExportConfig
                  }) : null
                );
              })
            )
          )
        );
      }
    }]);
    return PanelHeader;
  }(_react.Component), _class.propTypes = {
    appName: _propTypes2.default.string,
    version: _propTypes2.default.string,
    homeUrl: _propTypes2.default.string,
    uiState: _propTypes2.default.object,
    uiStateActions: _propTypes2.default.object,
    logoComponent: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.func]),
    actionItems: _propTypes2.default.arrayOf(_propTypes2.default.any)
  }, _class.defaultProps = {
    logoComponent: _logo2.default,
    actionItems: defaultActionItems
  }, _temp;
}

exports.default = PanelHeaderFactory;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvcGFuZWwtaGVhZGVyLmpzIl0sIm5hbWVzIjpbIlN0eWxlZFBhbmVsSGVhZGVyIiwic3R5bGVkIiwiZGl2IiwiYXR0cnMiLCJjbGFzc05hbWUiLCJwcm9wcyIsInRoZW1lIiwic2lkZVBhbmVsSGVhZGVyQmciLCJTdHlsZWRQYW5lbEhlYWRlclRvcCIsIlN0eWxlZFBhbmVsVG9wQWN0aW9ucyIsIlN0eWxlZFBhbmVsQWN0aW9uIiwiYWN0aXZlIiwidGV4dENvbG9ySGwiLCJzdWJ0ZXh0Q29sb3IiLCJzZWNvbmRhcnlCdG5BY3RCZ2QiLCJTdHlsZWRQYW5lbERyb3Bkb3duIiwiZHJvcGRvd25MaXN0QmdkIiwiZHJvcGRvd25MaXN0U2hhZG93IiwidHJhbnNpdGlvblNsb3ciLCJzaG93IiwicGFuZWxIZWFkZXJJY29uIiwidGV4dENvbG9yIiwiUGFuZWxBY3Rpb24iLCJpdGVtIiwib25DbGljayIsImlkIiwibGFiZWwiLCJibGFuayIsImhyZWYiLCJ0b29sdGlwIiwiUGFuZWxJdGVtIiwib25DbG9zZSIsIm9uQ2xpY2tIYW5kbGVyIiwiaWNvbiIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJTYXZlRXhwb3J0RHJvcGRvd24iLCJvbkV4cG9ydEltYWdlIiwib25FeHBvcnREYXRhIiwib25FeHBvcnRDb25maWciLCJvblNhdmVNYXAiLCJkZWZhdWx0QWN0aW9uSXRlbXMiLCJpY29uQ29tcG9uZW50IiwiU2F2ZSIsImRyb3Bkb3duQ29tcG9uZW50IiwiUGFuZWxIZWFkZXJGYWN0b3J5IiwiYXBwTmFtZSIsInZlcnNpb24iLCJob21lVXJsIiwiYWN0aW9uSXRlbXMiLCJ2aXNpYmxlRHJvcGRvd24iLCJzaG93RXhwb3J0RHJvcGRvd24iLCJoaWRlRXhwb3J0RHJvcGRvd24iLCJtYXAiLCJwb3NpdGlvbiIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsInVpU3RhdGUiLCJvYmplY3QiLCJ1aVN0YXRlQWN0aW9ucyIsImxvZ29Db21wb25lbnQiLCJvbmVPZlR5cGUiLCJlbGVtZW50IiwiZnVuYyIsImFycmF5T2YiLCJhbnkiLCJkZWZhdWx0UHJvcHMiLCJLZXBsZXJHbExvZ28iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dW9EQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLG9CQUFvQkMsMkJBQU9DLEdBQVAsQ0FBV0MsS0FBWCxDQUFpQjtBQUN6Q0MsYUFBVztBQUQ4QixDQUFqQixDQUFwQixrQkFHZ0I7QUFBQSxTQUFTQyxNQUFNQyxLQUFOLENBQVlDLGlCQUFyQjtBQUFBLENBSGhCLENBQU47O0FBT0EsSUFBTUMsdUJBQXVCUCwyQkFBT0MsR0FBUCxDQUFXQyxLQUFYLENBQWlCO0FBQzVDQyxhQUFXO0FBRGlDLENBQWpCLENBQXZCLGtCQUFOOztBQVNBLElBQU1LLHdCQUF3QlIsMkJBQU9DLEdBQVAsQ0FBV0MsS0FBWCxDQUFpQjtBQUM3Q0MsYUFBVztBQURrQyxDQUFqQixDQUF4QixrQkFBTjs7QUFNQSxJQUFNTSxvQkFBb0JULDJCQUFPQyxHQUFQLENBQVdDLEtBQVgsQ0FBaUI7QUFDekNDLGFBQVc7QUFEOEIsQ0FBakIsQ0FBcEIsbUJBS0s7QUFBQSxTQUNQQyxNQUFNTSxNQUFOLEdBQWVOLE1BQU1DLEtBQU4sQ0FBWU0sV0FBM0IsR0FBeUNQLE1BQU1DLEtBQU4sQ0FBWU8sWUFEOUM7QUFBQSxDQUxMLEVBb0JrQjtBQUFBLFNBQVNSLE1BQU1DLEtBQU4sQ0FBWVEsa0JBQXJCO0FBQUEsQ0FwQmxCLEVBcUJPO0FBQUEsU0FBU1QsTUFBTUMsS0FBTixDQUFZTSxXQUFyQjtBQUFBLENBckJQLEVB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QUNqQlYsYUFBU1csb0JBQVVDLE1BREY7QUFFakJYLGFBQVNVLG9CQUFVQyxNQUZGO0FBR2pCVixhQUFTUyxvQkFBVUMsTUFIRjtBQUlqQkMsYUFBU0Ysb0JBQVVHLE1BSkY7QUFLakJDLG9CQUFnQkosb0JBQVVHLE1BTFQ7QUFNakJFLG1CQUFlTCxvQkFBVU0sU0FBVixDQUFvQixDQUFDTixvQkFBVU8sT0FBWCxFQUFvQlAsb0JBQVVRLElBQTlCLENBQXBCLENBTkU7QUFPakJoQixpQkFBYVEsb0JBQVVTLE9BQVYsQ0FBa0JULG9CQUFVVSxHQUE1QjtBQVBJLEdBRHJCLFNBV1NDLFlBWFQsR0FXd0I7QUFDcEJOLG1CQUFlTyxjQURLO0FBRXBCcEIsaUJBQWFSO0FBRk8sR0FYeEI7QUFrRUQ7O2tCQUVjSSxrQiIsImZpbGUiOiJwYW5lbC1oZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMTkgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgVG9vbHRpcCB9IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBLZXBsZXJHbExvZ28gZnJvbSAnY29tcG9uZW50cy9jb21tb24vbG9nbyc7XG5pbXBvcnQgeyBDb2RlQWx0LCBTYXZlLCBGaWxlcywgU2hhcmUsIFBpY3R1cmUgfSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9pY29ucyc7XG5pbXBvcnQgQ2xpY2tPdXRzaWRlQ2xvc2VEcm9wZG93biBmcm9tICdjb21wb25lbnRzL3NpZGUtcGFuZWwvcGFuZWwtZHJvcGRvd24nO1xuXG5jb25zdCBTdHlsZWRQYW5lbEhlYWRlciA9IHN0eWxlZC5kaXYuYXR0cnMoe1xuICBjbGFzc05hbWU6ICdzaWRlLXNpZGUtcGFuZWxfX2hlYWRlcidcbn0pYFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNpZGVQYW5lbEhlYWRlckJnfTtcbiAgcGFkZGluZzogMTJweCAxNnB4IDAgMTZweDtcbmA7XG5cbmNvbnN0IFN0eWxlZFBhbmVsSGVhZGVyVG9wID0gc3R5bGVkLmRpdi5hdHRycyh7XG4gIGNsYXNzTmFtZTogJ3NpZGUtcGFuZWxfX2hlYWRlcl9fdG9wJ1xufSlgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgd2lkdGg6IDEwMCU7XG5gO1xuXG5jb25zdCBTdHlsZWRQYW5lbFRvcEFjdGlvbnMgPSBzdHlsZWQuZGl2LmF0dHJzKHtcbiAgY2xhc3NOYW1lOiAnc2lkZS1wYW5lbF9faGVhZGVyX19hY3Rpb25zJ1xufSlgXG4gIGRpc3BsYXk6IGZsZXg7XG5gO1xuXG5jb25zdCBTdHlsZWRQYW5lbEFjdGlvbiA9IHN0eWxlZC5kaXYuYXR0cnMoe1xuICBjbGFzc05hbWU6ICdzaWRlLXBhbmVsX19oZWFkZXJfX2FjdGlvbnMnXG59KWBcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBjb2xvcjogJHtwcm9wcyA9PlxuICAgIHByb3BzLmFjdGl2ZSA/IHByb3BzLnRoZW1lLnRleHRDb2xvckhsIDogcHJvcHMudGhlbWUuc3VidGV4dENvbG9yfTtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAyNnB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG4gIHdpZHRoOiA3MHB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBhIHtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gIH1cblxuICA6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNlY29uZGFyeUJ0bkFjdEJnZH07XG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dENvbG9ySGx9O1xuXG4gICAgYSB7XG4gICAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0Q29sb3JIbH07XG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBTdHlsZWRQYW5lbERyb3Bkb3duID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5kcm9wZG93bkxpc3RCZ2R9O1xuICBib3gtc2hhZG93OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmRyb3Bkb3duTGlzdFNoYWRvd307XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgcGFkZGluZzogMTZweCAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRyYW5zaXRpb246ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudHJhbnNpdGlvblNsb3d9O1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tdG9wOiAke3Byb3BzID0+IHByb3BzLnNob3cgPyAnNnB4JyA6ICcyMHB4J307XG4gIG9wYWNpdHk6ICR7cHJvcHMgPT4gcHJvcHMuc2hvdyA/IDEgOiAwfTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKGNhbGMoLTUwJSArIDIwcHgpKTtcbiAgcG9pbnRlci1ldmVudHM6ICAke3Byb3BzID0+IHByb3BzLnNob3cgPyAnYWxsJyA6ICdub25lJ307XG4gIHotaW5kZXg6IDEwMDA7XG5cbiAgLnNhdmUtZXhwb3J0LWRyb3Bkb3duX19pbm5lciB7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG5cbiAgLnNhdmUtZXhwb3J0LWRyb3Bkb3duX19pdGVtIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICR7cHJvcHMgPT4gcHJvcHMudGhlbWUucGFuZWxIZWFkZXJJY29ufTtcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0Q29sb3J9O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwYWRkaW5nOiAwIDIycHg7XG5cbiAgICA6aG92ZXIge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dENvbG9ySGx9O1xuICAgIH1cblxuICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICBib3JkZXItcmlnaHQ6IDA7XG4gICAgfVxuICB9XG5cbiAgLnNhdmUtZXhwb3J0LWRyb3Bkb3duX190aXRsZSB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBtYXJnaW4tdG9wOiA0cHg7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBQYW5lbEFjdGlvbiA9ICh7IGl0ZW0sIG9uQ2xpY2sgfSkgPT4gKFxuICA8U3R5bGVkUGFuZWxBY3Rpb24gY2xhc3NOYW1lPVwic2lkZS1wYW5lbF9fcGFuZWwtaGVhZGVyX19hY3Rpb25cIlxuICAgIGRhdGEtdGlwIGRhdGEtZm9yPXtgJHtpdGVtLmlkfS1hY3Rpb25gfSBvbkNsaWNrPXtvbkNsaWNrfT5cbiAgICB7aXRlbS5sYWJlbCA/IDxwPntpdGVtLmxhYmVsfTwvcD4gOiBudWxsfVxuICAgIDxhIHRhcmdldD17aXRlbS5ibGFuayA/ICdfYmxhbmsnIDogJyd9IGhyZWY9e2l0ZW0uaHJlZn0+XG4gICAgICA8aXRlbS5pY29uQ29tcG9uZW50IGhlaWdodD1cIjIwcHhcIiAvPlxuICAgIDwvYT5cbiAgICB7aXRlbS50b29sdGlwID8gKDxUb29sdGlwXG4gICAgICBpZD17YCR7aXRlbS5pZH0tYWN0aW9uYH1cbiAgICAgIHBsYWNlPVwiYm90dG9tXCJcbiAgICAgIGRlbGF5U2hvdz17NTAwfVxuICAgICAgZWZmZWN0PVwic29saWRcIlxuICAgID5cbiAgICAgIDxzcGFuPntpdGVtLnRvb2x0aXB9PC9zcGFuPlxuICAgIDwvVG9vbHRpcD4pIDogbnVsbH1cbiAgPC9TdHlsZWRQYW5lbEFjdGlvbj5cbik7XG5cbmNvbnN0IFBhbmVsSXRlbSA9ICh7IG9uQ2xvc2UsIG9uQ2xpY2tIYW5kbGVyLCBsYWJlbCwgaWNvbiB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwic2F2ZS1leHBvcnQtZHJvcGRvd25fX2l0ZW1cIiBvbkNsaWNrPXsoZSkgPT4ge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgb25DbG9zZSgpO1xuICAgIG9uQ2xpY2tIYW5kbGVyKCk7XG4gIH19PlxuICAgIHtpY29ufVxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2F2ZS1leHBvcnQtZHJvcGRvd25fX3RpdGxlXCI+e2xhYmVsfTwvZGl2PlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBjb25zdCBTYXZlRXhwb3J0RHJvcGRvd24gPSAoe1xuICBvbkV4cG9ydEltYWdlLFxuICBvbkV4cG9ydERhdGEsXG4gIG9uRXhwb3J0Q29uZmlnLFxuICBvblNhdmVNYXAsXG4gIHNob3csXG4gIG9uQ2xvc2Vcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8U3R5bGVkUGFuZWxEcm9wZG93biBzaG93PXtzaG93fSBjbGFzc05hbWU9XCJzYXZlLWV4cG9ydC1kcm9wZG93blwiPlxuICAgICAgPENsaWNrT3V0c2lkZUNsb3NlRHJvcGRvd24gY2xhc3NOYW1lPVwic2F2ZS1leHBvcnQtZHJvcGRvd25fX2lubmVyXCJcbiAgICAgICAgc2hvdz17c2hvd31cbiAgICAgICAgb25DbG9zZT17b25DbG9zZX0+XG4gICAgICAgIDxQYW5lbEl0ZW1cbiAgICAgICAgICBsYWJlbD1cIkV4cG9ydCBJbWFnZVwiXG4gICAgICAgICAgb25DbGlja0hhbmRsZXI9e29uRXhwb3J0SW1hZ2V9XG4gICAgICAgICAgb25DbG9zZT17b25DbG9zZX1cbiAgICAgICAgICBpY29uPXsoPFBpY3R1cmUgaGVpZ2h0PVwiMTZweFwiIC8+KX1cbiAgICAgICAgLz5cblxuICAgICAgICA8UGFuZWxJdGVtXG4gICAgICAgICAgbGFiZWw9XCJFeHBvcnQgRGF0YVwiXG4gICAgICAgICAgb25DbGlja0hhbmRsZXI9e29uRXhwb3J0RGF0YX1cbiAgICAgICAgICBvbkNsb3NlPXtvbkNsb3NlfVxuICAgICAgICAgIGljb249eyg8RmlsZXMgaGVpZ2h0PVwiMTZweFwiIC8+KX1cbiAgICAgICAgLz5cblxuICAgICAgICA8UGFuZWxJdGVtXG4gICAgICAgICAgbGFiZWw9XCJFeHBvcnQgQ29uZmlnXCJcbiAgICAgICAgICBvbkNsaWNrSGFuZGxlcj17b25FeHBvcnRDb25maWd9XG4gICAgICAgICAgb25DbG9zZT17b25DbG9zZX1cbiAgICAgICAgICBpY29uPXsoPENvZGVBbHQgaGVpZ2h0PVwiMTZweFwiIC8+KX1cbiAgICAgICAgLz5cblxuICAgICAgICB7b25TYXZlTWFwID8gKFxuICAgICAgICAgIDxQYW5lbEl0ZW1cbiAgICAgICAgICAgIGxhYmVsPVwiU2F2ZSBNYXAgVXJsXCJcbiAgICAgICAgICAgIG9uQ2xpY2tIYW5kbGVyPXtvblNhdmVNYXB9XG4gICAgICAgICAgICBvbkNsb3NlPXtvbkNsb3NlfVxuICAgICAgICAgICAgaWNvbj17KDxTaGFyZSBoZWlnaHQ9XCIxNnB4XCIgLz4pfVxuICAgICAgICAgIC8+XG4gICAgICAgICkgOiBudWxsfVxuICAgICAgPC9DbGlja091dHNpZGVDbG9zZURyb3Bkb3duPlxuICAgIDwvU3R5bGVkUGFuZWxEcm9wZG93bj5cbiAgKTtcbn07XG5cbmNvbnN0IGRlZmF1bHRBY3Rpb25JdGVtcyA9IFtcbiAge1xuICAgIGlkOiAnc2F2ZScsXG4gICAgaWNvbkNvbXBvbmVudDogU2F2ZSxcbiAgICBvbkNsaWNrOiAoKSA9PiB7IH0sXG4gICAgbGFiZWw6ICdTaGFyZScsXG4gICAgZHJvcGRvd25Db21wb25lbnQ6IFNhdmVFeHBvcnREcm9wZG93blxuICB9XG5dO1xuXG5mdW5jdGlvbiBQYW5lbEhlYWRlckZhY3RvcnkoKSB7XG4gIHJldHVybiBjbGFzcyBQYW5lbEhlYWRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgIGFwcE5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICB2ZXJzaW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgaG9tZVVybDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIHVpU3RhdGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgICB1aVN0YXRlQWN0aW9uczogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAgIGxvZ29Db21wb25lbnQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5lbGVtZW50LCBQcm9wVHlwZXMuZnVuY10pLFxuICAgICAgYWN0aW9uSXRlbXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5hbnkpXG4gICAgfTtcblxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICBsb2dvQ29tcG9uZW50OiBLZXBsZXJHbExvZ28sXG4gICAgICBhY3Rpb25JdGVtczogZGVmYXVsdEFjdGlvbkl0ZW1zXG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgYXBwTmFtZSxcbiAgICAgICAgdmVyc2lvbixcbiAgICAgICAgaG9tZVVybCxcbiAgICAgICAgYWN0aW9uSXRlbXMsXG4gICAgICAgIG9uU2F2ZU1hcCxcbiAgICAgICAgb25FeHBvcnRJbWFnZSxcbiAgICAgICAgb25FeHBvcnREYXRhLFxuICAgICAgICBvbkV4cG9ydENvbmZpZyxcbiAgICAgICAgdmlzaWJsZURyb3Bkb3duLFxuICAgICAgICBzaG93RXhwb3J0RHJvcGRvd24sXG4gICAgICAgIGhpZGVFeHBvcnREcm9wZG93blxuICAgICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxTdHlsZWRQYW5lbEhlYWRlciBjbGFzc05hbWU9XCJzaWRlLXBhbmVsX19wYW5lbC1oZWFkZXJcIj5cbiAgICAgICAgICA8U3R5bGVkUGFuZWxIZWFkZXJUb3AgY2xhc3NOYW1lPVwic2lkZS1wYW5lbF9fcGFuZWwtaGVhZGVyX190b3BcIj5cbiAgICAgICAgICAgIDx0aGlzLnByb3BzLmxvZ29Db21wb25lbnQgYXBwTmFtZT17YXBwTmFtZX0gdmVyc2lvbj17dmVyc2lvbn0gaG9tZVVybD17aG9tZVVybH0gLz5cbiAgICAgICAgICAgIDxTdHlsZWRQYW5lbFRvcEFjdGlvbnM+XG4gICAgICAgICAgICAgIHthY3Rpb25JdGVtcy5tYXAoaXRlbSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlLXBhbmVsX19wYW5lbC1oZWFkZXJfX3JpZ2h0XCJcbiAgICAgICAgICAgICAgICAgIGtleT17aXRlbS5pZH0gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScgfX0+XG4gICAgICAgICAgICAgICAgICA8UGFuZWxBY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgaXRlbT17aXRlbX1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLmRyb3Bkb3duQ29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93RXhwb3J0RHJvcGRvd24oaXRlbS5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ub25DbGljaygpO1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIHtpdGVtLmRyb3Bkb3duQ29tcG9uZW50ID8gKFxuICAgICAgICAgICAgICAgICAgICA8aXRlbS5kcm9wZG93bkNvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xvc2U9e2hpZGVFeHBvcnREcm9wZG93bn1cbiAgICAgICAgICAgICAgICAgICAgICBzaG93PXt2aXNpYmxlRHJvcGRvd24gPT09IGl0ZW0uaWR9XG4gICAgICAgICAgICAgICAgICAgICAgb25TYXZlTWFwPXtvblNhdmVNYXB9XG4gICAgICAgICAgICAgICAgICAgICAgb25FeHBvcnREYXRhPXtvbkV4cG9ydERhdGF9XG4gICAgICAgICAgICAgICAgICAgICAgb25FeHBvcnRJbWFnZT17b25FeHBvcnRJbWFnZX1cbiAgICAgICAgICAgICAgICAgICAgICBvbkV4cG9ydENvbmZpZz17b25FeHBvcnRDb25maWd9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L1N0eWxlZFBhbmVsVG9wQWN0aW9ucz5cbiAgICAgICAgICA8L1N0eWxlZFBhbmVsSGVhZGVyVG9wPlxuICAgICAgICA8L1N0eWxlZFBhbmVsSGVhZGVyPlxuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFuZWxIZWFkZXJGYWN0b3J5O1xuIl19
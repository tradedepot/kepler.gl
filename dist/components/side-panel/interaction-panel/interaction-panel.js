'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  border-top: 1px solid ', ';\n'], ['\n  border-top: 1px solid ', ';\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  padding-bottom: 6px;\n'], ['\n  padding-bottom: 6px;\n']); // Copyright (c) 2019 Uber Technologies, Inc.
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

var _switch = require('../../common/switch');

var _switch2 = _interopRequireDefault(_switch);

var _brushConfig = require('./brush-config');

var _brushConfig2 = _interopRequireDefault(_brushConfig);

var _tooltipConfig = require('./tooltip-config');

var _tooltipConfig2 = _interopRequireDefault(_tooltipConfig);

var _styledComponents3 = require('../../common/styled-components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyledPanelContent = _styledComponents3.PanelContent.extend(_templateObject, function (props) {
  return props.theme.panelBorderColor;
});

var StyledInteractionPanel = _styledComponents2.default.div(_templateObject2);

InteractionPanelFactory.deps = [_tooltipConfig2.default, _brushConfig2.default];

function InteractionPanelFactory(TooltipConfig, BrushConfig) {
  var _class, _temp2;

  return _temp2 = _class = function (_Component) {
    (0, _inherits3.default)(InteractionPanel, _Component);

    function InteractionPanel() {
      var _ref;

      var _temp, _this, _ret;

      (0, _classCallCheck3.default)(this, InteractionPanel);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = InteractionPanel.__proto__ || Object.getPrototypeOf(InteractionPanel)).call.apply(_ref, [this].concat(args))), _this), _this.state = { isConfigActive: false }, _this._updateConfig = function (newProp) {
        _this.props.onConfigChange((0, _extends3.default)({}, _this.props.config, newProp));
      }, _this._enableConfig = function () {
        _this.setState({ isConfigActive: !_this.state.isConfigActive });
      }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(InteractionPanel, [{
      key: 'render',
      value: function render() {
        var _this2 = this;

        var _props = this.props,
            config = _props.config,
            datasets = _props.datasets;

        var onChange = function onChange(newConfig) {
          return _this2._updateConfig({ config: newConfig });
        };
        var template = null;

        switch (config.id) {
          case 'tooltip':
            template = _react2.default.createElement(TooltipConfig, {
              datasets: datasets,
              config: config.config,
              onChange: onChange
            });
            break;

          case 'brush':
            template = _react2.default.createElement(BrushConfig, { config: config.config, onChange: onChange });
            break;

          default:
            break;
        }

        return _react2.default.createElement(
          StyledInteractionPanel,
          { className: 'interaction-panel' },
          _react2.default.createElement(
            _styledComponents3.StyledPanelHeader,
            {
              className: 'interaction-panel__header',
              onClick: this._enableConfig
            },
            _react2.default.createElement(
              _styledComponents3.PanelHeaderContent,
              { className: 'interaction-panel__header__content' },
              _react2.default.createElement(
                'div',
                { className: 'interaction-panel__header__icon icon' },
                _react2.default.createElement(config.iconComponent, { height: '12px' })
              ),
              _react2.default.createElement(
                'div',
                { className: 'interaction-panel__header__title' },
                _react2.default.createElement(
                  _styledComponents3.PanelHeaderTitle,
                  null,
                  config.id
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'interaction-panel__header__actions' },
              _react2.default.createElement(_switch2.default, {
                checked: config.enabled,
                id: config.id + '-toggle',
                onChange: function onChange() {
                  return _this2._updateConfig({ enabled: !config.enabled });
                },
                secondary: true
              })
            )
          ),
          config.enabled && _react2.default.createElement(
            StyledPanelContent,
            { className: 'interaction-panel__content' },
            template
          )
        );
      }
    }]);
    return InteractionPanel;
  }(_react.Component), _class.propTypes = {
    datasets: _propTypes2.default.object.isRequired,
    config: _propTypes2.default.object.isRequired,
    onConfigChange: _propTypes2.default.func.isRequired
  }, _temp2;
}

exports.default = InteractionPanelFactory;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvaW50ZXJhY3Rpb24tcGFuZWwvaW50ZXJhY3Rpb24tcGFuZWwuanMiXSwibmFtZXMiOlsiU3R5bGVkUGFuZWxDb250ZW50IiwiUGFuZWxDb250ZW50IiwiZXh0ZW5kIiwicHJvcHMiLCJ0aGVtZSIsInBhbmVsQm9yZGVyQ29sb3IiLCJTdHlsZWRJbnRlcmFjdGlvblBhbmVsIiwic3R5bGVkIiwiZGl2IiwiSW50ZXJhY3Rpb25QYW5lbEZhY3RvcnkiLCJkZXBzIiwiVG9vbHRpcENvbmZpZ0ZhY3RvcnkiLCJCcnVzaENvbmZpZ0ZhY3RvcnkiLCJUb29sdGlwQ29uZmlnIiwiQnJ1c2hDb25maWciLCJzdGF0ZSIsImlzQ29uZmlnQWN0aXZlIiwiX3VwZGF0ZUNvbmZpZyIsIm9uQ29uZmlnQ2hhbmdlIiwiY29uZmlnIiwibmV3UHJvcCIsIl9lbmFibGVDb25maWciLCJzZXRTdGF0ZSIsImRhdGFzZXRzIiwib25DaGFuZ2UiLCJuZXdDb25maWciLCJ0ZW1wbGF0ZSIsImlkIiwiZW5hYmxlZCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZIQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUVBOzs7O0FBT0EsSUFBTUEscUJBQXFCQyxnQ0FBYUMsTUFBbEMsa0JBQ29CO0FBQUEsU0FBU0MsTUFBTUMsS0FBTixDQUFZQyxnQkFBckI7QUFBQSxDQURwQixDQUFOOztBQUlBLElBQU1DLHlCQUF5QkMsMkJBQU9DLEdBQWhDLGtCQUFOOztBQUlBQyx3QkFBd0JDLElBQXhCLEdBQStCLENBQzdCQyx1QkFENkIsRUFFN0JDLHFCQUY2QixDQUEvQjs7QUFLQSxTQUFTSCx1QkFBVCxDQUFpQ0ksYUFBakMsRUFBZ0RDLFdBQWhELEVBQTZEO0FBQUE7O0FBQzNEO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUEsME5BT0VDLEtBUEYsR0FPVSxFQUFDQyxnQkFBZ0IsS0FBakIsRUFQVixRQVNFQyxhQVRGLEdBU2tCLG1CQUFXO0FBQ3pCLGNBQUtkLEtBQUwsQ0FBV2UsY0FBWCw0QkFDSyxNQUFLZixLQUFMLENBQVdnQixNQURoQixFQUVLQyxPQUZMO0FBSUQsT0FkSCxRQWdCRUMsYUFoQkYsR0FnQmtCLFlBQU07QUFDcEIsY0FBS0MsUUFBTCxDQUFjLEVBQUNOLGdCQUFnQixDQUFDLE1BQUtELEtBQUwsQ0FBV0MsY0FBN0IsRUFBZDtBQUNELE9BbEJIO0FBQUE7O0FBQUE7QUFBQTtBQUFBLCtCQW9CVztBQUFBOztBQUFBLHFCQUNvQixLQUFLYixLQUR6QjtBQUFBLFlBQ0FnQixNQURBLFVBQ0FBLE1BREE7QUFBQSxZQUNRSSxRQURSLFVBQ1FBLFFBRFI7O0FBRVAsWUFBTUMsV0FBVyxTQUFYQSxRQUFXO0FBQUEsaUJBQWEsT0FBS1AsYUFBTCxDQUFtQixFQUFDRSxRQUFRTSxTQUFULEVBQW5CLENBQWI7QUFBQSxTQUFqQjtBQUNBLFlBQUlDLFdBQVcsSUFBZjs7QUFFQSxnQkFBUVAsT0FBT1EsRUFBZjtBQUNFLGVBQUssU0FBTDtBQUNFRCx1QkFDRSw4QkFBQyxhQUFEO0FBQ0Usd0JBQVVILFFBRFo7QUFFRSxzQkFBUUosT0FBT0EsTUFGakI7QUFHRSx3QkFBVUs7QUFIWixjQURGO0FBT0E7O0FBRUYsZUFBSyxPQUFMO0FBQ0VFLHVCQUFXLDhCQUFDLFdBQUQsSUFBYSxRQUFRUCxPQUFPQSxNQUE1QixFQUFvQyxVQUFVSyxRQUE5QyxHQUFYO0FBQ0E7O0FBRUY7QUFDRTtBQWhCSjs7QUFtQkEsZUFDRTtBQUFDLGdDQUFEO0FBQUEsWUFBd0IsV0FBVSxtQkFBbEM7QUFDRTtBQUFDLGdEQUFEO0FBQUE7QUFDRSx5QkFBVSwyQkFEWjtBQUVFLHVCQUFTLEtBQUtIO0FBRmhCO0FBSUU7QUFBQyxtREFBRDtBQUFBLGdCQUFvQixXQUFVLG9DQUE5QjtBQUNFO0FBQUE7QUFBQSxrQkFBSyxXQUFVLHNDQUFmO0FBQ0UsOENBQUMsTUFBRCxDQUFRLGFBQVIsSUFBc0IsUUFBTyxNQUE3QjtBQURGLGVBREY7QUFJRTtBQUFBO0FBQUEsa0JBQUssV0FBVSxrQ0FBZjtBQUNFO0FBQUMscURBQUQ7QUFBQTtBQUFtQkYseUJBQU9RO0FBQTFCO0FBREY7QUFKRixhQUpGO0FBWUU7QUFBQTtBQUFBLGdCQUFLLFdBQVUsb0NBQWY7QUFDRSw0Q0FBQyxnQkFBRDtBQUNFLHlCQUFTUixPQUFPUyxPQURsQjtBQUVFLG9CQUFPVCxPQUFPUSxFQUFkLFlBRkY7QUFHRSwwQkFBVTtBQUFBLHlCQUFNLE9BQUtWLGFBQUwsQ0FBbUIsRUFBQ1csU0FBUyxDQUFDVCxPQUFPUyxPQUFsQixFQUFuQixDQUFOO0FBQUEsaUJBSFo7QUFJRTtBQUpGO0FBREY7QUFaRixXQURGO0FBc0JHVCxpQkFBT1MsT0FBUCxJQUNDO0FBQUMsOEJBQUQ7QUFBQSxjQUFvQixXQUFVLDRCQUE5QjtBQUNHRjtBQURIO0FBdkJKLFNBREY7QUE4QkQ7QUExRUg7QUFBQTtBQUFBLElBQXNDRyxnQkFBdEMsVUFDU0MsU0FEVCxHQUNxQjtBQUNqQlAsY0FBVVEsb0JBQVVDLE1BQVYsQ0FBaUJDLFVBRFY7QUFFakJkLFlBQVFZLG9CQUFVQyxNQUFWLENBQWlCQyxVQUZSO0FBR2pCZixvQkFBZ0JhLG9CQUFVRyxJQUFWLENBQWVEO0FBSGQsR0FEckI7QUE0RUQ7O2tCQUVjeEIsdUIiLCJmaWxlIjoiaW50ZXJhY3Rpb24tcGFuZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMTkgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBTd2l0Y2ggZnJvbSAnY29tcG9uZW50cy9jb21tb24vc3dpdGNoJztcblxuaW1wb3J0IEJydXNoQ29uZmlnRmFjdG9yeSBmcm9tICcuL2JydXNoLWNvbmZpZyc7XG5pbXBvcnQgVG9vbHRpcENvbmZpZ0ZhY3RvcnkgZnJvbSAnLi90b29sdGlwLWNvbmZpZyc7XG5cbmltcG9ydCB7XG4gIFN0eWxlZFBhbmVsSGVhZGVyLFxuICBQYW5lbEhlYWRlclRpdGxlLFxuICBQYW5lbEhlYWRlckNvbnRlbnQsXG4gIFBhbmVsQ29udGVudFxufSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9zdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IFN0eWxlZFBhbmVsQ29udGVudCA9IFBhbmVsQ29udGVudC5leHRlbmRgXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAke3Byb3BzID0+IHByb3BzLnRoZW1lLnBhbmVsQm9yZGVyQ29sb3J9O1xuYDtcblxuY29uc3QgU3R5bGVkSW50ZXJhY3Rpb25QYW5lbCA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmctYm90dG9tOiA2cHg7XG5gO1xuXG5JbnRlcmFjdGlvblBhbmVsRmFjdG9yeS5kZXBzID0gW1xuICBUb29sdGlwQ29uZmlnRmFjdG9yeSxcbiAgQnJ1c2hDb25maWdGYWN0b3J5XG5dO1xuXG5mdW5jdGlvbiBJbnRlcmFjdGlvblBhbmVsRmFjdG9yeShUb29sdGlwQ29uZmlnLCBCcnVzaENvbmZpZykge1xuICByZXR1cm4gY2xhc3MgSW50ZXJhY3Rpb25QYW5lbCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgIGRhdGFzZXRzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgICBjb25maWc6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICAgIG9uQ29uZmlnQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG4gICAgfTtcblxuICAgIHN0YXRlID0ge2lzQ29uZmlnQWN0aXZlOiBmYWxzZX07XG5cbiAgICBfdXBkYXRlQ29uZmlnID0gbmV3UHJvcCA9PiB7XG4gICAgICB0aGlzLnByb3BzLm9uQ29uZmlnQ2hhbmdlKHtcbiAgICAgICAgLi4udGhpcy5wcm9wcy5jb25maWcsXG4gICAgICAgIC4uLm5ld1Byb3BcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBfZW5hYmxlQ29uZmlnID0gKCkgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7aXNDb25maWdBY3RpdmU6ICF0aGlzLnN0YXRlLmlzQ29uZmlnQWN0aXZlfSk7XG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgIGNvbnN0IHtjb25maWcsIGRhdGFzZXRzfSA9IHRoaXMucHJvcHM7XG4gICAgICBjb25zdCBvbkNoYW5nZSA9IG5ld0NvbmZpZyA9PiB0aGlzLl91cGRhdGVDb25maWcoe2NvbmZpZzogbmV3Q29uZmlnfSk7XG4gICAgICBsZXQgdGVtcGxhdGUgPSBudWxsO1xuXG4gICAgICBzd2l0Y2ggKGNvbmZpZy5pZCkge1xuICAgICAgICBjYXNlICd0b29sdGlwJzpcbiAgICAgICAgICB0ZW1wbGF0ZSA9IChcbiAgICAgICAgICAgIDxUb29sdGlwQ29uZmlnXG4gICAgICAgICAgICAgIGRhdGFzZXRzPXtkYXRhc2V0c31cbiAgICAgICAgICAgICAgY29uZmlnPXtjb25maWcuY29uZmlnfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnYnJ1c2gnOlxuICAgICAgICAgIHRlbXBsYXRlID0gPEJydXNoQ29uZmlnIGNvbmZpZz17Y29uZmlnLmNvbmZpZ30gb25DaGFuZ2U9e29uQ2hhbmdlfSAvPjtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8U3R5bGVkSW50ZXJhY3Rpb25QYW5lbCBjbGFzc05hbWU9XCJpbnRlcmFjdGlvbi1wYW5lbFwiPlxuICAgICAgICAgIDxTdHlsZWRQYW5lbEhlYWRlclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW50ZXJhY3Rpb24tcGFuZWxfX2hlYWRlclwiXG4gICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl9lbmFibGVDb25maWd9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFBhbmVsSGVhZGVyQ29udGVudCBjbGFzc05hbWU9XCJpbnRlcmFjdGlvbi1wYW5lbF9faGVhZGVyX19jb250ZW50XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW50ZXJhY3Rpb24tcGFuZWxfX2hlYWRlcl9faWNvbiBpY29uXCI+XG4gICAgICAgICAgICAgICAgPGNvbmZpZy5pY29uQ29tcG9uZW50IGhlaWdodD1cIjEycHhcIi8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImludGVyYWN0aW9uLXBhbmVsX19oZWFkZXJfX3RpdGxlXCI+XG4gICAgICAgICAgICAgICAgPFBhbmVsSGVhZGVyVGl0bGU+e2NvbmZpZy5pZH08L1BhbmVsSGVhZGVyVGl0bGU+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9QYW5lbEhlYWRlckNvbnRlbnQ+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImludGVyYWN0aW9uLXBhbmVsX19oZWFkZXJfX2FjdGlvbnNcIj5cbiAgICAgICAgICAgICAgPFN3aXRjaFxuICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2NvbmZpZy5lbmFibGVkfVxuICAgICAgICAgICAgICAgIGlkPXtgJHtjb25maWcuaWR9LXRvZ2dsZWB9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHRoaXMuX3VwZGF0ZUNvbmZpZyh7ZW5hYmxlZDogIWNvbmZpZy5lbmFibGVkfSl9XG4gICAgICAgICAgICAgICAgc2Vjb25kYXJ5XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L1N0eWxlZFBhbmVsSGVhZGVyPlxuICAgICAgICAgIHtjb25maWcuZW5hYmxlZCAmJiAoXG4gICAgICAgICAgICA8U3R5bGVkUGFuZWxDb250ZW50IGNsYXNzTmFtZT1cImludGVyYWN0aW9uLXBhbmVsX19jb250ZW50XCI+XG4gICAgICAgICAgICAgIHt0ZW1wbGF0ZX1cbiAgICAgICAgICAgIDwvU3R5bGVkUGFuZWxDb250ZW50PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvU3R5bGVkSW50ZXJhY3Rpb25QYW5lbD5cbiAgICAgICk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEludGVyYWN0aW9uUGFuZWxGYWN0b3J5O1xuIl19
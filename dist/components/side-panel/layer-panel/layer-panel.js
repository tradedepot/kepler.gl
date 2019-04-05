'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  font-size: 12px;\n  border-radius: 1px;\n  margin-bottom: 8px;\n\n  &.dragging {\n    cursor: move;\n  }\n'], ['\n  font-size: 12px;\n  border-radius: 1px;\n  margin-bottom: 8px;\n\n  &.dragging {\n    cursor: move;\n  }\n']); // Copyright (c) 2019 Uber Technologies, Inc.
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

var _reactAnythingSortable = require('react-anything-sortable');

var _layerConfigurator = require('./layer-configurator');

var _layerConfigurator2 = _interopRequireDefault(_layerConfigurator);

var _layerPanelHeader = require('./layer-panel-header');

var _layerPanelHeader2 = _interopRequireDefault(_layerPanelHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PanelWrapper = _styledComponents2.default.div(_templateObject);

function LayerPanelFactory() {
  var _class, _class2, _temp2;

  var LayerPanel = (0, _reactAnythingSortable.sortable)(_class = (_temp2 = _class2 = function (_Component) {
    (0, _inherits3.default)(LayerPanel, _Component);

    function LayerPanel() {
      var _ref;

      var _temp, _this, _ret;

      (0, _classCallCheck3.default)(this, LayerPanel);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = LayerPanel.__proto__ || Object.getPrototypeOf(LayerPanel)).call.apply(_ref, [this].concat(args))), _this), _this.updateLayerConfig = function (newProp) {
        _this.props.layerConfigChange(_this.props.layer, newProp);
      }, _this.updateLayerType = function (newType) {
        _this.props.layerTypeChange(_this.props.layer, newType);
      }, _this.updateLayerVisConfig = function (newVisConfig) {
        _this.props.layerVisConfigChange(_this.props.layer, newVisConfig);
      }, _this.updateLayerVisualChannelConfig = function (newConfig, channel, scaleKey) {
        _this.props.layerVisualChannelConfigChange(_this.props.layer, newConfig, channel, scaleKey);
      }, _this._updateLayerLabel = function (_ref2) {
        var value = _ref2.target.value;

        _this.updateLayerConfig({ label: value });
      }, _this._toggleVisibility = function (e) {
        e.stopPropagation();
        var isVisible = !_this.props.layer.config.isVisible;
        _this.updateLayerConfig({ isVisible: isVisible });
      }, _this._toggleEnableConfig = function (e) {
        e.stopPropagation();
        var isConfigActive = _this.props.layer.config.isConfigActive;

        _this.updateLayerConfig({ isConfigActive: !isConfigActive });
      }, _this._removeLayer = function (e) {
        e.stopPropagation();
        _this.props.removeLayer(_this.props.idx);
      }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(LayerPanel, [{
      key: 'render',
      value: function render() {
        var _props = this.props,
            layer = _props.layer,
            idx = _props.idx,
            datasets = _props.datasets,
            layerTypeOptions = _props.layerTypeOptions;
        var config = layer.config;
        var isConfigActive = config.isConfigActive;


        return _react2.default.createElement(
          PanelWrapper,
          {
            active: isConfigActive,
            className: 'layer-panel ' + this.props.className,
            style: this.props.style,
            onMouseDown: this.props.onMouseDown,
            onTouchStart: this.props.onTouchStart
          },
          _react2.default.createElement(_layerPanelHeader2.default, {
            isConfigActive: isConfigActive,
            id: layer.id,
            idx: idx,
            isVisible: config.isVisible,
            label: config.label,
            labelRCGColorValues: datasets[config.dataId].color,
            layerType: layer.name,
            onToggleEnableConfig: this._toggleEnableConfig,
            onToggleVisibility: this._toggleVisibility,
            onUpdateLayerLabel: this._updateLayerLabel,
            onRemoveLayer: this._removeLayer
          }),
          isConfigActive && _react2.default.createElement(_layerConfigurator2.default, {
            layer: layer,
            datasets: datasets,
            layerTypeOptions: layerTypeOptions,
            openModal: this.props.openModal,
            updateLayerConfig: this.updateLayerConfig,
            updateLayerVisualChannelConfig: this.updateLayerVisualChannelConfig,
            updateLayerType: this.updateLayerType,
            updateLayerVisConfig: this.updateLayerVisConfig
          })
        );
      }
    }]);
    return LayerPanel;
  }(_react.Component), _class2.propTypes = {
    layer: _propTypes2.default.object.isRequired,
    datasets: _propTypes2.default.object.isRequired,
    idx: _propTypes2.default.number.isRequired,
    layerConfigChange: _propTypes2.default.func.isRequired,
    layerTypeChange: _propTypes2.default.func.isRequired,
    openModal: _propTypes2.default.func.isRequired,
    removeLayer: _propTypes2.default.func.isRequired,
    onCloseConfig: _propTypes2.default.func,

    layerTypeOptions: _propTypes2.default.arrayOf(_propTypes2.default.any),
    layerVisConfigChange: _propTypes2.default.func,
    layerVisualChannelConfigChange: _propTypes2.default.func
  }, _temp2)) || _class;

  return LayerPanel;
}

exports.default = LayerPanelFactory;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvbGF5ZXItcGFuZWwvbGF5ZXItcGFuZWwuanMiXSwibmFtZXMiOlsiUGFuZWxXcmFwcGVyIiwic3R5bGVkIiwiZGl2IiwiTGF5ZXJQYW5lbEZhY3RvcnkiLCJMYXllclBhbmVsIiwic29ydGFibGUiLCJ1cGRhdGVMYXllckNvbmZpZyIsInByb3BzIiwibGF5ZXJDb25maWdDaGFuZ2UiLCJsYXllciIsIm5ld1Byb3AiLCJ1cGRhdGVMYXllclR5cGUiLCJsYXllclR5cGVDaGFuZ2UiLCJuZXdUeXBlIiwidXBkYXRlTGF5ZXJWaXNDb25maWciLCJsYXllclZpc0NvbmZpZ0NoYW5nZSIsIm5ld1Zpc0NvbmZpZyIsInVwZGF0ZUxheWVyVmlzdWFsQ2hhbm5lbENvbmZpZyIsIm5ld0NvbmZpZyIsImNoYW5uZWwiLCJzY2FsZUtleSIsImxheWVyVmlzdWFsQ2hhbm5lbENvbmZpZ0NoYW5nZSIsIl91cGRhdGVMYXllckxhYmVsIiwidmFsdWUiLCJ0YXJnZXQiLCJsYWJlbCIsIl90b2dnbGVWaXNpYmlsaXR5IiwiZSIsInN0b3BQcm9wYWdhdGlvbiIsImlzVmlzaWJsZSIsImNvbmZpZyIsIl90b2dnbGVFbmFibGVDb25maWciLCJpc0NvbmZpZ0FjdGl2ZSIsIl9yZW1vdmVMYXllciIsInJlbW92ZUxheWVyIiwiaWR4IiwiZGF0YXNldHMiLCJsYXllclR5cGVPcHRpb25zIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJvbk1vdXNlRG93biIsIm9uVG91Y2hTdGFydCIsImlkIiwiZGF0YUlkIiwiY29sb3IiLCJuYW1lIiwib3Blbk1vZGFsIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsIm51bWJlciIsImZ1bmMiLCJvbkNsb3NlQ29uZmlnIiwiYXJyYXlPZiIsImFueSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b1NBQUE7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UlI7O0FBVWpCaEIsc0JBQWtCWSxvQkFBVU0sT0FBVixDQUFrQk4sb0JBQVVPLEdBQTVCLENBVkQ7QUFXakJ6QywwQkFBc0JrQyxvQkFBVUksSUFYZjtBQVlqQmhDLG9DQUFnQzRCLG9CQUFVSTtBQVp6QixHQUhNOztBQXNHM0IsU0FBT2pELFVBQVA7QUFDRDs7a0JBRWNELGlCIiwiZmlsZSI6ImxheWVyLXBhbmVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDE5IFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQge3NvcnRhYmxlfSBmcm9tICdyZWFjdC1hbnl0aGluZy1zb3J0YWJsZSc7XG5cbmltcG9ydCBMYXllckNvbmZpZ3VyYXRvciBmcm9tICcuL2xheWVyLWNvbmZpZ3VyYXRvcic7XG5pbXBvcnQgTGF5ZXJQYW5lbEhlYWRlciBmcm9tICcuL2xheWVyLXBhbmVsLWhlYWRlcic7XG5cbmNvbnN0IFBhbmVsV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgYm9yZGVyLXJhZGl1czogMXB4O1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG5cbiAgJi5kcmFnZ2luZyB7XG4gICAgY3Vyc29yOiBtb3ZlO1xuICB9XG5gO1xuXG5mdW5jdGlvbiBMYXllclBhbmVsRmFjdG9yeSgpIHtcbiAgQHNvcnRhYmxlXG4gIGNsYXNzIExheWVyUGFuZWwgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICBsYXllcjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgICAgZGF0YXNldHM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICAgIGlkeDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgICAgbGF5ZXJDb25maWdDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICBsYXllclR5cGVDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICBvcGVuTW9kYWw6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICByZW1vdmVMYXllcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICAgIG9uQ2xvc2VDb25maWc6IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgICBsYXllclR5cGVPcHRpb25zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuYW55KSxcbiAgICAgIGxheWVyVmlzQ29uZmlnQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgIGxheWVyVmlzdWFsQ2hhbm5lbENvbmZpZ0NoYW5nZTogUHJvcFR5cGVzLmZ1bmNcbiAgICB9O1xuXG4gICAgdXBkYXRlTGF5ZXJDb25maWcgPSBuZXdQcm9wID0+IHtcbiAgICAgIHRoaXMucHJvcHMubGF5ZXJDb25maWdDaGFuZ2UodGhpcy5wcm9wcy5sYXllciwgbmV3UHJvcCk7XG4gICAgfTtcblxuICAgIHVwZGF0ZUxheWVyVHlwZSA9IG5ld1R5cGUgPT4ge1xuICAgICAgdGhpcy5wcm9wcy5sYXllclR5cGVDaGFuZ2UodGhpcy5wcm9wcy5sYXllciwgbmV3VHlwZSk7XG4gICAgfTtcblxuICAgIHVwZGF0ZUxheWVyVmlzQ29uZmlnID0gbmV3VmlzQ29uZmlnID0+IHtcbiAgICAgIHRoaXMucHJvcHMubGF5ZXJWaXNDb25maWdDaGFuZ2UodGhpcy5wcm9wcy5sYXllciwgbmV3VmlzQ29uZmlnKTtcbiAgICB9O1xuXG4gICAgdXBkYXRlTGF5ZXJWaXN1YWxDaGFubmVsQ29uZmlnID0gKG5ld0NvbmZpZywgY2hhbm5lbCwgc2NhbGVLZXkpID0+IHtcbiAgICAgIHRoaXMucHJvcHMubGF5ZXJWaXN1YWxDaGFubmVsQ29uZmlnQ2hhbmdlKFxuICAgICAgICB0aGlzLnByb3BzLmxheWVyLFxuICAgICAgICBuZXdDb25maWcsXG4gICAgICAgIGNoYW5uZWwsXG4gICAgICAgIHNjYWxlS2V5XG4gICAgICApO1xuICAgIH07XG5cbiAgICBfdXBkYXRlTGF5ZXJMYWJlbCA9ICh7dGFyZ2V0OiB7dmFsdWV9fSkgPT4ge1xuICAgICAgdGhpcy51cGRhdGVMYXllckNvbmZpZyh7bGFiZWw6IHZhbHVlfSk7XG4gICAgfTtcblxuICAgIF90b2dnbGVWaXNpYmlsaXR5ID0gZSA9PiB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgY29uc3QgaXNWaXNpYmxlID0gIXRoaXMucHJvcHMubGF5ZXIuY29uZmlnLmlzVmlzaWJsZTtcbiAgICAgIHRoaXMudXBkYXRlTGF5ZXJDb25maWcoe2lzVmlzaWJsZX0pO1xuICAgIH07XG5cbiAgICBfdG9nZ2xlRW5hYmxlQ29uZmlnID0gZSA9PiB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgY29uc3Qge2xheWVyOiB7Y29uZmlnOiB7aXNDb25maWdBY3RpdmV9fX0gPSB0aGlzLnByb3BzO1xuICAgICAgdGhpcy51cGRhdGVMYXllckNvbmZpZyh7aXNDb25maWdBY3RpdmU6ICFpc0NvbmZpZ0FjdGl2ZX0pO1xuICAgIH07XG5cbiAgICBfcmVtb3ZlTGF5ZXIgPSBlID0+IHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB0aGlzLnByb3BzLnJlbW92ZUxheWVyKHRoaXMucHJvcHMuaWR4KTtcbiAgICB9O1xuICAgIHJlbmRlcigpIHtcbiAgICAgIGNvbnN0IHtsYXllciwgaWR4LCBkYXRhc2V0cywgbGF5ZXJUeXBlT3B0aW9uc30gPSB0aGlzLnByb3BzO1xuICAgICAgY29uc3Qge2NvbmZpZ30gPSBsYXllcjtcbiAgICAgIGNvbnN0IHtpc0NvbmZpZ0FjdGl2ZX0gPSBjb25maWc7XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxQYW5lbFdyYXBwZXJcbiAgICAgICAgICBhY3RpdmU9e2lzQ29uZmlnQWN0aXZlfVxuICAgICAgICAgIGNsYXNzTmFtZT17YGxheWVyLXBhbmVsICR7dGhpcy5wcm9wcy5jbGFzc05hbWV9YH1cbiAgICAgICAgICBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX1cbiAgICAgICAgICBvbk1vdXNlRG93bj17dGhpcy5wcm9wcy5vbk1vdXNlRG93bn1cbiAgICAgICAgICBvblRvdWNoU3RhcnQ9e3RoaXMucHJvcHMub25Ub3VjaFN0YXJ0fVxuICAgICAgICA+XG4gICAgICAgICAgPExheWVyUGFuZWxIZWFkZXJcbiAgICAgICAgICAgIGlzQ29uZmlnQWN0aXZlPXtpc0NvbmZpZ0FjdGl2ZX1cbiAgICAgICAgICAgIGlkPXtsYXllci5pZH1cbiAgICAgICAgICAgIGlkeD17aWR4fVxuICAgICAgICAgICAgaXNWaXNpYmxlPXtjb25maWcuaXNWaXNpYmxlfVxuICAgICAgICAgICAgbGFiZWw9e2NvbmZpZy5sYWJlbH1cbiAgICAgICAgICAgIGxhYmVsUkNHQ29sb3JWYWx1ZXM9e2RhdGFzZXRzW2NvbmZpZy5kYXRhSWRdLmNvbG9yfVxuICAgICAgICAgICAgbGF5ZXJUeXBlPXtsYXllci5uYW1lfVxuICAgICAgICAgICAgb25Ub2dnbGVFbmFibGVDb25maWc9e3RoaXMuX3RvZ2dsZUVuYWJsZUNvbmZpZ31cbiAgICAgICAgICAgIG9uVG9nZ2xlVmlzaWJpbGl0eT17dGhpcy5fdG9nZ2xlVmlzaWJpbGl0eX1cbiAgICAgICAgICAgIG9uVXBkYXRlTGF5ZXJMYWJlbD17dGhpcy5fdXBkYXRlTGF5ZXJMYWJlbH1cbiAgICAgICAgICAgIG9uUmVtb3ZlTGF5ZXI9e3RoaXMuX3JlbW92ZUxheWVyfVxuICAgICAgICAgIC8+XG4gICAgICAgICAge2lzQ29uZmlnQWN0aXZlICYmIChcbiAgICAgICAgICAgIDxMYXllckNvbmZpZ3VyYXRvclxuICAgICAgICAgICAgICBsYXllcj17bGF5ZXJ9XG4gICAgICAgICAgICAgIGRhdGFzZXRzPXtkYXRhc2V0c31cbiAgICAgICAgICAgICAgbGF5ZXJUeXBlT3B0aW9ucz17bGF5ZXJUeXBlT3B0aW9uc31cbiAgICAgICAgICAgICAgb3Blbk1vZGFsPXt0aGlzLnByb3BzLm9wZW5Nb2RhbH1cbiAgICAgICAgICAgICAgdXBkYXRlTGF5ZXJDb25maWc9e3RoaXMudXBkYXRlTGF5ZXJDb25maWd9XG4gICAgICAgICAgICAgIHVwZGF0ZUxheWVyVmlzdWFsQ2hhbm5lbENvbmZpZz17dGhpcy51cGRhdGVMYXllclZpc3VhbENoYW5uZWxDb25maWd9XG4gICAgICAgICAgICAgIHVwZGF0ZUxheWVyVHlwZT17dGhpcy51cGRhdGVMYXllclR5cGV9XG4gICAgICAgICAgICAgIHVwZGF0ZUxheWVyVmlzQ29uZmlnPXt0aGlzLnVwZGF0ZUxheWVyVmlzQ29uZmlnfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICA8L1BhbmVsV3JhcHBlcj5cbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIExheWVyUGFuZWw7XG59XG5cbmV4cG9ydCBkZWZhdWx0IExheWVyUGFuZWxGYWN0b3J5O1xuIl19
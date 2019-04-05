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

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  .ui-sortable {\n    display: block;\n    position: relative;\n    overflow: visible;\n    user-select: none;\n\n    :before {\n      content: \' \';\n      display: table;\n    }\n\n    :after {\n      content: \' \';\n      display: table;\n    }\n  }\n\n  .ui-sortable-item.ui-sortable-dragging {\n    position: absolute;\n    z-index: 1688;\n    cursor: move;\n  }\n\n  .ui-sortable-item.ui-sortable-dragging:hover {\n    cursor: move;\n    opacity: 0.5;\n  }\n\n  .ui-sortable-placeholder {\n    display: none;\n  }\n\n  .ui-sortable-placeholder.visible {\n    display: block;\n    opacity: 0;\n    z-index: -1;\n  }\n'], ['\n  .ui-sortable {\n    display: block;\n    position: relative;\n    overflow: visible;\n    user-select: none;\n\n    :before {\n      content: \' \';\n      display: table;\n    }\n\n    :after {\n      content: \' \';\n      display: table;\n    }\n  }\n\n  .ui-sortable-item.ui-sortable-dragging {\n    position: absolute;\n    z-index: 1688;\n    cursor: move;\n  }\n\n  .ui-sortable-item.ui-sortable-dragging:hover {\n    cursor: move;\n    opacity: 0.5;\n  }\n\n  .ui-sortable-placeholder {\n    display: none;\n  }\n\n  .ui-sortable-placeholder.visible {\n    display: block;\n    opacity: 0;\n    z-index: -1;\n  }\n']); // Copyright (c) 2019 Uber Technologies, Inc.
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

exports.AddDataButtonFactory = AddDataButtonFactory;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactAnythingSortable = require('react-anything-sortable');

var _reactAnythingSortable2 = _interopRequireDefault(_reactAnythingSortable);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reselect = require('reselect');

var _layerPanel = require('./layer-panel/layer-panel');

var _layerPanel2 = _interopRequireDefault(_layerPanel);

var _sourceDataCatalog = require('./source-data-catalog');

var _sourceDataCatalog2 = _interopRequireDefault(_sourceDataCatalog);

var _icons = require('../common/icons');

var _itemSelector = require('../common/item-selector/item-selector');

var _itemSelector2 = _interopRequireDefault(_itemSelector);

var _styledComponents3 = require('../common/styled-components');

var _defaultSettings = require('../../constants/default-settings');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyledSortable = _styledComponents2.default.div(_templateObject);

var LayerBlendingSelector = function LayerBlendingSelector(_ref) {
  var layerBlending = _ref.layerBlending,
      updateLayerBlending = _ref.updateLayerBlending;
  return _react2.default.createElement(
    _styledComponents3.SidePanelSection,
    null,
    _react2.default.createElement(
      _styledComponents3.PanelLabel,
      null,
      'Layer Blending'
    ),
    _react2.default.createElement(_itemSelector2.default, {
      selectedItems: layerBlending,
      options: Object.keys(_defaultSettings.LAYER_BLENDINGS),
      multiSelect: false,
      searchable: false,
      onChange: updateLayerBlending
    })
  );
};

function AddDataButtonFactory() {
  var AddDataButton = function AddDataButton(_ref2) {
    var onClick = _ref2.onClick,
        isInactive = _ref2.isInactive;
    return _react2.default.createElement(
      _styledComponents3.Button,
      {
        onClick: onClick,
        isInactive: !isInactive,
        width: '105px',
        secondary: true
      },
      _react2.default.createElement(_icons.Add, { height: '12px' }),
      'Add Data'
    );
  };

  return AddDataButton;
}

LayerManagerFactory.deps = [AddDataButtonFactory, _layerPanel2.default, _sourceDataCatalog2.default];

function LayerManagerFactory(AddDataButton, LayerPanel, SourceDataCatalog) {
  var _class, _temp2;

  return _temp2 = _class = function (_Component) {
    (0, _inherits3.default)(LayerManager, _Component);

    function LayerManager() {
      var _ref3;

      var _temp, _this, _ret;

      (0, _classCallCheck3.default)(this, LayerManager);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref3 = LayerManager.__proto__ || Object.getPrototypeOf(LayerManager)).call.apply(_ref3, [this].concat(args))), _this), _this.layerClassSelector = function (props) {
        return props.layerClasses;
      }, _this.layerTypeOptionsSelector = (0, _reselect.createSelector)(_this.layerClassSelector, function (layerClasses) {
        return Object.keys(layerClasses).map(function (key) {
          var layer = new layerClasses[key]();
          return {
            id: key,
            label: layer.name,
            icon: layer.layerIcon
          };
        });
      }), _this._addEmptyNewLayer = function () {
        _this.props.addLayer();
      }, _this._handleSort = function (order) {
        _this.props.updateLayerOrder(order);
      }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(LayerManager, [{
      key: 'render',
      value: function render() {
        var _props = this.props,
            layers = _props.layers,
            datasets = _props.datasets,
            layerOrder = _props.layerOrder,
            openModal = _props.openModal;

        var defaultDataset = Object.keys(datasets)[0];
        var layerTypeOptions = this.layerTypeOptionsSelector(this.props);

        var layerActions = {
          layerConfigChange: this.props.layerConfigChange,
          layerVisualChannelConfigChange: this.props.layerVisualChannelConfigChange,
          layerTypeChange: this.props.layerTypeChange,
          layerVisConfigChange: this.props.layerVisConfigChange,
          removeLayer: this.props.removeLayer
        };

        var panelProps = { datasets: datasets, openModal: openModal, layerTypeOptions: layerTypeOptions };

        return _react2.default.createElement(
          StyledSortable,
          { className: 'layer-manager' },
          _react2.default.createElement(SourceDataCatalog, {
            datasets: datasets,
            showDatasetTable: this.props.showDatasetTable,
            removeDataset: this.props.removeDataset,
            showDeleteDataset: true
          }),
          _react2.default.createElement(AddDataButton, {
            onClick: this.props.showAddDataModal,
            isInactive: !defaultDataset
          }),
          _react2.default.createElement(_styledComponents3.SidePanelDivider, null),
          _react2.default.createElement(
            _styledComponents3.SidePanelSection,
            null,
            _react2.default.createElement(
              _reactAnythingSortable2.default,
              {
                onSort: this._handleSort,
                direction: 'vertical',
                sortHandle: 'sort--handle',
                dynamic: true
              },
              layerOrder.map(function (idx) {
                return _react2.default.createElement(LayerPanel, (0, _extends3.default)({}, panelProps, layerActions, {
                  sortData: idx,
                  key: layers[idx].id,
                  idx: idx,
                  layer: layers[idx]
                }));
              })
            )
          ),
          _react2.default.createElement(
            _styledComponents3.SidePanelSection,
            null,
            defaultDataset ? _react2.default.createElement(
              _styledComponents3.Button,
              { onClick: this._addEmptyNewLayer, width: '105px' },
              _react2.default.createElement(_icons.Add, { height: '12px' }),
              'Add Layer'
            ) : null
          ),
          _react2.default.createElement(LayerBlendingSelector, {
            layerBlending: this.props.layerBlending,
            updateLayerBlending: this.props.updateLayerBlending
          })
        );
      }
    }]);
    return LayerManager;
  }(_react.Component), _class.propTypes = {
    addLayer: _propTypes2.default.func.isRequired,
    datasets: _propTypes2.default.object.isRequired,
    layerBlending: _propTypes2.default.string.isRequired,
    layerClasses: _propTypes2.default.object.isRequired,
    layers: _propTypes2.default.arrayOf(_propTypes2.default.any).isRequired,
    layerConfigChange: _propTypes2.default.func.isRequired,
    layerVisualChannelConfigChange: _propTypes2.default.func.isRequired,
    layerTypeChange: _propTypes2.default.func.isRequired,
    layerVisConfigChange: _propTypes2.default.func.isRequired,
    openModal: _propTypes2.default.func.isRequired,
    removeLayer: _propTypes2.default.func.isRequired,
    removeDataset: _propTypes2.default.func.isRequired,
    showDatasetTable: _propTypes2.default.func.isRequired,
    updateLayerBlending: _propTypes2.default.func.isRequired,
    updateLayerOrder: _propTypes2.default.func.isRequired
  }, _temp2;
}

exports.default = LayerManagerFactory;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvbGF5ZXItbWFuYWdlci5qcyJdLCJuYW1lcyI6WyJBZGREYXRhQnV0dG9uRmFjdG9yeSIsIlN0eWxlZFNvcnRhYmxlIiwic3R5bGVkIiwiZGl2IiwiTGF5ZXJCbGVuZGluZ1NlbGVjdG9yIiwibGF5ZXJCbGVuZGluZyIsInVwZGF0ZUxheWVyQmxlbmRpbmciLCJPYmplY3QiLCJrZXlzIiwiTEFZRVJfQkxFTkRJTkdTIiwiQWRkRGF0YUJ1dHRvbiIsIm9uQ2xpY2siLCJpc0luYWN0aXZlIiwiTGF5ZXJNYW5hZ2VyRmFjdG9yeSIsImRlcHMiLCJMYXllclBhbmVsRmFjdG9yeSIsIlNvdXJjZURhdGFDYXRhbG9nRmFjdG9yeSIsIkxheWVyUGFuZWwiLCJTb3VyY2VEYXRhQ2F0YWxvZyIsImxheWVyQ2xhc3NTZWxlY3RvciIsInByb3BzIiwibGF5ZXJDbGFzc2VzIiwibGF5ZXJUeXBlT3B0aW9uc1NlbGVjdG9yIiwibWFwIiwibGF5ZXIiLCJrZXkiLCJpZCIsImxhYmVsIiwibmFtZSIsImljb24iLCJsYXllckljb24iLCJfYWRkRW1wdHlOZXdMYXllciIsImFkZExheWVyIiwiX2hhbmRsZVNvcnQiLCJ1cGRhdGVMYXllck9yZGVyIiwib3JkZXIiLCJsYXllcnMiLCJkYXRhc2V0cyIsImxheWVyT3JkZXIiLCJvcGVuTW9kYWwiLCJkZWZhdWx0RGF0YXNldCIsImxheWVyVHlwZU9wdGlvbnMiLCJsYXllckFjdGlvbnMiLCJsYXllckNvbmZpZ0NoYW5nZSIsImxheWVyVmlzdWFsQ2hhbm5lbENvbmZpZ0NoYW5nZSIsImxheWVyVHlwZUNoYW5nZSIsImxheWVyVmlzQ29uZmlnQ2hhbmdlIiwicmVtb3ZlTGF5ZXIiLCJwYW5lbFByb3BzIiwic2hvd0RhdGFzZXRUYWJsZSIsInJlbW92ZURhdGFzZXQiLCJzaG93QWRkRGF0YU1vZGFsIiwiaWR4IiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVz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QUFlQyxVQWRuQjtBQWVqQnZCLHNCQUFrQnFCLG9CQUFVQyxJQUFWLENBQWVDO0FBZmhCLEdBRHJCO0FBcUdEOztrQkFFYzVDLG1CIiwiZmlsZSI6ImxheWVyLW1hbmFnZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMTkgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgU29ydGFibGUgZnJvbSAncmVhY3QtYW55dGhpbmctc29ydGFibGUnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQge2NyZWF0ZVNlbGVjdG9yfSBmcm9tICdyZXNlbGVjdCc7XG5cbmltcG9ydCBMYXllclBhbmVsRmFjdG9yeSBmcm9tICcuL2xheWVyLXBhbmVsL2xheWVyLXBhbmVsJztcbmltcG9ydCBTb3VyY2VEYXRhQ2F0YWxvZ0ZhY3RvcnkgZnJvbSAnLi9zb3VyY2UtZGF0YS1jYXRhbG9nJztcbmltcG9ydCB7QWRkfSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9pY29ucyc7XG5pbXBvcnQgSXRlbVNlbGVjdG9yIGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2l0ZW0tc2VsZWN0b3IvaXRlbS1zZWxlY3Rvcic7XG5pbXBvcnQge1xuICBQYW5lbExhYmVsLFxuICBTaWRlUGFuZWxEaXZpZGVyLFxuICBTaWRlUGFuZWxTZWN0aW9uLFxuICBCdXR0b25cbn0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbXBvcnQge0xBWUVSX0JMRU5ESU5HU30gZnJvbSAnY29uc3RhbnRzL2RlZmF1bHQtc2V0dGluZ3MnO1xuXG5jb25zdCBTdHlsZWRTb3J0YWJsZSA9IHN0eWxlZC5kaXZgXG4gIC51aS1zb3J0YWJsZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuXG4gICAgOmJlZm9yZSB7XG4gICAgICBjb250ZW50OiAnICc7XG4gICAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICB9XG5cbiAgICA6YWZ0ZXIge1xuICAgICAgY29udGVudDogJyAnO1xuICAgICAgZGlzcGxheTogdGFibGU7XG4gICAgfVxuICB9XG5cbiAgLnVpLXNvcnRhYmxlLWl0ZW0udWktc29ydGFibGUtZHJhZ2dpbmcge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAxNjg4O1xuICAgIGN1cnNvcjogbW92ZTtcbiAgfVxuXG4gIC51aS1zb3J0YWJsZS1pdGVtLnVpLXNvcnRhYmxlLWRyYWdnaW5nOmhvdmVyIHtcbiAgICBjdXJzb3I6IG1vdmU7XG4gICAgb3BhY2l0eTogMC41O1xuICB9XG5cbiAgLnVpLXNvcnRhYmxlLXBsYWNlaG9sZGVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLnVpLXNvcnRhYmxlLXBsYWNlaG9sZGVyLnZpc2libGUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgei1pbmRleDogLTE7XG4gIH1cbmA7XG5cbmNvbnN0IExheWVyQmxlbmRpbmdTZWxlY3RvciA9ICh7bGF5ZXJCbGVuZGluZywgdXBkYXRlTGF5ZXJCbGVuZGluZ30pID0+IChcbiAgPFNpZGVQYW5lbFNlY3Rpb24+XG4gICAgPFBhbmVsTGFiZWw+TGF5ZXIgQmxlbmRpbmc8L1BhbmVsTGFiZWw+XG4gICAgPEl0ZW1TZWxlY3RvclxuICAgICAgc2VsZWN0ZWRJdGVtcz17bGF5ZXJCbGVuZGluZ31cbiAgICAgIG9wdGlvbnM9e09iamVjdC5rZXlzKExBWUVSX0JMRU5ESU5HUyl9XG4gICAgICBtdWx0aVNlbGVjdD17ZmFsc2V9XG4gICAgICBzZWFyY2hhYmxlPXtmYWxzZX1cbiAgICAgIG9uQ2hhbmdlPXt1cGRhdGVMYXllckJsZW5kaW5nfVxuICAgIC8+XG4gIDwvU2lkZVBhbmVsU2VjdGlvbj5cbik7XG5cbmV4cG9ydCBmdW5jdGlvbiBBZGREYXRhQnV0dG9uRmFjdG9yeSgpIHtcbiAgY29uc3QgQWRkRGF0YUJ1dHRvbiA9ICh7b25DbGljaywgaXNJbmFjdGl2ZX0pID0+IChcbiAgICA8QnV0dG9uXG4gICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgICAgaXNJbmFjdGl2ZT17IWlzSW5hY3RpdmV9XG4gICAgICB3aWR0aD1cIjEwNXB4XCJcbiAgICAgIHNlY29uZGFyeVxuICAgID5cbiAgICAgIDxBZGQgaGVpZ2h0PVwiMTJweFwiIC8+QWRkIERhdGFcbiAgICA8L0J1dHRvbj5cbiAgKTtcblxuICByZXR1cm4gQWRkRGF0YUJ1dHRvbjtcbn1cblxuTGF5ZXJNYW5hZ2VyRmFjdG9yeS5kZXBzID0gW1xuICBBZGREYXRhQnV0dG9uRmFjdG9yeSxcbiAgTGF5ZXJQYW5lbEZhY3RvcnksXG4gIFNvdXJjZURhdGFDYXRhbG9nRmFjdG9yeVxuXTtcblxuZnVuY3Rpb24gTGF5ZXJNYW5hZ2VyRmFjdG9yeShBZGREYXRhQnV0dG9uLCBMYXllclBhbmVsLCBTb3VyY2VEYXRhQ2F0YWxvZykge1xuICByZXR1cm4gY2xhc3MgTGF5ZXJNYW5hZ2VyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgYWRkTGF5ZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICBkYXRhc2V0czogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgICAgbGF5ZXJCbGVuZGluZzogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgbGF5ZXJDbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgICBsYXllcnM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5hbnkpLmlzUmVxdWlyZWQsXG4gICAgICBsYXllckNvbmZpZ0NoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICAgIGxheWVyVmlzdWFsQ2hhbm5lbENvbmZpZ0NoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICAgIGxheWVyVHlwZUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICAgIGxheWVyVmlzQ29uZmlnQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgb3Blbk1vZGFsOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgcmVtb3ZlTGF5ZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICByZW1vdmVEYXRhc2V0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgc2hvd0RhdGFzZXRUYWJsZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICAgIHVwZGF0ZUxheWVyQmxlbmRpbmc6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICB1cGRhdGVMYXllck9yZGVyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG4gICAgfTtcblxuICAgIGxheWVyQ2xhc3NTZWxlY3RvciA9IHByb3BzID0+IHByb3BzLmxheWVyQ2xhc3NlcztcbiAgICBsYXllclR5cGVPcHRpb25zU2VsZWN0b3IgPSBjcmVhdGVTZWxlY3RvcihcbiAgICAgIHRoaXMubGF5ZXJDbGFzc1NlbGVjdG9yLFxuICAgICAgbGF5ZXJDbGFzc2VzID0+IE9iamVjdC5rZXlzKGxheWVyQ2xhc3NlcykubWFwKGtleSA9PiB7XG4gICAgICAgIGNvbnN0IGxheWVyID0gbmV3IGxheWVyQ2xhc3Nlc1trZXldKCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaWQ6IGtleSxcbiAgICAgICAgICBsYWJlbDogbGF5ZXIubmFtZSxcbiAgICAgICAgICBpY29uOiBsYXllci5sYXllckljb25cbiAgICAgICAgfTtcbiAgICB9KSk7XG5cbiAgICBfYWRkRW1wdHlOZXdMYXllciA9ICgpID0+IHtcbiAgICAgIHRoaXMucHJvcHMuYWRkTGF5ZXIoKTtcbiAgICB9O1xuXG4gICAgX2hhbmRsZVNvcnQgPSBvcmRlciA9PiB7XG4gICAgICB0aGlzLnByb3BzLnVwZGF0ZUxheWVyT3JkZXIob3JkZXIpO1xuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICBjb25zdCB7bGF5ZXJzLCBkYXRhc2V0cywgbGF5ZXJPcmRlciwgb3Blbk1vZGFsfSA9IHRoaXMucHJvcHM7XG4gICAgICBjb25zdCBkZWZhdWx0RGF0YXNldCA9IE9iamVjdC5rZXlzKGRhdGFzZXRzKVswXTtcbiAgICAgIGNvbnN0IGxheWVyVHlwZU9wdGlvbnMgPSB0aGlzLmxheWVyVHlwZU9wdGlvbnNTZWxlY3Rvcih0aGlzLnByb3BzKTtcblxuICAgICAgY29uc3QgbGF5ZXJBY3Rpb25zID0ge1xuICAgICAgICBsYXllckNvbmZpZ0NoYW5nZTogdGhpcy5wcm9wcy5sYXllckNvbmZpZ0NoYW5nZSxcbiAgICAgICAgbGF5ZXJWaXN1YWxDaGFubmVsQ29uZmlnQ2hhbmdlOiB0aGlzLnByb3BzLmxheWVyVmlzdWFsQ2hhbm5lbENvbmZpZ0NoYW5nZSxcbiAgICAgICAgbGF5ZXJUeXBlQ2hhbmdlOiB0aGlzLnByb3BzLmxheWVyVHlwZUNoYW5nZSxcbiAgICAgICAgbGF5ZXJWaXNDb25maWdDaGFuZ2U6IHRoaXMucHJvcHMubGF5ZXJWaXNDb25maWdDaGFuZ2UsXG4gICAgICAgIHJlbW92ZUxheWVyOiB0aGlzLnByb3BzLnJlbW92ZUxheWVyXG4gICAgICB9O1xuXG4gICAgICBjb25zdCBwYW5lbFByb3BzID0ge2RhdGFzZXRzLCBvcGVuTW9kYWwsIGxheWVyVHlwZU9wdGlvbnN9O1xuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8U3R5bGVkU29ydGFibGUgY2xhc3NOYW1lPVwibGF5ZXItbWFuYWdlclwiPlxuICAgICAgICAgIDxTb3VyY2VEYXRhQ2F0YWxvZ1xuICAgICAgICAgICAgZGF0YXNldHM9e2RhdGFzZXRzfVxuICAgICAgICAgICAgc2hvd0RhdGFzZXRUYWJsZT17dGhpcy5wcm9wcy5zaG93RGF0YXNldFRhYmxlfVxuICAgICAgICAgICAgcmVtb3ZlRGF0YXNldD17dGhpcy5wcm9wcy5yZW1vdmVEYXRhc2V0fVxuICAgICAgICAgICAgc2hvd0RlbGV0ZURhdGFzZXRcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxBZGREYXRhQnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnByb3BzLnNob3dBZGREYXRhTW9kYWx9XG4gICAgICAgICAgICBpc0luYWN0aXZlPXshZGVmYXVsdERhdGFzZXR9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8U2lkZVBhbmVsRGl2aWRlciAvPlxuICAgICAgICAgIDxTaWRlUGFuZWxTZWN0aW9uPlxuICAgICAgICAgICAgPFNvcnRhYmxlXG4gICAgICAgICAgICAgIG9uU29ydD17dGhpcy5faGFuZGxlU29ydH1cbiAgICAgICAgICAgICAgZGlyZWN0aW9uPVwidmVydGljYWxcIlxuICAgICAgICAgICAgICBzb3J0SGFuZGxlPVwic29ydC0taGFuZGxlXCJcbiAgICAgICAgICAgICAgZHluYW1pY1xuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7bGF5ZXJPcmRlci5tYXAoaWR4ID0+IChcbiAgICAgICAgICAgICAgICA8TGF5ZXJQYW5lbFxuICAgICAgICAgICAgICAgICAgey4uLnBhbmVsUHJvcHN9XG4gICAgICAgICAgICAgICAgICB7Li4ubGF5ZXJBY3Rpb25zfVxuICAgICAgICAgICAgICAgICAgc29ydERhdGE9e2lkeH1cbiAgICAgICAgICAgICAgICAgIGtleT17bGF5ZXJzW2lkeF0uaWR9XG4gICAgICAgICAgICAgICAgICBpZHg9e2lkeH1cbiAgICAgICAgICAgICAgICAgIGxheWVyPXtsYXllcnNbaWR4XX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvU29ydGFibGU+XG4gICAgICAgICAgPC9TaWRlUGFuZWxTZWN0aW9uPlxuICAgICAgICAgIDxTaWRlUGFuZWxTZWN0aW9uPlxuICAgICAgICAgICAge2RlZmF1bHREYXRhc2V0ID8gKFxuICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RoaXMuX2FkZEVtcHR5TmV3TGF5ZXJ9IHdpZHRoPVwiMTA1cHhcIj5cbiAgICAgICAgICAgICAgICA8QWRkIGhlaWdodD1cIjEycHhcIiAvPkFkZCBMYXllclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgIDwvU2lkZVBhbmVsU2VjdGlvbj5cbiAgICAgICAgICA8TGF5ZXJCbGVuZGluZ1NlbGVjdG9yXG4gICAgICAgICAgICBsYXllckJsZW5kaW5nPXt0aGlzLnByb3BzLmxheWVyQmxlbmRpbmd9XG4gICAgICAgICAgICB1cGRhdGVMYXllckJsZW5kaW5nPXt0aGlzLnByb3BzLnVwZGF0ZUxheWVyQmxlbmRpbmd9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9TdHlsZWRTb3J0YWJsZT5cbiAgICAgICk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExheWVyTWFuYWdlckZhY3Rvcnk7XG4iXX0=
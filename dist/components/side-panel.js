'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PanelTitleFactory = undefined;

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

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  ', ';\n  flex-grow: 1;\n  padding: 16px;\n  overflow-y: scroll;\n  overflow-x: hidden;\n'], ['\n  ', ';\n  flex-grow: 1;\n  padding: 16px;\n  overflow-y: scroll;\n  overflow-x: hidden;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  color: ', ';\n  font-size: 20px;\n  font-weight: 400;\n  letter-spacing: 1.25px;\n  margin-bottom: 14px;\n'], ['\n  color: ', ';\n  font-size: 20px;\n  font-weight: 400;\n  letter-spacing: 1.25px;\n  margin-bottom: 14px;\n']); // Copyright (c) 2019 Uber Technologies, Inc.
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

exports.default = SidePanelFactory;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _sideBar = require('./side-panel/side-bar');

var _sideBar2 = _interopRequireDefault(_sideBar);

var _panelHeader = require('./side-panel/panel-header');

var _panelHeader2 = _interopRequireDefault(_panelHeader);

var _layerManager = require('./side-panel/layer-manager');

var _layerManager2 = _interopRequireDefault(_layerManager);

var _filterManager = require('./side-panel/filter-manager');

var _filterManager2 = _interopRequireDefault(_filterManager);

var _interactionManager = require('./side-panel/interaction-manager');

var _interactionManager2 = _interopRequireDefault(_interactionManager);

var _mapManager = require('./side-panel/map-manager');

var _mapManager2 = _interopRequireDefault(_mapManager);

var _panelToggle = require('./side-panel/panel-toggle');

var _panelToggle2 = _interopRequireDefault(_panelToggle);

var _defaultSettings = require('../constants/default-settings');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SidePanelContent = _styledComponents2.default.div(_templateObject, function (props) {
  return props.theme.sidePanelScrollBar;
});

var PanelTitleFactory = exports.PanelTitleFactory = function PanelTitleFactory() {
  return _styledComponents2.default.div(_templateObject2, function (props) {
    return props.theme.titleTextColor;
  });
};

SidePanelFactory.deps = [_sideBar2.default, _panelHeader2.default, _panelToggle2.default, PanelTitleFactory, _layerManager2.default, _filterManager2.default, _interactionManager2.default, _mapManager2.default];

/**
 *
 * Vertical sidebar containing input components for the rendering layers
 */
function SidePanelFactory(Sidebar, PanelHeader, PanelToggle, PanelTitle, LayerManager, FilterManager, InteractionManager, MapManager) {
  var _class, _temp2;

  return _temp2 = _class = function (_Component) {
    (0, _inherits3.default)(SidePanel, _Component);

    function SidePanel() {
      var _ref;

      var _temp, _this, _ret;

      (0, _classCallCheck3.default)(this, SidePanel);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = SidePanel.__proto__ || Object.getPrototypeOf(SidePanel)).call.apply(_ref, [this].concat(args))), _this), _this._onOpenOrClose = function () {
        _this.props.uiStateActions.toggleSidePanel(_this.props.uiState.activeSidePanel ? null : 'layer');
      }, _this._showDatasetTable = function (dataId) {
        // this will open data table modal
        _this.props.visStateActions.showDatasetTable(dataId);
        _this.props.uiStateActions.toggleModal(_defaultSettings.DATA_TABLE_ID);
      }, _this._showAddDataModal = function () {
        _this.props.uiStateActions.toggleModal(_defaultSettings.ADD_DATA_ID);
      }, _this._showAddMapStyleModal = function () {
        _this.props.uiStateActions.toggleModal(_defaultSettings.ADD_MAP_STYLE_ID);
      }, _this._removeDataset = function (key) {
        // this will show the modal dialog to confirm deletion
        _this.props.uiStateActions.openDeleteModal(key);
      }, _this._onExportImage = function () {
        return _this.props.uiStateActions.toggleModal(_defaultSettings.EXPORT_IMAGE_ID);
      }, _this._onExportData = function () {
        return _this.props.uiStateActions.toggleModal(_defaultSettings.EXPORT_DATA_ID);
      }, _this._onExportConfig = function () {
        return _this.props.uiStateActions.toggleModal(_defaultSettings.EXPORT_CONFIG_ID);
      }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    /* component private functions */


    (0, _createClass3.default)(SidePanel, [{
      key: 'render',
      value: function render() {
        var _props = this.props,
            appName = _props.appName,
            version = _props.version,
            homeUrl = _props.homeUrl,
            datasets = _props.datasets,
            filters = _props.filters,
            layers = _props.layers,
            layerBlending = _props.layerBlending,
            layerClasses = _props.layerClasses,
            uiState = _props.uiState,
            layerOrder = _props.layerOrder,
            interactionConfig = _props.interactionConfig,
            visStateActions = _props.visStateActions,
            mapStyleActions = _props.mapStyleActions,
            uiStateActions = _props.uiStateActions;
        var activeSidePanel = uiState.activeSidePanel;

        var isOpen = Boolean(activeSidePanel);

        var layerManagerActions = {
          addLayer: visStateActions.addLayer,
          layerConfigChange: visStateActions.layerConfigChange,
          layerVisualChannelConfigChange: visStateActions.layerVisualChannelConfigChange,
          layerTypeChange: visStateActions.layerTypeChange,
          layerVisConfigChange: visStateActions.layerVisConfigChange,
          updateLayerBlending: visStateActions.updateLayerBlending,
          updateLayerOrder: visStateActions.reorderLayer,
          showDatasetTable: this._showDatasetTable,
          showAddDataModal: this._showAddDataModal,
          removeLayer: visStateActions.removeLayer,
          removeDataset: this._removeDataset
        };

        var filterManagerActions = {
          addFilter: visStateActions.addFilter,
          removeFilter: visStateActions.removeFilter,
          setFilter: visStateActions.setFilter,
          showDatasetTable: this._showDatasetTable,
          showAddDataModal: this._showAddDataModal,
          toggleAnimation: visStateActions.toggleAnimation,
          enlargeFilter: visStateActions.enlargeFilter
        };

        var interactionManagerActions = {
          onConfigChange: visStateActions.interactionConfigChange
        };

        var mapManagerActions = {
          addMapStyleUrl: mapStyleActions.addMapStyleUrl,
          onConfigChange: mapStyleActions.mapConfigChange,
          onStyleChange: mapStyleActions.mapStyleChange,
          onBuildingChange: mapStyleActions.mapBuildingChange,
          showAddMapStyleModal: this._showAddMapStyleModal
        };

        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            Sidebar,
            {
              width: this.props.width,
              isOpen: isOpen,
              minifiedWidth: 0,
              onOpenOrClose: this._onOpenOrClose
            },
            _react2.default.createElement(PanelHeader, {
              appName: appName,
              version: version,
              homeUrl: homeUrl,
              onExportImage: this._onExportImage,
              onExportData: this._onExportData,
              visibleDropdown: uiState.visibleDropdown,
              showExportDropdown: uiStateActions.showExportDropdown,
              hideExportDropdown: uiStateActions.hideExportDropdown,
              onExportConfig: this._onExportConfig,
              onSaveMap: this.props.onSaveMap
            }),
            _react2.default.createElement(PanelToggle, {
              panels: _defaultSettings.PANELS,
              activePanel: activeSidePanel,
              togglePanel: uiStateActions.toggleSidePanel
            }),
            _react2.default.createElement(
              SidePanelContent,
              { className: 'side-panel__content' },
              _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                  PanelTitle,
                  { className: 'side-panel__content__title' },
                  (_defaultSettings.PANELS.find(function (_ref2) {
                    var id = _ref2.id;
                    return id === activeSidePanel;
                  }) || {}).label
                ),
                activeSidePanel === 'layer' && _react2.default.createElement(LayerManager, (0, _extends3.default)({}, layerManagerActions, {
                  datasets: datasets,
                  layers: layers,
                  layerClasses: layerClasses,
                  layerOrder: layerOrder,
                  layerBlending: layerBlending,
                  openModal: uiStateActions.toggleModal
                })),
                activeSidePanel === 'filter' && _react2.default.createElement(FilterManager, (0, _extends3.default)({}, filterManagerActions, {
                  datasets: datasets,
                  filters: filters
                })),
                activeSidePanel === 'interaction' && _react2.default.createElement(InteractionManager, (0, _extends3.default)({}, interactionManagerActions, {
                  datasets: datasets,
                  interactionConfig: interactionConfig
                })),
                activeSidePanel === 'map' && _react2.default.createElement(MapManager, (0, _extends3.default)({}, mapManagerActions, {
                  mapStyle: this.props.mapStyle
                }))
              )
            )
          )
        );
      }
    }]);
    return SidePanel;
  }(_react.Component), _class.propTypes = {
    filters: _propTypes2.default.arrayOf(_propTypes2.default.any).isRequired,
    interactionConfig: _propTypes2.default.object.isRequired,
    layerBlending: _propTypes2.default.string.isRequired,
    layers: _propTypes2.default.arrayOf(_propTypes2.default.any).isRequired,
    layerClasses: _propTypes2.default.object.isRequired,
    mapStyle: _propTypes2.default.object.isRequired,
    width: _propTypes2.default.number.isRequired,
    datasets: _propTypes2.default.object.isRequired,
    visStateActions: _propTypes2.default.object.isRequired,
    mapStyleActions: _propTypes2.default.object.isRequired
  }, _temp2;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwuanMiXSwibmFtZXMiOlsiU2lkZVBhbmVsRmFjdG9yeSIsIlNpZGVQYW5lbENvbnRlbnQiLCJzdHlsZWQiLCJkaXYiLCJwcm9wcyIsInRoZW1lIiwic2lkZVBhbmVsU2Nyb2xsQmFyIiwiUGFuZWxUaXRsZUZhY3RvcnkiLCJ0aXRsZVRleHRDb2xvciIsImRlcHMiLCJTaWRlYmFyRmFjdG9yeSIsIlBhbmVsSGVhZGVyRmFjdG9yeSIsIlBhbmVsVG9nZ2xlRmFjdG9yeSIsIkxheWVyTWFuYWdlckZhY3RvcnkiLCJGaWx0ZXJNYW5hZ2VyRmFjdG9yeSIsIkludGVyYWN0aW9uTWFuYWdlckZhY3RvcnkiLCJNYXBNYW5hZ2VyRmFjdG9yeSIsIlNpZGViYXIiLCJQYW5lbEhlYWRlciIsIlBhbmVsVG9nZ2xlIiwiUGFuZWxUaXRsZSIsIkxheWVyTWFuYWdlciIsIkZpbHRlck1hbmFnZXIiLCJJbnRlcmFjdGlvbk1hbmFnZXIiLCJNYXBNYW5hZ2VyIiwiX29uT3Blbk9yQ2xvc2UiLCJ1aVN0YXRlQWN0aW9ucyIsInRvZ2dsZVNpZGVQYW5lbCIsInVpU3RhdGUiLCJhY3RpdmVTaWRlUGFuZWwiLCJfc2hvd0RhdGFzZXRUYWJsZSIsInZpc1N0YXRlQWN0aW9ucyIsInNob3dEYXRhc2V0VGFibGUiLCJkYXRhSWQiLCJ0b2dnbGVNb2RhbCIsIkRBVEFfVEFCTEVfSUQiLCJfc2hvd0FkZERhdGFNb2RhbCIsIkFERF9EQVRBX0lEIiwiX3Nob3dBZGRNYXBTdHlsZU1vZGFsIiwiQUREX01BUF9TVFlMRV9JRCIsIl9yZW1vdmVEYXRhc2V0Iiwib3BlbkRlbGV0ZU1vZGFsIiwia2V5IiwiX29uRXhwb3J0SW1hZ2UiLCJFWFBPUlRfSU1BR0VfSUQiLCJfb25FeHBvcnREYXRhIiwiRVhQT1JUX0RBVEFfSUQiLCJfb25FeHBvcnRDb25maWciLCJFWFBPUlRfQ09ORklHX0lEIiwiYXBwTmFtZSIsInZlcnNpb24iLCJob21lVXJsIiwiZGF0YXNldHMiLCJmaWx0ZXJzIiwibGF5ZXJzIiwibGF5ZXJCbGVuZGluZyIsImxheWVyQ2xhc3NlcyIsImxheWVyT3JkZXIiLCJpbnRlcmFjdGlvbkNvbmZpZyIsIm1hcFN0eWxlQWN0aW9ucyIsImlzT3BlbiIsIkJvb2xlYW4iLCJsYXllck1hbmFnZXJBY3Rpb25zIiwiYWRkTGF5ZXIiLCJsYXllckNvbmZpZ0NoYW5nZSIsImxheWVyVmlzdWFsQ2hhbm5lbENvbmZpZ0NoYW5nZSIsImxheWVyVHlwZUNoYW5nZSIsImxheWVyVmlzQ29uZmlnQ2hhbmdlIiwidXBkYXRlTGF5ZXJCbGVuZGluZyIsInVwZGF0ZUxheWVyT3JkZXIiLCJyZW9yZGVyTGF5ZXIiLCJzaG93QWRkRGF0YU1vZGFsIiwicmVtb3ZlTGF5ZXIiLCJyZW1vdmVEYXRhc2V0IiwiZmlsdGVyTWFuYWdlckFjdGlvbnMiLCJhZGRGaWx0ZXIiLCJyZW1vdmVGaWx0ZXIiLCJzZXRGaWx0ZXIiLCJ0b2dnbGVBbmltYXRpb24iLCJlbmxhcmdlRmlsdGVyIiwiaW50ZXJhY3Rpb25NYW5hZ2VyQWN0aW9ucyIsIm9uQ29uZmlnQ2hhbmdlIiwiaW50ZXJhY3Rpb25Db25maWdDaGFuZ2UiLCJtYXBNYW5hZ2VyQWN0aW9ucyIsImFkZE1hcFN0eWxlVXJsIiwibWFwQ29uZmlnQ2hhbmdlIiwib25TdHlsZUNoYW5nZSIsIm1hcFN0eWxlQ2hhbmdlIiwib25CdWlsZGluZ0NoYW5nZSIsIm1hcEJ1aWxkaW5nQ2hhbmdlIiwic2hvd0FkZE1hcFN0eWxlTW9kYWwiLCJ3aWR0aCIsInZpc2libGVEcm9wZG93biIsInNob3dFeHBvcnREcm9wZG93biIsImhpZGVFeHBvcnREcm9wZG93biIsIm9uU2F2ZU1hcCIsIlBBTkVMUyIsImZpbmQiLCJpZCIsImxhYmVsIiwibWFwU3R5bGUiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhcnJheU9mIiwiYW55IiwiaXNSZXF1aXJlZCIsIm9iamVjdCIsInN0cmluZyIsIm51bWJlciJdLCJtYXBw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LG9CQUFVTSxNQUFWLENBQWlCSCxVQVBQO0FBUWpCdEQsY0FBVW1ELG9CQUFVSSxNQUFWLENBQWlCRCxVQVJWO0FBU2pCM0UscUJBQWlCd0Usb0JBQVVJLE1BQVYsQ0FBaUJELFVBVGpCO0FBVWpCL0MscUJBQWlCNEMsb0JBQVVJLE1BQVYsQ0FBaUJEO0FBVmpCLEdBRHJCO0FBMktEIiwiZmlsZSI6InNpZGUtcGFuZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMTkgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbXBvcnQgU2lkZWJhckZhY3RvcnkgZnJvbSAnLi9zaWRlLXBhbmVsL3NpZGUtYmFyJztcbmltcG9ydCBQYW5lbEhlYWRlckZhY3RvcnkgZnJvbSAnLi9zaWRlLXBhbmVsL3BhbmVsLWhlYWRlcic7XG5pbXBvcnQgTGF5ZXJNYW5hZ2VyRmFjdG9yeSBmcm9tICcuL3NpZGUtcGFuZWwvbGF5ZXItbWFuYWdlcic7XG5pbXBvcnQgRmlsdGVyTWFuYWdlckZhY3RvcnkgZnJvbSAnLi9zaWRlLXBhbmVsL2ZpbHRlci1tYW5hZ2VyJztcbmltcG9ydCBJbnRlcmFjdGlvbk1hbmFnZXJGYWN0b3J5IGZyb20gJy4vc2lkZS1wYW5lbC9pbnRlcmFjdGlvbi1tYW5hZ2VyJztcbmltcG9ydCBNYXBNYW5hZ2VyRmFjdG9yeSBmcm9tICcuL3NpZGUtcGFuZWwvbWFwLW1hbmFnZXInO1xuaW1wb3J0IFBhbmVsVG9nZ2xlRmFjdG9yeSBmcm9tICcuL3NpZGUtcGFuZWwvcGFuZWwtdG9nZ2xlJztcblxuaW1wb3J0IHtcbiAgQUREX0RBVEFfSUQsXG4gIEFERF9NQVBfU1RZTEVfSUQsXG4gIERBVEFfVEFCTEVfSUQsXG4gIEVYUE9SVF9JTUFHRV9JRCxcbiAgRVhQT1JUX0RBVEFfSUQsXG4gIEVYUE9SVF9DT05GSUdfSUQsXG4gIFBBTkVMU1xufSBmcm9tICdjb25zdGFudHMvZGVmYXVsdC1zZXR0aW5ncyc7XG5cbmNvbnN0IFNpZGVQYW5lbENvbnRlbnQgPSBzdHlsZWQuZGl2YFxuICAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNpZGVQYW5lbFNjcm9sbEJhcn07XG4gIGZsZXgtZ3JvdzogMTtcbiAgcGFkZGluZzogMTZweDtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG5gO1xuXG5leHBvcnQgY29uc3QgUGFuZWxUaXRsZUZhY3RvcnkgPSAoKSA9PiBzdHlsZWQuZGl2YFxuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50aXRsZVRleHRDb2xvcn07XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuMjVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTRweDtcbmA7XG5cblNpZGVQYW5lbEZhY3RvcnkuZGVwcyA9IFtcbiAgU2lkZWJhckZhY3RvcnksXG4gIFBhbmVsSGVhZGVyRmFjdG9yeSxcbiAgUGFuZWxUb2dnbGVGYWN0b3J5LFxuICBQYW5lbFRpdGxlRmFjdG9yeSxcbiAgTGF5ZXJNYW5hZ2VyRmFjdG9yeSxcbiAgRmlsdGVyTWFuYWdlckZhY3RvcnksXG4gIEludGVyYWN0aW9uTWFuYWdlckZhY3RvcnksXG4gIE1hcE1hbmFnZXJGYWN0b3J5XG5dO1xuXG4vKipcbiAqXG4gKiBWZXJ0aWNhbCBzaWRlYmFyIGNvbnRhaW5pbmcgaW5wdXQgY29tcG9uZW50cyBmb3IgdGhlIHJlbmRlcmluZyBsYXllcnNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lkZVBhbmVsRmFjdG9yeShcbiAgU2lkZWJhcixcbiAgUGFuZWxIZWFkZXIsXG4gIFBhbmVsVG9nZ2xlLFxuICBQYW5lbFRpdGxlLFxuICBMYXllck1hbmFnZXIsXG4gIEZpbHRlck1hbmFnZXIsXG4gIEludGVyYWN0aW9uTWFuYWdlcixcbiAgTWFwTWFuYWdlclxuKSB7XG5cbiAgcmV0dXJuIGNsYXNzIFNpZGVQYW5lbCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgIGZpbHRlcnM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5hbnkpLmlzUmVxdWlyZWQsXG4gICAgICBpbnRlcmFjdGlvbkNvbmZpZzogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgICAgbGF5ZXJCbGVuZGluZzogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgbGF5ZXJzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuYW55KS5pc1JlcXVpcmVkLFxuICAgICAgbGF5ZXJDbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgICBtYXBTdHlsZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgICAgd2lkdGg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAgIGRhdGFzZXRzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgICB2aXNTdGF0ZUFjdGlvbnM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICAgIG1hcFN0eWxlQWN0aW9uczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG4gICAgfTtcblxuICAgIC8qIGNvbXBvbmVudCBwcml2YXRlIGZ1bmN0aW9ucyAqL1xuICAgIF9vbk9wZW5PckNsb3NlID0gKCkgPT4ge1xuICAgICAgdGhpcy5wcm9wcy51aVN0YXRlQWN0aW9ucy50b2dnbGVTaWRlUGFuZWwoXG4gICAgICAgIHRoaXMucHJvcHMudWlTdGF0ZS5hY3RpdmVTaWRlUGFuZWwgPyBudWxsIDogJ2xheWVyJ1xuICAgICAgKTtcbiAgICB9O1xuXG4gICAgX3Nob3dEYXRhc2V0VGFibGUgPSBkYXRhSWQgPT4ge1xuICAgICAgLy8gdGhpcyB3aWxsIG9wZW4gZGF0YSB0YWJsZSBtb2RhbFxuICAgICAgdGhpcy5wcm9wcy52aXNTdGF0ZUFjdGlvbnMuc2hvd0RhdGFzZXRUYWJsZShkYXRhSWQpO1xuICAgICAgdGhpcy5wcm9wcy51aVN0YXRlQWN0aW9ucy50b2dnbGVNb2RhbChEQVRBX1RBQkxFX0lEKTtcbiAgICB9O1xuXG4gICAgX3Nob3dBZGREYXRhTW9kYWwgPSAoKSA9PiB7XG4gICAgICB0aGlzLnByb3BzLnVpU3RhdGVBY3Rpb25zLnRvZ2dsZU1vZGFsKEFERF9EQVRBX0lEKTtcbiAgICB9O1xuXG4gICAgX3Nob3dBZGRNYXBTdHlsZU1vZGFsID0gKCkgPT4ge1xuICAgICAgdGhpcy5wcm9wcy51aVN0YXRlQWN0aW9ucy50b2dnbGVNb2RhbChBRERfTUFQX1NUWUxFX0lEKTtcbiAgICB9O1xuXG4gICAgX3JlbW92ZURhdGFzZXQgPSBrZXkgPT4ge1xuICAgICAgLy8gdGhpcyB3aWxsIHNob3cgdGhlIG1vZGFsIGRpYWxvZyB0byBjb25maXJtIGRlbGV0aW9uXG4gICAgICB0aGlzLnByb3BzLnVpU3RhdGVBY3Rpb25zLm9wZW5EZWxldGVNb2RhbChrZXkpO1xuICAgIH07XG5cbiAgICBfb25FeHBvcnRJbWFnZSA9ICgpID0+IHRoaXMucHJvcHMudWlTdGF0ZUFjdGlvbnMudG9nZ2xlTW9kYWwoRVhQT1JUX0lNQUdFX0lEKTtcblxuICAgIF9vbkV4cG9ydERhdGEgPSAoKSA9PiB0aGlzLnByb3BzLnVpU3RhdGVBY3Rpb25zLnRvZ2dsZU1vZGFsKEVYUE9SVF9EQVRBX0lEKTtcblxuICAgIF9vbkV4cG9ydENvbmZpZyA9ICgpID0+IHRoaXMucHJvcHMudWlTdGF0ZUFjdGlvbnMudG9nZ2xlTW9kYWwoRVhQT1JUX0NPTkZJR19JRCk7XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGFwcE5hbWUsXG4gICAgICAgIHZlcnNpb24sXG4gICAgICAgIGhvbWVVcmwsXG4gICAgICAgIGRhdGFzZXRzLFxuICAgICAgICBmaWx0ZXJzLFxuICAgICAgICBsYXllcnMsXG4gICAgICAgIGxheWVyQmxlbmRpbmcsXG4gICAgICAgIGxheWVyQ2xhc3NlcyxcbiAgICAgICAgdWlTdGF0ZSxcbiAgICAgICAgbGF5ZXJPcmRlcixcbiAgICAgICAgaW50ZXJhY3Rpb25Db25maWcsXG4gICAgICAgIHZpc1N0YXRlQWN0aW9ucyxcbiAgICAgICAgbWFwU3R5bGVBY3Rpb25zLFxuICAgICAgICB1aVN0YXRlQWN0aW9uc1xuICAgICAgfSA9IHRoaXMucHJvcHM7XG4gICAgICBjb25zdCB7IGFjdGl2ZVNpZGVQYW5lbCB9ID0gdWlTdGF0ZTtcbiAgICAgIGNvbnN0IGlzT3BlbiA9IEJvb2xlYW4oYWN0aXZlU2lkZVBhbmVsKTtcblxuICAgICAgY29uc3QgbGF5ZXJNYW5hZ2VyQWN0aW9ucyA9IHtcbiAgICAgICAgYWRkTGF5ZXI6IHZpc1N0YXRlQWN0aW9ucy5hZGRMYXllcixcbiAgICAgICAgbGF5ZXJDb25maWdDaGFuZ2U6IHZpc1N0YXRlQWN0aW9ucy5sYXllckNvbmZpZ0NoYW5nZSxcbiAgICAgICAgbGF5ZXJWaXN1YWxDaGFubmVsQ29uZmlnQ2hhbmdlOlxuICAgICAgICAgIHZpc1N0YXRlQWN0aW9ucy5sYXllclZpc3VhbENoYW5uZWxDb25maWdDaGFuZ2UsXG4gICAgICAgIGxheWVyVHlwZUNoYW5nZTogdmlzU3RhdGVBY3Rpb25zLmxheWVyVHlwZUNoYW5nZSxcbiAgICAgICAgbGF5ZXJWaXNDb25maWdDaGFuZ2U6IHZpc1N0YXRlQWN0aW9ucy5sYXllclZpc0NvbmZpZ0NoYW5nZSxcbiAgICAgICAgdXBkYXRlTGF5ZXJCbGVuZGluZzogdmlzU3RhdGVBY3Rpb25zLnVwZGF0ZUxheWVyQmxlbmRpbmcsXG4gICAgICAgIHVwZGF0ZUxheWVyT3JkZXI6IHZpc1N0YXRlQWN0aW9ucy5yZW9yZGVyTGF5ZXIsXG4gICAgICAgIHNob3dEYXRhc2V0VGFibGU6IHRoaXMuX3Nob3dEYXRhc2V0VGFibGUsXG4gICAgICAgIHNob3dBZGREYXRhTW9kYWw6IHRoaXMuX3Nob3dBZGREYXRhTW9kYWwsXG4gICAgICAgIHJlbW92ZUxheWVyOiB2aXNTdGF0ZUFjdGlvbnMucmVtb3ZlTGF5ZXIsXG4gICAgICAgIHJlbW92ZURhdGFzZXQ6IHRoaXMuX3JlbW92ZURhdGFzZXRcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IGZpbHRlck1hbmFnZXJBY3Rpb25zID0ge1xuICAgICAgICBhZGRGaWx0ZXI6IHZpc1N0YXRlQWN0aW9ucy5hZGRGaWx0ZXIsXG4gICAgICAgIHJlbW92ZUZpbHRlcjogdmlzU3RhdGVBY3Rpb25zLnJlbW92ZUZpbHRlcixcbiAgICAgICAgc2V0RmlsdGVyOiB2aXNTdGF0ZUFjdGlvbnMuc2V0RmlsdGVyLFxuICAgICAgICBzaG93RGF0YXNldFRhYmxlOiB0aGlzLl9zaG93RGF0YXNldFRhYmxlLFxuICAgICAgICBzaG93QWRkRGF0YU1vZGFsOiB0aGlzLl9zaG93QWRkRGF0YU1vZGFsLFxuICAgICAgICB0b2dnbGVBbmltYXRpb246IHZpc1N0YXRlQWN0aW9ucy50b2dnbGVBbmltYXRpb24sXG4gICAgICAgIGVubGFyZ2VGaWx0ZXI6IHZpc1N0YXRlQWN0aW9ucy5lbmxhcmdlRmlsdGVyXG4gICAgICB9O1xuXG4gICAgICBjb25zdCBpbnRlcmFjdGlvbk1hbmFnZXJBY3Rpb25zID0ge1xuICAgICAgICBvbkNvbmZpZ0NoYW5nZTogdmlzU3RhdGVBY3Rpb25zLmludGVyYWN0aW9uQ29uZmlnQ2hhbmdlXG4gICAgICB9O1xuXG4gICAgICBjb25zdCBtYXBNYW5hZ2VyQWN0aW9ucyA9IHtcbiAgICAgICAgYWRkTWFwU3R5bGVVcmw6IG1hcFN0eWxlQWN0aW9ucy5hZGRNYXBTdHlsZVVybCxcbiAgICAgICAgb25Db25maWdDaGFuZ2U6IG1hcFN0eWxlQWN0aW9ucy5tYXBDb25maWdDaGFuZ2UsXG4gICAgICAgIG9uU3R5bGVDaGFuZ2U6IG1hcFN0eWxlQWN0aW9ucy5tYXBTdHlsZUNoYW5nZSxcbiAgICAgICAgb25CdWlsZGluZ0NoYW5nZTogbWFwU3R5bGVBY3Rpb25zLm1hcEJ1aWxkaW5nQ2hhbmdlLFxuICAgICAgICBzaG93QWRkTWFwU3R5bGVNb2RhbDogdGhpcy5fc2hvd0FkZE1hcFN0eWxlTW9kYWxcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPFNpZGViYXJcbiAgICAgICAgICAgIHdpZHRoPXt0aGlzLnByb3BzLndpZHRofVxuICAgICAgICAgICAgaXNPcGVuPXtpc09wZW59XG4gICAgICAgICAgICBtaW5pZmllZFdpZHRoPXswfVxuICAgICAgICAgICAgb25PcGVuT3JDbG9zZT17dGhpcy5fb25PcGVuT3JDbG9zZX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8UGFuZWxIZWFkZXJcbiAgICAgICAgICAgICAgYXBwTmFtZT17YXBwTmFtZX1cbiAgICAgICAgICAgICAgdmVyc2lvbj17dmVyc2lvbn1cbiAgICAgICAgICAgICAgaG9tZVVybD17aG9tZVVybH1cbiAgICAgICAgICAgICAgb25FeHBvcnRJbWFnZT17dGhpcy5fb25FeHBvcnRJbWFnZX1cbiAgICAgICAgICAgICAgb25FeHBvcnREYXRhPXt0aGlzLl9vbkV4cG9ydERhdGF9XG4gICAgICAgICAgICAgIHZpc2libGVEcm9wZG93bj17dWlTdGF0ZS52aXNpYmxlRHJvcGRvd259XG4gICAgICAgICAgICAgIHNob3dFeHBvcnREcm9wZG93bj17dWlTdGF0ZUFjdGlvbnMuc2hvd0V4cG9ydERyb3Bkb3dufVxuICAgICAgICAgICAgICBoaWRlRXhwb3J0RHJvcGRvd249e3VpU3RhdGVBY3Rpb25zLmhpZGVFeHBvcnREcm9wZG93bn1cbiAgICAgICAgICAgICAgb25FeHBvcnRDb25maWc9e3RoaXMuX29uRXhwb3J0Q29uZmlnfVxuICAgICAgICAgICAgICBvblNhdmVNYXA9e3RoaXMucHJvcHMub25TYXZlTWFwfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxQYW5lbFRvZ2dsZVxuICAgICAgICAgICAgICBwYW5lbHM9e1BBTkVMU31cbiAgICAgICAgICAgICAgYWN0aXZlUGFuZWw9e2FjdGl2ZVNpZGVQYW5lbH1cbiAgICAgICAgICAgICAgdG9nZ2xlUGFuZWw9e3VpU3RhdGVBY3Rpb25zLnRvZ2dsZVNpZGVQYW5lbH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8U2lkZVBhbmVsQ29udGVudCBjbGFzc05hbWU9XCJzaWRlLXBhbmVsX19jb250ZW50XCI+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPFBhbmVsVGl0bGUgY2xhc3NOYW1lPVwic2lkZS1wYW5lbF9fY29udGVudF9fdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgIHsoUEFORUxTLmZpbmQoKHsgaWQgfSkgPT4gaWQgPT09IGFjdGl2ZVNpZGVQYW5lbCkgfHwge30pLmxhYmVsfVxuICAgICAgICAgICAgICAgIDwvUGFuZWxUaXRsZT5cbiAgICAgICAgICAgICAgICB7YWN0aXZlU2lkZVBhbmVsID09PSAnbGF5ZXInICYmIChcbiAgICAgICAgICAgICAgICAgIDxMYXllck1hbmFnZXJcbiAgICAgICAgICAgICAgICAgICAgey4uLmxheWVyTWFuYWdlckFjdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgIGRhdGFzZXRzPXtkYXRhc2V0c31cbiAgICAgICAgICAgICAgICAgICAgbGF5ZXJzPXtsYXllcnN9XG4gICAgICAgICAgICAgICAgICAgIGxheWVyQ2xhc3Nlcz17bGF5ZXJDbGFzc2VzfVxuICAgICAgICAgICAgICAgICAgICBsYXllck9yZGVyPXtsYXllck9yZGVyfVxuICAgICAgICAgICAgICAgICAgICBsYXllckJsZW5kaW5nPXtsYXllckJsZW5kaW5nfVxuICAgICAgICAgICAgICAgICAgICBvcGVuTW9kYWw9e3VpU3RhdGVBY3Rpb25zLnRvZ2dsZU1vZGFsfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIHthY3RpdmVTaWRlUGFuZWwgPT09ICdmaWx0ZXInICYmIChcbiAgICAgICAgICAgICAgICAgIDxGaWx0ZXJNYW5hZ2VyXG4gICAgICAgICAgICAgICAgICAgIHsuLi5maWx0ZXJNYW5hZ2VyQWN0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgZGF0YXNldHM9e2RhdGFzZXRzfVxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXJzPXtmaWx0ZXJzfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIHthY3RpdmVTaWRlUGFuZWwgPT09ICdpbnRlcmFjdGlvbicgJiYgKFxuICAgICAgICAgICAgICAgICAgPEludGVyYWN0aW9uTWFuYWdlclxuICAgICAgICAgICAgICAgICAgICB7Li4uaW50ZXJhY3Rpb25NYW5hZ2VyQWN0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgZGF0YXNldHM9e2RhdGFzZXRzfVxuICAgICAgICAgICAgICAgICAgICBpbnRlcmFjdGlvbkNvbmZpZz17aW50ZXJhY3Rpb25Db25maWd9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAge2FjdGl2ZVNpZGVQYW5lbCA9PT0gJ21hcCcgJiYgKFxuICAgICAgICAgICAgICAgICAgPE1hcE1hbmFnZXJcbiAgICAgICAgICAgICAgICAgICAgey4uLm1hcE1hbmFnZXJBY3Rpb25zfVxuICAgICAgICAgICAgICAgICAgICBtYXBTdHlsZT17dGhpcy5wcm9wcy5tYXBTdHlsZX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L1NpZGVQYW5lbENvbnRlbnQ+XG4gICAgICAgICAgPC9TaWRlYmFyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuICB9O1xufVxuIl19
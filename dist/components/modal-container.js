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

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  height: 85%;\n  width: 90%;\n  top: 80px;\n  padding: 32px 0 0 0;\n  max-width: unset;\n'], ['\n  height: 85%;\n  width: 90%;\n  top: 80px;\n  padding: 32px 0 0 0;\n  max-width: unset;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  width: 40%;\n  padding: 40px 40px 32px 40px;\n'], ['\n  width: 40%;\n  padding: 40px 40px 32px 40px;\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  top: 60px;\n'], ['\n  top: 60px;\n']); // Copyright (c) 2019 Uber Technologies, Inc.
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

// modals


exports.default = ModalContainerFactory;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _reactDom = require('react-dom');

var _window = require('global/window');

var _modal = require('./common/modal');

var _modal2 = _interopRequireDefault(_modal);

var _dataProcessor = require('../processors/data-processor');

var _schemas = require('../schemas');

var _schemas2 = _interopRequireDefault(_schemas);

var _exportImageUtils = require('../utils/export-image-utils');

var _deleteDataModal = require('./modals/delete-data-modal');

var _deleteDataModal2 = _interopRequireDefault(_deleteDataModal);

var _dataTableModal = require('./modals/data-table-modal');

var _dataTableModal2 = _interopRequireDefault(_dataTableModal);

var _loadDataModal = require('./modals/load-data-modal');

var _loadDataModal2 = _interopRequireDefault(_loadDataModal);

var _exportImageModal = require('./modals/export-image-modal');

var _exportImageModal2 = _interopRequireDefault(_exportImageModal);

var _exportDataModal = require('./modals/export-data-modal');

var _exportDataModal2 = _interopRequireDefault(_exportDataModal);

var _exportConfigModal = require('./modals/export-config-modal');

var _exportConfigModal2 = _interopRequireDefault(_exportConfigModal);

var _addMapStyleModal = require('./modals/add-map-style-modal');

var _addMapStyleModal2 = _interopRequireDefault(_addMapStyleModal);

var _defaultSettings = require('../constants/default-settings');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DataTableModalStyle = (0, _styledComponents.css)(_templateObject);

var DeleteDatasetModalStyled = (0, _styledComponents.css)(_templateObject2);

var LoadDataModalStyle = (0, _styledComponents.css)(_templateObject3);

ModalContainerFactory.deps = [_deleteDataModal2.default, _dataTableModal2.default, _loadDataModal2.default, _exportImageModal2.default, _exportDataModal2.default, _exportConfigModal2.default, _addMapStyleModal2.default];

function ModalContainerFactory(DeleteDatasetModal, DataTableModal, LoadDataModal, ExportImageModal, ExportDataModal, ExportConfigModal, AddMapStyleModal) {
  var _class, _temp2;

  var ModalWrapper = (_temp2 = _class = function (_Component) {
    (0, _inherits3.default)(ModalWrapper, _Component);

    function ModalWrapper() {
      var _ref;

      var _temp, _this, _ret;

      (0, _classCallCheck3.default)(this, ModalWrapper);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ModalWrapper.__proto__ || Object.getPrototypeOf(ModalWrapper)).call.apply(_ref, [this].concat(args))), _this), _this._closeModal = function () {
        _this.props.uiStateActions.toggleModal(null);
      }, _this._deleteDataset = function (key) {
        _this.props.visStateActions.removeDataset(key);
        _this._closeModal();
      }, _this._onAddCustomMapStyle = function () {
        _this.props.mapStyleActions.addCustomMapStyle();
        _this._closeModal();
      }, _this._onFileUpload = function (blob) {
        _this.props.visStateActions.loadFiles(blob);
      }, _this._onExportImage = function () {
        var _this$props$uiState$e = _this.props.uiState.exportImage,
            exporting = _this$props$uiState$e.exporting,
            imageDataUri = _this$props$uiState$e.imageDataUri;

        if (!exporting && imageDataUri) {
          var file = (0, _exportImageUtils.dataURItoBlob)(imageDataUri);
          (0, _exportImageUtils.downloadFile)(file, _defaultSettings.DEFAULT_EXPORT_IMAGE_NAME);
        }
        _this.props.uiStateActions.cleanupExportImage();
        _this._closeModal();
      }, _this._onExportData = function () {
        var _this$props = _this.props,
            visState = _this$props.visState,
            uiState = _this$props.uiState;
        var datasets = visState.datasets;
        var _uiState$exportData = uiState.exportData,
            selectedDataset = _uiState$exportData.selectedDataset,
            dataType = _uiState$exportData.dataType,
            filtered = _uiState$exportData.filtered;
        // get the selected data

        var filename = 'kepler-gl';
        var selectedDatasets = datasets[selectedDataset] ? [datasets[selectedDataset]] : Object.values(datasets);
        if (!selectedDatasets.length) {
          // error: selected dataset not found.
          _this._closeModal();
        }

        selectedDatasets.forEach(function (selectedData) {
          var allData = selectedData.allData,
              data = selectedData.data,
              fields = selectedData.fields,
              label = selectedData.label;

          var exportData = filtered ? data : allData;
          // start to export data according to selected data type
          switch (dataType) {
            case _defaultSettings.EXPORT_DATA_TYPE.CSV:
              {
                var type = 'text/csv';
                var csv = (0, _dataProcessor.formatCsv)(exportData, fields);
                _this._downloadFile(csv, type, filename + '_' + label + '.csv');
                break;
              }
            // TODO: support more file types.
            default:
              break;
          }
        });

        _this._closeModal();
      }, _this._onExportConfig = function () {
        var data = _this.props.uiState.exportData.data;

        // we pass all props because we avoid to create new variables

        var dump = data ? _schemas2.default.save(_this.props) : _schemas2.default.getConfigToSave(_this.props);

        _this._downloadFile(JSON.stringify(dump, null, 2), 'application/json', 'keplergl.json');

        _this._closeModal();
      }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(ModalWrapper, [{
      key: '_downloadFile',
      value: function _downloadFile(data, type, filename) {
        var fileBlob = new _window.Blob([data], { type: type });
        (0, _exportImageUtils.downloadFile)(fileBlob, filename);
      }
    }, {
      key: 'render',
      value: function render() {
        var _this2 = this;

        var _props = this.props,
            containerW = _props.containerW,
            containerH = _props.containerH,
            mapStyle = _props.mapStyle,
            mapState = _props.mapState,
            uiState = _props.uiState,
            visState = _props.visState,
            rootNode = _props.rootNode,
            visStateActions = _props.visStateActions;
        var currentModal = uiState.currentModal,
            datasetKeyToRemove = uiState.datasetKeyToRemove;
        var datasets = visState.datasets,
            layers = visState.layers,
            editingDataset = visState.editingDataset;


        var template = null;
        var modalProps = {};

        if (currentModal && currentModal.id && currentModal.template) {
          // if currentMdoal template is already provided
          // TODO: need to check whether template is valid
          template = _react2.default.createElement(currentModal.template, null);
          modalProps = currentModal.modalProps;
        } else {
          switch (currentModal) {
            case _defaultSettings.DATA_TABLE_ID:
              template = _react2.default.createElement(DataTableModal, {
                width: containerW * 0.9,
                height: containerH * 0.85,
                datasets: datasets,
                dataId: editingDataset,
                showDatasetTable: visStateActions.showDatasetTable
              });
              modalProps.cssStyle = DataTableModalStyle;
              break;
            case _defaultSettings.DELETE_DATA_ID:
              // validate options
              if (datasetKeyToRemove && datasets && datasets[datasetKeyToRemove]) {
                template = _react2.default.createElement(DeleteDatasetModal, {
                  dataset: datasets[datasetKeyToRemove],
                  layers: layers
                });

                modalProps = {
                  title: 'Delete Dataset',
                  cssStyle: DeleteDatasetModalStyled,
                  footer: true,
                  onConfirm: function onConfirm() {
                    return _this2._deleteDataset(datasetKeyToRemove);
                  },
                  onCancel: this._closeModal,
                  confirmButton: {
                    negative: true,
                    large: true,
                    children: 'Delete'
                  }
                };
              }
              break; // in case we add a new case after this one
            case _defaultSettings.ADD_DATA_ID:
              template = _react2.default.createElement(LoadDataModal, {
                onClose: this._closeModal,
                onFileUpload: this._onFileUpload
              });
              modalProps = {
                title: 'Add Data To Map',
                cssStyle: LoadDataModalStyle,
                footer: false,
                onConfirm: this._closeModal
              };
              break;

            case _defaultSettings.EXPORT_IMAGE_ID:
              var _uiState$exportImage = uiState.exportImage,
                  ratio = _uiState$exportImage.ratio,
                  legend = _uiState$exportImage.legend,
                  resolution = _uiState$exportImage.resolution,
                  exporting = _uiState$exportImage.exporting,
                  imageDataUri = _uiState$exportImage.imageDataUri;

              template = _react2.default.createElement(ExportImageModal, {
                width: containerW,
                height: containerH,
                legend: legend,
                ratio: ratio,
                resolution: resolution,
                exporting: exporting,
                imageDataUri: imageDataUri,
                onChangeRatio: this.props.uiStateActions.setRatio,
                onChangeResolution: this.props.uiStateActions.setResolution,
                onToggleLegend: this.props.uiStateActions.toggleLegend
              });
              modalProps = {
                close: false,
                title: 'Export Image',
                footer: true,
                onCancel: this._closeModal,
                onConfirm: this._onExportImage,
                confirmButton: {
                  large: true,
                  disabled: exporting,
                  children: 'Download'
                }
              };
              break;

            case _defaultSettings.EXPORT_DATA_ID:

              template = _react2.default.createElement(ExportDataModal, (0, _extends3.default)({}, uiState.exportData, {
                datasets: datasets,
                onClose: this._closeModal,
                onChangeExportDataType: this.props.uiStateActions.setExportDataType,
                onChangeExportSelectedDataset: this.props.uiStateActions.setExportSelectedDataset,
                onChangeExportFiltered: this.props.uiStateActions.setExportFiltered
              }));
              modalProps = {
                close: false,
                title: 'Export Data',
                footer: true,
                onCancel: this._closeModal,
                onConfirm: this._onExportData,
                confirmButton: {
                  large: true,
                  children: 'Export'
                }
              };
              break;

            case _defaultSettings.EXPORT_CONFIG_ID:
              var keplerGlConfig = _schemas2.default.getConfigToSave({ mapStyle: mapStyle, visState: visState, mapState: mapState, uiState: uiState });
              template = _react2.default.createElement(ExportConfigModal, {
                config: keplerGlConfig,
                data: uiState.exportData.data,
                onClose: this._closeModal,
                onChangeExportData: this.props.uiStateActions.setExportData
              });
              modalProps = {
                close: false,
                title: 'Export Config',
                footer: true,
                onCancel: this._closeModal,
                onConfirm: this._onExportConfig,
                confirmButton: {
                  large: true,
                  children: 'Export'
                }
              };
              break;

            case _defaultSettings.ADD_MAP_STYLE_ID:
              template = _react2.default.createElement(AddMapStyleModal, {
                mapboxApiAccessToken: this.props.mapboxApiAccessToken,
                mapState: this.props.mapState,
                inputStyle: mapStyle.inputStyle,
                inputMapStyle: this.props.mapStyleActions.inputMapStyle,
                loadCustomMapStyle: this.props.mapStyleActions.loadCustomMapStyle
              });
              modalProps = {
                close: false,
                title: 'Add Custom Mapbox Style',
                footer: true,
                onCancel: this._closeModal,
                onConfirm: this._onAddCustomMapStyle,
                confirmButton: {
                  large: true,
                  disabled: !mapStyle.inputStyle.style,
                  children: 'Add Style'
                }
              };
              break;
            default:
              break;
          }
        }

        return this.props.rootNode ? _react2.default.createElement(
          _modal2.default,
          (0, _extends3.default)({}, modalProps, {
            parentSelector: function parentSelector() {
              return (0, _reactDom.findDOMNode)(rootNode);
            },
            isOpen: Boolean(currentModal),
            close: this._closeModal
          }),
          template
        ) : null;
      }
    }]);
    return ModalWrapper;
  }(_react.Component), _class.propTypes = {
    rootNode: _propTypes2.default.object,
    containerW: _propTypes2.default.number,
    containerH: _propTypes2.default.number,
    mapboxApiAccessToken: _propTypes2.default.string.isRequired,
    mapState: _propTypes2.default.object.isRequired,
    mapStyle: _propTypes2.default.object.isRequired,
    uiState: _propTypes2.default.object.isRequired,
    visState: _propTypes2.default.object.isRequired,
    visStateActions: _propTypes2.default.object.isRequired,
    uiStateActions: _propTypes2.default.object.isRequired,
    mapStyleActions: _propTypes2.default.object.isRequired
  }, _temp2);


  return ModalWrapper;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL21vZGFsLWNvbnRhaW5lci5qcyJdLCJuYW1lcyI6WyJNb2RhbENvbnRhaW5lckZhY3RvcnkiLCJEYXRhVGFibGVNb2RhbFN0eWxlIiwiY3NzIiwiRGVsZXRlRGF0YXNldE1vZGFsU3R5bGVkIiwiTG9hZERhdGFNb2RhbFN0eWxlIiwiZGVwcyIsIkRlbGV0ZURhdGFzZXRNb2RhbEZhY3RvcnkiLCJEYXRhVGFibGVNb2RhbEZhY3RvcnkiLCJMb2FkRGF0YU1vZGFsRmFjdG9yeSIsIkV4cG9ydEltYWdlTW9kYWxGYWN0b3J5IiwiRXhwb3J0RGF0YU1vZGFsRmFjdG9yeSIsIkV4cG9ydENvbmZpZ01vZGFsRmFjdG9yeSIsIkFkZE1hcFN0eWxlTW9kYWxGYWN0b3J5IiwiRGVsZXRlRGF0YXNldE1vZGFsIiwiRGF0YVRhYmxlTW9kYWwiLCJMb2FkRGF0YU1vZGFsIiwiRXhwb3J0SW1hZ2VNb2RhbCIsIkV4cG9ydERhdGFNb2RhbCIsIkV4cG9ydENvbmZpZ01vZGFsIiwiQWRkTWFwU3R5bGVNb2RhbCIsIk1vZGFsV3JhcHBlciIsIl9jbG9zZU1vZGFsIiwicHJvcHMiLCJ1aVN0YXRlQWN0aW9ucyIsInRvZ2dsZU1vZGFsIiwiX2RlbGV0ZURhdGFzZXQiLCJ2aXNTdGF0ZUFjdGlvbnMiLCJyZW1vdmVEYXRhc2V0Iiwia2V5IiwiX29uQWRkQ3VzdG9tTWFwU3R5bGUiLCJtYXBTdHlsZUFjdGlvbnMiLCJhZGRDdXN0b21NYXBTdHlsZSIsIl9vbkZpbGVVcGxvYWQiLCJsb2FkRmlsZXMiLCJibG9iIiwiX29uRXhwb3J0SW1hZ2UiLCJ1aVN0YXRlIiwiZXhwb3J0SW1hZ2UiLCJleHBvcnRpbmciLCJpbWFnZURhdGFVcmkiLCJmaWxlIiwiREVGQVVMVF9FWFBPUlRfSU1BR0VfTkFNRSIsImNsZWFudXBFeHBvcnRJbWFnZSIsIl9vbkV4cG9ydERhdGEiLCJ2aXNTdGF0ZSIsImRhdGFzZXRzIiwiZXhwb3J0RGF0YSIsInNlbGVjdGVkRGF0YXNldCIsImRhdGFUeXBlIiwiZmlsdGVyZWQiLCJmaWxlbmFtZSIsInNlbGVjdGVkRGF0YXNldHMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJsZW5ndGgiLCJmb3JFYWNoIiwiYWxsRGF0YSIsInNlbGVjdGVkRGF0YSIsImRhdGEiLCJmaWVsZHMiLCJsYWJlbCIsIkVYUE9SVF9EQVRBX1RZUEUiLCJDU1YiLCJ0eXBlIiwiY3N2IiwiX2Rvd25sb2FkRmlsZSIsIl9vbkV4cG9ydENvbmZpZyIsImR1bXAiLCJLZXBsZXJHbFNjaGVtYSIsInNhdmUiLCJnZXRDb25maWdUb1NhdmUiLCJKU09OIiwic3RyaW5naWZ5IiwiZmlsZUJsb2IiLCJCbG9iIiwiY29udGFpbmVyVyIsImNvbnRhaW5lckgiLCJtYXBTdHlsZSIsIm1hcFN0YXRlIiwicm9vdE5vZGUiLCJjdXJyZW50TW9kYWwiLCJkYXRhc2V0S2V5VG9SZW1vdmUiLCJsYXllcnMiLCJlZGl0aW5nRGF0YXNldCIsInRlbXBsYXRlIiwibW9kYWxQcm9wcyIsImlkIiwiREFUQV9UQUJMRV9JRCIsInNob3dEYXRhc2V0VGFibGUiLCJjc3NTdHlsZSIsIkRFTEVURV9EQVRBX0lEIiwidGl0bGUiLCJmb290ZXIiLCJvbkNvbmZpcm0iLCJvbkNhbmNlbCIsImNvbmZpcm1CdXR0b24iLCJuZWdhdGl2ZSIsImxhcmdlIiwiY2hpbGRyZW4iLCJBRERfREFUQV9JRCIsIkVYUE9SVF9JTUFHRV9JRCIsInJhdGlvIiwibGVnZW5kIiwicmVzb2x1dGlvbiIsInNldFJhdGlvIiwic2V0UmVzb2x1dGlvbiIsInRvZ2dsZUxlZ2VuZCIsImNsb3NlIiwiZGlzYWJsZWQiLCJFWFBPUlRfREFUQV9JRCIsInNldEV4cG9ydERhdGFUeXBlIiwic2V0RXhwb3J0U2VsZWN0ZWREYXRhc2V0Iiwic2V0RXhwb3J0RmlsdGVyZWQiLCJFWFBPUlRfQ09ORklHX0lEIiwia2VwbGVyR2xDb25maWciLCJzZXRFeHBvcnREYXRhIiwiQUREX01BUF9TVFlMRV9JRCIsIm1hcGJveEFwaUFjY2Vzc1Rva2VuIiwiaW5wdXRTdHlsZSIsImlucHV0TWFwU3R5bGUiLCJsb2FkQ3VzdG9tTWFwU3R5bGUiLCJzdHlsZSIsIkJvb2xlYW4iLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJudW1iZXIiLCJzdHJpbmciLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt5R0FBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFZQTs7O2tCQWdEd0JBLHFCOztBQTFEeEI7Ozs7QUFDQTs7OztBQUNBOztBQUNBOztBQUNBOztBQUVBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBWUEsSUFBTUMsMEJBQXNCQyxxQkFBdEIsa0JBQU47O0FBUUEsSUFBTUMsK0JBQTJCRCxxQkFBM0IsbUJBQU47O0FBS0EsSUFBTUUseUJBQXFCRixxQkFBckIsbUJBQU47O0FBSUFGLHNCQUFzQkssSUFBdEIsR0FBNkIsQ0FDM0JDLHlCQUQyQixFQUUzQkMsd0JBRjJCLEVBRzNCQyx1QkFIMkIsRUFJM0JDLDBCQUoyQixFQUszQkMseUJBTDJCLEVBTTNCQywyQkFOMkIsRUFPM0JDLDBCQVAyQixDQUE3Qjs7QUFVZSxTQUFTWixxQkFBVCxDQUNiYSxrQkFEYSxFQUViQyxjQUZhLEVBR2JDLGFBSGEsRUFJYkMsZ0JBSmEsRUFLYkMsZUFMYSxFQU1iQyxpQkFOYSxFQU9iQyxnQkFQYSxFQVFiO0FBQUE7O0FBQUEsTUFDTUMsWUFETjtBQUFBOztBQUFBO0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBLGtOQWdCRUMsV0FoQkYsR0FnQmdCLFlBQU07QUFDbEIsY0FBS0MsS0FBTCxDQUFXQyxjQUFYLENBQTBC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TUFBVixDQUFpQkcsVUFWaEI7QUFXakJuRyxxQkFBaUIrRixvQkFBVUMsTUFBVixDQUFpQkc7QUFYakIsR0FGckI7OztBQXVTQSxTQUFPN0csWUFBUDtBQUNEIiwiZmlsZSI6Im1vZGFsLWNvbnRhaW5lci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAxOSBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7Y3NzfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQge2ZpbmRET01Ob2RlfSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHtCbG9ifSBmcm9tICdnbG9iYWwvd2luZG93JztcblxuaW1wb3J0IE1vZGFsRGlhbG9nIGZyb20gJy4vY29tbW9uL21vZGFsJztcbmltcG9ydCB7Zm9ybWF0Q3N2fSBmcm9tICdwcm9jZXNzb3JzL2RhdGEtcHJvY2Vzc29yJztcbmltcG9ydCBLZXBsZXJHbFNjaGVtYSBmcm9tICdzY2hlbWFzJztcbmltcG9ydCB7ZG93bmxvYWRGaWxlLCBkYXRhVVJJdG9CbG9ifSBmcm9tICd1dGlscy9leHBvcnQtaW1hZ2UtdXRpbHMnO1xuLy8gbW9kYWxzXG5pbXBvcnQgRGVsZXRlRGF0YXNldE1vZGFsRmFjdG9yeSBmcm9tICcuL21vZGFscy9kZWxldGUtZGF0YS1tb2RhbCc7XG5pbXBvcnQgRGF0YVRhYmxlTW9kYWxGYWN0b3J5IGZyb20gJy4vbW9kYWxzL2RhdGEtdGFibGUtbW9kYWwnO1xuaW1wb3J0IExvYWREYXRhTW9kYWxGYWN0b3J5IGZyb20gJy4vbW9kYWxzL2xvYWQtZGF0YS1tb2RhbCc7XG5pbXBvcnQgRXhwb3J0SW1hZ2VNb2RhbEZhY3RvcnkgZnJvbSAnLi9tb2RhbHMvZXhwb3J0LWltYWdlLW1vZGFsJztcbmltcG9ydCBFeHBvcnREYXRhTW9kYWxGYWN0b3J5IGZyb20gJy4vbW9kYWxzL2V4cG9ydC1kYXRhLW1vZGFsJztcbmltcG9ydCBFeHBvcnRDb25maWdNb2RhbEZhY3RvcnkgZnJvbSAnLi9tb2RhbHMvZXhwb3J0LWNvbmZpZy1tb2RhbCc7XG5pbXBvcnQgQWRkTWFwU3R5bGVNb2RhbEZhY3RvcnkgZnJvbSAnLi9tb2RhbHMvYWRkLW1hcC1zdHlsZS1tb2RhbCc7XG5cbmltcG9ydCB7XG4gIEFERF9EQVRBX0lELFxuICBEQVRBX1RBQkxFX0lELFxuICBERUZBVUxUX0VYUE9SVF9JTUFHRV9OQU1FLFxuICBERUxFVEVfREFUQV9JRCxcbiAgRVhQT1JUX0RBVEFfSUQsXG4gIEVYUE9SVF9EQVRBX1RZUEUsXG4gIEVYUE9SVF9JTUFHRV9JRCxcbiAgRVhQT1JUX0NPTkZJR19JRCxcbiAgQUREX01BUF9TVFlMRV9JRFxufSBmcm9tICdjb25zdGFudHMvZGVmYXVsdC1zZXR0aW5ncyc7XG5cbmNvbnN0IERhdGFUYWJsZU1vZGFsU3R5bGUgPSBjc3NgXG4gIGhlaWdodDogODUlO1xuICB3aWR0aDogOTAlO1xuICB0b3A6IDgwcHg7XG4gIHBhZGRpbmc6IDMycHggMCAwIDA7XG4gIG1heC13aWR0aDogdW5zZXQ7XG5gO1xuXG5jb25zdCBEZWxldGVEYXRhc2V0TW9kYWxTdHlsZWQgPSBjc3NgXG4gIHdpZHRoOiA0MCU7XG4gIHBhZGRpbmc6IDQwcHggNDBweCAzMnB4IDQwcHg7XG5gO1xuXG5jb25zdCBMb2FkRGF0YU1vZGFsU3R5bGUgPSBjc3NgXG4gIHRvcDogNjBweDtcbmA7XG5cbk1vZGFsQ29udGFpbmVyRmFjdG9yeS5kZXBzID0gW1xuICBEZWxldGVEYXRhc2V0TW9kYWxGYWN0b3J5LFxuICBEYXRhVGFibGVNb2RhbEZhY3RvcnksXG4gIExvYWREYXRhTW9kYWxGYWN0b3J5LFxuICBFeHBvcnRJbWFnZU1vZGFsRmFjdG9yeSxcbiAgRXhwb3J0RGF0YU1vZGFsRmFjdG9yeSxcbiAgRXhwb3J0Q29uZmlnTW9kYWxGYWN0b3J5LFxuICBBZGRNYXBTdHlsZU1vZGFsRmFjdG9yeVxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW9kYWxDb250YWluZXJGYWN0b3J5KFxuICBEZWxldGVEYXRhc2V0TW9kYWwsXG4gIERhdGFUYWJsZU1vZGFsLFxuICBMb2FkRGF0YU1vZGFsLFxuICBFeHBvcnRJbWFnZU1vZGFsLFxuICBFeHBvcnREYXRhTW9kYWwsXG4gIEV4cG9ydENvbmZpZ01vZGFsLFxuICBBZGRNYXBTdHlsZU1vZGFsXG4pIHtcbiAgY2xhc3MgTW9kYWxXcmFwcGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgcm9vdE5vZGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgICBjb250YWluZXJXOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgY29udGFpbmVySDogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIG1hcGJveEFwaUFjY2Vzc1Rva2VuOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICBtYXBTdGF0ZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgICAgbWFwU3R5bGU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICAgIHVpU3RhdGU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICAgIHZpc1N0YXRlOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgICB2aXNTdGF0ZUFjdGlvbnM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICAgIHVpU3RhdGVBY3Rpb25zOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgICBtYXBTdHlsZUFjdGlvbnM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxuICAgIH07XG5cbiAgICBfY2xvc2VNb2RhbCA9ICgpID0+IHtcbiAgICAgIHRoaXMucHJvcHMudWlTdGF0ZUFjdGlvbnMudG9nZ2xlTW9kYWwobnVsbCk7XG4gICAgfTtcblxuICAgIF9kZWxldGVEYXRhc2V0ID0ga2V5ID0+IHtcbiAgICAgIHRoaXMucHJvcHMudmlzU3RhdGVBY3Rpb25zLnJlbW92ZURhdGFzZXQoa2V5KTtcbiAgICAgIHRoaXMuX2Nsb3NlTW9kYWwoKTtcbiAgICB9O1xuXG4gICAgX29uQWRkQ3VzdG9tTWFwU3R5bGUgPSAoKSA9PiB7XG4gICAgICB0aGlzLnByb3BzLm1hcFN0eWxlQWN0aW9ucy5hZGRDdXN0b21NYXBTdHlsZSgpO1xuICAgICAgdGhpcy5fY2xvc2VNb2RhbCgpO1xuICAgIH07XG5cbiAgICBfb25GaWxlVXBsb2FkID0gYmxvYiA9PiB7XG4gICAgICB0aGlzLnByb3BzLnZpc1N0YXRlQWN0aW9ucy5sb2FkRmlsZXMoYmxvYik7XG4gICAgfTtcblxuICAgIF9vbkV4cG9ydEltYWdlID0gKCkgPT4ge1xuICAgICAgY29uc3Qge2V4cG9ydGluZywgaW1hZ2VEYXRhVXJpfSA9IHRoaXMucHJvcHMudWlTdGF0ZS5leHBvcnRJbWFnZTtcbiAgICAgIGlmICghZXhwb3J0aW5nICYmIGltYWdlRGF0YVVyaSkge1xuICAgICAgICBjb25zdCBmaWxlID0gZGF0YVVSSXRvQmxvYihpbWFnZURhdGFVcmkpO1xuICAgICAgICBkb3dubG9hZEZpbGUoZmlsZSwgREVGQVVMVF9FWFBPUlRfSU1BR0VfTkFNRSk7XG4gICAgICB9XG4gICAgICB0aGlzLnByb3BzLnVpU3RhdGVBY3Rpb25zLmNsZWFudXBFeHBvcnRJbWFnZSgpO1xuICAgICAgdGhpcy5fY2xvc2VNb2RhbCgpO1xuICAgIH07XG5cbiAgICBfZG93bmxvYWRGaWxlKGRhdGEsIHR5cGUsIGZpbGVuYW1lKSB7XG4gICAgICBjb25zdCBmaWxlQmxvYiA9IG5ldyBCbG9iKFtkYXRhXSwge3R5cGV9KTtcbiAgICAgIGRvd25sb2FkRmlsZShmaWxlQmxvYiwgZmlsZW5hbWUpO1xuICAgIH1cblxuICAgIF9vbkV4cG9ydERhdGEgPSAoKSA9PiB7XG4gICAgICBjb25zdCB7dmlzU3RhdGUsIHVpU3RhdGV9ID0gdGhpcy5wcm9wcztcbiAgICAgIGNvbnN0IHtkYXRhc2V0c30gPSB2aXNTdGF0ZTtcbiAgICAgIGNvbnN0IHtzZWxlY3RlZERhdGFzZXQsIGRhdGFUeXBlLCBmaWx0ZXJlZH0gPSB1aVN0YXRlLmV4cG9ydERhdGE7XG4gICAgICAvLyBnZXQgdGhlIHNlbGVjdGVkIGRhdGFcbiAgICAgIGNvbnN0IGZpbGVuYW1lID0gJ2tlcGxlci1nbCc7XG4gICAgICBjb25zdCBzZWxlY3RlZERhdGFzZXRzID0gZGF0YXNldHNbc2VsZWN0ZWREYXRhc2V0XSA/IFtkYXRhc2V0c1tzZWxlY3RlZERhdGFzZXRdXSA6IE9iamVjdC52YWx1ZXMoZGF0YXNldHMpO1xuICAgICAgaWYgKCFzZWxlY3RlZERhdGFzZXRzLmxlbmd0aCkge1xuICAgICAgICAvLyBlcnJvcjogc2VsZWN0ZWQgZGF0YXNldCBub3QgZm91bmQuXG4gICAgICAgIHRoaXMuX2Nsb3NlTW9kYWwoKTtcbiAgICAgIH1cblxuICAgICAgc2VsZWN0ZWREYXRhc2V0cy5mb3JFYWNoKHNlbGVjdGVkRGF0YSA9PiB7XG4gICAgICAgIGNvbnN0IHthbGxEYXRhLCBkYXRhLCBmaWVsZHMsIGxhYmVsfSA9IHNlbGVjdGVkRGF0YTtcbiAgICAgICAgY29uc3QgZXhwb3J0RGF0YSA9IGZpbHRlcmVkID8gZGF0YSA6IGFsbERhdGE7XG4gICAgICAgIC8vIHN0YXJ0IHRvIGV4cG9ydCBkYXRhIGFjY29yZGluZyB0byBzZWxlY3RlZCBkYXRhIHR5cGVcbiAgICAgICAgc3dpdGNoIChkYXRhVHlwZSkge1xuICAgICAgICAgIGNhc2UgRVhQT1JUX0RBVEFfVFlQRS5DU1Y6IHtcbiAgICAgICAgICAgIGNvbnN0IHR5cGUgPSAndGV4dC9jc3YnO1xuICAgICAgICAgICAgY29uc3QgY3N2ID0gZm9ybWF0Q3N2KGV4cG9ydERhdGEsIGZpZWxkcyk7XG4gICAgICAgICAgICB0aGlzLl9kb3dubG9hZEZpbGUoY3N2LCB0eXBlLCBgJHtmaWxlbmFtZX1fJHtsYWJlbH0uY3N2YCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gVE9ETzogc3VwcG9ydCBtb3JlIGZpbGUgdHlwZXMuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLl9jbG9zZU1vZGFsKCk7XG4gICAgfTtcblxuICAgIF9vbkV4cG9ydENvbmZpZyA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHtkYXRhfSA9IHRoaXMucHJvcHMudWlTdGF0ZS5leHBvcnREYXRhO1xuXG4gICAgICAvLyB3ZSBwYXNzIGFsbCBwcm9wcyBiZWNhdXNlIHdlIGF2b2lkIHRvIGNyZWF0ZSBuZXcgdmFyaWFibGVzXG4gICAgICBjb25zdCBkdW1wID0gZGF0YSA/IEtlcGxlckdsU2NoZW1hLnNhdmUodGhpcy5wcm9wcylcbiAgICAgICAgOiBLZXBsZXJHbFNjaGVtYS5nZXRDb25maWdUb1NhdmUodGhpcy5wcm9wcyk7XG5cbiAgICAgIHRoaXMuX2Rvd25sb2FkRmlsZShcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkoZHVtcCwgbnVsbCwgMiksXG4gICAgICAgICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ2tlcGxlcmdsLmpzb24nXG4gICAgICApO1xuXG4gICAgICB0aGlzLl9jbG9zZU1vZGFsKCk7XG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgY29udGFpbmVyVyxcbiAgICAgICAgY29udGFpbmVySCxcbiAgICAgICAgbWFwU3R5bGUsXG4gICAgICAgIG1hcFN0YXRlLFxuICAgICAgICB1aVN0YXRlLFxuICAgICAgICB2aXNTdGF0ZSxcbiAgICAgICAgcm9vdE5vZGUsXG4gICAgICAgIHZpc1N0YXRlQWN0aW9uc1xuICAgICAgfSA9IHRoaXMucHJvcHM7XG4gICAgICBjb25zdCB7Y3VycmVudE1vZGFsLCBkYXRhc2V0S2V5VG9SZW1vdmV9ID0gdWlTdGF0ZTtcbiAgICAgIGNvbnN0IHtkYXRhc2V0cywgbGF5ZXJzLCBlZGl0aW5nRGF0YXNldH0gPSB2aXNTdGF0ZTtcblxuICAgICAgbGV0IHRlbXBsYXRlID0gbnVsbDtcbiAgICAgIGxldCBtb2RhbFByb3BzID0ge307XG5cbiAgICAgIGlmIChjdXJyZW50TW9kYWwgJiYgY3VycmVudE1vZGFsLmlkICYmXG4gICAgICAgIGN1cnJlbnRNb2RhbC50ZW1wbGF0ZSkge1xuICAgICAgICAvLyBpZiBjdXJyZW50TWRvYWwgdGVtcGxhdGUgaXMgYWxyZWFkeSBwcm92aWRlZFxuICAgICAgICAvLyBUT0RPOiBuZWVkIHRvIGNoZWNrIHdoZXRoZXIgdGVtcGxhdGUgaXMgdmFsaWRcbiAgICAgICAgdGVtcGxhdGUgPSAoPGN1cnJlbnRNb2RhbC50ZW1wbGF0ZS8+KTtcbiAgICAgICAgbW9kYWxQcm9wcyA9IGN1cnJlbnRNb2RhbC5tb2RhbFByb3BzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3dpdGNoIChjdXJyZW50TW9kYWwpIHtcbiAgICAgICAgICBjYXNlIERBVEFfVEFCTEVfSUQ6XG4gICAgICAgICAgICB0ZW1wbGF0ZSA9IChcbiAgICAgICAgICAgICAgPERhdGFUYWJsZU1vZGFsXG4gICAgICAgICAgICAgICAgd2lkdGg9e2NvbnRhaW5lclcgKiAwLjl9XG4gICAgICAgICAgICAgICAgaGVpZ2h0PXtjb250YWluZXJIICogMC44NX1cbiAgICAgICAgICAgICAgICBkYXRhc2V0cz17ZGF0YXNldHN9XG4gICAgICAgICAgICAgICAgZGF0YUlkPXtlZGl0aW5nRGF0YXNldH1cbiAgICAgICAgICAgICAgICBzaG93RGF0YXNldFRhYmxlPXt2aXNTdGF0ZUFjdGlvbnMuc2hvd0RhdGFzZXRUYWJsZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBtb2RhbFByb3BzLmNzc1N0eWxlID0gRGF0YVRhYmxlTW9kYWxTdHlsZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgREVMRVRFX0RBVEFfSUQ6XG4gICAgICAgICAgICAvLyB2YWxpZGF0ZSBvcHRpb25zXG4gICAgICAgICAgICBpZiAoZGF0YXNldEtleVRvUmVtb3ZlICYmIGRhdGFzZXRzICYmIGRhdGFzZXRzW2RhdGFzZXRLZXlUb1JlbW92ZV0pIHtcbiAgICAgICAgICAgICAgdGVtcGxhdGUgPSAoXG4gICAgICAgICAgICAgICAgPERlbGV0ZURhdGFzZXRNb2RhbFxuICAgICAgICAgICAgICAgICAgZGF0YXNldD17ZGF0YXNldHNbZGF0YXNldEtleVRvUmVtb3ZlXX1cbiAgICAgICAgICAgICAgICAgIGxheWVycz17bGF5ZXJzfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgbW9kYWxQcm9wcyA9IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0RlbGV0ZSBEYXRhc2V0JyxcbiAgICAgICAgICAgICAgICBjc3NTdHlsZTogRGVsZXRlRGF0YXNldE1vZGFsU3R5bGVkLFxuICAgICAgICAgICAgICAgIGZvb3RlcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBvbkNvbmZpcm06ICgpID0+IHRoaXMuX2RlbGV0ZURhdGFzZXQoZGF0YXNldEtleVRvUmVtb3ZlKSxcbiAgICAgICAgICAgICAgICBvbkNhbmNlbDogdGhpcy5fY2xvc2VNb2RhbCxcbiAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uOiB7XG4gICAgICAgICAgICAgICAgICBuZWdhdGl2ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIGxhcmdlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgY2hpbGRyZW46ICdEZWxldGUnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7IC8vIGluIGNhc2Ugd2UgYWRkIGEgbmV3IGNhc2UgYWZ0ZXIgdGhpcyBvbmVcbiAgICAgICAgICBjYXNlIEFERF9EQVRBX0lEOlxuICAgICAgICAgICAgdGVtcGxhdGUgPSAoXG4gICAgICAgICAgICAgIDxMb2FkRGF0YU1vZGFsXG4gICAgICAgICAgICAgICAgb25DbG9zZT17dGhpcy5fY2xvc2VNb2RhbH1cbiAgICAgICAgICAgICAgICBvbkZpbGVVcGxvYWQ9e3RoaXMuX29uRmlsZVVwbG9hZH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBtb2RhbFByb3BzID0ge1xuICAgICAgICAgICAgICB0aXRsZTogJ0FkZCBEYXRhIFRvIE1hcCcsXG4gICAgICAgICAgICAgIGNzc1N0eWxlOiBMb2FkRGF0YU1vZGFsU3R5bGUsXG4gICAgICAgICAgICAgIGZvb3RlcjogZmFsc2UsXG4gICAgICAgICAgICAgIG9uQ29uZmlybTogdGhpcy5fY2xvc2VNb2RhbFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSBFWFBPUlRfSU1BR0VfSUQ6XG4gICAgICAgICAgICBjb25zdCB7IHJhdGlvLCBsZWdlbmQsIHJlc29sdXRpb24sIGV4cG9ydGluZywgaW1hZ2VEYXRhVXJpIH0gPSB1aVN0YXRlLmV4cG9ydEltYWdlO1xuICAgICAgICAgICAgdGVtcGxhdGUgPSAoXG4gICAgICAgICAgICAgIDxFeHBvcnRJbWFnZU1vZGFsXG4gICAgICAgICAgICAgICAgd2lkdGg9e2NvbnRhaW5lcld9XG4gICAgICAgICAgICAgICAgaGVpZ2h0PXtjb250YWluZXJIfVxuICAgICAgICAgICAgICAgIGxlZ2VuZD17bGVnZW5kfVxuICAgICAgICAgICAgICAgIHJhdGlvPXtyYXRpb31cbiAgICAgICAgICAgICAgICByZXNvbHV0aW9uPXtyZXNvbHV0aW9ufVxuICAgICAgICAgICAgICAgIGV4cG9ydGluZz17ZXhwb3J0aW5nfVxuICAgICAgICAgICAgICAgIGltYWdlRGF0YVVyaT17aW1hZ2VEYXRhVXJpfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlUmF0aW89e3RoaXMucHJvcHMudWlTdGF0ZUFjdGlvbnMuc2V0UmF0aW99XG4gICAgICAgICAgICAgICAgb25DaGFuZ2VSZXNvbHV0aW9uPXt0aGlzLnByb3BzLnVpU3RhdGVBY3Rpb25zLnNldFJlc29sdXRpb259XG4gICAgICAgICAgICAgICAgb25Ub2dnbGVMZWdlbmQ9e3RoaXMucHJvcHMudWlTdGF0ZUFjdGlvbnMudG9nZ2xlTGVnZW5kfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIG1vZGFsUHJvcHMgPSB7XG4gICAgICAgICAgICAgIGNsb3NlOiBmYWxzZSxcbiAgICAgICAgICAgICAgdGl0bGU6ICdFeHBvcnQgSW1hZ2UnLFxuICAgICAgICAgICAgICBmb290ZXI6IHRydWUsXG4gICAgICAgICAgICAgIG9uQ2FuY2VsOiB0aGlzLl9jbG9zZU1vZGFsLFxuICAgICAgICAgICAgICBvbkNvbmZpcm06IHRoaXMuX29uRXhwb3J0SW1hZ2UsXG4gICAgICAgICAgICAgIGNvbmZpcm1CdXR0b246IHtcbiAgICAgICAgICAgICAgICBsYXJnZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogZXhwb3J0aW5nLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiAnRG93bmxvYWQnXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgRVhQT1JUX0RBVEFfSUQ6XG5cbiAgICAgICAgICAgIHRlbXBsYXRlID0gKFxuICAgICAgICAgICAgICA8RXhwb3J0RGF0YU1vZGFsXG4gICAgICAgICAgICAgICAgey4uLnVpU3RhdGUuZXhwb3J0RGF0YX1cbiAgICAgICAgICAgICAgICBkYXRhc2V0cz17ZGF0YXNldHN9XG4gICAgICAgICAgICAgICAgb25DbG9zZT17dGhpcy5fY2xvc2VNb2RhbH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZUV4cG9ydERhdGFUeXBlPXt0aGlzLnByb3BzLnVpU3RhdGVBY3Rpb25zLnNldEV4cG9ydERhdGFUeXBlfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlRXhwb3J0U2VsZWN0ZWREYXRhc2V0PXt0aGlzLnByb3BzLnVpU3RhdGVBY3Rpb25zLnNldEV4cG9ydFNlbGVjdGVkRGF0YXNldH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZUV4cG9ydEZpbHRlcmVkPXt0aGlzLnByb3BzLnVpU3RhdGVBY3Rpb25zLnNldEV4cG9ydEZpbHRlcmVkfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIG1vZGFsUHJvcHMgPSB7XG4gICAgICAgICAgICAgIGNsb3NlOiBmYWxzZSxcbiAgICAgICAgICAgICAgdGl0bGU6ICdFeHBvcnQgRGF0YScsXG4gICAgICAgICAgICAgIGZvb3RlcjogdHJ1ZSxcbiAgICAgICAgICAgICAgb25DYW5jZWw6IHRoaXMuX2Nsb3NlTW9kYWwsXG4gICAgICAgICAgICAgIG9uQ29uZmlybTogdGhpcy5fb25FeHBvcnREYXRhLFxuICAgICAgICAgICAgICBjb25maXJtQnV0dG9uOiB7XG4gICAgICAgICAgICAgICAgbGFyZ2U6IHRydWUsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46ICdFeHBvcnQnXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgRVhQT1JUX0NPTkZJR19JRDpcbiAgICAgICAgICAgIGNvbnN0IGtlcGxlckdsQ29uZmlnID0gS2VwbGVyR2xTY2hlbWEuZ2V0Q29uZmlnVG9TYXZlKFxuICAgICAgICAgICAgICB7IG1hcFN0eWxlLCB2aXNTdGF0ZSwgbWFwU3RhdGUsIHVpU3RhdGUgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHRlbXBsYXRlID0gKFxuICAgICAgICAgICAgICA8RXhwb3J0Q29uZmlnTW9kYWxcbiAgICAgICAgICAgICAgICBjb25maWc9e2tlcGxlckdsQ29uZmlnfVxuICAgICAgICAgICAgICAgIGRhdGE9e3VpU3RhdGUuZXhwb3J0RGF0YS5kYXRhfVxuICAgICAgICAgICAgICAgIG9uQ2xvc2U9e3RoaXMuX2Nsb3NlTW9kYWx9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2VFeHBvcnREYXRhPXt0aGlzLnByb3BzLnVpU3RhdGVBY3Rpb25zLnNldEV4cG9ydERhdGF9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgbW9kYWxQcm9wcyA9IHtcbiAgICAgICAgICAgICAgY2xvc2U6IGZhbHNlLFxuICAgICAgICAgICAgICB0aXRsZTogJ0V4cG9ydCBDb25maWcnLFxuICAgICAgICAgICAgICBmb290ZXI6IHRydWUsXG4gICAgICAgICAgICAgIG9uQ2FuY2VsOiB0aGlzLl9jbG9zZU1vZGFsLFxuICAgICAgICAgICAgICBvbkNvbmZpcm06IHRoaXMuX29uRXhwb3J0Q29uZmlnLFxuICAgICAgICAgICAgICBjb25maXJtQnV0dG9uOiB7XG4gICAgICAgICAgICAgICAgbGFyZ2U6IHRydWUsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46ICdFeHBvcnQnXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgQUREX01BUF9TVFlMRV9JRDpcbiAgICAgICAgICAgIHRlbXBsYXRlID0gKFxuICAgICAgICAgICAgICA8QWRkTWFwU3R5bGVNb2RhbFxuICAgICAgICAgICAgICAgIG1hcGJveEFwaUFjY2Vzc1Rva2VuPXt0aGlzLnByb3BzLm1hcGJveEFwaUFjY2Vzc1Rva2VufVxuICAgICAgICAgICAgICAgIG1hcFN0YXRlPXt0aGlzLnByb3BzLm1hcFN0YXRlfVxuICAgICAgICAgICAgICAgIGlucHV0U3R5bGU9e21hcFN0eWxlLmlucHV0U3R5bGV9XG4gICAgICAgICAgICAgICAgaW5wdXRNYXBTdHlsZT17dGhpcy5wcm9wcy5tYXBTdHlsZUFjdGlvbnMuaW5wdXRNYXBTdHlsZX1cbiAgICAgICAgICAgICAgICBsb2FkQ3VzdG9tTWFwU3R5bGU9e3RoaXMucHJvcHMubWFwU3R5bGVBY3Rpb25zLmxvYWRDdXN0b21NYXBTdHlsZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBtb2RhbFByb3BzID0ge1xuICAgICAgICAgICAgICBjbG9zZTogZmFsc2UsXG4gICAgICAgICAgICAgIHRpdGxlOiAnQWRkIEN1c3RvbSBNYXBib3ggU3R5bGUnLFxuICAgICAgICAgICAgICBmb290ZXI6IHRydWUsXG4gICAgICAgICAgICAgIG9uQ2FuY2VsOiB0aGlzLl9jbG9zZU1vZGFsLFxuICAgICAgICAgICAgICBvbkNvbmZpcm06IHRoaXMuX29uQWRkQ3VzdG9tTWFwU3R5bGUsXG4gICAgICAgICAgICAgIGNvbmZpcm1CdXR0b246IHtcbiAgICAgICAgICAgICAgICBsYXJnZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogIW1hcFN0eWxlLmlucHV0U3R5bGUuc3R5bGUsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46ICdBZGQgU3R5bGUnXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucHJvcHMucm9vdE5vZGUgPyAoXG4gICAgICAgIDxNb2RhbERpYWxvZ1xuICAgICAgICAgIHsuLi5tb2RhbFByb3BzfVxuICAgICAgICAgIHBhcmVudFNlbGVjdG9yPXsoKSA9PiBmaW5kRE9NTm9kZShyb290Tm9kZSl9XG4gICAgICAgICAgaXNPcGVuPXtCb29sZWFuKGN1cnJlbnRNb2RhbCl9XG4gICAgICAgICAgY2xvc2U9e3RoaXMuX2Nsb3NlTW9kYWx9XG4gICAgICAgID5cbiAgICAgICAgICB7dGVtcGxhdGV9XG4gICAgICAgIDwvTW9kYWxEaWFsb2c+XG4gICAgICApIDogbnVsbDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gTW9kYWxXcmFwcGVyO1xufVxuIl19
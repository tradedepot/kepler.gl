'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setExportFiltered = exports.setExportDataType = exports.setExportSelectedDataset = exports.cleanupExportImage = exports.setExportImageDataUri = exports.startExportingImage = exports.toggleLegend = exports.setResolution = exports.setRatio = exports.setExportData = exports.setExportConfig = exports.openDeleteModal = exports.toggleMapControl = exports.hideExportDropdown = exports.showExportDropdown = exports.toggleModal = exports.toggleSidePanel = undefined;

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _reduxActions = require('redux-actions');

var _actionTypes = require('../constants/action-types');

var _actionTypes2 = _interopRequireDefault(_actionTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright (c) 2019 Uber Technologies, Inc.
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

var CLEANUP_EXPORT_IMAGE = _actionTypes2.default.CLEANUP_EXPORT_IMAGE,
    OPEN_DELETE_MODAL = _actionTypes2.default.OPEN_DELETE_MODAL,
    SET_EXPORT_DATA_TYPE = _actionTypes2.default.SET_EXPORT_DATA_TYPE,
    SET_EXPORT_FILTERED = _actionTypes2.default.SET_EXPORT_FILTERED,
    SET_EXPORT_IMAGE_DATA_URI = _actionTypes2.default.SET_EXPORT_IMAGE_DATA_URI,
    SET_EXPORT_CONFIG = _actionTypes2.default.SET_EXPORT_CONFIG,
    SET_EXPORT_DATA = _actionTypes2.default.SET_EXPORT_DATA,
    SET_EXPORT_SELECTED_DATASET = _actionTypes2.default.SET_EXPORT_SELECTED_DATASET,
    SET_RATIO = _actionTypes2.default.SET_RATIO,
    SET_RESOLUTION = _actionTypes2.default.SET_RESOLUTION,
    START_EXPORTING_IMAGE = _actionTypes2.default.START_EXPORTING_IMAGE,
    TOGGLE_LEGEND = _actionTypes2.default.TOGGLE_LEGEND,
    TOGGLE_MODAL = _actionTypes2.default.TOGGLE_MODAL,
    SHOW_EXPORT_DROPDOWN = _actionTypes2.default.SHOW_EXPORT_DROPDOWN,
    HIDE_EXPORT_DROPDOWN = _actionTypes2.default.HIDE_EXPORT_DROPDOWN,
    TOGGLE_SIDE_PANEL = _actionTypes2.default.TOGGLE_SIDE_PANEL,
    TOGGLE_MAP_CONTROL = _actionTypes2.default.TOGGLE_MAP_CONTROL;

// second argument of createAction is expected to be payloadCreator or undefined

var _map = [TOGGLE_SIDE_PANEL, TOGGLE_MODAL, SHOW_EXPORT_DROPDOWN, HIDE_EXPORT_DROPDOWN, TOGGLE_MAP_CONTROL, OPEN_DELETE_MODAL, SET_RATIO, SET_RESOLUTION, TOGGLE_LEGEND, START_EXPORTING_IMAGE, SET_EXPORT_IMAGE_DATA_URI, CLEANUP_EXPORT_IMAGE, SET_EXPORT_SELECTED_DATASET, SET_EXPORT_DATA_TYPE, SET_EXPORT_FILTERED, SET_EXPORT_CONFIG, SET_EXPORT_DATA].map(function (a) {
  return (0, _reduxActions.createAction)(a);
}),
    _map2 = (0, _slicedToArray3.default)(_map, 17),
    toggleSidePanel = _map2[0],
    toggleModal = _map2[1],
    showExportDropdown = _map2[2],
    hideExportDropdown = _map2[3],
    toggleMapControl = _map2[4],
    openDeleteModal = _map2[5],

// export image
setRatio = _map2[6],
    setResolution = _map2[7],
    toggleLegend = _map2[8],
    startExportingImage = _map2[9],
    setExportImageDataUri = _map2[10],
    cleanupExportImage = _map2[11],

// export data
setExportSelectedDataset = _map2[12],
    setExportDataType = _map2[13],
    setExportFiltered = _map2[14],
    setExportConfig = _map2[15],
    setExportData = _map2[16];

exports.toggleSidePanel = toggleSidePanel;
exports.toggleModal = toggleModal;
exports.showExportDropdown = showExportDropdown;
exports.hideExportDropdown = hideExportDropdown;
exports.toggleMapControl = toggleMapControl;
exports.openDeleteModal = openDeleteModal;
exports.setExportConfig = setExportConfig;
exports.setExportData = setExportData;
exports.setRatio = setRatio;
exports.setResolution = setResolution;
exports.toggleLegend = toggleLegend;
exports.startExportingImage = startExportingImage;
exports.setExportImageDataUri = setExportImageDataUri;
exports.cleanupExportImage = cleanupExportImage;
exports.setExportSelectedDataset = setExportSelectedDataset;
exports.setExportDataType = setExportDataType;
exports.setExportFiltered = setExportFiltered;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL3VpLXN0YXRlLWFjdGlvbnMuanMiXSwibmFtZXMiOlsiQ0xFQU5VUF9FWFBPUlRfSU1BR0UiLCJBY3Rpb25UeXBlcyIsIk9QRU5fREVMRVRFX01PREFMIiwiU0VUX0VYUE9SVF9EQVRBX1RZUEUiLCJTRVRfRVhQT1JUX0ZJTFRFUkVEIiwiU0VUX0VYUE9SVF9JTUFHRV9EQVRBX1VSSSIsIlNFVF9FWFBPUlRfQ09ORklHIiwiU0VUX0VYUE9SVF9EQVRBIiwiU0VUX0VYUE9SVF9TRUxFQ1RFRF9EQVRBU0VUIiwiU0VUX1JBVElPIiwiU0VUX1JFU09MVVRJT04iLCJTVEFSVF9FWFBPUlRJTkdfSU1BR0UiLCJUT0dHTEVfTEVHRU5EIiwiVE9HR0xFX01PREFMIiwiU0hPV19FWFBPUlRfRFJPUERPV04iLCJISURFX0VYUE9SVF9EUk9QRE9XTiIsIlRPR0dMRV9TSURFX1BBTkVMIiwiVE9HR0xFX01BUF9DT05UUk9MIiwibWFwIiwiYSIsInRvZ2dsZVNpZGVQYW5lbCIsInRvZ2dsZU1vZGFsIiwic2hvd0V4cG9ydERyb3Bkb3duIiwiaGlkZUV4cG9ydERyb3Bkb3duIiwidG9nZ2xlTWFwQ29udHJvbCIsIm9wZW5EZWxldGVNb2RhbCIsInNldFJhdGlvIiwic2V0UmVzb2x1dGlvbiIsInRvZ2dsZUxlZ2VuZCIsInN0YXJ0RXhwb3J0aW5nSW1hZ2UiLCJzZXRFeHBvcnRJbWFnZURhdGFVcmkiLCJjbGVhbnVwRXhwb3J0SW1hZ2UiLCJzZXRFeHBvcnRTZWxlY3RlZERhdGFzZXQiLCJzZXRFeHBvcnREYXRhVHlwZSIsInNldEV4cG9ydEZpbHRlcmVkIiwic2V0RXhwb3J0Q29uZmlnIiwic2V0RXhwb3J0RGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7Ozs7OztBQXJCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFNRUEsb0IsR0FpQkVDLHFCLENBakJGRCxvQjtJQUNBRSxpQixHQWdCRUQscUIsQ0FoQkZDLGlCO0lBQ0FDLG9CLEdBZUVGLHFCLENBZkZFLG9CO0lBQ0FDLG1CLEdBY0VILHFCLENBZEZHLG1CO0lBQ0FDLHlCLEdBYUVKLHFCLENBYkZJLHlCO0lBQ0FDLGlCLEdBWUVMLHFCLENBWkZLLGlCO0lBQ0FDLGUsR0FXRU4scUIsQ0FYRk0sZTtJQUNBQywyQixHQVVFUCxxQixDQVZGTywyQjtJQUNBQyxTLEdBU0VSLHFCLENBVEZRLFM7SUFDQUMsYyxHQVFFVCxxQixDQVJGUyxjO0lBQ0FDLHFCLEdBT0VWLHFCLENBUEZVLHFCO0lBQ0FDLGEsR0FNRVgscUIsQ0FORlcsYTtJQUNBQyxZLEdBS0VaLHFCLENBTEZZLFk7SUFDQUMsb0IsR0FJRWIscUIsQ0FKRmEsb0I7SUFDQUMsb0IsR0FHRWQscUIsQ0FIRmMsb0I7SUFDQUMsaUIsR0FFRWYscUIsQ0FGRmUsaUI7SUFDQUMsa0IsR0FDRWhCLHFCLENBREZnQixrQjs7QUFHRjs7V0FxQkksQ0FDRkQsaUJBREUsRUFFRkgsWUFGRSxFQUdGQyxvQkFIRSxFQUlGQyxvQkFKRSxFQUtGRSxrQkFMRSxFQU1GZixpQkFORSxFQU9GTyxTQVBFLEVBUUZDLGNBUkUsRUFTRkUsYUFURSxFQVVGRCxxQkFWRSxFQVdGTix5QkFYRSxFQVlGTCxvQkFaRSxFQWFGUSwyQkFiRSxFQWNGTCxvQkFkRSxFQWVGQyxtQkFmRSxFQWdCRkUsaUJBaEJFLEVBaUJGQyxlQWpCRSxFQWtCRlcsR0FsQkUsQ0FrQkU7QUFBQSxTQUFLLGdDQUFhQyxDQUFiLENBQUw7QUFBQSxDQWxCRixDOztJQW5CRkMsZTtJQUNBQyxXO0lBQ0FDLGtCO0lBQ0FDLGtCO0lBQ0FDLGdCO0lBQ0FDLGU7O0FBQ0E7QUFDQUMsUTtJQUNBQyxhO0lBQ0FDLFk7SUFDQUMsbUI7SUFDQUMscUI7SUFDQUMsa0I7O0FBQ0E7QUFDQUMsd0I7SUFDQUMsaUI7SUFDQUMsaUI7SUFDQUMsZTtJQUNBQyxhOztRQXNCQWhCLGUsR0FBQUEsZTtRQUFpQkMsVyxHQUFBQSxXO1FBQWFDLGtCLEdBQUFBLGtCO1FBQW9CQyxrQixHQUFBQSxrQjtRQUFvQkMsZ0IsR0FBQUEsZ0I7UUFBa0JDLGUsR0FBQUEsZTtRQUFpQlUsZSxHQUFBQSxlO1FBQWlCQyxhLEdBQUFBLGE7UUFDMUhWLFEsR0FBQUEsUTtRQUFVQyxhLEdBQUFBLGE7UUFBZUMsWSxHQUFBQSxZO1FBQWNDLG1CLEdBQUFBLG1CO1FBQXFCQyxxQixHQUFBQSxxQjtRQUF1QkMsa0IsR0FBQUEsa0I7UUFDbkZDLHdCLEdBQUFBLHdCO1FBQTBCQyxpQixHQUFBQSxpQjtRQUFtQkMsaUIsR0FBQUEsaUIiLCJmaWxlIjoidWktc3RhdGUtYWN0aW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAxOSBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7Y3JlYXRlQWN0aW9ufSBmcm9tICdyZWR1eC1hY3Rpb25zJztcbmltcG9ydCBBY3Rpb25UeXBlcyBmcm9tICdjb25zdGFudHMvYWN0aW9uLXR5cGVzJztcblxuY29uc3Qge1xuICBDTEVBTlVQX0VYUE9SVF9JTUFHRSxcbiAgT1BFTl9ERUxFVEVfTU9EQUwsXG4gIFNFVF9FWFBPUlRfREFUQV9UWVBFLFxuICBTRVRfRVhQT1JUX0ZJTFRFUkVELFxuICBTRVRfRVhQT1JUX0lNQUdFX0RBVEFfVVJJLFxuICBTRVRfRVhQT1JUX0NPTkZJRyxcbiAgU0VUX0VYUE9SVF9EQVRBLFxuICBTRVRfRVhQT1JUX1NFTEVDVEVEX0RBVEFTRVQsXG4gIFNFVF9SQVRJTyxcbiAgU0VUX1JFU09MVVRJT04sXG4gIFNUQVJUX0VYUE9SVElOR19JTUFHRSxcbiAgVE9HR0xFX0xFR0VORCxcbiAgVE9HR0xFX01PREFMLFxuICBTSE9XX0VYUE9SVF9EUk9QRE9XTixcbiAgSElERV9FWFBPUlRfRFJPUERPV04sXG4gIFRPR0dMRV9TSURFX1BBTkVMLFxuICBUT0dHTEVfTUFQX0NPTlRST0xcbn0gPSBBY3Rpb25UeXBlcztcblxuLy8gc2Vjb25kIGFyZ3VtZW50IG9mIGNyZWF0ZUFjdGlvbiBpcyBleHBlY3RlZCB0byBiZSBwYXlsb2FkQ3JlYXRvciBvciB1bmRlZmluZWRcbmNvbnN0IFtcbiAgdG9nZ2xlU2lkZVBhbmVsLFxuICB0b2dnbGVNb2RhbCxcbiAgc2hvd0V4cG9ydERyb3Bkb3duLFxuICBoaWRlRXhwb3J0RHJvcGRvd24sXG4gIHRvZ2dsZU1hcENvbnRyb2wsXG4gIG9wZW5EZWxldGVNb2RhbCxcbiAgLy8gZXhwb3J0IGltYWdlXG4gIHNldFJhdGlvLFxuICBzZXRSZXNvbHV0aW9uLFxuICB0b2dnbGVMZWdlbmQsXG4gIHN0YXJ0RXhwb3J0aW5nSW1hZ2UsXG4gIHNldEV4cG9ydEltYWdlRGF0YVVyaSxcbiAgY2xlYW51cEV4cG9ydEltYWdlLFxuICAvLyBleHBvcnQgZGF0YVxuICBzZXRFeHBvcnRTZWxlY3RlZERhdGFzZXQsXG4gIHNldEV4cG9ydERhdGFUeXBlLFxuICBzZXRFeHBvcnRGaWx0ZXJlZCxcbiAgc2V0RXhwb3J0Q29uZmlnLFxuICBzZXRFeHBvcnREYXRhXG5dID0gW1xuICBUT0dHTEVfU0lERV9QQU5FTCxcbiAgVE9HR0xFX01PREFMLFxuICBTSE9XX0VYUE9SVF9EUk9QRE9XTixcbiAgSElERV9FWFBPUlRfRFJPUERPV04sXG4gIFRPR0dMRV9NQVBfQ09OVFJPTCxcbiAgT1BFTl9ERUxFVEVfTU9EQUwsXG4gIFNFVF9SQVRJTyxcbiAgU0VUX1JFU09MVVRJT04sXG4gIFRPR0dMRV9MRUdFTkQsXG4gIFNUQVJUX0VYUE9SVElOR19JTUFHRSxcbiAgU0VUX0VYUE9SVF9JTUFHRV9EQVRBX1VSSSxcbiAgQ0xFQU5VUF9FWFBPUlRfSU1BR0UsXG4gIFNFVF9FWFBPUlRfU0VMRUNURURfREFUQVNFVCxcbiAgU0VUX0VYUE9SVF9EQVRBX1RZUEUsXG4gIFNFVF9FWFBPUlRfRklMVEVSRUQsXG4gIFNFVF9FWFBPUlRfQ09ORklHLFxuICBTRVRfRVhQT1JUX0RBVEFcbl0ubWFwKGEgPT4gY3JlYXRlQWN0aW9uKGEpKTtcblxuZXhwb3J0IHtcbiAgdG9nZ2xlU2lkZVBhbmVsLCB0b2dnbGVNb2RhbCwgc2hvd0V4cG9ydERyb3Bkb3duLCBoaWRlRXhwb3J0RHJvcGRvd24sIHRvZ2dsZU1hcENvbnRyb2wsIG9wZW5EZWxldGVNb2RhbCwgc2V0RXhwb3J0Q29uZmlnLCBzZXRFeHBvcnREYXRhLFxuICBzZXRSYXRpbywgc2V0UmVzb2x1dGlvbiwgdG9nZ2xlTGVnZW5kLCBzdGFydEV4cG9ydGluZ0ltYWdlLCBzZXRFeHBvcnRJbWFnZURhdGFVcmksIGNsZWFudXBFeHBvcnRJbWFnZSxcbiAgc2V0RXhwb3J0U2VsZWN0ZWREYXRhc2V0LCBzZXRFeHBvcnREYXRhVHlwZSwgc2V0RXhwb3J0RmlsdGVyZWRcbn07XG4iXX0=
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.visStateReducerFactory = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _actionHandler; // Copyright (c) 2019 Uber Technologies, Inc.
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

// updater functions


var _actionTypes = require('../constants/action-types');

var _actionTypes2 = _interopRequireDefault(_actionTypes);

var _reduxActions = require('redux-actions');

var _visStateUpdaters = require('./vis-state-updaters');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var actionHandler = (_actionHandler = {}, (0, _defineProperty3.default)(_actionHandler, _actionTypes2.default.ADD_FILTER, _visStateUpdaters.addFilterUpdater), (0, _defineProperty3.default)(_actionHandler, _actionTypes2.default.ADD_LAYER, _visStateUpdaters.addLayerUpdater), (0, _defineProperty3.default)(_actionHandler, _actionTypes2.default.ENLARGE_FILTER, _visStateUpdaters.enlargeFilterUpdater), (0, _defineProperty3.default)(_actionHandler, _actionTypes2.default.INTERACTION_CONFIG_CHANGE, _visStateUpdaters.interactionConfigChangeUpdater), (0, _defineProperty3.default)(_actionHandler, _actionTypes2.default.LAYER_CLICK, _visStateUpdaters.layerClickUpdater), (0, _defineProperty3.default)(_actionHandler, _actionTypes2.default.LAYER_CONFIG_CHANGE, _visStateUpdaters.layerConfigChangeUpdater), (0, _defineProperty3.default)(_actionHandler, _actionTypes2.default.LAYER_HOVER, _visStateUpdaters.layerHoverUpdater), (0, _defineProperty3.default)(_actionHandler, _actionTypes2.default.LAYER_TYPE_CHANGE, _visStateUpdaters.layerTypeChangeUpdater), (0, _defineProperty3.default)(_actionHandler, _actionTypes2.default.LAYER_VIS_CONFIG_CHANGE, _visStateUpdaters.layerVisConfigChangeUpdater), (0, _defineProperty3.default)(_actionHandler, _actionTypes2.default.LAYER_VISUAL_CHANNEL_CHANGE, _visStateUpdaters.layerVisualChannelChangeUpdater), (0, _defineProperty3.default)(_actionHandler, _actionTypes2.default.LOAD_FILES, _visStateUpdaters.loadFilesUpdater), (0, _defineProperty3.default)(_actionHandler, _actionTypes2.default.LOAD_FILES_ERR, _visStateUpdaters.loadFilesErrUpdater), (0, _defineProperty3.default)(_actionHandler, _actionTypes2.default.MAP_CLICK, _visStateUpdaters.mapClickUpdater), (0, _defineProperty3.default)(_actionHandler, _actionTypes2.default.RECEIVE_MAP_CONFIG, _visStateUpdaters.receiveMapConfigUpdater), (0, _defineProperty3.default)(_actionHandler, _actionTypes2.default.REMOVE_DATASET, _visStateUpdaters.removeDatasetUpdater), (0, _defineProperty3.default)(_actionHandler, _actionTypes2.default.REMOVE_FILTER, _visStateUpdaters.removeFilterUpdater), (0, _defineProperty3.default)(_actionHandler, _actionTypes2.default.REMOVE_LAYER, _visStateUpdaters.removeLayerUpdater), (0, _defineProperty3.default)(_actionHandler, _actionTypes2.default.REORDER_LAYER, _visStateUpdaters.reorderLayerUpdater), (0, _defineProperty3.default)(_actionHandler, _actionTypes2.default.RESET_MAP_CONFIG, _visStateUpdaters.resetMapConfigVisStateUpdater), (0, _defineProperty3.default)(_actionHandler, _actionTypes2.default.SET_FILTER, _visStateUpdaters.setFilterUpdater), (0, _defineProperty3.default)(_actionHandler, _actionTypes2.default.SET_FILTER_PLOT, _visStateUpdaters.setFilterPlotUpdater), (0, _defineProperty3.default)(_actionHandler, _actionTypes2.default.SET_VISIBLE_LAYERS_FOR_MAP, _visStateUpdaters.setVisibleLayersForMapUpdater), (0, _defineProperty3.default)(_actionHandler, _actionTypes2.default.SHOW_DATASET_TABLE, _visStateUpdaters.showDatasetTableUpdater), (0, _defineProperty3.default)(_actionHandler, _actionTypes2.default.TOGGLE_FILTER_ANIMATION, _visStateUpdaters.toggleFilterAnimationUpdater), (0, _defineProperty3.default)(_actionHandler, _actionTypes2.default.UPDATE_FILTER_ANIMATION_SPEED, _visStateUpdaters.updateAnimationSpeedUpdater), (0, _defineProperty3.default)(_actionHandler, _actionTypes2.default.TOGGLE_LAYER_FOR_MAP, _visStateUpdaters.toggleLayerForMapUpdater), (0, _defineProperty3.default)(_actionHandler, _actionTypes2.default.TOGGLE_SPLIT_MAP, _visStateUpdaters.toggleSplitMapUpdater), (0, _defineProperty3.default)(_actionHandler, _actionTypes2.default.UPDATE_LAYER_BLENDING, _visStateUpdaters.updateLayerBlendingUpdater), (0, _defineProperty3.default)(_actionHandler, _actionTypes2.default.UPDATE_VIS_DATA, _visStateUpdaters.updateVisDataUpdater), _actionHandler);

// construct vis-state reducer
var visStateReducerFactory = exports.visStateReducerFactory = function visStateReducerFactory() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _reduxActions.handleActions)(actionHandler, (0, _extends3.default)({}, _visStateUpdaters.INITIAL_VIS_STATE, initialState, {
    initialState: initialState
  }));
};

exports.default = visStateReducerFactory();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy92aXMtc3RhdGUuanMiXSwibmFtZXMiOlsiYWN0aW9uSGFuZGxlciIsIkFjdGlvblR5cGVzIiwiQUREX0ZJTFRFUiIsImFkZEZpbHRlclVwZGF0ZXIiLCJBRERfTEFZRVIiLCJhZGRMYXllclVwZGF0ZXIiLCJFTkxBUkdFX0ZJTFRFUiIsImVubGFyZ2VGaWx0ZXJVcGRhdGVyIiwiSU5URVJBQ1RJT05fQ09ORklHX0NIQU5HRSIsImludGVyYWN0aW9uQ29uZmlnQ2hhbmdlVXBkYXRlciIsIkxBWUVSX0NMSUNLIiwibGF5ZXJDbGlja1VwZGF0ZXIiLCJMQVlFUl9DT05GSUdfQ0hBTkdFIiwibGF5ZXJDb25maWdDaGFuZ2VVcGRhdGVyIiwiTEFZRVJfSE9WRVIiLCJsYXllckhvdmVyVXBkYXRlciIsIkxBWUVSX1RZUEVfQ0hBTkdFIiwibGF5ZXJUeXBlQ2hhbmdlVXBkYXRlciIsIkxBWUVSX1ZJU19DT05GSUdfQ0hBTkdFIiwibGF5ZXJWaXNDb25maWdDaGFuZ2VVcGRhdGVyIiwiTEFZRVJfVklTVUFMX0NIQU5ORUxfQ0hBTkdFIiwibGF5ZXJWaXN1YWxDaGFubmVsQ2hhbmdlVXBkYXRlciIsIkxPQURfRklMRVMiLCJsb2FkRmlsZXNVcGRhdGVyIiwiTE9BRF9GSUxFU19FUlIiLCJsb2FkRmlsZXNFcnJVcGRhdGVyIiwiTUFQX0NMSUNLIiwibWFwQ2xpY2tVcGRhdGVyIiwiUkVDRUlWRV9NQVBfQ09ORklHIiwicmVjZWl2ZU1hcENvbmZpZ1VwZGF0ZXIiLCJSRU1PVkVfREFUQVNFVCIsInJlbW92ZURhdGFzZXRVcGRhdGVyIiwiUkVNT1ZFX0ZJTFRFUiIsInJlbW92ZUZpbHRlclVwZGF0ZXIiLCJSRU1PVkVfTEFZRVIiLCJyZW1vdmVMYXllclVwZGF0ZXIiLCJSRU9SREVSX0xBWUVSIiwicmVvcmRlckxheWVyVXBkYXRlciIsIlJFU0VUX01BUF9DT05GSUciLCJyZXNldE1hcENvbmZpZ1Zpc1N0YXRlVXBkYXRlciIsIlNFVF9GSUxURVIiLCJzZXRGaWx0ZXJVcGRhdGVyIiwiU0VUX0ZJTFRFUl9QTE9UIiwic2V0RmlsdGVyUGxvdFVwZGF0ZXIiLCJTRVRfVklTSUJMRV9MQVlFUlNfRk9SX01BUCIsInNldFZpc2libGVMYXllcnNGb3JNYXBVcGRhdGVyIiwiU0hPV19EQVRBU0VUX1RBQkxFIiwic2hvd0RhdGFzZXRUYWJsZVVwZGF0ZXIiLCJUT0dHTEVfRklMVEVSX0FOSU1BVElPTiIsInRvZ2dsZUZpbHRlckFuaW1hdGlvblVwZGF0ZXIiLCJVUERBVEVfRklMVEVSX0FOSU1BVElPTl9TUEVFRCIsInVwZGF0ZUFuaW1hdGlvblNwZWVkVXBkYXRlciIsIlRPR0dMRV9MQVlFUl9GT1JfTUFQIiwidG9nZ2xlTGF5ZXJGb3JNYXBVcGRhdGVyIiwiVE9HR0xFX1NQTElUX01BUCIsInRvZ2dsZVNwbGl0TWFwVXBkYXRlciIsIlVQREFURV9MQVlFUl9CTEVORElORyIsInVwZGF0ZUxheWVyQmxlbmRpbmdVcGRhdGVyIiwiVVBEQVRFX1ZJU19EQVRBIiwidXBkYXRlVmlzRGF0YVVwZGF0ZXIiLCJ2aXNTdGF0ZVJlZHVjZXJGYWN0b3J5IiwiaW5pdGlhbFN0YXRlIiwiSU5JVElBTF9WSVNfU1RBVEUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztvQkFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFLQTs7O0FBSEE7Ozs7QUFDQTs7QUFHQTs7OztBQWlDQSxJQUFNQSxvRkFDSEMsc0JBQVlDLFVBRFQsRUFDc0JDLGtDQUR0QixpREFHSEYsc0JBQVlHLFNBSFQsRUFHcUJDLGlDQUhyQixpREFLSEosc0JBQVlLLGNBTFQsRUFLMEJDLHNDQUwxQixpREFPSE4sc0JBQVlPLHlCQVBULEVBT3FDQyxnREFQckMsaURBU0hSLHNCQUFZUyxXQVRULEVBU3VCQyxtQ0FUdkIsaURBV0hWLHNCQUFZVyxtQkFYVCxFQVcrQkMsMENBWC9CLGlEQWFIWixzQkFBWWEsV0FiVCxFQWF1QkMsbUNBYnZCLGlEQWVIZCxzQkFBWWUsaUJBZlQsRUFlNkJDLHdDQWY3QixpREFpQkhoQixzQkFBWWlCLHVCQWpCVCxFQWlCbUNDLDZDQWpCbkMsaURBbUJIbEIsc0JBQVltQiwyQkFuQlQsRUFtQnVDQyxpREFuQnZDLGlEQXFCSHBCLHNCQUFZcUIsVUFyQlQsRUFxQnNCQyxrQ0FyQnRCLGlEQXVCSHRCLHNCQUFZdUIsY0F2QlQsRUF1QjBCQyxxQ0F2QjFCLGlEQXlCSHhCLHNCQUFZeUIsU0F6QlQsRUF5QnFCQyxpQ0F6QnJCLGlEQTJCSDFCLHNCQUFZMkIsa0JBM0JULEVBMkI4QkMseUNBM0I5QixpREE2Qkg1QixzQkFBWTZCLGNBN0JULEVBNkIwQkMsc0NBN0IxQixpREErQkg5QixzQkFBWStCLGFBL0JULEVBK0J5QkMscUNBL0J6QixpREFpQ0hoQyxzQkFBWWlDLFlBakNULEVBaUN3QkMsb0NBakN4QixpREFtQ0hsQyxzQkFBWW1DLGFBbkNULEVBbUN5QkMscUNBbkN6QixpREFxQ0hwQyxzQkFBWXFDLGdCQXJDVCxFQXFDNEJDLCtDQXJDNUIsaURBdUNIdEMsc0JBQVl1QyxVQXZDVCxFQXVDc0JDLGtDQXZDdEIsaURBeUNIeEMsc0JBQVl5QyxlQXpDVCxFQXlDMkJDLHNDQXpDM0IsaURBMkNIMUMsc0JBQVkyQywwQkEzQ1QsRUEyQ3NDQywrQ0EzQ3RDLGlEQTZDSDVDLHNCQUFZNkMsa0JBN0NULEVBNkM4QkMseUNBN0M5QixpREErQ0g5QyxzQkFBWStDLHVCQS9DVCxFQStDbUNDLDhDQS9DbkMsaURBaURIaEQsc0JBQVlpRCw2QkFqRFQsRUFpRHlDQyw2Q0FqRHpDLGlEQW1ESGxELHNCQUFZbUQsb0JBbkRULEVBbURnQ0MsMENBbkRoQyxpREFxREhwRCxzQkFBWXFELGdCQXJEVCxFQXFENEJDLHVDQXJENUIsaURBdURIdEQsc0JBQVl1RCxxQkF2RFQsRUF1RGlDQyw0Q0F2RGpDLGlEQTJESHhELHNCQUFZeUQsZUEzRFQsRUEyRDJCQyxzQ0EzRDNCLGtCQUFOOztBQThEQTtBQUNPLElBQU1DLDBEQUF5QixTQUF6QkEsc0JBQXlCO0FBQUEsTUFBQ0MsWUFBRCx1RUFBZ0IsRUFBaEI7QUFBQSxTQUNwQyxpQ0FBYzdELGFBQWQsNkJBQ0s4RCxtQ0FETCxFQUVLRCxZQUZMO0FBR0VBO0FBSEYsS0FEb0M7QUFBQSxDQUEvQjs7a0JBT1FELHdCIiwiZmlsZSI6InZpcy1zdGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAxOSBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBBY3Rpb25UeXBlcyBmcm9tICdjb25zdGFudHMvYWN0aW9uLXR5cGVzJztcbmltcG9ydCB7aGFuZGxlQWN0aW9uc30gZnJvbSAncmVkdXgtYWN0aW9ucyc7XG5cbi8vIHVwZGF0ZXIgZnVuY3Rpb25zXG5pbXBvcnQge1xuICBJTklUSUFMX1ZJU19TVEFURSxcbiAgYWRkRmlsdGVyVXBkYXRlcixcbiAgYWRkTGF5ZXJVcGRhdGVyLFxuICBlbmxhcmdlRmlsdGVyVXBkYXRlcixcbiAgbGF5ZXJDbGlja1VwZGF0ZXIsXG4gIGxheWVySG92ZXJVcGRhdGVyLFxuICBtYXBDbGlja1VwZGF0ZXIsXG4gIHRvZ2dsZUZpbHRlckFuaW1hdGlvblVwZGF0ZXIsXG4gIHVwZGF0ZUFuaW1hdGlvblNwZWVkVXBkYXRlcixcbiAgcmVjZWl2ZU1hcENvbmZpZ1VwZGF0ZXIsXG4gIHJlc2V0TWFwQ29uZmlnVmlzU3RhdGVVcGRhdGVyLFxuICBsb2FkRmlsZXNVcGRhdGVyLFxuICBsb2FkRmlsZXNFcnJVcGRhdGVyLFxuICB1cGRhdGVWaXNEYXRhVXBkYXRlcixcbiAgcmVtb3ZlRGF0YXNldFVwZGF0ZXIsXG4gIHJlbW92ZUZpbHRlclVwZGF0ZXIsXG4gIHJlbW92ZUxheWVyVXBkYXRlcixcbiAgcmVvcmRlckxheWVyVXBkYXRlcixcbiAgc2hvd0RhdGFzZXRUYWJsZVVwZGF0ZXIsXG4gIHNldEZpbHRlclVwZGF0ZXIsXG4gIHNldEZpbHRlclBsb3RVcGRhdGVyLFxuICBpbnRlcmFjdGlvbkNvbmZpZ0NoYW5nZVVwZGF0ZXIsXG4gIHVwZGF0ZUxheWVyQmxlbmRpbmdVcGRhdGVyLFxuICBsYXllckNvbmZpZ0NoYW5nZVVwZGF0ZXIsXG4gIGxheWVyVHlwZUNoYW5nZVVwZGF0ZXIsXG4gIHRvZ2dsZVNwbGl0TWFwVXBkYXRlcixcbiAgc2V0VmlzaWJsZUxheWVyc0Zvck1hcFVwZGF0ZXIsXG4gIHRvZ2dsZUxheWVyRm9yTWFwVXBkYXRlcixcbiAgbGF5ZXJWaXNDb25maWdDaGFuZ2VVcGRhdGVyLFxuICBsYXllclZpc3VhbENoYW5uZWxDaGFuZ2VVcGRhdGVyXG59IGZyb20gJy4vdmlzLXN0YXRlLXVwZGF0ZXJzJztcblxuY29uc3QgYWN0aW9uSGFuZGxlciA9IHtcbiAgW0FjdGlvblR5cGVzLkFERF9GSUxURVJdOiBhZGRGaWx0ZXJVcGRhdGVyLFxuXG4gIFtBY3Rpb25UeXBlcy5BRERfTEFZRVJdOiBhZGRMYXllclVwZGF0ZXIsXG5cbiAgW0FjdGlvblR5cGVzLkVOTEFSR0VfRklMVEVSXTogZW5sYXJnZUZpbHRlclVwZGF0ZXIsXG5cbiAgW0FjdGlvblR5cGVzLklOVEVSQUNUSU9OX0NPTkZJR19DSEFOR0VdOiBpbnRlcmFjdGlvbkNvbmZpZ0NoYW5nZVVwZGF0ZXIsXG5cbiAgW0FjdGlvblR5cGVzLkxBWUVSX0NMSUNLXTogbGF5ZXJDbGlja1VwZGF0ZXIsXG5cbiAgW0FjdGlvblR5cGVzLkxBWUVSX0NPTkZJR19DSEFOR0VdOiBsYXllckNvbmZpZ0NoYW5nZVVwZGF0ZXIsXG5cbiAgW0FjdGlvblR5cGVzLkxBWUVSX0hPVkVSXTogbGF5ZXJIb3ZlclVwZGF0ZXIsXG5cbiAgW0FjdGlvblR5cGVzLkxBWUVSX1RZUEVfQ0hBTkdFXTogbGF5ZXJUeXBlQ2hhbmdlVXBkYXRlcixcblxuICBbQWN0aW9uVHlwZXMuTEFZRVJfVklTX0NPTkZJR19DSEFOR0VdOiBsYXllclZpc0NvbmZpZ0NoYW5nZVVwZGF0ZXIsXG5cbiAgW0FjdGlvblR5cGVzLkxBWUVSX1ZJU1VBTF9DSEFOTkVMX0NIQU5HRV06IGxheWVyVmlzdWFsQ2hhbm5lbENoYW5nZVVwZGF0ZXIsXG5cbiAgW0FjdGlvblR5cGVzLkxPQURfRklMRVNdOiBsb2FkRmlsZXNVcGRhdGVyLFxuXG4gIFtBY3Rpb25UeXBlcy5MT0FEX0ZJTEVTX0VSUl06IGxvYWRGaWxlc0VyclVwZGF0ZXIsXG5cbiAgW0FjdGlvblR5cGVzLk1BUF9DTElDS106IG1hcENsaWNrVXBkYXRlcixcblxuICBbQWN0aW9uVHlwZXMuUkVDRUlWRV9NQVBfQ09ORklHXTogcmVjZWl2ZU1hcENvbmZpZ1VwZGF0ZXIsXG5cbiAgW0FjdGlvblR5cGVzLlJFTU9WRV9EQVRBU0VUXTogcmVtb3ZlRGF0YXNldFVwZGF0ZXIsXG5cbiAgW0FjdGlvblR5cGVzLlJFTU9WRV9GSUxURVJdOiByZW1vdmVGaWx0ZXJVcGRhdGVyLFxuXG4gIFtBY3Rpb25UeXBlcy5SRU1PVkVfTEFZRVJdOiByZW1vdmVMYXllclVwZGF0ZXIsXG5cbiAgW0FjdGlvblR5cGVzLlJFT1JERVJfTEFZRVJdOiByZW9yZGVyTGF5ZXJVcGRhdGVyLFxuXG4gIFtBY3Rpb25UeXBlcy5SRVNFVF9NQVBfQ09ORklHXTogcmVzZXRNYXBDb25maWdWaXNTdGF0ZVVwZGF0ZXIsXG5cbiAgW0FjdGlvblR5cGVzLlNFVF9GSUxURVJdOiBzZXRGaWx0ZXJVcGRhdGVyLFxuXG4gIFtBY3Rpb25UeXBlcy5TRVRfRklMVEVSX1BMT1RdOiBzZXRGaWx0ZXJQbG90VXBkYXRlcixcblxuICBbQWN0aW9uVHlwZXMuU0VUX1ZJU0lCTEVfTEFZRVJTX0ZPUl9NQVBdOiBzZXRWaXNpYmxlTGF5ZXJzRm9yTWFwVXBkYXRlcixcblxuICBbQWN0aW9uVHlwZXMuU0hPV19EQVRBU0VUX1RBQkxFXTogc2hvd0RhdGFzZXRUYWJsZVVwZGF0ZXIsXG5cbiAgW0FjdGlvblR5cGVzLlRPR0dMRV9GSUxURVJfQU5JTUFUSU9OXTogdG9nZ2xlRmlsdGVyQW5pbWF0aW9uVXBkYXRlcixcblxuICBbQWN0aW9uVHlwZXMuVVBEQVRFX0ZJTFRFUl9BTklNQVRJT05fU1BFRURdOiB1cGRhdGVBbmltYXRpb25TcGVlZFVwZGF0ZXIsXG5cbiAgW0FjdGlvblR5cGVzLlRPR0dMRV9MQVlFUl9GT1JfTUFQXTogdG9nZ2xlTGF5ZXJGb3JNYXBVcGRhdGVyLFxuXG4gIFtBY3Rpb25UeXBlcy5UT0dHTEVfU1BMSVRfTUFQXTogdG9nZ2xlU3BsaXRNYXBVcGRhdGVyLFxuXG4gIFtBY3Rpb25UeXBlcy5VUERBVEVfTEFZRVJfQkxFTkRJTkddOiB1cGRhdGVMYXllckJsZW5kaW5nVXBkYXRlcixcblxuICAvLyBjdXJyZW50bHkgbm90IHVzZWRcbiAgLy8gYnV0IG1heSBiZSB1c2VmdWwgaWYgdXNlcnMgaW1wb3J0IHZpc3Qgc3RhdGUgcmVkdWNlclxuICBbQWN0aW9uVHlwZXMuVVBEQVRFX1ZJU19EQVRBXTogdXBkYXRlVmlzRGF0YVVwZGF0ZXJcbn07XG5cbi8vIGNvbnN0cnVjdCB2aXMtc3RhdGUgcmVkdWNlclxuZXhwb3J0IGNvbnN0IHZpc1N0YXRlUmVkdWNlckZhY3RvcnkgPSAoaW5pdGlhbFN0YXRlID0ge30pID0+XG4gIGhhbmRsZUFjdGlvbnMoYWN0aW9uSGFuZGxlciwge1xuICAgIC4uLklOSVRJQUxfVklTX1NUQVRFLFxuICAgIC4uLmluaXRpYWxTdGF0ZSxcbiAgICBpbml0aWFsU3RhdGVcbiAgfSk7XG5cbmV4cG9ydCBkZWZhdWx0IHZpc1N0YXRlUmVkdWNlckZhY3RvcnkoKTtcbiJdfQ==
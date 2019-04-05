'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addDataToMapComposed = exports.updateVisDataComposed = undefined;

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _compostedUpdaters; // Copyright (c) 2019 Uber Technologies, Inc.
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

var _actionTypes = require('../constants/action-types');

var _actionTypes2 = _interopRequireDefault(_actionTypes);

var _mapStateUpdaters = require('./map-state-updaters');

var _uiStateUpdaters = require('./ui-state-updaters');

var _visStateUpdaters = require('./vis-state-updaters');

var _mapStyleUpdaters = require('./map-style-updaters');

var _dataUtils = require('../utils/data-utils');

var _schemas = require('../schemas');

var _schemas2 = _interopRequireDefault(_schemas);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// compose action to apply result multiple reducers, with the output of one

/**
 * Apply data and config to visState reducer
 * @param {object} state
 * @param {object} action
 * @param {object} action.options
 * @param {Boolean} action.options.centerMap
 * @param {Boolean} action.options.readOnly
 * @param {object} action.config
 * @returns state new reducer state
 */
var updateVisDataComposed = exports.updateVisDataComposed = function updateVisDataComposed(state, action) {
  // keep a copy of oldLayers
  var oldLayers = state.visState.layers;

  var visState = (0, _visStateUpdaters.updateVisDataUpdater)(state.visState, action);

  var defaultOptions = {
    centerMap: true
  };

  var options = (0, _extends3.default)({}, defaultOptions, action.options);

  var bounds = void 0;
  if (options.centerMap) {
    // find map bounds for new layers
    var newLayers = visState.layers.filter(function (nl) {
      return !oldLayers.find(function (ol) {
        return ol === nl;
      });
    });
    bounds = (0, _dataUtils.findMapBounds)(newLayers);
  }

  return (0, _extends3.default)({}, state, {
    visState: visState,
    mapState: bounds ? (0, _mapStateUpdaters.fitBoundsUpdater)(state.mapState, {
      payload: bounds
    }) : state.mapState,
    uiState: (0, _extends3.default)({}, (0, _uiStateUpdaters.toggleModalUpdater)(state.uiState, { payload: null }), options.hasOwnProperty('readOnly') ? { readOnly: options.readOnly } : {})
  });
};

/**
 * Combine data and full configuration update in a single action
 * @param state
 * @param action {datasets, options, config}
 * @returns state
 */
var addDataToMapComposed = exports.addDataToMapComposed = function addDataToMapComposed(state, action) {
  var _action$payload = action.payload,
      datasets = _action$payload.datasets,
      options = _action$payload.options,
      config = _action$payload.config;

  var parsedConfig = config;

  if (config && config.config && config.version) {
    // if passed in saved config
    parsedConfig = _schemas2.default.parseSavedConfig(config);
  }
  // Update visState store
  var mergedState = updateVisDataComposed(state, { datasets: datasets, options: options, config: parsedConfig && parsedConfig.visState });

  // Update mapState store
  mergedState = (0, _extends3.default)({}, mergedState, {
    mapState: (0, _mapStateUpdaters.receiveMapConfigUpdater)(mergedState.mapState, { payload: { mapState: parsedConfig && parsedConfig.mapState } })
  });

  // Update mapStyle store
  mergedState = (0, _extends3.default)({}, mergedState, {
    mapStyle: (0, _mapStyleUpdaters.receiveMapConfigUpdater)(mergedState.mapStyle, { payload: { mapStyle: parsedConfig && parsedConfig.mapStyle } })
  });

  return mergedState;
};

var compostedUpdaters = (_compostedUpdaters = {}, (0, _defineProperty3.default)(_compostedUpdaters, _actionTypes2.default.UPDATE_VIS_DATA, updateVisDataComposed), (0, _defineProperty3.default)(_compostedUpdaters, _actionTypes2.default.ADD_DATA_TO_MAP, addDataToMapComposed), _compostedUpdaters);

exports.default = compostedUpdaters;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy9jb21wb3NlcnMuanMiXSwibmFtZXMiOlsidXBkYXRlVmlzRGF0YUNvbXBvc2VkIiwic3RhdGUiLCJhY3Rpb24iLCJvbGRMYXllcnMiLCJ2aXNTdGF0ZSIsImxheWVycyIsImRlZmF1bHRPcHRpb25zIiwiY2VudGVyTWFwIiwib3B0aW9ucyIsImJvdW5kcyIsIm5ld0xheWVycyIsImZpbHRlciIsImZpbmQiLCJvbCIsIm5sIiwibWFwU3RhdGUiLCJwYXlsb2FkIiwidWlTdGF0ZSIsImhhc093blByb3BlcnR5IiwicmVhZE9ubHkiLCJhZGREYXRhVG9NYXBDb21wb3NlZCIsImRhdGFzZXRzIiwiY29uZmlnIiwicGFyc2VkQ29uZmlnIiwidmVyc2lvbiIsIktlcGxlckdsU2NoZW1hIiwicGFyc2VTYXZlZENvbmZpZyIsIm1lcmdlZFN0YXRlIiwibWFwU3R5bGUiLCJjb21wb3N0ZWRVcGRhdGVycyIsIkFjdGlvblR5cGVzIiwiVVBEQVRFX1ZJU19EQVRBIiwiQUREX0RBVEFfVE9fTUFQIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7d0JBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7Ozs7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7QUFVTyxJQUFNQSx3REFBd0IsU0FBeEJBLHFCQUF3QixDQUFDQyxLQUFELEVBQVFDLE1BQVIsRUFBbUI7QUFDdEQ7QUFDQSxNQUFNQyxZQUFZRixNQUFNRyxRQUFOLENBQWVDLE1BQWpDOztBQUVBLE1BQU1ELFdBQVcsNENBQXFCSCxNQUFNRyxRQUEzQixFQUFxQ0YsTUFBckMsQ0FBakI7O0FBRUEsTUFBTUksaUJBQWlCO0FBQ3JCQyxlQUFXO0FBRFUsR0FBdkI7O0FBSUEsTUFBTUMscUNBQ0RGLGNBREMsRUFFREosT0FBT00sT0FGTixDQUFOOztBQUtBLE1BQUlDLGVBQUo7QUFDQSxNQUFJRCxRQUFRRCxTQUFaLEVBQXVCO0FBQ3JCO0FBQ0EsUUFBTUcsWUFBWU4sU0FBU0MsTUFBVCxDQUFnQk0sTUFBaEIsQ0FBdUI7QUFBQSxhQUFNLENBQUNSLFVBQVVTLElBQVYsQ0FBZTtBQUFBLGVBQU1DLE9BQU9DLEVBQWI7QUFBQSxPQUFmLENBQVA7QUFBQSxLQUF2QixDQUFsQjtBQUNBTCxhQUFTLDhCQUFjQyxTQUFkLENBQVQ7QUFDRDs7QUFFRCxvQ0FDS1QsS0FETDtBQUVFRyxzQkFGRjtBQUdFVyxjQUFVTixTQUNOLHdDQUFpQlIsTUFBTWMsUUFBdkIsRUFBaUM7QUFDL0JDLGVBQVNQO0FBRHNCLEtBQWpDLENBRE0sR0FJTlIsTUFBTWMsUUFQWjtBQVFFRSx3Q0FDSyx5Q0FBbUJoQixNQUFNZ0IsT0FBekIsRUFBa0MsRUFBQ0QsU0FBUyxJQUFWLEVBQWxDLENBREwsRUFFTVIsUUFBUVUsY0FBUixDQUF1QixVQUF2QixJQUFxQyxFQUFDQyxVQUFVWCxRQUFRVyxRQUFuQixFQUFyQyxHQUFvRSxFQUYxRTtBQVJGO0FBYUQsQ0FuQ007O0FBcUNQOzs7Ozs7QUFNTyxJQUFNQyxzREFBdUIsU0FBdkJBLG9CQUF1QixDQUFDbkIsS0FBRCxFQUFRQyxNQUFSLEVBQW1CO0FBQUEsd0JBRWpCQSxPQUFPYyxPQUZVO0FBQUEsTUFFOUNLLFFBRjhDLG1CQUU5Q0EsUUFGOEM7QUFBQSxNQUVwQ2IsT0FGb0MsbUJBRXBDQSxPQUZvQztBQUFBLE1BRTNCYyxNQUYyQixtQkFFM0JBLE1BRjJCOztBQUdyRCxNQUFJQyxlQUFlRCxNQUFuQjs7QUFFQSxNQUFJQSxVQUFVQSxPQUFPQSxNQUFqQixJQUEyQkEsT0FBT0UsT0FBdEMsRUFBK0M7QUFDN0M7QUFDQUQsbUJBQWVFLGtCQUFlQyxnQkFBZixDQUFnQ0osTUFBaEMsQ0FBZjtBQUNEO0FBQ0Q7QUFDQSxNQUFJSyxjQUFjM0Isc0JBQXNCQyxLQUF0QixFQUE2QixFQUFDb0Isa0JBQUQsRUFBV2IsZ0JBQVgsRUFBb0JjLFFBQVFDLGdCQUFnQkEsYUFBYW5CLFFBQXpELEVBQTdCLENBQWxCOztBQUVBO0FBQ0F1QiwyQ0FDS0EsV0FETDtBQUVFWixjQUFVLCtDQUFzQlksWUFBWVosUUFBbEMsRUFBNEMsRUFBQ0MsU0FBUyxFQUFDRCxVQUFVUSxnQkFBZ0JBLGFBQWFSLFFBQXhDLEVBQVYsRUFBNUM7QUFGWjs7QUFLQTtBQUNBWSwyQ0FDS0EsV0FETDtBQUVFQyxjQUFVLCtDQUFzQkQsWUFBWUMsUUFBbEMsRUFBNEMsRUFBQ1osU0FBUyxFQUFDWSxVQUFVTCxnQkFBZ0JBLGFBQWFLLFFBQXhDLEVBQVYsRUFBNUM7QUFGWjs7QUFLQSxTQUFPRCxXQUFQO0FBQ0QsQ0F6Qk07O0FBMkJQLElBQU1FLGdHQUNIQyxzQkFBWUMsZUFEVCxFQUMyQi9CLHFCQUQzQixxREFFSDhCLHNCQUFZRSxlQUZULEVBRTJCWixvQkFGM0Isc0JBQU47O2tCQUtlUyxpQiIsImZpbGUiOiJjb21wb3NlcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMTkgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgQWN0aW9uVHlwZXMgZnJvbSAnY29uc3RhbnRzL2FjdGlvbi10eXBlcyc7XG5pbXBvcnQge2ZpdEJvdW5kc1VwZGF0ZXJ9IGZyb20gJy4vbWFwLXN0YXRlLXVwZGF0ZXJzJztcbmltcG9ydCB7dG9nZ2xlTW9kYWxVcGRhdGVyfSBmcm9tICcuL3VpLXN0YXRlLXVwZGF0ZXJzJztcbmltcG9ydCB7dXBkYXRlVmlzRGF0YVVwZGF0ZXJ9IGZyb20gJy4vdmlzLXN0YXRlLXVwZGF0ZXJzJztcbmltcG9ydCB7cmVjZWl2ZU1hcENvbmZpZ1VwZGF0ZXIgYXMgc3RhdGVNYXBDb25maWdVcGRhdGVyfSBmcm9tICcuL21hcC1zdGF0ZS11cGRhdGVycyc7XG5pbXBvcnQge3JlY2VpdmVNYXBDb25maWdVcGRhdGVyIGFzIHN0eWxlTWFwQ29uZmlnVXBkYXRlcn0gZnJvbSAnLi9tYXAtc3R5bGUtdXBkYXRlcnMnO1xuaW1wb3J0IHtmaW5kTWFwQm91bmRzfSBmcm9tICd1dGlscy9kYXRhLXV0aWxzJztcbmltcG9ydCBLZXBsZXJHbFNjaGVtYSBmcm9tICdzY2hlbWFzJztcblxuLy8gY29tcG9zZSBhY3Rpb24gdG8gYXBwbHkgcmVzdWx0IG11bHRpcGxlIHJlZHVjZXJzLCB3aXRoIHRoZSBvdXRwdXQgb2Ygb25lXG5cbi8qKlxuICogQXBwbHkgZGF0YSBhbmQgY29uZmlnIHRvIHZpc1N0YXRlIHJlZHVjZXJcbiAqIEBwYXJhbSB7b2JqZWN0fSBzdGF0ZVxuICogQHBhcmFtIHtvYmplY3R9IGFjdGlvblxuICogQHBhcmFtIHtvYmplY3R9IGFjdGlvbi5vcHRpb25zXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGFjdGlvbi5vcHRpb25zLmNlbnRlck1hcFxuICogQHBhcmFtIHtCb29sZWFufSBhY3Rpb24ub3B0aW9ucy5yZWFkT25seVxuICogQHBhcmFtIHtvYmplY3R9IGFjdGlvbi5jb25maWdcbiAqIEByZXR1cm5zIHN0YXRlIG5ldyByZWR1Y2VyIHN0YXRlXG4gKi9cbmV4cG9ydCBjb25zdCB1cGRhdGVWaXNEYXRhQ29tcG9zZWQgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAvLyBrZWVwIGEgY29weSBvZiBvbGRMYXllcnNcbiAgY29uc3Qgb2xkTGF5ZXJzID0gc3RhdGUudmlzU3RhdGUubGF5ZXJzO1xuXG4gIGNvbnN0IHZpc1N0YXRlID0gdXBkYXRlVmlzRGF0YVVwZGF0ZXIoc3RhdGUudmlzU3RhdGUsIGFjdGlvbik7XG5cbiAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgY2VudGVyTWFwOiB0cnVlXG4gIH07XG5cbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAuLi5kZWZhdWx0T3B0aW9ucyxcbiAgICAuLi5hY3Rpb24ub3B0aW9uc1xuICB9O1xuXG4gIGxldCBib3VuZHM7XG4gIGlmIChvcHRpb25zLmNlbnRlck1hcCkge1xuICAgIC8vIGZpbmQgbWFwIGJvdW5kcyBmb3IgbmV3IGxheWVyc1xuICAgIGNvbnN0IG5ld0xheWVycyA9IHZpc1N0YXRlLmxheWVycy5maWx0ZXIobmwgPT4gIW9sZExheWVycy5maW5kKG9sID0+IG9sID09PSBubCkpO1xuICAgIGJvdW5kcyA9IGZpbmRNYXBCb3VuZHMobmV3TGF5ZXJzKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgLi4uc3RhdGUsXG4gICAgdmlzU3RhdGUsXG4gICAgbWFwU3RhdGU6IGJvdW5kc1xuICAgICAgPyBmaXRCb3VuZHNVcGRhdGVyKHN0YXRlLm1hcFN0YXRlLCB7XG4gICAgICAgICAgcGF5bG9hZDogYm91bmRzXG4gICAgICAgIH0pXG4gICAgICA6IHN0YXRlLm1hcFN0YXRlLFxuICAgIHVpU3RhdGU6IHtcbiAgICAgIC4uLnRvZ2dsZU1vZGFsVXBkYXRlcihzdGF0ZS51aVN0YXRlLCB7cGF5bG9hZDogbnVsbH0pLFxuICAgICAgLi4uKG9wdGlvbnMuaGFzT3duUHJvcGVydHkoJ3JlYWRPbmx5JykgPyB7cmVhZE9ubHk6IG9wdGlvbnMucmVhZE9ubHl9IDoge30pXG4gICAgfVxuICB9O1xufTtcblxuLyoqXG4gKiBDb21iaW5lIGRhdGEgYW5kIGZ1bGwgY29uZmlndXJhdGlvbiB1cGRhdGUgaW4gYSBzaW5nbGUgYWN0aW9uXG4gKiBAcGFyYW0gc3RhdGVcbiAqIEBwYXJhbSBhY3Rpb24ge2RhdGFzZXRzLCBvcHRpb25zLCBjb25maWd9XG4gKiBAcmV0dXJucyBzdGF0ZVxuICovXG5leHBvcnQgY29uc3QgYWRkRGF0YVRvTWFwQ29tcG9zZWQgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuXG4gIGNvbnN0IHtkYXRhc2V0cywgb3B0aW9ucywgY29uZmlnfSA9IGFjdGlvbi5wYXlsb2FkO1xuICBsZXQgcGFyc2VkQ29uZmlnID0gY29uZmlnO1xuXG4gIGlmIChjb25maWcgJiYgY29uZmlnLmNvbmZpZyAmJiBjb25maWcudmVyc2lvbikge1xuICAgIC8vIGlmIHBhc3NlZCBpbiBzYXZlZCBjb25maWdcbiAgICBwYXJzZWRDb25maWcgPSBLZXBsZXJHbFNjaGVtYS5wYXJzZVNhdmVkQ29uZmlnKGNvbmZpZylcbiAgfVxuICAvLyBVcGRhdGUgdmlzU3RhdGUgc3RvcmVcbiAgbGV0IG1lcmdlZFN0YXRlID0gdXBkYXRlVmlzRGF0YUNvbXBvc2VkKHN0YXRlLCB7ZGF0YXNldHMsIG9wdGlvbnMsIGNvbmZpZzogcGFyc2VkQ29uZmlnICYmIHBhcnNlZENvbmZpZy52aXNTdGF0ZX0pO1xuXG4gIC8vIFVwZGF0ZSBtYXBTdGF0ZSBzdG9yZVxuICBtZXJnZWRTdGF0ZSA9IHtcbiAgICAuLi5tZXJnZWRTdGF0ZSxcbiAgICBtYXBTdGF0ZTogc3RhdGVNYXBDb25maWdVcGRhdGVyKG1lcmdlZFN0YXRlLm1hcFN0YXRlLCB7cGF5bG9hZDoge21hcFN0YXRlOiBwYXJzZWRDb25maWcgJiYgcGFyc2VkQ29uZmlnLm1hcFN0YXRlfX0pXG4gIH07XG5cbiAgLy8gVXBkYXRlIG1hcFN0eWxlIHN0b3JlXG4gIG1lcmdlZFN0YXRlID0ge1xuICAgIC4uLm1lcmdlZFN0YXRlLFxuICAgIG1hcFN0eWxlOiBzdHlsZU1hcENvbmZpZ1VwZGF0ZXIobWVyZ2VkU3RhdGUubWFwU3R5bGUsIHtwYXlsb2FkOiB7bWFwU3R5bGU6IHBhcnNlZENvbmZpZyAmJiBwYXJzZWRDb25maWcubWFwU3R5bGV9fSlcbiAgfTtcblxuICByZXR1cm4gbWVyZ2VkU3RhdGVcbn07XG5cbmNvbnN0IGNvbXBvc3RlZFVwZGF0ZXJzID0ge1xuICBbQWN0aW9uVHlwZXMuVVBEQVRFX1ZJU19EQVRBXTogdXBkYXRlVmlzRGF0YUNvbXBvc2VkLFxuICBbQWN0aW9uVHlwZXMuQUREX0RBVEFfVE9fTUFQXTogYWRkRGF0YVRvTWFwQ29tcG9zZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvc3RlZFVwZGF0ZXJzO1xuIl19
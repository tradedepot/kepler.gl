'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.heatmapVisConfigs = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = require('babel-runtime/helpers/get');

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _reselect = require('reselect');

var _defaultSettings = require('../../constants/default-settings');

var _colorUtils = require('../../utils/color-utils');

var _mapboxUtils = require('../mapbox-utils');

var _mapboxglLayer = require('../mapboxgl-layer');

var _mapboxglLayer2 = _interopRequireDefault(_mapboxglLayer);

var _heatmapLayerIcon = require('./heatmap-layer-icon');

var _heatmapLayerIcon2 = _interopRequireDefault(_heatmapLayerIcon);

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

var MAX_ZOOM_LEVEL = 18;

var heatmapVisConfigs = exports.heatmapVisConfigs = {
  opacity: 'opacity',
  colorRange: 'colorRange',
  radius: 'heatmapRadius'
};

/**
 *
 * @param {Object} colorRange
 * @return {Array} [
 *  0, "rgba(33,102,172,0)",
 *  0.2, "rgb(103,169,207)",
 *  0.4, "rgb(209,229,240)",
 *  0.6, "rgb(253,219,199)",
 *  0.8, "rgb(239,138,98)",
 *  1, "rgb(178,24,43)"
 * ]
 */
var heatmapDensity = function heatmapDensity(colorRange) {
  var scaleFunction = _defaultSettings.SCALE_FUNC.quantize;

  var colors = ['#000000'].concat((0, _toConsumableArray3.default)(colorRange.colors));

  var scale = scaleFunction().domain([0, 1]).range(colors);

  var colorDensity = scale.range().reduce(function (bands, level) {
    var invert = scale.invertExtent(level);
    return [].concat((0, _toConsumableArray3.default)(bands), [invert[0], // first value in the range
    'rgb(' + (0, _colorUtils.hexToRgb)(level).join(',') + ')' // color
    ]);
  }, []);
  colorDensity[1] = 'rgba(0,0,0,0)';
  return colorDensity;
};

var shouldRebuild = function shouldRebuild(sameData, sameConfig) {
  return !(sameData && sameConfig);
};

var HeatmapLayer = function (_MapboxGLLayer) {
  (0, _inherits3.default)(HeatmapLayer, _MapboxGLLayer);

  function HeatmapLayer(props) {
    (0, _classCallCheck3.default)(this, HeatmapLayer);

    var _this = (0, _possibleConstructorReturn3.default)(this, (HeatmapLayer.__proto__ || Object.getPrototypeOf(HeatmapLayer)).call(this, props));

    _this.isSameData = function (_ref, config) {
      var allData = _ref.allData,
          filteredIndex = _ref.filteredIndex,
          oldLayerData = _ref.oldLayerData,
          _ref$opt = _ref.opt,
          opt = _ref$opt === undefined ? {} : _ref$opt;

      return Boolean(oldLayerData && oldLayerData.columns === config.columns && opt.sameData);
    };

    _this.isSameConfig = function (_ref2) {
      var oldLayerData = _ref2.oldLayerData,
          config = _ref2.config;

      // columns must use the same filedIdx
      // this is a fast way to compare columns object
      var columns = config.columns,
          weightField = config.weightField;


      if (!oldLayerData) {
        return false;
      }

      var sameColumns = columns === oldLayerData.columns;
      var sameWeightField = weightField === oldLayerData.weightField;
      return sameColumns && sameWeightField;
    };

    _this.datasetSelector = function (config) {
      return config.dataId;
    };

    _this.isVisibleSelector = function (config) {
      return config.isVisible;
    };

    _this.visConfigSelector = function (config) {
      return config.visConfig;
    };

    _this.weightFieldSelector = function (config) {
      return config.weightField ? config.weightField.name : null;
    };

    _this.weightDomainSelector = function (config) {
      return config.weightDomain;
    };

    _this.computeHeatmapConfiguration = (0, _reselect.createSelector)(_this.datasetSelector, _this.isVisibleSelector, _this.visConfigSelector, _this.weightFieldSelector, _this.weightDomainSelector, function (datasetId, isVisible, visConfig, weightField, weightDomain) {

      var layer = {
        type: 'heatmap',
        id: _this.id,
        source: datasetId,
        layout: {
          visibility: isVisible ? 'visible' : 'none'
        },
        maxzoom: MAX_ZOOM_LEVEL,
        paint: {
          'heatmap-weight': weightField ? ['interpolate', ['linear'], ['get', weightField], weightDomain[0], 0, weightDomain[1], 1] : 1,
          'heatmap-intensity': ['interpolate', ['linear'], ['zoom'], 0, 1, MAX_ZOOM_LEVEL, 3],
          'heatmap-color': ['interpolate', ['linear'], ['heatmap-density']].concat((0, _toConsumableArray3.default)(heatmapDensity(visConfig.colorRange))),
          'heatmap-radius': ['interpolate', ['linear'], ['zoom'], 0, 2, MAX_ZOOM_LEVEL, visConfig.radius // radius
          ],
          'heatmap-opacity': visConfig.opacity
        }
      };

      return layer;
    });

    _this.registerVisConfig(heatmapVisConfigs);
    return _this;
  }

  (0, _createClass3.default)(HeatmapLayer, [{
    key: 'getVisualChannelDescription',
    value: function getVisualChannelDescription(channel) {
      return channel === 'color' ? {
        label: 'color',
        measure: 'Density'
      } : {
        label: 'weight',
        measure: this.config.weightField ? this.config.weightField.name : 'Density'
      };
    }
  }, {
    key: 'getDefaultLayerConfig',
    value: function getDefaultLayerConfig() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      // mapbox heatmap layer color is always based on density
      // no need to set colorField, colorDomain and colorScale
      /* eslint-disable no-unused-vars */
      var _get$call$weightField = (0, _extends3.default)({}, (0, _get3.default)(HeatmapLayer.prototype.__proto__ || Object.getPrototypeOf(HeatmapLayer.prototype), 'getDefaultLayerConfig', this).call(this, props), {

        weightField: null,
        weightDomain: [0, 1],
        weightScale: 'linear'
      }),
          colorField = _get$call$weightField.colorField,
          colorDomain = _get$call$weightField.colorDomain,
          colorScale = _get$call$weightField.colorScale,
          layerConfig = (0, _objectWithoutProperties3.default)(_get$call$weightField, ['colorField', 'colorDomain', 'colorScale']);
      /* eslint-enable no-unused-vars */

      return layerConfig;
    }
  }, {
    key: 'formatLayerData',
    value: function formatLayerData(_, allData, filteredIndex, oldLayerData) {
      var opt = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

      var options = {
        allData: allData,
        filteredIndex: filteredIndex,
        oldLayerData: oldLayerData,
        opt: opt,
        config: this.config
      };

      var weightField = this.config.weightField;

      var isSameData = this.isSameData(options, this.config);
      var isSameConfig = this.isSameConfig(options);

      var data = !shouldRebuild(isSameData, isSameConfig) ? null : (0, _mapboxUtils.geojsonFromPoints)(allData, filteredIndex, this.config.columns, weightField ? [weightField] : []);

      var newConfig = this.computeHeatmapConfiguration(this.config);
      newConfig.id = this.id;

      return {
        columns: this.config.columns,
        config: newConfig,
        data: data,
        weightField: weightField
      };
    }
  }, {
    key: 'type',
    get: function get() {
      return 'heatmap';
    }
  }, {
    key: 'visualChannels',
    get: function get() {
      return {
        weight: {
          property: 'weight',
          field: 'weightField',
          scale: 'weightScale',
          domain: 'weightDomain',
          key: 'weight',
          // supportedFieldTypes can be determined by channelScaleType
          // or specified here
          defaultMeasure: 'density',
          supportedFieldTypes: [_defaultSettings.ALL_FIELD_TYPES.real, _defaultSettings.ALL_FIELD_TYPES.integer],
          channelScaleType: _defaultSettings.CHANNEL_SCALES.size
        }
      };
    }
  }, {
    key: 'layerIcon',
    get: function get() {
      return _heatmapLayerIcon2.default;
    }
  }]);
  return HeatmapLayer;
}(_mapboxglLayer2.default);

exports.default = HeatmapLayer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9sYXllcnMvaGVhdG1hcC1sYXllci9oZWF0bWFwLWxheWVyLmpzIl0sIm5hbWVzIjpbIk1BWF9aT09NX0xFVkVMIiwiaGVhdG1hcFZpc0NvbmZpZ3MiLCJvcGFjaXR5IiwiY29sb3JSYW5nZSIsInJhZGl1cyIsImhlYXRtYXBEZW5zaXR5Iiwic2NhbGVGdW5jdGlvbiIsIlNDQUxFX0ZVTkMiLCJxdWFudGl6ZSIsImNvbG9ycyIsInNjYWxlIiwiZG9tYWluIiwicmFuZ2UiLCJjb2xvckRlbnNpdHkiLCJyZWR1Y2UiLCJiYW5kcyIsImxldmVsIiwiaW52ZXJ0IiwiaW52ZXJ0RXh0ZW50Iiwiam9pbiIsInNob3VsZFJlYnVpbGQiLCJzYW1lRGF0YSIsInNhbWVDb25maWciLCJIZWF0bWFwTGF5ZXIiLCJwcm9wcyIsImlzU2FtZURhdGEiLCJjb25maWciLCJhbGxEYXRhIiwiZmlsdGVyZWRJbmRleCIsIm9sZExheWVyRGF0YSIsIm9wdCIsIkJvb2xlYW4iLCJjb2x1bW5zIiwiaXNTYW1lQ29uZmlnIiwid2VpZ2h0RmllbGQiLCJzYW1lQ29sdW1ucyIsInNhbWVXZWlnaHRGaWVsZCIsImRhdGFzZXRTZWxlY3RvciIsImRhdGFJZCIsImlzVmlzaWJsZVNlbGVjdG9yIiwiaXNWaXNpYmxlIiwidmlzQ29uZmlnU2VsZWN0b3IiLCJ2aXNDb25maWciLCJ3ZWlnaHRGaWVsZFNlbGVjdG9yIiwibmFtZSIsIndlaWdodERvbWFpblNlbGVjdG9yIiwid2VpZ2h0RG9tYWluIiwiY29tcHV0ZUhlYXRtYXBDb25maWd1cmF0aW9uIiwiZGF0YXNldElkIiwibGF5ZXIiLCJ0eXBlIiwiaWQiLCJzb3VyY2UiLCJsYXlvdXQiLCJ2aXNpYmlsaXR5IiwibWF4em9vbSIsInBhaW50IiwicmVnaXN0ZXJWaXNDb25maWciLCJjaGFubmVsIiwibGFiZWwiLCJtZWFzdXJlIiwid2VpZ2h0U2NhbGUiLCJjb2xvckZpZWxkIiwiY29sb3JEb21haW4iLCJjb2xvclNjYWxlIiwibGF5ZXJDb25maWciLCJfIiwib3B0aW9ucyIsImRhdGEiLCJuZXdDb25maWciLCJ3ZWlnaHQiLCJwcm9wZXJ0eSIsImZpZWxkIiwia2V5IiwiZGVmYXVsdE1lYXN1cmUiLCJzdXBwb3J0ZWRGaWVsZFR5cGVzIiwiQUxMX0ZJRUxEX1RZUEVTIiwicmVhbCIsImludGVnZXIiLCJjaGFubmVsU2NhbGVUeXBlIiwiQ0hBTk5FTF9TQ0FMRVMiLCJzaXplIiwiSGVhdG1hcExheWVySWNvbiIsIk1hcGJveEdMTGF5ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7QUF6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBU0EsSUFBTUEsaUJBQWlCLEVBQXZCOztBQUVPLElBQU1DLGdEQUFvQjtBQUMvQkMsV0FBUyxTQURzQjtBQUUvQkMsY0FBWSxZQUZtQjtBQUcvQkMsVUFBUTtBQUh1QixDQUExQjs7QUFNUDs7Ozs7Ozs7Ozs7O0FBWUEsSUFBTUMsaUJBQWlCLFNBQWpCQSxjQUFpQixDQUFDRixVQUFELEVBQWdCO0FBQ3JDLE1BQU1HLGdCQUFnQkMsNEJBQVdDLFFBQWpDOztBQUVBLE1BQU1DLFVBQVUsU0FBViwwQ0FBd0JOLFdBQVdNLE1BQW5DLEVBQU47O0FBRUEsTUFBTUMsUUFBUUosZ0JBQ1hLLE1BRFcsQ0FDSixDQUFDLENBQUQsRUFBSSxDQUFKLENBREksRUFFWEMsS0FGVyxDQUVMSCxNQUZLLENBQWQ7O0FBSUEsTUFBTUksZUFBZUgsTUFBTUUsS0FBTixHQUFjRSxNQUFkLENBQXFCLFVBQUNDLEtBQUQsRUFBUUMsS0FBUixFQUFrQjtBQUMxRCxRQUFNQyxTQUFTUCxNQUFNUSxZQUFOLENBQW1CRixLQUFuQixDQUFmO0FBQ0Esc0RBQ0tELEtBREwsSUFFRUUsT0FBTyxDQUFQLENBRkYsRUFFYTtBQUZiLGFBR1MsMEJBQVNELEtBQVQsRUFBZ0JHLElBQWhCLENBQXFCLEdBQXJCLENBSFQsT0FHc0M7QUFIdEM7QUFLRCxHQVBvQixFQU9sQixFQVBrQixDQUFyQjtBQVFBTixlQUFhLENBQWIsSUFBa0IsZUFBbEI7QUFDQSxTQUFPQSxZQUFQO0FBQ0QsQ0FuQkQ7O0FBcUJBLElBQU1PLGdCQUFnQixTQUFoQkEsYUFBZ0IsQ0FBQ0MsUUFBRCxFQUFXQyxVQUFYO0FBQUEsU0FBMEIsRUFBRUQsWUFBWUMsVUFBZCxDQUExQjtBQUFBLENBQXRCOztJQUVNQyxZOzs7QUFDSix3QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDBJQUNYQSxLQURXOztBQUFBLFVBeURuQkMsVUF6RG1CLEdBeUROLGdCQUFtREMsTUFBbkQsRUFBOEQ7QUFBQSxVQUE1REMsT0FBNEQsUUFBNURBLE9BQTREO0FBQUEsVUFBbkRDLGFBQW1ELFFBQW5EQSxhQUFtRDtBQUFBLFVBQXBDQyxZQUFvQyxRQUFwQ0EsWUFBb0M7QUFBQSwwQkFBdEJDLEdBQXNCO0FBQUEsVUFBdEJBLEdBQXNCLDRCQUFoQixFQUFnQjs7QUFDekUsYUFBT0MsUUFBUUYsZ0JBQWdCQSxhQUFhRyxPQUFiLEtBQXlCTixPQUFPTSxPQUFoRCxJQUNiRixJQUFJVCxRQURDLENBQVA7QUFHRCxLQTdEa0I7O0FBQUEsVUErRG5CWSxZQS9EbUIsR0ErREosaUJBQTRCO0FBQUEsVUFBMUJKLFlBQTBCLFNBQTFCQSxZQUEwQjtBQUFBLFVBQVpILE1BQVksU0FBWkEsTUFBWTs7QUFDekM7QUFDQTtBQUZ5QyxVQUl2Q00sT0FKdUMsR0FNckNOLE1BTnFDLENBSXZDTSxPQUp1QztBQUFBLFVBS3ZDRSxXQUx1QyxHQU1yQ1IsTUFOcUMsQ0FLdkNRLFdBTHVDOzs7QUFRekMsVUFBSSxDQUFDTCxZQUFMLEVBQW1CO0FBQ2pCLGVBQU8sS0FBUDtBQUNEOztBQUVELFVBQU1NLGNBQWNILFlBQVlILGFBQWFHLE9BQTdDO0FBQ0EsVUFBTUksa0JBQWtCRixnQkFBZ0JMLGFBQWFLLFdBQXJEO0FBQ0EsYUFBT0MsZUFBZUMsZUFBdEI7QUFDRCxLQTlFa0I7O0FBQUEsVUFnRm5CQyxlQWhGbUIsR0FnRkQ7QUFBQSxhQUFVWCxPQUFPWSxNQUFqQjtBQUFBLEtBaEZDOztBQUFBLFVBaUZuQkMsaUJBakZtQixHQWlGQztBQUFBLGFBQVViLE9BQU9jLFNBQWpCO0FBQUEsS0FqRkQ7O0FBQUEsVUFrRm5CQyxpQkFsRm1CLEdBa0ZDO0FBQUEsYUFBVWYsT0FBT2dCLFNBQWpCO0FBQUEsS0FsRkQ7O0FBQUEsVUFtRm5CQyxtQkFuRm1CLEdBbUZHO0FBQUEsYUFBVWpCLE9BQU9RLFdBQVAsR0FBcUJSLE9BQU9RLFdBQVAsQ0FBbUJVLElBQXhDLEdBQStDLElBQXpEO0FBQUEsS0FuRkg7O0FBQUEsVUFvRm5CQyxvQkFwRm1CLEdBb0ZJO0FBQUEsYUFBVW5CLE9BQU9vQixZQUFqQjtBQUFBLEtBcEZKOztBQUFBLFVBc0ZuQkMsMkJBdEZtQixHQXNGVyw4QkFDNUIsTUFBS1YsZUFEdUIsRUFFNUIsTUFBS0UsaUJBRnVCLEVBRzVCLE1BQUtFLGlCQUh1QixFQUk1QixNQUFLRSxtQkFKdUIsRUFLNUIsTUFBS0Usb0JBTHVCLEVBTzVCLFVBQUNHLFNBQUQsRUFBWVIsU0FBWixFQUF1QkUsU0FBdkIsRUFBa0NSLFdBQWxDLEVBQStDWSxZQUEvQyxFQUFnRTs7QUFFOUQsVUFBTUcsUUFBUTtBQUNaQyxjQUFNLFNBRE07QUFFWkMsWUFBSSxNQUFLQSxFQUZHO0FBR1pDLGdCQUFRSixTQUhJO0FBSVpLLGdCQUFRO0FBQ05DLHNCQUFZZCxZQUFZLFNBQVosR0FBd0I7QUFEOUIsU0FKSTtBQU9aZSxpQkFBU3ZELGNBUEc7QUFRWndELGVBQU87QUFDTCw0QkFBa0J0QixjQUFjLENBQzlCLGFBRDhCLEVBRTlCLENBQUMsUUFBRCxDQUY4QixFQUc5QixDQUFDLEtBQUQsRUFBUUEsV0FBUixDQUg4QixFQUk5QlksYUFBYSxDQUFiLENBSjhCLEVBSWIsQ0FKYSxFQUs5QkEsYUFBYSxDQUFiLENBTDhCLEVBS2IsQ0FMYSxDQUFkLEdBTWQsQ0FQQztBQVFMLCtCQUFxQixDQUNuQixhQURtQixFQUVuQixDQUFDLFFBQUQsQ0FGbUIsRUFHbkIsQ0FBQyxNQUFELENBSG1CLEVBSW5CLENBSm1CLEVBSWhCLENBSmdCLEVBS25COUMsY0FMbUIsRUFLSCxDQUxHLENBUmhCO0FBZUwsNEJBQ0UsYUFERixFQUVFLENBQUMsUUFBRCxDQUZGLEVBR0UsQ0FBQyxpQkFBRCxDQUhGLDBDQUlLSyxlQUFlcUMsVUFBVXZDLFVBQXpCLENBSkwsRUFmSztBQXFCTCw0QkFBa0IsQ0FDaEIsYUFEZ0IsRUFFaEIsQ0FBQyxRQUFELENBRmdCLEVBR2hCLENBQUMsTUFBRCxDQUhnQixFQUloQixDQUpnQixFQUliLENBSmEsRUFLaEJILGNBTGdCLEVBS0EwQyxVQUFVdEMsTUFMVixDQUtpQjtBQUxqQixXQXJCYjtBQTRCTCw2QkFBbUJzQyxVQUFVeEM7QUE1QnhCO0FBUkssT0FBZDs7QUF3Q0EsYUFBTytDLEtBQVA7QUFDRCxLQWxEMkIsQ0F0Rlg7O0FBRWpCLFVBQUtRLGlCQUFMLENBQXVCeEQsaUJBQXZCO0FBRmlCO0FBR2xCOzs7O2dEQTJCMkJ5RCxPLEVBQVM7QUFDbkMsYUFBT0EsWUFBWSxPQUFaLEdBQXNCO0FBQzNCQyxlQUFPLE9BRG9CO0FBRTNCQyxpQkFBUztBQUZrQixPQUF0QixHQUdIO0FBQ0ZELGVBQU8sUUFETDtBQUVGQyxpQkFBUyxLQUFLbEMsTUFBTCxDQUFZUSxXQUFaLEdBQTBCLEtBQUtSLE1BQUwsQ0FBWVEsV0FBWixDQUF3QlUsSUFBbEQsR0FBeUQ7QUFGaEUsT0FISjtBQU9EOzs7NENBRWlDO0FBQUEsVUFBWnBCLEtBQVksdUVBQUosRUFBSTs7QUFFaEM7QUFDQTtBQUNBO0FBSmdDLDZNQU1DQSxLQU5EOztBQVE5QlUscUJBQWEsSUFSaUI7QUFTOUJZLHNCQUFjLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FUZ0I7QUFVOUJlLHFCQUFhO0FBVmlCO0FBQUEsVUFLekJDLFVBTHlCLHlCQUt6QkEsVUFMeUI7QUFBQSxVQUtiQyxXQUxhLHlCQUtiQSxXQUxhO0FBQUEsVUFLQUMsVUFMQSx5QkFLQUEsVUFMQTtBQUFBLFVBS2VDLFdBTGY7QUFZaEM7O0FBRUEsYUFBT0EsV0FBUDtBQUNEOzs7b0NBb0ZlQyxDLEVBQUd2QyxPLEVBQVNDLGEsRUFBZUMsWSxFQUF3QjtBQUFBLFVBQVZDLEdBQVUsdUVBQUosRUFBSTs7QUFDakUsVUFBTXFDLFVBQVU7QUFDZHhDLHdCQURjO0FBRWRDLG9DQUZjO0FBR2RDLGtDQUhjO0FBSWRDLGdCQUpjO0FBS2RKLGdCQUFRLEtBQUtBO0FBTEMsT0FBaEI7O0FBRGlFLFVBUzFEUSxXQVQwRCxHQVMzQyxLQUFLUixNQVRzQyxDQVMxRFEsV0FUMEQ7O0FBVWpFLFVBQU1ULGFBQWEsS0FBS0EsVUFBTCxDQUFnQjBDLE9BQWhCLEVBQXlCLEtBQUt6QyxNQUE5QixDQUFuQjtBQUNBLFVBQU1PLGVBQWUsS0FBS0EsWUFBTCxDQUFrQmtDLE9BQWxCLENBQXJCOztBQUVBLFVBQU1DLE9BQU8sQ0FBQ2hELGNBQWNLLFVBQWQsRUFBMEJRLFlBQTFCLENBQUQsR0FDWCxJQURXLEdBRVgsb0NBQ0VOLE9BREYsRUFFRUMsYUFGRixFQUdFLEtBQUtGLE1BQUwsQ0FBWU0sT0FIZCxFQUlFRSxjQUFjLENBQUNBLFdBQUQsQ0FBZCxHQUE4QixFQUpoQyxDQUZGOztBQVNBLFVBQU1tQyxZQUFZLEtBQUt0QiwyQkFBTCxDQUFpQyxLQUFLckIsTUFBdEMsQ0FBbEI7QUFDQTJDLGdCQUFVbEIsRUFBVixHQUFlLEtBQUtBLEVBQXBCOztBQUVBLGFBQU87QUFDTG5CLGlCQUFTLEtBQUtOLE1BQUwsQ0FBWU0sT0FEaEI7QUFFTE4sZ0JBQVEyQyxTQUZIO0FBR0xELGtCQUhLO0FBSUxsQztBQUpLLE9BQVA7QUFNRDs7O3dCQXJLVTtBQUNULGFBQU8sU0FBUDtBQUNEOzs7d0JBRW9CO0FBQ25CLGFBQU87QUFDTG9DLGdCQUFRO0FBQ05DLG9CQUFVLFFBREo7QUFFTkMsaUJBQU8sYUFGRDtBQUdOOUQsaUJBQU8sYUFIRDtBQUlOQyxrQkFBUSxjQUpGO0FBS044RCxlQUFLLFFBTEM7QUFNTjtBQUNBO0FBQ0FDLDBCQUFnQixTQVJWO0FBU05DLCtCQUFxQixDQUFDQyxpQ0FBZ0JDLElBQWpCLEVBQXVCRCxpQ0FBZ0JFLE9BQXZDLENBVGY7QUFVTkMsNEJBQWtCQyxnQ0FBZUM7QUFWM0I7QUFESCxPQUFQO0FBY0Q7Ozt3QkFFZTtBQUNkLGFBQU9DLDBCQUFQO0FBQ0Q7OztFQTdCd0JDLHVCOztrQkE4S1o1RCxZIiwiZmlsZSI6ImhlYXRtYXAtbGF5ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMTkgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQge2NyZWF0ZVNlbGVjdG9yfSBmcm9tICdyZXNlbGVjdCc7XG5pbXBvcnQge0NIQU5ORUxfU0NBTEVTLCBTQ0FMRV9GVU5DLCBBTExfRklFTERfVFlQRVN9IGZyb20gJ2NvbnN0YW50cy9kZWZhdWx0LXNldHRpbmdzJztcbmltcG9ydCB7aGV4VG9SZ2J9IGZyb20gJ3V0aWxzL2NvbG9yLXV0aWxzJztcbmltcG9ydCB7Z2VvanNvbkZyb21Qb2ludHN9IGZyb20gJy4uL21hcGJveC11dGlscyc7XG5pbXBvcnQgTWFwYm94R0xMYXllciBmcm9tICcuLi9tYXBib3hnbC1sYXllcic7XG5pbXBvcnQgSGVhdG1hcExheWVySWNvbiBmcm9tICcuL2hlYXRtYXAtbGF5ZXItaWNvbic7XG5cbmNvbnN0IE1BWF9aT09NX0xFVkVMID0gMTg7XG5cbmV4cG9ydCBjb25zdCBoZWF0bWFwVmlzQ29uZmlncyA9IHtcbiAgb3BhY2l0eTogJ29wYWNpdHknLFxuICBjb2xvclJhbmdlOiAnY29sb3JSYW5nZScsXG4gIHJhZGl1czogJ2hlYXRtYXBSYWRpdXMnXG59O1xuXG4vKipcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gY29sb3JSYW5nZVxuICogQHJldHVybiB7QXJyYXl9IFtcbiAqICAwLCBcInJnYmEoMzMsMTAyLDE3MiwwKVwiLFxuICogIDAuMiwgXCJyZ2IoMTAzLDE2OSwyMDcpXCIsXG4gKiAgMC40LCBcInJnYigyMDksMjI5LDI0MClcIixcbiAqICAwLjYsIFwicmdiKDI1MywyMTksMTk5KVwiLFxuICogIDAuOCwgXCJyZ2IoMjM5LDEzOCw5OClcIixcbiAqICAxLCBcInJnYigxNzgsMjQsNDMpXCJcbiAqIF1cbiAqL1xuY29uc3QgaGVhdG1hcERlbnNpdHkgPSAoY29sb3JSYW5nZSkgPT4ge1xuICBjb25zdCBzY2FsZUZ1bmN0aW9uID0gU0NBTEVfRlVOQy5xdWFudGl6ZTtcblxuICBjb25zdCBjb2xvcnMgPSBbJyMwMDAwMDAnLCAuLi5jb2xvclJhbmdlLmNvbG9yc107XG5cbiAgY29uc3Qgc2NhbGUgPSBzY2FsZUZ1bmN0aW9uKClcbiAgICAuZG9tYWluKFswLCAxXSlcbiAgICAucmFuZ2UoY29sb3JzKTtcblxuICBjb25zdCBjb2xvckRlbnNpdHkgPSBzY2FsZS5yYW5nZSgpLnJlZHVjZSgoYmFuZHMsIGxldmVsKSA9PiB7XG4gICAgY29uc3QgaW52ZXJ0ID0gc2NhbGUuaW52ZXJ0RXh0ZW50KGxldmVsKTtcbiAgICByZXR1cm4gW1xuICAgICAgLi4uYmFuZHMsXG4gICAgICBpbnZlcnRbMF0sIC8vIGZpcnN0IHZhbHVlIGluIHRoZSByYW5nZVxuICAgICAgYHJnYigke2hleFRvUmdiKGxldmVsKS5qb2luKCcsJyl9KWAgLy8gY29sb3JcbiAgICBdXG4gIH0sIFtdKTtcbiAgY29sb3JEZW5zaXR5WzFdID0gJ3JnYmEoMCwwLDAsMCknO1xuICByZXR1cm4gY29sb3JEZW5zaXR5O1xufTtcblxuY29uc3Qgc2hvdWxkUmVidWlsZCA9IChzYW1lRGF0YSwgc2FtZUNvbmZpZykgPT4gIShzYW1lRGF0YSAmJiBzYW1lQ29uZmlnKTtcblxuY2xhc3MgSGVhdG1hcExheWVyIGV4dGVuZHMgTWFwYm94R0xMYXllciB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMucmVnaXN0ZXJWaXNDb25maWcoaGVhdG1hcFZpc0NvbmZpZ3MpO1xuICB9XG5cbiAgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuICdoZWF0bWFwJztcbiAgfVxuXG4gIGdldCB2aXN1YWxDaGFubmVscygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgd2VpZ2h0OiB7XG4gICAgICAgIHByb3BlcnR5OiAnd2VpZ2h0JyxcbiAgICAgICAgZmllbGQ6ICd3ZWlnaHRGaWVsZCcsXG4gICAgICAgIHNjYWxlOiAnd2VpZ2h0U2NhbGUnLFxuICAgICAgICBkb21haW46ICd3ZWlnaHREb21haW4nLFxuICAgICAgICBrZXk6ICd3ZWlnaHQnLFxuICAgICAgICAvLyBzdXBwb3J0ZWRGaWVsZFR5cGVzIGNhbiBiZSBkZXRlcm1pbmVkIGJ5IGNoYW5uZWxTY2FsZVR5cGVcbiAgICAgICAgLy8gb3Igc3BlY2lmaWVkIGhlcmVcbiAgICAgICAgZGVmYXVsdE1lYXN1cmU6ICdkZW5zaXR5JyxcbiAgICAgICAgc3VwcG9ydGVkRmllbGRUeXBlczogW0FMTF9GSUVMRF9UWVBFUy5yZWFsLCBBTExfRklFTERfVFlQRVMuaW50ZWdlcl0sXG4gICAgICAgIGNoYW5uZWxTY2FsZVR5cGU6IENIQU5ORUxfU0NBTEVTLnNpemVcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgZ2V0IGxheWVySWNvbigpIHtcbiAgICByZXR1cm4gSGVhdG1hcExheWVySWNvbjtcbiAgfVxuXG4gIGdldFZpc3VhbENoYW5uZWxEZXNjcmlwdGlvbihjaGFubmVsKSB7XG4gICAgcmV0dXJuIGNoYW5uZWwgPT09ICdjb2xvcicgPyB7XG4gICAgICBsYWJlbDogJ2NvbG9yJyxcbiAgICAgIG1lYXN1cmU6ICdEZW5zaXR5J1xuICAgIH0gOiB7XG4gICAgICBsYWJlbDogJ3dlaWdodCcsXG4gICAgICBtZWFzdXJlOiB0aGlzLmNvbmZpZy53ZWlnaHRGaWVsZCA/IHRoaXMuY29uZmlnLndlaWdodEZpZWxkLm5hbWUgOiAnRGVuc2l0eSdcbiAgICB9XG4gIH1cblxuICBnZXREZWZhdWx0TGF5ZXJDb25maWcocHJvcHMgPSB7fSkge1xuXG4gICAgLy8gbWFwYm94IGhlYXRtYXAgbGF5ZXIgY29sb3IgaXMgYWx3YXlzIGJhc2VkIG9uIGRlbnNpdHlcbiAgICAvLyBubyBuZWVkIHRvIHNldCBjb2xvckZpZWxkLCBjb2xvckRvbWFpbiBhbmQgY29sb3JTY2FsZVxuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG4gICAgY29uc3Qge2NvbG9yRmllbGQsIGNvbG9yRG9tYWluLCBjb2xvclNjYWxlLCAuLi5sYXllckNvbmZpZ30gPSB7XG4gICAgICAuLi5zdXBlci5nZXREZWZhdWx0TGF5ZXJDb25maWcocHJvcHMpLFxuXG4gICAgICB3ZWlnaHRGaWVsZDogbnVsbCxcbiAgICAgIHdlaWdodERvbWFpbjogWzAsIDFdLFxuICAgICAgd2VpZ2h0U2NhbGU6ICdsaW5lYXInXG4gICAgfTtcbiAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLXVudXNlZC12YXJzICovXG5cbiAgICByZXR1cm4gbGF5ZXJDb25maWc7XG4gIH1cblxuICBpc1NhbWVEYXRhID0gKHthbGxEYXRhLCBmaWx0ZXJlZEluZGV4LCBvbGRMYXllckRhdGEsIG9wdCA9IHt9fSwgY29uZmlnKSA9PiB7XG4gICAgcmV0dXJuIEJvb2xlYW4ob2xkTGF5ZXJEYXRhICYmIG9sZExheWVyRGF0YS5jb2x1bW5zID09PSBjb25maWcuY29sdW1ucyAmJlxuICAgICAgb3B0LnNhbWVEYXRhXG4gICAgKTtcbiAgfTtcblxuICBpc1NhbWVDb25maWcgPSAoe29sZExheWVyRGF0YSwgY29uZmlnfSkgPT4ge1xuICAgIC8vIGNvbHVtbnMgbXVzdCB1c2UgdGhlIHNhbWUgZmlsZWRJZHhcbiAgICAvLyB0aGlzIGlzIGEgZmFzdCB3YXkgdG8gY29tcGFyZSBjb2x1bW5zIG9iamVjdFxuICAgIGNvbnN0IHtcbiAgICAgIGNvbHVtbnMsXG4gICAgICB3ZWlnaHRGaWVsZFxuICAgIH0gPSBjb25maWc7XG5cbiAgICBpZiAoIW9sZExheWVyRGF0YSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IHNhbWVDb2x1bW5zID0gY29sdW1ucyA9PT0gb2xkTGF5ZXJEYXRhLmNvbHVtbnM7XG4gICAgY29uc3Qgc2FtZVdlaWdodEZpZWxkID0gd2VpZ2h0RmllbGQgPT09IG9sZExheWVyRGF0YS53ZWlnaHRGaWVsZDtcbiAgICByZXR1cm4gc2FtZUNvbHVtbnMgJiYgc2FtZVdlaWdodEZpZWxkO1xuICB9O1xuXG4gIGRhdGFzZXRTZWxlY3RvciA9IGNvbmZpZyA9PiBjb25maWcuZGF0YUlkO1xuICBpc1Zpc2libGVTZWxlY3RvciA9IGNvbmZpZyA9PiBjb25maWcuaXNWaXNpYmxlO1xuICB2aXNDb25maWdTZWxlY3RvciA9IGNvbmZpZyA9PiBjb25maWcudmlzQ29uZmlnO1xuICB3ZWlnaHRGaWVsZFNlbGVjdG9yID0gY29uZmlnID0+IGNvbmZpZy53ZWlnaHRGaWVsZCA/IGNvbmZpZy53ZWlnaHRGaWVsZC5uYW1lIDogbnVsbDtcbiAgd2VpZ2h0RG9tYWluU2VsZWN0b3IgPSBjb25maWcgPT4gY29uZmlnLndlaWdodERvbWFpbjtcblxuICBjb21wdXRlSGVhdG1hcENvbmZpZ3VyYXRpb24gPSBjcmVhdGVTZWxlY3RvcihcbiAgICB0aGlzLmRhdGFzZXRTZWxlY3RvcixcbiAgICB0aGlzLmlzVmlzaWJsZVNlbGVjdG9yLFxuICAgIHRoaXMudmlzQ29uZmlnU2VsZWN0b3IsXG4gICAgdGhpcy53ZWlnaHRGaWVsZFNlbGVjdG9yLFxuICAgIHRoaXMud2VpZ2h0RG9tYWluU2VsZWN0b3IsXG5cbiAgICAoZGF0YXNldElkLCBpc1Zpc2libGUsIHZpc0NvbmZpZywgd2VpZ2h0RmllbGQsIHdlaWdodERvbWFpbikgPT4ge1xuXG4gICAgICBjb25zdCBsYXllciA9IHtcbiAgICAgICAgdHlwZTogJ2hlYXRtYXAnLFxuICAgICAgICBpZDogdGhpcy5pZCxcbiAgICAgICAgc291cmNlOiBkYXRhc2V0SWQsXG4gICAgICAgIGxheW91dDoge1xuICAgICAgICAgIHZpc2liaWxpdHk6IGlzVmlzaWJsZSA/ICd2aXNpYmxlJyA6ICdub25lJ1xuICAgICAgICB9LFxuICAgICAgICBtYXh6b29tOiBNQVhfWk9PTV9MRVZFTCxcbiAgICAgICAgcGFpbnQ6IHtcbiAgICAgICAgICAnaGVhdG1hcC13ZWlnaHQnOiB3ZWlnaHRGaWVsZCA/IFtcbiAgICAgICAgICAgICdpbnRlcnBvbGF0ZScsXG4gICAgICAgICAgICBbJ2xpbmVhciddLFxuICAgICAgICAgICAgWydnZXQnLCB3ZWlnaHRGaWVsZF0sXG4gICAgICAgICAgICB3ZWlnaHREb21haW5bMF0sIDAsXG4gICAgICAgICAgICB3ZWlnaHREb21haW5bMV0sIDFcbiAgICAgICAgICBdIDogMSxcbiAgICAgICAgICAnaGVhdG1hcC1pbnRlbnNpdHknOiBbXG4gICAgICAgICAgICAnaW50ZXJwb2xhdGUnLFxuICAgICAgICAgICAgWydsaW5lYXInXSxcbiAgICAgICAgICAgIFsnem9vbSddLFxuICAgICAgICAgICAgMCwgMSxcbiAgICAgICAgICAgIE1BWF9aT09NX0xFVkVMLCAzXG4gICAgICAgICAgXSxcbiAgICAgICAgICAnaGVhdG1hcC1jb2xvcic6IFtcbiAgICAgICAgICAgICdpbnRlcnBvbGF0ZScsXG4gICAgICAgICAgICBbJ2xpbmVhciddLFxuICAgICAgICAgICAgWydoZWF0bWFwLWRlbnNpdHknXSxcbiAgICAgICAgICAgIC4uLmhlYXRtYXBEZW5zaXR5KHZpc0NvbmZpZy5jb2xvclJhbmdlKVxuICAgICAgICAgIF0sXG4gICAgICAgICAgJ2hlYXRtYXAtcmFkaXVzJzogW1xuICAgICAgICAgICAgJ2ludGVycG9sYXRlJyxcbiAgICAgICAgICAgIFsnbGluZWFyJ10sXG4gICAgICAgICAgICBbJ3pvb20nXSxcbiAgICAgICAgICAgIDAsIDIsXG4gICAgICAgICAgICBNQVhfWk9PTV9MRVZFTCwgdmlzQ29uZmlnLnJhZGl1cyAvLyByYWRpdXNcbiAgICAgICAgICBdLFxuICAgICAgICAgICdoZWF0bWFwLW9wYWNpdHknOiB2aXNDb25maWcub3BhY2l0eVxuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gbGF5ZXI7XG4gICAgfVxuICApO1xuXG4gIGZvcm1hdExheWVyRGF0YShfLCBhbGxEYXRhLCBmaWx0ZXJlZEluZGV4LCBvbGRMYXllckRhdGEsIG9wdCA9IHt9KSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgIGFsbERhdGEsXG4gICAgICBmaWx0ZXJlZEluZGV4LFxuICAgICAgb2xkTGF5ZXJEYXRhLFxuICAgICAgb3B0LFxuICAgICAgY29uZmlnOiB0aGlzLmNvbmZpZ1xuICAgIH07XG5cbiAgICBjb25zdCB7d2VpZ2h0RmllbGR9ID0gdGhpcy5jb25maWc7XG4gICAgY29uc3QgaXNTYW1lRGF0YSA9IHRoaXMuaXNTYW1lRGF0YShvcHRpb25zLCB0aGlzLmNvbmZpZyk7XG4gICAgY29uc3QgaXNTYW1lQ29uZmlnID0gdGhpcy5pc1NhbWVDb25maWcob3B0aW9ucyk7XG5cbiAgICBjb25zdCBkYXRhID0gIXNob3VsZFJlYnVpbGQoaXNTYW1lRGF0YSwgaXNTYW1lQ29uZmlnKSA/XG4gICAgICBudWxsIDpcbiAgICAgIGdlb2pzb25Gcm9tUG9pbnRzKFxuICAgICAgICBhbGxEYXRhLFxuICAgICAgICBmaWx0ZXJlZEluZGV4LFxuICAgICAgICB0aGlzLmNvbmZpZy5jb2x1bW5zLFxuICAgICAgICB3ZWlnaHRGaWVsZCA/IFt3ZWlnaHRGaWVsZF0gOiBbXVxuICAgICAgKTtcblxuICAgIGNvbnN0IG5ld0NvbmZpZyA9IHRoaXMuY29tcHV0ZUhlYXRtYXBDb25maWd1cmF0aW9uKHRoaXMuY29uZmlnKTtcbiAgICBuZXdDb25maWcuaWQgPSB0aGlzLmlkO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbHVtbnM6IHRoaXMuY29uZmlnLmNvbHVtbnMsXG4gICAgICBjb25maWc6IG5ld0NvbmZpZyxcbiAgICAgIGRhdGEsXG4gICAgICB3ZWlnaHRGaWVsZFxuICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhdG1hcExheWVyO1xuIl19
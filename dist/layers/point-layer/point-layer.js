'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.pointVisConfigs = exports.pointOptionalColumns = exports.pointRequiredColumns = exports.pointLabelResolver = exports.pointLabelAccessor = exports.pointPosResolver = exports.pointPosAccessor = undefined;

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _baseLayer = require('../base-layer');

var _baseLayer2 = _interopRequireDefault(_baseLayer);

var _lodash = require('lodash.memoize');

var _lodash2 = _interopRequireDefault(_lodash);

var _deck = require('deck.gl');

var _scatterplotBrushingLayer = require('../../deckgl-layers/scatterplot-brushing-layer/scatterplot-brushing-layer');

var _scatterplotBrushingLayer2 = _interopRequireDefault(_scatterplotBrushingLayer);

var _lodash3 = require('lodash.uniq');

var _lodash4 = _interopRequireDefault(_lodash3);

var _colorUtils = require('../../utils/color-utils');

var _pointLayerIcon = require('./point-layer-icon');

var _pointLayerIcon2 = _interopRequireDefault(_pointLayerIcon);

var _defaultSettings = require('../../constants/default-settings');

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

var pointPosAccessor = exports.pointPosAccessor = function pointPosAccessor(_ref) {
  var lat = _ref.lat,
      lng = _ref.lng,
      altitude = _ref.altitude;
  return function (d) {
    return [d.data[lng.fieldIdx], d.data[lat.fieldIdx], altitude && altitude.fieldIdx > -1 ? d.data[altitude.fieldIdx] : 0];
  };
};

var pointPosResolver = exports.pointPosResolver = function pointPosResolver(_ref2) {
  var lat = _ref2.lat,
      lng = _ref2.lng,
      altitude = _ref2.altitude;
  return lat.fieldIdx + '-' + lng.fieldIdx + '-' + (altitude ? altitude.fieldIdx : 'z');
};

var pointLabelAccessor = exports.pointLabelAccessor = function pointLabelAccessor(textLabel) {
  return function (d) {
    return String(d.data[textLabel.field.tableFieldIndex - 1]);
  };
};
var pointLabelResolver = exports.pointLabelResolver = function pointLabelResolver(textLabel) {
  return textLabel.field && textLabel.field.tableFieldIndex;
};

var pointRequiredColumns = exports.pointRequiredColumns = ['lat', 'lng'];
var pointOptionalColumns = exports.pointOptionalColumns = ['altitude'];

var pointVisConfigs = exports.pointVisConfigs = {
  radius: 'radius',
  fixedRadius: 'fixedRadius',
  opacity: 'opacity',
  outline: 'outline',
  thickness: 'thickness',
  colorRange: 'colorRange',
  radiusRange: 'radiusRange',
  'hi-precision': 'hi-precision'
};

var PointLayer = function (_Layer) {
  (0, _inherits3.default)(PointLayer, _Layer);

  function PointLayer(props) {
    (0, _classCallCheck3.default)(this, PointLayer);

    var _this = (0, _possibleConstructorReturn3.default)(this, (PointLayer.__proto__ || Object.getPrototypeOf(PointLayer)).call(this, props));

    _this.registerVisConfig(pointVisConfigs);
    _this.getPosition = (0, _lodash2.default)(pointPosAccessor, pointPosResolver);
    _this.getText = (0, _lodash2.default)(pointLabelAccessor, pointLabelResolver);
    return _this;
  }

  (0, _createClass3.default)(PointLayer, [{
    key: 'formatLayerData',
    value: function formatLayerData(_, allData, filteredIndex, oldLayerData) {
      var _this2 = this;

      var opt = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
      var _config = this.config,
          colorScale = _config.colorScale,
          colorDomain = _config.colorDomain,
          colorField = _config.colorField,
          color = _config.color,
          columns = _config.columns,
          sizeField = _config.sizeField,
          sizeScale = _config.sizeScale,
          sizeDomain = _config.sizeDomain,
          textLabel = _config.textLabel,
          _config$visConfig = _config.visConfig,
          radiusRange = _config$visConfig.radiusRange,
          fixedRadius = _config$visConfig.fixedRadius,
          colorRange = _config$visConfig.colorRange;

      // point color

      var cScale = colorField && this.getVisChannelScale(colorScale, colorDomain, colorRange.colors.map(_colorUtils.hexToRgb));

      // point radius
      var rScale = sizeField && this.getVisChannelScale(sizeScale, sizeDomain, radiusRange, fixedRadius);

      var getPosition = this.getPosition(columns);

      if (!oldLayerData || oldLayerData.getPosition !== getPosition) {
        this.updateLayerMeta(allData, getPosition);
      }

      var data = void 0;
      if (oldLayerData && oldLayerData.data && opt.sameData && oldLayerData.getPosition === getPosition) {
        data = oldLayerData.data;
      } else {
        data = filteredIndex.reduce(function (accu, index) {
          var pos = getPosition({ data: allData[index] });

          // if doesn't have point lat or lng, do not add the point
          // deck.gl can't handle position = null
          if (!pos.every(Number.isFinite)) {
            return accu;
          }

          accu.push({
            data: allData[index]
          });

          return accu;
        }, []);
      }

      // get all distinct characters in the text labels
      var getText = this.getText(textLabel);
      var labelCharacterSet = void 0;
      if (oldLayerData && oldLayerData.labelCharacterSet && opt.sameData && oldLayerData.getText === getText) {
        labelCharacterSet = oldLayerData.labelCharacterSet;
      } else {
        var textLabels = textLabel.field ? data.map(getText) : [];
        labelCharacterSet = (0, _lodash4.default)(textLabels.join(''));
      }

      var getRadius = rScale ? function (d) {
        return _this2.getEncodedChannelValue(rScale, d.data, sizeField);
      } : 1;

      var getColor = cScale ? function (d) {
        return _this2.getEncodedChannelValue(cScale, d.data, colorField);
      } : color;

      return {
        data: data,
        labelCharacterSet: labelCharacterSet,
        getPosition: getPosition,
        getColor: getColor,
        getRadius: getRadius,
        getText: getText
      };
    }
  }, {
    key: 'updateLayerMeta',
    value: function updateLayerMeta(allData, getPosition) {
      var bounds = this.getPointsBounds(allData, function (d) {
        return getPosition({ data: d });
      });
      this.updateMeta({ bounds: bounds });
    }
  }, {
    key: 'renderLayer',
    value: function renderLayer(_ref3) {
      var _this3 = this;

      var data = _ref3.data,
          idx = _ref3.idx,
          layerInteraction = _ref3.layerInteraction,
          objectHovered = _ref3.objectHovered,
          mapState = _ref3.mapState,
          interactionConfig = _ref3.interactionConfig;

      var enableBrushing = interactionConfig.brush.enabled;

      var layerProps = (0, _extends3.default)({
        outline: this.config.visConfig.outline,
        radiusMinPixels: 1,
        fp64: this.config.visConfig['hi-precision'],
        strokeWidth: this.config.visConfig.thickness,
        radiusScale: this.getRadiusScaleByZoom(mapState)
      }, this.config.visConfig.fixedRadius ? {} : { radiusMaxPixels: 500 });

      var interaction = {
        autoHighlight: !enableBrushing,
        enableBrushing: enableBrushing,
        brushRadius: interactionConfig.brush.config.size * 1000,
        highlightColor: this.config.highlightColor
      };

      return [new _scatterplotBrushingLayer2.default((0, _extends3.default)({}, layerProps, layerInteraction, data, interaction, {
        idx: idx,
        id: this.id,
        opacity: this.config.visConfig.opacity,
        pickable: true,
        parameters: {
          // circles will be flat on the map when the altitude column is not used
          depthTest: this.config.columns.altitude.fieldIdx > -1
        },

        updateTriggers: {
          getRadius: {
            sizeField: this.config.sizeField,
            radiusRange: this.config.visConfig.radiusRange,
            fixedRadius: this.config.visConfig.fixedRadius,
            sizeScale: this.config.sizeScale
          },
          getColor: {
            color: this.config.color,
            colorField: this.config.colorField,
            colorRange: this.config.visConfig.colorRange,
            colorScale: this.config.colorScale
          }
        }
      }))].concat((0, _toConsumableArray3.default)(this.config.textLabel.field ? [new _deck.TextLayer({
        id: this.id + '-label',
        data: data.data,
        getPosition: data.getPosition,
        getPixelOffset: this.config.textLabel.offset,
        getSize: this.config.textLabel.size,
        getTextAnchor: this.config.textLabel.anchor,
        getText: data.getText,
        getColor: function getColor(d) {
          return _this3.config.textLabel.color;
        },
        fp64: this.config.visConfig['hi-precision'],
        parameters: {
          // text will always show on top of all layers
          depthTest: false
        },
        characterSet: data.labelCharacterSet,
        updateTriggers: {
          getPosition: data.getPosition,
          getPixelOffset: this.config.textLabel.offset,
          getText: this.config.textLabel.field,
          getTextAnchor: this.config.textLabel.anchor,
          getSize: this.config.textLabel.size,
          getColor: this.config.textLabel.color
        }
      })] : []));
    }
  }, {
    key: 'type',
    get: function get() {
      return 'point';
    }
  }, {
    key: 'isAggregated',
    get: function get() {
      return false;
    }
  }, {
    key: 'layerIcon',
    get: function get() {
      return _pointLayerIcon2.default;
    }
  }, {
    key: 'requiredLayerColumns',
    get: function get() {
      return pointRequiredColumns;
    }
  }, {
    key: 'optionalColumns',
    get: function get() {
      return pointOptionalColumns;
    }
  }, {
    key: 'columnPairs',
    get: function get() {
      return this.defaultPointColumnPairs;
    }
  }, {
    key: 'noneLayerDataAffectingProps',
    get: function get() {
      return [].concat((0, _toConsumableArray3.default)((0, _get3.default)(PointLayer.prototype.__proto__ || Object.getPrototypeOf(PointLayer.prototype), 'noneLayerDataAffectingProps', this)), ['radius']);
    }
  }, {
    key: 'visualChannels',
    get: function get() {
      return (0, _extends3.default)({}, (0, _get3.default)(PointLayer.prototype.__proto__ || Object.getPrototypeOf(PointLayer.prototype), 'visualChannels', this), {
        size: (0, _extends3.default)({}, (0, _get3.default)(PointLayer.prototype.__proto__ || Object.getPrototypeOf(PointLayer.prototype), 'visualChannels', this).size, {
          range: 'radiusRange',
          property: 'radius',
          channelScaleType: 'radius'
        })
      });
    }
  }], [{
    key: 'findDefaultLayerProps',
    value: function findDefaultLayerProps(_ref4) {
      var _ref4$fieldPairs = _ref4.fieldPairs,
          fieldPairs = _ref4$fieldPairs === undefined ? [] : _ref4$fieldPairs;

      var props = [];

      // Make layer for each pair
      fieldPairs.forEach(function (pair) {
        // find fields for tableFieldIndex
        var latField = pair.pair.lat;
        var lngField = pair.pair.lng;
        var layerName = pair.defaultName;

        var prop = {
          label: layerName.length ? layerName : 'Point'
        };

        // default layer color for begintrip and dropoff point
        if (latField.value in _defaultSettings.DEFAULT_LAYER_COLOR) {
          prop.color = (0, _colorUtils.hexToRgb)(_defaultSettings.DEFAULT_LAYER_COLOR[latField.value]);
        }

        // set the first layer to be visible
        if (props.length === 0) {
          prop.isVisible = true;
        }

        // const newLayer = new KeplerGlLayers.PointLayer(prop);
        prop.columns = {
          lat: latField,
          lng: lngField,
          altitude: { value: null, fieldIdx: -1, optional: true }
        };

        props.push(prop);
      });

      return props;
    }
  }]);
  return PointLayer;
}(_baseLayer2.default);

exports.default = PointLayer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9sYXllcnMvcG9pbnQtbGF5ZXIvcG9pbnQtbGF5ZXIuanMiXSwibmFtZXMiOlsicG9pbnRQb3NBY2Nlc3NvciIsImxhdCIsImxuZyIsImFsdGl0dWRlIiwiZCIsImRhdGEiLCJmaWVsZElkeCIsInBvaW50UG9zUmVzb2x2ZXIiLCJwb2ludExhYmVsQWNjZXNzb3IiLCJTdHJpbmciLCJ0ZXh0TGFiZWwiLCJmaWVsZCIsInRhYmxlRmllbGRJbmRleCIsInBvaW50TGFiZWxSZXNvbHZlciIsInBvaW50UmVxdWlyZWRDb2x1bW5zIiwicG9pbnRPcHRpb25hbENvbHVtbnMiLCJwb2ludFZpc0NvbmZpZ3MiLCJyYWRpdXMiLCJmaXhlZFJhZGl1cyIsIm9wYWNpdHkiLCJvdXRsaW5lIiwidGhpY2tuZXNzIiwiY29sb3JSYW5nZSIsInJhZGl1c1JhbmdlIiwiUG9pbnRMYXllciIsInByb3BzIiwicmVnaXN0ZXJWaXNDb25maWciLCJnZXRQb3NpdGlvbiIsImdldFRleHQiLCJfIiwiYWxsRGF0YSIsImZpbHRlcmVkSW5kZXgiLCJvbGRMYXllckRhdGEiLCJvcHQiLCJjb25maWciLCJjb2xvclNjYWxlIiwiY29sb3JEb21haW4iLCJjb2xvckZpZWxkIiwiY29sb3IiLCJjb2x1bW5zIiwic2l6ZUZpZWxkIiwic2l6ZVNjYWxlIiwic2l6ZURvbWFpbiIsInZpc0NvbmZpZyIsImNTY2FsZSIsImdldFZpc0NoYW5uZWxTY2FsZSIsImNvbG9ycyIsIm1hcCIsImhleFRvUmdiIiwiclNjYWxlIiwidXBkYXRlTGF5ZXJNZXRhIiwic2FtZURhdGEiLCJyZWR1Y2UiLCJhY2N1IiwiaW5kZXgiLCJwb3MiLCJldmVyeSIsIk51bWJlciIsImlzRmluaXRlIiwicHVzaCIsImxhYmVsQ2hhcmFjdGVyU2V0IiwidGV4dExhYmVscyIsImpvaW4iLCJnZXRSYWRpdXMiLCJnZXRFbmNvZGVkQ2hhbm5lbFZhbHVlIiwiZ2V0Q29sb3IiLCJib3VuZHMiLCJnZXRQb2ludHNCb3VuZHMiLCJ1cGRhdGVNZXRhIiwiaWR4IiwibGF5ZXJJbnRlcmFjdGlvbiIsIm9iamVjdEhvdmVyZWQiLCJtYXBTdGF0ZSIsImludGVyYWN0aW9uQ29uZmlnIiwiZW5hYmxlQnJ1c2hpbmciLCJicnVzaCIsImVuYWJsZWQiLCJsYXllclByb3BzIiwicmFkaXVzTWluUGl4ZWxzIiwiZnA2NCIsInN0cm9rZVdpZHRoIiwicmFkaXVzU2NhbGUiLCJnZXRSYWRpdXNTY2FsZUJ5Wm9vbSIsInJhZGl1c01heFBpeGVscyIsImludGVyYWN0aW9uIiwiYXV0b0hpZ2hsaWdodCIsImJydXNoUmFkaXVzIiwic2l6ZSIsImhpZ2hsaWdodENvbG9yIiwiU2NhdHRlcnBsb3RCcnVzaGluZ0xheWVyIiwiaWQiLCJwaWNrYWJsZSIsInBhcmFtZXRlcnMiLCJkZXB0aFRlc3QiLCJ1cGRhdGVUcmlnZ2VycyIsIlRleHRMYXllciIsImdldFBpeGVsT2Zmc2V0Iiwib2Zmc2V0IiwiZ2V0U2l6ZSIsImdldFRleHRBbmNob3IiLCJhbmNob3IiLCJjaGFyYWN0ZXJTZXQiLCJQb2ludExheWVySWNvbiIsImRlZmF1bHRQb2ludENvbHVtblBhaXJzIiwicmFuZ2UiLCJwcm9wZXJ0eSIsImNoYW5uZWxTY2FsZVR5cGUiLCJmaWVsZFBhaXJzIiwiZm9yRWFjaCIsImxhdEZpZWxkIiwicGFpciIsImxuZ0ZpZWxkIiwibGF5ZXJOYW1lIiwiZGVmYXVsdE5hbWUiLCJwcm9wIiwibGFiZWwiLCJsZW5ndGgiLCJ2YWx1ZSIsIkRFRkFVTFRfTEFZRVJfQ09MT1IiLCJpc1Zpc2libGUiLCJvcHRpb25hbCIsIkxheWVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUEzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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SixTQUFuQixHQUErQjtBQUQzQixTQUFiOztBQUlBO0FBQ0EsWUFBSUgsU0FBU1EsS0FBVCxJQUFrQkMsb0NBQXRCLEVBQTJDO0FBQ3pDSixlQUFLNUUsS0FBTCxHQUFhLDBCQUFTZ0YscUNBQW9CVCxTQUFTUSxLQUE3QixDQUFULENBQWI7QUFDRDs7QUFFRDtBQUNBLFlBQUk1RixNQUFNMkYsTUFBTixLQUFpQixDQUFyQixFQUF3QjtBQUN0QkYsZUFBS0ssU0FBTCxHQUFpQixJQUFqQjtBQUNEOztBQUVEO0FBQ0FMLGFBQUszRSxPQUFMLEdBQWU7QUFDYnRDLGVBQUs0RyxRQURRO0FBRWIzRyxlQUFLNkcsUUFGUTtBQUdiNUcsb0JBQVUsRUFBQ2tILE9BQU8sSUFBUixFQUFjL0csVUFBVSxDQUFDLENBQXpCLEVBQTRCa0gsVUFBVSxJQUF0QztBQUhHLFNBQWY7O0FBTUEvRixjQUFNa0MsSUFBTixDQUFXdUQsSUFBWDtBQUNELE9BNUJEOztBQThCQSxhQUFPekYsS0FBUDtBQUNEOzs7RUFuRnFDZ0csbUI7O2tCQUFuQmpHLFUiLCJmaWxlIjoicG9pbnQtbGF5ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMTkgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgTGF5ZXIgZnJvbSAnLi4vYmFzZS1sYXllcic7XG5pbXBvcnQgbWVtb2l6ZSBmcm9tICdsb2Rhc2gubWVtb2l6ZSc7XG5pbXBvcnQge1RleHRMYXllcn0gZnJvbSAnZGVjay5nbCc7XG5pbXBvcnQgU2NhdHRlcnBsb3RCcnVzaGluZ0xheWVyIGZyb20gJ2RlY2tnbC1sYXllcnMvc2NhdHRlcnBsb3QtYnJ1c2hpbmctbGF5ZXIvc2NhdHRlcnBsb3QtYnJ1c2hpbmctbGF5ZXInO1xuaW1wb3J0IHVuaXEgZnJvbSAnbG9kYXNoLnVuaXEnO1xuaW1wb3J0IHtoZXhUb1JnYn0gZnJvbSAndXRpbHMvY29sb3ItdXRpbHMnO1xuaW1wb3J0IFBvaW50TGF5ZXJJY29uIGZyb20gJy4vcG9pbnQtbGF5ZXItaWNvbic7XG5pbXBvcnQge0RFRkFVTFRfTEFZRVJfQ09MT1J9IGZyb20gJ2NvbnN0YW50cy9kZWZhdWx0LXNldHRpbmdzJztcblxuZXhwb3J0IGNvbnN0IHBvaW50UG9zQWNjZXNzb3IgPSAoe2xhdCwgbG5nLCBhbHRpdHVkZX0pID0+IGQgPT4gW1xuICBkLmRhdGFbbG5nLmZpZWxkSWR4XSxcbiAgZC5kYXRhW2xhdC5maWVsZElkeF0sXG4gIGFsdGl0dWRlICYmIGFsdGl0dWRlLmZpZWxkSWR4ID4gLTEgPyBkLmRhdGFbYWx0aXR1ZGUuZmllbGRJZHhdIDogMFxuXTtcblxuZXhwb3J0IGNvbnN0IHBvaW50UG9zUmVzb2x2ZXIgPSAoe2xhdCwgbG5nLCBhbHRpdHVkZX0pID0+XG4gIGAke2xhdC5maWVsZElkeH0tJHtsbmcuZmllbGRJZHh9LSR7YWx0aXR1ZGUgPyBhbHRpdHVkZS5maWVsZElkeCA6ICd6J31gO1xuXG5leHBvcnQgY29uc3QgcG9pbnRMYWJlbEFjY2Vzc29yID0gdGV4dExhYmVsID0+IGQgPT4gU3RyaW5nKGQuZGF0YVt0ZXh0TGFiZWwuZmllbGQudGFibGVGaWVsZEluZGV4IC0gMV0pO1xuZXhwb3J0IGNvbnN0IHBvaW50TGFiZWxSZXNvbHZlciA9IHRleHRMYWJlbCA9PiB0ZXh0TGFiZWwuZmllbGQgJiYgdGV4dExhYmVsLmZpZWxkLnRhYmxlRmllbGRJbmRleDtcblxuZXhwb3J0IGNvbnN0IHBvaW50UmVxdWlyZWRDb2x1bW5zID0gWydsYXQnLCAnbG5nJ107XG5leHBvcnQgY29uc3QgcG9pbnRPcHRpb25hbENvbHVtbnMgPSBbJ2FsdGl0dWRlJ107XG5cbmV4cG9ydCBjb25zdCBwb2ludFZpc0NvbmZpZ3MgPSB7XG4gIHJhZGl1czogJ3JhZGl1cycsXG4gIGZpeGVkUmFkaXVzOiAnZml4ZWRSYWRpdXMnLFxuICBvcGFjaXR5OiAnb3BhY2l0eScsXG4gIG91dGxpbmU6ICdvdXRsaW5lJyxcbiAgdGhpY2tuZXNzOiAndGhpY2tuZXNzJyxcbiAgY29sb3JSYW5nZTogJ2NvbG9yUmFuZ2UnLFxuICByYWRpdXNSYW5nZTogJ3JhZGl1c1JhbmdlJyxcbiAgJ2hpLXByZWNpc2lvbic6ICdoaS1wcmVjaXNpb24nXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb2ludExheWVyIGV4dGVuZHMgTGF5ZXIge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMucmVnaXN0ZXJWaXNDb25maWcocG9pbnRWaXNDb25maWdzKTtcbiAgICB0aGlzLmdldFBvc2l0aW9uID0gbWVtb2l6ZShwb2ludFBvc0FjY2Vzc29yLCBwb2ludFBvc1Jlc29sdmVyKTtcbiAgICB0aGlzLmdldFRleHQgPSBtZW1vaXplKHBvaW50TGFiZWxBY2Nlc3NvciwgcG9pbnRMYWJlbFJlc29sdmVyKTtcbiAgfVxuXG4gIGdldCB0eXBlKCkge1xuICAgIHJldHVybiAncG9pbnQnO1xuICB9XG5cbiAgZ2V0IGlzQWdncmVnYXRlZCgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBnZXQgbGF5ZXJJY29uKCkge1xuICAgIHJldHVybiBQb2ludExheWVySWNvbjtcbiAgfVxuICBnZXQgcmVxdWlyZWRMYXllckNvbHVtbnMoKSB7XG4gICAgcmV0dXJuIHBvaW50UmVxdWlyZWRDb2x1bW5zO1xuICB9XG5cbiAgZ2V0IG9wdGlvbmFsQ29sdW1ucygpIHtcbiAgICByZXR1cm4gcG9pbnRPcHRpb25hbENvbHVtbnM7XG4gIH1cblxuICBnZXQgY29sdW1uUGFpcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVmYXVsdFBvaW50Q29sdW1uUGFpcnM7XG4gIH1cblxuICBnZXQgbm9uZUxheWVyRGF0YUFmZmVjdGluZ1Byb3BzKCkge1xuICAgIHJldHVybiBbLi4uc3VwZXIubm9uZUxheWVyRGF0YUFmZmVjdGluZ1Byb3BzLCAncmFkaXVzJ107XG4gIH1cblxuICBnZXQgdmlzdWFsQ2hhbm5lbHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnN1cGVyLnZpc3VhbENoYW5uZWxzLFxuICAgICAgc2l6ZToge1xuICAgICAgICAuLi5zdXBlci52aXN1YWxDaGFubmVscy5zaXplLFxuICAgICAgICByYW5nZTogJ3JhZGl1c1JhbmdlJyxcbiAgICAgICAgcHJvcGVydHk6ICdyYWRpdXMnLFxuICAgICAgICBjaGFubmVsU2NhbGVUeXBlOiAncmFkaXVzJ1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZmluZERlZmF1bHRMYXllclByb3BzKHtmaWVsZFBhaXJzID0gW119KSB7XG4gICAgY29uc3QgcHJvcHMgPSBbXTtcblxuICAgIC8vIE1ha2UgbGF5ZXIgZm9yIGVhY2ggcGFpclxuICAgIGZpZWxkUGFpcnMuZm9yRWFjaChwYWlyID0+IHtcbiAgICAgIC8vIGZpbmQgZmllbGRzIGZvciB0YWJsZUZpZWxkSW5kZXhcbiAgICAgIGNvbnN0IGxhdEZpZWxkID0gcGFpci5wYWlyLmxhdDtcbiAgICAgIGNvbnN0IGxuZ0ZpZWxkID0gcGFpci5wYWlyLmxuZztcbiAgICAgIGNvbnN0IGxheWVyTmFtZSA9IHBhaXIuZGVmYXVsdE5hbWU7XG5cbiAgICAgIGNvbnN0IHByb3AgPSB7XG4gICAgICAgIGxhYmVsOiBsYXllck5hbWUubGVuZ3RoID8gbGF5ZXJOYW1lIDogJ1BvaW50J1xuICAgICAgfTtcblxuICAgICAgLy8gZGVmYXVsdCBsYXllciBjb2xvciBmb3IgYmVnaW50cmlwIGFuZCBkcm9wb2ZmIHBvaW50XG4gICAgICBpZiAobGF0RmllbGQudmFsdWUgaW4gREVGQVVMVF9MQVlFUl9DT0xPUikge1xuICAgICAgICBwcm9wLmNvbG9yID0gaGV4VG9SZ2IoREVGQVVMVF9MQVlFUl9DT0xPUltsYXRGaWVsZC52YWx1ZV0pO1xuICAgICAgfVxuXG4gICAgICAvLyBzZXQgdGhlIGZpcnN0IGxheWVyIHRvIGJlIHZpc2libGVcbiAgICAgIGlmIChwcm9wcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcHJvcC5pc1Zpc2libGUgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICAvLyBjb25zdCBuZXdMYXllciA9IG5ldyBLZXBsZXJHbExheWVycy5Qb2ludExheWVyKHByb3ApO1xuICAgICAgcHJvcC5jb2x1bW5zID0ge1xuICAgICAgICBsYXQ6IGxhdEZpZWxkLFxuICAgICAgICBsbmc6IGxuZ0ZpZWxkLFxuICAgICAgICBhbHRpdHVkZToge3ZhbHVlOiBudWxsLCBmaWVsZElkeDogLTEsIG9wdGlvbmFsOiB0cnVlfVxuICAgICAgfTtcblxuICAgICAgcHJvcHMucHVzaChwcm9wKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBwcm9wcztcbiAgfVxuXG4gIGZvcm1hdExheWVyRGF0YShfLCBhbGxEYXRhLCBmaWx0ZXJlZEluZGV4LCBvbGRMYXllckRhdGEsIG9wdCA9IHt9KSB7XG4gICAgY29uc3Qge1xuICAgICAgY29sb3JTY2FsZSxcbiAgICAgIGNvbG9yRG9tYWluLFxuICAgICAgY29sb3JGaWVsZCxcbiAgICAgIGNvbG9yLFxuICAgICAgY29sdW1ucyxcbiAgICAgIHNpemVGaWVsZCxcbiAgICAgIHNpemVTY2FsZSxcbiAgICAgIHNpemVEb21haW4sXG4gICAgICB0ZXh0TGFiZWwsXG4gICAgICB2aXNDb25maWc6IHtyYWRpdXNSYW5nZSwgZml4ZWRSYWRpdXMsIGNvbG9yUmFuZ2V9XG4gICAgfSA9IHRoaXMuY29uZmlnO1xuXG4gICAgLy8gcG9pbnQgY29sb3JcbiAgICBjb25zdCBjU2NhbGUgPVxuICAgICAgY29sb3JGaWVsZCAmJlxuICAgICAgdGhpcy5nZXRWaXNDaGFubmVsU2NhbGUoXG4gICAgICAgIGNvbG9yU2NhbGUsXG4gICAgICAgIGNvbG9yRG9tYWluLFxuICAgICAgICBjb2xvclJhbmdlLmNvbG9ycy5tYXAoaGV4VG9SZ2IpXG4gICAgICApO1xuXG4gICAgLy8gcG9pbnQgcmFkaXVzXG4gICAgY29uc3QgclNjYWxlID1cbiAgICAgIHNpemVGaWVsZCAmJlxuICAgICAgdGhpcy5nZXRWaXNDaGFubmVsU2NhbGUoc2l6ZVNjYWxlLCBzaXplRG9tYWluLCByYWRpdXNSYW5nZSwgZml4ZWRSYWRpdXMpO1xuXG4gICAgY29uc3QgZ2V0UG9zaXRpb24gPSB0aGlzLmdldFBvc2l0aW9uKGNvbHVtbnMpO1xuXG4gICAgaWYgKCFvbGRMYXllckRhdGEgfHwgb2xkTGF5ZXJEYXRhLmdldFBvc2l0aW9uICE9PSBnZXRQb3NpdGlvbikge1xuICAgICAgdGhpcy51cGRhdGVMYXllck1ldGEoYWxsRGF0YSwgZ2V0UG9zaXRpb24pO1xuICAgIH1cblxuICAgIGxldCBkYXRhO1xuICAgIGlmIChcbiAgICAgIG9sZExheWVyRGF0YSAmJlxuICAgICAgb2xkTGF5ZXJEYXRhLmRhdGEgJiZcbiAgICAgIG9wdC5zYW1lRGF0YSAmJlxuICAgICAgb2xkTGF5ZXJEYXRhLmdldFBvc2l0aW9uID09PSBnZXRQb3NpdGlvblxuICAgICkge1xuICAgICAgZGF0YSA9IG9sZExheWVyRGF0YS5kYXRhO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXRhID0gZmlsdGVyZWRJbmRleC5yZWR1Y2UoKGFjY3UsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHBvcyA9IGdldFBvc2l0aW9uKHtkYXRhOiBhbGxEYXRhW2luZGV4XX0pO1xuXG4gICAgICAgIC8vIGlmIGRvZXNuJ3QgaGF2ZSBwb2ludCBsYXQgb3IgbG5nLCBkbyBub3QgYWRkIHRoZSBwb2ludFxuICAgICAgICAvLyBkZWNrLmdsIGNhbid0IGhhbmRsZSBwb3NpdGlvbiA9IG51bGxcbiAgICAgICAgaWYgKCFwb3MuZXZlcnkoTnVtYmVyLmlzRmluaXRlKSkge1xuICAgICAgICAgIHJldHVybiBhY2N1O1xuICAgICAgICB9XG5cbiAgICAgICAgYWNjdS5wdXNoKHtcbiAgICAgICAgICBkYXRhOiBhbGxEYXRhW2luZGV4XVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gYWNjdTtcbiAgICAgIH0sIFtdKTtcbiAgICB9XG5cbiAgICAvLyBnZXQgYWxsIGRpc3RpbmN0IGNoYXJhY3RlcnMgaW4gdGhlIHRleHQgbGFiZWxzXG4gICAgY29uc3QgZ2V0VGV4dCA9IHRoaXMuZ2V0VGV4dCh0ZXh0TGFiZWwpO1xuICAgIGxldCBsYWJlbENoYXJhY3RlclNldDtcbiAgICBpZiAoXG4gICAgICBvbGRMYXllckRhdGEgJiZcbiAgICAgIG9sZExheWVyRGF0YS5sYWJlbENoYXJhY3RlclNldCAmJlxuICAgICAgb3B0LnNhbWVEYXRhICYmXG4gICAgICBvbGRMYXllckRhdGEuZ2V0VGV4dCA9PT0gZ2V0VGV4dFxuICAgICkge1xuICAgICAgbGFiZWxDaGFyYWN0ZXJTZXQgPSBvbGRMYXllckRhdGEubGFiZWxDaGFyYWN0ZXJTZXRcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdGV4dExhYmVscyA9IHRleHRMYWJlbC5maWVsZCA/IGRhdGEubWFwKGdldFRleHQpIDogW107XG4gICAgICBsYWJlbENoYXJhY3RlclNldCA9IHVuaXEodGV4dExhYmVscy5qb2luKCcnKSk7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0UmFkaXVzID0gclNjYWxlID8gZCA9PlxuICAgICAgdGhpcy5nZXRFbmNvZGVkQ2hhbm5lbFZhbHVlKHJTY2FsZSwgZC5kYXRhLCBzaXplRmllbGQpIDogMTtcblxuICAgIGNvbnN0IGdldENvbG9yID0gY1NjYWxlID8gZCA9PlxuICAgICAgdGhpcy5nZXRFbmNvZGVkQ2hhbm5lbFZhbHVlKGNTY2FsZSwgZC5kYXRhLCBjb2xvckZpZWxkKSA6IGNvbG9yO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGRhdGEsXG4gICAgICBsYWJlbENoYXJhY3RlclNldCxcbiAgICAgIGdldFBvc2l0aW9uLFxuICAgICAgZ2V0Q29sb3IsXG4gICAgICBnZXRSYWRpdXMsXG4gICAgICBnZXRUZXh0XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZUxheWVyTWV0YShhbGxEYXRhLCBnZXRQb3NpdGlvbikge1xuICAgIGNvbnN0IGJvdW5kcyA9IHRoaXMuZ2V0UG9pbnRzQm91bmRzKGFsbERhdGEsIGQgPT4gZ2V0UG9zaXRpb24oe2RhdGE6IGR9KSk7XG4gICAgdGhpcy51cGRhdGVNZXRhKHtib3VuZHN9KTtcbiAgfVxuXG4gIHJlbmRlckxheWVyKHtcbiAgICBkYXRhLFxuICAgIGlkeCxcbiAgICBsYXllckludGVyYWN0aW9uLFxuICAgIG9iamVjdEhvdmVyZWQsXG4gICAgbWFwU3RhdGUsXG4gICAgaW50ZXJhY3Rpb25Db25maWdcbiAgfSkge1xuICAgIGNvbnN0IGVuYWJsZUJydXNoaW5nID0gaW50ZXJhY3Rpb25Db25maWcuYnJ1c2guZW5hYmxlZDtcblxuICAgIGNvbnN0IGxheWVyUHJvcHMgPSB7XG4gICAgICBvdXRsaW5lOiB0aGlzLmNvbmZpZy52aXNDb25maWcub3V0bGluZSxcbiAgICAgIHJhZGl1c01pblBpeGVsczogMSxcbiAgICAgIGZwNjQ6IHRoaXMuY29uZmlnLnZpc0NvbmZpZ1snaGktcHJlY2lzaW9uJ10sXG4gICAgICBzdHJva2VXaWR0aDogdGhpcy5jb25maWcudmlzQ29uZmlnLnRoaWNrbmVzcyxcbiAgICAgIHJhZGl1c1NjYWxlOiB0aGlzLmdldFJhZGl1c1NjYWxlQnlab29tKG1hcFN0YXRlKSxcbiAgICAgIC4uLih0aGlzLmNvbmZpZy52aXNDb25maWcuZml4ZWRSYWRpdXMgPyB7fSA6IHtyYWRpdXNNYXhQaXhlbHM6IDUwMH0pXG4gICAgfTtcblxuICAgIGNvbnN0IGludGVyYWN0aW9uID0ge1xuICAgICAgYXV0b0hpZ2hsaWdodDogIWVuYWJsZUJydXNoaW5nLFxuICAgICAgZW5hYmxlQnJ1c2hpbmcsXG4gICAgICBicnVzaFJhZGl1czogaW50ZXJhY3Rpb25Db25maWcuYnJ1c2guY29uZmlnLnNpemUgKiAxMDAwLFxuICAgICAgaGlnaGxpZ2h0Q29sb3I6IHRoaXMuY29uZmlnLmhpZ2hsaWdodENvbG9yXG4gICAgfTtcblxuICAgIHJldHVybiBbXG4gICAgICBuZXcgU2NhdHRlcnBsb3RCcnVzaGluZ0xheWVyKHtcbiAgICAgICAgLi4ubGF5ZXJQcm9wcyxcbiAgICAgICAgLi4ubGF5ZXJJbnRlcmFjdGlvbixcbiAgICAgICAgLi4uZGF0YSxcbiAgICAgICAgLi4uaW50ZXJhY3Rpb24sXG4gICAgICAgIGlkeCxcbiAgICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICAgIG9wYWNpdHk6IHRoaXMuY29uZmlnLnZpc0NvbmZpZy5vcGFjaXR5LFxuICAgICAgICBwaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgcGFyYW1ldGVyczoge1xuICAgICAgICAgIC8vIGNpcmNsZXMgd2lsbCBiZSBmbGF0IG9uIHRoZSBtYXAgd2hlbiB0aGUgYWx0aXR1ZGUgY29sdW1uIGlzIG5vdCB1c2VkXG4gICAgICAgICAgZGVwdGhUZXN0OiB0aGlzLmNvbmZpZy5jb2x1bW5zLmFsdGl0dWRlLmZpZWxkSWR4ID4gLTFcbiAgICAgICAgfSxcblxuICAgICAgICB1cGRhdGVUcmlnZ2Vyczoge1xuICAgICAgICAgIGdldFJhZGl1czoge1xuICAgICAgICAgICAgc2l6ZUZpZWxkOiB0aGlzLmNvbmZpZy5zaXplRmllbGQsXG4gICAgICAgICAgICByYWRpdXNSYW5nZTogdGhpcy5jb25maWcudmlzQ29uZmlnLnJhZGl1c1JhbmdlLFxuICAgICAgICAgICAgZml4ZWRSYWRpdXM6IHRoaXMuY29uZmlnLnZpc0NvbmZpZy5maXhlZFJhZGl1cyxcbiAgICAgICAgICAgIHNpemVTY2FsZTogdGhpcy5jb25maWcuc2l6ZVNjYWxlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBnZXRDb2xvcjoge1xuICAgICAgICAgICAgY29sb3I6IHRoaXMuY29uZmlnLmNvbG9yLFxuICAgICAgICAgICAgY29sb3JGaWVsZDogdGhpcy5jb25maWcuY29sb3JGaWVsZCxcbiAgICAgICAgICAgIGNvbG9yUmFuZ2U6IHRoaXMuY29uZmlnLnZpc0NvbmZpZy5jb2xvclJhbmdlLFxuICAgICAgICAgICAgY29sb3JTY2FsZTogdGhpcy5jb25maWcuY29sb3JTY2FsZVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICAvLyB0ZXh0IGxhYmVsIGxheWVyXG4gICAgICAuLi4odGhpcy5jb25maWcudGV4dExhYmVsLmZpZWxkXG4gICAgICAgID8gW1xuICAgICAgICAgICAgbmV3IFRleHRMYXllcih7XG4gICAgICAgICAgICAgIGlkOiBgJHt0aGlzLmlkfS1sYWJlbGAsXG4gICAgICAgICAgICAgIGRhdGE6IGRhdGEuZGF0YSxcbiAgICAgICAgICAgICAgZ2V0UG9zaXRpb246IGRhdGEuZ2V0UG9zaXRpb24sXG4gICAgICAgICAgICAgIGdldFBpeGVsT2Zmc2V0OiB0aGlzLmNvbmZpZy50ZXh0TGFiZWwub2Zmc2V0LFxuICAgICAgICAgICAgICBnZXRTaXplOiB0aGlzLmNvbmZpZy50ZXh0TGFiZWwuc2l6ZSxcbiAgICAgICAgICAgICAgZ2V0VGV4dEFuY2hvcjogdGhpcy5jb25maWcudGV4dExhYmVsLmFuY2hvcixcbiAgICAgICAgICAgICAgZ2V0VGV4dDogZGF0YS5nZXRUZXh0LFxuICAgICAgICAgICAgICBnZXRDb2xvcjogZCA9PiB0aGlzLmNvbmZpZy50ZXh0TGFiZWwuY29sb3IsXG4gICAgICAgICAgICAgIGZwNjQ6IHRoaXMuY29uZmlnLnZpc0NvbmZpZ1snaGktcHJlY2lzaW9uJ10sXG4gICAgICAgICAgICAgIHBhcmFtZXRlcnM6IHtcbiAgICAgICAgICAgICAgICAvLyB0ZXh0IHdpbGwgYWx3YXlzIHNob3cgb24gdG9wIG9mIGFsbCBsYXllcnNcbiAgICAgICAgICAgICAgICBkZXB0aFRlc3Q6IGZhbHNlXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGNoYXJhY3RlclNldDogZGF0YS5sYWJlbENoYXJhY3RlclNldCxcbiAgICAgICAgICAgICAgdXBkYXRlVHJpZ2dlcnM6IHtcbiAgICAgICAgICAgICAgICBnZXRQb3NpdGlvbjogZGF0YS5nZXRQb3NpdGlvbixcbiAgICAgICAgICAgICAgICBnZXRQaXhlbE9mZnNldDogdGhpcy5jb25maWcudGV4dExhYmVsLm9mZnNldCxcbiAgICAgICAgICAgICAgICBnZXRUZXh0OiB0aGlzLmNvbmZpZy50ZXh0TGFiZWwuZmllbGQsXG4gICAgICAgICAgICAgICAgZ2V0VGV4dEFuY2hvcjogdGhpcy5jb25maWcudGV4dExhYmVsLmFuY2hvcixcbiAgICAgICAgICAgICAgICBnZXRTaXplOiB0aGlzLmNvbmZpZy50ZXh0TGFiZWwuc2l6ZSxcbiAgICAgICAgICAgICAgICBnZXRDb2xvcjogdGhpcy5jb25maWcudGV4dExhYmVsLmNvbG9yXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXVxuICAgICAgICA6IFtdKVxuICAgIF07XG4gIH1cbn1cbiJdfQ==
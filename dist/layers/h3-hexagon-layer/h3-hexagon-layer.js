'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.HexagonIdVisConfigs = exports.hexIdResolver = exports.hexIdAccessor = exports.hexIdRequiredColumns = exports.HEXAGON_ID_FIELDS = undefined;

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

var _lodash = require('lodash.memoize');

var _lodash2 = _interopRequireDefault(_lodash);

var _baseLayer = require('../base-layer');

var _baseLayer2 = _interopRequireDefault(_baseLayer);

var _deck = require('deck.gl');

var _h3HexagonCellLayer = require('../../deckgl-layers/h3-hexagon-cell-layer/h3-hexagon-cell-layer');

var _h3HexagonCellLayer2 = _interopRequireDefault(_h3HexagonCellLayer);

var _h3Utils = require('./h3-utils');

var _h3HexagonLayerIcon = require('./h3-hexagon-layer-icon');

var _h3HexagonLayerIcon2 = _interopRequireDefault(_h3HexagonLayerIcon);

var _defaultSettings = require('../../constants/default-settings');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HEXAGON_ID_FIELDS = exports.HEXAGON_ID_FIELDS = {
  hex_id: ['hex_id', 'hexagon_id', 'h3_id']
}; // Copyright (c) 2019 Uber Technologies, Inc.
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

var hexIdRequiredColumns = exports.hexIdRequiredColumns = ['hex_id'];
var hexIdAccessor = exports.hexIdAccessor = function hexIdAccessor(_ref) {
  var hex_id = _ref.hex_id;
  return function (d) {
    return d[hex_id.fieldIdx];
  };
};
var hexIdResolver = exports.hexIdResolver = function hexIdResolver(_ref2) {
  var hex_id = _ref2.hex_id;
  return hex_id.fieldIdx;
};

var HexagonIdVisConfigs = exports.HexagonIdVisConfigs = {
  opacity: 'opacity',
  colorRange: 'colorRange',
  coverage: 'coverage',
  sizeRange: 'elevationRange',
  coverageRange: 'coverageRange',
  elevationScale: 'elevationScale',
  'hi-precision': 'hi-precision'
};

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  var r = parseInt(result[1], 16);
  var g = parseInt(result[2], 16);
  var b = parseInt(result[3], 16);

  return [r, g, b];
}

var HexagonIdLayer = function (_Layer) {
  (0, _inherits3.default)(HexagonIdLayer, _Layer);

  function HexagonIdLayer(props) {
    (0, _classCallCheck3.default)(this, HexagonIdLayer);

    var _this = (0, _possibleConstructorReturn3.default)(this, (HexagonIdLayer.__proto__ || Object.getPrototypeOf(HexagonIdLayer)).call(this, props));

    _this.registerVisConfig(HexagonIdVisConfigs);
    _this.getHexId = (0, _lodash2.default)(hexIdAccessor, hexIdResolver);
    return _this;
  }

  (0, _createClass3.default)(HexagonIdLayer, [{
    key: 'getDefaultLayerConfig',
    value: function getDefaultLayerConfig() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return (0, _extends3.default)({}, (0, _get3.default)(HexagonIdLayer.prototype.__proto__ || Object.getPrototypeOf(HexagonIdLayer.prototype), 'getDefaultLayerConfig', this).call(this, props), {

        // add height visual channel
        coverageField: null,
        coverageDomain: [0, 1],
        coverageScale: 'linear'
      });
    }
  }, {
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
          coverageField = _config.coverageField,
          coverageScale = _config.coverageScale,
          coverageDomain = _config.coverageDomain,
          _config$visConfig = _config.visConfig,
          sizeRange = _config$visConfig.sizeRange,
          colorRange = _config$visConfig.colorRange,
          coverageRange = _config$visConfig.coverageRange;

      // color

      var cScale = colorField && this.getVisChannelScale(colorScale, colorDomain, colorRange.colors.map(function (c) {
        return hexToRgb(c);
      }));

      // height
      var sScale = sizeField && this.getVisChannelScale(sizeScale, sizeDomain, sizeRange);

      // coverage
      var coScale = coverageField && this.getVisChannelScale(coverageScale, coverageDomain, coverageRange);

      var getHexId = this.getHexId(columns);

      if (!oldLayerData || oldLayerData.getHexId !== getHexId) {
        this.updateLayerMeta(allData, getHexId);
      }

      var data = void 0;
      if (oldLayerData && oldLayerData.data && opt.sameData && oldLayerData.getHexId === getHexId) {
        data = oldLayerData.data;
      } else {
        data = filteredIndex.reduce(function (accu, index, i) {
          var id = getHexId(allData[index]);
          var centroid = _this2.dataToFeature.centroids[index];

          if (centroid) {
            accu.push({
              // keep a reference to the original data index
              index: i,
              data: allData[index],
              id: id,
              centroid: centroid
            });
          }

          return accu;
        }, []);
      }

      var getElevation = sScale ? function (d) {
        return _this2.getEncodedChannelValue(sScale, d.data, sizeField, 0);
      } : 0;

      var getColor = cScale ? function (d) {
        return _this2.getEncodedChannelValue(cScale, d.data, colorField);
      } : color;

      var getCoverage = coScale ? function (d) {
        return _this2.getEncodedChannelValue(coScale, d.data, coverageField, 0);
      } : 1;

      // const layerData = {
      return {
        data: data,
        getElevation: getElevation,
        getColor: getColor,
        getHexId: getHexId,
        getCoverage: getCoverage,
        hexagonVertices: this.dataToFeature.hexagonVertices,
        hexagonCenter: this.dataToFeature.hexagonCenter
      };
    }
  }, {
    key: 'updateLayerMeta',
    value: function updateLayerMeta(allData, getHexId) {
      var hexagonVertices = void 0;
      var hexagonCenter = void 0;
      var centroids = {};

      allData.forEach(function (d, index) {
        var id = getHexId(d);
        if (typeof id !== 'string' || !id.length) {
          return;
        }
        // find hexagonVertices
        // only need 1 instance of hexagonVertices
        if (!hexagonVertices) {
          hexagonVertices = id && (0, _h3Utils.getVertices)({ id: id });
          hexagonCenter = id && (0, _h3Utils.getCentroid)({ id: id });
        }

        // save a reference of centroids to dataToFeature
        // so we don't have to re calculate it again
        centroids[index] = (0, _h3Utils.getCentroid)({ id: id });
      });

      var bounds = this.getPointsBounds(Object.values(centroids), function (d) {
        return d;
      });
      var lightSettings = this.getLightSettingsFromBounds(bounds);

      this.dataToFeature = { hexagonVertices: hexagonVertices, hexagonCenter: hexagonCenter, centroids: centroids };
      this.updateMeta({ bounds: bounds, lightSettings: lightSettings });
    }
  }, {
    key: 'renderLayer',
    value: function renderLayer(_ref3) {
      var data = _ref3.data,
          idx = _ref3.idx,
          layerInteraction = _ref3.layerInteraction,
          objectHovered = _ref3.objectHovered,
          mapState = _ref3.mapState,
          interactionConfig = _ref3.interactionConfig;

      var zoomFactor = this.getZoomFactor(mapState);
      var eleZoomFactor = this.getElevationZoomFactor(mapState);
      var config = this.config,
          meta = this.meta;
      var visConfig = config.visConfig;


      var updateTriggers = {
        getColor: {
          color: config.color,
          colorField: config.colorField,
          colorRange: config.visConfig.colorRange,
          colorScale: config.colorScale
        },
        getElevation: {
          sizeField: config.sizeField,
          sizeRange: config.visConfig.sizeRange
        },
        getCoverage: {
          coverageField: config.coverageField,
          coverageRange: config.visConfig.coverageRange
        }
      };

      return [new _h3HexagonCellLayer2.default((0, _extends3.default)({}, layerInteraction, data, {
        id: this.id,
        idx: idx,
        pickable: true,

        // coverage
        coverage: config.coverageField ? 1 : visConfig.coverage,

        // parameters
        parameters: { depthTest: Boolean(config.sizeField || mapState.dragRotate) },

        // highlight
        autoHighlight: Boolean(config.sizeField),

        // elevation
        extruded: Boolean(config.sizeField),
        elevationScale: visConfig.elevationScale * eleZoomFactor,

        // color
        opacity: visConfig.opacity,

        // render
        lightSettings: meta.lightSettings,
        updateTriggers: updateTriggers
      }))].concat((0, _toConsumableArray3.default)(this.isLayerHovered(objectHovered) && !config.sizeField ? [new _deck.GeoJsonLayer({
        id: this.id + '-hovered',
        data: [(0, _h3Utils.idToPolygonGeo)(objectHovered)],
        getLineColor: config.highlightColor,
        lineWidthScale: 8 * zoomFactor
      })] : []));
    }
  }, {
    key: 'type',
    get: function get() {
      return 'hexagonId';
    }
  }, {
    key: 'name',
    get: function get() {
      return 'H3';
    }
  }, {
    key: 'requiredLayerColumns',
    get: function get() {
      return hexIdRequiredColumns;
    }
  }, {
    key: 'layerIcon',
    get: function get() {
      // use hexagon layer icon for now
      return _h3HexagonLayerIcon2.default;
    }
  }, {
    key: 'visualChannels',
    get: function get() {
      return (0, _extends3.default)({}, (0, _get3.default)(HexagonIdLayer.prototype.__proto__ || Object.getPrototypeOf(HexagonIdLayer.prototype), 'visualChannels', this), {
        size: (0, _extends3.default)({}, (0, _get3.default)(HexagonIdLayer.prototype.__proto__ || Object.getPrototypeOf(HexagonIdLayer.prototype), 'visualChannels', this).size, {
          property: 'height'
        }),
        coverage: {
          property: 'coverage',
          field: 'coverageField',
          scale: 'coverageScale',
          domain: 'coverageDomain',
          range: 'coverageRange',
          key: 'coverage',
          channelScaleType: _defaultSettings.CHANNEL_SCALES.radius
        }
      });
    }
  }], [{
    key: 'findDefaultLayerProps',
    value: function findDefaultLayerProps(_ref4) {
      var fields = _ref4.fields;

      var foundColumns = this.findDefaultColumnField(HEXAGON_ID_FIELDS, fields);
      if (!foundColumns || !foundColumns.length) {
        return null;
      }

      return foundColumns.map(function (columns) {
        return {
          isVisible: true,
          label: 'H3 Hexagon',
          columns: columns
        };
      });
    }
  }]);
  return HexagonIdLayer;
}(_baseLayer2.default);

exports.default = HexagonIdLayer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9sYXllcnMvaDMtaGV4YWdvbi1sYXllci9oMy1oZXhhZ29uLWxheWVyLmpzIl0sIm5hbWVzIjpbIkhFWEFHT05fSURfRklFTERTIiwiaGV4X2lkIiwiaGV4SWRSZXF1aXJlZENvbHVtbnMiLCJoZXhJZEFjY2Vzc29yIiwiZCIsImZpZWxkSWR4IiwiaGV4SWRSZXNvbHZlciIsIkhleGFnb25JZFZpc0NvbmZpZ3MiLCJvcGFjaXR5IiwiY29sb3JSYW5nZSIsImNvdmVyYWdlIiwic2l6ZVJhbmdlIiwiY292ZXJhZ2VSYW5nZSIsImVsZXZhdGlvblNjYWxlIiwiaGV4VG9SZ2IiLCJoZXgiLCJyZXN1bHQiLCJleGVjIiwiciIsInBhcnNlSW50IiwiZyIsImIiLCJIZXhhZ29uSWRMYXllciIsInByb3BzIiwicmVnaXN0ZXJWaXNDb25maWciLCJnZXRIZXhJZCIsImNvdmVyYWdlRmllbGQiLCJjb3ZlcmFnZURvbWFpbiIsImNvdmVyYWdlU2NhbGUiLCJfIiwiYWxsRGF0YSIsImZpbHRlcmVkSW5kZXgiLCJvbGRMYXllckRhdGEiLCJvcHQiLCJjb25maWciLCJjb2xvclNjYWxlIiwiY29sb3JEb21haW4iLCJjb2xvckZpZWxkIiwiY29sb3IiLCJjb2x1bW5zIiwic2l6ZUZpZWxkIiwic2l6ZVNjYWxlIiwic2l6ZURvbWFpbiIsInZpc0NvbmZpZyIsImNTY2FsZSIsImdldFZpc0NoYW5uZWxTY2FsZSIsImNvbG9ycyIsIm1hcCIsImMiLCJzU2NhbGUiLCJjb1NjYWxlIiwidXBkYXRlTGF5ZXJNZXRhIiwiZGF0YSIsInNhbWVEYXRhIiwicmVkdWNlIiwiYWNjdSIsImluZGV4IiwiaSIsImlkIiwiY2VudHJvaWQiLCJkYXRhVG9GZWF0dXJlIiwiY2VudHJvaWRzIiwicHVzaCIsImdldEVsZXZhdGlvbiIsImdldEVuY29kZWRDaGFubmVsVmFsdWUiLCJnZXRDb2xvciIsImdldENvdmVyYWdlIiwiaGV4YWdvblZlcnRpY2VzIiwiaGV4YWdvbkNlbnRlciIsImZvckVhY2giLCJsZW5ndGgiLCJib3VuZHMiLCJnZXRQb2ludHNCb3VuZHMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJsaWdodFNldHRpbmdzIiwiZ2V0TGlnaHRTZXR0aW5nc0Zyb21Cb3VuZHMiLCJ1cGRhdGVNZXRhIiwiaWR4IiwibGF5ZXJJbnRlcmFjdGlvbiIsIm9iamVjdEhvdmVyZWQiLCJtYXBTdGF0ZSIsImludGVyYWN0aW9uQ29uZmlnIiwiem9vbUZhY3RvciIsImdldFpvb21GYWN0b3IiLCJlbGVab29tRmFjdG9yIiwiZ2V0RWxldmF0aW9uWm9vbUZhY3RvciIsIm1ldGEiLCJ1cGRhdGVUcmlnZ2VycyIsIkgzSGV4YWdvbkNlbGxMYXllciIsInBpY2thYmxlIiwicGFyYW1ldGVycyIsImRlcHRoVGVzdCIsIkJvb2xlYW4iLCJkcmFnUm90YXRlIiwiYXV0b0hpZ2hsaWdodCIsImV4dHJ1ZGVkIiwiaXNMYXllckhvdmVyZWQiLCJHZW9Kc29uTGF5ZXIiLCJnZXRMaW5lQ29sb3IiLCJoaWdobGlnaHRDb2xvciIsImxpbmVXaWR0aFNjYWxlIiwiSDNIZXhhZ29uTGF5ZXJJY29uIiwic2l6ZSIsInByb3BlcnR5IiwiZmllbGQiLCJzY2FsZSIsImRvbWFpbiIsInJhbmdlIiwia2V5IiwiY2hhbm5lbFNjYWxlVHlwZSIsIkNIQU5ORUxfU0NBTEVTIiwicmFkaXVzIiwiZmllbGRzIiwiZm91bmRDb2x1bW5zIiwiZmluZERlZmF1bHRDb2x1bW5GaWVsZCIsImlzVmlzaWJsZSIsImxhYmVsIiwiTGF5ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOzs7O0FBRUE7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFFTyxJQUFNQSxnREFBb0I7QUFDL0JDLFVBQVEsQ0FBQyxRQUFELEVBQVcsWUFBWCxFQUF5QixPQUF6QjtBQUR1QixDQUExQixDLENBN0JQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QixhQUFPakYsb0JBQVA7QUFDRDs7O3dCQUVlO0FBQ2Q7QUFDQSxhQUFPb0csNEJBQVA7QUFDRDs7O3dCQUVvQjtBQUNuQjtBQUVFQyx5Q0FDSyxrSUFBcUJBLElBRDFCO0FBRUVDLG9CQUFVO0FBRlosVUFGRjtBQU1FOUYsa0JBQVU7QUFDUjhGLG9CQUFVLFVBREY7QUFFUkMsaUJBQU8sZUFGQztBQUdSQyxpQkFBTyxlQUhDO0FBSVJDLGtCQUFRLGdCQUpBO0FBS1JDLGlCQUFPLGVBTEM7QUFNUkMsZUFBSyxVQU5HO0FBT1JDLDRCQUFrQkMsZ0NBQWVDO0FBUHpCO0FBTlo7QUFnQkQ7OztpREFFc0M7QUFBQSxVQUFUQyxNQUFTLFNBQVRBLE1BQVM7O0FBQ3JDLFVBQU1DLGVBQWUsS0FBS0Msc0JBQUwsQ0FBNEJuSCxpQkFBNUIsRUFBK0NpSCxNQUEvQyxDQUFyQjtBQUNBLFVBQUksQ0FBQ0MsWUFBRCxJQUFpQixDQUFDQSxhQUFhNUMsTUFBbkMsRUFBMkM7QUFDekMsZUFBTyxJQUFQO0FBQ0Q7O0FBRUQsYUFBTzRDLGFBQWFuRSxHQUFiLENBQWlCO0FBQUEsZUFBWTtBQUNsQ3FFLHFCQUFXLElBRHVCO0FBRWxDQyxpQkFBTyxZQUYyQjtBQUdsQzlFO0FBSGtDLFNBQVo7QUFBQSxPQUFqQixDQUFQO0FBS0Q7OztFQXREeUMrRSxtQjs7a0JBQXZCaEcsYyIsImZpbGUiOiJoMy1oZXhhZ29uLWxheWVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDE5IFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IG1lbW9pemUgZnJvbSAnbG9kYXNoLm1lbW9pemUnO1xuXG5pbXBvcnQgTGF5ZXIgZnJvbSAnLi4vYmFzZS1sYXllcic7XG5pbXBvcnQge0dlb0pzb25MYXllcn0gZnJvbSAnZGVjay5nbCc7XG5pbXBvcnQgSDNIZXhhZ29uQ2VsbExheWVyIGZyb20gJ2RlY2tnbC1sYXllcnMvaDMtaGV4YWdvbi1jZWxsLWxheWVyL2gzLWhleGFnb24tY2VsbC1sYXllcic7XG5pbXBvcnQge2dldFZlcnRpY2VzLCBnZXRDZW50cm9pZCwgaWRUb1BvbHlnb25HZW99IGZyb20gJy4vaDMtdXRpbHMnO1xuaW1wb3J0IEgzSGV4YWdvbkxheWVySWNvbiBmcm9tICcuL2gzLWhleGFnb24tbGF5ZXItaWNvbic7XG5pbXBvcnQge0NIQU5ORUxfU0NBTEVTfSBmcm9tICdjb25zdGFudHMvZGVmYXVsdC1zZXR0aW5ncyc7XG5cbmV4cG9ydCBjb25zdCBIRVhBR09OX0lEX0ZJRUxEUyA9IHtcbiAgaGV4X2lkOiBbJ2hleF9pZCcsICdoZXhhZ29uX2lkJywgJ2gzX2lkJ11cbn07XG5cbmV4cG9ydCBjb25zdCBoZXhJZFJlcXVpcmVkQ29sdW1ucyA9IFsnaGV4X2lkJ107XG5leHBvcnQgY29uc3QgaGV4SWRBY2Nlc3NvciA9ICh7aGV4X2lkfSkgPT4gZCA9PiBkW2hleF9pZC5maWVsZElkeF07XG5leHBvcnQgY29uc3QgaGV4SWRSZXNvbHZlciA9ICh7aGV4X2lkfSkgPT4gaGV4X2lkLmZpZWxkSWR4O1xuXG5leHBvcnQgY29uc3QgSGV4YWdvbklkVmlzQ29uZmlncyA9IHtcbiAgb3BhY2l0eTogJ29wYWNpdHknLFxuICBjb2xvclJhbmdlOiAnY29sb3JSYW5nZScsXG4gIGNvdmVyYWdlOiAnY292ZXJhZ2UnLFxuICBzaXplUmFuZ2U6ICdlbGV2YXRpb25SYW5nZScsXG4gIGNvdmVyYWdlUmFuZ2U6ICdjb3ZlcmFnZVJhbmdlJyxcbiAgZWxldmF0aW9uU2NhbGU6ICdlbGV2YXRpb25TY2FsZScsXG4gICdoaS1wcmVjaXNpb24nOiAnaGktcHJlY2lzaW9uJ1xufTtcblxuZnVuY3Rpb24gaGV4VG9SZ2IoaGV4KSB7XG4gIGNvbnN0IHJlc3VsdCA9IC9eIz8oW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkkL2kuZXhlYyhoZXgpO1xuXG4gIGNvbnN0IHIgPSBwYXJzZUludChyZXN1bHRbMV0sIDE2KTtcbiAgY29uc3QgZyA9IHBhcnNlSW50KHJlc3VsdFsyXSwgMTYpO1xuICBjb25zdCBiID0gcGFyc2VJbnQocmVzdWx0WzNdLCAxNik7XG5cbiAgcmV0dXJuIFtyLCBnLCBiXTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGV4YWdvbklkTGF5ZXIgZXh0ZW5kcyBMYXllciB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMucmVnaXN0ZXJWaXNDb25maWcoSGV4YWdvbklkVmlzQ29uZmlncyk7XG4gICAgdGhpcy5nZXRIZXhJZCA9IG1lbW9pemUoaGV4SWRBY2Nlc3NvciwgaGV4SWRSZXNvbHZlcik7XG4gIH1cblxuICBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gJ2hleGFnb25JZCc7XG4gIH1cblxuICBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gJ0gzJztcbiAgfVxuXG4gIGdldCByZXF1aXJlZExheWVyQ29sdW1ucygpIHtcbiAgICByZXR1cm4gaGV4SWRSZXF1aXJlZENvbHVtbnM7XG4gIH1cblxuICBnZXQgbGF5ZXJJY29uKCkge1xuICAgIC8vIHVzZSBoZXhhZ29uIGxheWVyIGljb24gZm9yIG5vd1xuICAgIHJldHVybiBIM0hleGFnb25MYXllckljb247XG4gIH1cblxuICBnZXQgdmlzdWFsQ2hhbm5lbHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnN1cGVyLnZpc3VhbENoYW5uZWxzLFxuICAgICAgc2l6ZToge1xuICAgICAgICAuLi5zdXBlci52aXN1YWxDaGFubmVscy5zaXplLFxuICAgICAgICBwcm9wZXJ0eTogJ2hlaWdodCdcbiAgICAgIH0sXG4gICAgICBjb3ZlcmFnZToge1xuICAgICAgICBwcm9wZXJ0eTogJ2NvdmVyYWdlJyxcbiAgICAgICAgZmllbGQ6ICdjb3ZlcmFnZUZpZWxkJyxcbiAgICAgICAgc2NhbGU6ICdjb3ZlcmFnZVNjYWxlJyxcbiAgICAgICAgZG9tYWluOiAnY292ZXJhZ2VEb21haW4nLFxuICAgICAgICByYW5nZTogJ2NvdmVyYWdlUmFuZ2UnLFxuICAgICAgICBrZXk6ICdjb3ZlcmFnZScsXG4gICAgICAgIGNoYW5uZWxTY2FsZVR5cGU6IENIQU5ORUxfU0NBTEVTLnJhZGl1c1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZmluZERlZmF1bHRMYXllclByb3BzKHtmaWVsZHN9KSB7XG4gICAgY29uc3QgZm91bmRDb2x1bW5zID0gdGhpcy5maW5kRGVmYXVsdENvbHVtbkZpZWxkKEhFWEFHT05fSURfRklFTERTLCBmaWVsZHMpO1xuICAgIGlmICghZm91bmRDb2x1bW5zIHx8ICFmb3VuZENvbHVtbnMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gZm91bmRDb2x1bW5zLm1hcChjb2x1bW5zID0+ICh7XG4gICAgICBpc1Zpc2libGU6IHRydWUsXG4gICAgICBsYWJlbDogJ0gzIEhleGFnb24nLFxuICAgICAgY29sdW1uc1xuICAgIH0pKTtcbiAgfVxuXG4gIGdldERlZmF1bHRMYXllckNvbmZpZyhwcm9wcyA9IHt9KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnN1cGVyLmdldERlZmF1bHRMYXllckNvbmZpZyhwcm9wcyksXG5cbiAgICAgIC8vIGFkZCBoZWlnaHQgdmlzdWFsIGNoYW5uZWxcbiAgICAgIGNvdmVyYWdlRmllbGQ6IG51bGwsXG4gICAgICBjb3ZlcmFnZURvbWFpbjogWzAsIDFdLFxuICAgICAgY292ZXJhZ2VTY2FsZTogJ2xpbmVhcidcbiAgICB9O1xuICB9XG5cbiAgZm9ybWF0TGF5ZXJEYXRhKF8sIGFsbERhdGEsIGZpbHRlcmVkSW5kZXgsIG9sZExheWVyRGF0YSwgb3B0ID0ge30pIHtcbiAgICBjb25zdCB7XG4gICAgICBjb2xvclNjYWxlLFxuICAgICAgY29sb3JEb21haW4sXG4gICAgICBjb2xvckZpZWxkLFxuICAgICAgY29sb3IsXG4gICAgICBjb2x1bW5zLFxuICAgICAgc2l6ZUZpZWxkLFxuICAgICAgc2l6ZVNjYWxlLFxuICAgICAgc2l6ZURvbWFpbixcbiAgICAgIGNvdmVyYWdlRmllbGQsXG4gICAgICBjb3ZlcmFnZVNjYWxlLFxuICAgICAgY292ZXJhZ2VEb21haW4sXG4gICAgICB2aXNDb25maWc6IHtzaXplUmFuZ2UsIGNvbG9yUmFuZ2UsIGNvdmVyYWdlUmFuZ2V9XG4gICAgfSA9IHRoaXMuY29uZmlnO1xuXG4gICAgLy8gY29sb3JcbiAgICBjb25zdCBjU2NhbGUgPVxuICAgICAgY29sb3JGaWVsZCAmJlxuICAgICAgdGhpcy5nZXRWaXNDaGFubmVsU2NhbGUoXG4gICAgICAgIGNvbG9yU2NhbGUsXG4gICAgICAgIGNvbG9yRG9tYWluLFxuICAgICAgICBjb2xvclJhbmdlLmNvbG9ycy5tYXAoYyA9PiBoZXhUb1JnYihjKSlcbiAgICAgICk7XG5cbiAgICAvLyBoZWlnaHRcbiAgICBjb25zdCBzU2NhbGUgPVxuICAgICAgc2l6ZUZpZWxkICYmIHRoaXMuZ2V0VmlzQ2hhbm5lbFNjYWxlKHNpemVTY2FsZSwgc2l6ZURvbWFpbiwgc2l6ZVJhbmdlKTtcblxuICAgIC8vIGNvdmVyYWdlXG4gICAgY29uc3QgY29TY2FsZSA9XG4gICAgICBjb3ZlcmFnZUZpZWxkICYmIHRoaXMuZ2V0VmlzQ2hhbm5lbFNjYWxlKGNvdmVyYWdlU2NhbGUsIGNvdmVyYWdlRG9tYWluLCBjb3ZlcmFnZVJhbmdlKTtcblxuICAgIGNvbnN0IGdldEhleElkID0gdGhpcy5nZXRIZXhJZChjb2x1bW5zKTtcblxuICAgIGlmICghb2xkTGF5ZXJEYXRhIHx8IG9sZExheWVyRGF0YS5nZXRIZXhJZCAhPT0gZ2V0SGV4SWQpIHtcbiAgICAgIHRoaXMudXBkYXRlTGF5ZXJNZXRhKGFsbERhdGEsIGdldEhleElkKTtcbiAgICB9XG5cbiAgICBsZXQgZGF0YTtcbiAgICBpZiAoXG4gICAgICBvbGRMYXllckRhdGEgJiZcbiAgICAgIG9sZExheWVyRGF0YS5kYXRhICYmXG4gICAgICBvcHQuc2FtZURhdGEgJiZcbiAgICAgIG9sZExheWVyRGF0YS5nZXRIZXhJZCA9PT0gZ2V0SGV4SWRcbiAgICApIHtcbiAgICAgIGRhdGEgPSBvbGRMYXllckRhdGEuZGF0YTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF0YSA9IGZpbHRlcmVkSW5kZXgucmVkdWNlKChhY2N1LCBpbmRleCwgaSkgPT4ge1xuICAgICAgICBjb25zdCBpZCA9IGdldEhleElkKGFsbERhdGFbaW5kZXhdKTtcbiAgICAgICAgY29uc3QgY2VudHJvaWQgPSB0aGlzLmRhdGFUb0ZlYXR1cmUuY2VudHJvaWRzW2luZGV4XTtcblxuICAgICAgICBpZiAoY2VudHJvaWQpIHtcbiAgICAgICAgICBhY2N1LnB1c2goe1xuICAgICAgICAgICAgLy8ga2VlcCBhIHJlZmVyZW5jZSB0byB0aGUgb3JpZ2luYWwgZGF0YSBpbmRleFxuICAgICAgICAgICAgaW5kZXg6IGksXG4gICAgICAgICAgICBkYXRhOiBhbGxEYXRhW2luZGV4XSxcbiAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgY2VudHJvaWRcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhY2N1O1xuICAgICAgfSwgW10pO1xuICAgIH1cblxuICAgIGNvbnN0IGdldEVsZXZhdGlvbiA9IHNTY2FsZSA/IGQgPT5cbiAgICAgIHRoaXMuZ2V0RW5jb2RlZENoYW5uZWxWYWx1ZShzU2NhbGUsIGQuZGF0YSwgc2l6ZUZpZWxkLCAwKSA6IDA7XG5cbiAgICBjb25zdCBnZXRDb2xvciA9IGNTY2FsZSA/IGQgPT5cbiAgICAgIHRoaXMuZ2V0RW5jb2RlZENoYW5uZWxWYWx1ZShjU2NhbGUsIGQuZGF0YSwgY29sb3JGaWVsZCkgOiBjb2xvcjtcblxuICAgIGNvbnN0IGdldENvdmVyYWdlID0gY29TY2FsZSA/IGQgPT5cbiAgICAgIHRoaXMuZ2V0RW5jb2RlZENoYW5uZWxWYWx1ZShjb1NjYWxlLCBkLmRhdGEsIGNvdmVyYWdlRmllbGQsIDApIDogMTtcblxuICAgIC8vIGNvbnN0IGxheWVyRGF0YSA9IHtcbiAgICByZXR1cm4ge1xuICAgICAgZGF0YSxcbiAgICAgIGdldEVsZXZhdGlvbixcbiAgICAgIGdldENvbG9yLFxuICAgICAgZ2V0SGV4SWQsXG4gICAgICBnZXRDb3ZlcmFnZSxcbiAgICAgIGhleGFnb25WZXJ0aWNlczogdGhpcy5kYXRhVG9GZWF0dXJlLmhleGFnb25WZXJ0aWNlcyxcbiAgICAgIGhleGFnb25DZW50ZXI6IHRoaXMuZGF0YVRvRmVhdHVyZS5oZXhhZ29uQ2VudGVyXG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZUxheWVyTWV0YShhbGxEYXRhLCBnZXRIZXhJZCkge1xuICAgIGxldCBoZXhhZ29uVmVydGljZXM7XG4gICAgbGV0IGhleGFnb25DZW50ZXI7XG4gICAgY29uc3QgY2VudHJvaWRzID0ge307XG5cbiAgICBhbGxEYXRhLmZvckVhY2goKGQsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBpZCA9IGdldEhleElkKGQpO1xuICAgICAgaWYgKHR5cGVvZiBpZCAhPT0gJ3N0cmluZycgfHwgIWlkLmxlbmd0aCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvLyBmaW5kIGhleGFnb25WZXJ0aWNlc1xuICAgICAgLy8gb25seSBuZWVkIDEgaW5zdGFuY2Ugb2YgaGV4YWdvblZlcnRpY2VzXG4gICAgICBpZiAoIWhleGFnb25WZXJ0aWNlcykge1xuICAgICAgICBoZXhhZ29uVmVydGljZXMgPSBpZCAmJiBnZXRWZXJ0aWNlcyh7aWR9KTtcbiAgICAgICAgaGV4YWdvbkNlbnRlciA9IGlkICYmIGdldENlbnRyb2lkKHtpZH0pXG4gICAgICB9XG5cbiAgICAgIC8vIHNhdmUgYSByZWZlcmVuY2Ugb2YgY2VudHJvaWRzIHRvIGRhdGFUb0ZlYXR1cmVcbiAgICAgIC8vIHNvIHdlIGRvbid0IGhhdmUgdG8gcmUgY2FsY3VsYXRlIGl0IGFnYWluXG4gICAgICBjZW50cm9pZHNbaW5kZXhdID0gZ2V0Q2VudHJvaWQoe2lkfSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBib3VuZHMgPSB0aGlzLmdldFBvaW50c0JvdW5kcyhPYmplY3QudmFsdWVzKGNlbnRyb2lkcyksIGQgPT4gZCk7XG4gICAgY29uc3QgbGlnaHRTZXR0aW5ncyA9IHRoaXMuZ2V0TGlnaHRTZXR0aW5nc0Zyb21Cb3VuZHMoYm91bmRzKTtcblxuICAgIHRoaXMuZGF0YVRvRmVhdHVyZSA9IHtoZXhhZ29uVmVydGljZXMsIGhleGFnb25DZW50ZXIsIGNlbnRyb2lkc307XG4gICAgdGhpcy51cGRhdGVNZXRhKHtib3VuZHMsIGxpZ2h0U2V0dGluZ3N9KTtcbiAgfVxuXG4gIHJlbmRlckxheWVyKHtcbiAgICBkYXRhLFxuICAgIGlkeCxcbiAgICBsYXllckludGVyYWN0aW9uLFxuICAgIG9iamVjdEhvdmVyZWQsXG4gICAgbWFwU3RhdGUsXG4gICAgaW50ZXJhY3Rpb25Db25maWdcbiAgfSkge1xuICAgIGNvbnN0IHpvb21GYWN0b3IgPSB0aGlzLmdldFpvb21GYWN0b3IobWFwU3RhdGUpO1xuICAgIGNvbnN0IGVsZVpvb21GYWN0b3IgPSB0aGlzLmdldEVsZXZhdGlvblpvb21GYWN0b3IobWFwU3RhdGUpO1xuICAgIGNvbnN0IHtjb25maWcsIG1ldGF9ID0gdGhpcztcbiAgICBjb25zdCB7dmlzQ29uZmlnfSA9IGNvbmZpZztcblxuICAgIGNvbnN0IHVwZGF0ZVRyaWdnZXJzID0ge1xuICAgICAgZ2V0Q29sb3I6IHtcbiAgICAgICAgY29sb3I6IGNvbmZpZy5jb2xvcixcbiAgICAgICAgY29sb3JGaWVsZDogY29uZmlnLmNvbG9yRmllbGQsXG4gICAgICAgIGNvbG9yUmFuZ2U6IGNvbmZpZy52aXNDb25maWcuY29sb3JSYW5nZSxcbiAgICAgICAgY29sb3JTY2FsZTogY29uZmlnLmNvbG9yU2NhbGVcbiAgICAgIH0sXG4gICAgICBnZXRFbGV2YXRpb246IHtcbiAgICAgICAgc2l6ZUZpZWxkOiBjb25maWcuc2l6ZUZpZWxkLFxuICAgICAgICBzaXplUmFuZ2U6IGNvbmZpZy52aXNDb25maWcuc2l6ZVJhbmdlXG4gICAgICB9LFxuICAgICAgZ2V0Q292ZXJhZ2U6IHtcbiAgICAgICAgY292ZXJhZ2VGaWVsZDogY29uZmlnLmNvdmVyYWdlRmllbGQsXG4gICAgICAgIGNvdmVyYWdlUmFuZ2U6IGNvbmZpZy52aXNDb25maWcuY292ZXJhZ2VSYW5nZVxuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gW1xuICAgICAgbmV3IEgzSGV4YWdvbkNlbGxMYXllcih7XG4gICAgICAgIC4uLmxheWVySW50ZXJhY3Rpb24sXG4gICAgICAgIC4uLmRhdGEsXG4gICAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgICBpZHgsXG4gICAgICAgIHBpY2thYmxlOiB0cnVlLFxuXG4gICAgICAgIC8vIGNvdmVyYWdlXG4gICAgICAgIGNvdmVyYWdlOiBjb25maWcuY292ZXJhZ2VGaWVsZCA/IDEgOiB2aXNDb25maWcuY292ZXJhZ2UsXG5cbiAgICAgICAgLy8gcGFyYW1ldGVyc1xuICAgICAgICBwYXJhbWV0ZXJzOiB7ZGVwdGhUZXN0OiBCb29sZWFuKGNvbmZpZy5zaXplRmllbGQgfHwgbWFwU3RhdGUuZHJhZ1JvdGF0ZSl9LFxuXG4gICAgICAgIC8vIGhpZ2hsaWdodFxuICAgICAgICBhdXRvSGlnaGxpZ2h0OiBCb29sZWFuKGNvbmZpZy5zaXplRmllbGQpLFxuXG4gICAgICAgIC8vIGVsZXZhdGlvblxuICAgICAgICBleHRydWRlZDogQm9vbGVhbihjb25maWcuc2l6ZUZpZWxkKSxcbiAgICAgICAgZWxldmF0aW9uU2NhbGU6IHZpc0NvbmZpZy5lbGV2YXRpb25TY2FsZSAqIGVsZVpvb21GYWN0b3IsXG5cbiAgICAgICAgLy8gY29sb3JcbiAgICAgICAgb3BhY2l0eTogdmlzQ29uZmlnLm9wYWNpdHksXG5cbiAgICAgICAgLy8gcmVuZGVyXG4gICAgICAgIGxpZ2h0U2V0dGluZ3M6IG1ldGEubGlnaHRTZXR0aW5ncyxcbiAgICAgICAgdXBkYXRlVHJpZ2dlcnNcbiAgICAgIH0pLFxuICAgICAgLi4uKHRoaXMuaXNMYXllckhvdmVyZWQob2JqZWN0SG92ZXJlZCkgJiYgIWNvbmZpZy5zaXplRmllbGRcbiAgICAgICAgPyBbXG4gICAgICAgICAgICBuZXcgR2VvSnNvbkxheWVyKHtcbiAgICAgICAgICAgICAgaWQ6IGAke3RoaXMuaWR9LWhvdmVyZWRgLFxuICAgICAgICAgICAgICBkYXRhOiBbXG4gICAgICAgICAgICAgICAgaWRUb1BvbHlnb25HZW8ob2JqZWN0SG92ZXJlZClcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgZ2V0TGluZUNvbG9yOiBjb25maWcuaGlnaGxpZ2h0Q29sb3IsXG4gICAgICAgICAgICAgIGxpbmVXaWR0aFNjYWxlOiA4ICogem9vbUZhY3RvclxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdXG4gICAgICAgIDogW10pXG4gICAgXTtcbiAgfVxufVxuIl19
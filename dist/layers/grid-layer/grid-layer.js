'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.gridVisConfigs = undefined;

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

var _deck = require('deck.gl');

var _aggregationLayer = require('../aggregation-layer');

var _aggregationLayer2 = _interopRequireDefault(_aggregationLayer);

var _enhancedGridLayer = require('../../deckgl-layers/grid-layer/enhanced-grid-layer');

var _enhancedGridLayer2 = _interopRequireDefault(_enhancedGridLayer);

var _gridUtils = require('./grid-utils');

var _gridLayerIcon = require('./grid-layer-icon');

var _gridLayerIcon2 = _interopRequireDefault(_gridLayerIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gridVisConfigs = exports.gridVisConfigs = {
  opacity: 'opacity',
  worldUnitSize: 'worldUnitSize',
  colorRange: 'colorRange',
  coverage: 'coverage',
  sizeRange: 'elevationRange',
  percentile: 'percentile',
  elevationPercentile: 'elevationPercentile',
  elevationScale: 'elevationScale',
  'hi-precision': 'hi-precision',
  colorAggregation: 'aggregation',
  sizeAggregation: 'sizeAggregation',
  enable3d: 'enable3d'
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

var GridLayer = function (_AggregationLayer) {
  (0, _inherits3.default)(GridLayer, _AggregationLayer);

  function GridLayer(props) {
    (0, _classCallCheck3.default)(this, GridLayer);

    var _this = (0, _possibleConstructorReturn3.default)(this, (GridLayer.__proto__ || Object.getPrototypeOf(GridLayer)).call(this, props));

    _this.registerVisConfig(gridVisConfigs);
    _this.visConfigSettings.worldUnitSize.label = 'Grid Size (km)';
    return _this;
  }

  (0, _createClass3.default)(GridLayer, [{
    key: 'formatLayerData',
    value: function formatLayerData(_, allData, filteredIndex, oldLayerData) {
      var opt = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

      var formattedData = (0, _get3.default)(GridLayer.prototype.__proto__ || Object.getPrototypeOf(GridLayer.prototype), 'formatLayerData', this).call(this, _, allData, filteredIndex, oldLayerData, opt);

      var getPosition = formattedData.getPosition,
          data = formattedData.data;

      // TODO: fix this in deck.gl layer

      var cleaned = data.filter(function (d) {
        var pos = getPosition(d);
        return pos.every(Number.isFinite);
      });

      // All data processing is done in deck.gl layer
      return (0, _extends3.default)({}, formattedData, {
        data: cleaned
      });
    }
  }, {
    key: 'renderLayer',
    value: function renderLayer(_ref) {
      var data = _ref.data,
          idx = _ref.idx,
          objectHovered = _ref.objectHovered,
          mapState = _ref.mapState,
          interaction = _ref.interaction,
          layerCallbacks = _ref.layerCallbacks;

      var zoomFactor = this.getZoomFactor(mapState);
      var eleZoomFactor = this.getElevationZoomFactor(mapState);
      var visConfig = this.config.visConfig;

      var cellSize = visConfig.worldUnitSize * 1000;

      return [new _enhancedGridLayer2.default((0, _extends3.default)({}, data, {
        id: this.id,
        idx: idx,
        cellSize: cellSize,
        coverage: visConfig.coverage,
        // highlight
        autoHighlight: visConfig.enable3d,

        // color
        colorRange: this.getColorRange(visConfig.colorRange),
        colorScale: this.config.colorScale,
        opacity: visConfig.opacity,
        upperPercentile: visConfig.percentile[1],
        lowerPercentile: visConfig.percentile[0],

        // elevation
        extruded: visConfig.enable3d,
        elevationScale: visConfig.elevationScale * eleZoomFactor,
        elevationLowerPercentile: visConfig.elevationPercentile[0],
        elevationUpperPercentile: visConfig.elevationPercentile[1],
        // parameters
        parameters: { depthTest: Boolean(visConfig.enable3d || mapState.dragRotate) },

        // render
        fp64: visConfig['hi-precision'],
        pickable: true,
        lightSettings: this.meta && this.meta.lightSettings,

        // callbacks
        onSetColorDomain: layerCallbacks.onSetLayerDomain
      }))].concat((0, _toConsumableArray3.default)(this.isLayerHovered(objectHovered) && !visConfig.enable3d ? [new _deck.GeoJsonLayer({
        id: this.id + '-hovered',
        data: [(0, _gridUtils.pointToPolygonGeo)({
          object: objectHovered.object,
          cellSize: cellSize,
          coverage: visConfig.coverage,
          mapState: mapState
        })],
        getLineColor: this.config.highlightColor,
        lineWidthScale: 8 * zoomFactor
      })] : []));
    }
  }, {
    key: 'type',
    get: function get() {
      return 'grid';
    }
  }, {
    key: 'layerIcon',
    get: function get() {
      return _gridLayerIcon2.default;
    }
  }]);
  return GridLayer;
}(_aggregationLayer2.default);

exports.default = GridLayer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9sYXllcnMvZ3JpZC1sYXllci9ncmlkLWxheWVyLmpzIl0sIm5hbWVzIjpbImdyaWRWaXNDb25maWdzIiwib3BhY2l0eSIsIndvcmxkVW5pdFNpemUiLCJjb2xvclJhbmdlIiwiY292ZXJhZ2UiLCJzaXplUmFuZ2UiLCJwZXJjZW50aWxlIiwiZWxldmF0aW9uUGVyY2VudGlsZSIsImVsZXZhdGlvblNjYWxlIiwiY29sb3JBZ2dyZWdhdGlvbiIsInNpemVBZ2dyZWdhdGlvbiIsImVuYWJsZTNkIiwiR3JpZExheWVyIiwicHJvcHMiLCJyZWdpc3RlclZpc0NvbmZpZyIsInZpc0NvbmZpZ1NldHRpbmdzIiwibGFiZWwiLCJfIiwiYWxsRGF0YSIsImZpbHRlcmVkSW5kZXgiLCJvbGRMYXllckRhdGEiLCJvcHQiLCJmb3JtYXR0ZWREYXRhIiwiZ2V0UG9zaXRpb24iLCJkYXRhIiwiY2xlYW5lZCIsImZpbHRlciIsInBvcyIsImQiLCJldmVyeSIsIk51bWJlciIsImlzRmluaXRlIiwiaWR4Iiwib2JqZWN0SG92ZXJlZCIsIm1hcFN0YXRlIiwiaW50ZXJhY3Rpb24iLCJsYXllckNhbGxiYWNrcyIsInpvb21GYWN0b3IiLCJnZXRab29tRmFjdG9yIiwiZWxlWm9vbUZhY3RvciIsImdldEVsZXZhdGlvblpvb21GYWN0b3IiLCJ2aXNDb25maWciLCJjb25maWciLCJjZWxsU2l6ZSIsIkVuaGFuY2VkR3JpZExheWVyIiwiaWQiLCJhdXRvSGlnaGxpZ2h0IiwiZ2V0Q29sb3JSYW5nZSIsImNvbG9yU2NhbGUiLCJ1cHBlclBlcmNlbnRpbGUiLCJsb3dlclBlcmNlbnRpbGUiLCJleHRydWRlZCIsImVsZXZhdGlvbkxvd2VyUGVyY2VudGlsZSIsImVsZXZhdGlvblVwcGVyUGVyY2VudGlsZSIsInBhcmFtZXRlcnMiLCJkZXB0aFRlc3QiLCJCb29sZWFuIiwiZHJhZ1JvdGF0ZSIsImZwNjQiLCJwaWNrYWJsZSIsImxpZ2h0U2V0dGluZ3MiLCJtZXRhIiwib25TZXRDb2xvckRvbWFpbiIsIm9uU2V0TGF5ZXJEb21haW4iLCJpc0xheWVySG92ZXJlZCIsIkdlb0pzb25MYXllciIsIm9iamVjdCIsImdldExpbmVDb2xvciIsImhpZ2hsaWdodENvbG9yIiwibGluZVdpZHRoU2NhbGUiLCJHcmlkTGF5ZXJJY29uIiwiQWdncmVnYXRpb25MYXllciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7QUFFTyxJQUFNQSwwQ0FBaUI7QUFDNUJDLFdBQVMsU0FEbUI7QUFFNUJDLGlCQUFlLGVBRmE7QUFHNUJDLGNBQVksWUFIZ0I7QUFJNUJDLFlBQVUsVUFKa0I7QUFLNUJDLGFBQVcsZ0JBTGlCO0FBTTVCQyxjQUFZLFlBTmdCO0FBTzVCQyx1QkFBcUIscUJBUE87QUFRNUJDLGtCQUFnQixnQkFSWTtBQVM1QixrQkFBZ0IsY0FUWTtBQVU1QkMsb0JBQWtCLGFBVlU7QUFXNUJDLG1CQUFpQixpQkFYVztBQVk1QkMsWUFBVTtBQVprQixDQUF2QixDLENBMUJQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQXVCcUJDLFM7OztBQUNuQixxQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLG9JQUNYQSxLQURXOztBQUdqQixVQUFLQyxpQkFBTCxDQUF1QmQsY0FBdkI7QUFDQSxVQUFLZSxpQkFBTCxDQUF1QmIsYUFBdkIsQ0FBcUNjLEtBQXJDLEdBQTZDLGdCQUE3QztBQUppQjtBQUtsQjs7OztvQ0FVZUMsQyxFQUFHQyxPLEVBQVNDLGEsRUFBZUMsWSxFQUF3QjtBQUFBLFVBQVZDLEdBQVUsdUVBQUosRUFBSTs7QUFDakUsVUFBTUMsb0pBQ0pMLENBREksRUFFSkMsT0FGSSxFQUdKQyxhQUhJLEVBSUpDLFlBSkksRUFLSkMsR0FMSSxDQUFOOztB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LFMiLCJmaWxlIjoiZ3JpZC1sYXllci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAxOSBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7R2VvSnNvbkxheWVyfSBmcm9tICdkZWNrLmdsJztcbmltcG9ydCBBZ2dyZWdhdGlvbkxheWVyIGZyb20gJy4uL2FnZ3JlZ2F0aW9uLWxheWVyJztcbmltcG9ydCBFbmhhbmNlZEdyaWRMYXllciBmcm9tICdkZWNrZ2wtbGF5ZXJzL2dyaWQtbGF5ZXIvZW5oYW5jZWQtZ3JpZC1sYXllcic7XG5pbXBvcnQge3BvaW50VG9Qb2x5Z29uR2VvfSBmcm9tICcuL2dyaWQtdXRpbHMnO1xuaW1wb3J0IEdyaWRMYXllckljb24gZnJvbSAnLi9ncmlkLWxheWVyLWljb24nO1xuXG5leHBvcnQgY29uc3QgZ3JpZFZpc0NvbmZpZ3MgPSB7XG4gIG9wYWNpdHk6ICdvcGFjaXR5JyxcbiAgd29ybGRVbml0U2l6ZTogJ3dvcmxkVW5pdFNpemUnLFxuICBjb2xvclJhbmdlOiAnY29sb3JSYW5nZScsXG4gIGNvdmVyYWdlOiAnY292ZXJhZ2UnLFxuICBzaXplUmFuZ2U6ICdlbGV2YXRpb25SYW5nZScsXG4gIHBlcmNlbnRpbGU6ICdwZXJjZW50aWxlJyxcbiAgZWxldmF0aW9uUGVyY2VudGlsZTogJ2VsZXZhdGlvblBlcmNlbnRpbGUnLFxuICBlbGV2YXRpb25TY2FsZTogJ2VsZXZhdGlvblNjYWxlJyxcbiAgJ2hpLXByZWNpc2lvbic6ICdoaS1wcmVjaXNpb24nLFxuICBjb2xvckFnZ3JlZ2F0aW9uOiAnYWdncmVnYXRpb24nLFxuICBzaXplQWdncmVnYXRpb246ICdzaXplQWdncmVnYXRpb24nLFxuICBlbmFibGUzZDogJ2VuYWJsZTNkJ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JpZExheWVyIGV4dGVuZHMgQWdncmVnYXRpb25MYXllciB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5yZWdpc3RlclZpc0NvbmZpZyhncmlkVmlzQ29uZmlncyk7XG4gICAgdGhpcy52aXNDb25maWdTZXR0aW5ncy53b3JsZFVuaXRTaXplLmxhYmVsID0gJ0dyaWQgU2l6ZSAoa20pJztcbiAgfVxuXG4gIGdldCB0eXBlKCkge1xuICAgIHJldHVybiAnZ3JpZCc7XG4gIH1cblxuICBnZXQgbGF5ZXJJY29uKCkge1xuICAgIHJldHVybiBHcmlkTGF5ZXJJY29uO1xuICB9XG5cbiAgZm9ybWF0TGF5ZXJEYXRhKF8sIGFsbERhdGEsIGZpbHRlcmVkSW5kZXgsIG9sZExheWVyRGF0YSwgb3B0ID0ge30pIHtcbiAgICBjb25zdCBmb3JtYXR0ZWREYXRhID0gc3VwZXIuZm9ybWF0TGF5ZXJEYXRhKFxuICAgICAgXyxcbiAgICAgIGFsbERhdGEsXG4gICAgICBmaWx0ZXJlZEluZGV4LFxuICAgICAgb2xkTGF5ZXJEYXRhLFxuICAgICAgb3B0XG4gICAgKTtcblxuICAgIGNvbnN0IHtnZXRQb3NpdGlvbiwgZGF0YX0gPSBmb3JtYXR0ZWREYXRhO1xuXG4gICAgLy8gVE9ETzogZml4IHRoaXMgaW4gZGVjay5nbCBsYXllclxuICAgIGNvbnN0IGNsZWFuZWQgPSBkYXRhLmZpbHRlcihkID0+IHtcbiAgICAgIGNvbnN0IHBvcyA9IGdldFBvc2l0aW9uKGQpO1xuICAgICAgcmV0dXJuIHBvcy5ldmVyeShOdW1iZXIuaXNGaW5pdGUpO1xuICAgIH0pO1xuXG4gICAgLy8gQWxsIGRhdGEgcHJvY2Vzc2luZyBpcyBkb25lIGluIGRlY2suZ2wgbGF5ZXJcbiAgICByZXR1cm4ge1xuICAgICAgLi4uZm9ybWF0dGVkRGF0YSxcbiAgICAgIGRhdGE6IGNsZWFuZWRcbiAgICB9O1xuICB9XG5cbiAgcmVuZGVyTGF5ZXIoe1xuICAgIGRhdGEsXG4gICAgaWR4LFxuICAgIG9iamVjdEhvdmVyZWQsXG4gICAgbWFwU3RhdGUsXG4gICAgaW50ZXJhY3Rpb24sXG4gICAgbGF5ZXJDYWxsYmFja3NcbiAgfSkge1xuICAgIGNvbnN0IHpvb21GYWN0b3IgPSB0aGlzLmdldFpvb21GYWN0b3IobWFwU3RhdGUpO1xuICAgIGNvbnN0IGVsZVpvb21GYWN0b3IgPSB0aGlzLmdldEVsZXZhdGlvblpvb21GYWN0b3IobWFwU3RhdGUpO1xuICAgIGNvbnN0IHt2aXNDb25maWd9ID0gdGhpcy5jb25maWc7XG4gICAgY29uc3QgY2VsbFNpemUgPSB2aXNDb25maWcud29ybGRVbml0U2l6ZSAqIDEwMDA7XG5cbiAgICByZXR1cm4gW1xuICAgICAgbmV3IEVuaGFuY2VkR3JpZExheWVyKHtcbiAgICAgICAgLi4uZGF0YSxcbiAgICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICAgIGlkeCxcbiAgICAgICAgY2VsbFNpemUsXG4gICAgICAgIGNvdmVyYWdlOiB2aXNDb25maWcuY292ZXJhZ2UsXG4gICAgICAgIC8vIGhpZ2hsaWdodFxuICAgICAgICBhdXRvSGlnaGxpZ2h0OiB2aXNDb25maWcuZW5hYmxlM2QsXG5cbiAgICAgICAgLy8gY29sb3JcbiAgICAgICAgY29sb3JSYW5nZTogdGhpcy5nZXRDb2xvclJhbmdlKHZpc0NvbmZpZy5jb2xvclJhbmdlKSxcbiAgICAgICAgY29sb3JTY2FsZTogdGhpcy5jb25maWcuY29sb3JTY2FsZSxcbiAgICAgICAgb3BhY2l0eTogdmlzQ29uZmlnLm9wYWNpdHksXG4gICAgICAgIHVwcGVyUGVyY2VudGlsZTogdmlzQ29uZmlnLnBlcmNlbnRpbGVbMV0sXG4gICAgICAgIGxvd2VyUGVyY2VudGlsZTogdmlzQ29uZmlnLnBlcmNlbnRpbGVbMF0sXG5cbiAgICAgICAgLy8gZWxldmF0aW9uXG4gICAgICAgIGV4dHJ1ZGVkOiB2aXNDb25maWcuZW5hYmxlM2QsXG4gICAgICAgIGVsZXZhdGlvblNjYWxlOiB2aXNDb25maWcuZWxldmF0aW9uU2NhbGUgKiBlbGVab29tRmFjdG9yLFxuICAgICAgICBlbGV2YXRpb25Mb3dlclBlcmNlbnRpbGU6IHZpc0NvbmZpZy5lbGV2YXRpb25QZXJjZW50aWxlWzBdLFxuICAgICAgICBlbGV2YXRpb25VcHBlclBlcmNlbnRpbGU6IHZpc0NvbmZpZy5lbGV2YXRpb25QZXJjZW50aWxlWzFdLFxuICAgICAgICAvLyBwYXJhbWV0ZXJzXG4gICAgICAgIHBhcmFtZXRlcnM6IHtkZXB0aFRlc3Q6IEJvb2xlYW4odmlzQ29uZmlnLmVuYWJsZTNkIHx8IG1hcFN0YXRlLmRyYWdSb3RhdGUpfSxcblxuICAgICAgICAvLyByZW5kZXJcbiAgICAgICAgZnA2NDogdmlzQ29uZmlnWydoaS1wcmVjaXNpb24nXSxcbiAgICAgICAgcGlja2FibGU6IHRydWUsXG4gICAgICAgIGxpZ2h0U2V0dGluZ3M6IHRoaXMubWV0YSAmJiB0aGlzLm1ldGEubGlnaHRTZXR0aW5ncyxcblxuICAgICAgICAvLyBjYWxsYmFja3NcbiAgICAgICAgb25TZXRDb2xvckRvbWFpbjogbGF5ZXJDYWxsYmFja3Mub25TZXRMYXllckRvbWFpblxuICAgICAgfSksXG5cbiAgICAgIC8vIHJlbmRlciBhbiBvdXRsaW5lIG9mIGVhY2ggY2VsbCBpZiBub3QgZXh0cnVkZWRcbiAgICAgIC4uLih0aGlzLmlzTGF5ZXJIb3ZlcmVkKG9iamVjdEhvdmVyZWQpICYmICF2aXNDb25maWcuZW5hYmxlM2RcbiAgICAgICAgPyBbXG4gICAgICAgICAgICBuZXcgR2VvSnNvbkxheWVyKHtcbiAgICAgICAgICAgICAgaWQ6IGAke3RoaXMuaWR9LWhvdmVyZWRgLFxuICAgICAgICAgICAgICBkYXRhOiBbXG4gICAgICAgICAgICAgICAgcG9pbnRUb1BvbHlnb25HZW8oe1xuICAgICAgICAgICAgICAgICAgb2JqZWN0OiBvYmplY3RIb3ZlcmVkLm9iamVjdCxcbiAgICAgICAgICAgICAgICAgIGNlbGxTaXplLFxuICAgICAgICAgICAgICAgICAgY292ZXJhZ2U6IHZpc0NvbmZpZy5jb3ZlcmFnZSxcbiAgICAgICAgICAgICAgICAgIG1hcFN0YXRlXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgZ2V0TGluZUNvbG9yOiB0aGlzLmNvbmZpZy5oaWdobGlnaHRDb2xvcixcbiAgICAgICAgICAgICAgbGluZVdpZHRoU2NhbGU6IDggKiB6b29tRmFjdG9yXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF1cbiAgICAgICAgOiBbXSlcbiAgICBdO1xuICB9XG59XG4iXX0=
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LayerClasses = exports.KeplerGlLayers = exports.Layer = undefined;

var _baseLayer = require('./base-layer');

Object.defineProperty(exports, 'Layer', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_baseLayer).default;
  }
});

var _pointLayer = require('./point-layer/point-layer');

var _pointLayer2 = _interopRequireDefault(_pointLayer);

var _arcLayer = require('./arc-layer/arc-layer');

var _arcLayer2 = _interopRequireDefault(_arcLayer);

var _lineLayer = require('./line-layer/line-layer');

var _lineLayer2 = _interopRequireDefault(_lineLayer);

var _gridLayer = require('./grid-layer/grid-layer');

var _gridLayer2 = _interopRequireDefault(_gridLayer);

var _hexagonLayer = require('./hexagon-layer/hexagon-layer');

var _hexagonLayer2 = _interopRequireDefault(_hexagonLayer);

var _geojsonLayer = require('./geojson-layer/geojson-layer');

var _geojsonLayer2 = _interopRequireDefault(_geojsonLayer);

var _clusterLayer = require('./cluster-layer/cluster-layer');

var _clusterLayer2 = _interopRequireDefault(_clusterLayer);

var _iconLayer = require('./icon-layer/icon-layer');

var _iconLayer2 = _interopRequireDefault(_iconLayer);

var _heatmapLayer = require('./heatmap-layer/heatmap-layer');

var _heatmapLayer2 = _interopRequireDefault(_heatmapLayer);

var _h3HexagonLayer = require('./h3-hexagon-layer/h3-hexagon-layer');

var _h3HexagonLayer2 = _interopRequireDefault(_h3HexagonLayer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// individual layers
var KeplerGlLayers = exports.KeplerGlLayers = {
  PointLayer: _pointLayer2.default,
  ArcLayer: _arcLayer2.default,
  LineLayer: _lineLayer2.default,
  GridLayer: _gridLayer2.default,
  HexagonLayer: _hexagonLayer2.default,
  GeojsonLayer: _geojsonLayer2.default,
  ClusterLayer: _clusterLayer2.default,
  IconLayer: _iconLayer2.default,
  HeatmapLayer: _heatmapLayer2.default,
  H3Layer: _h3HexagonLayer2.default
};

var LayerClasses = exports.LayerClasses = {
  point: _pointLayer2.default,
  arc: _arcLayer2.default,
  line: _lineLayer2.default,
  grid: _gridLayer2.default,
  hexagon: _hexagonLayer2.default,
  geojson: _geojsonLayer2.default,
  cluster: _clusterLayer2.default,
  icon: _iconLayer2.default,
  heatmap: _heatmapLayer2.default,
  hexagonId: _h3HexagonLayer2.default
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sYXllcnMvaW5kZXguanMiXSwibmFtZXMiOlsiZGVmYXVsdCIsIktlcGxlckdsTGF5ZXJzIiwiUG9pbnRMYXllciIsIkFyY0xheWVyIiwiTGluZUxheWVyIiwiR3JpZExheWVyIiwiSGV4YWdvbkxheWVyIiwiR2VvanNvbkxheWVyIiwiQ2x1c3RlckxheWVyIiwiSWNvbkxheWVyIiwiSGVhdG1hcExheWVyIiwiSDNMYXllciIsIkxheWVyQ2xhc3NlcyIsInBvaW50IiwiYXJjIiwibGluZSIsImdyaWQiLCJoZXhhZ29uIiwiZ2VvanNvbiIsImNsdXN0ZXIiLCJpY29uIiwiaGVhdG1hcCIsImhleGFnb25JZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OzhDQWdDUUEsTzs7OztBQVpSOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFLQTtBQUNPLElBQU1DLDBDQUFpQjtBQUM1QkMsa0NBRDRCO0FBRTVCQyw4QkFGNEI7QUFHNUJDLGdDQUg0QjtBQUk1QkMsZ0NBSjRCO0FBSzVCQyxzQ0FMNEI7QUFNNUJDLHNDQU40QjtBQU81QkMsc0NBUDRCO0FBUTVCQyxnQ0FSNEI7QUFTNUJDLHNDQVQ0QjtBQVU1QkM7QUFWNEIsQ0FBdkI7O0FBYUEsSUFBTUMsc0NBQWU7QUFDMUJDLFNBQU9YLG9CQURtQjtBQUUxQlksT0FBS1gsa0JBRnFCO0FBRzFCWSxRQUFNWCxtQkFIb0I7QUFJMUJZLFFBQU1YLG1CQUpvQjtBQUsxQlksV0FBU1gsc0JBTGlCO0FBTTFCWSxXQUFTWCxzQkFOaUI7QUFPMUJZLFdBQVNYLHNCQVBpQjtBQVExQlksUUFBTVgsbUJBUm9CO0FBUzFCWSxXQUFTWCxzQkFUaUI7QUFVMUJZLGFBQVdYO0FBVmUsQ0FBckIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMTkgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQge2RlZmF1bHQgYXMgUG9pbnRMYXllcn0gZnJvbSAnLi9wb2ludC1sYXllci9wb2ludC1sYXllcic7XG5pbXBvcnQge2RlZmF1bHQgYXMgQXJjTGF5ZXJ9IGZyb20gJy4vYXJjLWxheWVyL2FyYy1sYXllcic7XG5pbXBvcnQge2RlZmF1bHQgYXMgTGluZUxheWVyfSBmcm9tICcuL2xpbmUtbGF5ZXIvbGluZS1sYXllcic7XG5pbXBvcnQge2RlZmF1bHQgYXMgR3JpZExheWVyfSBmcm9tICcuL2dyaWQtbGF5ZXIvZ3JpZC1sYXllcic7XG5pbXBvcnQge2RlZmF1bHQgYXMgSGV4YWdvbkxheWVyfSBmcm9tICcuL2hleGFnb24tbGF5ZXIvaGV4YWdvbi1sYXllcic7XG5pbXBvcnQge2RlZmF1bHQgYXMgR2VvanNvbkxheWVyfSBmcm9tICcuL2dlb2pzb24tbGF5ZXIvZ2VvanNvbi1sYXllcic7XG5pbXBvcnQge2RlZmF1bHQgYXMgQ2x1c3RlckxheWVyfSBmcm9tICcuL2NsdXN0ZXItbGF5ZXIvY2x1c3Rlci1sYXllcic7XG5pbXBvcnQge2RlZmF1bHQgYXMgSWNvbkxheWVyfSBmcm9tICcuL2ljb24tbGF5ZXIvaWNvbi1sYXllcic7XG5pbXBvcnQge2RlZmF1bHQgYXMgSGVhdG1hcExheWVyfSBmcm9tICcuL2hlYXRtYXAtbGF5ZXIvaGVhdG1hcC1sYXllcic7XG5pbXBvcnQge2RlZmF1bHQgYXMgSDNMYXllcn0gZnJvbSAnLi9oMy1oZXhhZ29uLWxheWVyL2gzLWhleGFnb24tbGF5ZXInO1xuXG4vLyBiYXNlIGxheWVyXG5leHBvcnQge2RlZmF1bHQgYXMgTGF5ZXJ9IGZyb20gJy4vYmFzZS1sYXllcic7XG5cbi8vIGluZGl2aWR1YWwgbGF5ZXJzXG5leHBvcnQgY29uc3QgS2VwbGVyR2xMYXllcnMgPSB7XG4gIFBvaW50TGF5ZXIsXG4gIEFyY0xheWVyLFxuICBMaW5lTGF5ZXIsXG4gIEdyaWRMYXllcixcbiAgSGV4YWdvbkxheWVyLFxuICBHZW9qc29uTGF5ZXIsXG4gIENsdXN0ZXJMYXllcixcbiAgSWNvbkxheWVyLFxuICBIZWF0bWFwTGF5ZXIsXG4gIEgzTGF5ZXJcbn07XG5cbmV4cG9ydCBjb25zdCBMYXllckNsYXNzZXMgPSB7XG4gIHBvaW50OiBQb2ludExheWVyLFxuICBhcmM6IEFyY0xheWVyLFxuICBsaW5lOiBMaW5lTGF5ZXIsXG4gIGdyaWQ6IEdyaWRMYXllcixcbiAgaGV4YWdvbjogSGV4YWdvbkxheWVyLFxuICBnZW9qc29uOiBHZW9qc29uTGF5ZXIsXG4gIGNsdXN0ZXI6IENsdXN0ZXJMYXllcixcbiAgaWNvbjogSWNvbkxheWVyLFxuICBoZWF0bWFwOiBIZWF0bWFwTGF5ZXIsXG4gIGhleGFnb25JZDogSDNMYXllclxufTtcbiJdfQ==
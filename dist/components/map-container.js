'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends4 = require('babel-runtime/helpers/extends');

var _extends5 = _interopRequireDefault(_extends4);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

exports.default = MapContainerFactory;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactMapGl = require('react-map-gl');

var _reactMapGl2 = _interopRequireDefault(_reactMapGl);

var _deck = require('deck.gl');

var _deck2 = _interopRequireDefault(_deck);

var _constants = require('luma.gl/constants');

var _constants2 = _interopRequireDefault(_constants);

var _luma = require('luma.gl');

var _pickingModule = require('../shaderlib/picking-module');

var _pickingModule2 = _interopRequireDefault(_pickingModule);

var _brushingModule = require('../shaderlib/brushing-module');

var _brushingModule2 = _interopRequireDefault(_brushingModule);

var _mapPopover = require('./map/map-popover');

var _mapPopover2 = _interopRequireDefault(_mapPopover);

var _mapControl = require('./map/map-control');

var _mapControl2 = _interopRequireDefault(_mapControl);

var _styledComponents = require('./common/styled-components');

var _mapboxUtils = require('../layers/mapbox-utils');

var _mapboxUtils2 = require('../utils/map-style-utils/mapbox-utils');

var _defaultSettings = require('../constants/default-settings');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// components
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

// libraries
var MAP_STYLE = {
  container: {
    display: 'inline-block',
    position: 'relative'
  },
  top: {
    position: 'absolute', top: '0px', pointerEvents: 'none'
  }
};

// default-settings


// Overlay type


var getGlConst = function getGlConst(d) {
  return _constants2.default[d];
};

var MAPBOXGL_STYLE_UPDATE = 'style.load';
MapContainerFactory.deps = [_mapPopover2.default, _mapControl2.default];

function MapContainerFactory(MapPopover, MapControl) {
  var _class, _temp;

  var MapContainer = (_temp = _class = function (_Component) {
    (0, _inherits3.default)(MapContainer, _Component);

    function MapContainer(props) {
      (0, _classCallCheck3.default)(this, MapContainer);

      var _this = (0, _possibleConstructorReturn3.default)(this, (MapContainer.__proto__ || Object.getPrototypeOf(MapContainer)).call(this, props));

      _this._onCloseMapPopover = function () {
        _this.props.visStateActions.onLayerClick(null);
      };

      _this._onLayerSetDomain = function (idx, colorDomain) {
        _this.props.visStateActions.layerConfigChange(_this.props.layers[idx], {
          colorDomain: colorDomain
        });
      };

      _this._onWebGLInitialized = function (gl) {
        (0, _luma.registerShaderModules)([_pickingModule2.default, _brushingModule2.default], {
          ignoreMultipleRegistrations: true
        });

        // allow Uint32 indices in building layer
        // gl.getExtension('OES_element_index_uint');
      };

      _this._onMouseMove = function (evt) {
        var brush = _this.props.interactionConfig.brush;


        if (evt.nativeEvent && brush.enabled) {
          _this.setState({
            mousePosition: [evt.nativeEvent.offsetX, evt.nativeEvent.offsetY]
          });
        }
      };

      _this._handleMapToggleLayer = function (layerId) {
        var _this$props = _this.props,
            _this$props$index = _this$props.index,
            mapIndex = _this$props$index === undefined ? 0 : _this$props$index,
            visStateActions = _this$props.visStateActions;

        visStateActions.toggleLayerForMap(mapIndex, layerId);
      };

      _this._setMapboxMap = function (mapbox) {
        if (!_this._map && mapbox) {
          _this._map = mapbox.getMap();
          // bind mapboxgl event listener
          _this._map.on(MAPBOXGL_STYLE_UPDATE, function () {
            // force refresh mapboxgl layers

            (0, _mapboxUtils.updateMapboxLayers)(_this._map, _this._renderMapboxLayers(), _this.previousLayers, _this.props.mapLayers, { force: true });

            if (typeof _this.props.onMapStyleLoaded === 'function') {
              _this.props.onMapStyleLoaded(_this._map);
            }
          });

          _this._map.on('render', function () {
            if (typeof _this.props.onMapRender === 'function') {
              _this.props.onMapRender(_this._map);
            }
          });
        }
      };

      _this._onBeforeRender = function (_ref) {
        var gl = _ref.gl;

        _this._setlayerBlending(gl);
      };

      _this._setlayerBlending = function (gl) {
        var blending = _defaultSettings.LAYER_BLENDINGS[_this.props.layerBlending];
        var blendFunc = blending.blendFunc,
            blendEquation = blending.blendEquation;


        (0, _luma.setParameters)(gl, (0, _extends5.default)((0, _defineProperty3.default)({}, _constants2.default.BLEND, true), blendFunc ? {
          blendFunc: blendFunc.map(getGlConst),
          blendEquation: Array.isArray(blendEquation) ? blendEquation.map(getGlConst) : getGlConst(blendEquation)
        } : {}));
      };

      _this._renderLayer = function (overlays, idx) {
        var _this$props2 = _this.props,
            layers = _this$props2.layers,
            layerData = _this$props2.layerData,
            hoverInfo = _this$props2.hoverInfo,
            clicked = _this$props2.clicked,
            mapLayers = _this$props2.mapLayers,
            mapState = _this$props2.mapState,
            interactionConfig = _this$props2.interactionConfig;
        var mousePosition = _this.state.mousePosition;

        var layer = layers[idx];
        var data = layerData[idx];

        var layerInteraction = {
          mousePosition: mousePosition
        };

        var objectHovered = clicked || hoverInfo;
        var layerCallbacks = {
          onSetLayerDomain: function onSetLayerDomain(val) {
            return _this._onLayerSetDomain(idx, val);
          }
        };

        if (!_this._shouldRenderLayer(layer, data, mapLayers)) {
          return overlays;
        }

        var layerOverlay = [];

        // Layer is Layer class
        if (typeof layer.renderLayer === 'function') {
          layerOverlay = layer.renderLayer({
            data: data,
            idx: idx,
            layerInteraction: layerInteraction,
            objectHovered: objectHovered,
            mapState: mapState,
            interactionConfig: interactionConfig,
            layerCallbacks: layerCallbacks
          });
        }

        if (layerOverlay.length) {
          overlays = overlays.concat(layerOverlay);
        }
        return overlays;
      };

      _this.state = {
        mousePosition: [0, 0]
      };
      _this.previousLayers = {
        // [layers.id]: mapboxLayerConfig
      };
      return _this;
    }

    (0, _createClass3.default)(MapContainer, [{
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        // unbind mapboxgl event listener
        if (this._map) {
          this._map.off(MAPBOXGL_STYLE_UPDATE);
        }
      }

      /* component private functions */

    }, {
      key: '_renderObjectLayerPopover',


      /* component render functions */
      /* eslint-disable complexity */
      value: function _renderObjectLayerPopover() {
        // TODO: move this into reducer so it can be tested
        var _props = this.props,
            mapState = _props.mapState,
            hoverInfo = _props.hoverInfo,
            clicked = _props.clicked,
            datasets = _props.datasets,
            interactionConfig = _props.interactionConfig,
            layers = _props.layers,
            mapLayers = _props.mapLayers;

        // if clicked something, ignore hover behavior

        var objectInfo = clicked || hoverInfo;
        if (!interactionConfig.tooltip.enabled || !objectInfo || !objectInfo.picked) {
          // nothing hovered
          return null;
        }

        var lngLat = objectInfo.lngLat,
            object = objectInfo.object,
            overlay = objectInfo.layer;

        // deckgl layer to kepler-gl layer

        var layer = layers[overlay.props.idx];

        if (!layer || !layer.config.isVisible || !object || !layer.getHoverData || mapLayers && !mapLayers[layer.id].isVisible) {
          // layer is not visible
          return null;
        }

        var dataId = layer.config.dataId;
        var _datasets$dataId = datasets[dataId],
            allData = _datasets$dataId.allData,
            fields = _datasets$dataId.fields;

        var data = layer.getHoverData(object, allData);

        // project lnglat to screen so that tooltip follows the object on zoom
        var viewport = overlay.context.viewport;

        var _ref2 = this._getHoverXY(viewport, lngLat) || objectInfo,
            x = _ref2.x,
            y = _ref2.y;

        var popoverProps = {
          data: data,
          fields: fields,
          fieldsToShow: interactionConfig.tooltip.config.fieldsToShow[dataId],
          layer: layer,
          isVisible: true,
          x: x,
          y: y,
          freezed: Boolean(clicked),
          onClose: this._onCloseMapPopover,
          mapState: mapState
        };

        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(MapPopover, popoverProps)
        );
      }

      /* eslint-enable complexity */

    }, {
      key: '_getHoverXY',
      value: function _getHoverXY(viewport, lngLat) {
        var screenCoord = !viewport || !lngLat ? null : viewport.project(lngLat);

        return screenCoord && { x: screenCoord[0], y: screenCoord[1] };
      }
    }, {
      key: '_shouldRenderLayer',
      value: function _shouldRenderLayer(layer, data, mapLayers) {
        var isAvailableAndVisible = !(mapLayers && mapLayers[layer.id]) || mapLayers[layer.id].isVisible;
        return layer.shouldRenderLayer(data) && isAvailableAndVisible;
      }
    }, {
      key: '_renderOverlay',
      value: function _renderOverlay() {
        var _props2 = this.props,
            mapState = _props2.mapState,
            layerData = _props2.layerData,
            layerOrder = _props2.layerOrder,
            visStateActions = _props2.visStateActions;


        var deckGlLayers = [];

        // wait until data is ready before render data layers
        if (layerData && layerData.length) {
          // last layer render first
          deckGlLayers = layerOrder.slice().reverse().reduce(this._renderLayer, []);
        }

        return _react2.default.createElement(_deck2.default, {
          viewState: mapState,
          id: 'default-deckgl-overlay',
          layers: deckGlLayers,
          onWebGLInitialized: this._onWebGLInitialized,
          onBeforeRender: this._onBeforeRender,
          onLayerHover: visStateActions.onLayerHover,
          onLayerClick: visStateActions.onLayerClick
        });
      }
    }, {
      key: '_renderMapboxLayers',
      value: function _renderMapboxLayers() {
        var _props3 = this.props,
            layers = _props3.layers,
            layerData = _props3.layerData,
            layerOrder = _props3.layerOrder;


        return (0, _mapboxUtils.generateMapboxLayers)(layers, layerData, layerOrder);
      }
    }, {
      key: '_renderMapboxOverlays',
      value: function _renderMapboxOverlays() {
        if (this._map && this._map.isStyleLoaded()) {

          var mapboxLayers = this._renderMapboxLayers();

          (0, _mapboxUtils.updateMapboxLayers)(this._map, mapboxLayers, this.previousLayers, this.props.mapLayers);

          this.previousLayers = mapboxLayers.reduce(function (final, layer) {
            return (0, _extends5.default)({}, final, (0, _defineProperty3.default)({}, layer.id, layer.config));
          }, {});
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var _props4 = this.props,
            mapState = _props4.mapState,
            mapStyle = _props4.mapStyle,
            mapStateActions = _props4.mapStateActions,
            mapLayers = _props4.mapLayers,
            layers = _props4.layers,
            MapComponent = _props4.MapComponent,
            datasets = _props4.datasets,
            mapboxApiAccessToken = _props4.mapboxApiAccessToken,
            mapControls = _props4.mapControls,
            toggleMapControl = _props4.toggleMapControl;
        var updateMap = mapStateActions.updateMap,
            onMapClick = mapStateActions.onMapClick;


        if (!mapStyle.bottomMapStyle) {
          // style not yet loaded
          return _react2.default.createElement('div', null);
        }

        var mapProps = (0, _extends5.default)({}, mapState, {
          preserveDrawingBuffer: true,
          mapboxApiAccessToken: mapboxApiAccessToken,
          onViewportChange: updateMap,
          transformRequest: _mapboxUtils2.transformRequest
        });

        return _react2.default.createElement(
          _styledComponents.StyledMapContainer,
          { style: MAP_STYLE.container, onMouseMove: this._onMouseMove },
          _react2.default.createElement(MapControl, {
            datasets: datasets,
            dragRotate: mapState.dragRotate,
            isSplit: mapState.isSplit,
            isExport: this.props.isExport,
            layers: layers,
            mapIndex: this.props.index,
            mapLayers: mapLayers,
            mapControls: mapControls,
            scale: mapState.scale || 1,
            top: 0,
            onTogglePerspective: mapStateActions.togglePerspective,
            onToggleSplitMap: mapStateActions.toggleSplitMap,
            onMapToggleLayer: this._handleMapToggleLayer,
            onToggleFullScreen: mapStateActions.toggleFullScreen,
            onToggleMapControl: toggleMapControl
          }),
          _react2.default.createElement(
            MapComponent,
            (0, _extends5.default)({}, mapProps, {
              key: 'bottom',
              ref: this._setMapboxMap,
              mapStyle: mapStyle.bottomMapStyle,
              onClick: onMapClick,
              getCursor: this.props.hoverInfo ? function () {
                return 'pointer';
              } : undefined
            }),
            this._renderOverlay(),
            this._renderMapboxOverlays()
          ),
          mapStyle.topMapStyle && _react2.default.createElement(
            'div',
            { style: MAP_STYLE.top },
            _react2.default.createElement(MapComponent, (0, _extends5.default)({}, mapProps, {
              key: 'top',
              mapStyle: mapStyle.topMapStyle
            }))
          ),
          this._renderObjectLayerPopover()
        );
      }
    }]);
    return MapContainer;
  }(_react.Component), _class.propTypes = {
    // required
    datasets: _propTypes2.default.object,
    interactionConfig: _propTypes2.default.object.isRequired,
    layerBlending: _propTypes2.default.string.isRequired,
    layerOrder: _propTypes2.default.arrayOf(_propTypes2.default.any).isRequired,
    layerData: _propTypes2.default.arrayOf(_propTypes2.default.any).isRequired,
    layers: _propTypes2.default.arrayOf(_propTypes2.default.any).isRequired,
    mapState: _propTypes2.default.object.isRequired,
    mapStyle: _propTypes2.default.object.isRequired,
    mapControls: _propTypes2.default.object.isRequired,
    mapboxApiAccessToken: _propTypes2.default.string.isRequired,
    toggleMapControl: _propTypes2.default.func.isRequired,
    visStateActions: _propTypes2.default.object.isRequired,
    mapStateActions: _propTypes2.default.object.isRequired,

    // optional
    isExport: _propTypes2.default.bool,
    clicked: _propTypes2.default.object,
    hoverInfo: _propTypes2.default.object,
    mapLayers: _propTypes2.default.object,
    onMapToggleLayer: _propTypes2.default.func,
    onMapStyleLoaded: _propTypes2.default.func,
    onMapRender: _propTypes2.default.func
  }, _class.defaultProps = {
    MapComponent: _reactMapGl2.default
  }, _temp);


  return MapContainer;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL21hcC1jb250YWluZXIuanMiXSwibmFtZXMiOlsiTWFwQ29udGFpbmVyRmFjdG9yeSIsIk1BUF9TVFlMRSIsImNvbnRhaW5lciIsImRpc3BsYXkiLCJwb3NpdGlvbiIsInRvcCIsInBvaW50ZXJFdmVudHMiLCJnZXRHbENvbnN0IiwiR0wiLCJkIiwiTUFQQk9YR0xfU1RZTEVfVVBEQVRFIiwiZGVwcyIsIk1hcFBvcG92ZXJGYWN0b3J5IiwiTWFwQ29udHJvbEZhY3RvcnkiLCJNYXBQb3BvdmVyIiwiTWFwQ29udHJvbCIsIk1hcENvbnRhaW5lciIsInByb3BzIiwiX29uQ2xvc2VNYXBQb3BvdmVyIiwidmlzU3RhdGVBY3Rpb25zIiwib25MYXllckNsaWNrIiwiX29uTGF5ZXJTZXREb21haW4iLCJpZHgiLCJjb2xvckRvbWFpbiIsImxheWVyQ29uZmlnQ2hhbmdlIiwibGF5ZXJzIiwiX29uV2ViR0xJbml0aWFsaXplZCIsInBpY2tpbmdNb2R1bGUiLCJicnVzaGluZ01vZHVsZSIsImlnbm9yZU11bHRpcGxlUmVnaXN0cmF0aW9ucyIsIl9vbk1vdXNlTW92ZSIsImJydXNoIiwiaW50ZXJhY3Rpb25Db25maWciLCJldnQiLCJuYXRpdmVFdmVudCIsImVuYWJsZWQiLCJzZXRTdGF0ZSIsIm1vdXNlUG9zaXRpb24iLCJvZmZzZXRYIiwib2Zmc2V0WSIsIl9oYW5kbGVNYXBUb2dnbGVMYXllciIsImluZGV4IiwibWFwSW5kZXgiLCJ0b2dnbGVMYXllckZvck1hcCIsImxheWVySWQiLCJfc2V0TWFwYm94TWFwIiwibWFwYm94IiwiX21hcCIsImdldE1hcCIsIm9uIiwiX3JlbmRlck1hcGJveExheWVycyIsInByZXZpb3VzTGF5ZXJzIiwibWFwTGF5ZXJzIiwiZm9yY2UiLCJvbk1hcFN0eWxlTG9hZGVkIiwib25NYXBSZW5kZXIiLCJfb25CZWZvcmVSZW5kZXIiLCJnbCIsIl9zZXRsYXllckJsZW5kaW5nIiwiYmxlbmRpbmciLCJMQVlFUl9CTEVORElOR1MiLCJsYXllckJsZW5kaW5nIiwiYmxlbmRGdW5jIiwiYmxlbmRFcXVhdGlvbiIsIkJMRU5EIiwibWFwIiwiQXJyYXkiLCJpc0FycmF5IiwiX3JlbmRlckxheWVyIiwib3ZlcmxheXMiLCJsYXllckRhdGEiLCJob3ZlckluZm8iLCJjbGlja2VkIiwibWFwU3RhdGUiLCJzdGF0ZSIsImxheWVyIiwiZGF0YSIsImxheWVySW50ZXJhY3Rpb24iLCJvYmplY3RIb3ZlcmVkIiwibGF5ZXJDYWxsYmFja3MiLCJvblNldExheWVyRG9tYWluIiwidmFsIiwiX3Nob3VsZFJlbmRlckxheWVyIiwibGF5ZXJPdmVybGF5IiwicmVuZGVyTGF5ZXIiLCJsZW5ndGgiLCJjb25jYXQiLCJvZmYiLCJkYXRhc2V0cyIsIm9iamVjdEluZm8iLCJ0b29sdGlwIiwicGlja2VkIiwibG5nTGF0Iiwib2JqZWN0Iiwib3ZlcmxheSIsImNvbmZpZyIsImlzVmlzaWJsZSIsImdldEhvdmVyRGF0YSIsImlkIiwiZGF0YUlkIiwiYWxsRGF0YSIsImZpZWxkcyIsInZpZXdwb3J0IiwiY29udGV4dCIsIl9nZXRIb3ZlclhZIiwieCIsInkiLCJwb3BvdmVyUHJvcHMiLCJmaWVsZHNUb1Nob3ciLCJmcmVlemVkIiwiQm9vbGVhbiIsIm9uQ2xvc2UiLCJzY3JlZW5Db29yZCIsInByb2plY3QiLCJpc0F2YWlsYWJsZUFuZFZpc2libGUiLCJzaG91bGRSZW5kZXJMYXllciIsImxheWVyT3JkZXIiLCJkZWNrR2xMYXllcnMiLCJzbGljZSIsInJldmVyc2UiLCJyZWR1Y2UiLCJvbkxheWVySG92ZXIiLCJpc1N0eWxlTG9hZGVkIiwibWFwYm94TGF5ZXJzIiwiZmluYWwiLCJtYXBTdHlsZSIsIm1hcFN0YXRlQWN0aW9ucyIsIk1hcENvbXBvbmVudCIsIm1hcGJveEFwaUFjY2Vzc1Rva2VuIiwibWFwQ29udHJvbHMiLCJ0b2dnbGVNYXBDb250cm9sIiwidXBkYXRlTWFwIiwib25NYXBDbGljayIsImJvdHRvbU1hcFN0eWxlIiwibWFwUHJvcHMiLCJwcmVzZXJ2ZURyYXdpbmdCdWZmZXIiLCJvblZpZXdwb3J0Q2hhbmdlIiwidHJhbnNmb3JtUmVxdWVzdCIsImRyYWdSb3RhdGUiLCJpc1NwbGl0IiwiaXNFeHBvcnQiLCJzY2FsZSIsInRvZ2dsZVBlcnNwZWN0aXZlIiwidG9nZ2xlU3BsaXRNYXAiLCJ0b2dnbGVGdWxsU2NyZWVuIiwidW5kZWZpbmVkIiwiX3JlbmRlck92ZXJsYXkiLCJfcmVuZGVyTWFwYm94T3ZlcmxheXMiLCJ0b3BNYXBTdHlsZSIsIl9yZW5kZXJPYmplY3RMYXllclBvcG92ZXIiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJpc1JlcXVpcmVkIiwic3RyaW5nIiwiYXJyYXlPZiIsImFueSIsImZ1bmMiLCJib29sIiwib25NYXBUb2dnbGVMYXllciIsImRlZmF1bHRQcm9wcyIsIk1hcGJveEdMTWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JBNER3QkEsbUI7O0FBdkN4Qjs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUdBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFHQTs7QUFFQTs7QUFHQTs7OztBQVhBO0FBOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBdUJBLElBQU1DLFlBQVk7QUFDaEJDLGFBQVc7QUFDVEMsYUFBUyxjQURBO0FBRVRDLGNBQVU7QUFGRCxHQURLO0FBS2hCQyxPQUFLO0FBQ0hELGNBQVUsVUFEUCxFQUNtQkMsS0FBSyxLQUR4QixFQUMrQkMsZUFBZTtBQUQ5QztBQUxXLENBQWxCOztBQUhBOzs7QUFMQTs7O0FBa0JBLElBQU1DLGFBQWEsU0FBYkEsVUFBYTtBQUFBLFNBQUtDLG9CQUFHQyxDQUFILENBQUw7QUFBQSxDQUFuQjs7QUFFQSxJ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O0FBRE0sR0E1QjBDOzs7QUFtWWxFLFNBQU9qSixZQUFQO0FBQ0QiLCJmaWxlIjoibWFwLWNvbnRhaW5lci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAxOSBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbi8vIGxpYnJhcmllc1xuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IE1hcGJveEdMTWFwIGZyb20gJ3JlYWN0LW1hcC1nbCc7XG5pbXBvcnQgRGVja0dMIGZyb20gJ2RlY2suZ2wnO1xuaW1wb3J0IEdMIGZyb20gJ2x1bWEuZ2wvY29uc3RhbnRzJztcbmltcG9ydCB7cmVnaXN0ZXJTaGFkZXJNb2R1bGVzLCBzZXRQYXJhbWV0ZXJzfSBmcm9tICdsdW1hLmdsJztcbmltcG9ydCBwaWNraW5nTW9kdWxlIGZyb20gJ3NoYWRlcmxpYi9waWNraW5nLW1vZHVsZSc7XG5pbXBvcnQgYnJ1c2hpbmdNb2R1bGUgZnJvbSAnc2hhZGVybGliL2JydXNoaW5nLW1vZHVsZSc7XG5cbi8vIGNvbXBvbmVudHNcbmltcG9ydCBNYXBQb3BvdmVyRmFjdG9yeSBmcm9tICdjb21wb25lbnRzL21hcC9tYXAtcG9wb3Zlcic7XG5pbXBvcnQgTWFwQ29udHJvbEZhY3RvcnkgZnJvbSAnY29tcG9uZW50cy9tYXAvbWFwLWNvbnRyb2wnO1xuaW1wb3J0IHtTdHlsZWRNYXBDb250YWluZXJ9IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL3N0eWxlZC1jb21wb25lbnRzJztcblxuLy8gT3ZlcmxheSB0eXBlXG5pbXBvcnQge2dlbmVyYXRlTWFwYm94TGF5ZXJzLCB1cGRhdGVNYXBib3hMYXllcnN9IGZyb20gJy4uL2xheWVycy9tYXBib3gtdXRpbHMnO1xuXG5pbXBvcnQge3RyYW5zZm9ybVJlcXVlc3R9IGZyb20gJ3V0aWxzL21hcC1zdHlsZS11dGlscy9tYXBib3gtdXRpbHMnO1xuXG4vLyBkZWZhdWx0LXNldHRpbmdzXG5pbXBvcnQge0xBWUVSX0JMRU5ESU5HU30gZnJvbSAnY29uc3RhbnRzL2RlZmF1bHQtc2V0dGluZ3MnO1xuXG5jb25zdCBNQVBfU1RZTEUgPSB7XG4gIGNvbnRhaW5lcjoge1xuICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnXG4gIH0sXG4gIHRvcDoge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLCB0b3A6ICcwcHgnLCBwb2ludGVyRXZlbnRzOiAnbm9uZSdcbiAgfVxufTtcblxuY29uc3QgZ2V0R2xDb25zdCA9IGQgPT4gR0xbZF07XG5cbmNvbnN0IE1BUEJPWEdMX1NUWUxFX1VQREFURSA9ICdzdHlsZS5sb2FkJztcbk1hcENvbnRhaW5lckZhY3RvcnkuZGVwcyA9IFtcbiAgTWFwUG9wb3ZlckZhY3RvcnksIE1hcENvbnRyb2xGYWN0b3J5XG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYXBDb250YWluZXJGYWN0b3J5KE1hcFBvcG92ZXIsIE1hcENvbnRyb2wpIHtcbiAgY2xhc3MgTWFwQ29udGFpbmVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgLy8gcmVxdWlyZWRcbiAgICAgIGRhdGFzZXRzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgaW50ZXJhY3Rpb25Db25maWc6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICAgIGxheWVyQmxlbmRpbmc6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgIGxheWVyT3JkZXI6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5hbnkpLmlzUmVxdWlyZWQsXG4gICAgICBsYXllckRhdGE6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5hbnkpLmlzUmVxdWlyZWQsXG4gICAgICBsYXllcnM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5hbnkpLmlzUmVxdWlyZWQsXG4gICAgICBtYXBTdGF0ZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgICAgbWFwU3R5bGU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICAgIG1hcENvbnRyb2xzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgICBtYXBib3hBcGlBY2Nlc3NUb2tlbjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgdG9nZ2xlTWFwQ29udHJvbDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICAgIHZpc1N0YXRlQWN0aW9uczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgICAgbWFwU3RhdGVBY3Rpb25zOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG5cbiAgICAgIC8vIG9wdGlvbmFsXG4gICAgICBpc0V4cG9ydDogUHJvcFR5cGVzLmJvb2wsXG4gICAgICBjbGlja2VkOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgaG92ZXJJbmZvOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgbWFwTGF5ZXJzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgb25NYXBUb2dnbGVMYXllcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICBvbk1hcFN0eWxlTG9hZGVkOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgIG9uTWFwUmVuZGVyOiBQcm9wVHlwZXMuZnVuY1xuICAgIH07XG5cbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgTWFwQ29tcG9uZW50OiBNYXBib3hHTE1hcFxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgbW91c2VQb3NpdGlvbjogWzAsIDBdXG4gICAgICB9O1xuICAgICAgdGhpcy5wcmV2aW91c0xheWVycyA9IHtcbiAgICAgICAgLy8gW2xheWVycy5pZF06IG1hcGJveExheWVyQ29uZmlnXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgLy8gdW5iaW5kIG1hcGJveGdsIGV2ZW50IGxpc3RlbmVyXG4gICAgICBpZiAodGhpcy5fbWFwKSB7XG4gICAgICAgIHRoaXMuX21hcC5vZmYoTUFQQk9YR0xfU1RZTEVfVVBEQVRFKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKiBjb21wb25lbnQgcHJpdmF0ZSBmdW5jdGlvbnMgKi9cbiAgICBfb25DbG9zZU1hcFBvcG92ZXIgPSAoKSA9PiB7XG4gICAgICB0aGlzLnByb3BzLnZpc1N0YXRlQWN0aW9ucy5vbkxheWVyQ2xpY2sobnVsbCk7XG4gICAgfTtcblxuICAgIF9vbkxheWVyU2V0RG9tYWluID0gKGlkeCwgY29sb3JEb21haW4pID0+IHtcbiAgICAgIHRoaXMucHJvcHMudmlzU3RhdGVBY3Rpb25zLmxheWVyQ29uZmlnQ2hhbmdlKHRoaXMucHJvcHMubGF5ZXJzW2lkeF0sIHtcbiAgICAgICAgY29sb3JEb21haW5cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBfb25XZWJHTEluaXRpYWxpemVkID0gZ2wgPT4ge1xuICAgICAgcmVnaXN0ZXJTaGFkZXJNb2R1bGVzKFxuICAgICAgICBbcGlja2luZ01vZHVsZSwgYnJ1c2hpbmdNb2R1bGVdLCB7XG4gICAgICAgICAgaWdub3JlTXVsdGlwbGVSZWdpc3RyYXRpb25zOiB0cnVlXG4gICAgICB9KTtcblxuICAgICAgLy8gYWxsb3cgVWludDMyIGluZGljZXMgaW4gYnVpbGRpbmcgbGF5ZXJcbiAgICAgIC8vIGdsLmdldEV4dGVuc2lvbignT0VTX2VsZW1lbnRfaW5kZXhfdWludCcpO1xuICAgIH07XG5cbiAgICBfb25Nb3VzZU1vdmUgPSBldnQgPT4ge1xuICAgICAgY29uc3Qge2ludGVyYWN0aW9uQ29uZmlnOiB7YnJ1c2h9fSA9IHRoaXMucHJvcHM7XG5cbiAgICAgIGlmIChldnQubmF0aXZlRXZlbnQgJiYgYnJ1c2guZW5hYmxlZCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBtb3VzZVBvc2l0aW9uOiBbZXZ0Lm5hdGl2ZUV2ZW50Lm9mZnNldFgsIGV2dC5uYXRpdmVFdmVudC5vZmZzZXRZXVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX2hhbmRsZU1hcFRvZ2dsZUxheWVyID0gbGF5ZXJJZCA9PiB7XG4gICAgICBjb25zdCB7aW5kZXg6IG1hcEluZGV4ID0gMCwgdmlzU3RhdGVBY3Rpb25zfSA9IHRoaXMucHJvcHM7XG4gICAgICB2aXNTdGF0ZUFjdGlvbnMudG9nZ2xlTGF5ZXJGb3JNYXAobWFwSW5kZXgsIGxheWVySWQpO1xuICAgIH07XG5cbiAgICBfc2V0TWFwYm94TWFwID0gKG1hcGJveCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLl9tYXAgJiYgbWFwYm94KSB7XG4gICAgICAgIHRoaXMuX21hcCA9IG1hcGJveC5nZXRNYXAoKTtcbiAgICAgICAgLy8gYmluZCBtYXBib3hnbCBldmVudCBsaXN0ZW5lclxuICAgICAgICB0aGlzLl9tYXAub24oTUFQQk9YR0xfU1RZTEVfVVBEQVRFLCAoKSA9PiB7XG4gICAgICAgICAgLy8gZm9yY2UgcmVmcmVzaCBtYXBib3hnbCBsYXllcnNcblxuICAgICAgICAgIHVwZGF0ZU1hcGJveExheWVycyhcbiAgICAgICAgICAgIHRoaXMuX21hcCxcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlck1hcGJveExheWVycygpLFxuICAgICAgICAgICAgdGhpcy5wcmV2aW91c0xheWVycyxcbiAgICAgICAgICAgIHRoaXMucHJvcHMubWFwTGF5ZXJzLFxuICAgICAgICAgICAge2ZvcmNlOiB0cnVlfVxuICAgICAgICAgICk7XG5cbiAgICAgICAgICBpZiAodHlwZW9mIHRoaXMucHJvcHMub25NYXBTdHlsZUxvYWRlZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbk1hcFN0eWxlTG9hZGVkKHRoaXMuX21hcCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLl9tYXAub24oJ3JlbmRlcicsICgpID0+IHtcbiAgICAgICAgICBpZiAodHlwZW9mIHRoaXMucHJvcHMub25NYXBSZW5kZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25NYXBSZW5kZXIodGhpcy5fbWFwKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIF9vbkJlZm9yZVJlbmRlciA9ICh7Z2x9KSA9PiB7XG4gICAgICB0aGlzLl9zZXRsYXllckJsZW5kaW5nKGdsKTtcbiAgICB9O1xuXG4gICAgX3NldGxheWVyQmxlbmRpbmcgPSBnbCA9PiB7XG4gICAgICBjb25zdCBibGVuZGluZyA9IExBWUVSX0JMRU5ESU5HU1t0aGlzLnByb3BzLmxheWVyQmxlbmRpbmddO1xuICAgICAgY29uc3Qge2JsZW5kRnVuYywgYmxlbmRFcXVhdGlvbn0gPSBibGVuZGluZztcblxuICAgICAgc2V0UGFyYW1ldGVycyhnbCwge1xuICAgICAgICBbR0wuQkxFTkRdOiB0cnVlLFxuICAgICAgICAuLi4oYmxlbmRGdW5jID8ge1xuICAgICAgICAgIGJsZW5kRnVuYzogYmxlbmRGdW5jLm1hcChnZXRHbENvbnN0KSxcbiAgICAgICAgICBibGVuZEVxdWF0aW9uOiBBcnJheS5pc0FycmF5KGJsZW5kRXF1YXRpb24pID8gYmxlbmRFcXVhdGlvbi5tYXAoZ2V0R2xDb25zdCkgOiBnZXRHbENvbnN0KGJsZW5kRXF1YXRpb24pXG4gICAgICAgIH0gOiB7fSlcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvKiBjb21wb25lbnQgcmVuZGVyIGZ1bmN0aW9ucyAqL1xuICAgIC8qIGVzbGludC1kaXNhYmxlIGNvbXBsZXhpdHkgKi9cbiAgICBfcmVuZGVyT2JqZWN0TGF5ZXJQb3BvdmVyKCkge1xuICAgICAgLy8gVE9ETzogbW92ZSB0aGlzIGludG8gcmVkdWNlciBzbyBpdCBjYW4gYmUgdGVzdGVkXG4gICAgICBjb25zdCB7XG4gICAgICAgIG1hcFN0YXRlLFxuICAgICAgICBob3ZlckluZm8sXG4gICAgICAgIGNsaWNrZWQsXG4gICAgICAgIGRhdGFzZXRzLFxuICAgICAgICBpbnRlcmFjdGlvbkNvbmZpZyxcbiAgICAgICAgbGF5ZXJzLFxuICAgICAgICBtYXBMYXllcnNcbiAgICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAvLyBpZiBjbGlja2VkIHNvbWV0aGluZywgaWdub3JlIGhvdmVyIGJlaGF2aW9yXG4gICAgICBjb25zdCBvYmplY3RJbmZvID0gY2xpY2tlZCB8fCBob3ZlckluZm87XG4gICAgICBpZiAoXG4gICAgICAgICFpbnRlcmFjdGlvbkNvbmZpZy50b29sdGlwLmVuYWJsZWQgfHxcbiAgICAgICAgIW9iamVjdEluZm8gfHxcbiAgICAgICAgIW9iamVjdEluZm8ucGlja2VkXG4gICAgICApIHtcbiAgICAgICAgLy8gbm90aGluZyBob3ZlcmVkXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB7bG5nTGF0LCBvYmplY3QsIGxheWVyOiBvdmVybGF5fSA9IG9iamVjdEluZm87XG5cbiAgICAgIC8vIGRlY2tnbCBsYXllciB0byBrZXBsZXItZ2wgbGF5ZXJcbiAgICAgIGNvbnN0IGxheWVyID0gbGF5ZXJzW292ZXJsYXkucHJvcHMuaWR4XTtcblxuICAgICAgaWYgKFxuICAgICAgICAhbGF5ZXIgfHxcbiAgICAgICAgIWxheWVyLmNvbmZpZy5pc1Zpc2libGUgfHxcbiAgICAgICAgIW9iamVjdCB8fFxuICAgICAgICAhbGF5ZXIuZ2V0SG92ZXJEYXRhIHx8XG4gICAgICAgIChtYXBMYXllcnMgJiYgIW1hcExheWVyc1tsYXllci5pZF0uaXNWaXNpYmxlKVxuICAgICAgKSB7XG4gICAgICAgIC8vIGxheWVyIGlzIG5vdCB2aXNpYmxlXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB7Y29uZmlnOiB7ZGF0YUlkfX0gPSBsYXllcjtcbiAgICAgIGNvbnN0IHthbGxEYXRhLCBmaWVsZHN9ID0gZGF0YXNldHNbZGF0YUlkXTtcbiAgICAgIGNvbnN0IGRhdGEgPSBsYXllci5nZXRIb3ZlckRhdGEob2JqZWN0LCBhbGxEYXRhKTtcblxuICAgICAgLy8gcHJvamVjdCBsbmdsYXQgdG8gc2NyZWVuIHNvIHRoYXQgdG9vbHRpcCBmb2xsb3dzIHRoZSBvYmplY3Qgb24gem9vbVxuICAgICAgY29uc3Qge3ZpZXdwb3J0fSA9IG92ZXJsYXkuY29udGV4dDtcbiAgICAgIGNvbnN0IHt4LCB5fSA9IHRoaXMuX2dldEhvdmVyWFkodmlld3BvcnQsIGxuZ0xhdCkgfHwgb2JqZWN0SW5mbztcblxuICAgICAgY29uc3QgcG9wb3ZlclByb3BzID0ge1xuICAgICAgICBkYXRhLFxuICAgICAgICBmaWVsZHMsXG4gICAgICAgIGZpZWxkc1RvU2hvdzogaW50ZXJhY3Rpb25Db25maWcudG9vbHRpcC5jb25maWcuZmllbGRzVG9TaG93W2RhdGFJZF0sXG4gICAgICAgIGxheWVyLFxuICAgICAgICBpc1Zpc2libGU6IHRydWUsXG4gICAgICAgIHgsXG4gICAgICAgIHksXG4gICAgICAgIGZyZWV6ZWQ6IEJvb2xlYW4oY2xpY2tlZCksXG4gICAgICAgIG9uQ2xvc2U6IHRoaXMuX29uQ2xvc2VNYXBQb3BvdmVyLFxuICAgICAgICBtYXBTdGF0ZVxuICAgICAgfTtcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8TWFwUG9wb3ZlciB7Li4ucG9wb3ZlclByb3BzfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgLyogZXNsaW50LWVuYWJsZSBjb21wbGV4aXR5ICovXG5cbiAgICBfZ2V0SG92ZXJYWSh2aWV3cG9ydCwgbG5nTGF0KSB7XG4gICAgICBjb25zdCBzY3JlZW5Db29yZCA9ICF2aWV3cG9ydCB8fCAhbG5nTGF0ID8gbnVsbCA6IHZpZXdwb3J0LnByb2plY3QobG5nTGF0KTtcblxuICAgICAgcmV0dXJuIHNjcmVlbkNvb3JkICYmIHt4OiBzY3JlZW5Db29yZFswXSwgeTogc2NyZWVuQ29vcmRbMV19O1xuICAgIH1cblxuICAgIF9zaG91bGRSZW5kZXJMYXllcihsYXllciwgZGF0YSwgbWFwTGF5ZXJzKSB7XG4gICAgICBjb25zdCBpc0F2YWlsYWJsZUFuZFZpc2libGUgPVxuICAgICAgICAhKG1hcExheWVycyAmJiBtYXBMYXllcnNbbGF5ZXIuaWRdKSB8fCBtYXBMYXllcnNbbGF5ZXIuaWRdLmlzVmlzaWJsZTtcbiAgICAgIHJldHVybiBsYXllci5zaG91bGRSZW5kZXJMYXllcihkYXRhKSAmJiBpc0F2YWlsYWJsZUFuZFZpc2libGU7XG4gICAgfVxuXG4gICAgX3JlbmRlckxheWVyID0gKG92ZXJsYXlzLCBpZHgpID0+IHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgbGF5ZXJzLFxuICAgICAgICBsYXllckRhdGEsXG4gICAgICAgIGhvdmVySW5mbyxcbiAgICAgICAgY2xpY2tlZCxcbiAgICAgICAgbWFwTGF5ZXJzLFxuICAgICAgICBtYXBTdGF0ZSxcbiAgICAgICAgaW50ZXJhY3Rpb25Db25maWdcbiAgICAgIH0gPSB0aGlzLnByb3BzO1xuICAgICAgY29uc3Qge21vdXNlUG9zaXRpb259ID0gdGhpcy5zdGF0ZTtcbiAgICAgIGNvbnN0IGxheWVyID0gbGF5ZXJzW2lkeF07XG4gICAgICBjb25zdCBkYXRhID0gbGF5ZXJEYXRhW2lkeF07XG5cbiAgICAgIGNvbnN0IGxheWVySW50ZXJhY3Rpb24gPSB7XG4gICAgICAgIG1vdXNlUG9zaXRpb25cbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IG9iamVjdEhvdmVyZWQgPSBjbGlja2VkIHx8IGhvdmVySW5mbztcbiAgICAgIGNvbnN0IGxheWVyQ2FsbGJhY2tzID0ge1xuICAgICAgICBvblNldExheWVyRG9tYWluOiB2YWwgPT4gdGhpcy5fb25MYXllclNldERvbWFpbihpZHgsIHZhbClcbiAgICAgIH07XG5cbiAgICAgIGlmICghdGhpcy5fc2hvdWxkUmVuZGVyTGF5ZXIobGF5ZXIsIGRhdGEsIG1hcExheWVycykpIHtcbiAgICAgICAgcmV0dXJuIG92ZXJsYXlzO1xuICAgICAgfVxuXG4gICAgICBsZXQgbGF5ZXJPdmVybGF5ID0gW107XG5cbiAgICAgIC8vIExheWVyIGlzIExheWVyIGNsYXNzXG4gICAgICBpZiAodHlwZW9mIGxheWVyLnJlbmRlckxheWVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGxheWVyT3ZlcmxheSA9IGxheWVyLnJlbmRlckxheWVyKHtcbiAgICAgICAgICBkYXRhLFxuICAgICAgICAgIGlkeCxcbiAgICAgICAgICBsYXllckludGVyYWN0aW9uLFxuICAgICAgICAgIG9iamVjdEhvdmVyZWQsXG4gICAgICAgICAgbWFwU3RhdGUsXG4gICAgICAgICAgaW50ZXJhY3Rpb25Db25maWcsXG4gICAgICAgICAgbGF5ZXJDYWxsYmFja3NcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChsYXllck92ZXJsYXkubGVuZ3RoKSB7XG4gICAgICAgIG92ZXJsYXlzID0gb3ZlcmxheXMuY29uY2F0KGxheWVyT3ZlcmxheSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gb3ZlcmxheXM7XG4gICAgfTtcblxuICAgIF9yZW5kZXJPdmVybGF5KCkge1xuICAgICAgY29uc3Qge1xuICAgICAgICBtYXBTdGF0ZSxcbiAgICAgICAgbGF5ZXJEYXRhLFxuICAgICAgICBsYXllck9yZGVyLFxuICAgICAgICB2aXNTdGF0ZUFjdGlvbnNcbiAgICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICBsZXQgZGVja0dsTGF5ZXJzID0gW107XG5cbiAgICAgIC8vIHdhaXQgdW50aWwgZGF0YSBpcyByZWFkeSBiZWZvcmUgcmVuZGVyIGRhdGEgbGF5ZXJzXG4gICAgICBpZiAobGF5ZXJEYXRhICYmIGxheWVyRGF0YS5sZW5ndGgpIHtcbiAgICAgICAgLy8gbGFzdCBsYXllciByZW5kZXIgZmlyc3RcbiAgICAgICAgZGVja0dsTGF5ZXJzID0gbGF5ZXJPcmRlclxuICAgICAgICAgIC5zbGljZSgpXG4gICAgICAgICAgLnJldmVyc2UoKVxuICAgICAgICAgIC5yZWR1Y2UodGhpcy5fcmVuZGVyTGF5ZXIsIFtdKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPERlY2tHTFxuICAgICAgICAgIHZpZXdTdGF0ZT17bWFwU3RhdGV9XG4gICAgICAgICAgaWQ9XCJkZWZhdWx0LWRlY2tnbC1vdmVybGF5XCJcbiAgICAgICAgICBsYXllcnM9e2RlY2tHbExheWVyc31cbiAgICAgICAgICBvbldlYkdMSW5pdGlhbGl6ZWQ9e3RoaXMuX29uV2ViR0xJbml0aWFsaXplZH1cbiAgICAgICAgICBvbkJlZm9yZVJlbmRlcj17dGhpcy5fb25CZWZvcmVSZW5kZXJ9XG4gICAgICAgICAgb25MYXllckhvdmVyPXt2aXNTdGF0ZUFjdGlvbnMub25MYXllckhvdmVyfVxuICAgICAgICAgIG9uTGF5ZXJDbGljaz17dmlzU3RhdGVBY3Rpb25zLm9uTGF5ZXJDbGlja31cbiAgICAgICAgLz5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgX3JlbmRlck1hcGJveExheWVycygpIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgbGF5ZXJzLFxuICAgICAgICBsYXllckRhdGEsXG4gICAgICAgIGxheWVyT3JkZXJcbiAgICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICByZXR1cm4gZ2VuZXJhdGVNYXBib3hMYXllcnMobGF5ZXJzLCBsYXllckRhdGEsIGxheWVyT3JkZXIpO1xuICAgIH1cblxuICAgIF9yZW5kZXJNYXBib3hPdmVybGF5cygpIHtcbiAgICAgIGlmICh0aGlzLl9tYXAgJiYgdGhpcy5fbWFwLmlzU3R5bGVMb2FkZWQoKSkge1xuXG4gICAgICAgIGNvbnN0IG1hcGJveExheWVycyA9IHRoaXMuX3JlbmRlck1hcGJveExheWVycygpO1xuXG4gICAgICAgIHVwZGF0ZU1hcGJveExheWVycyhcbiAgICAgICAgICB0aGlzLl9tYXAsXG4gICAgICAgICAgbWFwYm94TGF5ZXJzLFxuICAgICAgICAgIHRoaXMucHJldmlvdXNMYXllcnMsXG4gICAgICAgICAgdGhpcy5wcm9wcy5tYXBMYXllcnNcbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLnByZXZpb3VzTGF5ZXJzID0gbWFwYm94TGF5ZXJzLnJlZHVjZSgoZmluYWwsIGxheWVyKSA9PiAoe1xuICAgICAgICAgIC4uLmZpbmFsLFxuICAgICAgICAgIFtsYXllci5pZF06IGxheWVyLmNvbmZpZ1xuICAgICAgICB9KSwge30pXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgY29uc3Qge1xuICAgICAgICBtYXBTdGF0ZSwgbWFwU3R5bGUsIG1hcFN0YXRlQWN0aW9ucywgbWFwTGF5ZXJzLCBsYXllcnMsIE1hcENvbXBvbmVudCxcbiAgICAgICAgZGF0YXNldHMsIG1hcGJveEFwaUFjY2Vzc1Rva2VuLCBtYXBDb250cm9scywgdG9nZ2xlTWFwQ29udHJvbFxuICAgICAgfSA9IHRoaXMucHJvcHM7XG4gICAgICBjb25zdCB7dXBkYXRlTWFwLCBvbk1hcENsaWNrfSA9IG1hcFN0YXRlQWN0aW9ucztcblxuICAgICAgaWYgKCFtYXBTdHlsZS5ib3R0b21NYXBTdHlsZSkge1xuICAgICAgICAvLyBzdHlsZSBub3QgeWV0IGxvYWRlZFxuICAgICAgICByZXR1cm4gPGRpdi8+O1xuICAgICAgfVxuXG4gICAgICBjb25zdCBtYXBQcm9wcyA9IHtcbiAgICAgICAgLi4ubWFwU3RhdGUsXG4gICAgICAgIHByZXNlcnZlRHJhd2luZ0J1ZmZlcjogdHJ1ZSxcbiAgICAgICAgbWFwYm94QXBpQWNjZXNzVG9rZW4sXG4gICAgICAgIG9uVmlld3BvcnRDaGFuZ2U6IHVwZGF0ZU1hcCxcbiAgICAgICAgdHJhbnNmb3JtUmVxdWVzdFxuICAgICAgfTtcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFN0eWxlZE1hcENvbnRhaW5lciBzdHlsZT17TUFQX1NUWUxFLmNvbnRhaW5lcn0gb25Nb3VzZU1vdmU9e3RoaXMuX29uTW91c2VNb3ZlfT5cbiAgICAgICAgICA8TWFwQ29udHJvbFxuICAgICAgICAgICAgZGF0YXNldHM9e2RhdGFzZXRzfVxuICAgICAgICAgICAgZHJhZ1JvdGF0ZT17bWFwU3RhdGUuZHJhZ1JvdGF0ZX1cbiAgICAgICAgICAgIGlzU3BsaXQ9e21hcFN0YXRlLmlzU3BsaXR9XG4gICAgICAgICAgICBpc0V4cG9ydD17dGhpcy5wcm9wcy5pc0V4cG9ydH1cbiAgICAgICAgICAgIGxheWVycz17bGF5ZXJzfVxuICAgICAgICAgICAgbWFwSW5kZXg9e3RoaXMucHJvcHMuaW5kZXh9XG4gICAgICAgICAgICBtYXBMYXllcnM9e21hcExheWVyc31cbiAgICAgICAgICAgIG1hcENvbnRyb2xzPXttYXBDb250cm9sc31cbiAgICAgICAgICAgIHNjYWxlPXttYXBTdGF0ZS5zY2FsZSB8fCAxfVxuICAgICAgICAgICAgdG9wPXswfVxuICAgICAgICAgICAgb25Ub2dnbGVQZXJzcGVjdGl2ZT17bWFwU3RhdGVBY3Rpb25zLnRvZ2dsZVBlcnNwZWN0aXZlfVxuICAgICAgICAgICAgb25Ub2dnbGVTcGxpdE1hcD17bWFwU3RhdGVBY3Rpb25zLnRvZ2dsZVNwbGl0TWFwfVxuICAgICAgICAgICAgb25NYXBUb2dnbGVMYXllcj17dGhpcy5faGFuZGxlTWFwVG9nZ2xlTGF5ZXJ9XG4gICAgICAgICAgICBvblRvZ2dsZUZ1bGxTY3JlZW49e21hcFN0YXRlQWN0aW9ucy50b2dnbGVGdWxsU2NyZWVufVxuICAgICAgICAgICAgb25Ub2dnbGVNYXBDb250cm9sPXt0b2dnbGVNYXBDb250cm9sfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPE1hcENvbXBvbmVudFxuICAgICAgICAgICAgey4uLm1hcFByb3BzfVxuICAgICAgICAgICAga2V5PVwiYm90dG9tXCJcbiAgICAgICAgICAgIHJlZj17dGhpcy5fc2V0TWFwYm94TWFwfVxuICAgICAgICAgICAgbWFwU3R5bGU9e21hcFN0eWxlLmJvdHRvbU1hcFN0eWxlfVxuICAgICAgICAgICAgb25DbGljaz17b25NYXBDbGlja31cbiAgICAgICAgICAgIGdldEN1cnNvcj17dGhpcy5wcm9wcy5ob3ZlckluZm8gPyAoKSA9PiAncG9pbnRlcicgOiB1bmRlZmluZWR9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3RoaXMuX3JlbmRlck92ZXJsYXkoKX1cbiAgICAgICAgICAgIHt0aGlzLl9yZW5kZXJNYXBib3hPdmVybGF5cygpfVxuICAgICAgICAgIDwvTWFwQ29tcG9uZW50PlxuICAgICAgICAgIHttYXBTdHlsZS50b3BNYXBTdHlsZSAmJiAoXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtNQVBfU1RZTEUudG9wfT5cbiAgICAgICAgICAgICAgPE1hcENvbXBvbmVudFxuICAgICAgICAgICAgICAgIHsuLi5tYXBQcm9wc31cbiAgICAgICAgICAgICAgICBrZXk9XCJ0b3BcIlxuICAgICAgICAgICAgICAgIG1hcFN0eWxlPXttYXBTdHlsZS50b3BNYXBTdHlsZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgICAge3RoaXMuX3JlbmRlck9iamVjdExheWVyUG9wb3ZlcigpfVxuICAgICAgICA8L1N0eWxlZE1hcENvbnRhaW5lcj5cbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIE1hcENvbnRhaW5lcjtcbn1cbiJdfQ==
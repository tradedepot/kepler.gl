'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  font-family: ff-clan-web-pro, \'Helvetica Neue\', Helvetica, sans-serif;\n  font-weight: 400;\n  font-size: 0.875em;\n  line-height: 1.71429;\n\n  *,\n  *:before,\n  *:after {\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n  }\n\n  ul {\n    margin: 0;\n    padding: 0;\n  }\n\n  li {\n    margin: 0;\n  }\n\n  a {\n    text-decoration: none;\n    color: ', ';\n  }\n'], ['\n  font-family: ff-clan-web-pro, \'Helvetica Neue\', Helvetica, sans-serif;\n  font-weight: 400;\n  font-size: 0.875em;\n  line-height: 1.71429;\n\n  *,\n  *:before,\n  *:after {\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n  }\n\n  ul {\n    margin: 0;\n    padding: 0;\n  }\n\n  li {\n    margin: 0;\n  }\n\n  a {\n    text-decoration: none;\n    color: ', ';\n  }\n']); // Copyright (c) 2019 Uber Technologies, Inc.
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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _window = require('global/window');

var _redux = require('redux');

var _d3Request = require('d3-request');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _keplerglConnect = require('../connect/keplergl-connect');

var _visStateActions = require('../actions/vis-state-actions');

var VisStateActions = _interopRequireWildcard(_visStateActions);

var _mapStateActions = require('../actions/map-state-actions');

var MapStateActions = _interopRequireWildcard(_mapStateActions);

var _mapStyleActions = require('../actions/map-style-actions');

var MapStyleActions = _interopRequireWildcard(_mapStyleActions);

var _uiStateActions = require('../actions/ui-state-actions');

var UIStateActions = _interopRequireWildcard(_uiStateActions);

var _defaultSettings = require('../constants/default-settings');

var _sidePanel = require('./side-panel');

var _sidePanel2 = _interopRequireDefault(_sidePanel);

var _mapContainer = require('./map-container');

var _mapContainer2 = _interopRequireDefault(_mapContainer);

var _bottomWidget = require('./bottom-widget');

var _bottomWidget2 = _interopRequireDefault(_bottomWidget);

var _modalContainer = require('./modal-container');

var _modalContainer2 = _interopRequireDefault(_modalContainer);

var _plotContainer = require('./plot-container');

var _plotContainer2 = _interopRequireDefault(_plotContainer);

var _utils = require('../utils/utils');

var _base = require('../styles/base');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GlobalStyle = _styledComponents2.default.div(_templateObject, function (props) {
  return props.theme.labelColor;
});

KeplerGlFactory.deps = [_bottomWidget2.default, _mapContainer2.default, _modalContainer2.default, _sidePanel2.default, _plotContainer2.default];

function KeplerGlFactory(BottomWidget, MapContainer, ModalWrapper, SidePanel, PlotContainer) {
  var _class, _temp2;

  var KeplerGL = (_temp2 = _class = function (_Component) {
    (0, _inherits3.default)(KeplerGL, _Component);

    function KeplerGL() {
      var _ref;

      var _temp, _this, _ret;

      (0, _classCallCheck3.default)(this, KeplerGL);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = KeplerGL.__proto__ || Object.getPrototypeOf(KeplerGL)).call.apply(_ref, [this].concat(args))), _this), _this._loadMapStyle = function () {
        var defaultStyles = Object.values(_this.props.mapStyle.mapStyles);
        // add id to custom map styles if not given
        var customeStyles = (_this.props.mapStyles || []).map(function (ms) {
          return (0, _extends3.default)({}, ms, {
            id: ms.id || (0, _utils.generateHashId)()
          });
        });

        [].concat((0, _toConsumableArray3.default)(customeStyles), (0, _toConsumableArray3.default)(defaultStyles)).forEach(function (style) {
          if (style.style) {
            _this.props.mapStyleActions.loadMapStyles((0, _defineProperty3.default)({}, style.id, style));
          } else {
            _this._requestMapStyle(style);
          }
        });
      }, _this._requestMapStyle = function (mapStyle) {
        var url = mapStyle.url,
            id = mapStyle.id;

        (0, _d3Request.json)(url, function (error, result) {
          if (error) {
            _window.console.warn('Error loading map style ' + mapStyle.url);
          } else {
            _this.props.mapStyleActions.loadMapStyles((0, _defineProperty3.default)({}, id, (0, _extends3.default)({}, mapStyle, { style: result })));
          }
        });
      }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(KeplerGL, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this._loadMapStyle(this.props.mapStyles);
        this._handleResize(this.props);
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        if (
        // if dimension props has changed
        this.props.height !== nextProps.height || this.props.width !== nextProps.width ||
        // react-map-gl will dispatch updateViewport after this._handleResize is called
        // here we check if this.props.mapState.height is sync with props.height
        nextProps.height !== this.props.mapState.height) {
          this._handleResize(nextProps);
        }
      }
    }, {
      key: '_handleResize',
      value: function _handleResize(_ref2) {
        var width = _ref2.width,
            height = _ref2.height;

        if (!Number.isFinite(width) || !Number.isFinite(height)) {
          _window.console.warn('width and height is required');
          return;
        }
        this.props.mapStateActions.updateMap({
          width: width / (1 + Number(this.props.mapState.isSplit)),
          height: height
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var _this2 = this;

        var _props = this.props,
            id = _props.id,
            appName = _props.appName,
            version = _props.version,
            homeUrl = _props.homeUrl,
            onSaveMap = _props.onSaveMap,
            width = _props.width,
            height = _props.height,
            mapboxApiAccessToken = _props.mapboxApiAccessToken,
            mapStyle = _props.mapStyle,
            mapState = _props.mapState,
            uiState = _props.uiState,
            visState = _props.visState,
            visStateActions = _props.visStateActions,
            mapStateActions = _props.mapStateActions,
            mapStyleActions = _props.mapStyleActions,
            uiStateActions = _props.uiStateActions;
        var filters = visState.filters,
            layers = visState.layers,
            splitMaps = visState.splitMaps,
            layerOrder = visState.layerOrder,
            layerBlending = visState.layerBlending,
            layerClasses = visState.layerClasses,
            interactionConfig = visState.interactionConfig,
            datasets = visState.datasets,
            layerData = visState.layerData,
            hoverInfo = visState.hoverInfo,
            clicked = visState.clicked;


        var sideFields = {
          appName: appName,
          version: version,
          homeUrl: homeUrl,
          datasets: datasets,
          filters: filters,
          layers: layers,
          layerOrder: layerOrder,
          layerClasses: layerClasses,
          interactionConfig: interactionConfig,
          mapStyle: mapStyle,
          layerBlending: layerBlending,
          onSaveMap: onSaveMap,
          uiState: uiState,
          mapStyleActions: mapStyleActions,
          visStateActions: visStateActions,
          uiStateActions: uiStateActions,
          width: _defaultSettings.DIMENSIONS.sidePanel.width
        };

        var mapFields = {
          datasets: datasets,
          mapboxApiAccessToken: mapboxApiAccessToken,
          mapState: mapState,
          mapStyle: mapStyle,
          mapControls: uiState.mapControls,
          layers: layers,
          layerOrder: layerOrder,
          layerData: layerData,
          layerBlending: layerBlending,
          interactionConfig: interactionConfig,
          hoverInfo: hoverInfo,
          clicked: clicked,
          toggleMapControl: uiStateActions.toggleMapControl,
          uiStateActions: uiStateActions,
          visStateActions: visStateActions,
          mapStateActions: mapStateActions
        };

        var isSplit = splitMaps && splitMaps.length > 1;
        var containerW = mapState.width * (Number(isSplit) + 1);

        var mapContainers = !isSplit ? [_react2.default.createElement(MapContainer, (0, _extends3.default)({
          key: 0,
          index: 0
        }, mapFields, {
          mapLayers: isSplit ? splitMaps[0].layers : null
        }))] : splitMaps.map(function (settings, index) {
          return _react2.default.createElement(MapContainer, (0, _extends3.default)({
            key: index,
            index: index
          }, mapFields, {
            mapLayers: splitMaps[index].layers
          }));
        });

        var isExporting = uiState.currentModal === _defaultSettings.EXPORT_IMAGE_ID;

        return _react2.default.createElement(
          _styledComponents.ThemeProvider,
          { theme: _base.theme },
          _react2.default.createElement(
            GlobalStyle,
            {
              style: {
                position: 'relative',
                width: width + 'px',
                height: height + 'px'
              },
              className: 'kepler-gl',
              id: 'kepler-gl__' + id,
              innerRef: function innerRef(node) {
                _this2.root = node;
              }
            },
            !uiState.readOnly && _react2.default.createElement(SidePanel, sideFields),
            _react2.default.createElement(
              'div',
              { className: 'maps', style: { display: 'flex' } },
              mapContainers
            ),
            isExporting && _react2.default.createElement(PlotContainer, {
              width: width,
              height: height,
              exportImageSetting: uiState.exportImage,
              mapFields: mapFields,
              startExportingImage: uiStateActions.startExportingImage,
              setExportImageDataUri: uiStateActions.setExportImageDataUri
            }),
            _react2.default.createElement(BottomWidget, {
              filters: filters,
              datasets: datasets,
              uiState: uiState,
              visStateActions: visStateActions,
              sidePanelWidth: _defaultSettings.DIMENSIONS.sidePanel.width + _defaultSettings.DIMENSIONS.sidePanel.margin.left,
              containerW: containerW
            }),
            _react2.default.createElement(ModalWrapper, {
              mapStyle: mapStyle,
              visState: visState,
              mapState: mapState,
              uiState: uiState,
              mapboxApiAccessToken: mapboxApiAccessToken,
              visStateActions: visStateActions,
              uiStateActions: uiStateActions,
              mapStyleActions: mapStyleActions,
              rootNode: this.root,
              containerW: containerW,
              containerH: mapState.height
            })
          )
        );
      }
    }]);
    return KeplerGL;
  }(_react.Component), _class.defaultProps = {
    mapStyles: [],
    width: 800,
    height: 800,
    appName: _defaultSettings.KEPLER_GL_NAME,
    version: _defaultSettings.KEPLER_GL_VERSION,
    homeUrl: _defaultSettings.KEPLER_GL_WEBSITE
  }, _temp2);


  return (0, _keplerglConnect.connect)(mapStateToProps, mapDispatchToProps)(KeplerGL);
}

function mapStateToProps(state, props) {
  return (0, _extends3.default)({}, props, {
    visState: state.visState,
    mapStyle: state.mapStyle,
    mapState: state.mapState,
    uiState: state.uiState
  });
}

function mapDispatchToProps(dispatch, ownProps) {
  var userActions = ownProps.actions || {};

  var _map = [VisStateActions, MapStateActions, MapStyleActions, UIStateActions].map(function (actions) {
    return (0, _redux.bindActionCreators)(mergeActions(actions, userActions), dispatch);
  }),
      _map2 = (0, _slicedToArray3.default)(_map, 4),
      visStateActions = _map2[0],
      mapStateActions = _map2[1],
      mapStyleActions = _map2[2],
      uiStateActions = _map2[3];

  return {
    visStateActions: visStateActions,
    mapStateActions: mapStateActions,
    mapStyleActions: mapStyleActions,
    uiStateActions: uiStateActions,
    dispatch: dispatch
  };
}

/**
 * Override default maps-gl actions with user defined actions using the same key
 */
function mergeActions(actions, userActions) {
  var overrides = {};
  for (var key in userActions) {
    if (userActions.hasOwnProperty(key) && actions.hasOwnProperty(key)) {
      overrides[key] = userActions[key];
    }
  }

  return (0, _extends3.default)({}, actions, overrides);
}

exports.default = KeplerGlFactory;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL2tlcGxlci1nbC5qcyJdLCJuYW1lcyI6WyJWaXNTdGF0ZUFjdGlvbnMiLCJNYXBTdGF0ZUFjdGlvbnMiLCJNYXBTdHlsZUFjdGlvbnMiLCJVSVN0YXRlQWN0aW9ucyIsIkdsb2JhbFN0eWxlIiwic3R5bGVkIiwiZGl2IiwicHJvcHMiLCJ0aGVtZSIsImxhYmVsQ29sb3IiLCJLZXBsZXJHbEZhY3RvcnkiLCJkZXBzIiwiQm90dG9tV2lkZ2V0RmFjdG9yeSIsIk1hcENvbnRhaW5lckZhY3RvcnkiLCJNb2RhbENvbnRhaW5lckZhY3RvcnkiLCJTaWRlUGFuZWxGYWN0b3J5IiwiUGxvdENvbnRhaW5lckZhY3RvcnkiLCJCb3R0b21XaWRnZXQiLCJNYXBDb250YWluZXIiLCJNb2RhbFdyYXBwZXIiLCJTaWRlUGFuZWwiLCJQbG90Q29udGFpbmVyIiwiS2VwbGVyR0wiLCJfbG9hZE1hcFN0eWxlIiwiZGVmYXVsdFN0eWxlcyIsIk9iamVjdCIsInZhbHVlcyIsIm1hcFN0eWxlIiwibWFwU3R5bGVzIiwiY3VzdG9tZVN0eWxlcyIsIm1hcCIsIm1zIiwiaWQiLCJmb3JFYWNoIiwic3R5bGUiLCJtYXBTdHlsZUFjdGlvbnMiLCJsb2FkTWFwU3R5bGVzIiwiX3JlcXVlc3RNYXBTdHlsZSIsInVybCIsImVycm9yIiwicmVzdWx0IiwiQ29uc29sZSIsIndhcm4iLCJfaGFuZGxlUmVzaXplIiwibmV4dFByb3BzIiwiaGVpZ2h0Iiwid2lkdGgiLCJtYXBTdGF0ZSIsIk51bWJlciIsImlzRmluaXRlIiwibWFwU3RhdGVBY3Rpb25zIiwidXBkYXRlTWFwIiwiaXNTcGxpdCIsImFwcE5hbWUiLCJ2ZXJzaW9uIiwiaG9tZVVybCIsIm9uU2F2ZU1hcCIsIm1hcGJveEFwaUFjY2Vzc1Rva2VuIiwidWlTdGF0ZSIsInZpc1N0YXRlIiwidmlzU3RhdGVBY3Rpb25zIiwidWlTdGF0ZUFjdGlvbnMiLCJmaWx0ZXJzIiwibGF5ZXJzIiwic3BsaXRNYXBzIiwibGF5ZXJPcmRlciIsImxheWVyQmxlbmRpbmciLCJsYXllckNsYXNzZXMiLCJpbnRlcmFjdGlvbkNvbmZpZyIsImRhdGFzZXRzIiwibGF5ZXJEYXRhIiwiaG92ZXJJbmZvIiwiY2xpY2tlZCIsInNpZGVGaWVsZHMiLCJESU1FTlNJT05TIiwic2lkZVBhbmVsIiwibWFwRmllbGRzIiwibWFwQ29udHJvbHMiLCJ0b2dnbGVNYXBDb250cm9sIiwibGVuZ3RoIiwiY29udGFpbmVyVyIsIm1hcENvbnRhaW5lcnMiLCJzZXR0aW5ncyIsImluZGV4IiwiaXNFeHBvcnRpbmciLCJjdXJyZW50TW9kYWwiLCJFWFBPUlRfSU1BR0VfSUQiLCJwb3NpdGlvbiIsInJvb3QiLCJub2RlIiwicmVhZE9ubHkiLCJkaXNwbGF5IiwiZXhwb3J0SW1hZ2UiLCJzdGFydEV4cG9ydGluZ0ltYWdlIiwic2V0RXhwb3J0SW1hZ2VEYXRhVXJpIiwibWFyZ2luIiwibGVmdCIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsIktFUExFUl9HTF9OQU1FIiwiS0VQTEVSX0dMX1ZFUlNJT04iLCJLRVBMRVJfR0xfV0VCU0lURSIsIm1hcFN0YXRlVG9Qcm9wcyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsInN0YXRlIiwiZGlzcGF0Y2giLCJvd25Qcm9wcyIsInVzZXJBY3Rpb25zIiwiYWN0aW9ucyIsIm1lcmdlQWN0aW9ucyIsIm92ZXJyaWRlcyIsImtleSIsImhhc093blByb3BlcnR5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MDVCQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7QUFFQTs7SUFBWUEsZTs7QUFDWjs7SUFBWUMsZTs7QUFDWjs7SUFBWUMsZTs7QUFDWjs7SUFBWUMsYzs7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NkUsTUFBTTdFLFFBSGxCO0FBSUVvQixjQUFVeUQsTUFBTXpELFFBSmxCO0FBS0VXLGFBQVM4QyxNQUFNOUM7QUFMakI7QUFPRDs7QUFFRCxTQUFTNkMsa0JBQVQsQ0FBNEJFLFFBQTVCLEVBQXNDQyxRQUF0QyxFQUFnRDtBQUM5QyxNQUFNQyxjQUFjRCxTQUFTRSxPQUFULElBQW9CLEVBQXhDOztBQUQ4QyxhQVExQyxDQUNGNUcsZUFERSxFQUVGQyxlQUZFLEVBR0ZDLGVBSEUsRUFJRkMsY0FKRSxFQUtGMkIsR0FMRSxDQUtFO0FBQUEsV0FDSiwrQkFBbUIrRSxhQUFhRCxPQUFiLEVBQXNCRCxXQUF0QixDQUFuQixFQUF1REYsUUFBdkQsQ0FESTtBQUFBLEdBTEYsQ0FSMEM7QUFBQTtBQUFBLE1BSTVDN0MsZUFKNEM7QUFBQSxNQUs1Q1YsZUFMNEM7QUFBQSxNQU01Q2YsZUFONEM7QUFBQSxNQU81QzBCLGNBUDRDOztBQWlCOUMsU0FBTztBQUNMRCxvQ0FESztBQUVMVixvQ0FGSztBQUdMZixvQ0FISztBQUlMMEIsa0NBSks7QUFLTDRDO0FBTEssR0FBUDtBQU9EOztBQUVEOzs7QUFHQSxTQUFTSSxZQUFULENBQXNCRCxPQUF0QixFQUErQkQsV0FBL0IsRUFBNEM7QUFDMUMsTUFBTUcsWUFBWSxFQUFsQjtBQUNBLE9BQUssSUFBTUMsR0FBWCxJQUFrQkosV0FBbEIsRUFBK0I7QUFDN0IsUUFBSUEsWUFBWUssY0FBWixDQUEyQkQsR0FBM0IsS0FBbUNILFFBQVFJLGNBQVIsQ0FBdUJELEdBQXZCLENBQXZDLEVBQW9FO0FBQ2xFRCxnQkFBVUMsR0FBVixJQUFpQkosWUFBWUksR0FBWixDQUFqQjtBQUNEO0FBQ0Y7O0FBRUQsb0NBQVlILE9BQVosRUFBd0JFLFNBQXhCO0FBQ0Q7O2tCQUVjcEcsZSIsImZpbGUiOiJrZXBsZXItZ2wuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMTkgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29uc29sZSBhcyBDb25zb2xlIH0gZnJvbSAnZ2xvYmFsL3dpbmRvdyc7XG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBqc29uIGFzIHJlcXVlc3RKc29uIH0gZnJvbSAnZDMtcmVxdWVzdCc7XG5pbXBvcnQgc3R5bGVkLCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBjb25uZWN0IGFzIGtlcGxlckdsQ29ubmVjdCB9IGZyb20gJy4uL2Nvbm5lY3Qva2VwbGVyZ2wtY29ubmVjdCc7XG5cbmltcG9ydCAqIGFzIFZpc1N0YXRlQWN0aW9ucyBmcm9tICdhY3Rpb25zL3Zpcy1zdGF0ZS1hY3Rpb25zJztcbmltcG9ydCAqIGFzIE1hcFN0YXRlQWN0aW9ucyBmcm9tICdhY3Rpb25zL21hcC1zdGF0ZS1hY3Rpb25zJztcbmltcG9ydCAqIGFzIE1hcFN0eWxlQWN0aW9ucyBmcm9tICdhY3Rpb25zL21hcC1zdHlsZS1hY3Rpb25zJztcbmltcG9ydCAqIGFzIFVJU3RhdGVBY3Rpb25zIGZyb20gJ2FjdGlvbnMvdWktc3RhdGUtYWN0aW9ucyc7XG5cbmltcG9ydCB7XG4gIEVYUE9SVF9JTUFHRV9JRCxcbiAgRElNRU5TSU9OUyxcbiAgS0VQTEVSX0dMX05BTUUsXG4gIEtFUExFUl9HTF9WRVJTSU9OLFxuICBLRVBMRVJfR0xfV0VCU0lURSxcbn0gZnJvbSAnY29uc3RhbnRzL2RlZmF1bHQtc2V0dGluZ3MnO1xuXG5pbXBvcnQgU2lkZVBhbmVsRmFjdG9yeSBmcm9tICcuL3NpZGUtcGFuZWwnO1xuaW1wb3J0IE1hcENvbnRhaW5lckZhY3RvcnkgZnJvbSAnLi9tYXAtY29udGFpbmVyJztcbmltcG9ydCBCb3R0b21XaWRnZXRGYWN0b3J5IGZyb20gJy4vYm90dG9tLXdpZGdldCc7XG5pbXBvcnQgTW9kYWxDb250YWluZXJGYWN0b3J5IGZyb20gJy4vbW9kYWwtY29udGFpbmVyJztcbmltcG9ydCBQbG90Q29udGFpbmVyRmFjdG9yeSBmcm9tICcuL3Bsb3QtY29udGFpbmVyJztcblxuaW1wb3J0IHsgZ2VuZXJhdGVIYXNoSWQgfSBmcm9tICd1dGlscy91dGlscyc7XG5cbmltcG9ydCB7IHRoZW1lIH0gZnJvbSAnc3R5bGVzL2Jhc2UnO1xuXG5jb25zdCBHbG9iYWxTdHlsZSA9IHN0eWxlZC5kaXZgXG4gIGZvbnQtZmFtaWx5OiBmZi1jbGFuLXdlYi1wcm8sICdIZWx2ZXRpY2EgTmV1ZScsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAwLjg3NWVtO1xuICBsaW5lLWhlaWdodDogMS43MTQyOTtcblxuICAqLFxuICAqOmJlZm9yZSxcbiAgKjphZnRlciB7XG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB9XG5cbiAgdWwge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG5cbiAgbGkge1xuICAgIG1hcmdpbjogMDtcbiAgfVxuXG4gIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5sYWJlbENvbG9yfTtcbiAgfVxuYDtcblxuS2VwbGVyR2xGYWN0b3J5LmRlcHMgPSBbXG4gIEJvdHRvbVdpZGdldEZhY3RvcnksXG4gIE1hcENvbnRhaW5lckZhY3RvcnksXG4gIE1vZGFsQ29udGFpbmVyRmFjdG9yeSxcbiAgU2lkZVBhbmVsRmFjdG9yeSxcbiAgUGxvdENvbnRhaW5lckZhY3Rvcnlcbl07XG5cbmZ1bmN0aW9uIEtlcGxlckdsRmFjdG9yeShcbiAgQm90dG9tV2lkZ2V0LFxuICBNYXBDb250YWluZXIsXG4gIE1vZGFsV3JhcHBlcixcbiAgU2lkZVBhbmVsLFxuICBQbG90Q29udGFpbmVyXG4pIHtcbiAgY2xhc3MgS2VwbGVyR0wgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICBtYXBTdHlsZXM6IFtdLFxuICAgICAgd2lkdGg6IDgwMCxcbiAgICAgIGhlaWdodDogODAwLFxuICAgICAgYXBwTmFtZTogS0VQTEVSX0dMX05BTUUsXG4gICAgICB2ZXJzaW9uOiBLRVBMRVJfR0xfVkVSU0lPTixcbiAgICAgIGhvbWVVcmw6IEtFUExFUl9HTF9XRUJTSVRFLFxuICAgIH07XG5cbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICB0aGlzLl9sb2FkTWFwU3R5bGUodGhpcy5wcm9wcy5tYXBTdHlsZXMpO1xuICAgICAgdGhpcy5faGFuZGxlUmVzaXplKHRoaXMucHJvcHMpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICBpZiAoXG4gICAgICAgIC8vIGlmIGRpbWVuc2lvbiBwcm9wcyBoYXMgY2hhbmdlZFxuICAgICAgICB0aGlzLnByb3BzLmhlaWdodCAhPT0gbmV4dFByb3BzLmhlaWdodCB8fFxuICAgICAgICB0aGlzLnByb3BzLndpZHRoICE9PSBuZXh0UHJvcHMud2lkdGggfHxcbiAgICAgICAgLy8gcmVhY3QtbWFwLWdsIHdpbGwgZGlzcGF0Y2ggdXBkYXRlVmlld3BvcnQgYWZ0ZXIgdGhpcy5faGFuZGxlUmVzaXplIGlzIGNhbGxlZFxuICAgICAgICAvLyBoZXJlIHdlIGNoZWNrIGlmIHRoaXMucHJvcHMubWFwU3RhdGUuaGVpZ2h0IGlzIHN5bmMgd2l0aCBwcm9wcy5oZWlnaHRcbiAgICAgICAgbmV4dFByb3BzLmhlaWdodCAhPT0gdGhpcy5wcm9wcy5tYXBTdGF0ZS5oZWlnaHRcbiAgICAgICkge1xuICAgICAgICB0aGlzLl9oYW5kbGVSZXNpemUobmV4dFByb3BzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBfaGFuZGxlUmVzaXplKHsgd2lkdGgsIGhlaWdodCB9KSB7XG4gICAgICBpZiAoIU51bWJlci5pc0Zpbml0ZSh3aWR0aCkgfHwgIU51bWJlci5pc0Zpbml0ZShoZWlnaHQpKSB7XG4gICAgICAgIENvbnNvbGUud2Fybignd2lkdGggYW5kIGhlaWdodCBpcyByZXF1aXJlZCcpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLnByb3BzLm1hcFN0YXRlQWN0aW9ucy51cGRhdGVNYXAoe1xuICAgICAgICB3aWR0aDogd2lkdGggLyAoMSArIE51bWJlcih0aGlzLnByb3BzLm1hcFN0YXRlLmlzU3BsaXQpKSxcbiAgICAgICAgaGVpZ2h0XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBfbG9hZE1hcFN0eWxlID0gKCkgPT4ge1xuICAgICAgY29uc3QgZGVmYXVsdFN0eWxlcyA9IE9iamVjdC52YWx1ZXModGhpcy5wcm9wcy5tYXBTdHlsZS5tYXBTdHlsZXMpO1xuICAgICAgLy8gYWRkIGlkIHRvIGN1c3RvbSBtYXAgc3R5bGVzIGlmIG5vdCBnaXZlblxuICAgICAgY29uc3QgY3VzdG9tZVN0eWxlcyA9ICh0aGlzLnByb3BzLm1hcFN0eWxlcyB8fCBbXSkubWFwKG1zID0+ICh7XG4gICAgICAgIC4uLm1zLFxuICAgICAgICBpZDogbXMuaWQgfHwgZ2VuZXJhdGVIYXNoSWQoKVxuICAgICAgfSkpO1xuXG4gICAgICBbLi4uY3VzdG9tZVN0eWxlcywgLi4uZGVmYXVsdFN0eWxlc10uZm9yRWFjaChcbiAgICAgICAgc3R5bGUgPT4ge1xuICAgICAgICAgIGlmIChzdHlsZS5zdHlsZSkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5tYXBTdHlsZUFjdGlvbnMubG9hZE1hcFN0eWxlcyh7XG4gICAgICAgICAgICAgIFtzdHlsZS5pZF06IHN0eWxlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9yZXF1ZXN0TWFwU3R5bGUoc3R5bGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9O1xuXG4gICAgX3JlcXVlc3RNYXBTdHlsZSA9IChtYXBTdHlsZSkgPT4ge1xuICAgICAgY29uc3QgeyB1cmwsIGlkIH0gPSBtYXBTdHlsZTtcbiAgICAgIHJlcXVlc3RKc29uKHVybCwgKGVycm9yLCByZXN1bHQpID0+IHtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgQ29uc29sZS53YXJuKGBFcnJvciBsb2FkaW5nIG1hcCBzdHlsZSAke21hcFN0eWxlLnVybH1gKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnByb3BzLm1hcFN0eWxlQWN0aW9ucy5sb2FkTWFwU3R5bGVzKHtcbiAgICAgICAgICAgIFtpZF06IHsgLi4ubWFwU3R5bGUsIHN0eWxlOiByZXN1bHQgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgY29uc3Qge1xuICAgICAgICAvLyBwcm9wc1xuICAgICAgICBpZCxcbiAgICAgICAgYXBwTmFtZSxcbiAgICAgICAgdmVyc2lvbixcbiAgICAgICAgaG9tZVVybCxcbiAgICAgICAgb25TYXZlTWFwLFxuICAgICAgICB3aWR0aCxcbiAgICAgICAgaGVpZ2h0LFxuICAgICAgICBtYXBib3hBcGlBY2Nlc3NUb2tlbixcblxuICAgICAgICAvLyByZWR1eCBzdGF0ZVxuICAgICAgICBtYXBTdHlsZSxcbiAgICAgICAgbWFwU3RhdGUsXG4gICAgICAgIHVpU3RhdGUsXG4gICAgICAgIHZpc1N0YXRlLFxuXG4gICAgICAgIC8vIGFjdGlvbnMsXG4gICAgICAgIHZpc1N0YXRlQWN0aW9ucyxcbiAgICAgICAgbWFwU3RhdGVBY3Rpb25zLFxuICAgICAgICBtYXBTdHlsZUFjdGlvbnMsXG4gICAgICAgIHVpU3RhdGVBY3Rpb25zXG4gICAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgY29uc3Qge1xuICAgICAgICBmaWx0ZXJzLFxuICAgICAgICBsYXllcnMsXG4gICAgICAgIHNwbGl0TWFwcywgLy8gdGhpcyB3aWxsIHN0b3JlIHN1cHBvcnQgZm9yIHNwbGl0IG1hcCB2aWV3IGlzIG5lY2Vzc2FyeVxuICAgICAgICBsYXllck9yZGVyLFxuICAgICAgICBsYXllckJsZW5kaW5nLFxuICAgICAgICBsYXllckNsYXNzZXMsXG4gICAgICAgIGludGVyYWN0aW9uQ29uZmlnLFxuICAgICAgICBkYXRhc2V0cyxcbiAgICAgICAgbGF5ZXJEYXRhLFxuICAgICAgICBob3ZlckluZm8sXG4gICAgICAgIGNsaWNrZWRcbiAgICAgIH0gPSB2aXNTdGF0ZTtcblxuICAgICAgY29uc3Qgc2lkZUZpZWxkcyA9IHtcbiAgICAgICAgYXBwTmFtZSxcbiAgICAgICAgdmVyc2lvbixcbiAgICAgICAgaG9tZVVybCxcbiAgICAgICAgZGF0YXNldHMsXG4gICAgICAgIGZpbHRlcnMsXG4gICAgICAgIGxheWVycyxcbiAgICAgICAgbGF5ZXJPcmRlcixcbiAgICAgICAgbGF5ZXJDbGFzc2VzLFxuICAgICAgICBpbnRlcmFjdGlvbkNvbmZpZyxcbiAgICAgICAgbWFwU3R5bGUsXG4gICAgICAgIGxheWVyQmxlbmRpbmcsXG4gICAgICAgIG9uU2F2ZU1hcCxcbiAgICAgICAgdWlTdGF0ZSxcbiAgICAgICAgbWFwU3R5bGVBY3Rpb25zLFxuICAgICAgICB2aXNTdGF0ZUFjdGlvbnMsXG4gICAgICAgIHVpU3RhdGVBY3Rpb25zLFxuICAgICAgICB3aWR0aDogRElNRU5TSU9OUy5zaWRlUGFuZWwud2lkdGhcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IG1hcEZpZWxkcyA9IHtcbiAgICAgICAgZGF0YXNldHMsXG4gICAgICAgIG1hcGJveEFwaUFjY2Vzc1Rva2VuLFxuICAgICAgICBtYXBTdGF0ZSxcbiAgICAgICAgbWFwU3R5bGUsXG4gICAgICAgIG1hcENvbnRyb2xzOiB1aVN0YXRlLm1hcENvbnRyb2xzLFxuICAgICAgICBsYXllcnMsXG4gICAgICAgIGxheWVyT3JkZXIsXG4gICAgICAgIGxheWVyRGF0YSxcbiAgICAgICAgbGF5ZXJCbGVuZGluZyxcbiAgICAgICAgaW50ZXJhY3Rpb25Db25maWcsXG4gICAgICAgIGhvdmVySW5mbyxcbiAgICAgICAgY2xpY2tlZCxcbiAgICAgICAgdG9nZ2xlTWFwQ29udHJvbDogdWlTdGF0ZUFjdGlvbnMudG9nZ2xlTWFwQ29udHJvbCxcbiAgICAgICAgdWlTdGF0ZUFjdGlvbnMsXG4gICAgICAgIHZpc1N0YXRlQWN0aW9ucyxcbiAgICAgICAgbWFwU3RhdGVBY3Rpb25zXG4gICAgICB9O1xuXG4gICAgICBjb25zdCBpc1NwbGl0ID0gc3BsaXRNYXBzICYmIHNwbGl0TWFwcy5sZW5ndGggPiAxO1xuICAgICAgY29uc3QgY29udGFpbmVyVyA9IG1hcFN0YXRlLndpZHRoICogKE51bWJlcihpc1NwbGl0KSArIDEpO1xuXG4gICAgICBjb25zdCBtYXBDb250YWluZXJzID0gIWlzU3BsaXRcbiAgICAgICAgPyBbXG4gICAgICAgICAgPE1hcENvbnRhaW5lclxuICAgICAgICAgICAga2V5PXswfVxuICAgICAgICAgICAgaW5kZXg9ezB9XG4gICAgICAgICAgICB7Li4ubWFwRmllbGRzfVxuICAgICAgICAgICAgbWFwTGF5ZXJzPXtpc1NwbGl0ID8gc3BsaXRNYXBzWzBdLmxheWVycyA6IG51bGx9XG4gICAgICAgICAgLz5cbiAgICAgICAgXVxuICAgICAgICA6IHNwbGl0TWFwcy5tYXAoKHNldHRpbmdzLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxNYXBDb250YWluZXJcbiAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICBpbmRleD17aW5kZXh9XG4gICAgICAgICAgICB7Li4ubWFwRmllbGRzfVxuICAgICAgICAgICAgbWFwTGF5ZXJzPXtzcGxpdE1hcHNbaW5kZXhdLmxheWVyc31cbiAgICAgICAgICAvPlxuICAgICAgICApKTtcblxuICAgICAgY29uc3QgaXNFeHBvcnRpbmcgPSB1aVN0YXRlLmN1cnJlbnRNb2RhbCA9PT0gRVhQT1JUX0lNQUdFX0lEO1xuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgICAgIDxHbG9iYWxTdHlsZVxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgIHdpZHRoOiBgJHt3aWR0aH1weGAsXG4gICAgICAgICAgICAgIGhlaWdodDogYCR7aGVpZ2h0fXB4YFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImtlcGxlci1nbFwiXG4gICAgICAgICAgICBpZD17YGtlcGxlci1nbF9fJHtpZH1gfVxuICAgICAgICAgICAgaW5uZXJSZWY9e25vZGUgPT4ge1xuICAgICAgICAgICAgICB0aGlzLnJvb3QgPSBub2RlO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7IXVpU3RhdGUucmVhZE9ubHkgJiYgPFNpZGVQYW5lbCB7Li4uc2lkZUZpZWxkc30gLz59XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hcHNcIiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcgfX0+XG4gICAgICAgICAgICAgIHttYXBDb250YWluZXJzfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7aXNFeHBvcnRpbmcgJiZcbiAgICAgICAgICAgICAgPFBsb3RDb250YWluZXJcbiAgICAgICAgICAgICAgICB3aWR0aD17d2lkdGh9XG4gICAgICAgICAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgICAgICAgICAgZXhwb3J0SW1hZ2VTZXR0aW5nPXt1aVN0YXRlLmV4cG9ydEltYWdlfVxuICAgICAgICAgICAgICAgIG1hcEZpZWxkcz17bWFwRmllbGRzfVxuICAgICAgICAgICAgICAgIHN0YXJ0RXhwb3J0aW5nSW1hZ2U9e3VpU3RhdGVBY3Rpb25zLnN0YXJ0RXhwb3J0aW5nSW1hZ2V9XG4gICAgICAgICAgICAgICAgc2V0RXhwb3J0SW1hZ2VEYXRhVXJpPXt1aVN0YXRlQWN0aW9ucy5zZXRFeHBvcnRJbWFnZURhdGFVcml9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA8Qm90dG9tV2lkZ2V0XG4gICAgICAgICAgICAgIGZpbHRlcnM9e2ZpbHRlcnN9XG4gICAgICAgICAgICAgIGRhdGFzZXRzPXtkYXRhc2V0c31cbiAgICAgICAgICAgICAgdWlTdGF0ZT17dWlTdGF0ZX1cbiAgICAgICAgICAgICAgdmlzU3RhdGVBY3Rpb25zPXt2aXNTdGF0ZUFjdGlvbnN9XG4gICAgICAgICAgICAgIHNpZGVQYW5lbFdpZHRoPXtcbiAgICAgICAgICAgICAgICBESU1FTlNJT05TLnNpZGVQYW5lbC53aWR0aCArIERJTUVOU0lPTlMuc2lkZVBhbmVsLm1hcmdpbi5sZWZ0XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgY29udGFpbmVyVz17Y29udGFpbmVyV31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8TW9kYWxXcmFwcGVyXG4gICAgICAgICAgICAgIG1hcFN0eWxlPXttYXBTdHlsZX1cbiAgICAgICAgICAgICAgdmlzU3RhdGU9e3Zpc1N0YXRlfVxuICAgICAgICAgICAgICBtYXBTdGF0ZT17bWFwU3RhdGV9XG4gICAgICAgICAgICAgIHVpU3RhdGU9e3VpU3RhdGV9XG4gICAgICAgICAgICAgIG1hcGJveEFwaUFjY2Vzc1Rva2VuPXttYXBib3hBcGlBY2Nlc3NUb2tlbn1cbiAgICAgICAgICAgICAgdmlzU3RhdGVBY3Rpb25zPXt2aXNTdGF0ZUFjdGlvbnN9XG4gICAgICAgICAgICAgIHVpU3RhdGVBY3Rpb25zPXt1aVN0YXRlQWN0aW9uc31cbiAgICAgICAgICAgICAgbWFwU3R5bGVBY3Rpb25zPXttYXBTdHlsZUFjdGlvbnN9XG4gICAgICAgICAgICAgIHJvb3ROb2RlPXt0aGlzLnJvb3R9XG4gICAgICAgICAgICAgIGNvbnRhaW5lclc9e2NvbnRhaW5lcld9XG4gICAgICAgICAgICAgIGNvbnRhaW5lckg9e21hcFN0YXRlLmhlaWdodH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9HbG9iYWxTdHlsZT5cbiAgICAgICAgPC9UaGVtZVByb3ZpZGVyPlxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ga2VwbGVyR2xDb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShLZXBsZXJHTCk7XG59XG5cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSwgcHJvcHMpIHtcbiAgcmV0dXJuIHtcbiAgICAuLi5wcm9wcyxcbiAgICB2aXNTdGF0ZTogc3RhdGUudmlzU3RhdGUsXG4gICAgbWFwU3R5bGU6IHN0YXRlLm1hcFN0eWxlLFxuICAgIG1hcFN0YXRlOiBzdGF0ZS5tYXBTdGF0ZSxcbiAgICB1aVN0YXRlOiBzdGF0ZS51aVN0YXRlXG4gIH07XG59XG5cbmZ1bmN0aW9uIG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCwgb3duUHJvcHMpIHtcbiAgY29uc3QgdXNlckFjdGlvbnMgPSBvd25Qcm9wcy5hY3Rpb25zIHx8IHt9O1xuXG4gIGNvbnN0IFtcbiAgICB2aXNTdGF0ZUFjdGlvbnMsXG4gICAgbWFwU3RhdGVBY3Rpb25zLFxuICAgIG1hcFN0eWxlQWN0aW9ucyxcbiAgICB1aVN0YXRlQWN0aW9uc1xuICBdID0gW1xuICAgIFZpc1N0YXRlQWN0aW9ucyxcbiAgICBNYXBTdGF0ZUFjdGlvbnMsXG4gICAgTWFwU3R5bGVBY3Rpb25zLFxuICAgIFVJU3RhdGVBY3Rpb25zXG4gIF0ubWFwKGFjdGlvbnMgPT5cbiAgICBiaW5kQWN0aW9uQ3JlYXRvcnMobWVyZ2VBY3Rpb25zKGFjdGlvbnMsIHVzZXJBY3Rpb25zKSwgZGlzcGF0Y2gpXG4gICk7XG5cbiAgcmV0dXJuIHtcbiAgICB2aXNTdGF0ZUFjdGlvbnMsXG4gICAgbWFwU3RhdGVBY3Rpb25zLFxuICAgIG1hcFN0eWxlQWN0aW9ucyxcbiAgICB1aVN0YXRlQWN0aW9ucyxcbiAgICBkaXNwYXRjaFxuICB9O1xufVxuXG4vKipcbiAqIE92ZXJyaWRlIGRlZmF1bHQgbWFwcy1nbCBhY3Rpb25zIHdpdGggdXNlciBkZWZpbmVkIGFjdGlvbnMgdXNpbmcgdGhlIHNhbWUga2V5XG4gKi9cbmZ1bmN0aW9uIG1lcmdlQWN0aW9ucyhhY3Rpb25zLCB1c2VyQWN0aW9ucykge1xuICBjb25zdCBvdmVycmlkZXMgPSB7fTtcbiAgZm9yIChjb25zdCBrZXkgaW4gdXNlckFjdGlvbnMpIHtcbiAgICBpZiAodXNlckFjdGlvbnMuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBhY3Rpb25zLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIG92ZXJyaWRlc1trZXldID0gdXNlckFjdGlvbnNba2V5XTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4geyAuLi5hY3Rpb25zLCAuLi5vdmVycmlkZXMgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgS2VwbGVyR2xGYWN0b3J5O1xuIl19
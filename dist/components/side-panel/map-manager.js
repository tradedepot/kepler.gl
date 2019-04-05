'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('../common/styled-components');

var _mapStyleSelector = require('./map-style-panel/map-style-selector');

var _mapStyleSelector2 = _interopRequireDefault(_mapStyleSelector);

var _mapLayerSelector = require('./map-style-panel/map-layer-selector');

var _mapLayerSelector2 = _interopRequireDefault(_mapLayerSelector);

var _icons = require('../common/icons');

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

MapManagerFactory.deps = [_mapStyleSelector2.default, _mapLayerSelector2.default];

function MapManagerFactory(MapStyleSelector, LayerGroupSelector) {
  var _class, _temp2;

  return _temp2 = _class = function (_Component) {
    (0, _inherits3.default)(MapManager, _Component);

    function MapManager() {
      var _ref;

      var _temp, _this, _ret;

      (0, _classCallCheck3.default)(this, MapManager);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = MapManager.__proto__ || Object.getPrototypeOf(MapManager)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        isSelecting: false
      }, _this._updateConfig = function (newProp) {
        var newConfig = (0, _extends3.default)({}, _this.props.mapStyle, newProp);
        _this.props.onConfigChange(newConfig);
      }, _this._toggleSelecting = function () {
        _this.setState({ isSelecting: !_this.state.isSelecting });
      }, _this._selectStyle = function (val) {
        _this.props.onStyleChange(val);
        _this._toggleSelecting();
      }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(MapManager, [{
      key: 'render',
      value: function render() {
        var mapStyle = this.props.mapStyle;

        var editableLayers = mapStyle.visibleLayerGroups;

        return _react2.default.createElement(
          'div',
          { className: 'map-style-panel' },
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(MapStyleSelector, {
              mapStyle: mapStyle,
              isSelecting: this.state.isSelecting,
              onChange: this._selectStyle,
              toggleActive: this._toggleSelecting
            }),
            Object.keys(editableLayers).length ? _react2.default.createElement(LayerGroupSelector, {
              layers: mapStyle.visibleLayerGroups,
              editableLayers: editableLayers,
              topLayers: mapStyle.topLayerGroups,
              onChange: this._updateConfig
            }) : null,
            _react2.default.createElement(
              _styledComponents.Button,
              {
                onClick: this.props.showAddMapStyleModal,
                secondary: true },
              _react2.default.createElement(_icons.Add, { height: '12px' }),
              'Add Map Style'
            )
          )
        );
      }
    }]);
    return MapManager;
  }(_react.Component), _class.propTypes = {
    mapStyle: _propTypes2.default.object.isRequired,
    onConfigChange: _propTypes2.default.func.isRequired,
    onStyleChange: _propTypes2.default.func.isRequired,
    showAddMapStyleModal: _propTypes2.default.func.isRequired
  }, _temp2;
}

exports.default = MapManagerFactory;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvbWFwLW1hbmFnZXIuanMiXSwibmFtZXMiOlsiTWFwTWFuYWdlckZhY3RvcnkiLCJkZXBzIiwiTWFwU3R5bGVTZWxlY3RvckZhY3RvcnkiLCJMYXllckdyb3VwU2VsZWN0b3JGYWN0b3J5IiwiTWFwU3R5bGVTZWxlY3RvciIsIkxheWVyR3JvdXBTZWxlY3RvciIsInN0YXRlIiwiaXNTZWxlY3RpbmciLCJfdXBkYXRlQ29uZmlnIiwibmV3Q29uZmlnIiwicHJvcHMiLCJtYXBTdHlsZSIsIm5ld1Byb3AiLCJvbkNvbmZpZ0NoYW5nZSIsIl90b2dnbGVTZWxlY3RpbmciLCJzZXRTdGF0ZSIsIl9zZWxlY3RTdHlsZSIsIm9uU3R5bGVDaGFuZ2UiLCJ2YWwiLCJlZGl0YWJsZUxheWVycyIsInZpc2libGVMYXllckdyb3VwcyIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJ0b3BMYXllckdyb3VwcyIsInNob3dBZGRNYXBTdHlsZU1vZGFsIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOzs7O0FBQ0E7Ozs7QUFFQTs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUEzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBV0FBLGtCQUFrQkMsSUFBbEIsR0FBeUIsQ0FDdkJDLDBCQUR1QixFQUV2QkMsMEJBRnVCLENBQXpCOztBQUtBLFNBQVNILGlCQUFULENBQTJCSSxnQkFBM0IsRUFBNkNDLGtCQUE3QyxFQUFpRTtBQUFBOztBQUMvRDtBQUFBOztBQUFBO0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBLDhNQVFFQyxLQVJGLEdBUVU7QUFDTkMscUJBQWE7QUFEUCxPQVJWLFFBWUVDLGFBWkYsR0FZa0IsbUJBQVc7QUFDekIsWUFBTUMsdUNBQWdCLE1BQUtDLEtBQUwsQ0FBV0MsUUFBM0IsRUFBd0NDLE9BQXhDLENBQU47QUFDQSxjQUFLRixLQUFMLENBQVdHLGNBQVgsQ0FBMEJKLFNBQTFCO0FBQ0QsT0FmSCxRQWlCRUssZ0JBakJGLEdBaUJxQixZQUFNO0FBQ3ZCLGNBQUtDLFFBQUwsQ0FBYyxFQUFDUixhQUFhLENBQUMsTUFBS0QsS0FBTCxDQUFXQyxXQUExQixFQUFkO0FBQ0QsT0FuQkgsUUFxQkVTLFlBckJGLEdBcUJpQixlQUFPO0FBQ3BCLGNBQUtOLEtBQUwsQ0FBV08sYUFBWCxDQUF5QkMsR0FBekI7QUFDQSxjQUFLSixnQkFBTDtBQUNELE9BeEJIO0FBQUE7O0FBQUE7QUFBQTtBQUFBLCtCQTBCVztBQUFBLFlBQ0FILFFBREEsR0FDWSxLQUFLRCxLQURqQixDQUNBQyxRQURBOztBQUVQLFlBQU1RLGlCQUFpQlIsU0FBU1Msa0JBQWhDOztBQUVBLGVBQ0U7QUFBQTtBQUFBLFlBQUssV0FBVSxpQkFBZjtBQUNFO0FBQUE7QUFBQTtBQUNFLDBDQUFDLGdCQUFEO0FBQ0Usd0JBQVVULFFBRFo7QUFFRSwyQkFBYSxLQUFLTCxLQUFMLENBQVdDLFdBRjFCO0FBR0Usd0JBQVUsS0FBS1MsWUFIakI7QUFJRSw0QkFBYyxLQUFLRjtBQUpyQixjQURGO0FBT0dPLG1CQUFPQyxJQUFQLENBQVlILGNBQVosRUFBNEJJLE1BQTVCLEdBQ0MsOEJBQUMsa0JBQUQ7QUFDRSxzQkFBUVosU0FBU1Msa0JBRG5CO0FBRUUsOEJBQWdCRCxjQUZsQjtBQUdFLHlCQUFXUixTQUFTYSxjQUh0QjtBQUlFLHdCQUFVLEtBQUtoQjtBQUpqQixjQURELEdBT0csSUFkTjtBQWVFO0FBQUMsc0NBQUQ7QUFBQTtBQUNFLHlCQUFTLEtBQUtFLEtBQUwsQ0FBV2Usb0JBRHRCO0FBRUUsK0JBRkY7QUFHRSw0Q0FBQyxVQUFELElBQUssUUFBTyxNQUFaLEdBSEY7QUFBQTtBQUFBO0FBZkY7QUFERixTQURGO0FBeUJEO0FBdkRIO0FBQUE7QUFBQSxJQUFnQ0MsZ0JBQWhDLFVBQ1NDLFNBRFQsR0FDcUI7QUFDakJoQixjQUFVaUIsb0JBQVVDLE1BQVYsQ0FBaUJDLFVBRFY7QUFFakJqQixvQkFBZ0JlLG9CQUFVRyxJQUFWLENBQWVELFVBRmQ7QUFHakJiLG1CQUFlVyxvQkFBVUcsSUFBVixDQUFlRCxVQUhiO0FBSWpCTCwwQkFBc0JHLG9CQUFVRyxJQUFWLENBQWVEO0FBSnBCLEdBRHJCO0FBeUREOztrQkFFYzlCLGlCIiwiZmlsZSI6Im1hcC1tYW5hZ2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDE5IFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQge0J1dHRvbn0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IE1hcFN0eWxlU2VsZWN0b3JGYWN0b3J5IGZyb20gJ2NvbXBvbmVudHMvc2lkZS1wYW5lbC9tYXAtc3R5bGUtcGFuZWwvbWFwLXN0eWxlLXNlbGVjdG9yJztcbmltcG9ydCBMYXllckdyb3VwU2VsZWN0b3JGYWN0b3J5IGZyb20gJ2NvbXBvbmVudHMvc2lkZS1wYW5lbC9tYXAtc3R5bGUtcGFuZWwvbWFwLWxheWVyLXNlbGVjdG9yJztcblxuaW1wb3J0IHtBZGR9IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2ljb25zJztcblxuTWFwTWFuYWdlckZhY3RvcnkuZGVwcyA9IFtcbiAgTWFwU3R5bGVTZWxlY3RvckZhY3RvcnksXG4gIExheWVyR3JvdXBTZWxlY3RvckZhY3Rvcnlcbl07XG5cbmZ1bmN0aW9uIE1hcE1hbmFnZXJGYWN0b3J5KE1hcFN0eWxlU2VsZWN0b3IsIExheWVyR3JvdXBTZWxlY3Rvcikge1xuICByZXR1cm4gY2xhc3MgTWFwTWFuYWdlciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgIG1hcFN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgICBvbkNvbmZpZ0NoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICAgIG9uU3R5bGVDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICBzaG93QWRkTWFwU3R5bGVNb2RhbDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxuICAgIH07XG5cbiAgICBzdGF0ZSA9IHtcbiAgICAgIGlzU2VsZWN0aW5nOiBmYWxzZVxuICAgIH07XG5cbiAgICBfdXBkYXRlQ29uZmlnID0gbmV3UHJvcCA9PiB7XG4gICAgICBjb25zdCBuZXdDb25maWcgPSB7Li4udGhpcy5wcm9wcy5tYXBTdHlsZSwgLi4ubmV3UHJvcH07XG4gICAgICB0aGlzLnByb3BzLm9uQ29uZmlnQ2hhbmdlKG5ld0NvbmZpZyk7XG4gICAgfTtcblxuICAgIF90b2dnbGVTZWxlY3RpbmcgPSAoKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtpc1NlbGVjdGluZzogIXRoaXMuc3RhdGUuaXNTZWxlY3Rpbmd9KTtcbiAgICB9O1xuXG4gICAgX3NlbGVjdFN0eWxlID0gdmFsID0+IHtcbiAgICAgIHRoaXMucHJvcHMub25TdHlsZUNoYW5nZSh2YWwpO1xuICAgICAgdGhpcy5fdG9nZ2xlU2VsZWN0aW5nKCk7XG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgIGNvbnN0IHttYXBTdHlsZX0gPSB0aGlzLnByb3BzO1xuICAgICAgY29uc3QgZWRpdGFibGVMYXllcnMgPSBtYXBTdHlsZS52aXNpYmxlTGF5ZXJHcm91cHM7XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFwLXN0eWxlLXBhbmVsXCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxNYXBTdHlsZVNlbGVjdG9yXG4gICAgICAgICAgICAgIG1hcFN0eWxlPXttYXBTdHlsZX1cbiAgICAgICAgICAgICAgaXNTZWxlY3Rpbmc9e3RoaXMuc3RhdGUuaXNTZWxlY3Rpbmd9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLl9zZWxlY3RTdHlsZX1cbiAgICAgICAgICAgICAgdG9nZ2xlQWN0aXZlPXt0aGlzLl90b2dnbGVTZWxlY3Rpbmd9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAge09iamVjdC5rZXlzKGVkaXRhYmxlTGF5ZXJzKS5sZW5ndGggPyAoXG4gICAgICAgICAgICAgIDxMYXllckdyb3VwU2VsZWN0b3JcbiAgICAgICAgICAgICAgICBsYXllcnM9e21hcFN0eWxlLnZpc2libGVMYXllckdyb3Vwc31cbiAgICAgICAgICAgICAgICBlZGl0YWJsZUxheWVycz17ZWRpdGFibGVMYXllcnN9XG4gICAgICAgICAgICAgICAgdG9wTGF5ZXJzPXttYXBTdHlsZS50b3BMYXllckdyb3Vwc31cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5fdXBkYXRlQ29uZmlnfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucHJvcHMuc2hvd0FkZE1hcFN0eWxlTW9kYWx9XG4gICAgICAgICAgICAgIHNlY29uZGFyeT5cbiAgICAgICAgICAgICAgPEFkZCBoZWlnaHQ9XCIxMnB4XCIgLz5BZGQgTWFwIFN0eWxlXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYXBNYW5hZ2VyRmFjdG9yeTtcbiJdfQ==
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  margin-bottom: 12px;\n  border-radius: 1px;\n\n  .filter-panel__filter {\n    margin-top: 24px;\n  }\n'], ['\n  margin-bottom: 12px;\n  border-radius: 1px;\n\n  .filter-panel__filter {\n    margin-top: 24px;\n  }\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  cursor: pointer;\n  padding: 10px 12px;\n'], ['\n  cursor: pointer;\n  padding: 10px 12px;\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  background-color: ', ';\n  padding: 12px;\n'], ['\n  background-color: ', ';\n  padding: 12px;\n']); // Copyright (c) 2019 Uber Technologies, Inc.
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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reselect = require('reselect');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _panelHeaderAction = require('../panel-header-action');

var _panelHeaderAction2 = _interopRequireDefault(_panelHeaderAction);

var _fieldSelector = require('../../common/field-selector');

var _fieldSelector2 = _interopRequireDefault(_fieldSelector);

var _icons = require('../../common/icons');

var _sourceDataSelector = require('../source-data-selector');

var _sourceDataSelector2 = _interopRequireDefault(_sourceDataSelector);

var _styledComponents3 = require('../../common/styled-components');

var _filters = require('../../filters');

var Filters = _interopRequireWildcard(_filters);

var _filterUtils = require('../../../utils/filter-utils');

var _defaultSettings = require('../../../constants/default-settings');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyledFilterPanel = _styledComponents2.default.div(_templateObject);

var StyledFilterHeader = _styledComponents3.StyledPanelHeader.extend(_templateObject2);

var StyledFilterContent = _styledComponents2.default.div(_templateObject3, function (props) {
  return props.theme.panelBackground;
});

function FilterPanelFactory() {
  var _class, _temp2;

  return _temp2 = _class = function (_Component) {
    (0, _inherits3.default)(FilterPanel, _Component);

    function FilterPanel() {
      var _ref;

      var _temp, _this, _ret;

      (0, _classCallCheck3.default)(this, FilterPanel);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = FilterPanel.__proto__ || Object.getPrototypeOf(FilterPanel)).call.apply(_ref, [this].concat(args))), _this), _this.fieldsSelector = function (props) {
        return props.filter.dataId && props.datasets[props.filter.dataId].fields || [];
      }, _this.filterSelector = function (props) {
        return props.filters;
      }, _this.nameSelector = function (props) {
        return props.filter.name;
      }, _this.dataIdSelector = function (props) {
        return props.filter.dataId;
      }, _this.availableFieldsSelector = (0, _reselect.createSelector)(_this.fieldsSelector, _this.filterSelector, _this.nameSelector, _this.dataIdSelector, function (fields, filters, name, dataId) {
        return fields.filter(function (f) {
          return f.type && f.type !== _defaultSettings.ALL_FIELD_TYPES.geojson && (f.name === name || !filters.find(function (d) {
            return d.name === f.name && d.dataId === dataId;
          }));
        });
      }), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    /* selectors */


    // only show current field and field that's not already been used as a filter


    (0, _createClass3.default)(FilterPanel, [{
      key: 'render',
      value: function render() {
        var _props = this.props,
            datasets = _props.datasets,
            enlargeFilter = _props.enlargeFilter,
            filter = _props.filter,
            idx = _props.idx,
            isAnyFilterAnimating = _props.isAnyFilterAnimating,
            removeFilter = _props.removeFilter,
            _setFilter = _props.setFilter,
            toggleAnimation = _props.toggleAnimation;
        var name = filter.name,
            enlarged = filter.enlarged,
            type = filter.type,
            dataId = filter.dataId;

        var FilterComponent = type && Filters[_filterUtils.FILTER_COMPONENTS[type]];
        var allAvailableFields = this.availableFieldsSelector(this.props);

        return _react2.default.createElement(
          StyledFilterPanel,
          { className: 'filter-panel' },
          _react2.default.createElement(
            StyledFilterHeader,
            { className: 'filter-panel__header',
              labelRCGColorValues: datasets[dataId].color },
            _react2.default.createElement(
              'div',
              { style: { flexGrow: 1 } },
              _react2.default.createElement(_fieldSelector2.default, {
                inputTheme: 'secondary',
                fields: allAvailableFields,
                value: name,
                erasable: false,
                onSelect: function onSelect(value) {
                  return _setFilter(idx, 'name', value.name);
                }
              })
            ),
            _react2.default.createElement(_panelHeaderAction2.default, {
              id: filter.id,
              tooltip: 'delete',
              tooltipType: 'error',
              onClick: removeFilter,
              hoverColor: 'errorColor',
              IconComponent: _icons.Trash
            }),
            type === _filterUtils.FILTER_TYPES.timeRange && _react2.default.createElement(_panelHeaderAction2.default, {
              id: filter.id,
              onClick: enlargeFilter,
              tooltip: 'Time Playback',
              IconComponent: _icons.Clock,
              active: enlarged
            })
          ),
          _react2.default.createElement(
            StyledFilterContent,
            { className: 'filter-panel__content' },
            Object.keys(datasets).length > 1 && _react2.default.createElement(_sourceDataSelector2.default, {
              inputTheme: 'secondary',
              datasets: datasets,
              disabled: filter.freeze,
              dataId: filter.dataId,
              onSelect: function onSelect(value) {
                return _setFilter(idx, 'dataId', value);
              }
            }),
            type && !enlarged && _react2.default.createElement(
              'div',
              { className: 'filter-panel__filter' },
              _react2.default.createElement(FilterComponent, {
                filter: filter,
                idx: idx,
                isAnyFilterAnimating: isAnyFilterAnimating,
                toggleAnimation: toggleAnimation,
                setFilter: function setFilter(value) {
                  return _setFilter(idx, 'value', value);
                }
              })
            )
          )
        );
      }
    }]);
    return FilterPanel;
  }(_react.Component), _class.propTypes = {
    idx: _propTypes2.default.number,
    filters: _propTypes2.default.arrayOf(_propTypes2.default.any).isRequired,
    filter: _propTypes2.default.object.isRequired,
    setFilter: _propTypes2.default.func.isRequired,
    removeFilter: _propTypes2.default.func.isRequired,
    enlargeFilter: _propTypes2.default.func.isRequired,
    toggleAnimation: _propTypes2.default.func.isRequired,
    datasets: _propTypes2.default.object,
    showDatasetTable: _propTypes2.default.func,
    isAnyFilterAnimating: _propTypes2.default.bool
  }, _temp2;
}

exports.default = FilterPanelFactory;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvZmlsdGVyLXBhbmVsL2ZpbHRlci1wYW5lbC5qcyJdLCJuYW1lcyI6WyJGaWx0ZXJzIiwiU3R5bGVkRmlsdGVyUGFuZWwiLCJzdHlsZWQiLCJkaXYiLCJTdHlsZWRGaWx0ZXJIZWFkZXIiLCJTdHlsZWRQYW5lbEhlYWRlciIsImV4dGVuZCIsIlN0eWxlZEZpbHRlckNvbnRlbnQiLCJwcm9wcyIsInRoZW1lIiwicGFuZWxCYWNrZ3JvdW5kIiwiRmlsdGVyUGFuZWxGYWN0b3J5IiwiZmllbGRzU2VsZWN0b3IiLCJmaWx0ZXIiLCJkYXRhSWQiLCJkYXRhc2V0cyIsImZpZWxkcyIsImZpbHRlclNlbGVjdG9yIiwiZmlsdGVycyIsIm5hbWVTZWxlY3RvciIsIm5hbWUiLCJkYXRhSWRTZWxlY3RvciIsImF2YWlsYWJsZUZpZWxkc1NlbGVjdG9yIiwiZiIsInR5cGUiLCJBTExfRklFTERfVFlQRVMiLCJnZW9qc29uIiwiZmluZCIsImQiLCJlbmxhcmdlRmlsdGVyIiwiaWR4IiwiaXNBbnlGaWx0ZXJBbmltYXRpbmciLCJyZW1vdmVGaWx0ZXIiLCJzZXRGaWx0ZXIiLCJ0b2dnbGVBbmltYXRpb24iLCJlbmxhcmdlZCIsIkZpbHRlckNvbXBvbmVudCIsIkZJTFRFUl9DT01QT05FTlRTIiwiYWxsQXZhaWxhYmxlRmllbGRzIiwiY29sb3IiLCJmbGV4R3JvdyIsInZhbHVlIiwiaWQiLCJUcmFzaCIsIkZJTFRFUl9UWVBFUyIsInRpbWVSYW5nZSIsIkNsb2NrIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsImZyZWV6ZSIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm51bWJlciIsImFycmF5T2YiLCJhbnkiLCJpc1JlcXVpcmVkIiwib2JqZWN0IiwiZnVuYyIsInNob3dEYXRhc2V0VGFibGUiLCJib29sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VL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ZjtBQUNFLDRDQUFDLGVBQUQ7QUFDRSx3QkFBUXRCLE1BRFY7QUFFRSxxQkFBS2lCLEdBRlA7QUFHRSxzQ0FBc0JDLG9CQUh4QjtBQUlFLGlDQUFpQkcsZUFKbkI7QUFLRSwyQkFBVztBQUFBLHlCQUFTRCxXQUFVSCxHQUFWLEVBQWUsT0FBZixFQUF3QlcsS0FBeEIsQ0FBVDtBQUFBO0FBTGI7QUFERjtBQVpKO0FBOUJGLFNBREY7QUF3REQ7QUE1R0g7QUFBQTtBQUFBLElBQWlDVSxnQkFBakMsVUFDU0MsU0FEVCxHQUNxQjtBQUNqQnRCLFNBQUt1QixvQkFBVUMsTUFERTtBQUVqQnBDLGFBQVNtQyxvQkFBVUUsT0FBVixDQUFrQkYsb0JBQVVHLEdBQTVCLEVBQWlDQyxVQUZ6QjtBQUdqQjVDLFlBQVF3QyxvQkFBVUssTUFBVixDQUFpQkQsVUFIUjtBQUlqQnhCLGVBQVdvQixvQkFBVU0sSUFBVixDQUFlRixVQUpUO0FBS2pCekIsa0JBQWNxQixvQkFBVU0sSUFBVixDQUFlRixVQUxaO0FBTWpCNUIsbUJBQWV3QixvQkFBVU0sSUFBVixDQUFlRixVQU5iO0FBT2pCdkIscUJBQWlCbUIsb0JBQVVNLElBQVYsQ0FBZUYsVUFQZjtBQVFqQjFDLGNBQVVzQyxvQkFBVUssTUFSSDtBQVNqQkUsc0JBQWtCUCxvQkFBVU0sSUFUWDtBQVVqQjVCLDBCQUFzQnNCLG9CQUFVUTtBQVZmLEdBRHJCO0FBOEdEOztrQkFFY2xELGtCIiwiZmlsZSI6ImZpbHRlci1wYW5lbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAxOSBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7Y3JlYXRlU2VsZWN0b3J9IGZyb20gJ3Jlc2VsZWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IFBhbmVsSGVhZGVyQWN0aW9uIGZyb20gJ2NvbXBvbmVudHMvc2lkZS1wYW5lbC9wYW5lbC1oZWFkZXItYWN0aW9uJztcbmltcG9ydCBGaWVsZFNlbGVjdG9yIGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2ZpZWxkLXNlbGVjdG9yJztcbmltcG9ydCB7VHJhc2gsIENsb2NrfSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9pY29ucyc7XG5pbXBvcnQgU291cmNlRGF0YVNlbGVjdG9yIGZyb20gJ2NvbXBvbmVudHMvc2lkZS1wYW5lbC9zb3VyY2UtZGF0YS1zZWxlY3Rvcic7XG5pbXBvcnQge1N0eWxlZFBhbmVsSGVhZGVyfSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9zdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgKiBhcyBGaWx0ZXJzIGZyb20gJ2NvbXBvbmVudHMvZmlsdGVycyc7XG5cbmltcG9ydCB7RklMVEVSX1RZUEVTLCBGSUxURVJfQ09NUE9ORU5UU30gZnJvbSAndXRpbHMvZmlsdGVyLXV0aWxzJztcbmltcG9ydCB7QUxMX0ZJRUxEX1RZUEVTfSBmcm9tICdjb25zdGFudHMvZGVmYXVsdC1zZXR0aW5ncyc7XG5cbmNvbnN0IFN0eWxlZEZpbHRlclBhbmVsID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgYm9yZGVyLXJhZGl1czogMXB4O1xuXG4gIC5maWx0ZXItcGFuZWxfX2ZpbHRlciB7XG4gICAgbWFyZ2luLXRvcDogMjRweDtcbiAgfVxuYDtcblxuY29uc3QgU3R5bGVkRmlsdGVySGVhZGVyID0gU3R5bGVkUGFuZWxIZWFkZXIuZXh0ZW5kYFxuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDEwcHggMTJweDtcbmA7XG5cbmNvbnN0IFN0eWxlZEZpbHRlckNvbnRlbnQgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnBhbmVsQmFja2dyb3VuZH07XG4gIHBhZGRpbmc6IDEycHg7XG5gO1xuXG5mdW5jdGlvbiBGaWx0ZXJQYW5lbEZhY3RvcnkoKSB7XG4gIHJldHVybiBjbGFzcyBGaWx0ZXJQYW5lbCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgIGlkeDogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIGZpbHRlcnM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5hbnkpLmlzUmVxdWlyZWQsXG4gICAgICBmaWx0ZXI6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICAgIHNldEZpbHRlcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICAgIHJlbW92ZUZpbHRlcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICAgIGVubGFyZ2VGaWx0ZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICB0b2dnbGVBbmltYXRpb246IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICBkYXRhc2V0czogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAgIHNob3dEYXRhc2V0VGFibGU6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgaXNBbnlGaWx0ZXJBbmltYXRpbmc6IFByb3BUeXBlcy5ib29sXG4gICAgfTtcblxuICAgIC8qIHNlbGVjdG9ycyAqL1xuICAgIGZpZWxkc1NlbGVjdG9yID0gcHJvcHMgPT5cbiAgICAgIChwcm9wcy5maWx0ZXIuZGF0YUlkICYmIHByb3BzLmRhdGFzZXRzW3Byb3BzLmZpbHRlci5kYXRhSWRdLmZpZWxkcykgfHwgW107XG4gICAgZmlsdGVyU2VsZWN0b3IgPSBwcm9wcyA9PiBwcm9wcy5maWx0ZXJzO1xuICAgIG5hbWVTZWxlY3RvciA9IHByb3BzID0+IHByb3BzLmZpbHRlci5uYW1lO1xuICAgIGRhdGFJZFNlbGVjdG9yID0gcHJvcHMgPT4gcHJvcHMuZmlsdGVyLmRhdGFJZDtcblxuICAgIC8vIG9ubHkgc2hvdyBjdXJyZW50IGZpZWxkIGFuZCBmaWVsZCB0aGF0J3Mgbm90IGFscmVhZHkgYmVlbiB1c2VkIGFzIGEgZmlsdGVyXG4gICAgYXZhaWxhYmxlRmllbGRzU2VsZWN0b3IgPSBjcmVhdGVTZWxlY3RvcihcbiAgICAgIHRoaXMuZmllbGRzU2VsZWN0b3IsXG4gICAgICB0aGlzLmZpbHRlclNlbGVjdG9yLFxuICAgICAgdGhpcy5uYW1lU2VsZWN0b3IsXG4gICAgICB0aGlzLmRhdGFJZFNlbGVjdG9yLFxuICAgICAgKGZpZWxkcywgZmlsdGVycywgbmFtZSwgZGF0YUlkKSA9PlxuICAgICAgICBmaWVsZHMuZmlsdGVyKFxuICAgICAgICAgIGYgPT5cbiAgICAgICAgICAgIGYudHlwZSAmJlxuICAgICAgICAgICAgZi50eXBlICE9PSBBTExfRklFTERfVFlQRVMuZ2VvanNvbiAmJlxuICAgICAgICAgICAgKGYubmFtZSA9PT0gbmFtZSB8fFxuICAgICAgICAgICAgICAhZmlsdGVycy5maW5kKGQgPT4gZC5uYW1lID09PSBmLm5hbWUgJiYgZC5kYXRhSWQgPT09IGRhdGFJZCkpXG4gICAgICAgIClcbiAgICApO1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgY29uc3Qge1xuICAgICAgICBkYXRhc2V0cyxcbiAgICAgICAgZW5sYXJnZUZpbHRlcixcbiAgICAgICAgZmlsdGVyLFxuICAgICAgICBpZHgsXG4gICAgICAgIGlzQW55RmlsdGVyQW5pbWF0aW5nLFxuICAgICAgICByZW1vdmVGaWx0ZXIsXG4gICAgICAgIHNldEZpbHRlcixcbiAgICAgICAgdG9nZ2xlQW5pbWF0aW9uXG4gICAgICB9ID0gdGhpcy5wcm9wcztcbiAgICAgIGNvbnN0IHtuYW1lLCBlbmxhcmdlZCwgdHlwZSwgZGF0YUlkfSA9IGZpbHRlcjtcbiAgICAgIGNvbnN0IEZpbHRlckNvbXBvbmVudCA9IHR5cGUgJiYgRmlsdGVyc1tGSUxURVJfQ09NUE9ORU5UU1t0eXBlXV07XG4gICAgICBjb25zdCBhbGxBdmFpbGFibGVGaWVsZHMgPSB0aGlzLmF2YWlsYWJsZUZpZWxkc1NlbGVjdG9yKHRoaXMucHJvcHMpO1xuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8U3R5bGVkRmlsdGVyUGFuZWwgY2xhc3NOYW1lPVwiZmlsdGVyLXBhbmVsXCI+XG4gICAgICAgICAgPFN0eWxlZEZpbHRlckhlYWRlciBjbGFzc05hbWU9XCJmaWx0ZXItcGFuZWxfX2hlYWRlclwiXG4gICAgICAgICAgICBsYWJlbFJDR0NvbG9yVmFsdWVzPXtkYXRhc2V0c1tkYXRhSWRdLmNvbG9yfT5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tmbGV4R3JvdzogMX19PlxuICAgICAgICAgICAgICA8RmllbGRTZWxlY3RvclxuICAgICAgICAgICAgICAgIGlucHV0VGhlbWU9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgIGZpZWxkcz17YWxsQXZhaWxhYmxlRmllbGRzfVxuICAgICAgICAgICAgICAgIHZhbHVlPXtuYW1lfVxuICAgICAgICAgICAgICAgIGVyYXNhYmxlPXtmYWxzZX1cbiAgICAgICAgICAgICAgICBvblNlbGVjdD17dmFsdWUgPT4gc2V0RmlsdGVyKGlkeCwgJ25hbWUnLCB2YWx1ZS5uYW1lKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPFBhbmVsSGVhZGVyQWN0aW9uXG4gICAgICAgICAgICAgIGlkPXtmaWx0ZXIuaWR9XG4gICAgICAgICAgICAgIHRvb2x0aXA9XCJkZWxldGVcIlxuICAgICAgICAgICAgICB0b29sdGlwVHlwZT1cImVycm9yXCJcbiAgICAgICAgICAgICAgb25DbGljaz17cmVtb3ZlRmlsdGVyfVxuICAgICAgICAgICAgICBob3ZlckNvbG9yPXsnZXJyb3JDb2xvcid9XG4gICAgICAgICAgICAgIEljb25Db21wb25lbnQ9e1RyYXNofVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIHt0eXBlID09PSBGSUxURVJfVFlQRVMudGltZVJhbmdlICYmIChcbiAgICAgICAgICAgICAgPFBhbmVsSGVhZGVyQWN0aW9uXG4gICAgICAgICAgICAgICAgaWQ9e2ZpbHRlci5pZH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtlbmxhcmdlRmlsdGVyfVxuICAgICAgICAgICAgICAgIHRvb2x0aXA9XCJUaW1lIFBsYXliYWNrXCJcbiAgICAgICAgICAgICAgICBJY29uQ29tcG9uZW50PXtDbG9ja31cbiAgICAgICAgICAgICAgICBhY3RpdmU9e2VubGFyZ2VkfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L1N0eWxlZEZpbHRlckhlYWRlcj5cbiAgICAgICAgICA8U3R5bGVkRmlsdGVyQ29udGVudCBjbGFzc05hbWU9XCJmaWx0ZXItcGFuZWxfX2NvbnRlbnRcIj5cbiAgICAgICAgICAgIHtPYmplY3Qua2V5cyhkYXRhc2V0cykubGVuZ3RoID4gMSAmJiAoXG4gICAgICAgICAgICAgIDxTb3VyY2VEYXRhU2VsZWN0b3JcbiAgICAgICAgICAgICAgICBpbnB1dFRoZW1lPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICBkYXRhc2V0cz17ZGF0YXNldHN9XG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2ZpbHRlci5mcmVlemV9XG4gICAgICAgICAgICAgICAgZGF0YUlkPXtmaWx0ZXIuZGF0YUlkfVxuICAgICAgICAgICAgICAgIG9uU2VsZWN0PXt2YWx1ZSA9PiBzZXRGaWx0ZXIoaWR4LCAnZGF0YUlkJywgdmFsdWUpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHt0eXBlICYmXG4gICAgICAgICAgICAhZW5sYXJnZWQgJiYgKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbHRlci1wYW5lbF9fZmlsdGVyXCI+XG4gICAgICAgICAgICAgICAgPEZpbHRlckNvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgZmlsdGVyPXtmaWx0ZXJ9XG4gICAgICAgICAgICAgICAgICBpZHg9e2lkeH1cbiAgICAgICAgICAgICAgICAgIGlzQW55RmlsdGVyQW5pbWF0aW5nPXtpc0FueUZpbHRlckFuaW1hdGluZ31cbiAgICAgICAgICAgICAgICAgIHRvZ2dsZUFuaW1hdGlvbj17dG9nZ2xlQW5pbWF0aW9ufVxuICAgICAgICAgICAgICAgICAgc2V0RmlsdGVyPXt2YWx1ZSA9PiBzZXRGaWx0ZXIoaWR4LCAndmFsdWUnLCB2YWx1ZSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvU3R5bGVkRmlsdGVyQ29udGVudD5cbiAgICAgICAgPC9TdHlsZWRGaWx0ZXJQYW5lbD5cbiAgICAgICk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZpbHRlclBhbmVsRmFjdG9yeTtcbiJdfQ==
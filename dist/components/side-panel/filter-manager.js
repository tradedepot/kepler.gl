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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reselect = require('reselect');

var _styledComponents = require('../common/styled-components');

var _icons = require('../common/icons');

var _sourceDataCatalog = require('./source-data-catalog');

var _sourceDataCatalog2 = _interopRequireDefault(_sourceDataCatalog);

var _filterPanel = require('./filter-panel/filter-panel');

var _filterPanel2 = _interopRequireDefault(_filterPanel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

FilterManagerFactory.deps = [_sourceDataCatalog2.default, _filterPanel2.default]; // Copyright (c) 2019 Uber Technologies, Inc.
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

function FilterManagerFactory(SourceDataCatalog, FilterPanel) {
  var _class, _temp2;

  return _temp2 = _class = function (_Component) {
    (0, _inherits3.default)(FilterManager, _Component);

    function FilterManager() {
      var _ref;

      var _temp, _this, _ret;

      (0, _classCallCheck3.default)(this, FilterManager);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = FilterManager.__proto__ || Object.getPrototypeOf(FilterManager)).call.apply(_ref, [this].concat(args))), _this), _this.datasetsSelector = function (state) {
        return state.datasets;
      }, _this.defaultDatasetSelector = (0, _reselect.createSelector)(_this.datasetsSelector, function (datasets) {
        return Object.keys(datasets).length && Object.keys(datasets)[0] || null;
      }), _this._addFilter = function () {
        var defaultDataset = _this.defaultDatasetSelector(_this.props);
        _this.props.addFilter(defaultDataset);
      }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    /* selectors */


    /* actions */


    (0, _createClass3.default)(FilterManager, [{
      key: 'render',
      value: function render() {
        var _this2 = this;

        var _props = this.props,
            filters = _props.filters,
            datasets = _props.datasets;

        var isAnyFilterAnimating = filters.some(function (f) {
          return f.isAnimating;
        });
        var hadEmptyFilter = filters.some(function (f) {
          return !f.name;
        });
        var hadDataset = Object.keys(datasets).length;

        return _react2.default.createElement(
          'div',
          { className: 'filter-manager' },
          _react2.default.createElement(SourceDataCatalog, {
            datasets: datasets,
            showDatasetTable: this.props.showDatasetTable
          }),
          _react2.default.createElement(_styledComponents.SidePanelDivider, null),
          _react2.default.createElement(
            _styledComponents.SidePanelSection,
            null,
            filters && filters.map(function (filter, idx) {
              return _react2.default.createElement(FilterPanel, {
                key: filter.id + '-' + idx,
                idx: idx,
                filters: filters,
                filter: filter,
                datasets: datasets,
                isAnyFilterAnimating: isAnyFilterAnimating,
                removeFilter: function removeFilter() {
                  return _this2.props.removeFilter(idx);
                },
                enlargeFilter: function enlargeFilter() {
                  return _this2.props.enlargeFilter(idx);
                },
                toggleAnimation: function toggleAnimation() {
                  return _this2.props.toggleAnimation(idx);
                },
                setFilter: _this2.props.setFilter
              });
            })
          ),
          _react2.default.createElement(
            _styledComponents.Button,
            {
              inactive: hadEmptyFilter || !hadDataset,
              width: '105px',
              onClick: this._addFilter
            },
            _react2.default.createElement(_icons.Add, { height: '12px' }),
            'Add Filter'
          )
        );
      }
    }]);
    return FilterManager;
  }(_react.Component), _class.propTypes = {
    datasets: _propTypes2.default.object,
    addFilter: _propTypes2.default.func.isRequired,
    removeFilter: _propTypes2.default.func.isRequired,
    enlargeFilter: _propTypes2.default.func.isRequired,
    toggleAnimation: _propTypes2.default.func.isRequired,
    setFilter: _propTypes2.default.func.isRequired,
    filters: _propTypes2.default.arrayOf(_propTypes2.default.any).isRequired,
    showDatasetTable: _propTypes2.default.func,

    // fields can be undefined when dataset is not selected
    fields: _propTypes2.default.arrayOf(_propTypes2.default.any)
  }, _temp2;
}

exports.default = FilterManagerFactory;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvZmlsdGVyLW1hbmFnZXIuanMiXSwibmFtZXMiOlsiRmlsdGVyTWFuYWdlckZhY3RvcnkiLCJkZXBzIiwiU291cmNlRGF0YUNhdGFsb2dGYWN0b3J5IiwiRmlsdGVyUGFuZWxGYWN0b3J5IiwiU291cmNlRGF0YUNhdGFsb2ciLCJGaWx0ZXJQYW5lbCIsImRhdGFzZXRzU2VsZWN0b3IiLCJzdGF0ZSIsImRhdGFzZXRzIiwiZGVmYXVsdERhdGFzZXRTZWxlY3RvciIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJfYWRkRmlsdGVyIiwiZGVmYXVsdERhdGFzZXQiLCJwcm9wcyIsImFkZEZpbHRlciIsImZpbHRlcnMiLCJpc0FueUZpbHRlckFuaW1hdGluZyIsInNvbWUiLCJmIiwiaXNBbmltYXRpbmciLCJoYWRFbXB0eUZpbHRlciIsIm5hbWUiLCJoYWREYXRhc2V0Iiwic2hvd0RhdGFzZXRUYWJsZSIsIm1hcCIsImZpbHRlciIsImlkeCIsImlkIiwicmVtb3ZlRmlsdGVyIiwiZW5sYXJnZUZpbHRlciIsInRvZ2dsZUFuaW1hdGlvbiIsInNldEZpbHRlciIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsImZ1bmMiLCJpc1JlcXVpcmVkIiwiYXJyYXlPZiIsImFueSIsImZpZWxkcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBS0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUFBLHFCQUFxQkMsSUFBckIsR0FBNEIsQ0FDMUJDLDJCQUQwQixFQUUxQkMscUJBRjBCLENBQTVCLEMsQ0FoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBbUJBLFNBQVNILG9CQUFULENBQThC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akJOLGVBQVdHLG9CQUFVRSxJQUFWLENBQWVDLFVBTlQ7QUFPakJ0QixhQUFTbUIsb0JBQVVJLE9BQVYsQ0FBa0JKLG9CQUFVSyxHQUE1QixFQUFpQ0YsVUFQekI7QUFRakJkLHNCQUFrQlcsb0JBQVVFLElBUlg7O0FBVWpCO0FBQ0FJLFlBQVFOLG9CQUFVSSxPQUFWLENBQWtCSixvQkFBVUssR0FBNUI7QUFYUyxHQURyQjtBQXNFRDs7a0JBRWN6QyxvQiIsImZpbGUiOiJmaWx0ZXItbWFuYWdlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAxOSBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7Y3JlYXRlU2VsZWN0b3J9IGZyb20gJ3Jlc2VsZWN0JztcbmltcG9ydCB7XG4gIFNpZGVQYW5lbFNlY3Rpb24sXG4gIFNpZGVQYW5lbERpdmlkZXIsXG4gIEJ1dHRvblxufSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9zdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQge0FkZH0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vaWNvbnMnO1xuaW1wb3J0IFNvdXJjZURhdGFDYXRhbG9nRmFjdG9yeSBmcm9tICcuL3NvdXJjZS1kYXRhLWNhdGFsb2cnO1xuaW1wb3J0IEZpbHRlclBhbmVsRmFjdG9yeSBmcm9tICcuL2ZpbHRlci1wYW5lbC9maWx0ZXItcGFuZWwnO1xuXG5GaWx0ZXJNYW5hZ2VyRmFjdG9yeS5kZXBzID0gW1xuICBTb3VyY2VEYXRhQ2F0YWxvZ0ZhY3RvcnksXG4gIEZpbHRlclBhbmVsRmFjdG9yeVxuXTtcblxuZnVuY3Rpb24gRmlsdGVyTWFuYWdlckZhY3RvcnkoU291cmNlRGF0YUNhdGFsb2csIEZpbHRlclBhbmVsKSB7XG4gIHJldHVybiBjbGFzcyBGaWx0ZXJNYW5hZ2VyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgZGF0YXNldHM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgICBhZGRGaWx0ZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICByZW1vdmVGaWx0ZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICBlbmxhcmdlRmlsdGVyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgdG9nZ2xlQW5pbWF0aW9uOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgc2V0RmlsdGVyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgZmlsdGVyczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLmFueSkuaXNSZXF1aXJlZCxcbiAgICAgIHNob3dEYXRhc2V0VGFibGU6IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgICAvLyBmaWVsZHMgY2FuIGJlIHVuZGVmaW5lZCB3aGVuIGRhdGFzZXQgaXMgbm90IHNlbGVjdGVkXG4gICAgICBmaWVsZHM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5hbnkpXG4gICAgfTtcblxuICAgIC8qIHNlbGVjdG9ycyAqL1xuICAgIGRhdGFzZXRzU2VsZWN0b3IgPSBzdGF0ZSA9PiBzdGF0ZS5kYXRhc2V0cztcbiAgICBkZWZhdWx0RGF0YXNldFNlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IoXG4gICAgICB0aGlzLmRhdGFzZXRzU2VsZWN0b3IsXG4gICAgICBkYXRhc2V0cyA9PlxuICAgICAgICAoT2JqZWN0LmtleXMoZGF0YXNldHMpLmxlbmd0aCAmJiBPYmplY3Qua2V5cyhkYXRhc2V0cylbMF0pIHx8IG51bGxcbiAgICApO1xuXG4gICAgLyogYWN0aW9ucyAqL1xuICAgIF9hZGRGaWx0ZXIgPSAoKSA9PiB7XG4gICAgICBjb25zdCBkZWZhdWx0RGF0YXNldCA9IHRoaXMuZGVmYXVsdERhdGFzZXRTZWxlY3Rvcih0aGlzLnByb3BzKTtcbiAgICAgIHRoaXMucHJvcHMuYWRkRmlsdGVyKGRlZmF1bHREYXRhc2V0KTtcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgY29uc3Qge2ZpbHRlcnMsIGRhdGFzZXRzfSA9IHRoaXMucHJvcHM7XG4gICAgICBjb25zdCBpc0FueUZpbHRlckFuaW1hdGluZyA9IGZpbHRlcnMuc29tZShmID0+IGYuaXNBbmltYXRpbmcpO1xuICAgICAgY29uc3QgaGFkRW1wdHlGaWx0ZXIgPSBmaWx0ZXJzLnNvbWUoZiA9PiAhZi5uYW1lKTtcbiAgICAgIGNvbnN0IGhhZERhdGFzZXQgPSBPYmplY3Qua2V5cyhkYXRhc2V0cykubGVuZ3RoO1xuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbHRlci1tYW5hZ2VyXCI+XG4gICAgICAgICAgPFNvdXJjZURhdGFDYXRhbG9nXG4gICAgICAgICAgICBkYXRhc2V0cz17ZGF0YXNldHN9XG4gICAgICAgICAgICBzaG93RGF0YXNldFRhYmxlPXt0aGlzLnByb3BzLnNob3dEYXRhc2V0VGFibGV9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8U2lkZVBhbmVsRGl2aWRlciAvPlxuICAgICAgICAgIDxTaWRlUGFuZWxTZWN0aW9uPlxuICAgICAgICAgICAge2ZpbHRlcnMgJiZcbiAgICAgICAgICAgICAgZmlsdGVycy5tYXAoKGZpbHRlciwgaWR4KSA9PiAoXG4gICAgICAgICAgICAgICAgPEZpbHRlclBhbmVsXG4gICAgICAgICAgICAgICAgICBrZXk9e2Ake2ZpbHRlci5pZH0tJHtpZHh9YH1cbiAgICAgICAgICAgICAgICAgIGlkeD17aWR4fVxuICAgICAgICAgICAgICAgICAgZmlsdGVycz17ZmlsdGVyc31cbiAgICAgICAgICAgICAgICAgIGZpbHRlcj17ZmlsdGVyfVxuICAgICAgICAgICAgICAgICAgZGF0YXNldHM9e2RhdGFzZXRzfVxuICAgICAgICAgICAgICAgICAgaXNBbnlGaWx0ZXJBbmltYXRpbmc9e2lzQW55RmlsdGVyQW5pbWF0aW5nfVxuICAgICAgICAgICAgICAgICAgcmVtb3ZlRmlsdGVyPXsoKSA9PiB0aGlzLnByb3BzLnJlbW92ZUZpbHRlcihpZHgpfVxuICAgICAgICAgICAgICAgICAgZW5sYXJnZUZpbHRlcj17KCkgPT4gdGhpcy5wcm9wcy5lbmxhcmdlRmlsdGVyKGlkeCl9XG4gICAgICAgICAgICAgICAgICB0b2dnbGVBbmltYXRpb249eygpID0+IHRoaXMucHJvcHMudG9nZ2xlQW5pbWF0aW9uKGlkeCl9XG4gICAgICAgICAgICAgICAgICBzZXRGaWx0ZXI9e3RoaXMucHJvcHMuc2V0RmlsdGVyfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvU2lkZVBhbmVsU2VjdGlvbj5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBpbmFjdGl2ZT17aGFkRW1wdHlGaWx0ZXIgfHwgIWhhZERhdGFzZXR9XG4gICAgICAgICAgICB3aWR0aD1cIjEwNXB4XCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX2FkZEZpbHRlcn1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8QWRkIGhlaWdodD1cIjEycHhcIiAvPkFkZCBGaWx0ZXJcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRmlsdGVyTWFuYWdlckZhY3Rvcnk7XG4iXX0=
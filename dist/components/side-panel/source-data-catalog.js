'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DatasetTag = undefined;

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  transition: ', ';\n'], ['\n  transition: ', ';\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  color: ', ';\n  display: flex;\n  align-items: flex-start;\n\n  .source-data-arrow {\n    height: 16px;\n  }\n  :hover {\n    color: ', ';\n    cursor: ', ';\n\n    .dataset-action {\n      color: ', ';\n      opacity: 1;\n    }\n\n    .dataset-action:hover {\n      color: white;\n    }\n  }\n'], ['\n  color: ', ';\n  display: flex;\n  align-items: flex-start;\n\n  .source-data-arrow {\n    height: 16px;\n  }\n  :hover {\n    color: ', ';\n    cursor: ', ';\n\n    .dataset-action {\n      color: ', ';\n      opacity: 1;\n    }\n\n    .dataset-action:hover {\n      color: white;\n    }\n  }\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  display: flex;\n  color: ', ';\n  font-size: 11px;\n  letter-spacing: 0.2px;\n  overflow: auto;\n\n  .dataset-color {\n    flex-shrink: 0;\n    margin-top: 5px;\n  }\n\n  .dataset-name {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n'], ['\n  display: flex;\n  color: ', ';\n  font-size: 11px;\n  letter-spacing: 0.2px;\n  overflow: auto;\n\n  .dataset-color {\n    flex-shrink: 0;\n    margin-top: 5px;\n  }\n\n  .dataset-name {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n  margin-left: 12px;\n  height: 16px;\n  opacity: 0;\n'], ['\n  margin-left: 12px;\n  height: 16px;\n  opacity: 0;\n']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n  font-size: 11px;\n  color: ', ';\n  padding-left: 19px;\n'], ['\n  font-size: 11px;\n  color: ', ';\n  padding-left: 19px;\n']); // Copyright (c) 2019 Uber Technologies, Inc.
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

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _d3Format = require('d3-format');

var _styledComponents3 = require('../common/styled-components');

var _icons = require('../common/icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultRemoveDataset = function defaultRemoveDataset(datasetKey) {};
var numFormat = (0, _d3Format.format)(',');

var SourceDataCatelogWrapper = _styledComponents2.default.div(_templateObject, function (props) {
  return props.theme.transition;
});

var DatasetTitle = _styledComponents2.default.div(_templateObject2, function (props) {
  return props.theme.textColor;
}, function (props) {
  return props.clickable ? props.theme.textColorHl : props.theme.textColor;
}, function (props) {
  return props.clickable ? 'pointer' : 'auto';
}, function (props) {
  return props.theme.textColorHl;
});

var DatasetTagWrapper = _styledComponents2.default.div(_templateObject3, function (props) {
  return props.theme.textColor;
});

var DataTagAction = _styledComponents2.default.div(_templateObject4);

var DataRowCount = _styledComponents2.default.div(_templateObject5, function (props) {
  return props.theme.subtextColor;
});

var DatasetTag = exports.DatasetTag = function DatasetTag(_ref) {
  var onClick = _ref.onClick,
      dataset = _ref.dataset;
  return _react2.default.createElement(
    DatasetTagWrapper,
    { className: 'source-data-tag', onClick: onClick },
    _react2.default.createElement(_styledComponents3.DatasetSquare, { className: 'dataset-color', color: dataset.color }),
    _react2.default.createElement(
      'div',
      { className: 'dataset-name' },
      dataset.label
    )
  );
};

var ShowDataTable = function ShowDataTable(_ref2) {
  var id = _ref2.id,
      showDatasetTable = _ref2.showDatasetTable;
  return _react2.default.createElement(
    DataTagAction,
    {
      className: 'dataset-action show-data-table',
      'data-tip': true,
      'data-for': 'data-table-' + id
    },
    _react2.default.createElement(_icons.Table, { height: '16px', onClick: function onClick() {
        return showDatasetTable(id);
      } }),
    _react2.default.createElement(
      _styledComponents3.Tooltip,
      { id: 'data-table-' + id, effect: 'solid' },
      _react2.default.createElement(
        'span',
        null,
        'Show data table'
      )
    )
  );
};

var RemoveDataset = function RemoveDataset(_ref3) {
  var datasetKey = _ref3.datasetKey,
      _ref3$removeDataset = _ref3.removeDataset,
      removeDataset = _ref3$removeDataset === undefined ? defaultRemoveDataset : _ref3$removeDataset;
  return _react2.default.createElement(
    DataTagAction,
    {
      className: 'dataset-action remove-dataset',
      'data-tip': true,
      'data-for': 'delete-' + datasetKey
    },
    _react2.default.createElement(_icons.Trash, {
      height: '16px',
      onClick: function onClick(e) {
        e.stopPropagation();
        removeDataset(datasetKey);
      }
    }),
    _react2.default.createElement(
      _styledComponents3.Tooltip,
      { id: 'delete-' + datasetKey, effect: 'solid', type: 'error' },
      _react2.default.createElement(
        'span',
        null,
        'Remove dataset'
      )
    )
  );
};

function SourceDataCatalogFactory() {
  var SourceDataCatalog = function SourceDataCatalog(_ref4) {
    var datasets = _ref4.datasets,
        showDatasetTable = _ref4.showDatasetTable,
        removeDataset = _ref4.removeDataset,
        _ref4$showDeleteDatas = _ref4.showDeleteDataset,
        showDeleteDataset = _ref4$showDeleteDatas === undefined ? false : _ref4$showDeleteDatas;
    return _react2.default.createElement(
      SourceDataCatelogWrapper,
      { className: 'source-data-catalog' },
      Object.values(datasets).map(function (dataset, index) {
        return _react2.default.createElement(
          _styledComponents3.SidePanelSection,
          { key: dataset.id },
          _react2.default.createElement(
            DatasetTitle,
            { className: 'source-data-title', clickable: Boolean(showDatasetTable) },
            _react2.default.createElement(DatasetTag, {
              dataset: dataset,
              onClick: showDatasetTable ? function () {
                return showDatasetTable(dataset.id);
              } : null
            }),
            showDatasetTable ? _react2.default.createElement(
              _styledComponents3.CenterFlexbox,
              { className: 'source-data-arrow' },
              _react2.default.createElement(_icons.ArrowRight, { height: '12px' })
            ) : null,
            showDatasetTable ? _react2.default.createElement(ShowDataTable, {
              id: dataset.id,
              showDatasetTable: showDatasetTable
            }) : null,
            showDeleteDataset ? _react2.default.createElement(RemoveDataset, {
              datasetKey: dataset.id,
              removeDataset: removeDataset
            }) : null
          ),
          showDatasetTable ? _react2.default.createElement(
            DataRowCount,
            { className: 'source-data-rows' },
            numFormat(dataset.allData.length) + ' rows'
          ) : null
        );
      })
    );
  };

  return SourceDataCatalog;
}

exports.default = SourceDataCatalogFactory;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvc291cmNlLWRhdGEtY2F0YWxvZy5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0UmVtb3ZlRGF0YXNldCIsIm51bUZvcm1hdCIsIlNvdXJjZURhdGFDYXRlbG9nV3JhcHBlciIsInN0eWxlZCIsImRpdiIsInByb3BzIiwidGhlbWUiLCJ0cmFuc2l0aW9uIiwiRGF0YXNldFRpdGxlIiwidGV4dENvbG9yIiwiY2xpY2thYmxlIiwidGV4dENvbG9ySGwiLCJEYXRhc2V0VGFnV3JhcHBlciIsIkRhdGFUYWdBY3Rpb24iLCJEYXRhUm93Q291bnQiLCJzdWJ0ZXh0Q29sb3IiLCJEYXRhc2V0VGFnIiwib25DbGljayIsImRhdGFzZXQiLCJjb2xvciIsImxhYmVsIiwiU2hvd0RhdGFUYWJsZSIsImlkIiwic2hvd0RhdGFzZXRUYWJsZSIsIlJlbW92ZURhdGFzZXQiLCJkYXRhc2V0S2V5IiwicmVtb3ZlRGF0YXNldCIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJTb3VyY2VEYXRhQ2F0YWxvZ0ZhY3RvcnkiLCJTb3VyY2VEYXRhQ2F0YWxvZyIsImRhdGFzZXRzIiwic2hvd0RlbGV0ZURhdGFzZXQiLCJPYmplY3QiLCJ2YWx1ZXMiLCJtYXAiLCJpbmRleCIsIkJvb2xlYW4iLCJhbGxEYXRhIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7bU1BQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOztBQUVBOztBQUNBOzs7O0FBRUEsSUFBTUEsdUJBQXVCLFNBQXZCQSxvQkFBdUIsYUFBYyxDQUFFLENBQTdDO0FBQ0EsSUFBTUMsWUFBWSxzQkFBTyxHQUFQLENBQWxCOztBQUVBLElBQU1DLDJCQUEyQkMsMkJBQU9DLEdBQWxDLGtCQUNVO0FBQUEs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QUEsV0FNeEI7QUFBQyw4QkFBRDtBQUFBLFFBQTBCLFdBQVUscUJBQXBDO0FBQ0dDLGFBQU9DLE1BQVAsQ0FBY0gsUUFBZCxFQUF3QkksR0FBeEIsQ0FBNEIsVUFBQ2pCLE9BQUQsRUFBVWtCLEtBQVY7QUFBQSxlQUMzQjtBQUFDLDZDQUFEO0FBQUEsWUFBa0IsS0FBS2xCLFFBQVFJLEVBQS9CO0FBQ0U7QUFBQyx3QkFBRDtBQUFBLGNBQWMsV0FBVSxtQkFBeEIsRUFBNEMsV0FBV2UsUUFBUWQsZ0JBQVIsQ0FBdkQ7QUFDRSwwQ0FBQyxVQUFEO0FBQ0UsdUJBQVNMLE9BRFg7QUFFRSx1QkFDRUssbUJBQW1CO0FBQUEsdUJBQU1BLGlCQUFpQkwsUUFBUUksRUFBekIsQ0FBTjtBQUFBLGVBQW5CLEdBQXdEO0FBSDVELGNBREY7QUFPR0MsK0JBQ0M7QUFBQyw4Q0FBRDtBQUFBLGdCQUFlLFdBQVUsbUJBQXpCO0FBQ0UsNENBQUMsaUJBQUQsSUFBWSxRQUFPLE1BQW5CO0FBREYsYUFERCxHQUdvQixJQVZ2QjtBQVdHQSwrQkFDQyw4QkFBQyxhQUFEO0FBQ0Usa0JBQUlMLFFBQVFJLEVBRGQ7QUFFRSxnQ0FBa0JDO0FBRnBCLGNBREQsR0FLRyxJQWhCTjtBQWlCR1MsZ0NBQ0MsOEJBQUMsYUFBRDtBQUNFLDBCQUFZZCxRQUFRSSxFQUR0QjtBQUVFLDZCQUFlSTtBQUZqQixjQURELEdBS0c7QUF0Qk4sV0FERjtBQXlCR0gsNkJBQ0M7QUFBQyx3QkFBRDtBQUFBLGNBQWMsV0FBVSxrQkFBeEI7QUFBK0N0QixzQkFDN0NpQixRQUFRb0IsT0FBUixDQUFnQkMsTUFENkIsQ0FBL0M7QUFBQSxXQURELEdBSUc7QUE3Qk4sU0FEMkI7QUFBQSxPQUE1QjtBQURILEtBTndCO0FBQUEsR0FBMUI7O0FBMkNBLFNBQU9ULGlCQUFQO0FBQ0Q7O2tCQUVjRCx3QiIsImZpbGUiOiJzb3VyY2UtZGF0YS1jYXRhbG9nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDE5IFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHtmb3JtYXR9IGZyb20gJ2QzLWZvcm1hdCc7XG5cbmltcG9ydCB7U2lkZVBhbmVsU2VjdGlvbiwgVG9vbHRpcCwgRGF0YXNldFNxdWFyZSwgQ2VudGVyRmxleGJveH0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHtUYWJsZSwgVHJhc2gsIEFycm93UmlnaHR9IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2ljb25zJztcblxuY29uc3QgZGVmYXVsdFJlbW92ZURhdGFzZXQgPSBkYXRhc2V0S2V5ID0+IHt9O1xuY29uc3QgbnVtRm9ybWF0ID0gZm9ybWF0KCcsJyk7XG5cbmNvbnN0IFNvdXJjZURhdGFDYXRlbG9nV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIHRyYW5zaXRpb246ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudHJhbnNpdGlvbn07XG5gO1xuXG5jb25zdCBEYXRhc2V0VGl0bGUgPSBzdHlsZWQuZGl2YFxuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0Q29sb3J9O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcblxuICAuc291cmNlLWRhdGEtYXJyb3cge1xuICAgIGhlaWdodDogMTZweDtcbiAgfVxuICA6aG92ZXIge1xuICAgIGNvbG9yOiAke3Byb3BzID0+XG4gICAgICBwcm9wcy5jbGlja2FibGUgPyBwcm9wcy50aGVtZS50ZXh0Q29sb3JIbCA6IHByb3BzLnRoZW1lLnRleHRDb2xvcn07XG4gICAgY3Vyc29yOiAke3Byb3BzID0+IChwcm9wcy5jbGlja2FibGUgPyAncG9pbnRlcicgOiAnYXV0bycpfTtcblxuICAgIC5kYXRhc2V0LWFjdGlvbiB7XG4gICAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0Q29sb3JIbH07XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cblxuICAgIC5kYXRhc2V0LWFjdGlvbjpob3ZlciB7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBEYXRhc2V0VGFnV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvcn07XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICBvdmVyZmxvdzogYXV0bztcblxuICAuZGF0YXNldC1jb2xvciB7XG4gICAgZmxleC1zaHJpbms6IDA7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICB9XG5cbiAgLmRhdGFzZXQtbmFtZSB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB9XG5gO1xuXG5jb25zdCBEYXRhVGFnQWN0aW9uID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luLWxlZnQ6IDEycHg7XG4gIGhlaWdodDogMTZweDtcbiAgb3BhY2l0eTogMDtcbmA7XG5cbmNvbnN0IERhdGFSb3dDb3VudCA9IHN0eWxlZC5kaXZgXG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc3VidGV4dENvbG9yfTtcbiAgcGFkZGluZy1sZWZ0OiAxOXB4O1xuYDtcblxuZXhwb3J0IGNvbnN0IERhdGFzZXRUYWcgPSAoe29uQ2xpY2ssIGRhdGFzZXR9KSA9PiAoXG4gIDxEYXRhc2V0VGFnV3JhcHBlciBjbGFzc05hbWU9XCJzb3VyY2UtZGF0YS10YWdcIiBvbkNsaWNrPXtvbkNsaWNrfT5cbiAgICA8RGF0YXNldFNxdWFyZSBjbGFzc05hbWU9XCJkYXRhc2V0LWNvbG9yXCIgY29sb3I9e2RhdGFzZXQuY29sb3J9IC8+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJkYXRhc2V0LW5hbWVcIj57ZGF0YXNldC5sYWJlbH08L2Rpdj5cbiAgPC9EYXRhc2V0VGFnV3JhcHBlcj5cbik7XG5cbmNvbnN0IFNob3dEYXRhVGFibGUgPSAoe2lkLCBzaG93RGF0YXNldFRhYmxlfSkgPT4gKFxuICA8RGF0YVRhZ0FjdGlvblxuICAgIGNsYXNzTmFtZT1cImRhdGFzZXQtYWN0aW9uIHNob3ctZGF0YS10YWJsZVwiXG4gICAgZGF0YS10aXBcbiAgICBkYXRhLWZvcj17YGRhdGEtdGFibGUtJHtpZH1gfVxuICA+XG4gICAgPFRhYmxlIGhlaWdodD1cIjE2cHhcIiBvbkNsaWNrPXsoKSA9PiBzaG93RGF0YXNldFRhYmxlKGlkKX0gLz5cbiAgICA8VG9vbHRpcCBpZD17YGRhdGEtdGFibGUtJHtpZH1gfSBlZmZlY3Q9XCJzb2xpZFwiPlxuICAgICAgPHNwYW4+U2hvdyBkYXRhIHRhYmxlPC9zcGFuPlxuICAgIDwvVG9vbHRpcD5cbiAgPC9EYXRhVGFnQWN0aW9uPlxuKTtcblxuY29uc3QgUmVtb3ZlRGF0YXNldCA9ICh7ZGF0YXNldEtleSwgcmVtb3ZlRGF0YXNldCA9IGRlZmF1bHRSZW1vdmVEYXRhc2V0fSkgPT4gKFxuICA8RGF0YVRhZ0FjdGlvblxuICAgIGNsYXNzTmFtZT1cImRhdGFzZXQtYWN0aW9uIHJlbW92ZS1kYXRhc2V0XCJcbiAgICBkYXRhLXRpcFxuICAgIGRhdGEtZm9yPXtgZGVsZXRlLSR7ZGF0YXNldEtleX1gfVxuICA+XG4gICAgPFRyYXNoXG4gICAgICBoZWlnaHQ9XCIxNnB4XCJcbiAgICAgIG9uQ2xpY2s9e2UgPT4ge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICByZW1vdmVEYXRhc2V0KGRhdGFzZXRLZXkpO1xuICAgICAgfX1cbiAgICAvPlxuICAgIDxUb29sdGlwIGlkPXtgZGVsZXRlLSR7ZGF0YXNldEtleX1gfSBlZmZlY3Q9XCJzb2xpZFwiIHR5cGU9XCJlcnJvclwiPlxuICAgICAgPHNwYW4+UmVtb3ZlIGRhdGFzZXQ8L3NwYW4+XG4gICAgPC9Ub29sdGlwPlxuICA8L0RhdGFUYWdBY3Rpb24+XG4pO1xuXG5mdW5jdGlvbiBTb3VyY2VEYXRhQ2F0YWxvZ0ZhY3RvcnkoKSB7XG4gIGNvbnN0IFNvdXJjZURhdGFDYXRhbG9nID0gKHtcbiAgICBkYXRhc2V0cyxcbiAgICBzaG93RGF0YXNldFRhYmxlLFxuICAgIHJlbW92ZURhdGFzZXQsXG4gICAgc2hvd0RlbGV0ZURhdGFzZXQgPSBmYWxzZVxuICB9KSA9PiAoXG4gICAgPFNvdXJjZURhdGFDYXRlbG9nV3JhcHBlciBjbGFzc05hbWU9XCJzb3VyY2UtZGF0YS1jYXRhbG9nXCI+XG4gICAgICB7T2JqZWN0LnZhbHVlcyhkYXRhc2V0cykubWFwKChkYXRhc2V0LCBpbmRleCkgPT4gKFxuICAgICAgICA8U2lkZVBhbmVsU2VjdGlvbiBrZXk9e2RhdGFzZXQuaWR9PlxuICAgICAgICAgIDxEYXRhc2V0VGl0bGUgY2xhc3NOYW1lPVwic291cmNlLWRhdGEtdGl0bGVcIiBjbGlja2FibGU9e0Jvb2xlYW4oc2hvd0RhdGFzZXRUYWJsZSl9PlxuICAgICAgICAgICAgPERhdGFzZXRUYWdcbiAgICAgICAgICAgICAgZGF0YXNldD17ZGF0YXNldH1cbiAgICAgICAgICAgICAgb25DbGljaz17XG4gICAgICAgICAgICAgICAgc2hvd0RhdGFzZXRUYWJsZSA/ICgpID0+IHNob3dEYXRhc2V0VGFibGUoZGF0YXNldC5pZCkgOiBudWxsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7c2hvd0RhdGFzZXRUYWJsZSA/XG4gICAgICAgICAgICAgIDxDZW50ZXJGbGV4Ym94IGNsYXNzTmFtZT1cInNvdXJjZS1kYXRhLWFycm93XCI+XG4gICAgICAgICAgICAgICAgPEFycm93UmlnaHQgaGVpZ2h0PVwiMTJweFwiIC8+XG4gICAgICAgICAgICAgIDwvQ2VudGVyRmxleGJveD4gOiBudWxsfVxuICAgICAgICAgICAge3Nob3dEYXRhc2V0VGFibGUgPyAoXG4gICAgICAgICAgICAgIDxTaG93RGF0YVRhYmxlXG4gICAgICAgICAgICAgICAgaWQ9e2RhdGFzZXQuaWR9XG4gICAgICAgICAgICAgICAgc2hvd0RhdGFzZXRUYWJsZT17c2hvd0RhdGFzZXRUYWJsZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAge3Nob3dEZWxldGVEYXRhc2V0ID8gKFxuICAgICAgICAgICAgICA8UmVtb3ZlRGF0YXNldFxuICAgICAgICAgICAgICAgIGRhdGFzZXRLZXk9e2RhdGFzZXQuaWR9XG4gICAgICAgICAgICAgICAgcmVtb3ZlRGF0YXNldD17cmVtb3ZlRGF0YXNldH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgIDwvRGF0YXNldFRpdGxlPlxuICAgICAgICAgIHtzaG93RGF0YXNldFRhYmxlID8gKFxuICAgICAgICAgICAgPERhdGFSb3dDb3VudCBjbGFzc05hbWU9XCJzb3VyY2UtZGF0YS1yb3dzXCI+e2Ake251bUZvcm1hdChcbiAgICAgICAgICAgICAgZGF0YXNldC5hbGxEYXRhLmxlbmd0aFxuICAgICAgICAgICAgKX0gcm93c2B9PC9EYXRhUm93Q291bnQ+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIDwvU2lkZVBhbmVsU2VjdGlvbj5cbiAgICAgICkpfVxuICAgIDwvU291cmNlRGF0YUNhdGVsb2dXcmFwcGVyPlxuICApO1xuXG4gIHJldHVybiBTb3VyY2VEYXRhQ2F0YWxvZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgU291cmNlRGF0YUNhdGFsb2dGYWN0b3J5O1xuIl19
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _interactionPanel = require('./interaction-panel/interaction-panel');

var _interactionPanel2 = _interopRequireDefault(_interactionPanel);

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

InteractionManagerFactory.deps = [_interactionPanel2.default];

function InteractionManagerFactory(InteractionPanel) {
  var InteractionManager = function InteractionManager(_ref) {
    var interactionConfig = _ref.interactionConfig,
        datasets = _ref.datasets,
        onConfigChange = _ref.onConfigChange;
    return _react2.default.createElement(
      'div',
      { className: 'interaction-manager' },
      Object.keys(interactionConfig).map(function (key) {
        return _react2.default.createElement(InteractionPanel, {
          datasets: datasets,
          config: interactionConfig[key],
          key: key,
          onConfigChange: onConfigChange
        });
      })
    );
  };

  return InteractionManager;
}

exports.default = InteractionManagerFactory;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvaW50ZXJhY3Rpb24tbWFuYWdlci5qcyJdLCJuYW1lcyI6WyJJbnRlcmFjdGlvbk1hbmFnZXJGYWN0b3J5IiwiZGVwcyIsIkludGVyYWN0aW9uUGFuZWxGYWN0b3J5IiwiSW50ZXJhY3Rpb25QYW5lbCIsIkludGVyYWN0aW9uTWFuYWdlciIsImludGVyYWN0aW9uQ29uZmlnIiwiZGF0YXNldHMiLCJvbkNvbmZpZ0NoYW5nZSIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJrZXkiXSwibWFwcGluZ3MiOiI7Ozs7OztBQW9CQTs7OztBQUNBOzs7Ozs7QUFyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBS0FBLDBCQUEwQkMsSUFBMUIsR0FBaUMsQ0FBQ0MsMEJBQUQsQ0FBakM7O0FBRUEsU0FBU0YseUJBQVQsQ0FBbUNHLGdCQUFuQyxFQUFxRDtBQUNuRCxNQUFNQyxxQkFBcUIsU0FBckJBLGtCQUFxQjtBQUFBLFFBQUVDLGlCQUFGLFFBQUVBLGlCQUFGO0FBQUEsUUFBcUJDLFFBQXJCLFFBQXFCQSxRQUFyQjtBQUFBLFFBQStCQyxjQUEvQixRQUErQkEsY0FBL0I7QUFBQSxXQUN6QjtBQUFBO0FBQUEsUUFBSyxXQUFVLHFCQUFmO0FBQ0dDLGFBQU9DLElBQVAsQ0FBWUosaUJBQVosRUFBK0JLLEdBQS9CLENBQW1DO0FBQUEsZUFDbEMsOEJBQUMsZ0JBQUQ7QUFDRSxvQkFBVUosUUFEWjtBQUVFLGtCQUFRRCxrQkFBa0JNLEdBQWxCLENBRlY7QUFHRSxlQUFLQSxHQUhQO0FBSUUsMEJBQWdCSjtBQUpsQixVQURrQztBQUFBLE9BQW5DO0FBREgsS0FEeUI7QUFBQSxHQUEzQjs7QUFhQSxTQUFPSCxrQkFBUDtBQUNEOztrQkFFY0oseUIiLCJmaWxlIjoiaW50ZXJhY3Rpb24tbWFuYWdlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAxOSBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSW50ZXJhY3Rpb25QYW5lbEZhY3RvcnkgZnJvbSAnLi9pbnRlcmFjdGlvbi1wYW5lbC9pbnRlcmFjdGlvbi1wYW5lbCc7XG5cbkludGVyYWN0aW9uTWFuYWdlckZhY3RvcnkuZGVwcyA9IFtJbnRlcmFjdGlvblBhbmVsRmFjdG9yeV07XG5cbmZ1bmN0aW9uIEludGVyYWN0aW9uTWFuYWdlckZhY3RvcnkoSW50ZXJhY3Rpb25QYW5lbCkge1xuICBjb25zdCBJbnRlcmFjdGlvbk1hbmFnZXIgPSAoe2ludGVyYWN0aW9uQ29uZmlnLCBkYXRhc2V0cywgb25Db25maWdDaGFuZ2V9KSA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJpbnRlcmFjdGlvbi1tYW5hZ2VyXCI+XG4gICAgICB7T2JqZWN0LmtleXMoaW50ZXJhY3Rpb25Db25maWcpLm1hcChrZXkgPT4gKFxuICAgICAgICA8SW50ZXJhY3Rpb25QYW5lbFxuICAgICAgICAgIGRhdGFzZXRzPXtkYXRhc2V0c31cbiAgICAgICAgICBjb25maWc9e2ludGVyYWN0aW9uQ29uZmlnW2tleV19XG4gICAgICAgICAga2V5PXtrZXl9XG4gICAgICAgICAgb25Db25maWdDaGFuZ2U9e29uQ29uZmlnQ2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICk7XG5cbiAgcmV0dXJuIEludGVyYWN0aW9uTWFuYWdlcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW50ZXJhY3Rpb25NYW5hZ2VyRmFjdG9yeTtcbiJdfQ==
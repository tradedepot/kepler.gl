'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toggleFullScreen = exports.toggleSplitMap = exports.togglePerspective = exports.fitBounds = exports.updateMap = undefined;

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _reduxActions = require('redux-actions');

var _actionTypes = require('../constants/action-types');

var _actionTypes2 = _interopRequireDefault(_actionTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// second argument of createAction is expected
// to be payloadCreator or undefined
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

var _map = [_actionTypes2.default.TOGGLE_PERSPECTIVE, _actionTypes2.default.FIT_BOUNDS, _actionTypes2.default.UPDATE_MAP, _actionTypes2.default.TOGGLE_SPLIT_MAP, _actionTypes2.default.TOGGLE_FULLSCREEN].map(function (action) {
  return (0, _reduxActions.createAction)(action);
}),
    _map2 = (0, _slicedToArray3.default)(_map, 5),
    togglePerspective = _map2[0],
    fitBounds = _map2[1],
    updateMap = _map2[2],
    toggleSplitMap = _map2[3],
    toggleFullScreen = _map2[4];

exports.updateMap = updateMap;
exports.fitBounds = fitBounds;
exports.togglePerspective = togglePerspective;
exports.toggleSplitMap = toggleSplitMap;
exports.toggleFullScreen = toggleFullScreen;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL21hcC1zdGF0ZS1hY3Rpb25zLmpzIl0sIm5hbWVzIjpbIkFjdGlvblR5cGVzIiwiVE9HR0xFX1BFUlNQRUNUSVZFIiwiRklUX0JPVU5EUyIsIlVQREFURV9NQVAiLCJUT0dHTEVfU1BMSVRfTUFQIiwiVE9HR0xFX0ZVTExTQ1JFRU4iLCJtYXAiLCJhY3Rpb24iLCJ0b2dnbGVQZXJzcGVjdGl2ZSIsImZpdEJvdW5kcyIsInVwZGF0ZU1hcCIsInRvZ2dsZVNwbGl0TWFwIiwidG9nZ2xlRnVsbFNjcmVlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7Ozs7OztBQUVBO0FBQ0E7QUF4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O1dBYUksQ0FDRkEsc0JBQVlDLGtCQURWLEVBRUZELHNCQUFZRSxVQUZWLEVBR0ZGLHNCQUFZRyxVQUhWLEVBSUZILHNCQUFZSSxnQkFKVixFQUtGSixzQkFBWUssaUJBTFYsRUFNRkMsR0FORSxDQU1FO0FBQUEsU0FBVSxnQ0FBYUMsTUFBYixDQUFWO0FBQUEsQ0FORixDOztJQUxGQyxpQjtJQUNBQyxTO0lBQ0FDLFM7SUFDQUMsYztJQUNBQyxnQjs7UUFVQUYsUyxHQUFBQSxTO1FBQ0FELFMsR0FBQUEsUztRQUNBRCxpQixHQUFBQSxpQjtRQUNBRyxjLEdBQUFBLGM7UUFDQUMsZ0IsR0FBQUEsZ0IiLCJmaWxlIjoibWFwLXN0YXRlLWFjdGlvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMTkgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQge2NyZWF0ZUFjdGlvbn0gZnJvbSAncmVkdXgtYWN0aW9ucyc7XG5pbXBvcnQgQWN0aW9uVHlwZXMgZnJvbSAnY29uc3RhbnRzL2FjdGlvbi10eXBlcyc7XG5cbi8vIHNlY29uZCBhcmd1bWVudCBvZiBjcmVhdGVBY3Rpb24gaXMgZXhwZWN0ZWRcbi8vIHRvIGJlIHBheWxvYWRDcmVhdG9yIG9yIHVuZGVmaW5lZFxuY29uc3QgW1xuICB0b2dnbGVQZXJzcGVjdGl2ZSxcbiAgZml0Qm91bmRzLFxuICB1cGRhdGVNYXAsXG4gIHRvZ2dsZVNwbGl0TWFwLFxuICB0b2dnbGVGdWxsU2NyZWVuXG5dID0gW1xuICBBY3Rpb25UeXBlcy5UT0dHTEVfUEVSU1BFQ1RJVkUsXG4gIEFjdGlvblR5cGVzLkZJVF9CT1VORFMsXG4gIEFjdGlvblR5cGVzLlVQREFURV9NQVAsXG4gIEFjdGlvblR5cGVzLlRPR0dMRV9TUExJVF9NQVAsXG4gIEFjdGlvblR5cGVzLlRPR0dMRV9GVUxMU0NSRUVOXG5dLm1hcChhY3Rpb24gPT4gY3JlYXRlQWN0aW9uKGFjdGlvbikpO1xuXG5leHBvcnQge1xuICB1cGRhdGVNYXAsXG4gIGZpdEJvdW5kcyxcbiAgdG9nZ2xlUGVyc3BlY3RpdmUsXG4gIHRvZ2dsZVNwbGl0TWFwLFxuICB0b2dnbGVGdWxsU2NyZWVuXG59O1xuIl19
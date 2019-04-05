'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.aggregate = aggregate;

var _d3Array = require('d3-array');

var _defaultSettings = require('../constants/default-settings');

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

var getFrenquency = function getFrenquency(data) {
  return data.reduce(function (uniques, val) {
    uniques[val] = (uniques[val] || 0) + 1;
    return uniques;
  }, {});
};

function getMode(data) {
  var occur = getFrenquency(data);
  return Object.keys(occur).reduce(function (prev, key) {
    return occur[prev] >= occur[key] ? prev : key;
  }, Object.keys(occur)[0]);
}

function aggregate(data, technique) {
  switch (technique) {
    case _defaultSettings.AGGREGATION_TYPES.average:
      return (0, _d3Array.mean)(data);
    case _defaultSettings.AGGREGATION_TYPES.countUnique:
      return Object.keys(data.reduce(function (uniques, val) {
        uniques[val] = uniques[val] || 0;
        uniques[val] += 1;
        return uniques;
      }, {})).length;
    case _defaultSettings.AGGREGATION_TYPES.mode:
      return getMode(data);

    case _defaultSettings.AGGREGATION_TYPES.maximum:
      return (0, _d3Array.max)(data);
    case _defaultSettings.AGGREGATION_TYPES.minimum:
      return (0, _d3Array.min)(data);
    case _defaultSettings.AGGREGATION_TYPES.median:
      return (0, _d3Array.median)(data);
    case _defaultSettings.AGGREGATION_TYPES.sum:
      return (0, _d3Array.sum)(data);
    default:
      return data.length;
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9hZ2dyZWdhdGUtdXRpbHMuanMiXSwibmFtZXMiOlsiYWdncmVnYXRlIiwiZ2V0RnJlbnF1ZW5jeSIsImRhdGEiLCJyZWR1Y2UiLCJ1bmlxdWVzIiwidmFsIiwiZ2V0TW9kZSIsIm9jY3VyIiwiT2JqZWN0Iiwia2V5cyIsInByZXYiLCJrZXkiLCJ0ZWNobmlxdWUiLCJBR0dSRUdBVElPTl9UWVBFUyIsImF2ZXJhZ2UiLCJjb3VudFVuaXF1ZSIsImxlbmd0aCIsIm1vZGUiLCJtYXhpbXVtIiwibWluaW11bSIsIm1lZGlhbiIsInN1bSJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFrQ2dCQSxTLEdBQUFBLFM7O0FBZGhCOztBQUNBOztBQXJCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFLQSxJQUFNQyxnQkFBZ0IsU0FBaEJBLGFBQWdCO0FBQUEsU0FBUUMsS0FBS0MsTUFBTCxDQUFZLFVBQUNDLE9BQUQsRUFBVUMsR0FBVixFQUFrQjtBQUMxREQsWUFBUUMsR0FBUixJQUFlLENBQUNELFFBQVFDLEdBQVIsS0FBZ0IsQ0FBakIsSUFBc0IsQ0FBckM7QUFDQSxXQUFPRCxPQUFQO0FBQ0QsR0FINkIsRUFHM0IsRUFIMkIsQ0FBUjtBQUFBLENBQXRCOztBQUtBLFNBQVNFLE9BQVQsQ0FBaUJKLElBQWpCLEVBQXVCO0FBQ3JCLE1BQU1LLFFBQVFOLGNBQWNDLElBQWQsQ0FBZDtBQUNBLFNBQU9NLE9BQU9DLElBQVAsQ0FBWUYsS0FBWixFQUFtQkosTUFBbkIsQ0FBMEIsVUFBQ08sSUFBRCxFQUFPQyxHQUFQO0FBQUEsV0FDL0JKLE1BQU1HLElBQU4sS0FBZUgsTUFBTUksR0FBTixDQUFmLEdBQTRCRCxJQUE1QixHQUFtQ0MsR0FESjtBQUFBLEdBQTFCLEVBQ21DSCxPQUFPQyxJQUFQLENBQVlGLEtBQVosRUFBbUIsQ0FBbkIsQ0FEbkMsQ0FBUDtBQUVEOztBQUVNLFNBQVNQLFNBQVQsQ0FBbUJFLElBQW5CLEVBQXlCVSxTQUF6QixFQUFvQztBQUN6QyxVQUFRQSxTQUFSO0FBQ0UsU0FBS0MsbUNBQWtCQyxPQUF2QjtBQUNFLGFBQU8sbUJBQUtaLElBQUwsQ0FBUDtBQUNGLFNBQUtXLG1DQUFrQkUsV0FBdkI7QUFDRSxhQUFPUCxPQUFPQyxJQUFQLENBQ0xQLEtBQUtDLE1BQUwsQ0FBWSxVQUFDQyxPQUFELEVBQVVDLEdBQVYsRUFBa0I7QUFDNUJELGdCQUFRQyxHQUFSLElBQWVELFFBQVFDLEdBQVIsS0FBZ0IsQ0FBL0I7QUFDQUQsZ0JBQVFDLEdBQVIsS0FBZ0IsQ0FBaEI7QUFDQSxlQUFPRCxPQUFQO0FBQ0QsT0FKRCxFQUlHLEVBSkgsQ0FESyxFQU1MWSxNQU5GO0FBT0YsU0FBS0gsbUNBQWtCSSxJQUF2QjtBQUNFLGFBQU9YLFFBQVFKLElBQVIsQ0FBUDs7QUFFRixTQUFLVyxtQ0FBa0JLLE9BQXZCO0FBQ0UsYUFBTyxrQkFBSWhCLElBQUosQ0FBUDtBQUNGLFNBQUtXLG1DQUFrQk0sT0FBdkI7QUFDRSxhQUFPLGtCQUFJakIsSUFBSixDQUFQO0FBQ0YsU0FBS1csbUNBQWtCTyxNQUF2QjtBQUNFLGFBQU8scUJBQU9sQixJQUFQLENBQVA7QUFDRixTQUFLVyxtQ0FBa0JRLEdBQXZCO0FBQ0UsYUFBTyxrQkFBSW5CLElBQUosQ0FBUDtBQUNGO0FBQ0UsYUFBT0EsS0FBS2MsTUFBWjtBQXZCSjtBQXlCRCIsImZpbGUiOiJhZ2dyZWdhdGUtdXRpbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMTkgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQge21pbiwgbWF4LCBtZWFuLCBtZWRpYW4sIHN1bX0gZnJvbSAnZDMtYXJyYXknO1xuaW1wb3J0IHtBR0dSRUdBVElPTl9UWVBFU30gZnJvbSAnY29uc3RhbnRzL2RlZmF1bHQtc2V0dGluZ3MnO1xuXG5jb25zdCBnZXRGcmVucXVlbmN5ID0gZGF0YSA9PiBkYXRhLnJlZHVjZSgodW5pcXVlcywgdmFsKSA9PiB7XG4gIHVuaXF1ZXNbdmFsXSA9ICh1bmlxdWVzW3ZhbF0gfHwgMCkgKyAxO1xuICByZXR1cm4gdW5pcXVlcztcbn0sIHt9KTtcblxuZnVuY3Rpb24gZ2V0TW9kZShkYXRhKSB7XG4gIGNvbnN0IG9jY3VyID0gZ2V0RnJlbnF1ZW5jeShkYXRhKTtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKG9jY3VyKS5yZWR1Y2UoKHByZXYsIGtleSkgPT5cbiAgICBvY2N1cltwcmV2XSA+PSBvY2N1cltrZXldID8gcHJldiA6IGtleSwgT2JqZWN0LmtleXMob2NjdXIpWzBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFnZ3JlZ2F0ZShkYXRhLCB0ZWNobmlxdWUpIHtcbiAgc3dpdGNoICh0ZWNobmlxdWUpIHtcbiAgICBjYXNlIEFHR1JFR0FUSU9OX1RZUEVTLmF2ZXJhZ2U6XG4gICAgICByZXR1cm4gbWVhbihkYXRhKTtcbiAgICBjYXNlIEFHR1JFR0FUSU9OX1RZUEVTLmNvdW50VW5pcXVlOlxuICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKFxuICAgICAgICBkYXRhLnJlZHVjZSgodW5pcXVlcywgdmFsKSA9PiB7XG4gICAgICAgICAgdW5pcXVlc1t2YWxdID0gdW5pcXVlc1t2YWxdIHx8IDA7XG4gICAgICAgICAgdW5pcXVlc1t2YWxdICs9IDE7XG4gICAgICAgICAgcmV0dXJuIHVuaXF1ZXM7XG4gICAgICAgIH0sIHt9KVxuICAgICAgKS5sZW5ndGg7XG4gICAgY2FzZSBBR0dSRUdBVElPTl9UWVBFUy5tb2RlOlxuICAgICAgcmV0dXJuIGdldE1vZGUoZGF0YSk7XG5cbiAgICBjYXNlIEFHR1JFR0FUSU9OX1RZUEVTLm1heGltdW06XG4gICAgICByZXR1cm4gbWF4KGRhdGEpO1xuICAgIGNhc2UgQUdHUkVHQVRJT05fVFlQRVMubWluaW11bTpcbiAgICAgIHJldHVybiBtaW4oZGF0YSk7XG4gICAgY2FzZSBBR0dSRUdBVElPTl9UWVBFUy5tZWRpYW46XG4gICAgICByZXR1cm4gbWVkaWFuKGRhdGEpO1xuICAgIGNhc2UgQUdHUkVHQVRJT05fVFlQRVMuc3VtOlxuICAgICAgcmV0dXJuIHN1bShkYXRhKTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGRhdGEubGVuZ3RoO1xuICB9XG59XG4iXX0=
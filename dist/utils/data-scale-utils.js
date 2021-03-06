'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getQuantileDomain = getQuantileDomain;
exports.getOrdinalDomain = getOrdinalDomain;
exports.getLinearDomain = getLinearDomain;

var _dataUtils = require('./data-utils');

var _d3Array = require('d3-array');

/**
 * return quantile domain for an array of data
 * @param {array} data
 * @param {function | undefined} valueAccessor
 * @param {function | undefined} sortFunc
 * @returns {array} domain
 */
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

function getQuantileDomain(data, valueAccessor, sortFunc) {
  var values = typeof valueAccessor === 'function' ? data.map(valueAccessor) : data;

  return values.filter(_dataUtils.notNullorUndefined).sort(sortFunc);
}

/**
 * return ordinal domain for an array of data
 * @param {array} data
 * @param {function} valueAccessor
 * @returns {array} domain
 */
function getOrdinalDomain(data, valueAccessor) {
  var values = typeof valueAccessor === 'function' ? data.map(valueAccessor) : data;

  return (0, _dataUtils.unique)(values).filter(_dataUtils.notNullorUndefined).sort();
}

/**
 * return linear domain for an array of data
 * @param {Array} data
 * @param {function} valueAccessor
 * @returns {Array} domain
 */
function getLinearDomain(data, valueAccessor) {
  var range = typeof valueAccessor === 'function' ? (0, _d3Array.extent)(data, valueAccessor) : (0, _d3Array.extent)(data);

  return range.map(function (d, i) {
    return d === undefined ? i : d;
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9kYXRhLXNjYWxlLXV0aWxzLmpzIl0sIm5hbWVzIjpbImdldFF1YW50aWxlRG9tYWluIiwiZ2V0T3JkaW5hbERvbWFpbiIsImdldExpbmVhckRvbWFpbiIsImRhdGEiLCJ2YWx1ZUFjY2Vzc29yIiwic29ydEZ1bmMiLCJ2YWx1ZXMiLCJtYXAiLCJmaWx0ZXIiLCJub3ROdWxsb3JVbmRlZmluZWQiLCJzb3J0IiwicmFuZ2UiLCJkIiwiaSIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUE4QmdCQSxpQixHQUFBQSxpQjtRQWFBQyxnQixHQUFBQSxnQjtRQWFBQyxlLEdBQUFBLGU7O0FBcENoQjs7QUFDQTs7QUFFQTs7Ozs7OztBQXZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFZTyxTQUFTRixpQkFBVCxDQUEyQkcsSUFBM0IsRUFBaUNDLGFBQWpDLEVBQWdEQyxRQUFoRCxFQUEwRDtBQUMvRCxNQUFNQyxTQUNKLE9BQU9GLGFBQVAsS0FBeUIsVUFBekIsR0FBc0NELEtBQUtJLEdBQUwsQ0FBU0gsYUFBVCxDQUF0QyxHQUFnRUQsSUFEbEU7O0FBR0EsU0FBT0csT0FBT0UsTUFBUCxDQUFjQyw2QkFBZCxFQUFrQ0MsSUFBbEMsQ0FBdUNMLFFBQXZDLENBQVA7QUFDRDs7QUFFRDs7Ozs7O0FBTU8sU0FBU0osZ0JBQVQsQ0FBMEJFLElBQTFCLEVBQWdDQyxhQUFoQyxFQUErQztBQUNwRCxNQUFNRSxTQUNKLE9BQU9GLGFBQVAsS0FBeUIsVUFBekIsR0FBc0NELEtBQUtJLEdBQUwsQ0FBU0gsYUFBVCxDQUF0QyxHQUFnRUQsSUFEbEU7O0FBR0EsU0FBTyx1QkFBT0csTUFBUCxFQUFlRSxNQUFmLENBQXNCQyw2QkFBdEIsRUFBMENDLElBQTFDLEVBQVA7QUFDRDs7QUFFRDs7Ozs7O0FBTU8sU0FBU1IsZUFBVCxDQUF5QkMsSUFBekIsRUFBK0JDLGFBQS9CLEVBQThDO0FBQ25ELE1BQU1PLFFBQ0osT0FBT1AsYUFBUCxLQUF5QixVQUF6QixHQUNJLHFCQUFPRCxJQUFQLEVBQWFDLGFBQWIsQ0FESixHQUVJLHFCQUFPRCxJQUFQLENBSE47O0FBS0EsU0FBT1EsTUFBTUosR0FBTixDQUFVLFVBQUNLLENBQUQsRUFBSUMsQ0FBSjtBQUFBLFdBQVdELE1BQU1FLFNBQU4sR0FBa0JELENBQWxCLEdBQXNCRCxDQUFqQztBQUFBLEdBQVYsQ0FBUDtBQUNEIiwiZmlsZSI6ImRhdGEtc2NhbGUtdXRpbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMTkgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQge25vdE51bGxvclVuZGVmaW5lZCwgdW5pcXVlfSBmcm9tICcuL2RhdGEtdXRpbHMnO1xuaW1wb3J0IHtleHRlbnR9IGZyb20gJ2QzLWFycmF5JztcblxuLyoqXG4gKiByZXR1cm4gcXVhbnRpbGUgZG9tYWluIGZvciBhbiBhcnJheSBvZiBkYXRhXG4gKiBAcGFyYW0ge2FycmF5fSBkYXRhXG4gKiBAcGFyYW0ge2Z1bmN0aW9uIHwgdW5kZWZpbmVkfSB2YWx1ZUFjY2Vzc29yXG4gKiBAcGFyYW0ge2Z1bmN0aW9uIHwgdW5kZWZpbmVkfSBzb3J0RnVuY1xuICogQHJldHVybnMge2FycmF5fSBkb21haW5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFF1YW50aWxlRG9tYWluKGRhdGEsIHZhbHVlQWNjZXNzb3IsIHNvcnRGdW5jKSB7XG4gIGNvbnN0IHZhbHVlcyA9XG4gICAgdHlwZW9mIHZhbHVlQWNjZXNzb3IgPT09ICdmdW5jdGlvbicgPyBkYXRhLm1hcCh2YWx1ZUFjY2Vzc29yKSA6IGRhdGE7XG5cbiAgcmV0dXJuIHZhbHVlcy5maWx0ZXIobm90TnVsbG9yVW5kZWZpbmVkKS5zb3J0KHNvcnRGdW5jKTtcbn1cblxuLyoqXG4gKiByZXR1cm4gb3JkaW5hbCBkb21haW4gZm9yIGFuIGFycmF5IG9mIGRhdGFcbiAqIEBwYXJhbSB7YXJyYXl9IGRhdGFcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IHZhbHVlQWNjZXNzb3JcbiAqIEByZXR1cm5zIHthcnJheX0gZG9tYWluXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRPcmRpbmFsRG9tYWluKGRhdGEsIHZhbHVlQWNjZXNzb3IpIHtcbiAgY29uc3QgdmFsdWVzID1cbiAgICB0eXBlb2YgdmFsdWVBY2Nlc3NvciA9PT0gJ2Z1bmN0aW9uJyA/IGRhdGEubWFwKHZhbHVlQWNjZXNzb3IpIDogZGF0YTtcblxuICByZXR1cm4gdW5pcXVlKHZhbHVlcykuZmlsdGVyKG5vdE51bGxvclVuZGVmaW5lZCkuc29ydCgpO1xufVxuXG4vKipcbiAqIHJldHVybiBsaW5lYXIgZG9tYWluIGZvciBhbiBhcnJheSBvZiBkYXRhXG4gKiBAcGFyYW0ge0FycmF5fSBkYXRhXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSB2YWx1ZUFjY2Vzc29yXG4gKiBAcmV0dXJucyB7QXJyYXl9IGRvbWFpblxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0TGluZWFyRG9tYWluKGRhdGEsIHZhbHVlQWNjZXNzb3IpIHtcbiAgY29uc3QgcmFuZ2UgPVxuICAgIHR5cGVvZiB2YWx1ZUFjY2Vzc29yID09PSAnZnVuY3Rpb24nXG4gICAgICA/IGV4dGVudChkYXRhLCB2YWx1ZUFjY2Vzc29yKVxuICAgICAgOiBleHRlbnQoZGF0YSk7XG5cbiAgcmV0dXJuIHJhbmdlLm1hcCgoZCwgaSkgPT4gKGQgPT09IHVuZGVmaW5lZCA/IGkgOiBkKSk7XG59XG4iXX0=
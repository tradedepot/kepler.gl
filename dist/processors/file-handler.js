'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

exports.getFileHandler = getFileHandler;
exports.getFileType = getFileType;
exports.loadCsv = loadCsv;
exports.isKeplerGlMap = isKeplerGlMap;
exports.determineJsonProcess = determineJsonProcess;
exports.loadJSON = loadJSON;
exports.processKeplerglJSON = processKeplerglJSON;

var _window = require('global/window');

var _dataProcessor = require('./data-processor');

var _schemas = require('../schemas');

var _schemas2 = _interopRequireDefault(_schemas);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FILE_HANDLERS = {
  csv: loadCsv,
  json: loadJSON
}; // Copyright (c) 2019 Uber Technologies, Inc.
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

function getFileHandler(fileBlob) {
  var type = getFileType(fileBlob.name);
  return FILE_HANDLERS[type];
}

function getFileType(filename) {
  if (filename.endsWith('csv')) {
    return 'csv';
  } else if (filename.endsWith('json') || filename.endsWith('geojson')) {
    // Read GeoJson from browser
    return 'json';
  }

  // Wait to add other file type handler
  return 'other';
}

function readCSVFile(fileBlob) {
  return new Promise(function (resolve, reject) {
    var fileReader = new _window.FileReader();
    fileReader.onload = function (_ref) {
      var result = _ref.target.result;

      resolve(result);
    };

    fileReader.readAsText(fileBlob);
  });
}

function loadCsv(fileBlob) {
  var processor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _dataProcessor.processCsvData;

  return readCSVFile(fileBlob).then(function (rawData) {
    return rawData ? processor(rawData) : null;
  });
}

function readJSONFile(fileBlob) {
  return new Promise(function (resolve, reject) {
    var fileReader = new _window.FileReader();
    fileReader.onload = function (_ref2) {
      var result = _ref2.target.result;

      try {
        var json = JSON.parse(result);
        resolve(json);
      } catch (err) {
        resolve(null);
      }
    };

    fileReader.readAsText(fileBlob);
  });
}

function isKeplerGlMap(json) {
  return (typeof json === 'undefined' ? 'undefined' : (0, _typeof3.default)(json)) === 'object' && json.datasets && json.config && json.info && json.info.app === 'kepler.gl';
}

function determineJsonProcess(jsonData, defaultProcessor) {
  if (isKeplerGlMap(jsonData)) {
    return processKeplerglJSON;
  }

  return defaultProcessor;
}

function loadJSON(fileBlob) {
  var processor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _dataProcessor.processGeojson;

  return readJSONFile(fileBlob).then(function (rawData) {
    return rawData ? determineJsonProcess(rawData, processor)(rawData) : null;
  });
}

function processKeplerglJSON(rawData) {
  var data = rawData ? _schemas2.default.load(rawData.datasets, rawData.config) : null;
  return (0, _extends3.default)({}, data, {
    reset: true // this will reset the state
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm9jZXNzb3JzL2ZpbGUtaGFuZGxlci5qcyJdLCJuYW1lcyI6WyJnZXRGaWxlSGFuZGxlciIsImdldEZpbGVUeXBlIiwibG9hZENzdiIsImlzS2VwbGVyR2xNYXAiLCJkZXRlcm1pbmVKc29uUHJvY2VzcyIsImxvYWRKU09OIiwicHJvY2Vzc0tlcGxlcmdsSlNPTiIsIkZJTEVfSEFORExFUlMiLCJjc3YiLCJqc29uIiwiZmlsZUJsb2IiLCJ0eXBlIiwibmFtZSIsImZpbGVuYW1lIiwiZW5kc1dpdGgiLCJyZWFkQ1NWRmlsZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiZmlsZVJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJyZXN1bHQiLCJ0YXJnZXQiLCJyZWFkQXNUZXh0IiwicHJvY2Vzc29yIiwicHJvY2Vzc0NzdkRhdGEiLCJ0aGVuIiwicmF3RGF0YSIsInJlYWRKU09ORmlsZSIsIkpTT04iLCJwYXJzZSIsImVyciIsImRhdGFzZXRzIiwiY29uZmlnIiwiaW5mbyIsImFwcCIsImpzb25EYXRhIiwiZGVmYXVsdFByb2Nlc3NvciIsInByb2Nlc3NHZW9qc29uIiwiZGF0YSIsIktlcGxlckdsU2NoZW1hIiwibG9hZCIsInJlc2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztRQTZCZ0JBLGMsR0FBQUEsYztRQUtBQyxXLEdBQUFBLFc7UUF5QkFDLE8sR0FBQUEsTztRQXNCQUMsYSxHQUFBQSxhO1FBVUFDLG9CLEdBQUFBLG9CO1FBUUFDLFEsR0FBQUEsUTtRQU9BQyxtQixHQUFBQSxtQjs7QUF0RmhCOztBQUNBOztBQUNBOzs7Ozs7QUFFQSxJQUFNQyxnQkFBZ0I7QUFDcEJDLE9BQUtOLE9BRGU7QUFFcEJPLFFBQU1KO0FBRmMsQ0FBdEIsQyxDQXhCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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LFFBQVFLLFFBQTVCLEVBQXNDTCxRQUFRTSxNQUE5QyxDQURTLEdBRVQsSUFGSjtBQUdBLG9DQUNLTSxJQURMO0FBRUVHLFdBQU8sSUFGVCxDQUVjO0FBRmQ7QUFJRCIsImZpbGUiOiJmaWxlLWhhbmRsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMTkgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQge0ZpbGVSZWFkZXJ9IGZyb20gJ2dsb2JhbC93aW5kb3cnO1xuaW1wb3J0IHtwcm9jZXNzQ3N2RGF0YSwgcHJvY2Vzc0dlb2pzb259IGZyb20gJy4vZGF0YS1wcm9jZXNzb3InO1xuaW1wb3J0IEtlcGxlckdsU2NoZW1hIGZyb20gJ3NjaGVtYXMnO1xuXG5jb25zdCBGSUxFX0hBTkRMRVJTID0ge1xuICBjc3Y6IGxvYWRDc3YsXG4gIGpzb246IGxvYWRKU09OXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RmlsZUhhbmRsZXIoZmlsZUJsb2IpIHtcbiAgY29uc3QgdHlwZSA9IGdldEZpbGVUeXBlKGZpbGVCbG9iLm5hbWUpO1xuICByZXR1cm4gRklMRV9IQU5ETEVSU1t0eXBlXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEZpbGVUeXBlKGZpbGVuYW1lKSB7XG4gIGlmIChmaWxlbmFtZS5lbmRzV2l0aCgnY3N2JykpIHtcbiAgICByZXR1cm4gJ2Nzdic7XG4gIH1cblxuICBlbHNlIGlmIChmaWxlbmFtZS5lbmRzV2l0aCgnanNvbicpIHx8IGZpbGVuYW1lLmVuZHNXaXRoKCdnZW9qc29uJykpIHtcbiAgICAvLyBSZWFkIEdlb0pzb24gZnJvbSBicm93c2VyXG4gICAgcmV0dXJuICdqc29uJztcbiAgfVxuXG4gIC8vIFdhaXQgdG8gYWRkIG90aGVyIGZpbGUgdHlwZSBoYW5kbGVyXG4gIHJldHVybiAnb3RoZXInO1xufVxuXG5mdW5jdGlvbiByZWFkQ1NWRmlsZShmaWxlQmxvYikge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNvbnN0IGZpbGVSZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgIGZpbGVSZWFkZXIub25sb2FkID0gKHt0YXJnZXQ6IHtyZXN1bHR9fSkgPT4ge1xuICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgIH07XG5cbiAgICBmaWxlUmVhZGVyLnJlYWRBc1RleHQoZmlsZUJsb2IpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRDc3YoZmlsZUJsb2IsIHByb2Nlc3NvciA9IHByb2Nlc3NDc3ZEYXRhKSB7XG4gIHJldHVybiByZWFkQ1NWRmlsZShmaWxlQmxvYikudGhlbihcbiAgICByYXdEYXRhID0+IChyYXdEYXRhID8gcHJvY2Vzc29yKHJhd0RhdGEpIDogbnVsbClcbiAgKTtcbn1cblxuZnVuY3Rpb24gcmVhZEpTT05GaWxlKGZpbGVCbG9iKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY29uc3QgZmlsZVJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgZmlsZVJlYWRlci5vbmxvYWQgPSAoe3RhcmdldDoge3Jlc3VsdH19KSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBqc29uID0gSlNPTi5wYXJzZShyZXN1bHQpO1xuICAgICAgICByZXNvbHZlKGpzb24pO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHJlc29sdmUobnVsbCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGZpbGVSZWFkZXIucmVhZEFzVGV4dChmaWxlQmxvYik7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNLZXBsZXJHbE1hcChqc29uKSB7XG4gIHJldHVybiAoXG4gICAgdHlwZW9mIGpzb24gPT09ICdvYmplY3QnICYmXG4gICAganNvbi5kYXRhc2V0cyAmJlxuICAgIGpzb24uY29uZmlnICYmXG4gICAganNvbi5pbmZvICYmXG4gICAganNvbi5pbmZvLmFwcCA9PT0gJ2tlcGxlci5nbCdcbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRldGVybWluZUpzb25Qcm9jZXNzKGpzb25EYXRhLCBkZWZhdWx0UHJvY2Vzc29yKSB7XG4gIGlmIChpc0tlcGxlckdsTWFwKGpzb25EYXRhKSkge1xuICAgIHJldHVybiBwcm9jZXNzS2VwbGVyZ2xKU09OO1xuICB9XG5cbiAgcmV0dXJuIGRlZmF1bHRQcm9jZXNzb3I7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkSlNPTihmaWxlQmxvYiwgcHJvY2Vzc29yID0gcHJvY2Vzc0dlb2pzb24pIHtcbiAgcmV0dXJuIHJlYWRKU09ORmlsZShmaWxlQmxvYikudGhlbihcbiAgICByYXdEYXRhID0+XG4gICAgICByYXdEYXRhID8gZGV0ZXJtaW5lSnNvblByb2Nlc3MocmF3RGF0YSwgcHJvY2Vzc29yKShyYXdEYXRhKSA6IG51bGxcbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2Nlc3NLZXBsZXJnbEpTT04ocmF3RGF0YSkge1xuICBjb25zdCBkYXRhID0gcmF3RGF0YVxuICAgID8gS2VwbGVyR2xTY2hlbWEubG9hZChyYXdEYXRhLmRhdGFzZXRzLCByYXdEYXRhLmNvbmZpZylcbiAgICA6IG51bGw7XG4gIHJldHVybiB7XG4gICAgLi4uZGF0YSxcbiAgICByZXNldDogdHJ1ZSAvLyB0aGlzIHdpbGwgcmVzZXQgdGhlIHN0YXRlXG4gIH07XG59XG4iXX0=
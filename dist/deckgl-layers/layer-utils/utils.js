'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

exports.getBinColorDomain = getBinColorDomain;
exports.getScaleFunctor = getScaleFunctor;
exports.getColorValueDomain = getColorValueDomain;
exports.getColorScaleFunction = getColorScaleFunction;
exports.getRadiusScaleFunction = getRadiusScaleFunction;
exports.needsRecalculateColorDomain = needsRecalculateColorDomain;
exports.needReCalculateScaleFunction = needReCalculateScaleFunction;
exports.needsRecalculateRadiusRange = needsRecalculateRadiusRange;

var _d3Scale = require('d3-scale');

var _dataUtils = require('../../utils/data-utils');

var _defaultSettings = require('../../constants/default-settings');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Enable render color by customized color Scale
function getBinColorDomain(scaleType, bins, _ref) {
  var _ref2 = (0, _slicedToArray3.default)(_ref, 2),
      lowerIdx = _ref2[0],
      upperIdx = _ref2[1];

  switch (scaleType) {
    case _defaultSettings.SCALE_TYPES.quantize:
      return [bins[lowerIdx].value, bins[upperIdx].value];

    case _defaultSettings.SCALE_TYPES.quantile:
      return bins.slice(lowerIdx, upperIdx + 1).map(function (d) {
        return d.value;
      });
    case _defaultSettings.SCALE_TYPES.ordinal:
      return (0, _dataUtils.unique)(bins.map(function (b) {
        return b.value;
      })).sort();
    default:
      return [bins[lowerIdx].value, bins[upperIdx].value];
  }
} // Copyright (c) 2019 Uber Technologies, Inc.
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

function getScaleFunctor(scaleType) {
  switch (scaleType) {
    case _defaultSettings.SCALE_TYPES.quantize:
      return _d3Scale.scaleQuantize;

    case _defaultSettings.SCALE_TYPES.quantile:
      return _d3Scale.scaleQuantile;
    case _defaultSettings.SCALE_TYPES.ordinal:
      return _d3Scale.scaleOrdinal;
    default:
      return _d3Scale.scaleQuantile;
  }
}

function getColorValueDomain(layer) {
  var _layer$props = layer.props,
      lowerPercentile = _layer$props.lowerPercentile,
      upperPercentile = _layer$props.upperPercentile,
      colorScale = _layer$props.colorScale;
  var sortedBins = layer.state.sortedColorBins.sortedBins;

  var len = sortedBins.length;

  if (!len) {
    // err... what do we do
    layer.state.colorValueDomain = null;
  } else {
    var lowerIdx = Math.ceil(lowerPercentile / 100 * (len - 1));
    var upperIdx = Math.floor(upperPercentile / 100 * (len - 1));

    // calculate valueDomain based on
    layer.state.colorValueDomain = getBinColorDomain(colorScale, sortedBins, [lowerIdx, upperIdx]);
    layer.getColorScale();
  }

  layer.props.onSetColorDomain(layer.state.colorValueDomain);
}

function getColorScaleFunction(layer) {
  var _layer$props2 = layer.props,
      colorScale = _layer$props2.colorScale,
      colorDomain = _layer$props2.colorDomain;

  layer.state.colorScaleFunc = getScaleFunctor(colorScale)().domain(colorDomain || layer.state.colorDomain || layer.state.colorValueDomain).range(layer.props.colorRange);
}

function getRadiusScaleFunction(layer) {
  var viewport = layer.context.viewport;

  layer.state.radiusScaleFunc = (0, _d3Scale.scaleSqrt)().domain(layer.state.radiusDomain).range(layer.props.radiusRange.map(function (d) {
    return d * viewport.distanceScales.metersPerPixel[0];
  }));
}

function needsRecalculateColorDomain(oldProps, props) {
  return oldProps.lowerPercentile !== props.lowerPercentile || oldProps.upperPercentile !== props.upperPercentile || oldProps.colorScale !== props.colorScale;
}

function needReCalculateScaleFunction(oldProps, props) {
  return oldProps.colorRange !== props.colorRange;
}

function needsRecalculateRadiusRange(oldProps, props) {
  return oldProps.radiusRange !== props.radiusRange && (oldProps.radiusRange[0] !== props.radiusRange[0] || oldProps.radiusRange[1] !== props.radiusRange[1]);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kZWNrZ2wtbGF5ZXJzL2xheWVyLXV0aWxzL3V0aWxzLmpzIl0sIm5hbWVzIjpbImdldEJpbkNvbG9yRG9tYWluIiwiZ2V0U2NhbGVGdW5jdG9yIiwiZ2V0Q29sb3JWYWx1ZURvbWFpbiIsImdldENvbG9yU2NhbGVGdW5jdGlvbiIsImdldFJhZGl1c1NjYWxlRnVuY3Rpb24iLCJuZWVkc1JlY2FsY3VsYXRlQ29sb3JEb21haW4iLCJuZWVkUmVDYWxjdWxhdGVTY2FsZUZ1bmN0aW9uIiwibmVlZHNSZWNhbGN1bGF0ZVJhZGl1c1JhbmdlIiwic2NhbGVUeXBlIiwiYmlucyIsImxvd2VySWR4IiwidXBwZXJJZHgiLCJTQ0FMRV9UWVBFUyIsInF1YW50aXplIiwidmFsdWUiLCJxdWFudGlsZSIsInNsaWNlIiwibWFwIiwiZCIsIm9yZGluYWwiLCJiIiwic29ydCIsInNjYWxlUXVhbnRpemUiLCJzY2FsZVF1YW50aWxlIiwic2NhbGVPcmRpbmFsIiwibGF5ZXIiLCJwcm9wcyIsImxvd2VyUGVyY2VudGlsZSIsInVwcGVyUGVyY2VudGlsZSIsImNvbG9yU2NhbGUiLCJzb3J0ZWRCaW5zIiwic3RhdGUiLCJzb3J0ZWRDb2xvckJpbnMiLCJsZW4iLCJsZW5ndGgiLCJjb2xvclZhbHVlRG9tYWluIiwiTWF0aCIsImNlaWwiLCJmbG9vciIsImdldENvbG9yU2NhbGUiLCJvblNldENvbG9yRG9tYWluIiwiY29sb3JEb21haW4iLCJjb2xvclNjYWxlRnVuYyIsImRvbWFpbiIsInJhbmdlIiwiY29sb3JSYW5nZSIsInZpZXdwb3J0IiwiY29udGV4dCIsInJhZGl1c1NjYWxlRnVuYyIsInJhZGl1c0RvbWFpbiIsInJhZGl1c1JhbmdlIiwiZGlzdGFuY2VTY2FsZXMiLCJtZXRlcnNQZXJQaXhlbCIsIm9sZFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O1FBMEJnQkEsaUIsR0FBQUEsaUI7UUFjQUMsZSxHQUFBQSxlO1FBY0FDLG1CLEdBQUFBLG1C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cUIsQ0FBckIsTUFBNEJ4QixNQUFNd0IsV0FBTixDQUFrQixDQUFsQixDQUE1QixJQUNDRyxTQUFTSCxXQUFULENBQXFCLENBQXJCLE1BQTRCeEIsTUFBTXdCLFdBQU4sQ0FBa0IsQ0FBbEIsQ0FGOUIsQ0FERjtBQUtEIiwiZmlsZSI6InV0aWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDE5IFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHtzY2FsZVF1YW50aXplLCBzY2FsZU9yZGluYWwsIHNjYWxlUXVhbnRpbGUsIHNjYWxlU3FydH0gZnJvbSAnZDMtc2NhbGUnO1xuaW1wb3J0IHt1bmlxdWV9IGZyb20gJ3V0aWxzL2RhdGEtdXRpbHMnO1xuXG5pbXBvcnQge1NDQUxFX1RZUEVTfSBmcm9tICdjb25zdGFudHMvZGVmYXVsdC1zZXR0aW5ncyc7XG5cbi8vIEVuYWJsZSByZW5kZXIgY29sb3IgYnkgY3VzdG9taXplZCBjb2xvciBTY2FsZVxuZXhwb3J0IGZ1bmN0aW9uIGdldEJpbkNvbG9yRG9tYWluKHNjYWxlVHlwZSwgYmlucywgW2xvd2VySWR4LCB1cHBlcklkeF0pIHtcbiAgc3dpdGNoIChzY2FsZVR5cGUpIHtcbiAgICBjYXNlIFNDQUxFX1RZUEVTLnF1YW50aXplOlxuICAgICAgcmV0dXJuIFtiaW5zW2xvd2VySWR4XS52YWx1ZSwgYmluc1t1cHBlcklkeF0udmFsdWVdO1xuXG4gICAgY2FzZSBTQ0FMRV9UWVBFUy5xdWFudGlsZTpcbiAgICAgIHJldHVybiBiaW5zLnNsaWNlKGxvd2VySWR4LCB1cHBlcklkeCArIDEpLm1hcChkID0+IGQudmFsdWUpO1xuICAgIGNhc2UgU0NBTEVfVFlQRVMub3JkaW5hbDpcbiAgICAgIHJldHVybiB1bmlxdWUoYmlucy5tYXAoYiA9PiBiLnZhbHVlKSkuc29ydCgpO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gW2JpbnNbbG93ZXJJZHhdLnZhbHVlLCBiaW5zW3VwcGVySWR4XS52YWx1ZV07XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjYWxlRnVuY3RvcihzY2FsZVR5cGUpIHtcbiAgc3dpdGNoIChzY2FsZVR5cGUpIHtcbiAgICBjYXNlIFNDQUxFX1RZUEVTLnF1YW50aXplOlxuICAgICAgcmV0dXJuIHNjYWxlUXVhbnRpemU7XG5cbiAgICBjYXNlIFNDQUxFX1RZUEVTLnF1YW50aWxlOlxuICAgICAgcmV0dXJuIHNjYWxlUXVhbnRpbGU7XG4gICAgY2FzZSBTQ0FMRV9UWVBFUy5vcmRpbmFsOlxuICAgICAgcmV0dXJuIHNjYWxlT3JkaW5hbDtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHNjYWxlUXVhbnRpbGU7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENvbG9yVmFsdWVEb21haW4obGF5ZXIpIHtcbiAgY29uc3Qge2xvd2VyUGVyY2VudGlsZSwgdXBwZXJQZXJjZW50aWxlLCBjb2xvclNjYWxlfSA9IGxheWVyLnByb3BzO1xuICBjb25zdCB7c29ydGVkQmluc30gPSBsYXllci5zdGF0ZS5zb3J0ZWRDb2xvckJpbnM7XG4gIGNvbnN0IGxlbiA9IHNvcnRlZEJpbnMubGVuZ3RoO1xuXG4gIGlmICghbGVuKSB7XG4gICAgLy8gZXJyLi4uIHdoYXQgZG8gd2UgZG9cbiAgICBsYXllci5zdGF0ZS5jb2xvclZhbHVlRG9tYWluID0gbnVsbDtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBsb3dlcklkeCA9IE1hdGguY2VpbChsb3dlclBlcmNlbnRpbGUgLyAxMDAgKiAobGVuIC0gMSkpO1xuICAgIGNvbnN0IHVwcGVySWR4ID0gTWF0aC5mbG9vcih1cHBlclBlcmNlbnRpbGUgLyAxMDAgKiAobGVuIC0gMSkpO1xuXG4gICAgLy8gY2FsY3VsYXRlIHZhbHVlRG9tYWluIGJhc2VkIG9uXG4gICAgbGF5ZXIuc3RhdGUuY29sb3JWYWx1ZURvbWFpbiA9IGdldEJpbkNvbG9yRG9tYWluKGNvbG9yU2NhbGUsIHNvcnRlZEJpbnMsIFtcbiAgICAgIGxvd2VySWR4LFxuICAgICAgdXBwZXJJZHhcbiAgICBdKTtcbiAgICBsYXllci5nZXRDb2xvclNjYWxlKCk7XG4gIH1cblxuICBsYXllci5wcm9wcy5vblNldENvbG9yRG9tYWluKGxheWVyLnN0YXRlLmNvbG9yVmFsdWVEb21haW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29sb3JTY2FsZUZ1bmN0aW9uKGxheWVyKSB7XG4gIGNvbnN0IHtjb2xvclNjYWxlLCBjb2xvckRvbWFpbn0gPSBsYXllci5wcm9wcztcbiAgbGF5ZXIuc3RhdGUuY29sb3JTY2FsZUZ1bmMgPSBnZXRTY2FsZUZ1bmN0b3IoY29sb3JTY2FsZSkoKVxuICAgIC5kb21haW4oXG4gICAgICBjb2xvckRvbWFpbiB8fCBsYXllci5zdGF0ZS5jb2xvckRvbWFpbiB8fCBsYXllci5zdGF0ZS5jb2xvclZhbHVlRG9tYWluXG4gICAgKVxuICAgIC5yYW5nZShsYXllci5wcm9wcy5jb2xvclJhbmdlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJhZGl1c1NjYWxlRnVuY3Rpb24obGF5ZXIpIHtcbiAgY29uc3Qge3ZpZXdwb3J0fSA9IGxheWVyLmNvbnRleHQ7XG4gIGxheWVyLnN0YXRlLnJhZGl1c1NjYWxlRnVuYyA9IHNjYWxlU3FydCgpXG4gICAgLmRvbWFpbihsYXllci5zdGF0ZS5yYWRpdXNEb21haW4pXG4gICAgLnJhbmdlKFxuICAgICAgbGF5ZXIucHJvcHMucmFkaXVzUmFuZ2UubWFwKFxuICAgICAgICBkID0+IGQgKiB2aWV3cG9ydC5kaXN0YW5jZVNjYWxlcy5tZXRlcnNQZXJQaXhlbFswXVxuICAgICAgKVxuICAgICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuZWVkc1JlY2FsY3VsYXRlQ29sb3JEb21haW4ob2xkUHJvcHMsIHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgb2xkUHJvcHMubG93ZXJQZXJjZW50aWxlICE9PSBwcm9wcy5sb3dlclBlcmNlbnRpbGUgfHxcbiAgICBvbGRQcm9wcy51cHBlclBlcmNlbnRpbGUgIT09IHByb3BzLnVwcGVyUGVyY2VudGlsZSB8fFxuICAgIG9sZFByb3BzLmNvbG9yU2NhbGUgIT09IHByb3BzLmNvbG9yU2NhbGVcbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5lZWRSZUNhbGN1bGF0ZVNjYWxlRnVuY3Rpb24ob2xkUHJvcHMsIHByb3BzKSB7XG4gIHJldHVybiBvbGRQcm9wcy5jb2xvclJhbmdlICE9PSBwcm9wcy5jb2xvclJhbmdlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmVlZHNSZWNhbGN1bGF0ZVJhZGl1c1JhbmdlKG9sZFByb3BzLCBwcm9wcykge1xuICByZXR1cm4gKFxuICAgIG9sZFByb3BzLnJhZGl1c1JhbmdlICE9PSBwcm9wcy5yYWRpdXNSYW5nZSAmJlxuICAgIChvbGRQcm9wcy5yYWRpdXNSYW5nZVswXSAhPT0gcHJvcHMucmFkaXVzUmFuZ2VbMF0gfHxcbiAgICAgIG9sZFByb3BzLnJhZGl1c1JhbmdlWzFdICE9PSBwcm9wcy5yYWRpdXNSYW5nZVsxXSlcbiAgKTtcbn1cbiJdfQ==
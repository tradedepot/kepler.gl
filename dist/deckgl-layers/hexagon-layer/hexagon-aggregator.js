'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pointToHexbin = pointToHexbin;
exports.getRadiusInPixel = getRadiusInPixel;

var _d3Hexbin = require('d3-hexbin');

/**
 * Use d3-hexbin to performs hexagonal binning from geo points to hexagons
 * @param {Array} data - array of points
 * @param {Number} radius - hexagon radius in meter
 * @param {function} getPosition - get points lon lat
 * @param {Object} viewport - current viewport object

 * @return {Object} - hexagons and countRange
 */
function pointToHexbin(_ref, viewport) {
  var data = _ref.data,
      radius = _ref.radius,
      getPosition = _ref.getPosition;

  // get hexagon radius in mercator world unit
  var radiusInPixel = getRadiusInPixel(radius, viewport);

  // add world space coordinates to points
  // filter empty bins
  var screenPoints = data.reduce(function (accu, pt) {
    var lat = getPosition(pt)[1];
    var lng = getPosition(pt)[0];

    if (!Number.isFinite(lat) || !Number.isFinite(lng)) {
      return accu;
    }

    accu.push(Object.assign({
      screenCoord: viewport.projectFlat(getPosition(pt))
    }, pt));

    return accu;
  }, []);

  var newHexbin = (0, _d3Hexbin.hexbin)().radius(radiusInPixel).x(function (d) {
    return d.screenCoord[0];
  }).y(function (d) {
    return d.screenCoord[1];
  });

  var hexagonBins = newHexbin(screenPoints);

  return {
    hexagons: hexagonBins.map(function (hex, index) {
      return {
        centroid: viewport.unprojectFlat([hex.x, hex.y]),
        points: hex,
        index: index
      };
    })
  };
}

/**
 * Get radius in mercator world space coordinates from meter
 * @param {Number} radius - in meter
 * @param {Object} viewport - current viewport object

 * @return {Number} radius in mercator world spcae coordinates
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

function getRadiusInPixel(radius, viewport) {
  var _viewport$getDistance = viewport.getDistanceScales(),
      pixelsPerMeter = _viewport$getDistance.pixelsPerMeter;

  // x, y distance should be the same


  return radius * pixelsPerMeter[0];
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kZWNrZ2wtbGF5ZXJzL2hleGFnb24tbGF5ZXIvaGV4YWdvbi1hZ2dyZWdhdG9yLmpzIl0sIm5hbWVzIjpbInBvaW50VG9IZXhiaW4iLCJnZXRSYWRpdXNJblBpeGVsIiwidmlld3BvcnQiLCJkYXRhIiwicmFkaXVzIiwiZ2V0UG9zaXRpb24iLCJyYWRpdXNJblBpeGVsIiwic2NyZWVuUG9pbnRzIiwicmVkdWNlIiwiYWNjdSIsInB0IiwibGF0IiwibG5nIiwiTnVtYmVyIiwiaXNGaW5pdGUiLCJwdXNoIiwiT2JqZWN0IiwiYXNzaWduIiwic2NyZWVuQ29vcmQiLCJwcm9qZWN0RmxhdCIsIm5ld0hleGJpbiIsIngiLCJkIiwieSIsImhleGFnb25CaW5zIiwiaGV4YWdvbnMiLCJtYXAiLCJoZXgiLCJpbmRleCIsImNlbnRyb2lkIiwidW5wcm9qZWN0RmxhdCIsInBvaW50cyIsImdldERpc3RhbmNlU2NhbGVzIiwicGl4ZWxzUGVyTWV0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7O1FBK0JnQkEsYSxHQUFBQSxhO1FBaURBQyxnQixHQUFBQSxnQjs7QUE1RGhCOztBQUVBOzs7Ozs7Ozs7QUFTTyxTQUFTRCxhQUFULE9BQW9ERSxRQUFwRCxFQUE4RDtBQUFBLE1BQXRDQyxJQUFzQyxRQUF0Q0EsSUFBc0M7QUFBQSxNQUFoQ0MsTUFBZ0MsUUFBaENBLE1BQWdDO0FBQUEsTUFBeEJDLFdBQXdCLFFBQXhCQSxXQUF3Qjs7QUFDbkU7QUFDQSxNQUFNQyxnQkFBZ0JMLGlCQUFpQkcsTUFBakIsRUFBeUJGLFFBQXpCLENBQXRCOztBQUVBO0FBQ0E7QUFDQSxNQUFNSyxlQUFlSixLQUFLSyxNQUFMLENBQVksVUFBQ0MsSUFBRCxFQUFPQyxFQUFQLEVBQWM7QUFDN0MsUUFBTUMsTUFBTU4sWUFBWUssRUFBWixFQUFnQixDQUFoQixDQUFaO0FBQ0EsUUFBTUUsTUFBTVAsWUFBWUssRUFBWixFQUFnQixDQUFoQixDQUFaOztBQUVBLFFBQUksQ0FBQ0csT0FBT0MsUUFBUCxDQUFnQkgsR0FBaEIsQ0FBRCxJQUF5QixDQUFDRSxPQUFPQyxRQUFQLENBQWdCRixHQUFoQixDQUE5QixFQUFvRDtBQUNsRCxhQUFPSCxJQUFQO0FBQ0Q7O0FBRURBLFNBQUtNLElBQUwsQ0FDRUMsT0FBT0MsTUFBUCxDQUNFO0FBQ0VDLG1CQUFhaEIsU0FBU2lCLFdBQVQsQ0FBcUJkLFlBQVlLLEVBQVosQ0FBckI7QUFEZixLQURGLEVBSUVBLEVBSkYsQ0FERjs7QUFTQSxXQUFPRCxJQUFQO0FBQ0QsR0FsQm9CLEVBa0JsQixFQWxCa0IsQ0FBckI7O0FBb0JBLE1BQU1XLFlBQVksd0JBQ2ZoQixNQURlLENBQ1JFLGFBRFEsRUFFZmUsQ0FGZSxDQUViO0FBQUEsV0FBS0MsRUFBRUosV0FBRixDQUFjLENBQWQsQ0FBTDtBQUFBLEdBRmEsRUFHZkssQ0FIZSxDQUdiO0FBQUEsV0FBS0QsRUFBRUosV0FBRixDQUFjLENBQWQsQ0FBTDtBQUFBLEdBSGEsQ0FBbEI7O0FBS0EsTUFBTU0sY0FBY0osVUFBVWIsWUFBVixDQUFwQjs7QUFFQSxTQUFPO0FBQ0xrQixjQUFVRCxZQUFZRSxHQUFaLENBQWdCLFVBQUNDLEdBQUQsRUFBTUMsS0FBTjtBQUFBLGFBQWlCO0FBQ3pDQyxrQkFBVTNCLFNBQVM0QixhQUFULENBQXVCLENBQUNILElBQUlOLENBQUwsRUFBUU0sSUFBSUosQ0FBWixDQUF2QixDQUQrQjtBQUV6Q1EsZ0JBQVFKLEdBRmlDO0FBR3pDQztBQUh5QyxPQUFqQjtBQUFBLEtBQWhCO0FBREwsR0FBUDtBQU9EOztBQUVEOzs7Ozs7O0FBekVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQThETyxTQUFTM0IsZ0JBQVQsQ0FBMEJHLE1BQTFCLEVBQWtDRixRQUFsQyxFQUE0QztBQUFBLDhCQUN4QkEsU0FBUzhCLGlCQUFULEVBRHdCO0FBQUEsTUFDMUNDLGNBRDBDLHlCQUMxQ0EsY0FEMEM7O0FBR2pEOzs7QUFDQSxTQUFPN0IsU0FBUzZCLGVBQWUsQ0FBZixDQUFoQjtBQUNEIiwiZmlsZSI6ImhleGFnb24tYWdncmVnYXRvci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAxOSBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7aGV4YmlufSBmcm9tICdkMy1oZXhiaW4nO1xuXG4vKipcbiAqIFVzZSBkMy1oZXhiaW4gdG8gcGVyZm9ybXMgaGV4YWdvbmFsIGJpbm5pbmcgZnJvbSBnZW8gcG9pbnRzIHRvIGhleGFnb25zXG4gKiBAcGFyYW0ge0FycmF5fSBkYXRhIC0gYXJyYXkgb2YgcG9pbnRzXG4gKiBAcGFyYW0ge051bWJlcn0gcmFkaXVzIC0gaGV4YWdvbiByYWRpdXMgaW4gbWV0ZXJcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGdldFBvc2l0aW9uIC0gZ2V0IHBvaW50cyBsb24gbGF0XG4gKiBAcGFyYW0ge09iamVjdH0gdmlld3BvcnQgLSBjdXJyZW50IHZpZXdwb3J0IG9iamVjdFxuXG4gKiBAcmV0dXJuIHtPYmplY3R9IC0gaGV4YWdvbnMgYW5kIGNvdW50UmFuZ2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBvaW50VG9IZXhiaW4oe2RhdGEsIHJhZGl1cywgZ2V0UG9zaXRpb259LCB2aWV3cG9ydCkge1xuICAvLyBnZXQgaGV4YWdvbiByYWRpdXMgaW4gbWVyY2F0b3Igd29ybGQgdW5pdFxuICBjb25zdCByYWRpdXNJblBpeGVsID0gZ2V0UmFkaXVzSW5QaXhlbChyYWRpdXMsIHZpZXdwb3J0KTtcblxuICAvLyBhZGQgd29ybGQgc3BhY2UgY29vcmRpbmF0ZXMgdG8gcG9pbnRzXG4gIC8vIGZpbHRlciBlbXB0eSBiaW5zXG4gIGNvbnN0IHNjcmVlblBvaW50cyA9IGRhdGEucmVkdWNlKChhY2N1LCBwdCkgPT4ge1xuICAgIGNvbnN0IGxhdCA9IGdldFBvc2l0aW9uKHB0KVsxXTtcbiAgICBjb25zdCBsbmcgPSBnZXRQb3NpdGlvbihwdClbMF07XG5cbiAgICBpZiAoIU51bWJlci5pc0Zpbml0ZShsYXQpIHx8ICFOdW1iZXIuaXNGaW5pdGUobG5nKSkge1xuICAgICAgcmV0dXJuIGFjY3U7XG4gICAgfVxuXG4gICAgYWNjdS5wdXNoKFxuICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAge1xuICAgICAgICAgIHNjcmVlbkNvb3JkOiB2aWV3cG9ydC5wcm9qZWN0RmxhdChnZXRQb3NpdGlvbihwdCkpXG4gICAgICAgIH0sXG4gICAgICAgIHB0XG4gICAgICApXG4gICAgKTtcblxuICAgIHJldHVybiBhY2N1O1xuICB9LCBbXSk7XG5cbiAgY29uc3QgbmV3SGV4YmluID0gaGV4YmluKClcbiAgICAucmFkaXVzKHJhZGl1c0luUGl4ZWwpXG4gICAgLngoZCA9PiBkLnNjcmVlbkNvb3JkWzBdKVxuICAgIC55KGQgPT4gZC5zY3JlZW5Db29yZFsxXSk7XG5cbiAgY29uc3QgaGV4YWdvbkJpbnMgPSBuZXdIZXhiaW4oc2NyZWVuUG9pbnRzKTtcblxuICByZXR1cm4ge1xuICAgIGhleGFnb25zOiBoZXhhZ29uQmlucy5tYXAoKGhleCwgaW5kZXgpID0+ICh7XG4gICAgICBjZW50cm9pZDogdmlld3BvcnQudW5wcm9qZWN0RmxhdChbaGV4LngsIGhleC55XSksXG4gICAgICBwb2ludHM6IGhleCxcbiAgICAgIGluZGV4XG4gICAgfSkpXG4gIH07XG59XG5cbi8qKlxuICogR2V0IHJhZGl1cyBpbiBtZXJjYXRvciB3b3JsZCBzcGFjZSBjb29yZGluYXRlcyBmcm9tIG1ldGVyXG4gKiBAcGFyYW0ge051bWJlcn0gcmFkaXVzIC0gaW4gbWV0ZXJcbiAqIEBwYXJhbSB7T2JqZWN0fSB2aWV3cG9ydCAtIGN1cnJlbnQgdmlld3BvcnQgb2JqZWN0XG5cbiAqIEByZXR1cm4ge051bWJlcn0gcmFkaXVzIGluIG1lcmNhdG9yIHdvcmxkIHNwY2FlIGNvb3JkaW5hdGVzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRSYWRpdXNJblBpeGVsKHJhZGl1cywgdmlld3BvcnQpIHtcbiAgY29uc3Qge3BpeGVsc1Blck1ldGVyfSA9IHZpZXdwb3J0LmdldERpc3RhbmNlU2NhbGVzKCk7XG5cbiAgLy8geCwgeSBkaXN0YW5jZSBzaG91bGQgYmUgdGhlIHNhbWVcbiAgcmV0dXJuIHJhZGl1cyAqIHBpeGVsc1Blck1ldGVyWzBdO1xufVxuIl19
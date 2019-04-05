'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends4 = require('babel-runtime/helpers/extends');

var _extends5 = _interopRequireDefault(_extends4);

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  padding-bottom: 12px;\n'], ['\n  padding-bottom: 12px;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  margin-bottom: 10px;\n  display: flex;\n  justify-content: space-between;\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n\n  .layer-group__visibility-toggle {\n    margin-right: 12px;\n  }\n'], ['\n  margin-bottom: 10px;\n  display: flex;\n  justify-content: space-between;\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n\n  .layer-group__visibility-toggle {\n    margin-right: 12px;\n  }\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  color: ', ';\n'], ['\n  color: ', ';\n']); // Copyright (c) 2019 Uber Technologies, Inc.
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

var _panelHeaderAction = require('../panel-header-action');

var _panelHeaderAction2 = _interopRequireDefault(_panelHeaderAction);

var _icons = require('../../common/icons');

var _styledComponents3 = require('../../common/styled-components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyledInteractionPanel = _styledComponents2.default.div(_templateObject);

var StyledLayerGroupItem = _styledComponents2.default.div(_templateObject2);

var LayerLabel = _styledComponents3.PanelLabelBold.extend(_templateObject3, function (props) {
  return props.active ? props.theme.textColor : props.theme.labelColor;
});

function LayerGroupSelectorFactory() {
  var LayerGroupSelector = function LayerGroupSelector(_ref) {
    var layers = _ref.layers,
        editableLayers = _ref.editableLayers,
        onChange = _ref.onChange,
        topLayers = _ref.topLayers;
    return _react2.default.createElement(
      StyledInteractionPanel,
      { className: 'map-style__layer-group__selector' },
      _react2.default.createElement(
        'div',
        { className: 'layer-group__header' },
        _react2.default.createElement(
          _styledComponents3.PanelLabel,
          null,
          'Map Layers'
        )
      ),
      _react2.default.createElement(
        _styledComponents3.PanelContent,
        { className: 'map-style__layer-group' },
        Object.keys(editableLayers).map(function (slug) {
          return _react2.default.createElement(
            StyledLayerGroupItem,
            { className: 'layer-group__select', key: slug },
            _react2.default.createElement(
              _styledComponents3.PanelLabelWrapper,
              null,
              _react2.default.createElement(_panelHeaderAction2.default, {
                className: 'layer-group__visibility-toggle',
                id: slug + '-toggle',
                tooltip: layers[slug] ? 'hide' : 'show',
                onClick: function onClick() {
                  return onChange({
                    visibleLayerGroups: (0, _extends5.default)({}, layers, (0, _defineProperty3.default)({}, slug, !layers[slug]))
                  });
                },
                IconComponent: layers[slug] ? _icons.EyeSeen : _icons.EyeUnseen,
                active: layers[slug],
                flush: true
              }),
              _react2.default.createElement(
                LayerLabel,
                { active: layers[slug] },
                slug
              )
            ),
            _react2.default.createElement(
              _styledComponents3.CenterFlexbox,
              { className: 'layer-group__bring-top' },
              _react2.default.createElement(_panelHeaderAction2.default, {
                id: slug + '-top',
                tooltip: 'Move to top of data layers',
                disabled: !layers[slug],
                IconComponent: _icons.Upload,
                active: topLayers[slug],
                onClick: function onClick() {
                  return onChange({
                    topLayerGroups: (0, _extends5.default)({}, topLayers, (0, _defineProperty3.default)({}, slug, !topLayers[slug]))
                  });
                }
              })
            )
          );
        })
      )
    );
  };

  return LayerGroupSelector;
}

exports.default = LayerGroupSelectorFactory;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvbWFwLXN0eWxlLXBhbmVsL21hcC1sYXllci1zZWxlY3Rvci5qcyJdLCJuYW1lcyI6WyJTdHlsZWRJbnRlcmFjdGlvblBhbmVsIiwic3R5bGVkIiwiZGl2IiwiU3R5bGVkTGF5ZXJHcm91cEl0ZW0iLCJMYXllckxhYmVsIiwiUGFuZWxMYWJlbEJvbGQiLCJleHRlbmQiLCJwcm9wcyIsImFjdGl2ZSIsInRoZW1lIiwidGV4dENvbG9yIiwibGFiZWxDb2xvciIsIkxheWVyR3JvdXBTZWxlY3RvckZhY3RvcnkiLCJMYXllckdyb3VwU2VsZWN0b3IiLCJsYXllcnMiLCJlZGl0YWJsZUxheWVycyIsIm9uQ2hhbmdlIiwidG9wTGF5ZXJzIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsInNsdWciLCJ2aXNpYmxlTGF5ZXJHcm91cHMiLCJFeWVTZWVuIiwiRXllVW5zZWVuIiwiVXBsb2FkIiwidG9wTGF5ZXJHcm91cHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZHQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUVBOzs7O0FBUUEsSUFBTUEseUJBQXlCQywyQkFBT0MsR0FBaEMsaUJBQU47O0FBSUEsSUFBTUMsdUJBQXVCRiwyQkFBT0MsR0FBOUIsa0JBQU47O0FBY0EsSUFBTUUsYUFBYUMsa0NBQWVDLE1BQTVCLG1CQUNLO0FBQUEsU0FDUEMsTUFBTUMsTUFBTixHQUFlRCxNQUFNRSxLQUFOLENBQVlDLFNBQTNCLEdBQXVDSCxNQUFNRSxLQUFOLENBQVlFLFVBRDVDO0FBQUEsQ0FETCxDQUFOOztBQUtBLFNBQVNDLHlCQUFULEdBQXFDO0FBQ25DLE1BQU1DLHFCQUFxQixTQUFyQkEsa0JBQXFCO0FBQUEsUUFBRUMsTUFBRixRQUFFQSxNQUFGO0FBQUEsUUFBVUMsY0FBVixRQUFVQSxjQUFWO0FBQUEsUUFBMEJDLFFBQTFCLFFBQTBCQSxRQUExQjtBQUFBLFFBQW9DQyxTQUFwQyxRQUFvQ0EsU0FBcEM7QUFBQSxXQUN6QjtBQUFDLDRCQUFEO0FBQUEsUUFBd0IsV0FBVSxrQ0FBbEM7QUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLHFCQUFmO0FBQ0U7QUFBQyx1Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQURGLE9BREY7QUFJRTtBQUFDLHVDQUFEO0FBQUEsVUFBYyxXQUFVLHdCQUF4QjtBQUNHQyxlQUFPQyxJQUFQLENBQVlKLGNBQVosRUFBNEJLLEdBQTVCLENBQWdDO0FBQUEsaUJBQy9CO0FBQUMsZ0NBQUQ7QUFBQSxjQUFzQixXQUFVLHFCQUFoQyxFQUFzRCxLQUFLQyxJQUEzRDtBQUNFO0FBQUMsa0RBQUQ7QUFBQTtBQUNFLDRDQUFDLDJCQUFEO0FBQ0UsMkJBQVUsZ0NBRFo7QUFFRSxvQkFBT0EsSUFBUCxZQUZGO0FBR0UseUJBQVNQLE9BQU9PLElBQVAsSUFBZSxNQUFmLEdBQXdCLE1BSG5DO0FBSUUseUJBQVM7QUFBQSx5QkFDUEwsU0FBUztBQUNQTSxtRUFDS1IsTUFETCxvQ0FFR08sSUFGSCxFQUVVLENBQUNQLE9BQU9PLElBQVAsQ0FGWDtBQURPLG1CQUFULENBRE87QUFBQSxpQkFKWDtBQVlFLCtCQUFlUCxPQUFPTyxJQUFQLElBQWVFLGNBQWYsR0FBeUJDLGdCQVoxQztBQWFFLHdCQUFRVixPQUFPTyxJQUFQLENBYlY7QUFjRTtBQWRGLGdCQURGO0FBaUJFO0FBQUMsMEJBQUQ7QUFBQSxrQkFBWSxRQUFRUCxPQUFPTyxJQUFQLENBQXBCO0FBQW1DQTtBQUFuQztBQWpCRixhQURGO0FBb0JFO0FBQUMsOENBQUQ7QUFBQSxnQkFBZSxXQUFVLHdCQUF6QjtBQUNFLDRDQUFDLDJCQUFEO0FBQ0Usb0JBQU9BLElBQVAsU0FERjtBQUVFLHlCQUFRLDRCQUZWO0FBR0UsMEJBQVUsQ0FBQ1AsT0FBT08sSUFBUCxDQUhiO0FBSUUsK0JBQWVJLGFBSmpCO0FBS0Usd0JBQVFSLFVBQVVJLElBQVYsQ0FMVjtBQU1FLHlCQUFTO0FBQUEseUJBQ1BMLFNBQVM7QUFDUFUsK0RBQ0tULFNBREwsb0NBRUdJLElBRkgsRUFFVSxDQUFDSixVQUFVSSxJQUFWLENBRlg7QUFETyxtQkFBVCxDQURPO0FBQUE7QUFOWDtBQURGO0FBcEJGLFdBRCtCO0FBQUEsU0FBaEM7QUFESDtBQUpGLEtBRHlCO0FBQUEsR0FBM0I7O0FBa0RBLFNBQU9SLGtCQUFQO0FBQ0Q7O2tCQUVjRCx5QiIsImZpbGUiOiJtYXAtbGF5ZXItc2VsZWN0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMTkgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgUGFuZWxIZWFkZXJBY3Rpb24gZnJvbSAnY29tcG9uZW50cy9zaWRlLXBhbmVsL3BhbmVsLWhlYWRlci1hY3Rpb24nO1xuaW1wb3J0IHtFeWVTZWVuLCBFeWVVbnNlZW4sIFVwbG9hZH0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vaWNvbnMnO1xuXG5pbXBvcnQge1xuICBQYW5lbExhYmVsLFxuICBQYW5lbENvbnRlbnQsXG4gIFBhbmVsTGFiZWxCb2xkLFxuICBQYW5lbExhYmVsV3JhcHBlcixcbiAgQ2VudGVyRmxleGJveFxufSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9zdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IFN0eWxlZEludGVyYWN0aW9uUGFuZWwgPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nLWJvdHRvbTogMTJweDtcbmA7XG5cbmNvbnN0IFN0eWxlZExheWVyR3JvdXBJdGVtID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICY6bGFzdC1jaGlsZCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfVxuXG4gIC5sYXllci1ncm91cF9fdmlzaWJpbGl0eS10b2dnbGUge1xuICAgIG1hcmdpbi1yaWdodDogMTJweDtcbiAgfVxuYDtcblxuY29uc3QgTGF5ZXJMYWJlbCA9IFBhbmVsTGFiZWxCb2xkLmV4dGVuZGBcbiAgY29sb3I6ICR7cHJvcHMgPT5cbiAgICBwcm9wcy5hY3RpdmUgPyBwcm9wcy50aGVtZS50ZXh0Q29sb3IgOiBwcm9wcy50aGVtZS5sYWJlbENvbG9yfTtcbmA7XG5cbmZ1bmN0aW9uIExheWVyR3JvdXBTZWxlY3RvckZhY3RvcnkoKSB7XG4gIGNvbnN0IExheWVyR3JvdXBTZWxlY3RvciA9ICh7bGF5ZXJzLCBlZGl0YWJsZUxheWVycywgb25DaGFuZ2UsIHRvcExheWVyc30pID0+IChcbiAgICA8U3R5bGVkSW50ZXJhY3Rpb25QYW5lbCBjbGFzc05hbWU9XCJtYXAtc3R5bGVfX2xheWVyLWdyb3VwX19zZWxlY3RvclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYXllci1ncm91cF9faGVhZGVyXCI+XG4gICAgICAgIDxQYW5lbExhYmVsPk1hcCBMYXllcnM8L1BhbmVsTGFiZWw+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxQYW5lbENvbnRlbnQgY2xhc3NOYW1lPVwibWFwLXN0eWxlX19sYXllci1ncm91cFwiPlxuICAgICAgICB7T2JqZWN0LmtleXMoZWRpdGFibGVMYXllcnMpLm1hcChzbHVnID0+IChcbiAgICAgICAgICA8U3R5bGVkTGF5ZXJHcm91cEl0ZW0gY2xhc3NOYW1lPVwibGF5ZXItZ3JvdXBfX3NlbGVjdFwiIGtleT17c2x1Z30+XG4gICAgICAgICAgICA8UGFuZWxMYWJlbFdyYXBwZXI+XG4gICAgICAgICAgICAgIDxQYW5lbEhlYWRlckFjdGlvblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxheWVyLWdyb3VwX192aXNpYmlsaXR5LXRvZ2dsZVwiXG4gICAgICAgICAgICAgICAgaWQ9e2Ake3NsdWd9LXRvZ2dsZWB9XG4gICAgICAgICAgICAgICAgdG9vbHRpcD17bGF5ZXJzW3NsdWddID8gJ2hpZGUnIDogJ3Nob3cnfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZSh7XG4gICAgICAgICAgICAgICAgICAgIHZpc2libGVMYXllckdyb3Vwczoge1xuICAgICAgICAgICAgICAgICAgICAgIC4uLmxheWVycyxcbiAgICAgICAgICAgICAgICAgICAgICBbc2x1Z106ICFsYXllcnNbc2x1Z11cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgSWNvbkNvbXBvbmVudD17bGF5ZXJzW3NsdWddID8gRXllU2VlbiA6IEV5ZVVuc2Vlbn1cbiAgICAgICAgICAgICAgICBhY3RpdmU9e2xheWVyc1tzbHVnXX1cbiAgICAgICAgICAgICAgICBmbHVzaFxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8TGF5ZXJMYWJlbCBhY3RpdmU9e2xheWVyc1tzbHVnXX0+e3NsdWd9PC9MYXllckxhYmVsPlxuICAgICAgICAgICAgPC9QYW5lbExhYmVsV3JhcHBlcj5cbiAgICAgICAgICAgIDxDZW50ZXJGbGV4Ym94IGNsYXNzTmFtZT1cImxheWVyLWdyb3VwX19icmluZy10b3BcIj5cbiAgICAgICAgICAgICAgPFBhbmVsSGVhZGVyQWN0aW9uXG4gICAgICAgICAgICAgICAgaWQ9e2Ake3NsdWd9LXRvcGB9XG4gICAgICAgICAgICAgICAgdG9vbHRpcD1cIk1vdmUgdG8gdG9wIG9mIGRhdGEgbGF5ZXJzXCJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWxheWVyc1tzbHVnXX1cbiAgICAgICAgICAgICAgICBJY29uQ29tcG9uZW50PXtVcGxvYWR9XG4gICAgICAgICAgICAgICAgYWN0aXZlPXt0b3BMYXllcnNbc2x1Z119XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlKHtcbiAgICAgICAgICAgICAgICAgICAgdG9wTGF5ZXJHcm91cHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAuLi50b3BMYXllcnMsXG4gICAgICAgICAgICAgICAgICAgICAgW3NsdWddOiAhdG9wTGF5ZXJzW3NsdWddXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9DZW50ZXJGbGV4Ym94PlxuICAgICAgICAgIDwvU3R5bGVkTGF5ZXJHcm91cEl0ZW0+XG4gICAgICAgICkpfVxuICAgICAgPC9QYW5lbENvbnRlbnQ+XG4gICAgPC9TdHlsZWRJbnRlcmFjdGlvblBhbmVsPlxuICApO1xuXG4gIHJldHVybiBMYXllckdyb3VwU2VsZWN0b3I7XG59XG5cbmV4cG9ydCBkZWZhdWx0IExheWVyR3JvdXBTZWxlY3RvckZhY3Rvcnk7XG4iXX0=
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.appInjector = exports.errorMsg = undefined;

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

exports.ContainerFactory = ContainerFactory;
exports.injectComponents = injectComponents;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _lodash = require('lodash.memoize');

var _lodash2 = _interopRequireDefault(_lodash);

var _window = require('global/window');

var _injector = require('./injector');

var _keplerGl = require('./kepler-gl');

var _keplerGl2 = _interopRequireDefault(_keplerGl);

var _actionWrapper = require('../actions/action-wrapper');

var _identityActions = require('../actions/identity-actions');

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

var errorMsg = exports.errorMsg = {
  noState: 'kepler.gl state doesnt exist. ' + 'You might forget to mount keplerGlReducer in your root reducer.' + 'If it is not mounted as state.keplerGl by default, you need to provide getState as a prop',

  wrongType: function wrongType(type) {
    return 'injectComponents takes an array of factories replacement pairs as input, ' + (type + ' is provided');
  },

  wrongPairType: 'injectComponents takes an array of factories replacement pairs as input, ' + 'each pair be a array as [originalFactory, replacement]'
};

ContainerFactory.deps = [_keplerGl2.default];

function ContainerFactory(KeplerGl) {
  var _class, _temp;

  var Container = (_temp = _class = function (_Component) {
    (0, _inherits3.default)(Container, _Component);

    function Container(props, ctx) {
      (0, _classCallCheck3.default)(this, Container);

      var _this = (0, _possibleConstructorReturn3.default)(this, (Container.__proto__ || Object.getPrototypeOf(Container)).call(this, props, ctx));

      _this.getSelector = (0, _lodash2.default)(function (id, getState) {
        return function (state) {
          if (!getState(state)) {
            // log error
            _window.console.error(errorMsg.noState);

            return null;
          }
          return getState(state)[id];
        };
      });
      _this.getDispatch = (0, _lodash2.default)(function (id, dispatch) {
        return (0, _actionWrapper.forwardTo)(id, dispatch);
      });
      return _this;
    }
    // default id and address if not provided


    (0, _createClass3.default)(Container, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        var _props = this.props,
            id = _props.id,
            mint = _props.mint,
            mapboxApiAccessToken = _props.mapboxApiAccessToken;
        // add a new entry to reducer

        this.props.dispatch((0, _identityActions.registerEntry)({ id: id, mint: mint, mapboxApiAccessToken: mapboxApiAccessToken }));
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        // check if id has changed, if true, copy state over
        if (nextProps.id !== this.props.id) {
          this.props.dispatch((0, _identityActions.renameEntry)(this.props.id, nextProps));
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        if (this.props.mint !== false) {
          // delete entry in reducer
          this.props.dispatch((0, _identityActions.deleteEntry)(this.props.id));
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var _props2 = this.props,
            id = _props2.id,
            getState = _props2.getState,
            dispatch = _props2.dispatch,
            state = _props2.state;

        var selector = this.getSelector(id, getState);

        if (!selector || !selector(state)) {
          // instance state hasn't been mounted yet
          return _react2.default.createElement('div', null);
        }

        return _react2.default.createElement(KeplerGl, (0, _extends3.default)({}, this.props, {
          id: id,
          selector: selector,
          dispatch: this.getDispatch(id, dispatch)
        }));
      }
    }]);
    return Container;
  }(_react.Component), _class.defaultProps = {
    id: 'map',
    getState: function getState(state) {
      return state.keplerGl;
    },
    mint: true
  }, _temp);


  var mapStateToProps = function mapStateToProps(state, props) {
    return (0, _extends3.default)({ state: state }, props);
  };
  var dispatchToProps = function dispatchToProps(dispatch) {
    return { dispatch: dispatch };
  };
  return (0, _reactRedux.connect)(mapStateToProps, dispatchToProps)(Container);
}

// entryPoint
function flattenDeps(allDeps, factory) {
  var addToDeps = allDeps.concat([factory]);
  return Array.isArray(factory.deps) && factory.deps.length ? factory.deps.reduce(function (accu, dep) {
    return flattenDeps(accu, dep);
  }, addToDeps) : addToDeps;
}

var allDependencies = flattenDeps([], ContainerFactory);

// provide all dependencites to appInjector
var appInjector = exports.appInjector = allDependencies.reduce(function (inj, factory) {
  return inj.provide(factory, factory);
}, (0, _injector.injector)());

// Helper to inject custom components and return kepler.gl container
function injectComponents(recipes) {
  if (!Array.isArray(recipes)) {
    _window.console.error(errorMsg.wrongType(typeof recipes === 'undefined' ? 'undefined' : (0, _typeof3.default)(recipes)));
    return appInjector.get(ContainerFactory);
  }

  return recipes.reduce(function (inj, recipe) {
    if (!Array.isArray(recipes)) {
      _window.console.error(errorMsg.wrongPairType);
      return inj;
    }
    return inj.provide.apply(inj, (0, _toConsumableArray3.default)(recipe));
  }, appInjector).get(ContainerFactory);
}

var InjectedContainer = appInjector.get(ContainerFactory);

exports.default = InjectedContainer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL2NvbnRhaW5lci5qcyJdLCJuYW1lcyI6WyJDb250YWluZXJGYWN0b3J5IiwiaW5qZWN0Q29tcG9uZW50cyIsImVycm9yTXNnIiwibm9TdGF0ZSIsIndyb25nVHlwZSIsInR5cGUiLCJ3cm9uZ1BhaXJUeXBlIiwiZGVwcyIsIktlcGxlckdsRmFjdG9yeSIsIktlcGxlckdsIiwiQ29udGFpbmVyIiwicHJvcHMiLCJjdHgiLCJnZXRTZWxlY3RvciIsImlkIiwiZ2V0U3RhdGUiLCJzdGF0ZSIsIkNvbnNvbGUiLCJlcnJvciIsImdldERpc3BhdGNoIiwiZGlzcGF0Y2giLCJtaW50IiwibWFwYm94QXBpQWNjZXNzVG9rZW4iLCJuZXh0UHJvcHMiLCJzZWxlY3RvciIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsImtlcGxlckdsIiwibWFwU3RhdGVUb1Byb3BzIiwiZGlzcGF0Y2hUb1Byb3BzIiwiZmxhdHRlbkRlcHMiLCJhbGxEZXBzIiwiZmFjdG9yeSIsImFkZFRvRGVwcyIsImNvbmNhdCIsIkFycmF5IiwiaXNBcnJheSIsImxlbmd0aCIsInJlZHVjZSIsImFjY3UiLCJkZXAiLCJhbGxEZXBlbmRlbmNpZXMiLCJhcHBJbmplY3RvciIsImluaiIsInByb3ZpZGUiLCJyZWNpcGVzIiwiZ2V0IiwicmVjaXBlIiwiSW5qZWN0ZWRDb250YWluZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBaURnQkEsZ0IsR0FBQUEsZ0I7UUFvRkFDLGdCLEdBQUFBLGdCOztBQWpIaEI7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7O0FBRUE7Ozs7QUE1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBZ0JPLElBQU1DLDhCQUFXO0FBQ3RCQyxX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QTBCQSxPQUExQixFQUFkO0FBQ0EsV0FBT0gsWUFBWUksR0FBWixDQUFnQjlDLGdCQUFoQixDQUFQO0FBQ0Q7O0FBRUQsU0FBTzZDLFFBQ0pQLE1BREksQ0FDRyxVQUFDSyxHQUFELEVBQU1JLE1BQU4sRUFBaUI7QUFDdkIsUUFBSSxDQUFDWixNQUFNQyxPQUFOLENBQWNTLE9BQWQsQ0FBTCxFQUE2QjtBQUMzQjVCLHNCQUFRQyxLQUFSLENBQWNoQixTQUFTSSxhQUF2QjtBQUNBLGFBQU9xQyxHQUFQO0FBQ0Q7QUFDRCxXQUFPQSxJQUFJQyxPQUFKLDZDQUFlRyxNQUFmLEVBQVA7QUFDRCxHQVBJLEVBT0ZMLFdBUEUsRUFRSkksR0FSSSxDQVFBOUMsZ0JBUkEsQ0FBUDtBQVNEOztBQUVELElBQU1nRCxvQkFBb0JOLFlBQVlJLEdBQVosQ0FBZ0I5QyxnQkFBaEIsQ0FBMUI7O2tCQUVlZ0QsaUIiLCJmaWxlIjoiY29udGFpbmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDE5IFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBtZW1vaXplIGZyb20gJ2xvZGFzaC5tZW1vaXplJztcbmltcG9ydCB7Y29uc29sZSBhcyBDb25zb2xlfSBmcm9tICdnbG9iYWwvd2luZG93JztcbmltcG9ydCB7aW5qZWN0b3J9IGZyb20gJy4vaW5qZWN0b3InO1xuaW1wb3J0IEtlcGxlckdsRmFjdG9yeSBmcm9tICcuL2tlcGxlci1nbCc7XG5pbXBvcnQge2ZvcndhcmRUb30gZnJvbSAnYWN0aW9ucy9hY3Rpb24td3JhcHBlcic7XG5cbmltcG9ydCB7XG4gIHJlZ2lzdGVyRW50cnksXG4gIGRlbGV0ZUVudHJ5LFxuICByZW5hbWVFbnRyeVxufSBmcm9tICdhY3Rpb25zL2lkZW50aXR5LWFjdGlvbnMnO1xuXG5leHBvcnQgY29uc3QgZXJyb3JNc2cgPSB7XG4gIG5vU3RhdGU6XG4gICAgYGtlcGxlci5nbCBzdGF0ZSBkb2VzbnQgZXhpc3QuIGAgK1xuICAgIGBZb3UgbWlnaHQgZm9yZ2V0IHRvIG1vdW50IGtlcGxlckdsUmVkdWNlciBpbiB5b3VyIHJvb3QgcmVkdWNlci5gICtcbiAgICBgSWYgaXQgaXMgbm90IG1vdW50ZWQgYXMgc3RhdGUua2VwbGVyR2wgYnkgZGVmYXVsdCwgeW91IG5lZWQgdG8gcHJvdmlkZSBnZXRTdGF0ZSBhcyBhIHByb3BgLFxuXG4gIHdyb25nVHlwZTogdHlwZSA9PiBgaW5qZWN0Q29tcG9uZW50cyB0YWtlcyBhbiBhcnJheSBvZiBmYWN0b3JpZXMgcmVwbGFjZW1lbnQgcGFpcnMgYXMgaW5wdXQsIGAgK1xuICAgIGAke3R5cGV9IGlzIHByb3ZpZGVkYCxcblxuICB3cm9uZ1BhaXJUeXBlOiBgaW5qZWN0Q29tcG9uZW50cyB0YWtlcyBhbiBhcnJheSBvZiBmYWN0b3JpZXMgcmVwbGFjZW1lbnQgcGFpcnMgYXMgaW5wdXQsIGAgK1xuICBgZWFjaCBwYWlyIGJlIGEgYXJyYXkgYXMgW29yaWdpbmFsRmFjdG9yeSwgcmVwbGFjZW1lbnRdYFxufTtcblxuQ29udGFpbmVyRmFjdG9yeS5kZXBzID0gW0tlcGxlckdsRmFjdG9yeV07XG5cbmV4cG9ydCBmdW5jdGlvbiBDb250YWluZXJGYWN0b3J5KEtlcGxlckdsKSB7XG4gIGNsYXNzIENvbnRhaW5lciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgLy8gZGVmYXVsdCBpZCBhbmQgYWRkcmVzcyBpZiBub3QgcHJvdmlkZWRcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgaWQ6ICdtYXAnLFxuICAgICAgZ2V0U3RhdGU6IHN0YXRlID0+IHN0YXRlLmtlcGxlckdsLFxuICAgICAgbWludDogdHJ1ZVxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcywgY3R4KSB7XG4gICAgICBzdXBlcihwcm9wcywgY3R4KTtcblxuICAgICAgdGhpcy5nZXRTZWxlY3RvciA9IG1lbW9pemUoKGlkLCBnZXRTdGF0ZSkgPT4gc3RhdGUgPT4ge1xuICAgICAgICBpZiAoIWdldFN0YXRlKHN0YXRlKSkge1xuICAgICAgICAgIC8vIGxvZyBlcnJvclxuICAgICAgICAgIENvbnNvbGUuZXJyb3IoZXJyb3JNc2cubm9TdGF0ZSk7XG5cbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZ2V0U3RhdGUoc3RhdGUpW2lkXTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5nZXREaXNwYXRjaCA9IG1lbW9pemUoKGlkLCBkaXNwYXRjaCkgPT4gZm9yd2FyZFRvKGlkLCBkaXNwYXRjaCkpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgIGNvbnN0IHtpZCwgbWludCwgbWFwYm94QXBpQWNjZXNzVG9rZW59ID0gdGhpcy5wcm9wcztcbiAgICAgIC8vIGFkZCBhIG5ldyBlbnRyeSB0byByZWR1Y2VyXG4gICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHJlZ2lzdGVyRW50cnkoe2lkLCBtaW50LCBtYXBib3hBcGlBY2Nlc3NUb2tlbn0pKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgLy8gY2hlY2sgaWYgaWQgaGFzIGNoYW5nZWQsIGlmIHRydWUsIGNvcHkgc3RhdGUgb3ZlclxuICAgICAgaWYgKG5leHRQcm9wcy5pZCAhPT0gdGhpcy5wcm9wcy5pZCkge1xuICAgICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHJlbmFtZUVudHJ5KHRoaXMucHJvcHMuaWQsIG5leHRQcm9wcykpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgaWYgKHRoaXMucHJvcHMubWludCAhPT0gZmFsc2UpIHtcbiAgICAgICAgLy8gZGVsZXRlIGVudHJ5IGluIHJlZHVjZXJcbiAgICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChkZWxldGVFbnRyeSh0aGlzLnByb3BzLmlkKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgY29uc3Qge2lkLCBnZXRTdGF0ZSwgZGlzcGF0Y2gsIHN0YXRlfSA9IHRoaXMucHJvcHM7XG4gICAgICBjb25zdCBzZWxlY3RvciA9IHRoaXMuZ2V0U2VsZWN0b3IoaWQsIGdldFN0YXRlKTtcblxuICAgICAgaWYgKCFzZWxlY3RvciB8fCAhc2VsZWN0b3Ioc3RhdGUpKSB7XG4gICAgICAgIC8vIGluc3RhbmNlIHN0YXRlIGhhc24ndCBiZWVuIG1vdW50ZWQgeWV0XG4gICAgICAgIHJldHVybiA8ZGl2IC8+O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8S2VwbGVyR2xcbiAgICAgICAgICB7Li4udGhpcy5wcm9wc31cbiAgICAgICAgICBpZD17aWR9XG4gICAgICAgICAgc2VsZWN0b3I9e3NlbGVjdG9yfVxuICAgICAgICAgIGRpc3BhdGNoPXt0aGlzLmdldERpc3BhdGNoKGlkLCBkaXNwYXRjaCl9XG4gICAgICAgIC8+XG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSwgcHJvcHMpID0+ICh7c3RhdGUsIC4uLnByb3BzfSk7XG4gIGNvbnN0IGRpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+ICh7ZGlzcGF0Y2h9KTtcbiAgcmV0dXJuIGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBkaXNwYXRjaFRvUHJvcHMpKENvbnRhaW5lcik7XG59XG5cbi8vIGVudHJ5UG9pbnRcbmZ1bmN0aW9uIGZsYXR0ZW5EZXBzKGFsbERlcHMsIGZhY3RvcnkpIHtcbiAgY29uc3QgYWRkVG9EZXBzID0gYWxsRGVwcy5jb25jYXQoW2ZhY3RvcnldKTtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkoZmFjdG9yeS5kZXBzKSAmJiBmYWN0b3J5LmRlcHMubGVuZ3RoID9cbiAgICBmYWN0b3J5LmRlcHMucmVkdWNlKChhY2N1LCBkZXApID0+IGZsYXR0ZW5EZXBzKGFjY3UsIGRlcCksIGFkZFRvRGVwcykgOlxuICAgIGFkZFRvRGVwcztcbn1cblxuY29uc3QgYWxsRGVwZW5kZW5jaWVzID0gZmxhdHRlbkRlcHMoW10sIENvbnRhaW5lckZhY3RvcnkpO1xuXG4vLyBwcm92aWRlIGFsbCBkZXBlbmRlbmNpdGVzIHRvIGFwcEluamVjdG9yXG5leHBvcnQgY29uc3QgYXBwSW5qZWN0b3IgPSBhbGxEZXBlbmRlbmNpZXNcbiAgLnJlZHVjZSgoaW5qLCBmYWN0b3J5KSA9PiBpbmoucHJvdmlkZShmYWN0b3J5LCBmYWN0b3J5KSwgaW5qZWN0b3IoKSk7XG5cbi8vIEhlbHBlciB0byBpbmplY3QgY3VzdG9tIGNvbXBvbmVudHMgYW5kIHJldHVybiBrZXBsZXIuZ2wgY29udGFpbmVyXG5leHBvcnQgZnVuY3Rpb24gaW5qZWN0Q29tcG9uZW50cyhyZWNpcGVzKSB7XG4gIGlmICghQXJyYXkuaXNBcnJheShyZWNpcGVzKSkge1xuICAgIENvbnNvbGUuZXJyb3IoZXJyb3JNc2cud3JvbmdUeXBlKHR5cGVvZihyZWNpcGVzKSkpO1xuICAgIHJldHVybiBhcHBJbmplY3Rvci5nZXQoQ29udGFpbmVyRmFjdG9yeSk7XG4gIH1cblxuICByZXR1cm4gcmVjaXBlc1xuICAgIC5yZWR1Y2UoKGluaiwgcmVjaXBlKSA9PiB7XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkocmVjaXBlcykpIHtcbiAgICAgICAgQ29uc29sZS5lcnJvcihlcnJvck1zZy53cm9uZ1BhaXJUeXBlKTtcbiAgICAgICAgcmV0dXJuIGluajtcbiAgICAgIH1cbiAgICAgIHJldHVybiBpbmoucHJvdmlkZSguLi5yZWNpcGUpO1xuICAgIH0sIGFwcEluamVjdG9yKVxuICAgIC5nZXQoQ29udGFpbmVyRmFjdG9yeSk7XG59XG5cbmNvbnN0IEluamVjdGVkQ29udGFpbmVyID0gYXBwSW5qZWN0b3IuZ2V0KENvbnRhaW5lckZhY3RvcnkpO1xuXG5leHBvcnQgZGVmYXVsdCBJbmplY3RlZENvbnRhaW5lcjtcbiJdfQ==
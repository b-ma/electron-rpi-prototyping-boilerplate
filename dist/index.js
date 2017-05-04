'use strict';

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MyClass = function () {
  function MyClass() {
    (0, _classCallCheck3.default)(this, MyClass);

    console.log(this);
  }

  (0, _createClass3.default)(MyClass, [{
    key: 'generatorMethod',
    value: _regenerator2.default.mark(function generatorMethod() {
      var i;
      return _regenerator2.default.wrap(function generatorMethod$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              i = 0;

            case 1:
              if (!(i < 10)) {
                _context.next = 6;
                break;
              }

              _context.next = 4;
              return i++;

            case 4:
              _context.next = 1;
              break;

            case 6:
              return _context.abrupt('return', 'done');

            case 7:
            case 'end':
              return _context.stop();
          }
        }
      }, generatorMethod, this);
    })
  }]);
  return MyClass;
}();

var myClass = new MyClass();
console.log([].concat((0, _toConsumableArray3.default)(myClass.generatorMethod())));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk15Q2xhc3MiLCJjb25zb2xlIiwibG9nIiwiaSIsIm15Q2xhc3MiLCJnZW5lcmF0b3JNZXRob2QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQ01BLE87QUFDSixxQkFBYztBQUFBOztBQUNaQyxZQUFRQyxHQUFSLENBQVksSUFBWjtBQUNEOzs7Ozs7Ozs7O0FBR0tDLGUsR0FBSSxDOzs7b0JBRURBLElBQUksRTs7Ozs7O3FCQUNIQSxHOzs7Ozs7OytDQUVELE07Ozs7Ozs7Ozs7Ozs7QUFJWCxJQUFNQyxVQUFVLElBQUlKLE9BQUosRUFBaEI7QUFDQUMsUUFBUUMsR0FBUiw0Q0FBZ0JFLFFBQVFDLGVBQVIsRUFBaEIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmNsYXNzIE15Q2xhc3Mge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzKTtcbiAgfVxuXG4gICogZ2VuZXJhdG9yTWV0aG9kKCkge1xuICAgIGxldCBpID0gMDtcblxuICAgIHdoaWxlIChpIDwgMTApXG4gICAgICB5aWVsZCBpKys7XG5cbiAgICByZXR1cm4gJ2RvbmUnO1xuICB9XG59XG5cbmNvbnN0IG15Q2xhc3MgPSBuZXcgTXlDbGFzcygpO1xuY29uc29sZS5sb2coWy4uLm15Q2xhc3MuZ2VuZXJhdG9yTWV0aG9kKCldKTtcbiJdfQ==
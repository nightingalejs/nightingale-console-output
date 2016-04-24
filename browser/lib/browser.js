'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _nightingaleLevels = require('nightingale-levels');

var _nightingaleLevels2 = _interopRequireDefault(_nightingaleLevels);

/**
 * @function
 * @param obj
*/
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @function
 * @param arr
*/
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } /* eslint no-console: 0 */


var write = function () {
    if (console.error) {
        return (/**
                * @function
                * @param params
                * @param logLevel
               */function write(params, logLevel) {
                var _console;

                (_console = console)[logLevel >= LogLevel.ERROR ? 'error' : 'log'].apply(_console, _toConsumableArray(params));
            }
        );
    } else {
        return (/**
                * @function
                * @param params
                * @param logLevel
               */function write(params, logLevel) {
                var _console2;

                (_console2 = console).log.apply(_console2, _toConsumableArray(params));
            }
        );
    }
}();

exports.default = write;
//# sourceMappingURL=browser.js.map
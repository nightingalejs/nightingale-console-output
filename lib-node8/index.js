'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _nightingaleLevels = require('nightingale-levels');

var _nightingaleLevels2 = _interopRequireDefault(_nightingaleLevels);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (string, { level }) => {
  const outKey = level >= _nightingaleLevels2.default.ERROR ? 'stderr' : 'stdout';
  process[outKey].write(`${string}\n`);
};
//# sourceMappingURL=index.js.map
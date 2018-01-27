'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var randomBytes = _interopDefault(require('randombytes'));
var cryptoIoFs = require('crypto-io-fs');
var path = require('path');
var os = require('os');
var cryptoLogger = require('crypto-logger');

var index = ((keyPath = path.join(os.homedir(), '.ipfs', 'swarm.key')) => new Promise((resolve, reject) => {
  cryptoLogger.info(`searching for swarm.key in ${keyPath}`);
  const _exists = cryptoIoFs.exists(keyPath);
  if (_exists) {
    cryptoLogger.succes(`found swarm.key in ${keyPath}`);
    resolve();
  } else {
    cryptoLogger.fail(`searching for swarm.key in ${keyPath}`);
    cryptoLogger.info(`generating new swarm.key in ${keyPath}`);
    const bytes = randomBytes(32).toString('hex');
    cryptoIoFs.write(keyPath, `/key/swarm/psk/1.0.0/
  /base16/
  ${bytes}`).then(() => cryptoLogger.succes(`saved swarm.key @${keyPath}`));
  }
}));

module.exports = index;
//# sourceMappingURL=generator.js.map

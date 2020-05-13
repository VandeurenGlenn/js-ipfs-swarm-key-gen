'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var randomBytes = _interopDefault(require('randombytes'));
var fs = require('fs');
var util = require('util');
var path = require('path');
var os = require('os');

const write = util.promisify(fs.writeFile);
const read = util.promisify(fs.readFile);

var index = async (path$1 = path.join(os.homedir(), '.ipfs', 'swarm.key')) => {
  let key;
  try {
    key = await read(path$1);
  } catch (e) {
    const bytes = randomBytes(32).toString('hex');
    key = `/key/swarm/psk/1.0.0/\n/base16/\n${bytes}`;
    await write(path$1, key);
  }

  return { path: path$1, key: key.toString() }
};

module.exports = index;

import randomBytes from 'randombytes';
import { exists, write } from 'crypto-io-fs';
import { join } from 'path';
import { homedir } from 'os';
import { info, succes, fail } from 'crypto-logger';

export default (keyPath = join(homedir(), '.ipfs', 'swarm.key')) =>
  new Promise((resolve, reject) => {
    info(`searching for swarm.key in ${keyPath}`)
    const _exists = exists(keyPath);
      if (_exists) {
        succes(`found swarm.key in ${keyPath}`)
        resolve();
      } else {
        fail(`searching for swarm.key in ${keyPath}`)
        info(`generating new swarm.key in ${keyPath}`);
        const bytes = randomBytes(32).toString('hex');
        write(keyPath, `/key/swarm/psk/1.0.0/
  /base16/
  ${bytes}`).then(() => succes(`saved swarm.key @${keyPath}`));
      }
});

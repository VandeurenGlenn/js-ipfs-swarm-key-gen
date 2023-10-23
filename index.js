import randomBytes from 'randombytes';
import { readFile, writeFile } from 'fs/promises';
import { join } from 'path';
import { homedir } from 'os';

var index = async (path = join(homedir(), '.ipfs', 'swarm.key')) => {
    let key;
    try {
        key = await readFile(path);
    }
    catch (e) {
        const bytes = randomBytes(32).toString('hex');
        key = `/key/swarm/psk/1.0.0/\n/base16/\n${bytes}`;
        await writeFile(path, key);
    }
    return { path, key: key.toString() };
};

export { index as default };

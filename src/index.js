import randomBytes from 'randombytes';
import { writeFile, readFile } from 'fs';
import { promisify } from 'util';
import { join } from 'path';
import { homedir } from 'os';

const write = promisify(writeFile)
const read = promisify(readFile)

export default async (path = join(homedir(), '.ipfs', 'swarm.key')) => {
  let key;
  try {
    key = await read(path)
  } catch (e) {
    const bytes = randomBytes(32).toString('hex')
    key = `/key/swarm/psk/1.0.0/\n/base16/\n${bytes}`
    await write(path, key)
  }

  return { path, key: key.toString() }
}

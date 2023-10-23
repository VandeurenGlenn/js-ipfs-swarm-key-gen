import randomBytes from 'randombytes';
import { writeFile, readFile } from 'fs/promises';
import { join } from 'path';
import { homedir } from 'os';

export default async (path: string = join(homedir(), '.ipfs', 'swarm.key')): Promise<{path: string, key: string}> => {
  let key;
  try {
    key = await readFile(path)
  } catch (e) {
    const bytes = randomBytes(32).toString('hex')
    key = `/key/swarm/psk/1.0.0/\n/base16/\n${bytes}`
    await writeFile(path, key)
  }

  return { path, key: key.toString() }
}

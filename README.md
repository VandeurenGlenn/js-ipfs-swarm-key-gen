# ipfs-swarm-key-gen
> swarm.key file generator for the IPFS Private Network feature

## Installation

### Npm
```
npm install js-ipfs-swarm-key-gen --save
```
### Yarn
```
yarn add js-ipfs-swarm-key-gen
```

#### Global
You can also install global for using the cli
```
npm install add js-ipfs-swarm-key-gen --global 
```

```
yarn global add js-ipfs-swarm-key-gen
```

## Usage

### Node
```js
const generator = require('js-ipfs-swarm-key-gen');

generator().then(() => console.log('done'))
// or
generator('path/to/key').then(() => console.log('done'))
```
### cli
```
ipfs-swarm-key-gen path/to/key
```


## License

MIT

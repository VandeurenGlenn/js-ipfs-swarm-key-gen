const m = require('./index')
const {join} = require('path')

m(join(__dirname, 'swarm.key')).then(res => console.log(res))

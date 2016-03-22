const child = require('child_process');
const net = child.fork(`${__dirname}/child.js`);

net.on('message', (m) =>{
  console.log('PARENT got message:', m.msg);
});

setInterval(() =>{
  net.send({ msg: 'hey child' });
}, 2000);


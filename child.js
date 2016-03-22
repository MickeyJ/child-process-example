
process.on('message', (m) =>{
  console.log('CHILD got message:', m.msg);
});

setTimeout(() =>{
  setInterval(() =>{
    process.send({ msg: 'hi mom' });
  }, 2000);
}, 1000);


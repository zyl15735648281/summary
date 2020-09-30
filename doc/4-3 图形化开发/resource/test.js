const EventEmitter = require('events');

let emitter = new EventEmitter();

emitter.once('myEvent', () => {
  console.log('hi');
  emitter.emit('myEvent');
});

emitter.emit('myEvent');

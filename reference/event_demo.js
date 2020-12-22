const EventEmitter = require('events');

//Create CLass
class myEmitter extends EventEmitter {}

//Init Object
const myEmitter = new myEmitter();

//Event Listener
myEmitter.on(
  'event',
  ()=>console.log('Event Fired!')
);

//Init Event
myEmitter.emit('event');
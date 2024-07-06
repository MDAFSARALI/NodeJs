const event = require('events');
const { clearScreenDown } = require('readline');

class MyEmiter extends event{}

const myEmitter=new MyEmiter();

myEmitter.on("click",()=>{
    console.log(`The Event is Running fine`);
});
myEmitter.emit('click');
myEmitter.emit();clearScreenDown
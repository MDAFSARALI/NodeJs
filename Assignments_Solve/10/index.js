const event = require('events');

class MyEmiter extends event{}

const subscribe=new MyEmiter();

subscribe.on("SubscribePlease",(channel)=>{
    console.log(`Thanks For subscribing ${channel}`);
});
subscribe.emit('SubscribePlease','College Wallah');
const count=subscribe.getMaxListeners();
console.log(count);
subscribe.setMaxListeners(51);

const newMaxListeners = subscribe.getMaxListeners();
console.log(`New maximum number of listeners: ${newMaxListeners}`);
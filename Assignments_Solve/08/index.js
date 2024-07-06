const event = require('events');

class MyEmiter extends event{}

const subscribe=new MyEmiter();

subscribe.on("SubscribePlease",(channel)=>{
    console.log(`Thanks For subscribing ${channel}`);
});
subscribe.emit('SubscribePlease','College Wallah');
var easy = require("easy-sqs");
var awsConfig = require('./credentials');

var url = "https://sqs.us-west-2.amazonaws.com/462480755485/test";
var client = easy.createClient(awsConfig);

client.getQueue(url, function(err, queue){

  if(err) console.log("queue does not exist");

  //messages must be strings for now...
  var msg = JSON.stringify({body: "my message body"});

  queue.sendMessage(msg, function(err){
      if(err) console.log("send failed!");
  });
});

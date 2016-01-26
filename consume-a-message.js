var easy = require("easy-sqs");
var awsConfig = require('./credentials');

var url = "https://sqs.us-west-2.amazonaws.com/462480755485/test";
var client = easy.createClient(awsConfig);

client.getQueue(url, function(err, queue){

  if(err) console.log("queue does not exist");

  queue.getMessage(function(err, message){
    console.log(message.Body);
  });
});

var easy = require("easy-sqs");
var awsConfig = require('./credentials');

var url = "https://sqs.us-west-2.amazonaws.com/462480755485/test";
var client = easy.createClient(awsConfig);

var reader = client.createQueueReader(url);

reader.on("message", function(message){
  console.log(message.Body);
});

reader.on("error", function(error){
    console.log(error)
});

reader.start();

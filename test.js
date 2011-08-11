var LiveLog = require("./publisher");

var screen1 = new LiveLog("redis://localhost:6379","screen1");


screen1.log("Hello world", {code:200,message:"hello message"});
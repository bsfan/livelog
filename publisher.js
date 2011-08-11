var   redis = require('redis')
    , util = require('util');

// Usage: new LiveLog("redis://localhost:6379")
var LiveLog = module.exports = function(redisServer, channel) {
  this.channel = channel;
  this.redis = new redis.createClient(6379, "localhost");
}

LiveLog.prototype = {

  log: function(message, object) {
    
    var messageString = this.channel+'.log: '+message;
    
    if(object) {
      messageString += ' ' + util.inspect(object);
    }
    
    this.redis.publish(this.channel, messageString, function(err, res) {
      
      console.log("published: ",messageString);
      
      console.log("error: ",err);
      console.log("res: ",res);
      
    });
    
  }

}
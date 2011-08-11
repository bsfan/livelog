# LiveLog

Live non-persistent logging using socket.io and redis.


### Socket server

    // Socket server
    LiveLog = require("LiveLog");
    LiveLog.listen(80);

### App servers
    // App servers
    LiveLog = require("LiveLog");
    var channel1 = new LiveLog("redis://localhost","channel1");
    channel1.log("This is a notification", object1, object2); // works the same way as console.log();


### Frontend
    // frontend
    <script src="/socket.io/socket.io.js"></script>
    <script>
      var socket = io.connect('http://localhost');
      var livelog = new LiveLog(socket, "channel1");
      livelog.on('log', function (log) {
        console.log(log);
      });
    </script>


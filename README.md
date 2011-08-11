# LiveLog

Live non-persistent logging using socket.io and redis.

### Socket server

    // Socket server
    LiveLog = require("LiveLog");
    LiveLog.listen(3921);

### App servers
    // App servers
    LiveLog = require("LiveLog");
    var urgent = new LiveLog("urgent");
    urgent.log("");

### Frontend
    // frontend
    <script src="/socket.io/socket.io.js"></script>
    <script>
      var livelog = LiveLog.connect('http://localhost');
      livelog.on('urgent', function (log) {
        console.log(log);
      });
    </script>


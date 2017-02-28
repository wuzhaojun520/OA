/**
 * Created by Wan on 2017/2/28.
 */
var express = require("express");
var app = express();
var http = require("http").Server(app);
var socketIo = require("socket.io")(http);
socketIo.on("connection", function (socket) {
    console.log("连接成功！");
    setInterval(function () {
        socketIo.sockets.emit('server-date-time', {
            now: new Date()
        });
    }, 2000);
    
});

var router = express.Router();
app.use("/", express.static(__dirname));
router.post("/data", function (req, res) {
    var person=req.body.person;
    var msg=req.body.message;
    var msgTime=new Date();
    var to=req.body.to;
    
    socketIo.sockets.emit('server-date-time', {
        msg:{
            person:person,
            msg:msg,
            msgTime:msgTime,
            to:to
        }
    });
    res.json({
    });
});
app.use("/", router);
var port = 8020;
http.listen(port);
console.log("serve is listening" + port);
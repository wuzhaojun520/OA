/**
 * Created by Huang on 2017/2/28.
 */
var express = require('express');
var app = express();
var router = express.Router();

app.use("/",express.static(__dirname));

router.get("/",function (req,res) {

});


app.use("/",router);
var port = 8288;
app.listen(port);
console.log("is running on" + port);
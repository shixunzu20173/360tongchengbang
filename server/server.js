/**
 * Created by yh on 2017/3/20.
 */
var express=require('express');
var fs=require('fs');
var app=express();




//跨域
// app.all('*', function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "http://localhost:8900");
//     res.header("Access-Control-Allow-Headers", "X-Requested-With");
//     res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
//     res.header("X-Powered-By",' 3.2.1');
//     res.header("Content-Type", "application/json;charset=utf-8");
//     next();
// });
//热门手机回收：
 app.get('/datalist',function (req,res) {
    fs.readFile(__dirname + '/public/data.json',function(err,data){
        if(err){
            console.log(err)
        }else {
            // console.log(data);
            // res.json(data)
            res.jsonp(data.toString());
        }
    })
});
//二手良品精选：
 app.get('/liangpin',function (req,res) {
    fs.readFile(__dirname + '/public/json/liangpin.json',function(err,data){
        if(err){
            console.log(err)
        }else {
            res.jsonp(data.toString());
            // console.log(data);
        }
    })
});
//二手良品精选：
 app.get('/shangmen',function (req,res) {
    fs.readFile(__dirname + '/public/json/shangmen.json',function(err,data){
        if(err){
            console.log(err)
        }else {
            res.jsonp(data.toString());
            // console.log(data);
        }
    })
});




 


app.listen(3000,function () {
    console.log("服务器启动....")
});


var express=require('express');
var fs=require('fs');

var bodyParser = require('body-parser');

var app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



//跨域
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

app.get('/gettotal',function(req,res){
    fs.readFile(__dirname + '/public/pages.json',function(err,data){
        if(err){
            console.log(err)
        }else {
            //页面输出数据
            // res.json(data.toString())
            //页面输出页数
            var length = JSON.parse(data).result.length;
            res.json({"length":length});
        }
    })
})


app.post('/getlist',function(req,res){
    fs.readFile(__dirname + '/public/pages.json',function(err,data){
        if(err){
            console.log(err)
        }else {
            var start = parseInt(req.body.page_index);
            var start = start*req.body.page_size;
            var end = start + parseInt(req.body.page_size);

            var data = data.toString();
            var json = JSON.parse(data);
            var result = json.result;

            console.log(start + ',' + end)
            var res_arr = result.slice(start,end);

            var res_data = {
                "result":res_arr
            }
            console.log(res_data)
            res.json(res_data);
        }
    })
})




// app.get('/getlist',function (req,res) {
//
//
//     fs.readFile(__dirname+'/public/lists.json',function (err,data) {
//         // res.setHeader('Access-Control-Allow-Origin','*');
//
//         if(err){
//             console.log(err);
//         }else{
//             // console.log(data)
//             // res.json(data);
//             res.jsonp(data.toString());
//             // res.json(data.toString());
//
//         }
//
//     })
// })

// 横排四个
app.get('/rowfour',function (req,res) {
    fs.readFile(__dirname+'/public/rowfour.json',function (err,data) {
        res.setHeader('Access-Control-Allow-Origin','*');
        if(err){
            console.log(err);
        }else{
            // console.log(data)
            // res.json(data);
            // res.jsonp(data.toString());
            res.json(data.toString());

        }

    })
})
//热销机型
app.get('/hotsell',function (req,res) {
    fs.readFile(__dirname+'/public/hotsell.json',function (err,data) {
        res.setHeader('Access-Control-Allow-Origin','*');

        if(err){
            console.log(err);
        }else{
            // console.log(data)
            // res.json(data);
            res.jsonp(data.toString());
            // res.json(data.toString());

        }

    })


})
// 用户晒单
app.get('/usershow',function (req,res) {
    fs.readFile(__dirname+'/public/usershow.json',function (err,data) {
        res.setHeader('Access-Control-Allow-Origin','*');

        if(err){
            console.log(err);
        }else{
            // console.log(data)
            // res.json(data);
            // res.jsonp(data.toString());
            res.json(data.toString());

        }

    })
})

app.listen(8030,function () {
    console.log("server start....8030快成功吧")
    
})
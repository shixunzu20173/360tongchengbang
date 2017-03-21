var express=require('express');
var fs=require('fs');
var app=express();


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




app.listen(1020,function () {
    console.log("server start....1020/hotsell")

})
var express=require('express');
var fs=require("fs");
var app=express();

app.get('/getlist',function (req,res) {


    fs.readFile(__dirname+'/public/lists.json',function (err,data) {
        // res.setHeader('Access-Control-Allow-Origin','*');

        if(err){
            // console.log(err)
        }else{
            console.log(data)
            // res.json(data);
            res.jsonp(data.toString());
            // res.json(data.toString());

        }

    })
})

app.listen(3333,function () {
    console.log("server start....")
    
})
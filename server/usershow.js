var express=require('express');
var fs=require('fs');
var app=express();


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

app.listen(1001,function () {
    console.log("用户晒单....1001/usershow")

})
var express=require('express');
var fs=require('fs');
var app=express();


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

app.listen(1030,function () {
    console.log("用户晒单....1030/rowfour")

})
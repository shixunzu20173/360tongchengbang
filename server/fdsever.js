var express =require('express');
var fs=require('fs');
var app =express();

// 樊栋
app.get('/gitlist',function(req,res){
	fs.readFile(__dirname+'/public/lists.json',function(err,data){
		if(err){
			console.log(err);
		}else{
//			console.log(data);
            res.jsonp(data.toString());
		}
	})
	
	
})


app.listen(3030,function(){
	console.log('服务器启动...fromfandong')
})

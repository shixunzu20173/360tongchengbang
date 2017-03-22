// console.log('hello word')


var map=new AMap.Map("container"),map=new AMap.Map("container",{zoom:10,center:[116.39,39.9]});


$(function () {
    //鼠标滑过显示隐藏： hover()
    $(".xsj").hover(function (){

        $(".xiusj").show();
    },function (){
        $(".xiusj").hide();
    });
    $(".xiusj").hover(function (){

        $(".xiusj").show();
    },function (){
        $(".xiusj").hide();
    });

    $(".xdn").hover(function (){

        $(".xiudn").show();
    },function (){
        $(".xiudn").hide();
    });
    $(".xiudn").hover(function (){

        $(".xiudn").show();
    },function (){
        $(".xiudn").hide();
    });

    $(".hs").hover(function (){

        $(".maisd").show();
    },function (){
        $(".maisd").hide();
    });
    $(".maisd").hover(function (){

        $(".maisd").show();
    },function (){
        $(".maisd").hide();
    });

    $(".esj").hover(function (){

        $(".maiers").show();
    },function (){
        $(".maiers").hide();
    });
    $(".maiers").hover(function (){

        $(".maiers").show();
    },function (){
        $(".maiers").hide();
    });

});
//热门手机回收：
$.ajax({
    url:"http://localhost:3000/datalist",
    dataType:'jsonp',
    method:'get',
    success:function (data) {
        // console.log(JSON.parse(data));
        // console.log("年后啊")
        var json=JSON.parse(data),
            // str='',
            str='<li class="col-md-2"><a href="#"><img src="https://p.ssl.qhmsg.com/t01a10599c63e402740.png"></a></li>',
            lists=json.huishou;
        for (var i=0;i<lists.length;i++){
        str+='<li class="col-md-2"> <a href="#" class="col-md-2"> <div class="p-img"> <img src="'+lists[i].img_url+'"> </div> <div class="p-name">'+lists[i].model_alis+'</div> </a> </li>';
        }
        $('#huishou').html(str);
    }
});

//二手良品精选：
$.ajax({
    url:"http://localhost:3000/liangpin",
    dataType:'jsonp',
    method:'get',
    success:function (data) {
         var json=JSON.parse(data),
             str='<li class="col-md-2"><a href="#"><img src="https://p.ssl.qhmsg.com/t0181716474f1ff8f12.png"></a></li>',
             list=json.liangpin;
        for (var i=0;i<list.length;i++){
            str+='<li class="col-md-2"> <a href="#" class="col-md-2"> <div class="p-img"> <img src="'+list[i].thum_img.big+'"> </div> <div class="p-name">'+list[i].brand_name+"&nbsp;"+list[i].model_name+'</div> <div class="p-price">'+list[i].price+'</div> </a> </li>';
        }
        $("#liangpin").html(str);
    }
});

//服务列表：
//修手机：
$.ajax({
    url:"http://localhost:3000/shangmen",
    dataType:'jsonp',
    method:'get',
    success:function (data) {
         var json=JSON.parse(data),
             str='',
             list=json.shangmen;
        for (var i=0;i<list.length;i++){
            str+='<div class="row xsj-list"><div class="col-md-2 biaotou">'+list[i].name+'></div><div class="col-md-9 xiangxi"><a href="#">y</a><a href="#">屏幕不显示或花屏</a><a href="#">屏幕触摸失灵</a><a href="#">Pad更换屏幕</a></div></div>';
        }
        // $("#xiusj").html(str);
    }
});






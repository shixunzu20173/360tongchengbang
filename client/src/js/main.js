$(function() {

	//遍历
	//banner右侧的移入移除
	$("#uls1 li").mouseover(function() {
		var UliArry = $("#uls1 li"); //获取ulList下所有的li元素集合
		var DivArry = $("#pull div"); //获取tabcontent下所有的div元素
		var Aarry = $('.li-sp');
		//  alert(DivArry.length);
		var count = $(this).index(); //获取li元素的索引
//		$(this).eq(count).css('background','#008c55').siblings().css("background", "rgba(0,0,0,.6)");
		DivArry.eq(count).css("display", "block").siblings().css("display", "none");
		Aarry.eq(count).css('display','block').siblings().css("display", "none");
		//alert(count);
	}).mouseout(function(){
		var UliArry = $("#uls1 li"); 
		var DivArry = $("#pull div"); 
		var Aarry = $('.li-sp');
		var count = $(this).index();
		
		DivArry.eq(count).css("display", "none");
		Aarry.eq(count).css('display','none');
	})

	

	//轮播图
	var swiper = new Swiper('.swiper-container', {
		pagination: '.swiper-pagination',
		autoplay: 5000,
		//autoplayDisableOnInteraction:false,
		centeredSlides: true,
		spaceBetween: 30,
		loop: true,
		paginationClickable: true
	});
	//setInterval("swiper.slidePrev()", 1000);
	
	
	//到店维修数据
	$.ajax({
		url:'http://localhost:5555/shoplist',
		dataType:'json',
		success:function(e){
//			alert(e);
			var str = '';
			var shoplist = e.shop_data;
//			alert(shoplist[0].main);
            for(var i in shoplist){
            	str += '<div class="col-md-12"><dl id="con3-dl"><dt><a href=""><img src="'+
            	shoplist[i].shop_ico+'"/></a></dt><dd><div id="dd-l"><p><a href="">'+
            	shoplist[i].shop_name+'</a>&nbsp;店铺等级:<a href="" class="l2"></a></p><p>主营:'+
            	shoplist[i].main+'</p> <p>地址:'+shoplist[i].addr_detail+'</p></div><div id="dd-r"><p><a href="" class="ra1"></a><span>先行赔付</span></p><p><a href="" class="ra2"></a><span>同城帮认定</span></p><p>人气:'+
            	shoplist[i].shop_visit+'次浏览  </p></div></dd><a href="" id="in-shop">进入店铺</a></dl></div>';
      
            }
            $('#content-3').html(str);
            
            
		}
	})
	
	//商家好评
	$.ajax({
		url:'http://localhost:5555/praise',
		dataType:'json',
		success:function(e){

			var shoplist = e.shop_data;
//			alert(shoplist); 
            //商家好评榜
            var shoper = '';
            var num = 0;
            for(var j in shoplist){
            	num ++;
            	shoper += '<dl><dd><p>'+num+'</p><div id=""><img src="'+
            	shoplist[j].shop_ico+'"/></div></dd><dt><p>'+
            	shoplist[j].shop_name+'</p><p>'+shoplist[j].comments+'条评论</p></dt></dl>'
      		 
            }
            $('#r-con-list').html(shoper);
		}
	})
	
	


    
	

})
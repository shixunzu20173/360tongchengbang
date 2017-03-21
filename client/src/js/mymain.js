$(function() {


 
    // var swiper = new Swiper('.swiper-container', {
    //     pagination: '.swiper-pagination',
    //     paginationClickable: true,
    //     autoplay:1000
    //
    // });


    //轮播图
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        autoplay: 1000,
        //autoplayDisableOnInteraction:false,
        centeredSlides: true,
        spaceBetween: 30,
        loop: true,
        paginationClickable: true
    });
    //setInterval("swiper.slidePrev()", 1000);



   







// getphones

//     $.ajax({
//         url:'http://localhost:3214/phones',
// //        跨域
//         dateType:'jsonp',
// //        dateType:'json',
//
//         method:'get',
//         success:function (data) {
// //            console.log(JSON.parse(data));
//
//             var json=JSON.parse(data);
//
//             var str=''
//
//             var lsss=json.phoness;
//             for(var i=0;i<lsss.length;i++){
//                 str+='<div class="row">'+
//
//                     ' <div class="col-xs-2">'+lsss[i].model_attr_name+'</div> '+
//                     ' <div class="col-xs-2">'+lsss[i].price+'</div></div>'
//                     + ' <div class="col-xs-8"><img src="'+lsss[i].thum_img.min+'"/></div></div>'
//
//             }
//             $('.container').html(str);
//         }
//
//     })



// 一排四个
    $.ajax({
        url:'http://localhost:8030/rowfour',
//        跨域
//        dateType:'jsonp',
        dateType:'json',

        method:'get',
        success:function (data) {
//            console.log(JSON.parse(data));

            var json=JSON.parse(data);

            var str=''

            var rfr=json.rowfour.flash_list;
            for(var i=0;i<rfr.length;i++){

                str+='<div class="col-md-3 rowfour0002r10ins fourfirst "> <div class="row">'+
                    <!--左四-->
                    '<div class="col-md-4"> <div class="left4pic">'+
                    '<img  src="'+rfr[i].thum_img.old+'" alt=""> </div> </div>'+
                    <!--右八-->
                    '<div class="col-md-8"> <div class="right8txt">'+
                    '<h4 class="tit">'+rfr[i].title+'</h4>'+
                    '<del class="priceredtop">￥'+rfr[i].com_price+'</del>'+
                    '<div class="pricered">￥<span class="numred">'+rfr[i].flash_price+'</span></div></div></div></div></div>'

                
            }
            $('#rowfourhtml').html(str);
        }
    })



//分页 一排五个

    $(function(){
        function getdata(page_index,page_size){
            $.post(
                //pages.js
                // 'http://localhost:3002/getlist',
                //server.js
                'http://localhost:8030/getlist',
                {page_index:page_index,page_size:page_size},
                function(res){
                    console.log(res);
                    var str = '';
                    var lsss = res.result;
                    console.log(lsss.length);
                    for(var i = 0;i < lsss.length;i++){
                        str+=' <div class="col-md-2  bgc000202 br10 bl5 rowdivwhbgc"  ><a href="" target="_blank"> <div class="pic">'+
                            '<img  src="'+lsss[i].thum_img.min+'" alt="'+lsss[i].model_attr_name+'"> </div><h6 class="h">'+ lsss[i].title+'</h6>'+

                            ' <p class="p">'+lsss[i].subhead+'</p><div class="price">'+
                            '<div class="rmblogo">￥<span class="nowcost">'+lsss[i].price+'</span> </div>'+

                            '<div class="disori"> <span class="discount">'+lsss[i].discount+'折</span>'+

                            '  <del class="original">￥'+lsss[i].com_price+'</del> </div> </div> <div class="lastwrite">'+
                            lsss[i].mer_name+'  </div> </a></div>'

                    }
                    console.log(str)
                    $('#containerss').html(str);
                })
        }

        $.get(
            // 'http://localhost:3002/gettotal',
            'http://localhost:8030/gettotal',

            function(res){
            var total = res.length;
            // console.log(total)
            initPagination(total);
        })

        var initPagination = function(total) {
            // 创建分页
            console.log("total:" + total)
            $("#Pagination").pagination(10, {
                num_edge_entries: 0, //边缘页数
                num_display_entries: 10, //主体页数
                items_per_page:1,
                callback: pageselectCallback,
                prev_text: "上一页",
                next_text: "下一页"
            });
        };

        function pageselectCallback(page_index, jq){
            getdata(page_index,20);
            return false;
        }

    });



// 一排五个 
//     $.ajax({
//         url:'http://localhost:3214/phones',
// //        跨域
//         dateType:'jsonp',
// //        dateType:'json',
//
//         method:'get',
//         success:function (data) {
// //            console.log(JSON.parse(data));
//
//             var json=JSON.parse(data);
//
//             var str=''
//
//             var lsss=json.phoness;
//             for(var i=0;i<lsss.length;i++){
//
//
//                 str+=' <div class="col-md-2  bgc000202 br10 bl5 rowdivwhbgc"  ><a href="" target="_blank"> <div class="pic">'+
//                     '<img  src="'+lsss[i].thum_img.min+'" alt="'+lsss[i].model_attr_name+'"> </div><h6 class="h">'+ lsss[i].title+'</h6>'+
//
//                ' <p class="p">'+lsss[i].subhead+'</p><div class="price">'+
//                     '<div class="rmblogo">￥<span class="nowcost">'+lsss[i].price+'</span> </div>'+
//
//                     '<div class="disori"> <span class="discount">'+lsss[i].discount+'折</span>'+
//
//               '  <del class="original">￥'+lsss[i].com_price+'</del> </div> </div> <div class="lastwrite">'+
//                     lsss[i].mer_name+'  </div> </a></div>'
//
//             }
//             $('.rrrr').html(str);
//         }
//
//     })






    // 热销机型
    // 一排五个
    $.ajax({
        url:'http://localhost:8030/hotsell',
//        跨域
        dateType:'json',
//        dateType:'json',

        method:'get',
        success:function (data) {
//            console.log(JSON.parse(data));

            var json=JSON.parse(data);

            var str=''

            var less=json.hotsell.product_list;
            for(var i=0;i<less.length;i++){

                str+=' <div class="col-md-2  hot0002r2 br10 bl5 rowdivwhbgc"><a href="" target="_blank"> <div class="pic">'+
                    '<img  src="'+less[i].thum_img.min+'" alt=" "> </div>'+

                    '<h6 class="h">'+less[i].title+'</h6>'+
                    '<p class="p">'+less[i].selling_point+'</p>'+
                '<div class="price"> <div class="rmblogo"><span class="nowcost">'+less[i].price+'</span> </div> </div>'+
                    '<div class="lastwrite">'+less[i].explain+'</div> </a></div>'

            }
            $('#hotsellhtml').html(str);
        }

    })











// 用户晒单

    $.ajax({
        url:'http://localhost:8030/usershow',
//        跨域
        dateType:'json',
//        dateType:'json',

        method:'get',
        success:function (data) {
//            console.log(JSON.parse(data));

            var json=JSON.parse(data);

            var str=''

            var uss=json.usershow;
            for(var i=0;i<uss.length;i++){

//                src/usershow/usershow001001.png
                str+='<div class="outline"> <div class="col-md-3 s1"> <span class="s1pic">'+
                    '<img src="'+uss[i].product_img+'" alt=""> </span> </div>'+
                    '<div class="col-md-9 s2"> <div class="s2write">'+
                    '<p>'+uss[i].show_buyer_mobile+'</p>'+
                    '<p>'+uss[i].comment_content+'</p> </div> </div> </div>'

            }
            $('.usershowtry').html(str);
        }

    })



//
//
//     //遍历
//     //banner右侧的移入移除
//     $("#uls1 li").mouseover(function() {
//         var UliArry = $("#uls1 li"); //获取ulList下所有的li元素集合
//         var DivArry = $("#pull div"); //获取tabcontent下所有的div元素
//         var Aarry = $('.li-sp');
//         //  alert(DivArry.length);
//         var count = $(this).index(); //获取li元素的索引
// //		$(this).eq(count).css('background','#008c55').siblings().css("background", "rgba(0,0,0,.6)");
//         DivArry.eq(count).css("display", "block").siblings().css("display", "none");
//         Aarry.eq(count).css('display','block').siblings().css("display", "none");
//         //alert(count);
//     }).mouseout(function(){
//         var UliArry = $("#uls1 li");
//         var DivArry = $("#pull div");
//         var Aarry = $('.li-sp');
//         var count = $(this).index();
//
//         DivArry.eq(count).css("display", "none");
//         Aarry.eq(count).css('display','none');
//     })
//
//
//
//
//
//
//     //到店维修数据
//     $.ajax({
//         url:'http://localhost:5555/shoplist',
//         dataType:'json',
//         success:function(e){
// //			alert(e);
//             var str = '';
//             var shoplist = e.shop_data;
// //			alert(shoplist[0].main);
//             for(var i in shoplist){
//                 str += '<div class="col-md-12"><dl id="con3-dl"><dt><a href=""><img src="'+
//                     shoplist[i].shop_ico+'"/></a></dt><dd><div id="dd-l"><p><a href="">'+
//                     shoplist[i].shop_name+'</a>&nbsp;店铺等级:<a href="" class="l2"></a></p><p>主营:'+
//                     shoplist[i].main+'</p> <p>地址:'+shoplist[i].addr_detail+'</p></div><div id="dd-r"><p><a href="" class="ra1"></a><span>先行赔付</span></p><p><a href="" class="ra2"></a><span>同城帮认定</span></p><p>人气:'+
//                     shoplist[i].shop_visit+'次浏览  </p></div></dd><a href="" id="in-shop">进入店铺</a></dl></div>';
//
//             }
//             $('#content-3').html(str);
//
//
//         }
//     })
//
//     //商家好评
//     $.ajax({
//         url:'http://localhost:5555/praise',
//         dataType:'json',
//         success:function(e){
//
//             var shoplist = e.shop_data;
// //			alert(shoplist);
//             //商家好评榜
//             var shoper = '';
//             var num = 0;
//             for(var j in shoplist){
//                 num ++;
//                 shoper += '<dl><dd><p>'+num+'</p><div id=""><img src="'+
//                     shoplist[j].shop_ico+'"/></div></dd><dt><p>'+
//                     shoplist[j].shop_name+'</p><p>'+shoplist[j].comments+'条评论</p></dt></dl>'
//
//             }
//             $('#r-con-list').html(shoper);
//         }
//     })







})
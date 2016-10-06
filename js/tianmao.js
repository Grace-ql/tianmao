$(function(){
	//滚轮加载顶部搜索框
  //顶部下拉
  var daoright=$(".dao_right")[0];
  var daosel=$(".dao_sel",daoright)[0];
  var daot=$(".dao_t",daosel)[0];
  var daoc=$(".dao_c",daosel)[0];
  var collect=$(".collect")[0];
  var collectxia=$(".collect_xia",collect)[0];
  var collecttitle=$(".collect_title",collect)[0];
  var shouji=$(".shouji")[0];
  var shoujiimg=$(".shoujiimg",shouji)[0];
  var shop=$(".shop")[0];
  var shoptitle=$(".shop_title")[0];
  var shopcontent=$(".shop_content")[0];
  var net=$(".net")[0];
  var nettitle=$(".net_title")[0];
  var nett=$(".net_t")[0];
  var netc=$(".net_c")[0];
  hover(daosel,function(){
      daoc.style.display="block";
      daot.style.background="#fff";
  },function(){
      daoc.style.display="none";
      daot.style.background="";
  })
   hover(collect,function(){
      collectxia.style.display="block";
      collecttitle.style.background="#fff";
      // collecttitle.style.zIndex=20;
  },function(){
      collectxia.style.display="none";
      collecttitle.style.background="";
  })
    hover(shouji,function(){
      shoujiimg.style.display="block";
      shoujiimg.style.zIndex=20;
  },function(){
      shoujiimg.style.display="none";
  })
    hover(shop,function(){
      shopcontent.style.display="block";
      shoptitle.style.background="#fff";
     shopcontent.style.zIndex=30;
  },function(){
      shopcontent.style.display="none";
      shoptitle.style.background="";
  })
    hover(net,function(){
      nettitle.style.display="block";
      nett.style.background="#fff";
      nettitle.style.zIndex=300;
  },function(){
     nettitle.style.display="none";
     nett.style.background="";
     nettitle.style.zIndex=0;
  })
//楼层跳级
   var floors=$(".floors");
   var tops=[];
   var floorbox=$(".floorbox")[0];
   var flooras=$("a",floorbox);
   for (var i = 0; i<floors.length;i++) {
     var floorsh=floors[i].offsetTop;
     tops.push(floorsh);
   };
   var search=$(".search-box")[0];
  var searchbox=$(".searchbox")[0];
  var flag=true;
  //返回顶部
  var back=$(".back")[0];
   var ch=document.documentElement.clientHeight;
   back.onclick=function(){
    animate(document.documentElement,{scrollTop:0},100)
    animate(document.body,{scrollTop:0},100)
   }
   //按需加载
   var bbox=$(".bbox");
   // var ch=document.documentElement.clientHeight;
   var arr=[];
   var flags=[];
   for (var i = 0; i < bbox.length; i++) {
     var bboxh=bbox[i].offsetTop;
     arr.push(bboxh);
     flags.push(true);
   };
   window.onscroll=function(){
    var stop=document.documentElement.scrollTop||document.body.scrollTop;
     // document.title=document.documentElement.scrollTop||document.body.scrollTop;
    if(stop>600){
       if(flag){ 
        flag=false;
           animate(searchbox,{top:0},200) 
           animate(search,{top:0},200) 
       }
    }
    if(stop<600){
      if(!flag){
        flag=true;
       animate(searchbox,{top:-60},200);
       animate(search,{top:-60},200) 
      }
    }
    for (var i = 0; i <tops.length; i++) {
       if(tops[i]<stop+600){
          for (var j= 0; j <flooras.length; j++) {
             flooras[j].style.background="";
          };
          flooras[i].style.background="red";
      }
    };
    //返回顶部
     var stop=document.documentElement.scrollTop||document.body.scrollTop;
    if(stop>ch){
       back.style.display="block";
    }else{
      back.style.display="none";
    }
    //按需加载
    for (var i = 0; i < arr.length; i++) {
       if(arr[i]<=stop+ch&&flags[i]){
        flags[i]=false;
        var img=bbox[i].getElementsByTagName('img')
       for (var j = 0; j< img.length; j++) {
          img[j].src=img[j].getAttribute("asrc");
       };
       }
    };
   }
   for (var i = 0; i<flooras.length; i++) {
     flooras[i].index=i;
     flooras[i].onclick=function(){
        animate(document.documentElement,{scrollTop:tops[this.index]},500);
        // alert(this.index)
        animate(document.body,{scrollTop:tops[this.index]},500)
     }
   };
//轮播开始
	var banner=$(".banner_box")[0];
	var bannerimg=$(".banner_img")[0];
	var imgs=$("img",bannerimg);
	var index=0;
  var bannerbtn=$(".banner_btn")[0];
  var bannerlis=$("li",bannerbtn);
  imgs[0].style.display="block";
  bannerlis[0].style.background="#fff";
	var t=setInterval(move,1000)
  function move(){
        index++;
        if(index==imgs.length){index=0;}
        for (var i = 0; i < imgs.length; i++) {
          imgs[i].style.display="none";
          bannerlis[i].style.background="";

        };
        imgs[index].style.display="block";
        bannerlis[index].style.background="#fff";
  }
  banner.onmouseover=function(){
    clearInterval(t);
  }
  banner.onmouseout=function(){
    t=setInterval(move,1000)
  }
  for (var i = 0; i < bannerlis.length; i++) {
     bannerlis[i].index=i;
    bannerlis[i].onclick=function(){
       for (var  j= 0; j<imgs.length; j++) {
         imgs[j].style.display="none";
         bannerlis[j].style.background="";
       };
       imgs[this.index].style.display="block";
       bannerlis[this.index].style.background="#fff"
    }
  };
    var yin=$(".banner_yin");
    var banneras=$(".banner_a");
    for (var i = 0; i < yin.length; i++) {
      yin[i].style.display="none";
    };
    for (var i = 0; i < banneras.length; i++) {
      banneras[i].index=i
            banneras[i].onmouseover=function(){
              // alert(1)
          for (var j= 0; j < yin.length; j++) {
              yin[j].style.display="none";
          };
          yin[this.index].style.display="block"
      }
    };
    for (var i = 0; i < imgs.length; i++) {
       imgs[i].index=i;
       imgs[i].onmouseout=function(){
           for (var j= 0; j < yin.length; j++) {
              yin[j].style.display="none";
          };
          yin[this.index].style.display="none"
          // this.style.display="none";
       }
    };
    //鼠标移入标题出现猫
    var mao=$(".mao")[0];
    var maoimg=$("img",mao);
    // var bannertop=$(".banner_top")[0];
    var mao1=$(".mao1",mao);
    for (var i = 0; i < mao1.length; i++) {
      mao1[i].index=i;
      hover(mao1[i],function(){
         var maoimg=$("img",mao1[this.index])[0];
          animate(maoimg,{display:"block"},200)
      },function(){
         animate(maoimg[this.index],{display:"none"},200)
      })
    };
     //鼠标经过左边定位
     var  leftposition=$(".left_position")[0];
     var  maskyin=$(".maskyin",leftposition);
     var  backmask1=$(".backmask1",leftposition);
     var  maskbb=$(".maskbb");
     for (var i = 0; i < backmask1.length; i++) {
         backmask1[i].index=i;
         hover(backmask1[i],function(){ 
             maskyin[this.index].style.display="block";
             animate(maskyin[this.index],{left:-100},300)
             animate(maskbb[this.index],{background:"red",opacity:"0.7"},200)
         },function(){
               maskyin[this.index].style.display="none";
              animate(maskbb[this.index],{background:""},200);
              animate(maskyin[this.index],{left:-120},300);
         })
     };  
	//添加遮罩
    var box5=$(".box5")[0];
    var box5inner=$(".box5inner",box5)[0];
    var box5mask=$(".box5_mask",box5inner);
    for (var i = 0; i <box5mask.length; i++) {
      box5mask[i].onmouseover=function(){ 
          this.style.background="#fff";
          this.style.opacity=0.3;
      }
       box5mask[i].onmouseout=function(){ 
          this.style.background="";
      }
    };
    var box7=$(".box7")[0];
    var box7inner=$(".box7inner")[0];
    var box7innermiddle=$(".box7innermiddle")[0];
    var box7mask=$(".box7_mask",box7innermiddle); 
    var box7img=$("img", box7innermiddle);
    for (var i = 0; i < box7img.length; i++) {
      box7img[i].index=i;
      box7img[i].onmouseover=function(){
         for (var j= 0; j< box7mask.length; j++) {
           box7mask[j].style.display="none";
         };
         box7mask[this.index].style.display="block";
      }
};
    var idthirteenbox=$(".idthirteen_box")[0];
    var idthirteenmidbox=$(".idthirteen_midbox",idthirteenbox)[0];
    var idthirteenp=$("idthirteen_picture",idthirteenmidbox);
    var idthirteenmask=$(".idthirteen_mask",idthirteenp);
    for (var i = 0; i < idthirteenmask.length; i++) {
      idthirteenmask[i].onmouseover=function(){
         this.style.background="#fff";
         this.style.opacity=0.5;
         this.style.border="1px solid red";
      }
      idthirteenmask[i].onmouseout=function(){
        this.style.background=""
        this.style.border="0";
      }
    };
	//移入鼠标变大 左移
 var idonebox=$(".idone_box")[0];
 var idonemidbox=$(".idone_midbox",idonebox)[0];
 var idoneboxpt=$(".idone_box_pt",idonemidbox);
 for (var i = 0; i < idoneboxpt.length; i++) {
    	idoneboxpt[i].onmouseover=function(){
    		var idoneboximg=$("img",this)[0];
    		animate(idoneboximg,{width:185,height:185});
    	}
    	idoneboxpt[i].onmouseout=function(){
    		var idoneboximg=$("img",this)[0];
    		animate(idoneboximg,{width:180,height:180});
    	}
    };
   var idthreept=$(".idthree_pt");
   for (var i = 0; i < idthreept.length; i++) {
   	idthreept[i].onmouseover=function(){
   		var idthreeimg=$("img",this)[0];
   		animate(idthreeimg,{marginLeft:-10});
   	}
   	idthreept[i].onmouseout=function(){
   		var idthreeimg=$("img",this)[0];
   		animate(idthreeimg,{marginLeft:0});
   	}
   };
   var idthreeptone=$(".idthree_ptone");
   for (var i = 0; i < idthreeptone.length; i++) {
   	idthreeptone[i].onmouseover=function(){
   		var idthreeimg1=$("img",this)[0];
   		animate(idthreeimg1,{marginLeft:-10});
   	}
   	idthreeptone[i].onmouseout=function(){
   		var idthreeimg1=$("img",this)[0];
   		animate(idthreeimg1,{marginLeft:0});
   	}
   };
   var idthreepttwo=$(".idthree_pttwo");
   for (var i = 0; i < idthreepttwo.length; i++) {
   	idthreepttwo[i].onmouseover=function(){
   		var idthreeimg2=$("img",this)[0];
   		animate(idthreeimg2,{marginLeft:-10});
   	}
   	idthreepttwo[i].onmouseout=function(){
   		var idthreeimg2=$("img",this)[0];
   		animate(idthreeimg2,{marginLeft:0});
   	}
   };

})



function $(selector,range){
    var range=range||document;
    //判断是否为id
    if(typeof selector=="string"){ 
    if(selector.charAt(0)=="#"){
        return document.getElementById(selector.substr(1))
    }
    //判断类名
    if(selector.charAt(0)=="."){
           return getClass(selector.substr(1),range)
    }
    //判断标签名
    if(/^[a-zA-Z][a-zA-Z1-6]{0,9}$/.test(selector)){
          return range.getElementsByTagName(selector)
    }
}else if(typeof selector=="function"){
    
      window.onload=selector;
}
}
function getClass(classname,range){
	// document.getElementsByClassName('box',document)
	//判断当前
	if(range.getElementsByClassName){
	// alert("支持");
		return range.getElementsByClassName(classname)
	}else{
		var all=range.getElementsByTagName('*');
		var arr=[];
		for (var i = 0; i < all.length; i++) {        			
		if(checkClass(all[i].className,classname)){
				arr.push(all[i]);
			}
		};
		return arr;
       alert(arr)
    // alert("不支持")
        	}
        }
    //返回值  true ||false 
    // box aa dd inner
    //兼容检测的当前元素的类名是否包含需要查找的类名
function checkClass(tagClass,aclass){
	var arr=tagClass.split(" ")
	for(var i = 0; i < arr.length; i++) {
    if(arr[i]==aclass){
        return  true;
      }
    }
        return false;
};
    //要checkClass想弹出，先传入两个参数，形参为变量，不加引号，而实参一般都加引号
    //alert(checkClass('aa bb inner cc aainner','inner'))
    //兼容获取文本设置和赋值
function  text(obj,val){
    //判断是否为空值，若为空，进行设置
    if(val==undefined){
    //获取
    if(obj.textContent!=undefined){
             //不支持
        return obj.textContent;
        }else{
            return obj.innerText;
        }
    }else{
    //设置
    if(obj.textContent!=undefined){
            obj.textContent=val;
        }else{
            obj.innerText=val;
        }
  }
}
    //兼容通用样式获取
    //obj 要获取样式的对象 attr 要获取对象的属性
    //border-width 可以写的   只能写一个属性
function getStyle(obj,attr){
     if(obj.currentStyle){
        return obj.currentStyle[attr];
     }else{
        return window.getComputedStyle(obj,null)[attr];
     }
}
//兼容换行,获取所有子节点
function getChilds(obj){
    var childs=obj.childNodes;

    var newArr=[];
    //注释 换行
     for (var i = 0; i<childs.length; i++) {
         if(!(childs[i].nodeType==8||(childs[i].nodeType==3&&trim(childs[i].nodeValue)==""))){
              newArr.push(childs[i]);
         }
     };
     return newArr;
}
//把开头 结尾的空白替换成空 g 全局
function trim(str){
    return str.replace(/^\s+|\s+$/g,"")
}
// 获取最后一个节点
function getFirst(parent){
    return getChilds(parent)[0];
}
//获取最后一个节点
function getLast(parent){
   var last=getChilds(parent);
   return getChilds(parent)[last.length-1];
}
//获取任意指定节点
function getIndex(parent,i){
   return getChilds(parent)[i]
}
function getNext(obj){
   var next=obj.nextSibling;
   if(!next){return false}
    //next 指变量 不用取非 要的就是空则循环
   while(next.nodeType==8||(next.nodeType==3&&trim(next.nodeValue)=="")){
           next=next.nextSibling;//等号后面的next指obj.nextSibling
          if(!next){return false}
   }
 return next;
}
function getPrevious(obj){
   var previous=obj.previousSibling;
   if(!previous){return false}
    //next 指变量 不用取非 要的就是空则循环
   while(previous.nodeType==8||(previous.nodeType==3&&trim(previous.nodeValue)=="")){
           previous=previous.nextSibling;//等号后面的next指obj.nextSibling
          if(!previous){return false}
   }
 return previous;
}
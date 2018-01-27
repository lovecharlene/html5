// var EventUtil = {
// 	addHandler: function(element, type, handle) {
// 		if (element.addEventListener) {
// 			element.addEventListener(type, handle, false);
// 		} if(element.attachEvent) {
// 			element.attachEvent('on'+type, handle);
// 		} else{
// 			element['on'+type] = handle;
// 		};
// 	},
// 	removeHandler: function(element, type, handle) {
// 		if (element.removeEventListener) {
// 			element.removeEventListener(type, handle, false);
// 		} else if (element.detachEvent) {
// 			element.detachEvent('on' + type, handle);
// 		} else{
// 			element['on'+type] = null;
// 		};
// 	},
// 	getEvent: function(event) {
// 		return event || window.event;
// 	},
// 	getTarget: function(event) {
// 		return event.target || event.srcElement;
// 	},
// 	preventDefault: function(event) {
// 		if (event.preventDefault) {
// 			event.preventDefault();
// 		} else{
// 			event.returnValue = false;
// 		};
// 	},
// 	stopPropagation: function(e) {
// 		if (e.stopPropagation) {
// 			e.stopPropagation();
// 		} else{
// 			e.cancelBubble = true;
// 		};
// 	};
// };



//浏览器兼容处理
var EventUtil={
	
	addHandler: function(element, type, handler) { 
	    if(element.addEventListener){
	      element.addEventListener(type, handler, false);
	    }else if(element.attachEvent){
	    	element.attachEvent('on'+type, handler);
	    }else{
			element['on'+type]=handler;
	    }
     },
//绑定事件


//通过removehandler移除事件
	removeHandler: function(element, type, handler) {
		if(element.removeElementListener){
	      element.removeElementListener(type, handler, false);
		}else if(element.detachEvent){
			element.detachEvent('on'+type, handler)
		}else{
			element['on'+type]=null;
		}
	},

	getEvent:function(e){
	  return e?e:window.event;// window.event
	},

	getTarget:function(e){
		return e.target||e.srcElement;
	},

	preventDefault:function(e){
	    if(e.preventDefault){
	    	e.preventDefault();
	    }else{
	    	e.returnValue=false;
	    }//取消默认
	},
	stopPropagation:function(e){
	   if(e.stopPropagation){
		e.stopPropagation();
	   }else{
	   	e.cancelBubble=true;
	   }

	}
}
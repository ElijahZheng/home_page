function addClass(obj, cls){
  var obj_class = obj.className,//获取 class 内容.
  blank = (obj_class != '') ? ' ' : '';//判断获取到的 class 是否为空, 如果不为空在前面加个'空格'.
  added = obj_class + blank + cls;//组合原来的 class 和需要添加的 class.
  obj.className = added;//替换原来的 class.
}

window.onload = function() {
	document.querySelector(".container h1").className = "fade";
	addClass(document.querySelector(".intro"), "fade");
	addClass(document.querySelector(".about-me"), "fade-right");
	addClass(document.querySelector(".intro-list"), "fade-up");
	// document.querySelector(".container p").className = "fade";
}
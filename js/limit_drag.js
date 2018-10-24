//继承
function LimitDrag(id){
	//1、构造函数的伪装
	Drag.call(this, id);
}
//2、继承函数  原型链
for(var funcName in Drag.prototype){
	LimitDrag.prototype[funcName] = Drag.prototype[funcName];
}

//3、多态  限制出界

LimitDrag.prototype.funcMove = function (ev){
	var l = ev.clientX - this.offsetX;
	var t = ev.clientY - this.offsetY;
	if(l <= 0){
		l = 0;
	}
	var windowWidth = document.documentElement.clientWidth || document.body.clientWidth;
	if(l >= windowWidth - this.oDiv1.offsetWidth){
		l = windowWidth - this.oDiv1.offsetWidth;
	}

	if(t <= 0){
		t = 0;
	}
	var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
	if(t >= windowHeight - this.oDiv1.offsetHeight){
		t = windowHeight - this.oDiv1.offsetHeight
	}
	this.oDiv1.style.left = l + 'px';
	this.oDiv1.style.top = t + 'px';
}
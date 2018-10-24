			function Drag(id){
				this.oDiv1 = document.getElementById(id);

				var _this = this;
				this.oDiv1.onmousedown = function(ev){
					var e = ev || window.event;
					_this.funcDown(e);
				};
			}

			Drag.prototype.funcDown = function(ev){
				this.offsetX = ev.clientX - this.oDiv1.offsetLeft;
				this.offsetY = ev.clientY - this.oDiv1.offsetTop;
				var _this = this;
				document.onmousemove = function(ev){
					// var e = ev || window.event;
					_this.funcMove(e);
				};
				document.onmouseup = function(){
					_this.funcUp();
				};
			}
			Drag.prototype.funcMove = function (ev){
				this.oDiv1.style.left = ev.clientX - this.offsetX + 'px';
				this.oDiv1.style.top = ev.clientY - this.offsetY + 'px';
			}

			Drag.prototype.funcUp = function(){
				document.onmousemove = null;
			}
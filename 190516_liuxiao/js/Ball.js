function Ball(options) {
	this._init(options);
}
Ball.prototype = {
	_init: function(options) {
		//必要属性

		this.width = options.width || 20;
		this.height = options.height || 20;
		this.left = options.left;
		this.top = options.top;
		this.bgColor = options.bgColor || 'red';
	},
	render: function() {
		var parentNode = document.getElementById("box");
		var childNode = document.createElement('div');
		parentNode.appendChild(childNode);
		childNode.style.position = 'absolute';
		childNode.style.left = this.left + 'px';
		childNode.style.top = this.top + 'px';
		childNode.style.width = this.width + 'px';
		childNode.style.height = this.height + 'px';
		childNode.style.backgroundColor = this.bgColor;
	},
	renmov:function(){
		parentNode.removeChild(childNode);
	},
	update: function() {
		this.left += this.dX;
		this.top += this.dY;
		this.radius -= this.dR;
		if (this.radius <= 0) {
			//小球半径为零，则将小球移除
			this.radius = 0;
			ballArr = _.without(ballArr, this);
		}
	},


}
//获取随机位置
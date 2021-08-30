function mouse(name){
	this.name = name;
	this.dead = false
}

mouse.prototype.dead = function(){
	this.dead = true;
}

module.exports = mouse;

const Cat = require("./Cat");
const Mouse = require("./mouse")

const cat = new Cat();
const mouse = new Mouse('mickey');

cat.eat(mouse);
console.log(cat)

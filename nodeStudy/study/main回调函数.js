// 阻塞代码实例
var fs = require("fs");

var data = fs.readFileSync('input.txt');

console.log(data.toString());
console.log("程序执行结束!");


// 非阻塞代码实例
var fs = require("fs");

fs.readFile('input.txt', function (err, data) {
    if (err) return console.error(err);

    console.log(data.toString());
});

console.log("程序执行结束!");


// 阻塞是按顺序执行的，而非阻塞是不需要按顺序的，所以如果需要处理回调函数的参数，我们就需要写在回调函数内。
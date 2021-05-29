// 小明开发的模块
;(function(){
    if(moduleB.flag){
        console.log("小明是天才，哈哈哈")
    };
    console.log(moduleB.sum(30,60));
})()


// commonJS模块导入语法
// let {flag , sum} = require("./aaa.js");
// 小明开发的模块
;
// 将小明开发的模块存入moduleB中，方便后续使用
var moduleB = (function(){
    // 将其中定义的一些变量和方法存入对象中，返回对象，方便后续使用该模块中定义的变量和方法
    var obj = {}

    var flag = true;

    function sum(a,b){
        return a+b;
    }
    
    sum(10,20);
    
    console.log("小明");

    obj.flag = flag;
    obj.sum=sum;

    return obj;
})()


// 使用commonJS解析
// var flag = true;

// function sum(a,b){
//     return a+b;
// }
    
// sum(10,20);
    
// console.log("小明");

// module.experts = {
//     flag:flag,
//     sum:sum
// }
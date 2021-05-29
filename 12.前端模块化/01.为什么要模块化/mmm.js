// 小红开发的模块
;
var moduleA =(function(){
    var obj = {}
    console.log("小红");
    var flag = false;
    function fun(){
        console.log(flag);
    }

    obj.fun = fun;

    return obj;
})()
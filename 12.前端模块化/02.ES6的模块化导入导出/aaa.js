var name = "小明";
var age = 18;
var flag = true;

function sum(num1,num2){
    return num1 + num2;
}

if(flag){
    console.log(sum(30,20));
}

// 1.export导出方式一
export{flag,sum,name,age}

// 2.export导出方式二
export var num1 = 80;
export var height = 180;

// 3.export导出函数/类
export function mul(num1,num2){
    return num1*num2;
}

export class Person{
    run(){
        console.log("class：在奔跑");
    }
}

// 5.export default导出默认值，但是一个模块有且最多有一个export default导出数据
// const address = "重庆市";
// export {address}

// export const address = "重庆市"

// const address = "重庆市"
// export default address;

export default function(argument){
    console.log(argument);
}
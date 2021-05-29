// 1.导入export的{}
import {sum} from "./aaa.js"

var flag = false;
var name = "小红";

console.log("小红导入export的{}："+sum(20,50))

// 2.直接导入export定义的变量
import {num1,height} from "./aaa.js"
console.log("小红直接导入export定义的变量："+num1,height)

// 3.导入export的function/class
import {mul,Person} from "./aaa.js"
console.log("小红导入export的function："+mul(30,10))
const p = new Person();
p.run();

// 4.导入export default的值；
// import addr from './aaa.js';
// console.log(addr);

import fun from './aaa.js';
fun("export default导出function函数")

// 5.统一全部导入
// import {flag,name,num1,height,mul,Person} from './aaa.js';

import * as aaa from "./aaa.js"
console.log(aaa.flag)
console.log(aaa.height)
console.log(aaa.num1)
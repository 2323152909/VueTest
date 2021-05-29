// 编程范式：命令式编程/声明式编程
// 编程范式：面向对象编程（第一公民：对象）/函数式编程（第一公民：函数）

// （函数式编程）
// 需求1:取出数组中小于一百的数，放入新的数组中
// 需求2：将取出的小于一百的数全都乘以2，变成一个新的数组
// 需求3：将该数组中所有的数相加得到结果返回

// filter/map/reduce等高级函数
// filter为过滤的意思
// filter中的回调函数有一个要求：必须返回一个Boolean值
// true:当返回true时，函数内部会自动将这次回调的n加入到新的数组中，我们可以定义一个新的数组去接收
// false：当返回false时，函数内部就会过滤掉这次的n
const nums = [10,20,111,222,444,40,50]

// 箭头函数写法
// let total = nums.filter(n => n < 100).map(n => n * 2).reduce((prevalue,n) => prevalue + n);

let total = nums.filter(function(n){
    return n<100;
}).map(function(n){
    return n * 2;
}).reduce(function(prevalue,n){
    return prevalue + n;
},0)

// 1.filter函数的使用（参数为一个回调函数，回调函数需要一个参数，该参数为调用该方法(filter())的数组中每次读取的值）
// 10,20,40,50
// let newNums = nums.filter(function(n){
//     return n<100;
// })
// console.log(newNums);

// // 2.map函数的使用（参数是一个回调函数，回调函数也需要一个参数，改参数为调用map()方法数组中每次读取的数据）
// // 20,40,80,100
// let new2Nums = newNums.map(function(n){
//     return n * 2;
// })
// console.log(new2Nums);


// // 3.reduce函数的使用
// // reduce作用，对数组中所有的值进行汇总
// // reduce()函数需要传两个参数，第一个参数是一个回调函数，第二个参数为一个初始值，且第一个参数中的回调函数也需要两个参数，一个参数为
// // 前一次的返回值，第二个参数为当前值
// let total = new2Nums.reduce(function(prevalue,n){
//     return prevalue + n;
// },0)

// // 第一次：prevalue:0 n:20
// // 第二次：prevalue:20 n:40
// // 第三次：prevalue:60 n:80
// // 第四次: prevalue:140 n:100
// // 结果返回：240
console.log(total);

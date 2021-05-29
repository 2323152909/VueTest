const app = new Vue({
    el:'#app',
    data:{
        books:[
            {
                id:1,
                name:'《算法导论》',
                date:'2006-9',
                price:85,
                number:1
            },
            {
                id:2,
                name:'《UNIX编程艺术》',
                date:'2006-2',
                price:59,
                number:1
            },
            {
                id:3,
                name:'《编程珠玑》',
                date:'2008-10',
                price:39,
                number:1     
            },
            {
                id:4,
                name:'《代码大全》',
                date:'2006-3',
                price:128,
                number:1
                
            },
        ],
        message:'暂无可用书籍',
        count:0
    },
    // filter为过滤器属性
    filters:{
        showPrice(price){
            // toFixed()方法为保留几位小数，参数为要保留的位数
            return '￥'+price.toFixed(2);
        }
    },
    computed:{
        priceTotal(){
            let result=0;
            // 1.普通的for循环遍历
            // for(let i=0;i<this.books.length;i++){
            //     result += this.books[i].price*this.books[i].number;
            // }

            // 2.for...in遍历数组
            // for(let i in this.books){
            //     result += this.books[i].price*this.books[i].number;
            // }

            // 3.for...of的方式进行遍历
            // for(let book of this.books){
            //     result += book.price*book.number;
            // }

            // return result;

            return this.books.reduce(function(prevlaue , book){
                return prevlaue + book.price*book.number;
            },0)
        }
    },
    methods:{
        btnclick(i){
            this.books.splice(i,1);
        },  
        increment(index){
            return this.books[index].number++;
            // Vue.set(this.number,index,num)
            // 行不通
            // return this.number.splice(inedx);
        },
        decrement(index){
            return this.books[index].number--;
            // Vue.set(this.number,index,num)
            // 行不通
            // return this.number[index]--;
        },
        
        
    }
})

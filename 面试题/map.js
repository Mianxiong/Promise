const array = ['1', '2', '3'].map(parseInt)
console.log(array)
//等价于
const array2 = ['1','2','3'].map((item,i,arr)=>{
    return parseInt(item,i,arr)
    //parseInt('1',0,arr) =>1
    //parseInt('2',1,arr) =>NaN 1进制里面没有2
    //parseInt('3',2,arr) => NaN  2进制里面没有3
})
console.log(array2)

const array1 = ['1','2','3'].map((item,i,arr)=>{
    return parseInt(item)
})
console.log(array1)

const array3 = ['1','2','3'].map((item,i,arr)=>parseInt(item,i,arr));
console.log(array3)
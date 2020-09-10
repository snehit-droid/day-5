const num = [2,3,4,5,34,23,12,64];
//Print odd numbers in an array
const oddnum = num.filter((num)=>{return num%2!=0;});
oddnum.forEach((num)=>{console.log(num);})
//Sum of all numbers in an array
const total = num.reduce((CurrentTotal, item)=>{
    return item + CurrentTotal
},0);
console.log(total);
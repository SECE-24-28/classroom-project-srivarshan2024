let samp=(a,b)=>a+b;
console.log(samp(10,50));

let arr=[10,20,30]
let [a,b,c]=arr;
console.log(a+" "+b+" "+c)

let srr1={na:"varshan",age:50};
let {na,age}=srr1;
console.log(na+" "+age);
let {na:Name,age:Age}=srr1;
console.log(Name+" "+Age);

// console.log("one");
// setTimeout(()=>{
//     console.log("two")
// },2000)
// console.log("three");

console.log("IN ORDER")
console.log("p 1");

setTimeout(()=>{
    console.log("p 2")
    setTimeout(()=>
    {
      console.log("p 3");
    },2000)
},2000)



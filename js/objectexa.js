let mob ={brand:"Samsung",color:"purple"};

console.log(mob);

mob.price=25000;
console.log(mob);

mob.price=40000;
console.log(mob);

let student ={sna:"Praveen",age:19,demo:function(){
    console.log("hi , I am "+this.sna);
}}

student.demo();

let student2 ={sna:"Praveen",age:19,samp:()=>{
    console.log("hi , I am "+this.sna); //undefined
}}

student2.samp(); 

let student3=[{sna:"Praveen",age:19,sma:90,fee:true},
    {sna:"Ajith",age:18,sma:98,fee:false},
    {sna:"Surya",age:17,sma:30,fee:true}
]

console.log(student3);
student3.forEach((stu)=>{
    console.log(stu.sna+" "+stu.sma)
}
);

let newStu = student3.map((stu)=>{
    return {na:stu.sna,ma:stu.sma +2};
})

console.log(newStu);

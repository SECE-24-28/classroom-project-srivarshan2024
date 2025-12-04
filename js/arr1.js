let arr=["Arun","vijay","amar"];

console.log(arr.toString());

arr.unshift("vijay");
console.log(arr);


delete arr[0];
console.log(arr);

arr.pop()
console.log(arr);

arr.push("kumar")
console.log(arr);

arr.shift()
console.log(arr);

arr.splice(1,0,"suresh")
console.log(arr);

arr.splice(2,1)
console.log(arr);

let newarr=arr.slice(1,3)
console.log(newarr);

let index=arr.indexOf("kumar")
console.log(index);

arr.sort()                          
console.log(arr);   
//This code will not execute , only for understanding

/*
what is higher order function?
A higher-order function is a function that can take another function as an argument, 
return a function, or both. It's a powerful concept in JavaScript that helps in writing clean, 
reusable code—common examples include map, filter, and reduce.
*/ /*** */

const values=[1,2,3,4];

// const area=function(radius){
//     return Math.PI * radius * radius;
// }

// const diameter=function(radius){
//     return 2* radius;
// }

// const circumference=function(radius){
//     return 2 * Math.PI * radius;
// }

// Array.prototype.calculate=function(logic){
//     let output=[];
//     for(let i=0;i<this.length;i++){
//         output.push(logic(this[i]));
//     }
//     return output;
    
    
// }
// const fil=values.filter(function(x){
//     if(x>1){
//         return x;
//     }
// })
// console.log(fil);


//console.log(values.map(area));
// function maxi(val){
//     let ans=0;
//     for(let i=0;i<val.length;i++){
//         if(val[i]>ans){
//             ans=val[i];
//         }
//     }
//     return ans;
// }
// Same maximum function in the reduce
const an1=values.reduce((acc,curr)=>{
    if(acc<curr){
        acc=curr;
    }
    return acc;
},0);
console.log(an1)

//console.log(maxi(values));



// console.log(values.map(function(x){
//     return x+1;
// }))

// console.log(values.calculate(area));


// console.log(calculate(values,area));
// console.log(calculate(values,diameter));
// console.log(calculate(values,circumference));




const arr=[5,4,3,2,1]
console.log("For loop")
arr.forEach(function(val,ind){
    console.log(val,ind);
})
console.log("Reduce");
let a=arr.reduce(function(ans,curr){
    ans+=curr;
    return ans;
},0
)
console.log(a);
console.log("filter");
let b=arr.filter((val)=>val%2==0);
console.log(b);
console.log("map");
let c=arr.map(function(val){
    val*=2;
    return val;
})
console.log(c);
console.log("without using Higher Order Functions")
function mul(val){
    return val*2;
}

let result=[];
for(let i=0;i<arr.length;i++){
    result.push(mul(arr[i]));
}
console.log(result);





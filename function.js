const add=function(num1,num2){
    
    result=num1+num2;

    return result
    
}

const result1=add(2,3)
console.log(result1);

//rest oparator 
const claNum=function(val1, val2,...num){
     return num
}
console.log(claNum(39,34,4,5,3,2,2));


//handlel obj

const userInfo={
    name:'arnob',
    city:'dhaka'
}

const handelObject=function(anyObejct){
    return `my name ${anyObejct.name} and i live in ${anyObejct.city}`
}

console.log(handelObject(userInfo));

//handel array
const nameArray=['arnob','jahid']
const handelArray=function(getArray){
    return getArray[1];
}

console.log(handelArray(['sondha','sokal']));

//lot's of soop duscusion

//arrow function
//
const addNum= (num1,num2)=>{
    return num1+num2
}
console.log(addNum(2,3));

const multiNum=(num1,num2) => (num1*num2)
console.log(multiNum(2,3));

//IIFE ==> stands for Immediately Invoked Function Expression

(function(){
    console.log("hello I am IIFE");
})();

((num1,num2)=>{
    console.log(num1+num2);
})(2,3)
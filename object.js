//object
//---------------------------------------
const sym=Symbol("key")
const userInfo={
     name:'arnob',
     age:23,
     addresss:[
        {presetAddresss:{
            road:'9',
            block:'d',
            city:'dhaka'
        },},
        
        { parmanentAddress:
            {
            city:'rangpur'}
        }
     ],
     isLogin:true,
     [sym]:'key2'


}
// userInfo.abc=function(){
//     console.log(`hello i am function${this.isLogin}`);
// }

// console.log(userInfo)
// console.log(userInfo["name"]);

//----------------------------------

const obj1={a:1,b:2};
const obj2={c:3,d:4};

const total ={...obj1,...obj2}

console.log(total);
console.log(Object.keys(obj1));
console.log(Object.entries(obj1));
console.log(userInfo.addresss);

//destucturing
const {name,age}= userInfo

console.log(name,age);
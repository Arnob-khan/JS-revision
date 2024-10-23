// const number=[1,2,3,4,5]
// // let arrayIndexNumbr=number[3];
// // arrayIndexNumbr=88
// number[3]=99;
// console.log(number);

//------------------------------------------//

//push,pop,shift,unshift

//----------------------------------------

// const name=['a','b','c']
// const value1=name.push('d');
// console.log(value1);
// const value2=name.pop();
// console.log(value2);

//-----------------------------------------
//includes, isArray

// const names=['jahid','rahim','karim']
// const age=[22,34,34];

// if(names.includes('rahim')){
//     console.log('its includes');
// }
// else console.log('not includes');

// console.log(names.indexOf('rahim'));
// console.log(Array.isArray(names));

// names.splice(3,0,'khan',);
// console.log(names);

// const arryCollections=names.concat(age);
// console.log(arryCollections);


// const v=names.join("::")
// console.log(v);

// const slice =names.slice(0,1)
// console.log(slice);

//array new topics
//-------------------------------------/
const names1=['arnob','jahid','roni','khan','anik'];
const names2=['anika','atoshi','arfina','aurin'];
const age=[27,23,30,28,25,[23,23,32,[324,23,3]]];

//using sparate 
const allNames=[...names1,...names2];
console.log(allNames);

//using flat array inside array to single array
console.log(age.flat(1));

const createStringToNewArray= Array.from("md arnob");
//using objet to array
const createObjetToNewArray=Array.from(Object.keys({name:"arnob"}));
//using variable to array
let a=10;
let b=20;
let c=30;
const variableArray=Array.of(a,b,c);
console.log(createStringToNewArray,createObjetToNewArray,variableArray);
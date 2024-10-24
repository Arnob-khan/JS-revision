const languages =['bangla','english','hindi','japanis'];
const proLanguages={
       js:'javascript',
       cpp:'c++',
       rb:'ruby',
       py:'python'
}

//for of loop using maximum time in array 
//because it's given value not key.

for(const language of languages ){
    console.log(language);
}


//for in loop using maximum time in object 
//because it's given key not value.

for(const proLanguage in proLanguages){
    console.log(proLanguage);
}

//foreach loop
//foreach loop does not  retern any value

const userInfo=[
    {
        name:'arnob',
        city:'dhaka'
    },
    {
        name:'jahid',
        city:'bogura'
    },
    {
        name:'sayad',
        city:'feni'
    }
]

const information=userInfo.forEach((items)=>{
    // console.log(items);
    console.log(items.name);
    console.log(items.city);
})
//forEach does not reture value
console.log(information);


//---filtter--
//always return value
//using codition in filter method
//using store in variable
//{}using always type return
//if the condition is true then this mehtod is working

const info=userInfo.filter((n)=>n.name==="arnob")
console.log(info);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

 let bookInfo= books.filter((book)=>book.publish>=2000)
 console.log(bookInfo);
 bookInfo=books.filter((book)=>{
   return book.genre==="History" && book.edition<=2000
})

console.log(bookInfo);


//-----map-----
//return a new array
//map does not need condition turn value any oparation can give a new array.
const nums=[1,2,3,4,5,6,7,8,9,10];

// const numbers=nums.map((num)=>num+1 )
// console.log(numbers);

//chaining /multipale map or filter 
const calNumbers=nums.map((num)=>num*10)
                     .map((num)=>num+1)
                     .filter((num)=>num>=50);

console.log(calNumbers);



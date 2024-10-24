//reduce() using for array total value
//reduce has accumulator and crurent value and initial valu
//initial value is asing in end of call back function

const numbers=[1,2,3,4,5,6,7,8,9,10];

const totalValue=numbers.reduce((acumutor,currentValue)=>acumutor+currentValue,0)

console.log(totalValue);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const totalPrice=shoppingCart.reduce((acc,item)=>(acc+item.price),0);
console.log(totalPrice);

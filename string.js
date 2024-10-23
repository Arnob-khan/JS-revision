const listOfName="md sayad ebne jahid khan arnob";
const word=listOfName.slice(2);
const alpha=listOfName.split('')


//reverse string
let temp=0;
for(i=0,j=alpha.length-1; i<j;i++,j--){
    temp=alpha[i];
    alpha[i]=alpha[j];
    alpha[j]=temp;
    //console.log(temp);
}
console.log(alpha);
//for of

let names =['arnob','jahid','sayad','khan'];
for(const name of names){
    console.log(name);
}

//while loop
let sum=0;
let num=1;
while(num<=5){
    console.log("looping",num);
    sum+=num
    num++
    
}
console.log( sum);

//for_loop
let total =0;
for(i=0;i<=10;i++){
    total=total+i

}
console.log(total);

for(i=1; i<=10; i++){
    if(i===5){
        console.log("break");
        break
    }
    for(j=1; j<=10; j++){

        if(j===10){
            continue
        }
        
        console.log(i + " * " +j +' = ' +i*j);
    }
}

//do while loop;
let n=0;
do{
    console.log(n);
    n++
}
while(n<=10);

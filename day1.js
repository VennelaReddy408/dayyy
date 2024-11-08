// print numbers from -1 to - num
num=prompt("enter a number: ")
for(i=-1;!(i<=num);i--){
    console.log(i)

}
// print numbers from -num to -1
num=prompt("enter a number")
for(i=num;!(i>=0);i++){
    console.log(i)
}



// print sum of even digits 
num=prompt("enter a number: ")
sum=0
if (num>0){
    for(i=1;i<num.length;i++)
        if(num[i] % 2 == 0)
            sum=sum+Number(num[i])
}


console.log(sum)


// print sum od odd digits
num=prompt("enter a number: ")
sum=0
if(num>0){
    for(i=0;i < num.length;i++)
    if(!(num[i] % 2 == 0)){
        sum=sum+Number(num[i])
    }
    
}
console.log(sum)

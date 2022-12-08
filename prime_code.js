   function prime(number){
       let counter=0;
       for(let i=1;i<=number;i++){
           if(number%i==0){
               counter++;
           }
       }
       if(counter==2){
           return (number,"is prime");
       }else{
           return (number,"not a prime");
       }
   }
let number=13;
console.log(prime(number));//output
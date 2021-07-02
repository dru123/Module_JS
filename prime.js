let a=2;
let b=20;
for(let i=a;i<=b;i++){
 let flag=true;
 for(let j=2;j*j<=i;j++){
     if(i%j==0){
         flag=false;
     }
 }
if(flag==true){
    console.log(i);
}
}

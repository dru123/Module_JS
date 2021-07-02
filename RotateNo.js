let a=98985;
let k=2;
let temp=a;
let count=0;
while(temp>0){
    temp=Math.floor(temp/10);
    count++;
}
console.log(count);
let mul=1;
let div=1;
for(let i=0;i<count;i++){
     if(i<k){
         div=div*10;

     }else{
         mul=mul*10;
     }

}

let q=Math.floor(a/div);
console.log(q);
let rem=Math.floor(a%div);
console.log(rem);
let res=rem*mul+q;
console.log(res);

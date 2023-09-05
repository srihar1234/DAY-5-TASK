console.log("1)iterate json data on for,foreach,for in, for of loops");
let obj = {
    n1 : 1,
    n2 : 2,
    n3 : 3,
    n4 : 4,
    n5 : 5
};
let value = Object.values(obj);
let key = Object.keys(obj);

console.log("----------for loop----------");

for(let i=0;i<key.length;i++){
  console.log(`key:${key[i]}
               value:${value[i]}`);
}


console.log("-------forEach loop---------");

key.forEach((v,i,a)=>{
   console.log(`key=${v}
                value=${obj[v]}`);  
});


console.log("---------for in loop------------");

for(k in obj){
  console.log(`keys:${k}
               value:${obj[k]}`);
}


console.log("---------for of loop------------");

for (objkey of key) {
  console.log(`keys:${objkey}
               value:${obj[objkey]}`);
}



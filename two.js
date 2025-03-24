let arr=[60,70,10,20,30,40];
let max = arr[0],min = arr[0];
for(let i=0;i<arr.length;i++){
    if(max<arr[i]){
        max = arr[i];
    }
}
console.log("maximum number: ",max);


for(let i=0;i<arr.length;i++){
    if(min>arr[i]){
        min = arr[i];
    }
}
console.log("minimum number: ",min);
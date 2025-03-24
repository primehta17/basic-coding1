let arr=[10,15,10,40];

function disarr(arr){
    let distinct =[],seen={};
    for(let i=0;i<arr.length;i++){
        let abc = arr[i];
        if(seen[abc]==undefined){
            distinct.push(abc);
            seen[abc]=1;
        }   
    }
    return distinct;
}
console.log(disarr(arr));
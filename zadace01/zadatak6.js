let array = [1,3,5,7,8];

function reverse(array){
    let reverseArray=[];
    for(let i=array.length-1; i>-1; i--){
        reverseArray.push(array[i]);
    }
        return reverseArray;
}
console.log(reverse(array));
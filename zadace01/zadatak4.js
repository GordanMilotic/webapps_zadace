let array = [1,2,3,4,5,6,7,8,9,10,11,12,30];
let length=array.length;
function provjeri(array){
    for(let i=0; i<length; i++){
        if(array[i]%3==0) console.log(array[i])
    }
}
provjeri(array)
function linearSearch(arr, element){
    for(let i=0; i<arr.length; i++){
        if(arr[i] === element){
            return i
        }else{
            return -1
        }
    }
}


let search = linearSearch([2, 5, 6, 2, 4, 7, 9, 8, 0], 2)

console.log(search)
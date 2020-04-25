function binarySearch(arr, element, start, end){
    let mid = Math.floor((start + end)/2)
    while(mid > 0){
    if(arr[mid] < element){
        return binarySearch(arr, element, mid+1, end)
    }else if (arr[mid] > element){
        return binarySearch(arr, element, 0, mid-1)
    }else if(arr[mid] === element){
        return mid
    }else{
        return -1
    }
}
}


let array = [1, 2, 4, 5, 6,  8, 9, 9]
let index = binarySearch(array, 3, 0, array.length)
console.log(index) 
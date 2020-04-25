
let insertionSort = (arr)=>{
    for(let i=1; i<arr.length; i++){
        let currentVal = arr[i]
        for(var j=i-1; j>=0 && arr[j] > currentVal; j--){
            arr[j+1] = arr[j]
        }
        arr[j+1] = currentVal
    }
    return arr
}



const arr = [2, 1, 6, -1, 0, 4, 2, 8, 4,  9, 7]

let sortElement = insertionSort(arr)

console.log(sortElement)
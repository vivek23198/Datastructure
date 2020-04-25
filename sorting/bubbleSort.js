// Move largest element at the end 



let bubbleSort = (arr)=>{
    for(let i=arr.length; i>0; i--){
        let noSwaps = true
        for(let j= 0; j< i -1; j++){
            if(arr[j] > arr[j+1]){
                // [arr[i], arr[j]] = [arr[j], arr[i]]
                var temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
                noSwaps = false
            }
        }
        if(noSwaps)  break;
        console.log(arr)
        console.log("One Pass is Completed !!!")
    }
    return arr
}


const arr = [2, 1, 6, -1, 0, 4, 2, 8, 4,  9, 7]

let sortElement = bubbleSort(arr)

console.log(sortElement)
function pivot(arr, start, end){
    const swap = (arr, idx1, idx2)=>{
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    }

 // We are assuming the pivot is always the first element 
 
 let pivot = arr[start]
 let swapIdx = start

 for(let i= start +1; i<=end; i++){
     if(pivot > arr[i]){
         swapIdx ++
         swap(arr, swapIdx, i)
      
     }
 }

// Swap the pivot from the start of the swapPoint 

swap(arr, start, swapIdx)
// console.log(arr)
return swapIdx

}

function quickSort(arr, left=0, right = arr.length -1){
    if(left < right){
        let pivotIndex = pivot(arr, left, right)

        quickSort(arr, left, pivotIndex -1)
        //right
        quickSort(arr, pivotIndex+1, right)
    }
    return arr
}



const arr = [4, 5, -1, 2, 7, 5, 8, 9, 6]
let quickSortElement = quickSort(arr)
console.log(quickSortElement)
// console.log(pivotElement)
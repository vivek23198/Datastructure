let merge = (arr1, arr2)=>{
    let ptr1 = 0
    let ptr2 = 0
    let result = []

    while(ptr1< arr1.length || ptr2 < arr2.length){
        if(arr1[ptr1] < arr2[ptr2]){
            result.push(arr1[ptr1])
            ptr1 ++
        }else{
            result.push(arr2[ptr2])
            ptr2 ++ 
        }
    }
    return result 
}

let mergeSort = (arr)=>{
    if(arr.length <= 1) return arr

    let mid = Math.floor(arr.length / 2)
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))

    return merge(left, right)
}



 let mergeArray = mergeSort([1, 3, 5, 7, 9, 11, 2, 4, 6, 8, 10, 14, 16])
 console.log(mergeArray)
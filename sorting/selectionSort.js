// Move Shortest element at the begining 




// let selectionSort = (arr)=>{

//     for(let i=0; i<arr.length-1; i++){
//         let lowest = i;
//         for(let j = i+1;j<arr.length;j++){
//             if(arr[j] < arr[lowest]){
//                 lowest = j
//             } 
//         } 
//         var temp = arr[i]
//         arr[i] = arr[lowest]
//         arr[lowest] = temp
//     }
//     return arr 
// }



let selectionSort = (arr)=>{
    const swap = (arr, idx1, idx2)=> 
        ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]])
    for(let i=0; i<arr.length-1; i++){
        let lowest = i;
        for(let j = i+1;j<arr.length;j++){
            if(arr[j] < arr[lowest]){
                lowest = j
            } 
        } 
        swap(arr, i, lowest)
    }
    return arr 
}









const arr = [2, 1, 6, -1, 0, 4, 2, 8, 4,  9, 7]

let sortElement = selectionSort(arr)

console.log(sortElement)
function getDigit(num, i){
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num){
    if(num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigit(nums){
    let maxDigits = 0
    for(let i=0; i<nums.length; i++){
        maxDigits = Math.max(maxDigits, digitCount(nums[i]))
    }
    return maxDigits
}

function radixSort(nums){
    let maxDigitCount = mostDigit(nums)
    console.log(maxDigitCount)
}


function radixSort(nums){
    let maxDigitCount = mostDigit(nums)
    for(let k=0; k<maxDigitCount; k++){
        let digitBuckets = Array.from({length: 10}, ()=> [])
        for(let i=0; i<nums.length; i++){
            let digit = getDigit(nums[i], k)
            digitBuckets[digit].push(nums[i])
        }
        nums = [].concat(...digitBuckets)
    }
    return nums
}



let sortElement = radixSort([23, 345, 54678, -23,  12, 2345, 9852])

console.log(sortElement)
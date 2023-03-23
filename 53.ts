
maxSubArray()

function maxSubArray(nums = [-2,1,-3,4,-1,2,1,-5,4]) {

    var totalSum = 0
    var max = nums[0]

    for(let i = 0; i < nums.length; i++){
        totalSum +=  nums[i] // -2: 1 : -2 : 4 : 3 : 5 : 6 : 1 : 5

        console.log("totalSum", totalSum)
        console.log("max", max) // max: -2 : 1 : 4 : 5 : 6 : 6


        if(totalSum > max) { // 1 >-2
            max = totalSum //max: 1 : 4 : 4 : 5 : 6
        }

        if(totalSum < 0) {
            //throwing away the accumulated left side of the array if sum suddenly becomes less than 0 because you know there is a negative number there that is so large, 
            //it cannot be in the final subarray if you are looking for the maximum sum
            totalSum = 0 // 0 : 0
        }

    } 

    return max

}
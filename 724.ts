var nums = [1,2,3]


var leftTotal = 0, rightTotal = 0, totalSum = 0

for(let i = 0; i < nums.length; i++) {
    totalSum += nums[i]
    console.log("totalSum", totalSum)
}

for (const i in nums) {
        const length = nums.length

    if(length % 2 === 0) {
        
        if(Number(i) < (length/2)) {
            leftTotal += nums[i]
    
        } else if (Number(i) > (length%2)) {
            rightTotal = totalSum - nums[i] - leftTotal
        }

        console.log("leftTotal", leftTotal)
        console.log("rightTotal", rightTotal)

    
        if(leftTotal === rightTotal) {
           
        }
    }
}   
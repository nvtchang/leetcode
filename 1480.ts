var nums = [1,2,3,4]

var sum = []


for (const i in nums) {

    if(Number(i) === 0) sum.push(nums[i])

    else {

        var index = i

        
        const total = nums[i] + sum[Number(index) - 1]   // 

        sum.push(total)

    }
}
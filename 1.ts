twoSum()

function twoSum(nums = [2,7,11,15], target = 9) {
    var sum = []
    var temp = 0

    for(const i in nums) {
        temp = target - nums[i]
        console.log("temp", temp)

        for(const j in nums) {
            if(i !== j) {
                if(temp === nums[j]) {
                    console.log("j", j)
                    sum.push(i, j)
                    console.log("sum", sum)

                    return nums[j]
                }

            }
        }

    }

}
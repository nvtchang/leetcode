var nums = [1,2,3,1]
var temp = []

for (let i = 0; i < nums.length; i++) {

    for(let j = 0; j < nums.length; j++) {
        
        if(i !== j) {

            if(nums[i] === nums[j]) {
                console.log("here")
            }
        }

    }
    
}
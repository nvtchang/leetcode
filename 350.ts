intersect();

function intersect(nums1 = [1,2,2,1], nums2 = [2,2]){

    let arr = []
    let value = nums1[0]
    let value1 = nums2[0]

    if(value === value1) {
        arr.push(value)
    }
    else {
        for(let i = 1; i< nums1.length; i++) {
            value = nums1[i]
        
        }
        for(let j = 1; j < nums2.length; j++){
    
            value1 = nums2[j]   
    
        }
        if(value === value1) arr.push(value1)
    }
    console.log("arr", arr)
    return arr
};
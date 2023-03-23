merge()

function merge(nums1 =[1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3): void {



    var insertPositionOfNums1 = m + n - 1;
    m -= 1;
    n -= 1;
    while (n >= 0) {
        if (nums1[m] > nums2[n]) {
            
            console.log("nums1[m] ", nums1[m] )
            console.log("nums2[n] ", nums1[n] )

            nums1[insertPositionOfNums1] = nums1[m];
            m -= 1;
        } 
        else {
            nums1[insertPositionOfNums1] = nums2[n];
            n -= 1;
        }
        insertPositionOfNums1 -= 1;
    }
    // nums1.forEach(function(item, i) {

    //     if(item === 0) {
    //         nums2.forEach( function(params, j) {
    //             nums1[i] = params
    //             j++
    //         })
    //     }    

    // });

    // console.log("nums1", nums1)
    
}
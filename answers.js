//Write a function called printPositives that takes an array and uses
//the forEach method to print only the positive numbers.

var nums = [1,2,-4,5,-3,-23,21];


function printPositives(theArray){
    var posNum = [];
    nums.forEach(function(number, idx){
        if(number > 0){
            posNum.push(number);
        }
    })
    return posNum
}
console.log(printPositives(nums));


// Similar to the previous exercise, write a function called getPositives that takes
// an array and uses the filter method to return a new array with only the positive 
// numbers.

var nums = [1,2,-4,5,-3,-23,21];

function getPositives(theArray){
    var posNum = [];
    nums.filter(function(number){
        if(number >0){
            posNum.push(number)
        }
    })
    return posNum
}

console.log(getPositives(nums));
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


// Re-do exercise 1 by first filtering the input array, and then printing the numbers
// from the filtered array. Your code will look something like: 
// return arr.filter(...).forEach(...).



function filteredArr(theArray){
    var posArr = [];
    nums.filter(function(num){
        return num >= 0;
    }).forEach(function(num){
      posArr.push(num);
    })
    return posArr
}
console.log(filteredArr(nums));


// Write a function called filterArray that takes a callback function and an array
// as arguments. Your filterArray function should return a new array that contains
// only the elements where the callback function returns true.

function filterArray(callBack, theArray){
    return nums.filter(checkTrue);
}

function checkTrue(number){
    return number>=0
}
    
console.log(filterArray(nums));

// Write a function called longestWord that takes a string as argument, and returns
// the longest word in the string. You should use Array.prototype.reduce to do
// your work.

// Hint: You can use String.prototype.split to split the string into an array of words.

var phrase = "go get me my trumpet";

function longestWord(string){
    string = string.split(' ');
   return string.reduce(function(prevWord, word){
       if(prevWord > word){
           return prevWord;
       }
          else{
              return word;
          }
    })
    
}

console.log(longestWord(phrase));


// Write a function called countVowels that takes a string and returns the number
// of vowels in the string. You should use Array.prototype.reduce to do your work.

// For the string "The quick brown fox", the output should be 5 because there is 
// one e, one u, one i and two os.

// Hint: You can use String.prototype.split again. There is a way to use it to split 
// a string by character. Try to Google it :)

// Hint 2: You can create an array of vowels and use Array.prototype.indexOf to check
// if the current letter is a vowel.

function countVowels(string){
    string = string.split("");
    var vowels = ["a","e","i","o","u","y"];
    return string.reduce(function(prevLetter, letter){
        if(vowels.indexOf(letter) > -1){
            prevLetter+=1
        }
        return prevLetter;
    }, 0)
}

console.log(countVowels("The quick brown fox"));
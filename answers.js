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


// Write a function called highLow that takes an array of numbers, and returns an
// object with a property highest containing the highest number, and a property 
// lowest containing the lowest number, using Array.prototype.reduce.

// For example, starting with [1, -10, 20, 40, 5], your function should return 
// {highest: 40, lowest: -10}.

// Hint: Javascript has a special value called Infinity, which is higher than any
// other number. See if you can initialize your reduce accumulator with 
// Infinity and -Infinity :)

function highLow(numArr){

    return numArr.reduce(function(prevNum, num){
        if(num > prevNum.highest){
            prevNum.highest = num;
        }
        if(num < prevNum.highest){
            prevNum.lowest = num;
        }
        return prevNum;
    }, {
        highest: -Infinity,
        lowest: Infinity
    })

}
console.log(highLow([6,7,4,1,8,9]));

// Expanding on exercise 6, write a function called highLowTwo that takes an array
//of numbers, and returns the higest, second highest, lowest, and second lowest numbers.

// For example, starting with [1, -10, 20, 40, 5], your function should return:

function highLowTwo(numArr){
        return numArr.reduce(function(obj, num){
            
        if(num > obj.highest){
           
            obj.secondhighest = obj.highest;
            
             obj.highest = num;
        }
        if(num < obj.highest){
            
            obj.secondlowest = obj.lowest;
            
            obj.lowest = num;
        }
        return obj;
    }, {
        highest: -Infinity,
        secondhighest: -Infinity,
        lowest: Infinity,
        secondlowest: Infinity
        
    })

}
console.log(highLowTwo([6,7,4,1,8,9]));


//Write a function called countChars that takes a string, and returns an object
//where the keys are letters, and the value is the number of times that letter appears.
// For example, with input "hello world", the output should be:

// {
//   "h": 1,
//   "e": 1,
//   "l": 3,
//   "o": 2,
//   "w": 1,
//   "r": 1,
//   "d": 1
// }
// NOTE: Unlike arrays, objects don’t have any ordering on them. When you print 
//your object on the console, your keys may be displayed in a different order, and
//it does not matter.

function countChars(string){
    return string.split("").filter(function(c){return c !== " ";}).reduce(function(obj, letter){
        if(obj[letter]){
            obj[letter] += 1;
        }

        else {
            obj[letter] = 1
        }
        return obj;
    }, {})
}
console.log(countChars("Hello World"));


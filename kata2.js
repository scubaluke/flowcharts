const obj = {
  who: ['your', 'believe', 'concentrate,', 'breath,', 'relax', 'close your eyes'],
  affirmation: ['power', 'love', 'strength', 'happiness', 'life'],
  ending: ['is inside you', 'will come', 'is meant to be', 'is the universe'],

  getRandom(key) {
    const item = this[key];
    const rand = Math.floor(Math.random() * item.length);
    return item[rand];
  },

  generateAffirmations() {
    const randomWho = this.getRandom('who');
    const randommiddle = this.getRandom('affirmation');
    const ending = this.getRandom('ending');
    return `${randomWho} ${randommiddle} ${ending}`;
  },
};

function $(selector) {
  return document.querySelector(selector);
}
$('.text').textContent = obj.generateAffirmations(obj);

// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];

// Add your functions below:
function validateCred(arr) {
  const holdResult = [];
  const noLastDig = [...arr];
  const hold = noLastDig.pop();
  noLastDig.reverse();

  for (let i = 0; i < noLastDig.length; i += 1) {
    if (i % 2 === 1) {
      if ((noLastDig[i] * 2) > 9) {
        holdResult.push((noLastDig[i] * 2) - 9);
      } else {
        holdResult.push(noLastDig[i] * 2);
      }
    } else {
      holdResult.push(noLastDig[i]);
    }
  }
  let result = holdResult.reduce((a, b) => a + b, 0);
  result += hold;
  if (result % 10 === 0) { return true; } return false;
}

// console.log(validateCred(mystery5));

const twoSum = function (nums, target) {
  let i;
  let j;
  for (i = 0; i < nums.length; i++) {
    for (j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        const result = [i, j];
        return result;
      }
    }
  }
};
// console.log(twoSum([2, 7, 11, 15], 9));
// console.log(twoSum([3, 2, 4], 6));

const isPalindrome = function (x) {
  const hold = x.toString().split('').reverse().join('');
  if (hold == x) {
    return true;
  }
  return false;
};
// console.log(isPalindrome(121));
// console.log(isPalindrome(1211));

// const romanToInt = function (s) {
//   const theRomNum = [['I', 1], ['V', 5], ['X', 10], ['L', 50], ['C', 100], ['D', 500], ['M', 1000]];
//   // const I = 1; const V = 5; const X = 10; const L = 50; const C = 100; const D = 500; const M = 1000;
//   let hold;
//   const rom = s.split('');
//   console.log(rom);
//   // for (num of rom) {
//   //   console.log(num);
//   for (let j = 0; j < rom.length; j++) {
//     console.log(rom[j]);

//     for (let i = 0; i < theRomNum.length; i++) {
//       console.log(theRomNum[i][0]);
//        hold = rom[j];
//       if (rom[j] == theRomNum[i][0]) { hold = theRomNum[i][1]; }
//     }
//     hold +
//   }
//   // if (num )
// };

const romanToInt = function (s) {
  const theRom = {
    I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000,
  };
  let result = 0;
  s.split('').forEach((num, i) => {
    // console.log(theRom[num]);
    // console.log(theRom[s[i + 1]]);
    if (theRom[num] < theRom[s[i + 1]]) result -= theRom[num]; else result += theRom[num];
  });
  return result;
};
// console.log(romanToInt('III'));
// console.log(romanToInt('XVI'));
// console.log(romanToInt('IV'));
// console.log(romanToInt('MCMXCIV'));

const runningSum = function (nums) {
  const hold = [];
  for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]);
    // nums[i] ++ nums[i - 1] || 0;
  }
  return nums;
};

// console.log(runningSum([1, 2, 3, 4, 5]));
const kidsWithCandies = function (candies, extraCandies) {
  const withExtra = candies.map((kid) => kid + extraCandies);
  const findLargest = candies.sort((a, b) => b - a);
  console.log(findLargest);
  console.log(withExtra);
  const largest = findLargest[0];
  const result = withExtra.map((el) => el >= largest);
  return result;
};

// console.log(kidsWithCandies([1, 2, 3, 3, 5, 4], 3));
// console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));

const shuffle = function (nums, n) {
  const result = [];
  for (let i = 0; i < nums.length / 2; i++) {
    // console.log(nums[i]);
    // console.log(nums[n]);
    result.push(nums[i]);
    result.push(nums[n]);
    n++;
  }
  return result;
};

// console.log(shuffle([1, 2, 3, 4, 4, 3, 2, 1], 4));
// // Output: [1,4,2,3,3,2,4,1]

const defangIPaddr = function (address) {
  const result = address.replace(/\./g, '[.]');
  return result;
};
// console.log(defangIPaddr('255.100.50.0'));

const numIdenticalPairs = function (nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      console.log(i, j);
      if (nums[i] == nums[j] && i < j) {
        count += 1;
      }
    }
  }
  return count;
};

// console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]));

const numJewelsInStones = function (J, S) {
  let count = 0;
  for (let i = 0; i < J.length; i++) {
    for (let j = 0; j < S.length; j++) {
      if (J[i] === S[j]) {
        count += 1;
      }
    }
  }
  return count;
};
// console.log(numJewelsInStones('aA', 'aAAbbbb'));

const numberOfSteps = function (num) {
  let count = 0;
  let workWith = num;
  while (workWith > 0) {
    if (workWith % 2 === 0) {
      workWith /= 2;
      count += 1;
    } else {
      workWith -= 1;
      count += 1;
    }
  }
  return count;
};
// console.log(numberOfSteps(14));
// console.log(numberOfSteps(8));

const restoreString = function (s, indices) {
  const result = [];
  for (let i = 0; i < indices.length; i++) {
    // result = indices[i];
    console.log(indices[i], i);
  }
};

// console.log(restoreString('codeleet', [4, 5, 6, 7, 0, 2, 1, 3]));

const fizzBuzz = function (n) {
  const result = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      result.push('FizzBuzz');
    } else if (i % 3 == 0) {
      result.push('Fizz');
    } else if (i % 5 == 0) {
      result.push('Buzz');
    } else {
      result.push(i.toString());
    }
  }
  return result;
};
// console.log(fizzBuzz(15));
function squareSum(numbers) {
  // const res = 0;
  // for (const num in numbers) {
  //   res += (num * num);
  // }
  // return res;
  return numbers.reduce((total, num) => (num * num) + total, 0);
}
// console.log(squareSum([1, 2, 3, 4, 5]));

var smallerNumbersThanCurrent = function(nums) {
  let result = [];
  let count = 0;
    // for (let num of nums) {
    //   console.log(num);
    //   for (let n of nums) {
    //     console.log(n, num);
    //     if (num > n) {
    //       console.log('object');
    //        count += 1

    //     }
    //   }
    //  result.push(count)
    //  count = 0;
    //  return result

    // }

    for (let i = 0; i < nums.length; i++){
      console.log(nums[i]);
      for (let j = 0; j < nums.length; j++){
        console.log(nums[i],nums[j]);
        if (nums[i] < nums[j] ) {
          count++
        }
      }
    }
    result.push(count);
    count = 0;
    return result;
};
// console.log(smallerNumbersThanCurrent([8,1,2,2,3]));

// function reverseInt(n) {
//   let res = []
//   if (Math.sign(n) === -1){
//    res = n.toString().split('').reverse()
//    res.unshift('-')
//   res.pop()
//   } else { res = n.toString().split('').reverse()}
//   return parseInt(res.join(''))
// }
function reverseInt(n) {
  let res = n.toString().split('').reverse().join('')
  return parseInt(res) * Math.sign(n)
}
// console.log(reverseInt(12));
// console.log(reverseInt(192));
// console.log(reverseInt(500));
// console.log(reverseInt(-56));
// console.log(reverseInt(-90));


function maxChar(str) {
  const chars = {};
  let max = 0;
  let maxChar = '';
  for (let char of str) {
    chars[char] = chars[char] + 1 || 1;
  }
  for (let char in chars) {
    if (chars[char] > max) {
      max = chars[char];
      maxChar = char
    }
  }  
return maxChar
}
// console.log(maxChar('hello There'));
// console.log(maxChar('welllllllcome'))
// console.log(maxChar('123333hithere'))

function squareSum(numbers){
  let squared = 0;
  for (let num of numbers) {
    squared += (num * num)
  }
  return squared
}

// console.log(squareSum([0, 3, 4, 5]));

const  setAlarm = (employed, vacation) => employed && !vacation;

// console.log(!setAlarm(false, true));
// console.log(setAlarm(true, false));

function arrayPlusArray(arr1, arr2) {
const one = arr1.reduce((accum, num) => accum + num)
const two = arr2.reduce((accum, num) => accum + num)
return one + two;
}
// console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));

function arr(n) {
  const result = [];
  for (let i =0; i < n; i++) {
  result.push(i)
  }
  return result
}
// console.log(arr(51));

function index(array, n){
    let result = Math.pow(array[n], n);
   return isNaN(result) ? - 1 : result
}

// console.log(index([1, 2, 3, 4],2));
// console.log(index([0, 1],0));
// console.log(index([1, 2],3));
// console.log(index([7,0,4,-6,-4],1));

function warnTheSheep(queue) {
  let hold;
for (let i = 0; i < queue.length; i++) {
  if (queue[i] == 'wolf') {
    hold = queue.length - i +-1;
  }  
}
  return hold > 0 ? `Oi! Sheep number ${hold}! You are about to be eaten by a wolf!` : "Pls go away and stop eating my sheep"
}
// console.log(warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"]))
// console.log(warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep",]))
// console.log(warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep",'wolf']))

function past(h, m, s){
const seconds = (h*60*60)+ (m*60) + s;
return seconds * 1000

}
// console.log(past(0,1,1));//61000

const areYouPlayingBanjo = (name) => name.split('')[0].toUpperCase() == "R" ? `${name} plays banjo` : `${name} does not play banjo`


// console.log(areYouPlayingBanjo("Rikke"));
// console.log(areYouPlayingBanjo("rikke"));
// console.log(areYouPlayingBanjo("ikke"));
// console.log(areYouPlayingBanjo("Martin"));

const litres = (time) => Math.floor(time*.5)

// console.log(litres(1.4));
// console.log(litres(12.3));

// const invert = (array) => array.map(item => Math.sign(item) === 1 ? item * -1 : Math.abs(item));
const invert = array => array.map(num => -num);

// console.log(invert([1,2,3,4,5]));
// console.log(invert([1,2,-3,-4,5]));

function summation(num) {
  let result = 0;
  for (let i = 1; i < num +1; i++) {
    result += i
    console.log(result);
  }
  return result;
}
  // console.log(summation(8));

  function generateRange(min, max, step){
    console.log(min,max,step);
    // for (let i = min; i < max; i + step){
    //   console.log(i);
    // }
  }
 // console.log(generateRange(2, 10, 2));

 function fizzyBuzz(n) {
   for (let i = 1; i < n+1; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      console.log('fizzbuzz');
    } else if (i % 5 === 0){
      console.log('buzz');
    } else if (i % 3 === 0) {
      console.log('fizz');
    } else {
      console.log(i);
    }
   }
 }
//  fizzyBuzz(20)

function chunk(array, size) {
  let result = [];
  for (let element of array) {
    let last = result[result.length -1]
    if (!last || last.length === size) {
      result.push([element])
    } else {
      last.push(element)
    }
  }
  return result;
}
// console.log(chunk([1,2,3,4], 2));
// console.log(chunk([1,2,3,4,5,6,7,8,9,], 4));

function makechunks(arr, num) {
let chuncked = [];
let index = 0;
while(index<arr.length){
  chuncked.push(arr.slice(index, index+num))
  index += num
}
return chuncked
}
// console.log(makechunks([1,2,3,4], 2));
// function anagrams(stringA, stringB) {

// const objA = buildMap(stringA)
// const objB = buildMap(stringB)

// if (Object.keys(objA).length !== Object.keys(objB).length) {
//   return false
//   } 
//   for (let char in objA) {
//     if (objA[char] !== objB[char])
//     return false;
//   }
//   return true;
// }
 
// function buildMap(stringToMap) {
//   const chars = {};
//   for (let char of stringToMap.replace(/[^\w]/g, '').toLowerCase()) {
//     chars[char] = chars[char] + 1 || 1
//   }
//   return chars
//   }

// function anagrams(stringA, stringB) {
//   if (sortStrings(stringA) == sortStrings(stringB)){
//     return true;
//   } else {return false}
// }
const anagrams = (stringA, stringB) => sortStrings(stringA) == sortStrings(stringB);

function sortStrings(string) {
  console.log(string.split(''));
   console.log(Array.from(string.replace(/[^/w]/g, '').toLowerCase()).sort().join(''));
  return Array.from(string.replace(/[^/w]/g, '').toLowerCase()).sort().join('')
}
// console.log(sortStrings('Hello'));

// console.log(anagrams('rail SafeTy!', 'fariy Tales'));

// function capitalize(str) {
//   let words = [];
//  (str.split(' ').forEach(word => {
//     const first = word[0].toUpperCase();
//    const rest = (Array.from(word.slice(1)))
//   words.push(first.concat(rest).toString().replace(/,/g, ''));
//        }
//   ));
// return words.join(' ');
// }

function capitalize(str) {
  let words = [];
 (str.split(' ').forEach(word => {
   words.push(word[0].toUpperCase() + word.slice(1)) ;
       }
  ));
return words.join(' ');
}

// console.log(capitalize('this is the string, to capitalize'));
// console.log(capitalize('archie is a crazy dog'));

// function steps(n) {
//   for (let row = 0; row < n; row++) {
//     let stair = ''
//     for(let col = 0; col < n; col++) {
//      if (col <= row) {
//        stair += '#'
//      } else {
//        stair += ' '
//      }
//     }
//     console.log(stair);
//   }
// }

// steps(3)

// function steps(num) {
// for (let col = 0; col < num; col++) {
//   let stair = '';
//   for (let row = 0; row < num; row++)
//   if (col >= row) {
//     stair += '#'
//     } else if (col <= row) {
//     stair += ' '
//      }
//      console.log(stair);

//   }
// }
// steps(3)

// function steps(n, row = 0, stair = '') {
//  if (n === row) {
//    return
//  }

//  if (n === stair.length) {
//    console.log(stair)
//    return steps(n, row + 1)
//  }
//  stair.length <= row ? stair += '#' : stair += ' '
//  steps(n, row, stair)
//   }
//   steps(3)

function pyramid1(n) {
  const midpoint = Math.floor((2 * n - 1) / 2)
for (row = 0; row < n; row++) {
  let level = '';
  for (columns = 0; columns < ((n * 2) - 1); columns++) {
      if (midpoint - row <= columns && midpoint + row >= columns) {
        level += '#'
      } else {
        level += ' '
      }
    }
    console.log(level);

  }
}
// pyramid1(3)
// RECURSION 
function pyramid(n, row = 0, level = '') {
  if (row === n) {
    return;
  }
  if (level.length === 2 * n -1){
    console.log(level);
    return pyramid(n, row + 1)
  }
  const midpoint = Math.floor((2*n-1)/2)
  let add;
  if (midpoint - row <= level.length && midpoint + row >= level.length){
      add = '#'
  } else {
    add = " "
  }
  pyramid(n, row, level + add)
}


// pyramid(1)
// pyramid(2)
// pyramid(3)

function vowels(str) {
   const splitStr = str.split('');
   const vowels = ['a', 'e', 'i', 'o', 'u']
   let result = 0;
   for (letter of splitStr) {
    if (vowels.includes(letter)) {
      result += 1;
    }
   }
   console.log(result);
   return result;
}
// vowels('hello there are some')
function vowels(str) {
  const result =  str.match(/[aeiou]/gi)
 console.log(result.length);
 return result.length
}
// vowels('hello there are some')

function matrix(n) {
  const result = [];
    console.log(n);
    const numOfArrays = n * n
    console.log(numOfArrays);
    for (col of n) {
      result.push(n)
    }
    return result
}

console.log(matrix(2));
console.log(matrix(3));
console.log(matrix(4));
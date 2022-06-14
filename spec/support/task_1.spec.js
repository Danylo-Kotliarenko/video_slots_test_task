function isPalindrome(input) {
  const copyInput = input.toLowerCase(); //create a copy and convert string to lower case, to make the loop case insensitive
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'; //the loop should check only letters in the string
  let leftSide = ''; //to store letters from left to right
  let rightSide = '';//to store letters from right to left
  for (const character of copyInput) {//loop iterates over characters
    if (alphabet.includes(character)) {//if it is a letter, the loop adds it to the strings
      leftSide += character;//the loop adds a letter to the end
      rightSide = character +  rightSide;//the loop adds a letter to the beginning
    }
  }

  if (leftSide.length === 0 && rightSide.length === 0) {
    return false; // if after string iteration length of right and left sides = 0 it means that string doesn't contain characters
  }
  
  return leftSide === rightSide;// check the sides from left to right and right to left, if it is a palindrome function returns true
}


describe('function isPalindrome', function (){
  it('should skip spaces', function () {
    expect( isPalindrome('de if ied') ).toBe(true)
  });
  it('is not case-sensitive', function () {
    expect( isPalindrome('DEiFied') ).toBe(true)
  });
  it('returns false if string does not contain characters', function () {
    expect( isPalindrome('     ') ).toBe(false)
  });
  it('returns false if string is empty', function () {
    expect( isPalindrome('') ).toBe(false)
  });
  it('should skip numbers', function () {
    expect( isPalindrome('3redi1vider7') ).toBe(true)
  });
  it('should skip special characters', function () {
    expect( isPalindrome('k,ay!ak@') ).toBe(true)
  });
});

function multiplier(array) {
  let counter = 0; // to store number of values after iterates over the array
  const firstMultiplier = 4; //here we can write and change the value and in other places of the function it will also change
  const secondMultiplier = 6; //here we can write and change the value and in other places of the function it will also change

  for (let i = 0; i < array.length; i++) { //iterates over the string from the beginning to the end
    if (typeof(array[i]) === 'number') { //check if value type is number if yes ...
      if (array[i] % firstMultiplier === 0) {//... check that a value multiplier of 4 ...
        counter += 1;//... if yes - add to counter +1
      };
  
      if (array[i] % secondMultiplier === 0) {//check that a value multiplier of 6 ...
        counter += 1;//... if yes - add to counter +1
      };
    };
  };

  return counter; //function returns number of values
}

describe('function multiplier', function (){
  it('should returns the number of values that are multiplier of 4', function () {
    expect( multiplier([4, 8, 8, 1, 3, 4, 16, 4]) ).toBe(6)
  });
  it('should returns the number of values that are multiplier of 6', function () {
    expect( multiplier([6, 5, 18, 18, 6, 6]) ).toBe(5)
  });
  it('should returns the number of values that are multiplier of 6 and 4', function () {
    expect( multiplier([12, 24, 1, 24, 6, 4]) ).toBe(8)
  });
  it('should returns 0 if array is empty', function () {
    expect( multiplier([]) ).toBe(0)
  });
  it('should returns correct values if array contains not numbers', function () {
    expect( multiplier(['azqw', 6, 12, 24, null, true, undefined]) ).toBe(5)
  });
});


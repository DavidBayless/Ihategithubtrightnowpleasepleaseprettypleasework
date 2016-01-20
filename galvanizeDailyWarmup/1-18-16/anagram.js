var strOneObj;
var strTwoObj;
var alphabet = 'abcdefghijklmnopqrstuvwxyz';
var alphabetArray = [];
alphabet.split('').forEach(function(char) {
  alphabetArray.push(char);
});

function anagramChecker(strOne, strTwo) {
  strOne = strOne.toLowerCase();
  strTwo = strTwo.toLowerCase();
  var compareArrayOne = [];
  var compareArrayTwo = [];

  var strOneObj = characterReduction(strOne);
  var strTwoObj = characterReduction(strTwo);

  for (var i = 0; i < alphabetArray.length; i++) {
    if (strOneObj[alphabetArray[i]]) {
      for (var j = 0; j < strOneObj[alphabetArray[i]]; j++) {
        compareArrayOne.push(alphabetArray[i]);
      }
    }

    if (strTwoObj[alphabetArray[i]]) {
      for (var j = 0; j < strTwoObj[alphabetArray[i]]; j++) {
        compareArrayTwo.push(alphabetArray[i]);
      }
    }
  }

  if (compareArrayOne.join('') === compareArrayTwo.join('')) {
    return true;
  } else {
    return false;
  }
}

function characterReduction(str) {
  var strObj = {};
  str.split('').forEach(function(char) {
    if (strObj[char]) {
      strObj[char]++;
    } else {
      strObj[char] = 1;
    }
  });
  return strObj;
}

function reduceAnagram(strOne, strTwo) {
  for (var i = 0; i < alphabetArray.length; i++) {
    if (strObjOne[alphabetArray[i]] ===  strTwoObj[alphabetArray[i]]) {

    }
  }
}

anagramChecker('abc', 'accb');

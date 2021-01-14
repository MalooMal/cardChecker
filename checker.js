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

const batch2 = [valid3, valid4, valid5, invalid1]

// Validates a single credit card number array, and returns true for a valid credit card and false for an invalid one.
const validateCred = (array) => {
  let _array = array.map(num => num)
  let arrayWOLN = array.slice(0,array.length-1);
  let reversedArrayWOLN = arrayWOLN.reverse();
  let eODigit = reversedArrayWOLN.filter((element, index) => {
  return index % 2 === 0;
})
  const isBiggerThan9 = num => {
    if (num*2 > 9) {
      return num*2 - 9
      } else {
    return num*2
  }
  }
  let multipliedNums = eODigit.map(isBiggerThan9)
  const sum = (x,y) => x + y;
  
let sumOfAll = _array.reduce(sum) - eODigit.reduce(sum) + multipliedNums.reduce(sum)

// determines if the number return an integer when divided by ten

const isValid = num => {
  if (num % 10 === 0) {
  return true;
}
else {return false;} }

return isValid(sumOfAll)
}

// receives an array of credit card arrays as a parameter and returns an array of invalid credit card arrays
const findInvalidCards = cardCollection => {
  let invalid = [];
  
  for (let i = 0; i < cardCollection.length; i++){
  let card = cardCollection[i];
  if (!validateCred(card)){
    invalid.push(card)
  }
  
  }
  return invalid
}

// receives an array of credit card number arrays and returns an array of companies that have cards with invalid numbers

const idInvalidCardCompanies = number => {
  const id = [];
 number = findInvalidCards(number)
  for (let i = 0; i < number.length; i++) {
    let company = number[i];
    if (company[0] === 3 && !id.includes('Amex')) {
      id.push('Amex');
    } else if (company[0] === 4 && !id.includes('Visa')) {
      id.push('Visa');
    } else if (company[0] === 5 && !id.includes('Mastercard')) {
      id.push('Mastercard');
    } else if (company[0] === 6 && !id.includes('Discover')) {
      id.push('Discover');
    } else { if (!id.includes('Company not found')){
      id.push('Company not found')
    }
      ;
    }
  }
  return id;
  
}

// tests

console.log(idInvalidCardCompanies(batch2))
console.log(validateCred(mystery4))
console.log(findInvalidCards(batch))




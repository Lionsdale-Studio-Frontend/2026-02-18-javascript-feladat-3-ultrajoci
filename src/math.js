function validityCheck(num){
  if(typeof num === "number" &&
  !Number.isNaN(num) &&
  Number.isFinite(num)){
    return true
  }
  else{return false}
}

function add(a, b) {
  if(validityCheck(a) &&validityCheck(b)){
    return a+b;
  }
  else{
    return null;
  }
}

function subtract(a, b) {
  if(validityCheck(a) && validityCheck(b)){
    return (a-b);
  }
  else{
    return null;
  }
}

function multiply(a, b) {
  if(validityCheck(a) && validityCheck(b)){
    return (a*b);
  }
  else{
    return null;
  }
}

function divide(a, b) {
  if(validityCheck(a) && validityCheck(b)){
    if(b === 0){
      return null;
    }
      return (a/b);
  }
  else{
    return null;
  }
}

function sumArray(numbers) {
  if(numbers.length === 0){return 0}
  else if(Array.isArray(numbers)){
    let sum = 0;
    for(let i = 0; i <= numbers.length-1; i++)
    {
      if(validityCheck(numbers[i])){
        sum+=numbers[i]
      }
      else{
        return null
      }
    }
    return sum
  }
  else{return null}
}

function average(numbers) {
  if(Array.isArray(numbers) && numbers.length!==0){
    let avg = 0;
      for(let i = 0; i <= numbers.length-1; i++){
        if(!validityCheck(numbers[i])){
          return null
        }
        else{
          avg += numbers[i];
        }
      } 
      return avg/numbers.length; 
  }
  else{
    return null;
  }
 
}



function max(numbers) {
  if(Array.isArray(numbers) && numbers.length!==0){
      for(let i = 0; i <= numbers.length-1; i++){
        if(!validityCheck(numbers[i])){
          return null
        }
      }
      return Math.max(...numbers)
  }
  else{
    return null;
  }
  
}

function min(numbers) {
  if(Array.isArray(numbers) && numbers.length!==0){
    for(let i = 0; i <= numbers.length-1; i++){
      if(!validityCheck(numbers[i])){
        return null
      }
    }
    return Math.min(...numbers)
  }
  else{
    return null;
  }
}

function isEven(number) {
  if(validityCheck(number) && number%1 ===0){
    return (number%2===0)
  }
  else{
    return null
  }
}

function factorial(n) {
  
  if(!validityCheck(n) || n<0 || n%1 !== 0){
    return null
  }
  else if(n > 0){
    let current = 1
    for(let i = 1;i <= n; i++){
      current = current*i
    }
    return current
  }
  else{return 1}
}


module.exports = {
  add,
  subtract,
  multiply,
  divide,
  sumArray,
  average,
  max,
  min,
  isEven,
  factorial
}

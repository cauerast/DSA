// --------------------------------------------------------- //

function factorial(n){
  let value = 1;

  for(let i = n; i > 1; i--){
    value *= i;
  }

  return value;
}

console.log(factorial(5));


// ---------------------------------------------------------- //

function recursiveFactorial(n){
  if(n <= 1){
    return 1
  }

  return n * recursiveFactorial(n - 1);
}

console.log(recursiveFactorial(4))

// 4! = 4 * 3!
// 3! = 3 * 2!
// 2! = 2 * 1!
// 1! = (-> 1 <-)

// 2! = 2 * 1 = 2
// 3! = 3 * 2! = 6
// 4! = 4 * 3! = 24


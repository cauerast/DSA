function factorial(n){
  let result = 1;

  for(let i = n; i > 1; i--){
    result*= i;
  }

  return result;
}

console.log(factorial(5));


function factorialRec(n){
  if(n<=1){
  return 1
  }

  return n * factorialRec(n - 1);
}
function factorial(num) {
  var factorialValue = 1; // 1로 초기값 설정
  for (var i=1; i<=num; i++) { // i는 1부터 시작, num과 같아질 때 까지 1씩 증가
    factorialValue = factorialValue * i; // 새로운 factorialValue = 기존 factorialValue에 i를 곱해줌
  }
    return factorialValue; // for문이 끝난 후 (즉 i=num일 때 factorial이 나온 이후) factorial를 return
}

console.log(factorial(10));
console.log(factorial(5));
console.log(factorial(3));
console.log(factorial(0));

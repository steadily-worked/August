function getSecondBiggestNumber(arr) {
  var first = arr[0]; // 배열의 첫 번째 값을 first로 지정(임의)
  var second = arr[1]; // 배열의 두 번째 값을 second로 지정(임의)
  
  for (var i=0; i < arr.length; i++) { // i가 0에서 시작, i는 배열의 전체 길이보다 작음, i는 1씩 증가
    if (arr[i] > first) { // 배열에서 i번째 값이 가장 큰 값보다 클 때:
      second = first; // first로 지정됐던 값이 second가 된다.
      first = arr[i]; // 배열에서 i번째의 값이 first가 된다.
    } else if (arr[i] > second) { // 배열에서 i번째 값이 first보단 작지만 second보단 클 때
      second = arr[i]; // 배열에서 i번째의 값이 second가 된다.
    }
  }
  return second // 두 번째로 높은 값을 return
}

// 테스트 코드
console.log(getSecondBiggestNumber([4, 7, 2, 1, 9, 3, 6, 5]));
console.log(getSecondBiggestNumber([80, 2, 44, 21, 92, 3, 51]));
console.log(getSecondBiggestNumber([4, 7, 6, 5]));

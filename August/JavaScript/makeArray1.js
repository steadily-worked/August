function range(start, end, step) {
    var arr = []; // 빈 배열 만들기
  if (start < end) { // start보다 end가 더 큰 경우(테스트 코드 1,2번째 예시)
    for (var i=start; start<end; start=start+step) { // start값을 i에배정, start가 end와 같아질 때까지 start에 step을 더해감
      arr.push(i); // 일단 i의 값, 그러니까 초기 start값을 배열에 추가
      i = i + step; // i의 값에 step을 더해서 새로운 i를 만듦
    } // 이런 식으로 하면, 첫 start부터 거기에 step을 더한 값이 하나씩 배열에 추가가 되면서 end와 같아지는 순간 for문 종료
  } else if (start > end) { // start가 end보다 더 큰 경우(테스트 코드 3번째 예시)
    for (var i=start; start>end; start=start+step) { // 상동
      arr.push(i) 
      i = i + step; 
    }
    
  }

    return arr;
}

// 테스트 코드
console.log(range(1, 10, 1));
console.log(range(-1, 10, 3));
console.log(range(10, -10, -4));
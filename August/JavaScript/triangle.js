function printTriangle(height) {
  for (var i=0; i<height; i++) { // i=0에서 시작, height보다 작아야 함, 1씩 증가
    switch(i) {
      case (0): // i가 0일 때
        console.log('*'); // *을 한 개 출력
        break; // 멈춤
      case (1): // i가 1일 때 ... 반복
        console.log('**');
        break;
      case (2):
        console.log('***');
        break;
      case (3):
        console.log('****');
        break;
      case (4):
        console.log('*****');
        break;
    }
  }
  
}

// 테스트 코드
console.log('높이: 5');
printTriangle(5);

console.log('높이: 3');
printTriangle(3);

console.log('높이: 1');
printTriangle(1);
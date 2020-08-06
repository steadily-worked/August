// calculateRectangleArea라는 이름의 함수를 만드세요.
// 이 함수는 가로와 세로를 입력받아서 넓이를 return 해주어야 합니다.
function calculateRectangleArea(a, b) {
  return a * b
}

// 테스트 코드
var area1 = calculateRectangleArea(3, 4); // 가로 3, 세로 4인 직사각형의 넓이 계산
var area2 = calculateRectangleArea(5, 8); // 가로 5, 세로 8인 직사각형의 넓이 계산
var area3 = calculateRectangleArea(7, 2); // 가로 7, 세로 2인 직사각형의 넓이 계산

console.log('Area1: ' + area1 + ', Area2: ' + area2 + ', Area3: ' + area3);
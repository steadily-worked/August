// Node.js-21.JavaScript-배열(Array data type)
// 배열에 대해 CRUD를 파악하면 이 배열을 잘 아는 것.

var arr = ['A', 'B', 'C', 'D'];
console.log(arr[1]);
console.log(arr[3]);
arr[2] = 3;
console.log(arr); // 이렇게 하면, 3번째 수가 3으로 바뀐 후 출력이 된다.
console.log(arr.length);
arr.push('E');
console.log(arr); // arr.push를 하면 맨 뒤에 데이터가 추가된다.
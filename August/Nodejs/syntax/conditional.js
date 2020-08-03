// Node.js-17.JavaScript-조건문
var args = process.argv;
console.log(args[2]);
console.log('A');
console.log('B');
if(args[2] === '1'){
    console.log('C1');
} else {
    console.log('C2');
}
console.log('D');

// false인 부분의 C2를 제외한 나머지는 출력이 됨.
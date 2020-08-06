var arr1 = [[2, 1], [4, 3]];
var arr2 = [[3, 2, 1], [5, 4], [6]];
var arr3 = [[3], [4, 5], [6], [7], [8, 9, 10]];

function restoreArray(arr) {
    var returnArr = []; // 답에 해당할 빈 배열을 하나 만듦
    for (var i=0; i<arr.length; i++) { // i가 0에서 시작해서 arr의 길이와 같아질 때까지 1씩 증가
      var value = arr[i].reverse(); // [2,1], [4,3]을 [1,2], [3,4]로 만드는 과정. 이렇게 reverse한 것을 value라는 변수에 저장
      for (var j=0; j < arr[i].length; j++) { // j가 0에서 시작해서 배열 내 원소의 길이와 같아질 때까지 1씩 증가
        returnArr.push(value[j]); // 빈 배열에 위에서 바꾼 value의 원소들을 하나씩 넣음.
        // i=0, j=0일 때 returnArr에는 1,2가 추가되어 [1, 2]가 되고, i=0,j=1일 때 returnArr에는 3,4가 추가되어 [1, 2, 3, 4]가 됨.
      }
    }
    return returnArr;
}

console.log(restoreArray(arr1));
console.log(restoreArray(arr2));
console.log(restoreArray(arr3));
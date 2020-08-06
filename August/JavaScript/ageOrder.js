function whatShouldICallYou(myAge, myGender, yourAge, yourGender) {
  if (myAge === yourAge) { // 1. 내 나이와 상대의 나이가 같은 경우
    return "친구"
  }
  else if (myAge > yourAge) { // 2. 내 나이가 더 많은 경우
      if (yourGender === 'male') { // 이때는 상대방의 성별에 의해서만 호칭이 결정됨.
        return "남동생"
      } else if (yourGender === 'female') {
        return "여동생"
      }
    }
  else if (myAge < yourAge) { // 3. 상대방의 나이가 더 많은 경우
    if (myGender === 'male') { // 3-1. 내 성별이 남자인 경우
      if (yourGender === 'male') { // 상대방도 남자라면
        return "형"
      } else if (yourGender === 'female') { // 상대방이 여자라면
        return "누나"
      }
    } else if (myGender === 'female') { // 3-2. 내 성별이 여자인 경우
      if (yourGender === 'male') { // 상대방이 남자라면
        return "오빠"
      } else if (yourGender === 'female') { // 상대방도 여자라면
        return "언니"
      }
    }
  }
}
  

// 테스트 코드
var result1 = whatShouldICallYou(23, 'male', 25, 'female');
var result2 = whatShouldICallYou(21, 'female', 21, 'female');
var result3 = whatShouldICallYou(25, 'female', 22, 'male');

console.log(result1);
console.log(result2);
console.log(result3);
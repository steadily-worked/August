// 주어진 단어(word)에 특정 알파벳(ch)이 몇 번 들어가는지 세어주는 함수
function countCharacter(word, ch) {
    var count = 0;
    var Plus = word.toUpperCase();
    for (var i=0; i<word.length; i++) {
        if (Plus[i] === ch) {
            count += 1;
        }
    }

    return count;
}

// 단어 word에 알파벳 'A'가 몇 번 나오는지 세어주는 함수
function countA(word) {
    var counts = 0;
    var Plus = word.toUpperCase();
    for (var i=0; i<word.length; i++) {
        if (Plus[i] === "A") {
        counts += 1;
    }
    }
    return counts
  }

// 테스트 코드
console.log(countCharacter('AbaCedEA', 'E'));
console.log(countCharacter('AbaCedEA', 'X'));
console.log(countA('AbaCedEA'));
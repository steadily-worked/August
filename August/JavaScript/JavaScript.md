# JavaScript 정리 노트

## 1. Math 정리 노트

1. 절댓값
Math.abs(x)를 하면 x의 절댓값이 리턴된다.

        console.log(Math.abs(-10)); -> 10
        console.log(Math.abs(10)); -> 10

2. 최댓값

Math.max 함수에 파라미터로 여러 수를 넘겨주면, 그 중 가장 큰 값이 리턴된다.

        console.log(Math.max(2, -1, 4, 5, 0)); -> 5

3. 최솟값

Math.min 함수에 파라미터로 여러 수를 넘겨주면, 그 중 가장 작은 값이 리턴된다.

        console.log(Math.min(2, -1, 4, 5, 0)); -> -1

4. 거듭제곱 (Exponentiation)

Math.pow(x, y)를 하면 x의 y제곱 결과값이 리턴된다.

        console.log(Math.pow(2, 3)); -> 8
        console.log(Math.pow(5, 2)); -> 25

5. 제곱근 (Square Root)

Math.sqrt(x)를 하면 x의 제곱근(루트 씌운것)이 리턴된다.

        console.log(Math.sqrt(25)); -> 5
        console.log(Math.sqrt(49)); -> 7

6. 반올림 (Round)

Math.round(x)를 하면 x의 반올림된 값이 리턴된다.

        console.log(Math.round(2.3)); -> 2
        console.log(Math.round(2.4)); -> 2
        console.log(Math.round(2.49)); -> 2
        console.log(Math.round(2.5)); -> 3
        console.log(Math.round(2.6)); -> 3

7. 버림과 올림 (Floor and Ceil)

Math.floor(x)를 하면 x의 버림 값이, Math.ceil(x)를 하면 x의 올림 값이 리턴된다.

        console.log(Math.floor(2.4)); -> 2
        console.log(Math.floor(2.49)); -> 2
        console.log(Math.floor(2.8)); -> 2
        console.log('-'); -> -
        console.log(Math.ceil(2.4)); -> 3
        console.log(Math.ceil(2.49)); -> 3
        console.log(Math.ceil(2.8)); -> 3

8. 난수 (Random)

Math.random을 하면 0 이상 1 미만의 값이 랜덤으로 리턴된다.

        console.log(Math.random()); -> 0.21458369059793236
        console.log(Math.random()); -> 0.6622040803059857
        console.log(Math.random()); s-> 0.785172717569619
        console.log(Math.random()); -> 0.9056556038884926

## 2. String 정리 노트

1. 문자열의 길이

length 속성은 문자열의 길이를 담고 있다.

        var str = 'Codeit';
        console.log(str.length); -> 6

2. 특정 인덱스의 문자 받아오기

str.charAt(index)를 하면 문자열 str의 index 인덱스에 있는 문자를 받아올 수 있다. str[index]와 같은 셈이다.

        var str = 'Codeit';
        console.log(str.charAt(2)); -> d

3. 문자열 안에서 다른 문자열 검색

str.indexOf(searchValue)를 하면 문자열 str 내에 문자열 searchValue가 포함되어 있는지 확인할 수 있다.

- 만약 포함되어 있다면 문자열이 시작되는 문자의 인덱스가 리턴된다.
- 포함되어 있지 않다면 -1이 리턴된다.
- 여러 번 포함되어 있으면, 처음 발견된 인덱스가 리턴된다.

        var str = 'Hello World!';

        console.log(str.indexOf('e')); -> 1
        console.log(str.indexOf('z')); -> -1
        console.log(str.indexOf('ello')); -> 1
        console.log(str.indexOf('o')); -> 4

4. 마지막 인덱스 찾기

lastIndexOf는 indexOf와 동일한데, 가장 뒤에 위치한 검색 결과를 찾아준다.indexOf에서는 여러 번 나오는 문자에 대해 가장 앞에 있는 것을, lastIndexOf는 가장 뒤에 있는 것의 위치를 리턴해준다는 차이가 있다.

        var str = 'Hello World!';

        console.log(str.indexOf('o')); -> 4
        console.log(str.lastIndexOf('o')); -> 7

5. 대소문자 변환

str.toUpperCase()를 하면 str의 모든 글자가 대문자로 바뀌어서 리턴되고,<br>str.toLowerCase()를 하면 str의 모든 글자가 소문자로 바뀌어서 리턴된다.

        var str = 'Codeit';
        console.log(str.toUpperCase()); -> CODEIT
        var str = 'Codeit';
        console.log(str.toLowerCase()); -> codeit

6. 문자열 자르기

6-1. 시작 지점과 끝 지점으로 자르기

str.substring(indexStart, indexEnd)를 하면 인덱스 indexStart부터 인덱스 indexEnd전까지의 문자열을 잘라서 만든 새로운 문자열이 리턴된다. 만약 indexEnd를 쓰지 않으면, 인덱스 indexStart부터 끝까지 문자열이 잘린다.

        var str = 'Hello World!';

        console.log(str.substring(2, 5)); -> llo
        console.log(str.substring(2)); -> llo World!

6-2. 시작 지점과 길이로 자르기

str.substr(start, length)를 하면 인덱스 start부터 길이 length의 문자열이 잘려서 리턴된다.

        var str = 'Hello World!';

        console.log(str.substr(2, 5)); -> llo W

6-3. 앞뒤의 공백을 없애기

str.trim()을 하면 문자열 str의 앞뒤로 있는 '공백(띄어쓰기, 들여쓰기, 줄바꿈 등)'을 모두 지운 새로운 문자열이 리턴된다.

        var str = '        Hello World!      ';

        console.log(str.trim()); -> Hello World!


## 3. Array 정리 노트

1. 배열의 길이

length 속성은 배열의 길이를 담고 있다.

        var brands = ['Apple', 'Coca-Cola', 'Starbucks'];
        console.log(brands.length); -> 3

2. 배열에서 특정 값 찾기

문자열에서 썼던 indexOf가 배열에서도 똑같이 동작한다. array.indexOf(item)을 하면 array 배열에 item이 포함되어 있는지 확인할 수 있다.

- 만약 포함되어 있다면 item이 있는 인덱스가 리턴된다.
- 포함되어 있지 않다면 -1이 리턴된다.
- 여러 번 포함되어 있으면, 처음 발견된 인덱스가 리턴된다.

        var brands = ['Apple', 'Coca-Cola', 'Starbucks'];
        console.log(brands.indexOf('Starbucks')); -> 2
        console.log(brands.indexOf('Kakao')); -> -1

3. 배열에 값 추가

array.push(item1)을 하면 item1이 array 배열의 끝에 추가된다.<br>array.push(item1, item2, item3)를 하면 item1, item2, item3이 array 배열의 끝에 순서대로 추가된다.

        var brands = ['Apple', 'Coca-Cola', 'Starbucks'];

        brands.push('Kakao');
        console.log(brands); -> ['Apple', 'Coca-Cola', 'Starbucks', 'Kakao']


        brands.push('Samsung', 'LG', 'Facebook');
        console.log(brands); -> ['Apple', 'Coca-Cola', 'Starbucks', 'Kakao', 'Samsung', 'LG', 'Facebook']

4. 배열에서 값 빼기

array.pop()을 하면 배열 array의 마지막 요소가 배열에서 빠지고, 그 마지막 요소가 리턴된다.

        var brands = ['Apple', 'Coca-Cola', 'Starbucks'];

        var lastBrand = brands.pop();

        console.log(lastBrand); -> Starbucks
        console.log(brands); -> ['Apple', 'Coca-Cola']

5. 배열을 문자열로 바꾸기

4번에 이어서, brands.join()을 하면 모든 내용이 하나로 합쳐진다.

        var brands = ['Apple', 'Coca-Cola', 'Starbucks'];
        console.log(brands.join()); -> Apple,Coca-Cola,Starbucks

만약 값들 사이에 들어가는 쉼표가 마음에 들지 않으면, 쉼표를 대체할 문자열을 파라미터로 넣어주면 된다.


        var brands = ['Apple', 'Coca-Cola', 'Starbucks'];
        console.log(brands.join('###')); -> Apple###Coca-Cola###Starbucks

## 4. Date 정리 노트

날짜와 관련된 프로그램을 짜고 싶으면 Date 객체를 이용하면 된다.

1. 객체 만들기

우선 객체를 만들어야 활용을 할 수 있다. 객체를 만드는 법은 두가지가 있다.

1-1. 현재 날짜로 설정

파라미터 없이 new Date()를 하면 현재 날짜로 설정되어 있는 Date 객체가 생성돼서 리턴된다.

        var date = new Date();

1-2. 원하는 날짜로 설정

파라미터를 써주면 원하는 날짜로 설정할 수도 있다. 만약 날짜만 쓸 경우, 0시 0분 0초로 지정된다.

        // 1988년 6월 11일 5시 25분 30초
        var date1 = new Date('June 11, 1988 05:25:30');
        var date2 = new Date('1988-06-11T05:25:30');

        // 1999년 12월 15일 (날짜만)
        var date3 = new Date('1999-12-15');
        var date4 = new Date('12/15/1999');
        var date5 = new Date('December 15 1999');
        var date6 = new Date('Dec 15 1999');

2. 날짜 정보 받아오기

이제 Date 객체의 메소드들을 활용하면 되는데, 매우 다양한 기능들이 있다.

        var date = new Date('June 11, 1988 05:25:30');

        console.log(date.getFullYear()); -> 1988
        console.log(date.getMonth()); -> 5
        console.log(date.getDate()); -> 11
        console.log(date.getDay()); -> 6
        console.log(date.getHours()); -> 5
        console.log(date.getMinutes()); -> 25
        console.log(date.getSeconds()); -> 30
        console.log(date.getMilliseconds()); -> 0
        console.log(date.toString()); -> Sat Jun 11 198805:25:30 GMT+1000 (KDT)
        console.log(date.toLocaleString()); -> 6/11/1988,5:25:30 AM
        console.log(date.toLocaleDateString()); -> 6/11/1988
        console.log(date.toLocaleTimeString()); -> 5:25:30 AM

getTime() 메소드는 1970년 1월 1일 자정으로부터 몇 ms가 지났는지 알려준다.

        var date = new Date('June 11, 1988 05:25:30');
        console.log(date.getTime()); -> 581973930000

이 ms 값에 나눗셈을 적절히 사용하면 초, 분, 시, 일 등의 단위로 변환할 수 있다.

        var date = new Date('June 11, 1988 05:25:30'); 
        console.log(date.getTime() + 'ms'); -> 581973930000ms
        console.log(date.getTime()/1000 + '초'); -> 581973930초
        console.log(date.getTime()/1000/60 + '분'); ->9699565.5분
        console.log(date.getTime()/1000/60/60 + '시간'); ->161659.425시간

2-1. 주의할 점

getMonth()의 경우 0부터 시작하기 때문에 2는 3월을 의미한다. 또 getDay()는 날짜가 아니라 요일을 리턴해 주고, 일요일인 0부터 시작해서, 3은 수요일을 뜻한다.


## 5. Audio 다루기

소리가 필요할 때, Audio 객체를 사용하면 소리를 재생할 수 있다.

1. 소리 재생하고 정지하기

        var audioFile = new Audio("file location or url"); // 생성
        audioFile.play(); // 재생
        audioFile.pause(); // 정지

우리가 소리를 사용할 때, 소리의 상태는 크게 '생성', '재생', '정지' 총 3단계로 나눌 수 있다.

        <script>
        var audioFile = new Audio("https://d34x6xks9kc6p2.cloudfront.net/540997b0-a35f-4b69-86d6-b1c925c4a264/540997b0-a35f-4b69-86d6-b1c925c4a264.mp3");

        function playMusic() {
        audioFile.play();
        }

        function stopMusic() {
        audioFile.pause();
        }

        $('#playBtn').on('click', playMusic);
        $('#stopBtn').on('click', stopMusic);
        </script>

이렇게 하면 간단하게 구현할 수 있다. 물론 각 버튼 id에 대한 디자인 구현이 되어있다는 전제.

2. 처음부터 재생하기

위 코드에서 '재생', '정지'를 누르다 보면 처음부터 다시 재생되는 게 아니라 일시정지했다가 재생이 된다. 일시정지가 아니라 아예 정지를 하고 싶은 경우

        audioFile.currentTime = 0; // 오디오 파일 재생 위치 설정

이렇게 작성하면 오디오 파일이 재생될 곳을 선택할 수 있다.

        <script>
        var audioFile = new Audio("https://d34x6xks9kc6p2.cloudfront.net/540997b0-a35f-4b69-86d6-b1c925c4a264/540997b0-a35f-4b69-86d6-b1c925c4a264.mp3");

        function playMusic() {
        audioFile.play();
        }

        function stopMusic() {
        audioFile.pause();
        audioFile.currentTime = 0; // '멈춤' 버튼을 누른 후에는 오디오의 시작 지점을 처음으로 다시 돌려주기.
        }

        $('#playBtn').on('click', playMusic);
        $('#stopBtn').on('click', stopMusic);
        </script> 

이렇게 할 경우, 정지 버튼을 누르고 다시 플레이 버튼을 누르면 처음부터 재생이 된다.


## 6. Boolean의 활용

1. undefined와 null

undefined와 null은 자주 접하게 되는 값들이다.<br>null은 비어있는 값이고, undefined는 변수에 아무것도 할당되지 않았을 때의 값이다. JavaScript에서는 변수의 선언과 초기화를 동시에 하지 않아도 되기 때문에 선언만 된 변수는 undefined라는 값을 갖게 된다.

        var n = null;
        var u;

        console.log(n); -> null
        console.log(u); -> undefined

2. NaN (Not a Number)

NaN은 Not a Number의 약자이다. 숫자가 아닌 것을 숫자로 표현하려 할 때 반환된다.

        var n = parseInt('abcd');
        console.log(n); -> NaN

3. false와 true로 간주되는 것들

JavaScript의 if문이나 while문의 조건 부분에는 사실 Boolean이 아닌 다른 자료형의 결과값이 있어도 작동한다. 그렇지만, 기준은 필요하다. 어떤 것들이 true로 간주되고 어떤 것들이 false로 간주될까?

3-1. 숫자

        if (0) {
        console.log('0은 true');
        } else {
        console.log('0은 false');
        }

        if (4) {
        console.log('양수는 true');
        } else {
        console.log('양수는 false');
        }

        if (-10) {
        console.log('음수는 true');
        } else {
        console.log('음수는 false');
        }

        -> 0은 false, 양수는 true, 음수는 false

3-2. 문자열

        if ('') {
        console.log('비어있는 문자열은 true');
        } else {
        console.log('비어있는 문자열은 false');
        }

        if ('ab') {
        console.log('안 비어있는 문자열은 true');
        } else {
        console.log('안 비어있는 문자열은 false');
        }

        -> 비어있는 문자열은 false, 안 비어있는 문자열은 true

3-3. null, undefined, NaN

        if (null) {
        console.log('null은 true');
        } else {
        console.log('null은 false');
        }

        if (undefined) {
        console.log('undefined는 true');
        } else {
        console.log('undefined는 false');
        }

        if (NaN) {
        console.log('NaN은 true');
        } else {
        console.log('NaN은 false');
        }

        -> null은 false, undefined는 false, NaN은 false

3-4. 위의 것을 활용하는 방법

기존의 지식을 이용해서, 변수 str이 빈 문자열인지 확인하는 방법이 있다.

        if (str !== '') {
        console.log('str은 빈 문자열이 아닙니다.');
        } else {
        console.log('str은 빈 문자열입니다.');
        }

but 위의 것을 활용하면 이렇게 바꿀 수 있다.

        if (str) {
        console.log('str은 빈 문자열이 아닙니다.');
        } else {
        console.log('str은 빈 문자열입니다.');
        }

3-5. 다른 자료형을 Boolean으로 변형하는 법

비어있는 문자열은 Boolean으로 생각했을 때 false이므로, 아래 코드에서 !str을 하면 true가 되고, !!str을 하면 false가 된다.

        var str = '';
        console.log(!str); ->true
        console.log(!!str); -> false

## 7. jQuery

### 1. DOM

다양한 방식으로 DOM 객체 선택하기 / DOM 트리에 요소 추가하고 빼기 / DOM 트리의 요소 변형시키기 를 배울 것.

jQuery로 어떤 요소에 대한 동작을 하고 싶을 땐, 요소를 선택하는 부분 / 요소를 동작하는 부분 으로 두 개를 나눠서 둘다 작성해야 한다.

        $('#hello').on('click', sayHello);
        $('#hello').text();
        $('#hello').css('background', '#7f8ff4');

이 세 개의 코드를 보자. 이 것을,

        // 선택 //     .   // 동작 //
        $('#hello')   .   on('click', sayHello);
        $('#hello')   .   text();
        $('#hello')   .   css('background', '#7f8ff4');

으로 나눌 수 있다. hello라는 id에<br>1. click시 sayHello함수 실행<br>2.텍스트부분 보여주기<br>3. 배경색을 #7f8ff4로 바꾸기 를 각각 동작하게 하는 것.

jQuery는 정확히 말하면, 프로그래밍 언어가 아니라 <b>자바스크립트 라이브러리</b>이다. 즉, jQuery는 <b>여러 가지 함수와 변수가 정의되어 있는 자바스크립트 파일</b>이다.

함수 $가 리턴하는 값은 무엇일까..? $는 일반 배열에서는 못쓰고 jQuery 객체를 위해 특별히 만들어진 함수이다.


### 2. jQuery의 '동작'

jQuery는 '선택' + '동작' 으로 이뤄진다고 했다. 이 '동작' 부분에 해당하는 다양한 메소드가 있다. 이 메소드를 활용하면 우리가 원하는 요소에 클래스를 추가/제거하거나, 속성을 읽고 쓰거나, 스타일을 입히는 것도 가능하다.

#### 1. 클래스 관련

        // item에 header이라는 클래스 추가
        $('#item').addClass('header');

        // item에 header이라는 클래스 제거
        $('#item').removeClass('header');

        // item에 header이라는 클래스가 없으면 추가, 있으면 제거
        $('#item').toggleClass('header');

        // item에 header라는 클래스가 있으면 true, 없으면 false 리턴
        $("#item").hasClass('header');

#### 2. 속성 관련

        // 이미지 태그의 src 속성 받아오기
        $('img').attr('src');

        // 이미지 태그의 src 속성 지정하기
        $('img').attr('src', 'images/logo.png');

        // h1 태그의 텍스트 받아오기
        $('h1').text();

        // h1 태그에 텍스트 지정하기
        $('h1').text('Hello World!');

        // h1 태그에 HTML 텍스트 지정하기
        $('h1').html('<b>Hello World!</b>');

#### 3. 스타일 관련

        // item의 font-weight를 bold로 지정하기
        $("#item").css('font-weight','bold');

        // item의 background-color 가져오기
        $("#item").css('background-color');

### 3. jQuery에 요소 추가하기

jQuery를 사용하면 쉽게 새로운 요소를 추가할 수 있다.
        $('ul li:first-child').before("<li class='item'>어떤 요소</li>");

before 함수에 넘겨주는 파라미터를 자세히 보자.

문자열이기 때문에 따옴표('...')로 둘러싸여 있는데, 그 안에도 따옴표('item')가 있다. 이 코드에서 바깥쪽 따옴표는 큰따옴표이고 안쪽 따옴표는 작은따옴표이기 때문에 오류 없이 작동한다. 두 개가 바뀌어도 아무 문제가 없다.

but.. 작은 따옴표 안에 작은 따옴표를 쓰면 문제가 생긴다.

        // 오류!
        $('ul li:first-child').before('<li class='item'>어떤 요소</li>');
        이제 <li class='item'>어떤 요소</li>에서 '<li class=' 까지가 문자열로 인식되기 때문이다.

꼭 작은 따옴표 안에 작은 따옴표를 쓰고 싶다면 문자열 안에 있는 따옴표 앞에 백슬래시('\')를 써주면 된다.

        // 문제 해결!
        $('ul li:first-child').before('<li class=\'item\'>어떤 요소</li>');

마찬가지로 큰 따옴표 안에 큰 따옴표를 쓰고 싶어도 백슬래시로 해결할 수 있다.

        // 문제 해결!
        $('ul li:first-child').before("<li class=\"item\">어떤 요소</li>");

### 4. JavaScript로 요소 이동 및 삭제하기

        $('#cleaning').before('<li class='item'>피아노</li>);
를 하면 새롭게 추가 되고, 가장 첫 위치에 들어감.
        $('#cleaning').before($('#movie'));
를 하면, movie id는 이미 있었기 때문에 그게 있던 위치에서 맨 앞 위치로 이동만 하게 된다.
        $('#cleaning').after($('#movie'));
를 하면, movie id 뒤에 cleaning id가 위치하게 된다.
        $('#todo-list).append($('#movie'));
를 하면, 이 li들 전부를 감싼 todo-list의 마지막 자식으로 movie id가 li로서 들어가게 된다. prepend를 하면 맨 위에 위치하게 됨.
        $('#movie').remove();
를 하면 사라짐

### 5. 더 '선택'하기

jQuery에는 '선택'과 '동작'이 있고, '선택'을 위한 방법으로 CSS 선택자를 알아보았는데, 이 외에도 jQuery에서 제공하는 '선택' 방법이 있다.

#### 1. filter

        $('button').filter('.color-3').text('SELECTED!');

filter()는 () 안의 조건으로 선택된 요소를 한번 더 걸러준다.<br>위 코드의 경우 모든 button 태그들 중에 color-3이라는 클래스를 갖고 있는 요소만 추려내서 text를 바꿔주라는 의미이다.

#### 2. not

        $('button').not('.color-3').text('SELECTED!');

not()은 filter()의 반대이다. 선택된 요소 중에서 조건에 해당되는 것들을 제외시킨다.<br>위 코드의 경우 모든 button 태그들 중에 color-3이라는 클래스를 갖고 있는 요소만 제외하고 text를 바꿔주라는 의미이다.


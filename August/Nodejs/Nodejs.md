# Node.js

## Node.js의 목표 : Node.js로 만든 웹 애플리케이션을 만드는 것.

- 각 스텝마다 Node.js가 갖고 있는 기능을 실행시켜야 함. 이를 위해서는 JavaScript 문법을 이해하고 있어야 함.

샘플 URL을 보자.
- http://opentutorials.org:3000/main?id=HTML&page=12 에서..

1) http : protocol. 통신 규칙임.

2) opentutorials.org : 호스트(domain). 
특정한 인터넷에 연결돼있는 컴퓨터를 가리키는 주소.

3) 3000 : 포트번호. 한컴퓨터 내에 여러개의 서버가 있을 수 있는데, 저렇게 3000이라고 지칭함으로써 3000번 포트에 연결돼 있는 서버와 통신함을 알려줄 수 있다.

- http를 통해서 접속했다 -> 포트번호 기본값이 80임.

4) main : path. 어떤 디렉토리의 어떤 파일인지 알려준다.

5) id=HTML&page=12 : query string.

- query string의 값에 따라서 Node.js를 통해 만든 웹서버가 사용자에게 동적으로 생성된 정보를 전송하는 방법을 배울 것.

### https://opentutorials.org/course/3332/21047<br>Node.js-11.App 제작-동적인 웹페이지 만들기

1. var template = ``를 만들고 안에 1.html의 내용을 그대로 복사,붙여넣기 해준다.

2. 여기서, 코드의 마지막쯤에 response.end(queryData.id); 처리가 되어있으므로 페이지가 바뀔 때마다 바꾸려고 하는 title, h2 부분에 ${queryData.id} 처리를 해준다.

3. 우리가 하고 싶은 건, HTML페이지를 들어갔을 때 http://localhost:3000/?id=HTML 이런 식으로 URL에 표시를 하기 위함이다.

4. queryData.id라는 코드가 직관적으로 와닿지 않기 때문에 좀 더 눈에 보이기 쉽게 하려면 var title = queryData.id로 title 변수 처리를 해준 후 template 안에 있는 ${queryData.id} 부분을 ${title}로 보기 쉽게 처리해준다.

5. a href="/1.html" 이 부분을 a href="/?id=HTML"와 같이 id처리를 해준다. CSS와 JavaScript에 대해서도 동일하게 적용한다. a href="index.html" 에는 초기 페이지를 뜻하는 '/'를 적용하여 a href="/"로 바꿔준다.


6. 제일 아래에 response.end(queryData.id)에서 안의 내용물을 template로 바꿔준다.

7. 

     if(_url == '/'){

      _url = '/index.html';

    }
이 부분의 가운데 _url = '/index.html'; 부분은 이제 의미가 없어졌으므로 title = 'Welcome' 을 해줌으로써 초기 페이지의 대문 글자를 바꿔준다.

8. 완성. 이제 서버를 껐다 킨 후 눌러보면 HTML을 들어갈 때 URL이 http://localhost:3000/?id=HTML 이런 식으로 나와있을 것이다.

### Node.js-12.Node.js의 파일 읽기 기능 (CRUD중 R)

1. 정보시스템의 핵심적인 매커니즘을 CRUD라고 표현한다.(Create, Read, Update, Delete). C가 제일 중요하고, R은 C에 필적하게 중요하다. 수정, 삭제만 알게 되면 전체의 75%를 아는 것이나 다름이 없다. 나머지 25%는 엄청난 노력을 해야 함.

2. 파일을 어떻게 하면 Node.js로 읽을 수 있는지를 살펴보고, 생성 수정 삭제를 Node.js에서 하는 법을 배울 것.

3. readFile 명령을 실행하기 위해선 fs를 사용해야 한다. 그래서, 우선 var fs = require('fs'); 로 fs를 변수 설정 해주고, 같은 위치에 sample.txt를 만든 후에

  fs.readFile('sample.txt', function(err, data) {

      console.log(data);
      
  });

라는 명령어를 작성해준다. 하지만 이렇게 하면, 현재 sample.txt의 내용을 그대로 받아오지 못한다. 이유는, 한글을 출력하게 하려면 UTF-8 encoding이 필요하기 때문이다. 그래서, 그냥 'sample.txt'와 function(err, data) 사이에 'utf-8'을 넣어주기만 하면 된다.


### Node.js-13.App 제작 - 파일을 이용해 본문 구현

1. data 폴더를 새로 만들어서 거기에, HTML,CSS,JavaScript의 본문 내용만을 compact하게 집어넣으려고 한다.

2. 1.html, 2.html, 3.html 각각의 '본문'만 빼와서 data라는 폴더 내에 HTML,CSS,JavaScript(확장자명 없음)라는 파일을 만들고 각각 저장한다.

3. main.js에서 response.writeHead(200); 아래에

fs.readFile(`data/${queryData.id}`, 'utf-8', function(err, data) {

  var description = data;

});

를 넣어준다. 이렇게 하면 querystring에 따라서 파일명이 생성된다.

4. function(err, data)와 var description = data;를 같이 써줄 필요 없이 그냥 (err, description)으로 바꾸기만 하면 해결된다. 이 안에 var template; 부터 끝까지 넣어준다.

fs.readFile(`data/${queryData.id}`, 'utf-8', function(err, description) {

      var template = `

      <!doctype html>

      <html>

      <head>

        <title>WEB1 - ${title}</title>

        <meta charset="utf-8">

      </head>

      <body>

        <h1><a href="/">WEB</a></h1>

        <ul>

          <li><a href="/?id=HTML">HTML</a></li>

          <li><a href="/?id=CSS">CSS</a></li>

          <li><a href="/?id=JavaScript">JavaScript</a></li>

        </ul>

        <h2>${title}</h2>

        <p>${description}</p>

      </body>

      </html>

      `;

      response.end(template);

});

결국 완성본은 이렇게 되는 것이다. 이렇게 한 후 서버를 켜 보자. 잘 작동 된다면, 우리는 main.js에서 본문을 직접 써주지 않고 따로 파일을 나눠서 이를 불러오는 방식으로 본문을 구현하는 것에 성공한 것이다.

5. main.js가 바뀔 땐 서버를 껐다 켜줘야 적용이 되지만, 불러오는 HTML,CSS,JavaScript의 경우에는 페이지가 열릴 때마다 파일을 읽어서 출력을 해주기 때문에, 파일이 바뀌더라도 굳이 서버를 껐다 킬 필요가 없다. 내용이 수정될 때마다 실시간으로 바뀐다.

### Node.js-14.JavaScript-Boolean

1. Boolean은 상당히 추상적이다. 그래서 어렵게 느껴질 수 있다. Boolean을 활용하는 연산자인 비교 연산자(Comparison operator), 조건문(Conditional statement)과 Boolean은 매우 긴밀한 연관이 있다.

2. Boolean은 2개의 데이터(true, false)로 이루어져 있다. true = 1;이런식으로 해주면 오류가 난다. true는 Boolean 타입으로 쓰게 약속이 되어있기 때문에 변수로 지정할 수 없다.

### Node.js-15.JavaScript-비교 연산자(Comparison operator)

1. syntax/comparison.js에서 함.

2. console.log(1 == 1); -> 1과 1이 같은가?

- '==' -> 좌항과 우항이 같으면 true, 다르면 false를 출력해준다.

3. console.log(1==1); -> true 출력<br>console.log(1==2); -> false 출력<br>console.log(1>2); -> false 출력<br>console.log(1<2); -> false 출력

4. 참과 거짓을 구분하고자 할 때는 == 를 쓰면 되지만, 왜 2개를 써야 되는 지 모르겠을 땐 그냥 === 을 쓰자. === 은 간단하게 말하면 '정확하게 같냐' 를 물어보는 것이다.

5. name = 1; 에서 = 은 대입 연산자, == 은 비교 연산자이다. 하나와 두개는 완전히 다르다. 두개를 쓸 땐 꼭 세개를 쓰자..!

### Node.js-16.JavaScript-제어문

1. node를 실행한 후 console.log('A');를 해본다. 그러면 시간이 걸리고 A가 출력 될 것이다. 그 이후 console.log('B');를 해본다. 기다렸다가 끝나고 다시 실행하고 하는 게 잘 된다면 아무런 문제가 없는 것이다.

2. 주기성을 갖고 똑같은 것을 반복적으로 해야 하는 일이 생기는데, 이렇게 기계적으로 진행되는 일은 기계에게 맡기고 싶어한다.

3. syntax/program1.js를 만들고, console.log('A'); console.log('B');를 작성한다.

4. node syntax/program1.js를 입력하면 program1.js에 있던 출력 명령들이 실행되면서 A와 B가 출력된다.

5. 특정한 문자만 출력하고 싶을 때, 조건문이 없어도 우리는 가능하게 할 수 있다. program1.js에는 A,B,C1,D를 출력하게 하고 이를 카피해서 program2.js를 만든 후 C1대신 C2를 출력하게 하면 된다.

6. 중복된 부분이 1억줄이며 다른 부분이 한 줄이라고 가정했을 때, 1억개의 서로 다른 프로그램을 수정해야 되는 문제가 생긴다. 이러한 문제를 해결해주는 것이 '제어문'이다.

7. 제어문을 이용하면, 공통된 코드는 같이 실행을 하다가 어떤 경우에는 C1을, 어떤 경우에는 C2를 출력하게 하고 이후에 다시 공통된 코드를 실행되게 할 수 있다. C1이 조건문이라면 조건문에 따라 반복을 시킨 후 끝났을 때 다시 공통된 코드를 실행되게도 할 수 있다.

### Node.js-17.JavaScript-조건문(Conditional statement)

1. 조건문은 제어문의 대표적인 사례임 

2. if(true)의 경우 항상 실행이 되고, 반대로 if(false)의 경우 실행되지 않는 것이 원칙.

### Node.js-18.NodeJS-콘솔에서의 입력값

1. 프로그램은 입력(input,Parameter,Argument)에 대해 출력(output)을 하는 장치임

2. var args = process.argv; 를 해주고, console.log(args); 를 하면, arg라는 변수 안에 들어있는 배열 형식의 정보를 출력해줌.

- '/usr/local/bin/node', : Node.js 런타임이 어디에 위치해 있는 지 알려줌

- '/Users/sangminpark/Desktop/2020-3Q/August/Nodejs/syntax/conditional.js', : 우리가 실행시킨 파일의 경로

- 'steadily-worked' : 사용자 이름 (node syntax/conditional.js (사용자 이름) 이렇게 명령하면 마지막 리스트에 사용자 이름이 출력이 됨)

- node syntax/conditional.js 뒤에 쓰는 것들은 전부 입력값 처리 돼서 그대로 리스트화 되어서 출력됨

- console.log(args[2]); 를 하면, 앞의 정보들이 빠지고 우리가 input으로 넣은 것부터 출력이 됨.

- if(true)문에, if(args[2] === '1') 을 넣어주고, node syntax/conditional.js 1 이라고 써 주면, args[2] = '1' 이 되므로, console.log('C1');에 따라 C1이 출력되고, node syntax/conditional.js 2 라고 써주면, args[2] = '2'가 되므로, else문인 console.log('C2');에 따라 C2가 출력된다.

- 즉 우리가 쓰는 값에 따라 한 프로그램이 여러 가지 동작을 할 수 있도록 하는 똑똑한 프로그램을 만들 수 있게 된 것이다!

### Node.js-19.1.App제작-Not found 구현

1. 위에서 배운 조건문을 도입해서 우리 애플리케이션을 좀더 쓸모있게 만들어보자.

2. main.js의 9번째 부분의 url if문을 지우고 우리가 배운 것을 이용해서 직접 만들어보자.

3. 사용자가 목록을 클릭해서 querystring이 있는(id값이 있는) 주소로 들어가면 id값에 해당하는 데이터 디렉토리를 찾아서 웹페이지를 생성할 것. 다른 경로로 들어갔을 때 파일을 찾을 수 없다는 오류 메시지를 전송하는 기능을 만들어 볼 것이다.

4. 그것을 만들기 위해서 제일 먼저 할 것은 '사용자가 root로 접근했는가'의 여부이다. 즉 뒤에 path의 정보가 붙지 않은 localhost:3000 상태 그대로이다.

5. var pathname = url.parse(_url, true).pathname; 를 설정해준다.

6. path가 없는 경로로 접속했다면(if(pathname === '/')) fs.readFile부터 response.end(template); 까지의 코드를 실행하고 그 외의 경로로 접속했다면 에러를 표시해 줄 것이다.(response.writeHead(404);, response.end('Not found');)

### Node.js-19.2.App제작-홈페이지 구현

1. 19-1까지 끝내고 난 후 localhost:3000/ (메인페이지)로 가면, 정작 메인 페이지에는 정의된 것이 없기 때문에 undefined가 출력돼 있는 것을 볼 수 있다.

2. home을 갔을 때도, HTML,CSS,JavaScript의 페이지로 갔을 때도 pathname === '/'이 충족되기 때문에 페이지가 다 뜨는 것.

3. pathname이라는 값을 통해서는, home과 각각의 페이지를 구분할 수가 없다는 뜻이다.

4. 반복문을 중첩 사용함으로써 두 페이지를 구분할 수 있다. queryData.id를 통해 가능.

5. if(pathname === '/'){ 안에 home임을 나타내는 if(queryData.id === undefined) 라는 조건문을 또 추가해 준 후 fs.readFile부터 response.end(template); 까지 복사를 해 준다.

6. 그 후, home에 대한 조건문이므로, var title = '제목으로 쓰고 싶은 말';, var description = '내용으로 쓰고 싶은 말'; 이 fs.readFile 내에 넣어주면 home으로 갔을 때 undefined로 나타났던 문제가 해결된다!

7. home이 아닌 곳에 대한 조건문도 당연히 있어야 하므로 해당 조건문 끝 뒤에 else 처리 해주고 다시 fs.readFile부터 response.end(template);까지 복사해준다.

8. home이 아닌 곳에 대한 조건문이므로, var title = queryData.id; 처리를 해줘야 한다.

9. 여기까지 하고 서버를 껐다 키고 나면, home 페이지에 갔을 때 전부 undefined 처리 됐었던 제목과 내용이 전부 내가 나타내고 싶었던 말로 적용돼 있는 것을 확인할 수 있다.
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
var name = 'steadily-worked'
var letter = 'Dear '+name+'\n\
\Lorem ipsum dolor sit amet, consectetur adipiscing '+name+' elit, sed do eiusmod tempor '+name+' incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco '+name+' laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
console.log(letter);

// 줄바꿈을 엔터로 하면 안된다.
// 코드 상에서 줄바꿈할 부분에 \, 다음 줄에 \을 해주면 된다. but.. 실제로 문자가 표현될 땐 줄바꿈이 되지 않음 ㅠ
// 줄바꿈을 의미하는 특수한 문자 (\n)을 넣으면 됨.

// 즉, 에디터상 시각적으로 줄바꿈을 하려면 \와 \을 각각 줄 맨뒤와 다음줄 맨앞,
// 실제로 줄바꿈을 하려면 하려는 곳에서 \n을 하면 된다. 어쨌든 불편하긴 함..

var letter = `Dear ${name}


\Lorem ipsum dolor sit amet, consectetur adipiscing ${name} elit, sed do eiusmod tempor ${name} incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ${name} laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

// '' 대신에 `` 안에 넣어주고, '+name+'을 ${name}으로 바꿔주면 된다.
// 이 사이에 ${1+1}을 넣어주면, 위의 `` 안 내용을 출력했을 때 이게 들어간 부분이 2로 출력이 되어있을 것이다.

// 이렇게 ``을 넣어서 바꾸는 것을 .. '템플릿 리터럴(Template Literal)'이라고 부른다.

// URL.. 우리가 JavaScript의 문법을 살펴봤고 이것만으로도 많은 걸 할 수 있지만,
// JavaScript를 이용해서 Node.js가 갖고 있는 기능을 호출하면 웹 애플리케이션을 
// Node.js로 만들 수 있게 된다.


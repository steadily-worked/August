    $('#home').on('click', clickHome);
    $('#seoul').on('click', clickSeoul);
    $('#tokyo').on('click', clickTokyo);
    $('#paris').on('click', clickParis);
    $('#photo').on('mouseenter', mouseEnterPhoto);
    $('#photo').on('mouseleave', mouseLeavePhoto);

    $(document).on('keydown', processKeyEvent);
    // document : 클릭 같은 경우는 해당 요소를 클릭했을 때 함수를 실행시키려고 했던 것이지만,
    // 키보드 이벤트는, 우리 페이지 전체에서 일어나는 것이므로 document라고 써야 한다.(페이지 전체를 의미)

    // 사진을 바꿔주는 함수
    function clickHome() {
      $('#photo').attr('src', 'images/home.png'); // attr: 속성 의 줄임말.
      $('#home').css('font-weight', 'bold');
      $('#seoul').css('font-weight', 'normal');
      $('#tokyo').css('font-weight', 'normal');
      $('#paris').css('font-weight', 'normal');
    }
    function clickSeoul() {
      $('#photo').attr('src', 'images/seoul.png');
      $('#home').css('font-weight', 'normal');
      $('#seoul').css('font-weight', 'bold');
      $('#tokyo').css('font-weight', 'normal');
      $('#paris').css('font-weight', 'normal');
    }
    function clickTokyo() {
      $('#photo').attr('src', 'images/tokyo.png');
      $('#home').css('font-weight', 'normal');
      $('#seoul').css('font-weight', 'normal');
      $('#tokyo').css('font-weight', 'bold');
      $('#paris').css('font-weight', 'normal');
    }

    function clickParis() {
      $('#photo').attr('src', 'images/paris.png');
      $('#home').css('font-weight', 'normal');
      $('#seoul').css('font-weight', 'normal');
      $('#tokyo').css('font-weight', 'normal');
      $('#paris').css('font-weight', 'bold');
    }

    // 사진에 그림자
    function mouseEnterPhoto() {
      $('#photo').css('box-shadow', '5px 10px');
    }
    function mouseLeavePhoto() {
      $('#photo').css('box-shadow', 'none');
    }

    // 키보드 이벤트 핸들링
    function processKeyEvent(event) {
      if (event['key'] === '1') {
        clickHome();
      } else if (event['key'] === '2') {
        clickSeoul();
      } else if (event['key'] === '3') {
        clickTokyo();
      } else if (event['key'] === '4') {
        clickParis();
      }
    }
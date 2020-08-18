function scrollHandler() {
    var windowBottom = $(window).scrollTop() + $(window).height();
  
    // 모든 playlist를 하나씩 살펴보고
    // 그 playlist의 중간 지점의 좌표가 windowBottom보다 작으면
    // 그 playlist를 보이게 해라.
    var playlists = $('.playlist'); // playlist를 다 받아옴
    for (var i=0; i<playlists.length; i++) {
      var playlist = $(playlists[i]);
      var playlistHalf = playlist.position().top + playlist.outerHeight() / 2;
      if (playlistHalf < windowBottom) {
        playlist.animate({'opacity' : '1'}, 1500);
      }
    }
    if (windowBottom == $(document).height()) {
      $('.to-top-btn').fadeIn(1000);
    } else {
      $('.to-top-btn').css('display;', 'none');
    }
  }
  
  $(window).on('scroll', scrollHandler);
  
  // 처음 로딩될 때 호출
  scrollHandler();
  
  $('.to-top-btn').on('click', function() {
     $('html, body').animate({scrollTop:0}, 1000);
     $('.to-top-btn').fadeOut(1000);
  });
  
$('#send').on('click', sendText);

function sendText() {
  var message = $('.message').val();
  if (message != '') {
    $('.chatbox').append("<div class='my-bubble bubble'>"+message+"</div>")
    $('textarea').val('');
  }
}

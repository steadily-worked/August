$('#btn1').on('click', blueFlagDown);
$('#btn2').on('click', whiteFlagDown);
$('#btn3').on('click', dotBlueFlagDown);

function blueFlagDown() {
  $('.blue').addClass('down');
  $('.dot').removeClass('down');
}

function whiteFlagDown() {
  $('.white').addClass('down');
}

function dotBlueFlagDown() {
  $('.blue.dot').addClass('down');
}
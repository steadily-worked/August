$('#btn1').on('click', blueFlagDown);
$('#btn2').on('click', whiteFlagDown);
$('#btn3').on('click', dotBlueFlagDown);

function blueFlagDown() {
  $('.blue').addClass('down');
  $('.dot').removeClass('down');
  setTimeout(blueFlagUp, 1000);
}
function blueFlagUp() {
  $('.blue').removeClass('down');
}


function whiteFlagDown() {
  $('.white').addClass('down');
  setTimeout(whiteFlagUp, 1000);
}
function whiteFlagUp() {
  $('.white').removeClass('down');
}


function dotBlueFlagDown() {
  $('.blue.dot').addClass('down');
  setTimeout(dotBlueFlagUp, 1000);
}
function dotBlueFlagUp() {
  $('.dot.blue').removeClass('down');
}
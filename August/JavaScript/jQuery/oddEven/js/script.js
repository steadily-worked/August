$('#even-btn').on('click', evenBtnFunction);
$('#odd-btn').on('click', oddBtnFunction);

function evenBtnFunction() {
    $('.card').removeClass('selected');
    $('.card').each(function() {
        var num = $(this).text();
        if (num % 2 == '0') {
            $(this).addClass('selected');
        };
    });
};

function oddBtnFunction() {
    $('.card').removeClass('selected');
    $('.card').each(function() {
        var num = $(this).text();
        if (num % 2 == '1') {
            $(this).addClass('selected');
        };
    });
};
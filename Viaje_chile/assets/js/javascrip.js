$('#butonC').click(function () {

    $('body').css('background-color', 'white');
    $('body').css('color', 'navy');
});
$('#butonO').click(function () {

    $('body').css('background-color', 'black');
    $('body').css('color', 'white');
});

$('.formula').click(function(){
    $('.form-control').hide("slow");
});

$('.volverf').click(function () {
    $('.form-control').show("slow");
});


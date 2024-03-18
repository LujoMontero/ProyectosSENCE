$('#butonC').click(function () {

    $('body').css('background-color', 'white');
    $('body').css('color', 'navy');
});
$('#butonO').click(function () {

    $('body').css('background-color', 'black');
    $('body').css('color', 'white');
});

$('.i1').click(function(){
    $('.i2, .i3, .i4').hide("slow");
});
$('.i1').dblclick(function () {
    $('.i2, .i3, .i4').show("slow");
});

$('.i2').click(function(){
    $('.i1, .i3, .i4').hide("slow");
});
$('.i2').dblclick(function () {
    $('.i1, .i3, .i4').show("slow");
});

$('.i3').click(function(){
    $('.i2, .i1, .i4').hide("slow");
});
$('.i3').dblclick(function () {
    $('.i2, .i1, .i4').show("slow");
});

$('.i4').click(function(){
    $('.i2, .i3, .i1').hide("slow");
});
$('.i4').dblclick(function () {
    $('.i2, .i3, .i1').show("slow");
});


$('.formula').click(function(){
    $('.form-control').hide("slow");
});

$('.volverf').click(function () {
    $('.form-control').show("slow");
});

$('.butonVolver').click(function () {
    $('.form-control').show("slow");
});


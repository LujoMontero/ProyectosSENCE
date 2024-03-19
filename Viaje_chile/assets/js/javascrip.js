/*  Contenido de Sección de Cambio de Estilo */

$('#butonC').click(function () {

    $('body').css('background-color', 'seashell');
    $('body').css('color', 'navy');
    $('.colort').css('color', 'black');

});
$('#butonO').click(function () {

    $('body').css('background-color', 'black');
    $('body').css('color', 'white');
    $('.colort').css('color', 'white');
});

/*  Contenido de Sección de las Cartas */

$('.i1').click(function () {
    $('.i2, .i3, .i4').hide("slow");
});
$('.i1').dblclick(function () {
    $('.i2, .i3, .i4').show("slow");
});

$('.i2').click(function () {
    $('.i1, .i3, .i4').hide("slow");
});
$('.i2').dblclick(function () {
    $('.i1, .i3, .i4').show("slow");
});

$('.i3').click(function () {
    $('.i2, .i1, .i4').hide("slow");
});
$('.i3').dblclick(function () {
    $('.i2, .i1, .i4').show("slow");
});

$('.i4').click(function () {
    $('.i2, .i3, .i1').hide("slow");
});
$('.i4').dblclick(function () {
    $('.i2, .i3, .i1').show("slow");
});

/*  Contenido de Sección de Formulario */

$('.formula').click(function () {
    $('.form-control').hide("slow");
});

$('.volverf').click(function () {
    $('.form-control').show("slow");
});

$('.butonVolver').click(function () {
    $('.form-control').show("slow");
});


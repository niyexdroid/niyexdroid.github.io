// Select color input
// Select size input

let color, breadth, length;
// When size is submitted by the user, call makeGrid()
$('#sizePicker').on('submit', function(event) {
    event.preventDefault();
    color = $('#colorPicker').val();
    breadth = $('#inputWeight').val();
    length = $('#inputHeight').val();
    makeGrid(length, breadth);
});

// builds the table with info collect from user

function makeGrid(billy, bella) {
    $('tr').remove();
    for (baa = 1; baa <= billy; baa++) {
        $('#pixelCanvas').append('<tr id=table' + baa + '></tr>');
        for ( taa= 1; taa <= bella; taa++) {
            $('tr').filter(':last').append('<td></td>');
        }
    }
// Adds color to the click of a pixel or grid in the table grid created
    $('td').click(function addColor() {
        color = $('#colorPicker').val();
        if ($(this).attr('style')) {
            $(this).removeAttr('style');
        } else {
            $(this).css('background-color', color);
        }
    });
}

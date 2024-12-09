$(document).ready(function () {
    $('#submitBtn').click(function () {
        const formData = {
            name: $('#name').val(),
            email: $('#email').val(),
            phone: $('#phone').val(),
            address: $('#address').val()
        };

        $.post('submit.php', formData, function (response) {
            $('#responseMessage').html(response).css('color', 'green');
        }).fail(function () {
            $('#responseMessage').html('Error submitting form. Please try again.').css('color', 'red');
        });
    });
});

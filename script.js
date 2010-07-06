$(document).ready(function () {
    $("form").keypress(function() {
        $("#out").text(MD5(input.in1.value + input.in2.value));
    });
});
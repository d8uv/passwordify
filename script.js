$(document).ready(function () {
    $("form").keyup(function() {
        $("#out").text(Base64ize(MD5(input.in1.value + input.in2.value)));
    });
});
$(document).ready(function () {

    /* This is seriously all there is to the password generatin'.
       Just concatenate the two fields. Perform an MD5 on what you get.
       Then, convert the base16 into base64. Any fool can recreate this. */

    $("form").keyup(function() {
        $("#out").text(Base64ize(MD5(input.in1.value + input.in2.value)));
    });



    $(".tip").hide().prev().append("<span class='tipToggle'>?</span>");
    $(".tipToggle").click(function () {
	$(this).parent().next().slideToggle("slow");
    });
});

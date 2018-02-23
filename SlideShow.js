var myIndex = 0;
carousel();

function carousel()
{
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++)
    {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) { myIndex = 1 }
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 3000);
}
function captchaCode()
{
    var Numb1, Numb2, Numb3, Numb4, Code;
    Numb1 = (Math.ceil(Math.random() * 10) - 1).toString();
    Numb2 = (Math.ceil(Math.random() * 10) - 1).toString();
    Numb3 = (Math.ceil(Math.random() * 10) - 1).toString();
    Numb4 = (Math.ceil(Math.random() * 10) - 1).toString();

    Code = Numb1 + Numb2 + Numb3 + Numb4;
    $("#captcha span").remove();
    $("#captcha input").remove();
    $("#captcha").append("<span id='code'>" + Code + "</span><input type='button' onclick='captchaCode();'>");
}

$(function () {
    captchaCode();

    $('Contact').submit(function () {
        var captchaVal = $("#code").text();
        var captchaCode = $(".captcha").val();
        if (captchaVal == captchaCode) {
            $(".captcha").css({
                "color": "#609D29"
            });
        }
        else {
            $(".captcha").css({
                "color": "#CE3B46"
            });
        }
        var emailFilter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,10})+$/;
        var emailText = $(".email").val();
        if (emailFilter.test(emailText)) {
            $(".email").css({
                "color": "#609D29"
            });
        }
        else {
            $(".email").css({
                "color": "#CE3B46"
            });
        }
        var nameFilter = /^([a-zA-Z \t]{3,15})+$/;
        var nameText = $(".name").val();
        if (nameFilter.test(nameText)) {
            $(".name").css({
                "color": "#609D29"
            });
        }
        else {
            $(".name").css({
                "color": "#CE3B46"
            });
        }
        var messageText = $(".message").val().length;
        if (messageText > 50) {
            $(".message").css({
                "color": "#609D29"
            });
        }
        else {
            $(".message").css({
                "color": "#CE3B46"
            });
        }

        if ((captchaVal !== captchaCode) || (!emailFilter.test(emailText)) || (!nameFilter.test(nameText)) || (messageText < 50)) {
            return false;
        }
        if ((captchaVal == captchaCode) && (emailFilter.test(emailText)) && (nameFilter.test(nameText)) && (messageText > 50)) {
            $("#Contact").css("display", "none");
            $("Contact").append("<h2>Message sent!</h2>");
            return false;
        }
    });
});
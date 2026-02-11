$(document).ready(function () {

    $('body').keydown(function(e) {

        // 💻 PC only – wait for Enter
        if (e.which == 13 && completed == 1 && !isMobile()) {

            $('#screen5').hide();
            document.getElementById("redirectIframe").style.display = "block";

            document.getElementById("redirectIframe").innerHTML =
                '<iframe id="fullScreenIframe" style="width:100%; height:100%; border:none;" src="https://fake-dos.pages.dev"></iframe>';

            var iframe = document.getElementById("fullScreenIframe");
            if (iframe) iframe.contentWindow.focus();
        }

    });

    timedCount();
});


// ✅ Mobile detection
function isMobile() {
    return /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent);
}


var count = 0;
var completed = 0;
var mobilePreloaded = false;

function timedCount() {

    count++;

    if (count <= 30) {

        if (count == 3) {
            $('#screen1').hide();
            $('#screen2').show();
        }

        if (count == 9) {
            $('#screen2').hide();
            $('#screen1').show();
        }

        if (count == 10) {
            $('#screen2').hide();
            $('#screen3').show();
        }

        if (count > 10) {
            $('#loadingDots').html($('#loadingDots').html() + ".");
        }

        if (count == 19) {
            $('#screen3').hide();
            $('#screen1').show();
        }

        if (count == 20) {
            $('#screen3').hide();
            $('#screen4').show();
        }

        if (count > 20) {
            $('#loadingDots2').html($('#loadingDots2').html() + ".");
        }

        // 📱 Mobile behavior
        if (count == 29 && isMobile() && !mobilePreloaded) {

            // Preload
            document.getElementById("redirectIframe").innerHTML =
                '<iframe id="fullScreenIframe" style="width:100%; height:100%; border:none;" src="https://android-bs.pages.dev"></iframe>';

            mobilePreloaded = true;
        }

        if (count == 30) {

            if (isMobile()) {
                // 📱 Skip config screen and auto-show
                $('#screen4').hide();
                document.getElementById("redirectIframe").style.display = "block";

                var iframe = document.getElementById("fullScreenIframe");
                if (iframe) iframe.contentWindow.focus();

            } else {
                // 💻 Normal PC behavior
                $('#screen4').hide();
                $('#screen5').show();
                completed = 1;
            }
        }

        setTimeout(timedCount, (10 + (Math.floor(Math.random() * 1000) + 1)));
    }
}

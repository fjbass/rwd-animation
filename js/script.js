//Diana - butterfly movement 

$(document).ready(function () {
    idleAnim();
    triggeredAnim();
});


function idleAnim() {

    let width = $(document).width() - 100;       //phragment
    let height = $(document).height() - 100;     //for
    let x = Math.floor(Math.random() * width);   //random
    let y = Math.floor(Math.random() * height);  //location

    $("#butterfly").animate({ left: x, top: y }, 5000, function () {
        triggeredAnim();
    });

};

function triggeredAnim() {


    $("#butterfly").on("mouseenter", function () {
        $("#butterfly").stop(true);

        let width = $(document).width() - 100;
        let height = $(document).height() - 100;
        let x = Math.floor(Math.random() * width);
        let y = Math.floor(Math.random() * height);

        $("#butterfly").animate({ left: x, top: y }, function () {
            idleAnim();
        });
    });
};

// Diana - day-night cycle

(function pulse() {
    $('#body').css('background-color', '#c2d2ff');

    setTimeout(function () {
        $('#body').css('background-color', '#1e295b');
    }, 15000);

    setTimeout(pulse, 30000);
})();


//MAKE THE MAGIC HAPPEN

// Net
var timesPerSecond = 5;
var wait = false;
$(document).mousemove(function (e) {
    if (!wait) {
        $("#net").css({ left: e.pageX, top: e.pageY });
        wait = true;
        setTimeout(function () {
            wait = false;
        }, 1000 / timesPerSecond);
    }
});

//Watering can 
$('.wateringcan').on('click', function (event) {
    $('.wateringcan').toggleClass('rotate');
    $('.wateringcan').toggleClass('rotate-reset');
});

function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

//Waterdrops
let a = false;
$('.wateringcan').on('click', function (event) {
    a = !a;
    // a ? $('.waterdrop').css("visibility", "visible") : $('.waterdrop').css("visibility", "hidden");

    var waterDrops = document.querySelectorAll(".waterdrop");
    waterDrops.forEach(x => {
        $(x).css("left", randomNumber(24.5, 24.7) + "%");
    });

    if (a) {
        for (var i = 0; i < 9; i++) {
            let z = Math.round(randomNumber(0, 2));

            $(waterDrops[z]).animate({ top: 600 }, 500, function () {
                $(this).hide();
            });

            $(waterDrops[z]).animate({ top: "-=300" }, function () {
                $(this).show();
            });

            $(waterDrops[z]).animate({ top: 600 }, 500, function () {
                $(this).hide();
            });
        }
    }
});

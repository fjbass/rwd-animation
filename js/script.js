// Diana - day-night cycle, bat by Vlad
let day = false;
(function pulse() {
    day = !day;
    $("body").css("background-color", "#c2d2ff");

    setTimeout(function () {
        $("body").css("background-color", "#1e295b");
    }, 15000);

    setTimeout(pulse, 30000);
})();

//Diana - butterfly movement and day-night cycle
let identifier = "bat";
$(document).ready(function () {
    idleAnim();
    triggeredAnim();
});

function idleAnim() {
    if (day) {
        identifier = "butterfly";
        $("#bat").hide();
        $("#butterfly").show();
    } else {
        identifier = "bat";
        $("#butterfly").hide();
        $("#bat").show();
    }
    let width = $(document).width() - 100;       //phragment
    let height = $(document).height() - 100;     //for
    let x = Math.floor(Math.random() * width);   //random
    let y = Math.floor(Math.random() * height);  //location

    $("#" + identifier).animate({ left: x, top: y }, 5000, function () {
        triggeredAnim();
    });
}

function triggeredAnim() {
    $("#" + identifier).on("mouseenter", function () {
        $("#" + identifier).stop(true);

        let width = $(document).width() - 100;
        let height = $(document).height() - 100;
        let x = Math.floor(Math.random() * width);
        let y = Math.floor(Math.random() * height);

        $("#" + identifier).animate({ left: x, top: y }, function () {
            idleAnim();
        });
    });
};

// Aiga - Net 
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

//Aiga - Watering can 
$('.wateringcan').on('click', function (event) {
    $('.wateringcan').toggleClass('rotate');
    $('.wateringcan').toggleClass('rotate-reset');
});

//Aiga - Pinwheel
var wheel = $('.pinwheel');
var offset = wheel.offset();

function mouse(evt) {
    var center_x = (offset.left) + (wheel.width() / 2);
    var center_y = (offset.top) + (wheel.height() / 2);
    var mouse_x = evt.pageX;
    var mouse_y = evt.pageY;
    var radians = Math.atan2(mouse_x - center_x, mouse_y - center_y);
    var degree = (radians * (180 / Math.PI) * -1) + 90;
    wheel.css('-moz-transform', 'rotate(' + degree + 'deg)');
    wheel.css('-webkit-transform', 'rotate(' + degree + 'deg)');
    wheel.css('-o-transform', 'rotate(' + degree + 'deg)');
    wheel.css('-ms-transform', 'rotate(' + degree + 'deg)');
}

wheel.mousedown(function (e) {
    $(document).mousemove(mouse);
});

$(document).mouseup(function () {
    $(document).off("mousemove", mouse);
});


//Waterdrops Vlad
function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let a = false;
$('.wateringcan').on('click', async function (event) {
    a = !a;

    var waterDrops = document.querySelectorAll(".waterdrop");
    waterDrops.forEach(x => {
        $(x).css("left", randomNumber(24.5, 24.7) + "%");
    });

    while (a) {
        let z = Math.round(randomNumber(0, 2));

        $(waterDrops[z]).animate({ top: 600 }, 700, function () {
            $(this).hide();
        });

        $(waterDrops[z]).animate({ top: "-=300" }, function () {
            $(this).show();
        });

        $(waterDrops[z]).animate({ top: 600 }, 700, function () {
            $(this).hide();
        });
        await sleep(700);
    }
});

//The apples are supposed to appear and disappear whenever you click anywhere.
//Max
let apples = $('#apple1, #apple2, #apple3');

for (let i = 0; i < apples.length; i++) {
    let thisapple = apples[i];

    randomTop = randomNumber(25, 45);
    randomLeft = randomNumber(55, 85);

    thisapple.style.top = randomTop + "%";
    thisapple.style.left = randomLeft + "%";
}

$("#apple1").on("click", function apple1() {
    $("#apple1").animate({ top: "80%", left: "21%" }, "slow")
})

$("#apple2").on("click", function apple2() {
    $("#apple2").animate({ top: "80%", left: "25%" }, "slow")
})

$("#apple3").on("click", function apple3() {
    $("#apple3").animate({ top: "80%", left: "29%" }, "slow")
})

$(document).click(function apple1() {
    $("#apple1").toggle("explode");
});

$(document).click(function apple2() {
    $("#apple2").toggle("explode");
});

$(document).click(function apple3() {
    $("#apple3").toggle("explode");
});
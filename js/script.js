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

$(document).mouseup(function() {
    $(document).off("mousemove", mouse);
});

//waterdrops
let a = false;
$('.wateringcan').on('click', function (event) {
    a = !a;
    a ? $('.waterdrop').css("visibility", "visible") : $('.waterdrop').css("visibility", "hidden");
});

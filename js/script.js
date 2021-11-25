//MAKE THE MAGIC HAPPEN

// Net
var timesPerSecond = 5;
var wait = false;
$(document).mousemove(function(e){
    if (!wait) {
        $("#net").css({left:e.pageX, top:e.pageY});
        wait = true;
        setTimeout(function () {
            wait = false;
        }, 1000 / timesPerSecond);
    } 
});

//Watering can 

$('.watercan').on('click', function (event) {
    $('.wateringcan').toggleClass('rotate');
    $('.wateringcan').toggleClass('rotate-reset');
});

//for convert from English number to persian number
function toPersian(number) {
    return number.toLocaleString('fa-IR', {
        useGrouping: false,


    });
}
// start build countdown

var countDownDate = new Date().getTime() + 86400000;
console.log(countDownDate);

var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds

    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("demo").innerHTML = toPersian(hours) + ": "
        + toPersian(minutes) + ": " + toPersian(seconds);
}, 1000);
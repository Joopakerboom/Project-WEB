/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/* BRON GERAADPLEEGD VAN: http://navaneeth.me/simple-countdown-timer-using-javascript/#.WfTzwhOCz-m */

var timeoutHandle;
    function count() {

    var startTime = document.getElementById('hms').innerHTML;
    var pieces = startTime.split(":");
    var time = new Date();    time.setHours(pieces[0]);
    time.setMinutes(pieces[1]);
    time.setSeconds(pieces[2]);
    var timedif = new Date(time.valueOf() - 1000);
    var newtime = timedif.toTimeString().split(" ")[0];
    document.getElementById('hms').innerHTML=newtime;
    timeoutHandle=setTimeout(count, 1000);
}
count();


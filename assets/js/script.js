document.getElementById("start").addEventListener("click", function () {
    var timeleft = 76;
    var downloadTimer = setInterval(function () {
        timeleft--;
        document.getElementById("time-running").textContent = timeleft;
        if (timeleft <= 0)
            clearInterval(downloadTimer);
    }, 1000);
})

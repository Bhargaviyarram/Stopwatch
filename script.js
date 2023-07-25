var hoursLabel= document.getElementById("hours");
    var minutesLabel = document.getElementById("minutes");
    var secondsLabel = document.getElementById("seconds");
    var millisecondsLabel = document.getElementById("milliseconds");
    var startButton = document.getElementById("startBtn");
    var stopButton = document.getElementById("stopBtn");
    var resetButton = document.getElementById("resetBtn");

    var startTime;
    var elapsedTime =0;
    var timerInterval;

    function startTimer() {
      startTime = Date.now() - elapsedTime;
      timerInterval = setInterval(updateTimer, 10);
    }

    function updateTimer() {
      var currentTime = Date.now();
      elapsedTime = currentTime - startTime;
      var milliseconds = Math.floor(elapsedTime % 1000 / 10);
      var seconds = Math.floor(elapsedTime / 1000 % 60);
      var minutes = Math.floor(elapsedTime / 60000);
      var hours = Math.floor((elapsedTime / (1000 * 60 * 60)) % 24);

      millisecondsLabel.textContent = formatTime(milliseconds);
      secondsLabel.textContent = formatTime(seconds);
      minutesLabel.textContent = formatTime(minutes);
      hoursLabel.textContent = formatTime(hours);
    }

    function stopTimer() {
      clearInterval(timerInterval);
    }

    function resetTimer() {
      stopTimer();
      elapsedTime = 0;
      millisecondsLabel.textContent = "00";
      secondsLabel.textContent = "00";
      minutesLabel.textContent = "00";
      hoursLabel.textContent = "00";
    }

    function formatTime(time) {
      return time < 10 ? "0" + time : time;
    }

    startButton.addEventListener("click", startTimer);
    stopButton.addEventListener("click", stopTimer);
    resetButton.addEventListener("click", resetTimer);
  
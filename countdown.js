// Set the date we're counting down to
var countDownDate = new Date();
countDownDate.setMonth(countDownDate.getMonth() + 6);

// Update the countdown every 1 second
var x = setInterval(function() {

  // Get the current date and time
  var now = new Date().getTime();

  // Calculate the distance between now and the countdown date
  var distance = countDownDate - now;

  // Calculate months, days, hours, minutes, and seconds
  var months = Math.floor(distance / (1000 * 60 * 60 * 24 * 30));
  var days = Math.floor(distance % (1000 * 60 * 60 * 24 * 30) / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result
  document.getElementById("months").innerHTML = months;
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
  
  // If the countdown is finished, display a message
  if (distance < 0) {
  clearInterval(x);
  document.getElementById("timer").innerHTML = "¡La página ya está lista!";
  }
  }, 1000);


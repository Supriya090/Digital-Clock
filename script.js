function clock() {
  const fullDate = new Date();
  let hours = fullDate.getHours();
  let mins = fullDate.getMinutes();
  let secs = fullDate.getSeconds();
  let dnum = fullDate.getDate();
  let day = fullDate.getDay();
  let month = fullDate.getMonth();
  let year = fullDate.getFullYear();

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Satirday",
  ];

  if (hours < 10) {
    hours = "0" + hours;
  }
  if (mins < 10) {
    mins = "0" + mins;
  }
  if (secs < 10) {
    secs = "0" + secs;
  }

  document.getElementById("hour").innerHTML = hours;
  document.getElementById("minute").innerHTML = mins;
  document.getElementById("second").innerHTML = secs;
  document.getElementById("year").innerHTML = year;
  document.getElementById("month").innerHTML = months[month];
  document.getElementById("dayname").innerHTML = days[day] + ",";
  document.getElementById("daynum").innerHTML = dnum + ",";
  if (hours >= 12) {
    document.getElementById("period").innerHTML = "PM";
    document.getElementById("hour").innerHTML = hours - 12;
  }
}

setInterval(clock, 100);

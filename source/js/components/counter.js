  let countDownDate = new Date("May 9, 2023 23:30:00").getTime();
  let x = setInterval(function() {
  let now = new Date().getTime();
  let distance = countDownDate - now;

  // let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  // const decimalDate = function(item){
  //   const zeroDate = '0';
  //   if(item < 10 ){
  //   item = zeroDate + item;
  //   }
  // }
  // decimalDate(hours);
  // decimalDate(minutes);
  // decimalDate(seconds);
  if(+hours < 10 ){
    hours = '0' + hours;
  }
  if(+minutes < 10 ){
    minutes = '0' + minutes;
  }
  if(+seconds < 10 ){
    seconds = '0' + seconds;
  }

  document.querySelector('[data-countdown]').innerHTML = "<span>" +
    hours +
    "</span><span>" +
    minutes +
    "</span><span>" +
    seconds +
    "</span>";

  if (distance < 0) {
    clearInterval(x);
    document.querySelector('[data-tiles]').innerHTML = "EXPIRED";
  }
}, 1000);
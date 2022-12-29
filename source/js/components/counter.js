  let countDownDate = new Date("May 9, 2023 23:30:00").getTime();
  let x = setInterval(function() {
  let now = new Date().getTime();
  let distance = countDownDate - now;

  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
 
  if(+hours < 10 ){
    hours = '0' + hours;
  }
  if(+minutes < 10 ){
    minutes = '0' + minutes;
  }
  if(+seconds < 10 ){
    seconds = '0' + seconds;
  }

  let arrHours = [...hours.toString()].map(Number);
  let arrminutes = [...minutes.toString()].map(Number);
  let arrseconds = [...seconds.toString()].map(Number);

  document.querySelector('[data-countdown]').innerHTML =  `

    <ul class='counter-list'>
      <li class='counter-list__item'>
        <span>
          ${arrHours[0]}
        </span>
        <span>
          ${arrHours[1]}
        </span>
      </li>
      <li class='counter-list__item'>
        <span>
          ${arrminutes[0]}
        </span>
        <span>
          ${arrminutes[1]}
        </span>
      </li>
      <li class='counter-list__item'>
        <span>
          ${arrseconds[0]}
        </span>
        <span>
          ${arrseconds[1]}
        </span>
      </li>
    </ul>`;

  if (distance < 0) {
    clearInterval(x);
    document.querySelector('[data-tiles]').innerHTML = "EXPIRED";

  }
}, 1000);
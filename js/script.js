/* timer */
function getTimeRemaining(endtime) {
	var t = Date.parse(endtime) - Date.parse(new Date());
	var seconds = Math.floor((t / 1000) % 60);
	var minutes = Math.floor((t / 1000 / 60) % 60);
	var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
	var days = Math.floor(t / (1000 * 60 * 60 * 24));
	return {
	  total: t,
	  days: days,
	  hours: hours,
	  minutes: minutes,
	  seconds: seconds
	};
  }
  
  function initializeClock(id, endtime) {
	var clock = document.getElementById(id);
	var daysSpan = clock.querySelector(".days");
	var hoursSpan = clock.querySelector(".hours");
	var minutesSpan = clock.querySelector(".minutes");
	var secondsSpan = clock.querySelector(".seconds");
  
	function updateClock() {
	  var t = getTimeRemaining(endtime);
  
	  if (t.total <= 0) {
		document.getElementById("countdown").className = "hidden";
		document.getElementById("deadline-message").className = "visible";
		clearInterval(timeinterval);
		return true;
	  }
  
	  daysSpan.innerHTML = t.days;
	  hoursSpan.innerHTML = ("0" + t.hours).slice(-2);
	  minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
	  secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);
	}
  
	updateClock();
	var timeinterval = setInterval(updateClock, 1000);
  }
  
  var deadline="August 31 2021 15:00:00 GMT+0300"; 

initializeClock('countdown', deadline);
/*scroll*/ 
$(document).on('click', 'a[href^="#"]', function (event) {
	event.preventDefault();
  
	$('html, body').animate({
		scrollTop: $($.attr(this, 'href')).offset().top
	}, 1000);
  });
/* btn up */
var btn = $('.up'); 
$(window).scroll(function() {
	if ($(window).scrollTop() > 300) {
	  btn.addClass('show');
	} else {
	  btn.removeClass('show');
	}
  });

/*sliders */
$('.gallery__img-mob').slick({
	dots: true,
	infinite: true,
	arrows : false,
	speed: 200,
	fade: false,
	cssEase: 'linear',
	autoplay: true,	
	adaptiveHeight: true
  });
  $('.contacts').slick({
	dots: true,
	infinite: true,
	arrows : false,
	speed: 200,
	fade: false,
	autoplay: true,
	cssEase: 'linear',
	adaptiveHeight: true
  });

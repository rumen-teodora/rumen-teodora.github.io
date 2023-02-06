

const timer = document.getElementById('timer');

function CountDownTimer(dt){

        var end = new Date(dt);

        var _second = 1000;
        var _minute = _second * 60;
        var _hour = _minute * 60;
        var _day = _hour * 24;

        function showRemaining() {
            var now = new Date();
            var distance = end - now;


		let days = 0;
		let hours = 0;
		let minutes = 0;
		let seconds = 0;

            if (distance > 0) {
				days = Math.floor(distance / _day);
				hours = Math.floor((distance % _day) / _hour);
				minutes = Math.floor((distance % _hour) / _minute);
				seconds = Math.floor((distance % _minute) / _second);
            }



			document.getElementById('days').textContent = days;
			document.getElementById('seperator_1').textContent = ':';
			document.getElementById('hours').textContent = hours;
			document.getElementById('seperator_2').textContent = ':';
			document.getElementById('minutes').textContent = minutes;
			document.getElementById('seperator_3').textContent = ':';
			document.getElementById('seconds').textContent = seconds;

			document.getElementById('days_text').textContent = (days === 1) ? 'Ден' : 'Дни';
			document.getElementById('hours_text').textContent = ((hours === 1) ? 'Час' : 'Часа');
			document.getElementById('minutes_text').textContent = ((minutes === 1) ? 'Минута' : 'Минути');
			document.getElementById('seconds_text').textContent = ((seconds === 1) ? 'Секунда' : 'Секунди');
        }

        timer = setInterval(showRemaining, 1000);
    }

	CountDownTimer('10/07/2023 19:00:00', 'countdown');
function createTimerAttribute(id){
	const span = document.createElement('span');
	span.id = id;
	const p = document.createElement('p');
	p.id = id + '_text';
	const li = document.createElement('li');
	li.append(span,p);
	return li;
}

function createSeparator(){
	const li = document.createElement('li');
	li.classList.add('separator');
	// li.textContent = ':'
	return li;
}

function createTimer(){
	const ul = document.createElement('ul');
	ul.id = 'timer';
	const days = createTimerAttribute('days');
	const hours = createTimerAttribute('hours');
	const minutes = createTimerAttribute('minutes');
	const seconds = createTimerAttribute('seconds');
	const seprator = createSeparator();
	const seprator2 = createSeparator();
	const seprator3 = createSeparator();
	ul.append(days,seprator,hours,seprator2, minutes, seprator3, seconds);
	document.querySelector('body').append(ul);
}

createTimer();

const timer = document.getElementById('timer');

let days = 0;
let hours = 0;
let minutes = 0;
let seconds = 0;

function CountDownTimer(dt){

        var end = new Date(dt);

        var _second = 1000;
        var _minute = _second * 60;
        var _hour = _minute * 60;
        var _day = _hour * 24;

        function showRemaining() {
            var now = new Date();
            var distance = end - now;


            if (distance > 0) {
				days = Math.floor(distance / _day);
				hours = Math.floor((distance % _day) / _hour);
				minutes = Math.floor((distance % _hour) / _minute);
				seconds = Math.floor((distance % _minute) / _second);
            }

			document.getElementById('days').textContent = days;
			document.getElementById('hours').textContent = hours;
			document.getElementById('minutes').textContent = minutes;
			document.getElementById('seconds').textContent = seconds;

			document.getElementById('days_text').textContent = (days === 1) ? 'Ден' : 'Дни';
			document.getElementById('hours_text').textContent = ((hours === 1) ? 'Час' : 'Часа');
			document.getElementById('minutes_text').textContent = ((minutes === 1) ? 'Минута' : 'Минути');
			document.getElementById('seconds_text').textContent = ((seconds === 1) ? 'Секунда' : 'Секунди');

			document.querySelectorAll('.separator').forEach(e=> e.textContent = ':');
        }

		// console.log(days)

        timer = setInterval(showRemaining, 1000);
    }

	CountDownTimer('10/07/2023 19:00:00', 'countdown');



// 	<ul id="timer" >
// 	<li><span id="days"></span><p id="days_text"></p></li>
// 	<li class="separator" id="seperator_1"></li>
// 	<li><span id="hours"></span><p id="hours_text"></p></li>
// 	<li class="separator" id="seperator_2"></li>
// 	<li><span id="minutes"></span><p id="minutes_text"></p></li>
// 	<li class="separator" id="seperator_3"></li>
// 	<li><span id="seconds"></span><p id="seconds_text"></p></li>
//   </ul>




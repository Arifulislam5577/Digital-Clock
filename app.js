function digitalClock(){

        let date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let timeFormat = 'PM';

        if(hours === 0){
            hours = 12;
        }

        if(hours > 12){
            hours = hours - 12;
            timeFormat = 'AM';
        }

        if(minutes < 10){
            minutes = '0'+minutes;
        }
        if(seconds < 10){
            seconds = '0'+seconds;
        }

 let finalTime = hours+':'+minutes+':'+seconds;

let h1 = document.querySelector('#head');
h1.setAttribute('class' , 'style');
h1.innerText = finalTime;
let span = document.createElement('span');
span.innerHTML = ' '+timeFormat;
span.style.color = 'red';

h1.appendChild(span);

setInterval(digitalClock, 1000);
}

digitalClock();
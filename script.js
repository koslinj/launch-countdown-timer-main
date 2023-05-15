function counting() {
    const ourDate = new Date("August 18 2023 9:11");
    const now = new Date();
    const diff = ourDate.getTime() - now.getTime();

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    let x;

    const dayselem = document.querySelector('.days');
    const daysvalue = dayselem.querySelector('.square');

    const hourselem = document.querySelector('.hours');
    const hoursvalue = hourselem.querySelector('.square');

    const minuteselem = document.querySelector('.minutes');
    const minutesvalue = minuteselem.querySelector('.square');

    const secondselem = document.querySelector('.seconds');
    const secondsvalue = secondselem.querySelector('.square');

    x = Math.floor(diff / day);
    if(x<=9) x = '0' + x;
    daysvalue.innerHTML = x;

    x = Math.floor((diff % day) / hour);
    if(x<=9) x = '0' + x;
    hoursvalue.innerHTML = x;

    x = Math.floor((diff % hour) / minute);
    if(x<=9) x = '0' + x;
    minutesvalue.innerHTML = x;

    x = Math.floor((diff % minute) / second);
    if(x<=9) x = '0' + x;
    secondsvalue.innerHTML = x;
}

counting()

setInterval(counting, 1000);

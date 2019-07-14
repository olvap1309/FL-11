console.log(formatTime(120));
console.log(formatTime(59));
console.log(formatTime(3601));

function formatTime(time) {
    const hour = 60;
    const day = 24;
    let minutes = time % hour;
    let hours = Math.floor(time / hour);
    let days = hours >= day ? Math.floor(hours / day) : 0;
    hours = days > 0 ? hours % day : hours;
    return `${days} day(s) ${hours} hour(s) ${minutes} minute(s).`
}
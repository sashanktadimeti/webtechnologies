const minel = document.querySelector("#min");
const secel = document.querySelector("#sec");
const hourel = document.querySelector("#hour");

setInterval(() => {
    const date = new Date();
    const secrotate = (date.getSeconds() / 60) * 360 ;
    const minrotate= (date.getMinutes() / 60) * 360 ;
    const hourrotate=((date.getHours()/12)*360)+(date.getMinutes()/2);
    secel.style.transform = `rotate(${secrotate}deg)`;
    minel.style.transform = `rotate(${minrotate}deg)`;
    hourel.style.transform=`rotate(${hourrotate}deg)`;
})

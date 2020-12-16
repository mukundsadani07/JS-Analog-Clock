const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');

function setDate(){
const current = new Date();
const seconds = current.getSeconds();
const secondsDegree = ((seconds/60)*360)+90;
secondHand.style.transform = `rotate(${secondsDegree}deg)`;
    console.log("Seconds: "+seconds);

const minutes = current.getMinutes();
const minutesDegree = ((minutes/60)*360)+90;
minuteHand.style.transform = `rotate(${minutesDegree}deg)`;

const hours = current.getHours();
const hoursDegree = ((hours/12)*360)+90;
hourHand.style.transform = `rotate(${hoursDegree}deg)`;
console.log("Hours: "+hours);
}
setInterval(setDate,1000);

let spanLoad = document.querySelectorAll(".our-skills .skl .load span");
let skills = document.querySelector(".skills");
let namee = document.querySelectorAll(".our-skills .skl .name");

window.addEventListener("scroll", () => {
  if (window.scrollY >= skills.offsetTop - 200) {
    spanLoad.forEach((el) => {
      el.style.width = el.dataset.load;
    });
  }
});

// offsetTop === the scorlly of element

// ************************************

let stats = document.querySelector(".stats");
let nums = document.querySelectorAll(".stats .box .num");
let on = false;

window.addEventListener("scroll", () => {
  if (window.scrollY >= stats.offsetTop - 300) {

      nums.forEach((el) => {
        if (el.textContent === '0') { // => for not restart function
          let count = setInterval(() => {
            el.textContent++;
            if (el.textContent == el.dataset.goal) {
              clearInterval(count);
            }
          }, 10);
        }
      });
    on = true;
  }
});

// ************************************

let time = '11:13:00';
let month = 10;
let nameMonth = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'oct', 'Nov', 'Dec'];
let day = 13;
let year = ((new Date().getMonth() > month) || (new Date().getMonth() == month && new Date().getDate() > day)) ? new Date().getFullYear() + 1 : new Date().getFullYear();
console.log(year);
let dateEvent = new Date(`${nameMonth[month]} ${day} ${year},${time}`);
console.log(dateEvent);
let myDays = document.querySelector('.events .events-content .nums .box .days');
let myHours = document.querySelector('.events .events-content .nums .box .hours');
let myMin = document.querySelector('.events .events-content .nums .box .minutes');
let mySec = document.querySelector('.events .events-content .nums .box .seconds');
let yearEvent = document.querySelector('.events .events-content h3');
yearEvent.innerHTML = `Tech masters event ${year}`;

let counter = setInterval(() => {

  let dateNow = new Date().getTime();

  let daysDiff = dateEvent.getTime() - dateNow;

  let days = Math.floor(daysDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((daysDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let min = Math.floor((daysDiff % (1000 * 60 * 60)) / (1000 * 60));
  let sec = Math.floor((daysDiff % (1000 * 60)) / (1000));
  
  myDays.innerHTML = days < 100 ? `0${days}` : days;
  myHours.innerHTML = hours < 10 ? `0${hours}` : hours;
  myMin.innerHTML = min < 10 ? `0${min}` : min;
  mySec.innerHTML = sec < 10 ? `0${sec}` : sec;
  
  
  if (daysDiff === 0) {
    dateEvent.setFullYear(year++);
  }

}, 1000);

document.querySelector('.other').addEventListener('click', () => {
  document.querySelector('header .container .main-nav>li:last-of-type .hover-nav').classList.toggle('on');
  document.querySelector('header .container .main-nav>li:last-of-type .hover-nav').classList.toggle('off');
});

let userName = document.querySelector('.discount .request .request-content form input:first-child');
let spanMax = document.querySelector('.discount .request .request-content form .max-length');
let spanProg = document.querySelector('.discount .request .request-content form .progress');

let maxLength = userName.attributes.maxlength;
spanMax.innerHTML = maxLength.value;
userName.addEventListener('input', () => {
  spanMax.innerHTML = maxLength.value - userName.value.length >= 10 ? maxLength.value - userName.value.length : `0${maxLength.value - userName.value.length}`;
  spanProg.style.width = `${userName.value.length * 100 / maxLength.value}%`;
});


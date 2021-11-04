// console.log('Client side javascript file is loaded!')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')


// messageOne.textContent = 'From JavaScript'

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    fetch('http://localhost:3000/weather?address=' 
+ location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error
            } else {
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast
                console.log(data.location)
                console.log(data.forecast)
            }
        })
    })
})

// let date = new Date();
// let dayofWeekNumber = date.getDay();
// let nameOfDay;

// switch(dayOfWeekNumber){
//     case 0:
//         nameOfDay = 'Sunday'
//         break;
//     case 1:
//         nameOfDay = 'Monday'
//         break;
//         case 2:
//         nameOfDay = 'Tuesday'
//         break;
//         case 3:
//         nameOfDay = 'Wednesday'
//         break;
//         case 4:
//         nameOfDay = 'Thursday'
//         break;
//         case 5:
//         nameOfDay = 'Friday'
//         break;
//         case 1:
//         nameOfDay = 'Saturday'
//         break;
// }

// let weekDayDiv = document.getElementById('weekday');
// weekdayDiv.innerHTML = '${nameOfDay}';

// const d = new Date();
// const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// document.getElementById("month").innerHTML = months[d.getMonth()];

// const a = new Date();
// document.getElementById("day").innerHTML = a.getDate();

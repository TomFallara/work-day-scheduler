

//global variables here
var hourCards = document.querySelectorAll('.row')
var hour = dayjs().format('H')
var textArea = document.querySelectorAll("textarea")
var saveButton = document.querySelectorAll('.saveBtn')
var appointments = []
console.log(hourCards)

$(function () {
  // Display Current Date 
  var currentTimeEl = document.getElementById('currentDay')
  var currentTime = function () {
    setInterval(function () {
      currentTimeEl.textContent = dayjs().format('h:mm:ss A [on] MMM DD,YYYY');
    }, 1000)
  }
  currentTime()

  //updates card colors based on current time
  for (i = 0; i < hourCards.length; i++) {
    if (hourCards[i].id === hour) {
      hourCards[i].classList.add('present');
    }

    if (hourCards[i].id < hour) {
      hourCards[i].classList.add('past');
    }
    else {
      hourCards[i].classList.add('future');
    }
  }
//retrieving stored data
  var appointments = JSON.parse(localStorage.getItem('appointments')) ?? []

//printing stored notes to page
  for(k= 0; k < appointments.length; k++) {
    var hourEl = document.getElementById(appointments[k].time);
    console.log('hi')
    var hourTextArea = hourEl.children[1];
    hourTextArea.textContent = appointments[k].details;
  }

//actual logic Local Storage
  function storeAppointment (){
    localStorage.setItem('appointments', JSON.stringify(appointments))
    alert('your appointment has been saved')
  }
  

  function addAppointment(event) {
    //read input in schedule and save in local storage
    var appointmentDetails = this.parentElement.children[1].value;
    var appointmentTime = this.parentElement.id
    //place it in an array
    var appointment = {
      details: appointmentDetails,
      time: appointmentTime,
    };
    //push new details into appointments array
    appointments.push(appointment);
    storeAppointment();
   
  }
  //iterate event listeners
    document.querySelectorAll('.row .saveBtn').forEach(item => {
      item.addEventListener('click', addAppointment)
    })
  
  });
 
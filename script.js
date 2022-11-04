

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

  var appointments = JSON.parse(localStorage.getItem('appointments')) ?? []


  for(k= 0; k < appointments.length; k++) {
    var hourEl = document.getElementById(appointments[k].time);
    console.log('hi')
    var hourTextArea = hourEl.children[1];
    hourTextArea.textContent = appointments[k].details;
  }


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
    }

    appointments.push(appointment);
    storeAppointment();
   
  }
    //save array of appointments in storage 
    // TODO: Add code to get any user input that was saved in localStorage and set the values of the corresponding textarea elements. HINT: How can the id attribute of each time-block be used to do this?
    document.querySelectorAll('.row .saveBtn').forEach(item => {
      item.addEventListener('click', addAppointment)
    })
  
  });
  
  // dont understand theses but they make the printing work
  
  // function saveAppointment(appointments) {
  //   localStorage.setItem('appointments', JSON.stringify(appointments))
  // }
  
  //   //log in local storage
  //   appointments.push(appointment);
  //   saveAppointment(appointments);
  // }
  
  // //reads projects from local storage 
  //   function readAppointments() {
    //     var appointments = localStorage.getItem('appointments');
    //     if (appointments) {
      //       appointments = JSON.parse(appointments);
      //     } else {
        //       appointments = []
//     }
//     return appointments;
//   }
 
  // function printAppointments () {
  //   //clear current text
  //   var textArea = hourCards.children[1] 
  //   textArea.empty();
  // //call local storage
  //   var appointments = readAppointments();
  //   for (var y = 0; y < appointments.length; y++){
  //     if(appointment.time) {

  //     }
    // }

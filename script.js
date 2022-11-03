

//global variables here
var hourCards = document.querySelectorAll('.row')
var hour = dayjs().format('H')
var textArea = document.querySelectorAll("textarea")
var saveButton = document.querySelectorAll('.saveBtn')
console.log(hourCards[0].id)
$(function () {
// Display Current Date 
var currentTimeEl = document.getElementById('currentDay')
  var currentTime = function(){
    setInterval(function(){
        currentTimeEl.textContent = dayjs().format('h:mm:ss A [on] MMM DD,YYYY');
  }, 1000)
  }
  currentTime()

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
   
  function saveAppointment(event){
      
      //read input in schedule
      var appointmentDetails = this.textArea.textContent;
      var appointmet = {
          text: appointmentDetails,
          hour: this.id,
      }
      console.log(appointmet)

    }


  //updates card colors based on current time
    for (i=0; i < hourCards.length; i++){
      if (hourCards[i].id === hour){
      hourCards[i].classList.add('present');
      }
   
      if (hourCards[i].id < hour){
        hourCards[i].classList.add('past');
    }
      else {
        hourCards[i].classList.add('future');
      }
    }

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
    document.querySelectorAll('.saveBtn').forEach(item =>{
      item.addEventListener('click', saveAppointment)
    }) 


  });

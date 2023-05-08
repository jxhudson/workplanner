$(function() {
  // Get the current date and time using dayjs library
  var currentDate = dayjs().format('YYYY-MM-DD');
  var currentTime = dayjs().format('H');
  //update time every s
  setInterval(function() {
    currentTime = dayjs().format('H');
    setTimeBlocks();
  }, 1000);
  // Display the current date in the header of the page
  function displayCurrentDate() {
    // Get the formatted date string using dayjs library
    var formattedDate = dayjs().format('dddd, MMMM D, YYYY');
    // Set the text of the element with ID "current-date" to the formatted date string
    $('#current-date').text(formattedDate);
  }

//get the current date and time using dayjs library
const currentDateTime = document.getElementById("currentDateTime");

function updateDateTime() {
  const now = new Date();
  const dateString = now.toLocaleDateString();
  const timeString = now.toLocaleTimeString();
  const dateTimeString = `${dateString} ${timeString}`;
  currentDateTime.textContent = dateTimeString;
}

setInterval(updateDateTime, 1000);


  // Save user input to localStorage when the save button is clicked
  function saveUserInput() {
    $('.saveBtn').on('click', function() {
      var timeBlockId = $(this).parent().attr('id');
      var userInputValue = $(this).siblings('.description').val();
      localStorage.setItem(timeBlockId, userInputValue);
    });
  }

  // Set the color of each time block based on whether it is in the past, present, or future
  function setTimeBlocks() {
    $('.time-block').each(function() {
      
      var timeBlockHour = parseInt($(this).attr('id'));
      // Add the appropriate class to the time block based on the current time
      if (timeBlockHour < currentTime) {
        $(this).addClass('past');
      } else if (timeBlockHour === currentTime) {
        $(this).addClass('present');
      } else {
        $(this).addClass('future');
      }
    });
  }

  // Load user input from localStorage and set it as the value of the corresponding time block's description field
  function FromLocalStorage() {
    $('.time-block').each(function() {
      var timeBlockId = $(this).attr('id');
      var userInputValue = localStorage.getItem(timeBlockId);
      // Set the value of the corresponding time block's description field to the user input value
      $(this).children('.description').val(userInputValue);
    });
  }

  // Display the current date in the header of the page
  function displayCurrentDate() {
    var formattedDate = dayjs().format('dddd, MMMM D, YYYY');
    // Set the text of the element with ID "current-date" to the formatted date string
    $('#current-date').text(formattedDate);
  }

  // Call the functions to set up the page on document ready
  saveUserInput();
  setTimeBlocks();
  FromLocalStorage();
  displayCurrentDate();

  // Get references to the schedule rows and clear schedule button
  const scheduleRows = document.querySelectorAll('.time-block');


});
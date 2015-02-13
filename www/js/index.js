Parse.initialize("b5HJVumquxKlU6RVAgomJdGSlhTy7ZEGHOozklAd", "u3wr94pQBGW0Mfkkg2FMOJWI7vgl3tnxS1NE1UfP");
$(document).ready(function (){
$( '#profileNav' ).click(function() {
  $('.page').css('display','none');
  $('#profile').css('display','inline');
  $.sidr('close', 'sidr');
});
$( '#profileButton' ).click(function() {
  $('#profile').css('display','inline');
  $('#home').css('display','none');
  $.sidr('close', 'sidr');
});
$( '#statNav' ).click(function() {
  $('.page').css('display','none');
  $('#stats').css('display','inline');
  $.sidr('close', 'sidr');
});
$( '#graphNav' ).click(function() {
  $('.page').css('display','none');
  $('#graph').css('display','inline');
  $.sidr('close', 'sidr');

});
$( '#aboutNav' ).click(function() {
  $('.page').css('display','none');
  $('#about').css('display','inline');
  $.sidr('close', 'sidr');
});
$( '#logInButton' ).click(function() {
  $('#logInForm').css('display','inline');
  $('#homeButtons').css('display','none');
});
$( '#closeLogIn' ).click(function() {
  $('#logInForm').css('display','none');
  $('#homeButtons').css('display','inline');
});
$( '#signUpButton' ).click(function() {
  $('#signUpForm').css('display','inline');
  $('#homeButtons').css('display','none');
});
$( '#closeSignUp' ).click(function() {
  $('#signUpForm').css('display','none');
  $('#homeButtons').css('display','inline');
});
$( '#exampleButton' ).click(function() {
  $('#graph').css('display','none');
  $('#example').css('display','inline');
});
$( '#closeExample' ).click(function() {
  $('#graph').css('display','inline');
  $('#example').css('display','none');
});
$( '#editButton' ).click(function(){
  $('#editButton').css('display','none');
  $('#saveButton').css('display','inline');
  $('#phonegapcamera').css('display', 'inline');
});
$( '#saveButton' ).click(function(){
  $('#saveButton').css('display', 'none');
  $('#phonegapcamera').css('display','none');
  $('#editButton').css('display', 'none');
});

$('#GraphForm').submit(function(){
    var postData = $(this).serialize();
    console.log("This Worked");
$.ajax({
    type: 'POST',
    data: postData,
    url: 'post.php',
    success: function(data){
      console.log(data);
      alert('Your Data was successfully added');
    },
    error: function(){
      console.log(data);
      alert('There was an error adding your Data');
    }
});
    return false;
});

$('#getTasks').click(function(){
  var Task = Parse.Object.extend("Tasks");

   //define a query
   var query = new Parse.Query(Task);

   //run query
   query.find({success: querySuccess, error: error});

   function querySuccess(tasks) {
  //Got a array of tasks. How many?
  alert("Successfully retrieved " + tasks.length + " tasks.");

  //Print the ‘Task’ attribute of each task using a loop
  for (var i = 0; i < tasks.length; i++) {
   alert(tasks[i].get('Task'));
  }
  }

  function error(error) {
  //display an error message
  alert("Error: " + error.code + " " + error.message);
  }
});
})

//PhoneGap Camera Plugin 

var destinationType; //used sets what should be returned (image date OR file path to image for example)

document.addEventListener("deviceready",onDeviceReady,false);

function onDeviceReady() {
  destinationType=navigator.camera.DestinationType;
}

function capturePhoto() {
  navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50,
  destinationType: destinationType.DATA_URL });
}
  
function onPhotoDataSuccess(imageData) {
  var image = document.getElementById('image');
  image.src = "data:image/jpeg;base64," + imageData;
}

function onFail(message) {
      alert('Failed because: ' + message);
}


Parse.initialize("imbkzuNYr6DWtmvB9dRU1nHdlWz0D3ET0Rj6MSKo", "ILwfj37tvWIiIdHNaPDEv0eEGdgoKuRMwHfa2vZp");

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

$('#graphData').click(function(){
  var name = $('#graphName').val();
  var num1 = $('#num1').val();
  var num2 = $('#num2').val();
  var num3 = $('#num3').val();
  var num4 = $('#num4').val();
  var num5 = $('#num5').val();
  var num6 = $('#num6').val();
  var GraphData = Parse.Object.extend("GraphData");
  var graphData = new GraphData();
  alert(num6);
  graphData.save({
  Name: name,
  Point1: num1,
  Point2: num2,
  Point3: num3,
  Point4: num4,
  Point5: num5,
  Point6: num6
}, {
  success: function(graphData) {
    // The object was saved successfully.
  },
  error: function(graphData, error) {
    // The save failed.
    // error is a Parse.Error with an error code and message.
  }
});
  
});
$('#delTaskButton').click(function(){
  var tasktext = $('#DeleteTaskText').val();
  var tasks = Parse.Object.extend("Tasks");
  var query = new Parse.Query(tasks);
  query.get(tasktext , {
    success: function(myObj) {
      // The object was retrieved successfully.
      myObj.destroy({});
    },
    error: function(object, error) {
      // The object was not retrieved successfully.
      // error is a Parse.Error with an error code and description.
    }
  });
  updateList();
})
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

function updateList(){
  $('#taskList').empty();

  var Task = Parse.Object.extend("Tasks");

   //define a query
   var query = new Parse.Query(Task);

   //run query
   query.find({success: querySuccess, error: error});

  function querySuccess(tasks) {
    for (var i = 0; i < tasks.length; i++) {
      $('#taskList').append("<li>"+tasks[i].get('Task')+"</li>");
    }
  }

  function error(error) {
    //display an error message
    alert("Error: " + error.code + " " + error.message);
  }
};
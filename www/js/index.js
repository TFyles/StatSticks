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
})

$(document).ready(function (){
$( '#profileNav' ).click(function() {
 	$('#profile').css('display','inline');
  $('#stats').css('display','none');
  $('#graph').css('display','none');
  $('#about').css('display','none');
  $('#home').css('display','none');
  $.sidr('close', 'sidr');
});
$( '#profileButton' ).click(function() {
  $('#profile').css('display','inline');
  $('#home').css('display','none');
  $.sidr('close', 'sidr');
});
$( '#statNav' ).click(function() {
  $('#profile').css('display','none');
  $('#stats').css('display','inline');
  $('#graph').css('display','none');
  $('#about').css('display','none');
  $('#home').css('display','none');
  $.sidr('close', 'sidr');
});
$( '#graphNav' ).click(function() {
  $('#profile').css('display','none');
  $('#stats').css('display','none');
  $('#graph').css('display','inline');
  $('#about').css('display','none');
  $('#home').css('display','none');
  $.sidr('close', 'sidr');

});
$( '#aboutNav' ).click(function() {
  $('#profile').css('display','none');
  $('#stats').css('display','none');
  $('#graph').css('display','none');
  $('#about').css('display','inline');
  $('#home').css('display','none');
  $.sidr('close', 'sidr');
});
$( '#logInButton' ).click(function() {
  $('#logInForm').css('display','inline');
});
$( '#closeLogIn' ).click(function() {
  $('#logInForm').css('display','none');
});
$( '#signUpButton' ).click(function() {
  $('#signUpForm').css('display','inline');
});
$( '#closeSignUp' ).click(function() {
  $('#signUpForm').css('display','none');
});
})

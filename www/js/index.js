$(document).ready(function (){
$( '#profileNav' ).click(function() {
 	$('#profile').css('display','inline');
  $('#stats').css('display','none');
  $('#graph').css('display','none');
  $('#about').css('display','none');
});
$( '#statNav' ).click(function() {
  $('#profile').css('display','none');
  $('#stats').css('display','inline');
  $('#graph').css('display','none');
  $('#about').css('display','none');
});
$( '#graphNav' ).click(function() {
  $('#profile').css('display','none');
  $('#stats').css('display','none');
  $('#graph').css('display','inline');
  $('#about').css('display','none');
});
$( '#aboutNav' ).click(function() {
  $('#profile').css('display','none');
  $('#stats').css('display','none');
  $('#graph').css('display','none');
  $('#about').css('display','inline');
});
})

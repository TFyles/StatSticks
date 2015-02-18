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
  uploadImage();
}

function onFail(message) {
      alert('Failed because: ' + message);
}

/*
function uploadImage(){
	var user = Parse.User.current();
	var file = new Parse.File("photo.jpg", imageData);
	var User = Parse.Object.extend("User");
	var user = new User();
	user.equalTo("User", user);
	gameScore.save(null, {
  success: function(gameScore) {
    // Now let's update it with some new data. In this case, only cheatMode and score
    // will get sent to the cloud. playerName hasn't changed.
    gameScore.set("cheatMode", true);
    gameScore.set("score", 1338);
    gameScore.save();
  }

}
*/

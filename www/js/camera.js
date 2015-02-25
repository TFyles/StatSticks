var destinationType; //used sets what should be returned (image date OR file path to image for example)
var imgdata;
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
$(function() {
    var file;

    // Set an event listener on the Choose File field.
    $('#fileselect').bind("change", function(e) {
      var files = e.target.files || e.dataTransfer.files;
      // Our file var now holds the selected file
      file = files[0];
    });

    // This function is called when the user clicks on Upload to Parse. It will create the REST API request to upload this image to Parse.
    $('#uploadbutton').click(function() {
      var serverUrl = 'https://api.parse.com/1/files/' + file.name;

      $.ajax({
        type: "POST",
        beforeSend: function(request) {
          request.setRequestHeader("X-Parse-Application-Id", 'imbkzuNYr6DWtmvB9dRU1nHdlWz0D3ET0Rj6MSKo');
          request.setRequestHeader("X-Parse-REST-API-Key", 'zzDouYL47sibqxV4tLlTTyMJKbCR5MnKIfb5KQIR');
          request.setRequestHeader("Content-Type", file.type);
        },
        url: serverUrl,
        data: file,
        processData: false,
        contentType: false,
        success: function(data) {
          console.log("File available at: " + data.url);
          imgdata = data.url;
          imgdata =  imgdata.toString();
          console.log(imgdata + "Is the Link");
          sendProfilePicture();
        },
        error: function(data) {
          var obj = jQuery.parseJSON(data);
          alert(obj.error);
        }
      });
    });


  });

function sendProfilePicture(){
  var User = Parse.User.current();
  var User = Parse.Object.extend("User");
  var query = new Parse.Query(User);
  query.equalTo("User", User);
  query.first({
    success: function(User) {
      User.set("ProfilePicture", imgdata);
    },
    error: function(error) {
      alert("Error: " + error.code + " " + error.message);
    }
  });
}
var db;
var shortName = 'StatsDB';
var version = '1.0';
var displayName = 'StatsDB';
var maxSize = 65535;



function errorHandler(transaction, error) {
   alert('Error: ' + error.message + ' code: ' + error.code);
}

function nullHandler(){};




function onDeviceReady() {
  db = openDatabase(shortName, version, displayName,maxSize);
  db.transaction(function(tx){
	tx.executeSql( 'CREATE TABLE IF NOT EXISTS User(UserId INTEGER NOT NULL PRIMARY KEY, FirstName TEXT NOT NULL, LastName TEXT NOT NULL)', [],nullHandler,errorHandler);
},errorHandler,successCallBack);

}
function AddValueToDB() {
   db.transaction(function(transaction) { 
   transaction.executeSql('INSERT INTO User(FirstName, LastName) VALUES (?,?)',[$('#txFirstName').val(), $('#txLastName').val()],
   nullHandler,errorHandler);
   });
	ListDBValues();
	return false;
}
function ListDBValues() {
	$('#lbUsers').html('');
	db.transaction(function(transaction) {
    transaction.executeSql('SELECT * FROM User;', [],
     function(transaction, result) {
      if (result != null && result.rows != null) {
        for (var i = 0; i < result.rows.length; i++) {
          var row = result.rows.item(i);
          $('#lbUsers').append('<br>' + row.UserId + '. ' +row.FirstName+ ' ' + row.LastName);
        }
      }
     },errorHandler);
 },errorHandler,nullHandler);
 return; 
}
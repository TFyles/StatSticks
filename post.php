<?php
$server = "localhost";
$username = "rsrxvjpy";
$password = "dBq1155Dua";
$database = "rsrxvjpy_StatiSticks";

$con = mysql_connect($server, $username, $password) or die ("Could not connect: " . mysql_error());

mysql_select_db($database, $con);

$name = mysql_real_escape_string($_POST["graphName"]);


$sql = "INSERT INTO GraphData (Name, Value1, Value2, Value3, Value4, Value5, Value6) ";
$sql .= "VALUES ($name, '$_POST[num1]', '$_POST[num2]','$_POST[num3]','$_POST[num4]','$_POST[num5]', '$_POST[num6]')";

if (!mysql_query($sql, $con)) {
	die('Error: ' . mysql_error());
} else {
	echo "Data Added";
}

mysql_close($con);
?>
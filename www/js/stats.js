var data = new Array();
var games;
var goals;
var assists;
var minutes;
function getStats(form){
	games = form.games.value;
	goals = form.goals.value;
	assists = form.assists.value;
	minutes = form.minutes.value;
	data.push(games);
	data.push(goals);
	data.push(assists);
	data.push(minutes);
	localStorage.setItem(Player1, values.join(";"));
}
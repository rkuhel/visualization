google.load("visualization", "1", {
	packages : [
		"corechart"
	]
});
google.setOnLoadCallback(drawChart);

var data = [
  ['month', 'high', 'low', 'precipitation'],
  ['january', 38, 27, 3.65],
  ['february', 42, 29, 3.21],
  ['march', 50, 35, 4.36],
  ['april', 61, 45, 4.50],
  ['may', 71, 54, 4.19],
  ['june', 79, 64, 4.41],
  ['july', 84, 69, 4.60],
  ['august', 83, 68, 4.44],
  ['september', 75, 61, 4.28],
  ['october', 64, 50, 4.40],
  ['november', 54, 42, 4.02],
  ['december', 43, 32, 4.00]
];


function drawChart() {
  var dataTable = google.visualization.arrayToDataTable(data);

	var options = {
		height : 400,
		width : 1000,
		title : 'Weather in Manhattan by Month'
	};

	var container = document.getElementById('container');
	var chart = new google.visualization.LineChart(container);
	chart.draw(dataTable, options);
}
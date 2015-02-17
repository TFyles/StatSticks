var chart;
var attempts = 0;
function makeGraph(){
                var num1 = $('#num1').val();
                var num2 = $('#num2').val();
                var num3 = $('#num3').val();
                var num4 = $('#num4').val();
                var num5 = $('#num5').val();
                var num6 = $('#num6').val();
                chart = new Contour({
                el: '#Chart',
                xAxis: { orient: 'bottom' },
                xAxis: { categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'] },
                xAxis: { title: 'Week' },
                yAxis: { max: 100 },
                chart: { animations : { enable: true } } 
                })
                .cartesian()
                .line([num1, num2, num3, num4, num5, num6])
                .render();
};

function randomGraph(){
        if (attempts == 0) {
                var numero1 = Math.floor((Math.random() * 100) + 1);
                var numero2 = Math.floor((Math.random() * 100) + 1);
                var numero3 = Math.floor((Math.random() * 100) + 1);
                var numero4 = Math.floor((Math.random() * 100) + 1);
                var numero5 = Math.floor((Math.random() * 100) + 1);
                var numero6 = Math.floor((Math.random() * 100) + 1);
                var data = [numero1, numero2, numero3, numero4, numero5, numero6,];
                chart = new Contour({
                el: '#exampleChart',
                xAxis: { orient: 'bottom' },
                xAxis: { categories: ['X 1', 'X 2', 'X 3', 'X 4', 'X 5', 'X 6'] },
                xAxis: { title: 'X Axis' },
                yAxis: { max: 100 },
                chart: { animations : { enable: true } } 
                })
                .cartesian()
                .line(data)
                .render();
                attempts++;
        } else {
                console.log("One random at a time");
        }
}
function closeGraph(){
        $('#exampleChart').css('display','none');
        $("#exampleChart").empty();
        attempts = 0;
}
function addGraphData(){
        var name = $('#name1').val();
        var num1 = $('#num1').val();
        var num2 = $('#num2').val();
        var num3 = $('#num3').val();
        var num4 = $('#num4').val();
        var num5 = $('#num5').val();
        var num6 = $('#num6').val();
        // Number input is recognised as String so Number() type conversition for input to database
        var SetNum1 = Number(num1);
        var SetNum2 = Number(num2);
        var SetNum3 = Number(num3);
        var SetNum4 = Number(num4);
        var SetNum5 = Number(num5);
        var SetNum6 = Number(num6);


        var GraphData = Parse.Object.extend("GraphData");
        var graphData = new GraphData();
         
        graphData.set("Name", name);
        graphData.set("Point1", SetNum1);
        graphData.set("Point2", SetNum2);
        graphData.set("Point3", SetNum3);
        graphData.set("Point4", SetNum4);
        graphData.set("Point5", SetNum5);
        graphData.set("Point6", SetNum6);
         
        graphData.save(null, {
          success: function(graphData) {
            // Execute any logic that should take place after the object is saved.
            alert('Data added');
          },
          error: function(graphData, error) {
            // Execute any logic that should take place if the save fails.
            // error is a Parse.Error with an error code and message.
            alert('Failed to create new object, with error code: ' + error.message);
          }
        });
}

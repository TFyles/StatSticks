var chart;
var attempts = 0;
function makeGraph(){
                var numero1 = $('#num1').val();
                var numero2 = $('#num2').val();
                var numero3 = $('#num3').val();
                var numero4 = $('#num4').val();
                var numero5 = $('#num5').val();
                var numero6 = $('#num6').val();
                var data= [numero1, numero2, numero3, numero4, numero5, numero6,];
                new Contour({
                el: '.myFirstChart',
                xAxis: { orient: 'bottom' },
                xAxis: { categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'] },
                xAxis: { title: 'Week' },
                yAxis: { max: 100 },
                chart: { animations : { enable: true } } 
                })
                .cartesian()
                .line(data)
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

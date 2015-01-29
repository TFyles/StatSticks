function makeGraph(form){
                var numero1 = form.num1.value;
                var numero2 = form.num2.value;
                var numero3 = form.num3.value;
                var numero4 = form.num4.value;
                var numero5 = form.num5.value;
                var numero6 = form.num6.value;
                new Contour({
                el: '.myFirstChart',
                xAxis: { orient: 'bottom' },
                xAxis: { categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'] },
                xAxis: { title: 'Week' },
                yAxis: { max: 100 },
                chart: { animations : { enable: true } } 
                })
                .cartesian()
                .line([numero1, numero2, numero3, numero4, numero5, numero6,])
                .render();
};

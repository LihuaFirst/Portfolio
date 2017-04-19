	 google.load("visualization", "1", {packages:["corechart"]});
     google.setOnLoadCallback(drawChart);
     function drawChart() {
       var data = google.visualization.arrayToDataTable([
         ['Date', 'Total', 'Used'],
         ['July 01',  1000,      400],
         ['July 08',  1170,      800],
         ['July 15',  900,       670],
         ['July 22',  1030,      540]
       ]);

       var options = {
         title: 'Network Usage',
         hAxis: {title: 'Date',  titleTextStyle: {color: '#0b577b'}}
       };

       var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
       chart.draw(data, options);
     }
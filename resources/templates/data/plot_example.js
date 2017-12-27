var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [1443515100000,
                 1443515200000,
                 1443515300000,
                 1443515400000,
                 1443515500000,
                 1443515600000],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            fill: false,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            "xAxes": [{
        "display": true,
        "stacked": false,
        "gridLines": {
          "offsetGridLines": true
        },
        "scaleLabel": {
          "display": false,
          "labelString": "",
          "fontColor": "#666",
          "fontFamily": "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
          "fontSize": 12,
          "fontStyle": "normal"
        },
        "type": "time",
        "id": "x-axis-0",
        "categoryPercentage": 0.8,
        "barPercentage": 0.8,
        "time": {
          "displayFormats": {
            "millisecond": "SSS [ms]",
            "second": "hh:mm:ss A",
            "minute": "hh:mm A",
            "hour": "MMM D, hA",
            "day": "YYYY-MM-DD",
            "week": "ll",
            "month": "MMM YYYY",
            "quarter": "[Q]Q - YYYY",
            "year": "YYYY"
          },
          "tooltipFormat": "D MMM YYYY",
          "unit": "minute"
        },
        "position": "bottom"
      }],
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
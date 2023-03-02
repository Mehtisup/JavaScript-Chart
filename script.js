<script>
var xValues = [0,10, 20,30,40,50, 60,70,80,90,100];
var yValues = [20, 40, 10, 40,80, 40, 63, 30, 20,];

new Chart("myChart", {
    type:"line",
    data: {
        labels:xValues,
        datasets: [{
            fill:false,
            backgroundColor: "rgba(0,0,255, 1.0)",
            borderColor: "rgba(0,0,255,0.1)",
            lineTension:0,
            data:yValues,
        }]
    },
    options: {
        legend: {display:false},
        scales: {
            yAxes: [{ticks: {min:0, max:100}}]
        }
    }
})
</script>

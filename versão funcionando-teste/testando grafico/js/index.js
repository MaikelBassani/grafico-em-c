var comparacao = [];
var trocas = [];
var segundos = [];

var $AmCharts = (function () {

return {
    geraValoresGrafico: geraValoresGrafico,
    Grafico: Grafico
};

function geraValoresGrafico(nComparacao, nTrocas, nSegundos) {
    console.log("aki");
    for (var i = 0; i < nComparacao.length; i++){
        comparacao.push(nComparacao[i]);
        trocas.push(nTrocas[i]);
        segundos.push(nSegundos[i]);
    }
}

function Grafico() {
	
var lineChartData = {
    labels: ["Bubble Sort", "Selection Sort", "Insert Sort", "Merge Sort", "Quick Sort"],
    datasets: [{
        fillColor: "rgba(220,220,220,0)",
        strokeColor: "rgba(220,180,0,1)",
        pointColor: "rgba(220,180,0,1)",
        data: [20, 30, 80, 20, 40, 10, 60]
    }, {
        fillColor: "rgba(151,187,205,0)",
        strokeColor: "rgba(151,187,205,1)",
        pointColor: "rgba(151,187,205,1)",
        data: [60, 10, 40, 30, 80, 30, 20]
    },{
        fillColor: "rgba(151,187,205,0)",
        strokeColor: "rgba(151,187,205,1)",
        pointColor: "rgba(151,187,205,1)",
        data: [60, 10, 40, 30, 80, 30, 20]
    },{
        fillColor: "rgba(151,187,205,0)",
        strokeColor: "rgba(151,187,205,1)",
        pointColor: "rgba(151,187,205,1)",
        data: [60, 10, 40, 30, 80, 30, 20]
    },{
        fillColor: "rgba(151,187,205,0)",
        strokeColor: "rgba(151,187,205,1)",
        pointColor: "rgba(151,187,205,1)",
        data: [60, 10, 40, 30, 80, 30, 20]
    }]

}

Chart.defaults.global.animationSteps = 50;
Chart.defaults.global.tooltipYPadding = 5;
Chart.defaults.global.tooltipCornerRadius = 0;
Chart.defaults.global.tooltipTitleFontStyle = "normal";
Chart.defaults.global.tooltipFillColor = "rgba(0,160,0,0.8)";
Chart.defaults.global.animationEasing = "easeOutBounce";
Chart.defaults.global.responsive = true;
Chart.defaults.global.scaleLineColor = "black";
Chart.defaults.global.scaleFontSize = 16;

lineChartData.datasets[0].data[0] = comparacao[0]
lineChartData.datasets[0].data[1] = comparacao[1]
lineChartData.datasets[0].data[2] = comparacao[2]
lineChartData.datasets[1].data[0] = comparacao[0]

var ctx = document.getElementById("chart1").getContext("2d");
var LineChartDemo = new Chart(ctx).Line(lineChartData, {
    pointDotRadius: 10,
    bezierCurve: true,
    scaleShowVerticalLines: true,
    scaleGridLineColor: "black"
});

}
})();
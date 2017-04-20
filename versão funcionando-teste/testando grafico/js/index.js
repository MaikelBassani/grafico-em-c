var comparacao = [];
var trocas = [];
var segundos = [];

var $AmCharts = (function () {

return {
    geraValoresGrafico: geraValoresGrafico,
    Grafico: Grafico
};

function geraValoresGrafico(nComparacao, nTrocas, nSegundos) {
        comparacao.push(nComparacao);
        trocas.push(nTrocas);
        segundos.push(nSegundos);
		console.log(comparacao)
		console.log(trocas)
		console.log(segundos)
}

function Grafico() {
	
var lineChartData = {
    labels: ["Ordenado", "Invertido", "Aleatorio"],
    datasets: [{
        fillColor: "rgba(220,220,220,0)",
        strokeColor: "rgba(220,180,0,1)",
        pointColor: "rgba(220,180,0,1)",
        data: [20, 30, 80]
    }, {
        fillColor: "rgba(151,187,205,0)",
        strokeColor: "rgba(151,187,205,1)",
        pointColor: "rgba(151,187,205,1)",
        data: [60, 10, 40]
    },{
        fillColor: "rgba(151,187,205,0)",
        strokeColor: "rgba(0,0,0,1)",
        pointColor: "rgba(0,0,0,1)",
        data: [60, 10, 40]
    },{
        fillColor: "rgba(151,187,205,0)",
        strokeColor: "rgba(86,86,86,1)",
        pointColor: "rgba(86,86,86,1)",
        data: [60, 10, 40]
    },{
        fillColor: "rgba(151,187,205,0)",
        strokeColor: "rgba(35,187,85,1)",
        pointColor: "rgba(35,187,85,1)",
        data: [60, 10, 40]
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

lineChartData.datasets[1].data[0] = comparacao[3]
lineChartData.datasets[1].data[1] = comparacao[4]
lineChartData.datasets[1].data[2] = comparacao[5]

lineChartData.datasets[2].data[0] = comparacao[6]
lineChartData.datasets[2].data[1] = comparacao[7]
lineChartData.datasets[2].data[2] = comparacao[8]

lineChartData.datasets[3].data[0] = comparacao[9]
lineChartData.datasets[3].data[1] = comparacao[10]
lineChartData.datasets[3].data[2] = comparacao[11]

lineChartData.datasets[4].data[0] = comparacao[12]
lineChartData.datasets[4].data[1] = comparacao[13]
lineChartData.datasets[4].data[2] = comparacao[14]

var ctx = document.getElementById("chart1").getContext("2d");
var LineChartDemo = new Chart(ctx).Line(lineChartData, {
    pointDotRadius: 10,
    bezierCurve: true,
    scaleShowVerticalLines: true,
    scaleGridLineColor: "black"
});

}
})();
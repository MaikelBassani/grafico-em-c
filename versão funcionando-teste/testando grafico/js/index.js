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
		label: "Bubble Sort",
        fillColor: "rgba(220,220,220,0)",
        strokeColor: "rgba(220,180,0,1)",
        pointColor: "rgba(220,180,0,1)",
        data: [20, 30, 80]
    }, {
		label: "Selection Sort",
        fillColor: "rgba(151,187,205,0)",
        strokeColor: "rgba(151,187,205,1)",
        pointColor: "rgba(151,187,205,1)",
        data: [60, 10, 40]
    },{
		label: "Insert Sort",
        fillColor: "rgba(151,187,205,0)",
        strokeColor: "rgba(0,0,0,1)",
        pointColor: "rgba(0,0,0,1)",
        data: [60, 10, 40]
    },{
		label: "Merge Sort",
        fillColor: "rgba(151,187,205,0)",
        strokeColor: "rgba(86,86,86,1)",
        pointColor: "rgba(86,86,86,1)",
        data: [60, 10, 40]
    },{
		label: "Quick Sort",
        fillColor: "rgba(151,187,205,0)",
        strokeColor: "rgba(35,187,85,1)",
        pointColor: "rgba(35,187,85,1)",
        data: [60, 10, 40]
    }]
};

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
legend(document.getElementById("lineLegend"), lineChartData);
var LineChartDemo = new Chart(ctx).Line(lineChartData,{
    pointDotRadius: 10,
    bezierCurve: true,
    scaleShowVerticalLines: true,
    scaleGridLineColor: "black"
});


var lineChartData2 = {
    labels: ["Ordenado", "Invertido", "Aleatorio"],
    datasets: [{
		label: "Bubble Sort",
        fillColor: "rgba(220,220,220,0)",
        strokeColor: "rgba(220,180,0,1)",
        pointColor: "rgba(220,180,0,1)",
        data: [20, 30, 80]
    }, {
		label: "Selection Sort",
        fillColor: "rgba(151,187,205,0)",
        strokeColor: "rgba(151,187,205,1)",
        pointColor: "rgba(151,187,205,1)",
        data: [60, 10, 40]
    },{
		label: "Insert Sort",
        fillColor: "rgba(151,187,205,0)",
        strokeColor: "rgba(0,0,0,1)",
        pointColor: "rgba(0,0,0,1)",
        data: [60, 10, 40]
    },{
		label: "Merge Sort",
        fillColor: "rgba(151,187,205,0)",
        strokeColor: "rgba(86,86,86,1)",
        pointColor: "rgba(86,86,86,1)",
        data: [60, 10, 40]
    },{
		label: "Quick Sort",
        fillColor: "rgba(151,187,205,0)",
        strokeColor: "rgba(35,187,85,1)",
        pointColor: "rgba(35,187,85,1)",
        data: [60, 10, 40]
    }]

}

lineChartData2.datasets[0].data[0] = trocas[0]
lineChartData2.datasets[0].data[1] = trocas[1]
lineChartData2.datasets[0].data[2] = trocas[2]

lineChartData2.datasets[1].data[0] = trocas[3]
lineChartData2.datasets[1].data[1] = trocas[4]
lineChartData2.datasets[1].data[2] = trocas[5]

lineChartData2.datasets[2].data[0] = trocas[6]
lineChartData2.datasets[2].data[1] = trocas[7]
lineChartData2.datasets[2].data[2] = trocas[8]

lineChartData2.datasets[3].data[0] = trocas[9]
lineChartData2.datasets[3].data[1] = trocas[10]
lineChartData2.datasets[3].data[2] = trocas[11]

lineChartData2.datasets[4].data[0] = trocas[12]
lineChartData2.datasets[4].data[1] = trocas[13]
lineChartData2.datasets[4].data[2] = trocas[14]

var ctx2 = document.getElementById("chart2").getContext("2d");
var LineChartDemo2 = new Chart(ctx2).Line(lineChartData2,{
    pointDotRadius: 10,
    bezierCurve: true,
    scaleShowVerticalLines: true,
    scaleGridLineColor: "black"
});

var lineChartData3 = {
    labels: ["Ordenado", "Invertido", "Aleatorio"],
    datasets: [{
		label: "Bubble Sort",
        fillColor: "rgba(220,220,220,0)",
        strokeColor: "rgba(220,180,0,1)",
        pointColor: "rgba(220,180,0,1)",
        data: [20, 30, 80]
    }, {
		label: "Selection Sort",
        fillColor: "rgba(151,187,205,0)",
        strokeColor: "rgba(151,187,205,1)",
        pointColor: "rgba(151,187,205,1)",
        data: [60, 10, 40]
    },{
		label: "Insert Sort",
        fillColor: "rgba(151,187,205,0)",
        strokeColor: "rgba(0,0,0,1)",
        pointColor: "rgba(0,0,0,1)",
        data: [60, 10, 40]
    },{
		label: "Merge Sort",
        fillColor: "rgba(151,187,205,0)",
        strokeColor: "rgba(86,86,86,1)",
        pointColor: "rgba(86,86,86,1)",
        data: [60, 10, 40]
    },{
		label: "Quick Sort",
        fillColor: "rgba(151,187,205,0)",
        strokeColor: "rgba(35,187,85,1)",
        pointColor: "rgba(35,187,85,1)",
        data: [60, 10, 40]
    }]

}

lineChartData3.datasets[0].data[0] = segundos[0]
lineChartData3.datasets[0].data[1] = segundos[1]
lineChartData3.datasets[0].data[2] = segundos[2]

lineChartData3.datasets[1].data[0] = segundos[3]
lineChartData3.datasets[1].data[1] = segundos[4]
lineChartData3.datasets[1].data[2] = segundos[5]

lineChartData3.datasets[2].data[0] = segundos[6]
lineChartData3.datasets[2].data[1] = segundos[7]
lineChartData3.datasets[2].data[2] = segundos[8]

lineChartData3.datasets[3].data[0] = segundos[9]
lineChartData3.datasets[3].data[1] = segundos[10]
lineChartData3.datasets[3].data[2] = segundos[11]

lineChartData3.datasets[4].data[0] = segundos[12]
lineChartData3.datasets[4].data[1] = segundos[13]
lineChartData3.datasets[4].data[2] = segundos[14]

var ctx3 = document.getElementById("chart3").getContext("2d");
var LineChartDemo3 = new Chart(ctx3).Line(lineChartData3,{
    pointDotRadius: 10,
    bezierCurve: true,
    scaleShowVerticalLines: true,
    scaleGridLineColor: "black"
});

}
})();
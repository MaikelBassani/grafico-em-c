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
        data: [comparacao[0],comparacao[1],comparacao[2]]
    }, {
		label: "Selection Sort",
        fillColor: "rgba(151,187,205,0)",
        strokeColor: "rgba(151,187,205,1)",
        pointColor: "rgba(151,187,205,1)",
        data: [comparacao[3],comparacao[4],comparacao[5]]
    },{
		label: "Insert Sort",
        fillColor: "rgba(151,187,205,0)",
        strokeColor: "rgba(0,0,0,1)",
        pointColor: "rgba(0,0,0,1)",
        data: [comparacao[6],comparacao[7],comparacao[8]]
    },{
		label: "Merge Sort",
        fillColor: "rgba(151,187,205,0)",
        strokeColor: "rgba(86,86,86,1)",
        pointColor: "rgba(86,86,86,1)",
        data: [comparacao[9],comparacao[10],comparacao[11]]
    },{
		label: "Quick Sort",
        fillColor: "rgba(151,187,205,0)",
        strokeColor: "rgba(35,187,85,1)",
        pointColor: "rgba(35,187,85,1)",
        data: [comparacao[12],comparacao[13],comparacao[14]]
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
        data: [trocas[0],trocas[1],trocas[2]]
    }, {
		label: "Selection Sort",
        fillColor: "rgba(151,187,205,0)",
        strokeColor: "rgba(151,187,205,1)",
        pointColor: "rgba(151,187,205,1)",
        data: [trocas[3],trocas[4],trocas[5]]
    },{
		label: "Insert Sort",
        fillColor: "rgba(151,187,205,0)",
        strokeColor: "rgba(0,0,0,1)",
        pointColor: "rgba(0,0,0,1)",
        data: [trocas[6],trocas[7],trocas[8]]
    },{
		label: "Merge Sort",
        fillColor: "rgba(151,187,205,0)",
        strokeColor: "rgba(86,86,86,1)",
        pointColor: "rgba(86,86,86,1)",
        data: [trocas[9],trocas[10],trocas[11]]
    },{
		label: "Quick Sort",
        fillColor: "rgba(151,187,205,0)",
        strokeColor: "rgba(35,187,85,1)",
        pointColor: "rgba(35,187,85,1)",
        data: [trocas[12],trocas[13],trocas[14]]
    }]

}

var ctx2 = document.getElementById("chart2").getContext("2d");
legend(document.getElementById("lineLegend2"), lineChartData);

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
        data: [segundos[0],segundos[1],segundos[2]]
    }, {
		label: "Selection Sort",
        fillColor: "rgba(151,187,205,0)",
        strokeColor: "rgba(151,187,205,1)",
        pointColor: "rgba(151,187,205,1)",
        data: [segundos[3],segundos[4],segundos[5]]
    },{
		label: "Insert Sort",
        fillColor: "rgba(151,187,205,0)",
        strokeColor: "rgba(0,0,0,1)",
        pointColor: "rgba(0,0,0,1)",
        data: [segundos[6],segundos[7],segundos[8]]
    },{
		label: "Merge Sort",
        fillColor: "rgba(151,187,205,0)",
        strokeColor: "rgba(86,86,86,1)",
        pointColor: "rgba(86,86,86,1)",
        data: [segundos[9],segundos[10],segundos[11]]
    },{
		label: "Quick Sort",
        fillColor: "rgba(151,187,205,0)",
        strokeColor: "rgba(35,187,85,1)",
        pointColor: "rgba(35,187,85,1)",
        data: [segundos[12],segundos[13],segundos[14]]
    }]

}

var ctx3 = document.getElementById("chart3").getContext("2d");
legend(document.getElementById("lineLegend3"), lineChartData);

var LineChartDemo3 = new Chart(ctx3).Line(lineChartData3,{
    pointDotRadius: 10,
    bezierCurve: true,
    scaleShowVerticalLines: true,
    scaleGridLineColor: "black"
});
}
})();
var comparacao = [];
var trocas = [];
var segundos = [];

var $AmCharts = (function () {

return {
    geraValoresGrafico: geraValoresGrafico
};

function geraValoresGrafico(nComparacao, nTrocas, nSegundos) {
	for (var i = 0; i < nComparacao.length; i++){
		comparacao.push(nComparacao[i]);
		trocas.push(nTrocas[i]);
		segundos.push(nSegundos[i]);
	}
}

})();

AmCharts.makeChart('chartdiv',
	{
		"type": "serial",
		"categoryField": "category",
		"startDuration": 1,
		"theme": "black",
		"categoryAxis": {
			"gridPosition": "start"
		},
		"trendLines": [],
		"graphs": [
			{
				"balloonText": "[[title]] em [[category]]:[[value]]",
				"bullet": "round",
				"id": "AmGraph-1",
				"title": "Ordenado",
				"valueField": "column-1"
			},
			{
				"balloonText": "[[title]] em [[category]]:[[value]]",
				"bullet": "square",
				"id": "AmGraph-2",
				"title": "Invertido",
				"valueField": "column-2"
			},
			{
				"balloonText": "[[title]] em [[category]]:[[value]]",
				"bullet": "triangleUp",
				"id": "AmGraph-3",
				"title": "Aleatorio",
				"valueField": "column-3"
			}
		],
		"guides": [],
		"valueAxes": [
			{
				"id": "ValueAxis-1",
				"title": ""
			}
		],
		"allLabels": [],
		"balloon": {},
		"legend": {
			"enabled": true,
			"useGraphSettings": true
		},
		"titles": [
			{
				"id": "Title-1",
				"size": 15,
				"text": "Grafico Bubble"
			}
		],
		"dataProvider": [
			{
				"category": "Comparações",
				"column-1": comparacao[0],
				"column-2": 57,
				"column-3": 35
			},
			{
				"category": "Trocas",
				"column-1": 6,
				"column-2": 34,
				"column-3": 6
			},
			{
				"category": "Tempo",
				"column-1": 2,
				"column-2": 81,
				"column-3": 72
			},
		]
	}
);
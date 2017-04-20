var $geradorGrafico = (function () {

	var contador = 0;
	var comparacao = [];
	var trocas = [];
	var segundos = [];

	return {
        grafico: grafico
    };

	function grafico(nComparacao, nTrocas, nSegundos) {
		var html = "";
		if (contador != 3){
			contador++;
			comparacao.push(nComparacao);
			trocas.push(nTrocas);
			segundos.push(nSegundos);
			return "";
		} else {
			$AmCharts.geraValoresGrafico(comparacao, trocas, segundos);
			contador = 0;
			comparacao = [];
			trocas = [];
			segundos = [];
			html += "<div id='chartdiv' style='width: 50%; height: 20px; background-color: black;' ></div>";
			return html
		}
	}
})();
var $geradorGrafico = (function () {

	var contador = 0;
	var comparacao = [];
	var trocas = [];
	var segundos = [];

	return {
        grafico: grafico
    };

	function grafico(nComparacao, nTrocas, nSegundos) {
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
			return "<div id='chartdiv' style='width: 100%; height: 400px; background-color: #FFFFFF;' ></div>"
		}
	}
})();
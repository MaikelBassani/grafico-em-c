var $geradorGrafico = (function () {

	var contador = 0;
	var comparacao;
	var trocas;
	var segundos;
	var contDiv = 0;

	return {
        grafico: grafico
    };

	function grafico(nComparacao, nTrocas, nSegundos) {
		var html = "";
			contador++;
			comparacao = nComparacao;
			trocas = nTrocas;
			segundos = nSegundos;
			$AmCharts.geraValoresGrafico(comparacao, trocas, segundos);
			console.log(comparacao, trocas, segundos);
			if (contador == 15){
				$AmCharts.Grafico()
			}
	}
})();
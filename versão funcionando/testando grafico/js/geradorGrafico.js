var $geradorGrafico = (function () {

	var contador = 0;
	var comparacao = [];
	var trocas = [];
	var segundos = [];
	var contDiv = 0;

	return {
        grafico: grafico
    };

	function grafico(nComparacao, nTrocas, nSegundos) {
		var html = "";
			console.log("aki");
			contador++;
			comparacao.push(nComparacao);
			trocas.push(nTrocas);
			segundos.push(nSegundos);
			$AmCharts.geraValoresGrafico(comparacao, trocas, segundos);
			console.log(contador);
			if (contador == 15){
				$AmCharts.Grafico()
			}
	}
})();
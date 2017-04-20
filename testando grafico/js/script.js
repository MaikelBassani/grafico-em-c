var dataUrl = "dados/myfile.json",
	itensConteudo = "item-conteudo.html",
	itengrafico = "item-grafico.html";

function insereHtml(seletor, html) {
  var elemento = document.querySelector(seletor);
  console.log(html);
  elemento.innerHTML = html;
}

function inserePropriedade(template, propName, propValue) {

  var propriedade = "{{" + propName + "}}";

  template = template.replace(new RegExp(propriedade, "g"), propValue);
  return template;
}

function constroiPagina(dados) {
  var htmlFinal = "";
  $ajaxUtils.sendGetRequest(itensConteudo, function(itensConteudo) {
    for (var i = 0, max = dados.length; i < max; i++) {	
		var html = itensConteudo,
			titulo = dados[i].Titulo,
			comparacao = dados[i].Comparacoes,
			troca = dados[i].Trocas,
			segundo = dados[i].Segundos;

      html = inserePropriedade(html,"Titulo",titulo);
	  html = inserePropriedade(html,"Comparacoes",comparacao);
	  html = inserePropriedade(html,"Trocas",troca);
	  html = inserePropriedade(html,"Segundos",segundo);

      htmlFinal+= html;
    }
    insereHtml("#nadinha", htmlFinal);
	
  }, false);
}

function constroiPagina2(dados) {
  var htmlFinal = "";
  $ajaxUtils.sendGetRequest(itengrafico, function(itengrafico) {
    for (var i = 0, max = dados.length; i < max; i++) {	
		var html = itengrafico,
			titulo = dados[i].Titulo,
			comparacao = dados[i].Comparacoes,
			troca = dados[i].Trocas,
			segundo = dados[i].Segundos;

	  html += $geradorGrafico.grafico(comparacao, troca, segundo);

      htmlFinal+= html;
    }
    insereHtml("#graficos", htmlFinal);
	
  }, false);
}
$ajaxUtils.sendGetRequest(dataUrl, constroiPagina);
$ajaxUtils.sendGetRequest(dataUrl, constroiPagina2);

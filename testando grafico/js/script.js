var dataUrl = "dados/myfile.json",
	itensConteudo = "item-conteudo.html";

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
	  html += $geradorGrafico.grafico(comparacao, troca, segundo);

      htmlFinal+= html;
    }
    insereHtml("#nadinha", htmlFinal);
	
  }, false);
}
$ajaxUtils.sendGetRequest(dataUrl, constroiPagina);

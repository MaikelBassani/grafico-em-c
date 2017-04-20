var comparacao = [];
var trocas = [];
var segundos = [];

var $AmCharts = (function () {

return {
    geraValoresGrafico: geraValoresGrafico,
    Grafico: Grafico
};

function geraValoresGrafico(nComparacao, nTrocas, nSegundos) {
    console.log("aki");
    for (var i = 0; i < nComparacao.length; i++){
        comparacao.push(nComparacao[i]);
        trocas.push(nTrocas[i]);
        segundos.push(nSegundos[i]);
    }
}

function Grafico() {
const dataset1 = [comparacao[0],trocas[0],segundos[0],comparacao[1],trocas[1],segundos[1],comparacao[2],trocas[2],segundos[2]];
const dataset2 = [comparacao[3],trocas[3],segundos[3],comparacao[4],trocas[4],segundos[4],comparacao[5],trocas[5],segundos[5]];
const dataset3 = [comparacao[6],trocas[6],segundos[6],comparacao[7],trocas[7],segundos[7],comparacao[8],trocas[8],segundos[8]];
const dataset4 = [comparacao[9],trocas[9],segundos[9],comparacao[10],trocas[10],segundos[10],comparacao[11],trocas[11],segundos[11]];
const dataset5 = [comparacao[12],trocas[12],segundos[12],comparacao[13],trocas[13],segundos[13],comparacao[14],trocas[14],segundos[14]];
const width = 4000
const height = 300
const rectHeight = 25

let svg1 = d3.select('.chart1')
  .append('svg')
  .attr('width',width)
  .attr('height',height)

let svg2 = d3.select('.chart2')
  .append('svg')
  .attr('width',width)
  .attr('height',height)

let svg3 = d3.select('.chart3')
  .append('svg')
  .attr('width',width)
  .attr('height',height)

let svg4 = d3.select('.chart2')
  .append('svg')
  .attr('width',width)
  .attr('height',height)

let svg5 = d3.select('.chart3')
  .append('svg')
  .attr('width',width)
  .attr('height',height) 

svg1.selectAll('rect')
  .data(dataset1)
  .enter()
  .append('rect')
  .attr('x',20)
  .attr('y',(d,i)=>{
    return i * rectHeight
  })
  .attr('width',(d,i)=>{
    return d
  })
  .attr('height',rectHeight-5)
  .attr('fill','steelblue')

svg2.selectAll('rect')
  .data(dataset2)
  .enter()
  .append('rect')
  .attr('x',20)
  .attr('y',(d,i)=>{
    return i * rectHeight
  })
  .attr('width',(d,i)=>{
    return d
  })
  .attr('height',rectHeight-5)
  .attr('fill','steelblue')

svg3.selectAll('rect')
  .data(dataset3)
  .enter()
  .append('rect')
  .attr('x',20)
  .attr('y',(d,i)=>{
    return i * rectHeight
  })
  .attr('width',(d,i)=>{
    return d
  })
  .attr('height',rectHeight-5)
  .attr('fill','steelblue')

svg4.selectAll('rect')
  .data(dataset4)
  .enter()
  .append('rect')
  .attr('x',20)
  .attr('y',(d,i)=>{
    return i * rectHeight
  })
  .attr('width',(d,i)=>{
    return d
  })
  .attr('height',rectHeight-5)
  .attr('fill','steelblue')

svg5.selectAll('rect')
  .data(dataset5)
  .enter()
  .append('rect')
  .attr('x',20)
  .attr('y',(d,i)=>{
    return i * rectHeight
  })
  .attr('width',(d,i)=>{
    return d
  })
  .attr('height',rectHeight-5)
  .attr('fill','steelblue')

}
})();
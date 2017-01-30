d3.json("data/biomass.json", function(biomasse_data) {


  biomasse_data.forEach(function(d){
      d.ID = +d.ID ;
      d.MEAN = +d.MEAN ;
  });

  var biomasseChart = dc.barChart('#biomasseGraphe');

  var ndx = crossfilter(biomasse_data);
  var dimension98 = ndx.dimension(function(d){return d.ID});
  var dimensionGroup = dimension98.group().reduceSum(function(d){
    return d.MEAN ;
  });

  biomasseChart.width(450)
              .height(300)
              .x(d3.scale.linear().domain([1, 15]))
              .group(dimensionGroup)
              .dimension(dimension98)
            //  .renderHorizontalGridLines(true)
              .elasticX(true)
              //.xAxis().ticks(4)
              // .label(function(d){
              //   return d.NAME;
              // })
              .render();
});

d3.csv('data/test.csv', function(csvdata) {

    // csvdata.forEach(function(d){
    //     d.annee = d.annee ;
    //     d.biomasse = +d.biomasse ;
    // });


    var csvChart = dc.barChart('#grapheAnomalie') ;

    var cd = crossfilter(csvdata);
    var csvDim = cd.dimension(function(d){ return d.annee});
    var csvGroup = csvDim.group().reduceSum(function(d){
      return d.biomasse;
    });


    csvChart.width(450)
            .height(300)
            .dimension(csvDim)
            .group(csvGroup)
            .x(d3.scale.linear().domain([1998, 2007]))
            .elasticY(true)
            .yAxisLabel("Axe des Y!")
            //.colors(["#a60000","#ff0000", "#ff4040","#ff7373","#67e667","#39e639","#00cc00"])
	          .xAxis().tickFormat();

    csvChart.render();
});

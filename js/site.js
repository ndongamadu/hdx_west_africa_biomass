d3.json("data/biomass.json", function(biomasse_data) {

  var biomasseChart = dc.barChart('#biomasseGraphe');

  var ndx = crossfilter(biomasse_data);
  var dimension98 = ndx.dimension(function(d){return d.ID});
  var dimensionGroup = dimension98.group();

  biomasseChart.width(650)
              .height(300)
              .x(d3.scale.linear())
            //  .yAxisLabel("This is the Y Axis!")
              .group(dimensionGroup)
              .dimension(dimension98)
            //  .renderHorizontalGridLines(true)
              .elasticX(true)
              //.colors(["#a60000","#ff0000", "#ff4040","#ff7373","#67e667","#39e639","#00cc00"])
              .label(function(d){
                return d.NAME;
              });

dc.renderAll();
});

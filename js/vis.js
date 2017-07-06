(function() {
  var margin = {top: 50, left:50, right:50, bottom: 50},
    height = 400 - margin.top - margin.bottom,
    width = 800 - margin.left - margin.right;

  var svg = d3.select("#map")
        .append("svg")
        .attr("height", height + margin.top + margin.bottom)
        .attr("width", width + margin.left + margin.right)
        .append("g")
        .attr("transform", "translate(" + margin.left +"," + margin.top +")");

  // Get world.topojson
  d3.queue()
    .defer(d3.json, "world-countries.topojson")
    .await(ready)
  // Get travel data



  // Make the map flat using projections
  var projection = d3.geoMercator()
    .translate([ width / 2, height / 2 ])
    .scale(100)

  var path = d3.geoPath()
      .projection(projection)

function ready (error, data) {
  console.log(data);

var countries1 = topojson.feature(data, data.objects.countries1).features


console.log(countries1);

svg.selectAll(".country1")
  .data(countries1)
  .enter().append("path")
  .attr("class", "country1")
  .attr("d", path)
  .on('mouseover', function(d) {
    //Add class selected
    d3.select(this).classed("selected", true)
  })
    .on('mouseout', function(d) {
      //Remove class selected
      d3.select(this).classed("selected", false)
  })
}
})();

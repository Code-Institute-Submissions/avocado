queue()
    .defer(d3.csv, "./data/avocado.csv")
    .await(makeGraphs);
    
function makeGraphs(error, avocadoData) {
    var ndx = crossfilter(avocadoData);
    avocadoData.forEach(function(d) {
        d.price = parseInt(d.price);
       
    });
    
    show_AveragePrice(ndx);
    show_year(ndx);
    show_region(ndx);
    show_type(ndx);
    dc.renderAll();
}



function show_AveragePrice(ndx) {
    var dim = ndx.dimension(dc.pluck('AveragePrice'));
    var group = dim.group();
    
    dc.barChart("#AveragePrice")
        .width(400)
        .height(300)
        .margins({top: 30, right: 50, bottom: 50, left: 50})
        .dimension(dim)
        .group(group)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .elasticY(true)
        .xAxisLabel("Price in Dollars")
        .yAxis().ticks(20);
}


function show_year(ndx) {
    var dim = ndx.dimension(dc.pluck('year'));
    var group = dim.group();
    
    dc.barChart("#year")
        .width(400)
        .height(300)
        .margins({top: 30, right: 50, bottom: 50, left: 50})
        .dimension(dim)
        .group(group)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .elasticY(true)
        .xAxisLabel("Total Bags Per Year")
        .yAxis().ticks(20);
}

function show_region(ndx) {
    var dim = ndx.dimension(dc.pluck('region'));
    var group = dim.group();
    
    dc.barChart("#region")
        .width(400)
        .height(300)
        .margins({top: 30, right: 50, bottom: 50, left: 50})
        .dimension(dim)
        .group(group)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .elasticY(true)
        .xAxisLabel("Bags Sold Per Region")
        .yAxis().ticks(20);
}

function show_type(ndx) {
    var dim = ndx.dimension(dc.pluck('type'));
    var group = dim.group();
    
    dc.barChart("#type")
        .width(400)
        .height(300)
        .margins({top: 30, right: 50, bottom: 50, left: 50})
        .dimension(dim)
        .group(group)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .elasticY(true)
        .xAxisLabel("Type")
        .yAxis().ticks(20);
}



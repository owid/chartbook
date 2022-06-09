var earningscolor = '#104E8B'; // blue
var overallinequalitycolor = '#008000'; // green
var povertycolor = '#e31a1c'; // red
var wealthcolor = '#FF9912'; // gold
var topincomecolor = '#6a3d9a'; // purple

// –––––––––––––––––––––––––––––––––––––––––––––– //
//	Top Chart – Earnings Dispersion
// –––––––––––––––––––––––––––––––––––––––––––––– //

var top_series = [
    {
        key: "Top decile as % median - Gross weekly individual earnings", // XXX
        values: [],
        color: earningscolor
    }
]

var RH_tickMarks = [160, 170, 180, 190, 200, 210, 220] // XXX    100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250,260,270,280,290,300
console.log(top_series)

c3.csv("top_chart.csv", function (error, csv) {  // XXX
    if (error) return console.log("there was an error loading the earnings dispersion csv: " + error);
    console.log("there are " + csv.length + " elements in my earnings dispersion dataset");

    var column_names = top_series.map(item => { return item.key });  // Returns the column header i.e. the measure
    console.log(column_names)

    for (var i = 0; i < column_names.length; i++) {
        top_series[i].key = column_names[i];
        top_series[i].values = csv.map(function (d) {
            return [+d["year"] - 1969.5, parseFloat(d[column_names[i]])];
        }).filter(function (d) {
            return d[1] || (d[1] === 0);
        });
    };

    var chart;

    mv.addGraph(function () {
        chart = mv.models.lineChart()
            .x(function (d) { return d[0] * 31556900000 })
            .y(function (d) { return d[1] })
            .tooltipContent(function (key, x, y, e, graph) {
                return '<h3>' + key + '</h3>' +
                    '<p>' + y + '% in ' + x + '</p>'
            })
            .showLegend(false)
            .showXAxis(false)
            .margin({ top: 75, right: 250, bottom: 10, left: 38 });

        chart.xAxis.tickFormat(function (d) { return c3.time.format('%Y')(new Date(d)) });

        chart.xDomain([((1900 - 1969.5) * 31556900000), ((2020 - 1969.5) * 31556900000)]);

        chart.yAxis.tickValues(RH_tickMarks);

        chart.yDomain([160, 220]); //XXX

        c3.select('#chart1')
            .datum(top_series)
            .transition().call(chart);


        mv.utils.windowResize(chart.update);

        chart.dispatch.on('stateChange', function (e) { mv.log('New State:', JSON.stringify(e)); });

        return chart;

    });


    // end read csv
});

//    End of Top Chart – Chart1 */
// –––––––––––––––––––––––––––––––––––––––––––––– //

// –––––––––––––––––––––––––––––––––––––––––––––– //
//	Bottom Chart 
// –––––––––––––––––––––––––––––––––––––––––––––– //

var series = [
    {
        key: "Gini coefficient - Gross individual income",
        values: [],
        color: overallinequalitycolor
    },
    {
        key: "Gini coefficient - Gross household income",
        values: [],
        color: overallinequalitycolor
    },
    {
        key: "Gini coefficient - Equivalised disposable household income",
        values: [],
        color: overallinequalitycolor
    },
    {
        key: "Share of top 1% - Pre-tax fiscal income (individuals)",
        values: [],
        color: topincomecolor
    },
    {
        key: "Share of top 1% - Pre-tax national income (equal-split adults)",
        values: [],
        color: topincomecolor
    },
    {
        key: "Share below 60% median - Equivalised disposable household income",
        values: [],
        color: povertycolor
    },
    {
        key: "Share of top 1% - Household net wealth",
        values: [],
        color: wealthcolor
    },
];

var LH_tickMarks = [10, 20, 30, 40, 50] // XXX     10,20,30,40,50,60,70,80,90,100


c3.csv("bottom_chart.csv", function (error, csv) { // XXX
    if (error) return console.log("there was an error loading the csv: " + error);
    console.log("there are " + csv.length + " elements in my csv set");

    var column_names = series.map(item => { return item.key }); // XXX
    console.log(column_names)

    for (var i = 0; i < column_names.length; i++) {
        series[i].key = column_names[i];
        series[i].values = csv.map(function (d) {
            return [+d["year"] - 1969.5, parseFloat(d[column_names[i]])];
        }).filter(function (d) {
            return d[1] || (d[1] === 0);
        });
    };


    var colors = c3.scale.category20();

    keyColor = function (d, i) { return colors(d.key) };

    var chart;

    mv.addGraph(function () {
        chart = mv.models.lineChart()
            .x(function (d) { return d[0] * 31556900000 })
            .y(function (d) { return d[1] })
            .color(keyColor)
            .tooltipContent(function (key, x, y, e, graph) {
                return '<h3>' + key + '</h3>' +
                    '<p>' + y + '% in ' + x + '</p>'
            })
            .showLegend(false)
            .showXAxis(false)

            .margin({ top: 25, right: 250, bottom: -5, left: 38 });


        chart.xAxis
            .tickFormat(function (d) { return c3.time.format('%Y')(new Date(d)) });

        chart.xDomain([((1900 - 1969.5) * 31556900000), ((2020 - 1969.5) * 31556900000)]);


        chart.yAxis.tickValues(LH_tickMarks);

        chart.yDomain([-1, 50]);  //XXX

        c3.select('#chart2')
            .datum(series)
            .transition().call(chart);


        mv.utils.windowResize(chart.update);

        chart.dispatch.on('stateChange', function (e) { mv.log('New State:', JSON.stringify(e)); });

        return chart;

    });


    // end read csv
    // –––––––––––––––––––––––––––––––––––––––––––––– //

});


var xAchse = c3.select('#chartXaxis');




xAchse.append("svg:rect")
    .attr("x", 0)
    .attr("y", 0)
    .attr("width", 65)
    .attr("height", 25)
    .style("fill", "white");

xAchse.append("svg:line")
    .attr("x1", 37)
    .attr("y1", 0.5)
    .attr("x2", 750)
    .attr("y2", 0.5)
    .style("stroke-width", 1)
    .style("stroke", "lightgray")
    .attr("shape-rendering", "crispedges");

xAchse.append("text")
    .attr("y", 4)
    .attr("x", 38 + (((750 - 38) / (2020 - 1900)) * (1900 - 1900)))
    .attr("class", "xAxisYear").attr("dy", ".71em").style("text-anchor", "middle")
    .text("1900");

xAchse.append("text")
    .attr("y", 4)
    .attr("x", 38 + (((750 - 38) / (2020 - 1900)) * (1910 - 1900)))
    .attr("class", "xAxisYear").attr("dy", ".71em").style("text-anchor", "middle")
    .text("1910");

xAchse.append("text")
    .attr("y", 4)
    .attr("x", 38 + (((750 - 38) / (2020 - 1900)) * (1920 - 1900)))
    .attr("class", "xAxisYear").attr("dy", ".71em").style("text-anchor", "middle")
    .text("1920");

xAchse.append("text")
    .attr("y", 4)
    .attr("x", 38 + (((750 - 38) / (2020 - 1900)) * (1930 - 1900)))
    .attr("class", "xAxisYear").attr("dy", ".71em").style("text-anchor", "middle")
    .text("1930");

xAchse.append("text")
    .attr("y", 4)
    .attr("x", 38 + (((750 - 38) / (2020 - 1900)) * (1940 - 1900)))
    .attr("class", "xAxisYear").attr("dy", ".71em").style("text-anchor", "middle")
    .text("1940");

xAchse.append("text")
    .attr("y", 4)
    .attr("x", 38 + (((750 - 38) / (2020 - 1900)) * (1950 - 1900)))
    .attr("class", "xAxisYear").attr("dy", ".71em").style("text-anchor", "middle")
    .text("1950");

xAchse.append("text")
    .attr("y", 4)
    .attr("x", 38 + (((750 - 38) / (2020 - 1900)) * (1960 - 1900)))
    .attr("class", "xAxisYear").attr("dy", ".71em").style("text-anchor", "middle")
    .text("1960");

xAchse.append("text")
    .attr("y", 4)
    .attr("x", 38 + (((750 - 38) / (2020 - 1900)) * (1970 - 1900)))
    .attr("class", "xAxisYear").attr("dy", ".71em").style("text-anchor", "middle")
    .text("1970");

xAchse.append("text")
    .attr("y", 4)
    .attr("x", 38 + (((750 - 38) / (2020 - 1900)) * (1980 - 1900)))
    .attr("class", "xAxisYear").attr("dy", ".71em").style("text-anchor", "middle")
    .text("1980");

xAchse.append("text")
    .attr("y", 4)
    .attr("x", 38 + (((750 - 38) / (2020 - 1900)) * (1990 - 1900)))
    .attr("class", "xAxisYear").attr("dy", ".71em").style("text-anchor", "middle")
    .text("1990");

xAchse.append("text")
    .attr("y", 4)
    .attr("x", 38 + (((750 - 38) / (2020 - 1900)) * (2000 - 1900)))
    .attr("class", "xAxisYear").attr("dy", ".71em").style("text-anchor", "middle")
    .text("2000");

xAchse.append("text")
    .attr("y", 4)
    .attr("x", 38 + (((750 - 38) / (2020 - 1900)) * (2010 - 1900)))
    .attr("class", "xAxisYear").attr("dy", ".71em").style("text-anchor", "middle")
    .text("2010");

xAchse.append("text")
    .attr("y", 4)
    .attr("x", 38 + (((750 - 38) / (2020 - 1900)) * ((2020 - 1900))) - 2)
    .attr("class", "xAxisYear").attr("dy", ".71em").style("text-anchor", "middle")
    .text("2020");



var AddToChart1 = c3.select('#chart1');




// –––––––––––––––––––––––––––––––––––––––––––––– //
/*                      Title                     */
// –––––––––––––––––––––––––––––––––––––––––––––– //


//Include Title
AddToChart1
    .append("text")
    .text("Economic Inequality in Australia")  // XXX
    .attr("x", 500)
    .attr("y", 28)
    .style("fill", "black")  // Farbe geben
    .attr("text-anchor", "middle")
    .attr("font-size", "32")
    .attr("font-family", "Helvetica")


// –––––––––––––––––––––––––––––––––––––––––––––------– //
/*                  Big Title Legend                    */
/* ---------------------------------------------------- */

//Earnings 
AddToChart1
    .append("text")
    .text("Earnings Dispersion")
    .attr("x", 95)
    .attr("y", 59)
    .style("fill", earningscolor)  // Farbe geben
    .attr("text-anchor", "beginning")
    .attr("font-size", "18")
    .attr("font-family", "Helvetica")

AddToChart1.append("svg:circle")
    .attr("cx", 85)
    .attr("cy", 52)
    .attr("r", 3)
    .style("fill", earningscolor);

//Overall Inequality
AddToChart1
    .append("text")
    .text("Overall Income Inequality")
    .attr("x", 285)
    .attr("y", 59)
    .style("fill", overallinequalitycolor)  // Farbe geben
    .attr("text-anchor", "beginning")
    .attr("font-size", "18")
    .attr("font-family", "Helvetica")

AddToChart1.append("svg:circle")
    .attr("cx", 275)
    .attr("cy", 52)
    .attr("r", 3)
    .style("fill", overallinequalitycolor);


//Poverty
AddToChart1
    .append("text")
    .text("Poverty")
    .attr("x", 517)
    .attr("y", 59)
    .style("fill", povertycolor)  // Farbe geben
    .attr("text-anchor", "beginning")
    .attr("font-size", "18")
    .attr("font-family", "Helvetica")
AddToChart1.append("svg:circle")
    .attr("cx", 507)
    .attr("cy", 52)
    .attr("r", 3)
    .style("fill", povertycolor);


//Top Incomes
AddToChart1
    .append("text")
    .text("Top Income Shares")
    .attr("x", 618)
    .attr("y", 59)
    .style("fill", topincomecolor)  // Farbe geben
    .attr("text-anchor", "beginning")
    .attr("font-size", "18")
    .attr("font-family", "Helvetica")
AddToChart1.append("svg:circle")
    .attr("cx", 608)
    .attr("cy", 52)
    .attr("r", 3)
    .style("fill", topincomecolor);


//Wealth
AddToChart1
    .append("text")
    .text("Wealth Inequality")
    .attr("x", 795)
    .attr("y", 59)
    .style("fill", wealthcolor)  // Farbe geben
    .attr("text-anchor", "beginning")
    .attr("font-size", "18")
    .attr("font-family", "Helvetica")
AddToChart1.append("svg:circle")
    .attr("cx", 785)
    .attr("cy", 52)
    .attr("r", 3)
    .style("fill", wealthcolor);



//Arrow Up
AddToChart1.append("svg:line")
    .attr("x1", 5)
    .attr("y1", 200)
    .attr("x2", 5)
    .attr("y2", 85)
    .style("stroke-width", 0.5)
    .style("stroke", "grey");

AddToChart1.append('path')
    .style("fill", "grey")
    .attr('d', function (d) {
        var x = 5,
            y = 82;
        return 'M ' + x + ' ' + y + ' l 4 18 l -8 0 z';
        //   return 'M ' + x +' '+ y + ' l 4.3 19 l -8 -3 z';
    });




var AddToChart2 = c3.select('#chart2');





// –––––––––––––––––––––––––––––––––––––––––––––– //
//    Per Cent Label	  
// –––––––––––––––––––––––––––––––––––––––––––––– //


AddToChart2.append("text")
    .attr("y", 1)
    .attr("x", -190)
    .attr("transform", "rotate(-90)")
    .attr("dy", ".71em")
    .style("text-anchor", "beginning")
    .attr("class", "yaxistitle")
    .text("Per Cent");

AddToChart2.append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 1)
    .attr("x", -5)
    .attr("dy", ".71em")
    .style("text-anchor", "end")
    .attr("fill", "grey")
    .attr("stroke", "light-grey")
    .attr("class", "yaxislabel")
    .text("more Inequality");


AddToChart2.append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 1)
    .attr("x", -310)
    .attr("dy", ".71em")
    .style("text-anchor", "beginning")
    .attr("fill", "grey")
    .attr("stroke", "light-grey")
    .attr("class", "yaxislabel")
    .text("less Inequality");


//Arrow Up
AddToChart2.append("svg:line")
    .attr("x1", 6)
    .attr("y1", 103)
    .attr("x2", 6)
    .attr("y2", 127)
    .style("stroke-width", 0.5)
    .style("stroke", "grey");

//Arrow Down
AddToChart2.append("svg:line")
    .attr("x1", 6)
    .attr("y1", 197)
    .attr("x2", 6)
    .attr("y2", 220)
    .style("stroke-width", 0.5)
    .style("stroke", "grey");

AddToChart2.append("svg:line")
    .attr("x1", 6)
    .attr("y1", 315)
    .attr("x2", 6)
    .attr("y2", 340)
    .style("stroke-width", 0.5)
    .style("stroke", "grey");

AddToChart2.append('path')
    .style("fill", "grey")
    .attr('d', function (d) {
        var x = 10,
            y = 335;
        return 'M ' + x + ' ' + y + ' l  -8 0  l 4 18  z';

        //  return 'M ' + x +' '+ y + ' l  -8 -3  l 4.3 19  z';
    });





//Y-Axis
/* ---------------------------------------------------- */


//Y-Axis Oberer Chart
AddToChart1.append("svg:line")
    .attr("x1", 37)
    .attr("y1", 200)
    .attr("x2", 37)
    .attr("y2", 66)
    .attr("shape-rendering", "crispedges")
    .style("stroke-width", 1)
// .style("stroke", "black");

//Y-Axis Unterer Chart
AddToChart2.append("svg:line")
    .attr("x1", 37)
    .attr("y1", 17)
    .attr("x2", 37)
    .attr("y2", 360)
    .attr("shape-rendering", "crispedges")
    .style("stroke-width", 1)
// .style("stroke", "black");

// Break in Y-Axis between top and bottom graph
AddToChart2.append("svg:line")
    .transition()
    .attr("x1", 21)
    .attr("y1", 5)
    .attr("x2", 33)
    .attr("y2", 9)
    .attr("shape-rendering", "geometricPrecision")
    .style("stroke-width", 1)
    .style("stroke", "black");

/* ---------------------------------------------------- */
/*                           Legend       XXX   YYY     */
/* ---------------------------------------------------- */

/* --------------- */
//RH – Top Chart
/* --------------- */



// Earnings Series

c3.select('#chart1')
    .append("text")
    .attr("class", "linelabel")
    .style("fill", earningscolor)
    .text("Top decile as % median - Gross weekly individual") // XXX
    .attr("x", 755)
    .attr("y", 90);
c3.select('#chart1')
    .append("text")
    .attr("class", "linelabel")
    .style("fill", earningscolor)
    .text("earnings ★")
    .attr("x", 755)
    .attr("y", 100);

/* --------------- */
//LH – Bottom Chart
/* --------------- */

// Overall Inequality Series
c3.select('#chart2')
    .append("text")
    .attr("class", "linelabel")
    .style("fill", overallinequalitycolor)
    .text("Gini coefficient – Gross individual income")
    .attr("x", 350)
    .attr("y", 82);

c3.select('#chart2')
    .append("text")
    .attr("class", "linelabel")
    .style("fill", overallinequalitycolor)
    .text("Gini coefficient – Gross")
    .attr("x", 460)
    .attr("y", 128);
c3.select('#chart2')
    .append("text")
    .attr("class", "linelabel")
    .style("fill", overallinequalitycolor)
    .text("household income")
    .attr("x", 460)
    .attr("y", 138);

c3.select('#chart2')
    .append("text")
    .attr("class", "linelabel")
    .style("fill", overallinequalitycolor)
    .text("Gini coefficient – Equivalised disposable household")
    .attr("x", 760)
    .attr("y", 140);
c3.select('#chart2')
    .append("text")
    .attr("class", "linelabel")
    .style("fill", overallinequalitycolor)
    .text("income ★")
    .attr("x", 760)
    .attr("y", 150);


// Top Income Series
c3.select('#chart2')
    .append("text")
    .attr("class", "linelabel")
    .style("fill", topincomecolor)
    .text("Share of top 1% - Pre-tax national income (equal-split")
    .attr("x", 760)
    .attr("y", 270);
c3.select('#chart2')
    .append("text")
    .attr("class", "linelabel")
    .style("fill", topincomecolor)
    .text("adults) ★")
    .attr("x", 760)
    .attr("y", 280);

c3.select('#chart2')
    .append("text")
    .attr("class", "linelabel")
    .style("fill", topincomecolor)
    .text("Share of top 1% - Pre-tax fiscal income")
    .attr("x", 760)
    .attr("y", 295);
c3.select('#chart2')
    .append("text")
    .attr("class", "linelabel")
    .style("fill", topincomecolor)
    .text("(individuals) ★")
    .attr("x", 760)
    .attr("y", 305);


// Poverty Series
c3.select('#chart2')
    .append("text")
    .attr("class", "linelabel")
    .style("fill", povertycolor)
    .text("Share below 60% median - Equivalised disposable")
    .attr("x", 760)
    .attr("y", 222);
c3.select('#chart2')
    .append("text")
    .attr("class", "linelabel")
    .style("fill", povertycolor)
    .text("household income ★")
    .attr("x", 760)
    .attr("y", 232);


// Wealth Series
c3.select('#chart2')
    .append("text")
    .attr("class", "linelabel")
    .style("fill", wealthcolor)
    .text("Share of top 1% - Household net wealth ★")
    .attr("x", 680)
    .attr("y", 255);


/* ---------------------------------------------------- */
// Credits
/* ---------------------------------------------------- */


var creditsCanvas = c3.select("#CreditsContainer")
var xorigin = 8;
var yorigin = 1;

/*1. Zeile*/
// creditsCanvas
//     .append("text")
//     .text("A. B. Atkinson, J. Hasell, S. Morelli and M. Roser (2017) – 'The Chartbook of Economic Inequality' at")
//     .attr("x", xorigin + 0)
//     .attr("y", yorigin + 10)
//     .attr("id", 'erstesTextstuckZweiteZeile').attr('class', 'creditsText');

// var erstesTextstuckZweiteZeileLange = document.getElementById('erstesTextstuckZweiteZeile').getComputedTextLength();

// creditsCanvas.append("svg:a")
//     .attr("xlink:href", "http://www.chartbookofeconomicinequality.com")
//     .attr("target", "_blank")
//     .append("svg:text")
//     .attr("x", xorigin + erstesTextstuckZweiteZeileLange + 3)
//     .attr("y", yorigin + 10)
//     .attr('class', 'creditsLink')
//     .text("www.ChartbookOfEconomicInequality.com");


/*2. Zeile left*/
creditsCanvas.append("svg:a")
    .attr("xlink:href", "http://www.chartbookofeconomicinequality.com/economic-inequality/measures-of-economic-inequality/")
    .attr("target", "_blank")
    .append("svg:text")
    .text("Click here")
    .attr("x", xorigin + 0)
    .attr("y", yorigin + 26)
    .attr("id", 'erstesTextstuckMeasureLink').attr('class', 'creditsLink');
var erstesTextstuckMeasureLinkLange = document.getElementById('erstesTextstuckMeasureLink').getComputedTextLength();

creditsCanvas.append("text")
    .attr("x", xorigin + erstesTextstuckMeasureLinkLange + 3)
    .attr("y", yorigin + 26)
    .attr('class', 'creditsText').attr("id", 'zweitesTextstuckMeasureLink')
    .text("for an explanation of the measures of economic inequality.");
var zweitesTextstuckMeasureLinkLange = document.getElementById('zweitesTextstuckMeasureLink').getComputedTextLength();



/*2. Zeile – right*/
creditsCanvas
    .append("text")
    .text("This visualisation is licensed under a")
    .attr("x", xorigin + 610)
    .attr("y", yorigin + 26)
    .attr("id", 'erstesTextstuck').attr('class', 'creditsText');
var erstesTextstuckLange = document.getElementById('erstesTextstuck').getComputedTextLength();

creditsCanvas.append("svg:a")
    .attr("xlink:href", "http://creativecommons.org/licenses/by-sa/4.0/deed.en_US")
    .attr("target", "_blank")
    .append("svg:text")
    .attr("x", xorigin + 610 + erstesTextstuckLange + 3)
    .attr("y", yorigin + 26)
    .attr('class', 'creditsLink').attr("id", 'zweitesTextstuck')
    .text("Creative Commons BY-SA license");
var zweitesTextstuckLange = document.getElementById('zweitesTextstuck').getComputedTextLength();

/*3. Zeile – left*/
creditsCanvas
    .append("text")
    .text("View the")
    .attr("x", xorigin + 0)
    .attr("y", yorigin + 40)
    .attr("id", 'erstesTextstuckZweiteZeile').attr('class', 'creditsText');

var erstesTextstuckZweiteZeileLange = document.getElementById('erstesTextstuckZweiteZeile').getComputedTextLength();

creditsCanvas.append("svg:a")
    .attr("xlink:href", "https://docs.google.com/spreadsheets/d/1jLNfP3iuteUJrH0zS9qWONskyKh9pFcl1hKSlgEc-I8/edit#gid=1578718062")
    .attr("target", "_blank")
    .append("svg:text")
    .attr("x", xorigin + erstesTextstuckZweiteZeileLange + 3)
    .attr("y", yorigin + 40)
    .attr('class', 'creditsLink')
    .text("database");
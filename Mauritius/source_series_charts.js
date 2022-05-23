var app = angular.module('plunker', ['nvd3']);

app.controller('MainCtrl', function ($scope) {
    $scope.options = {
        chart: {
            type: 'multiChart',
            height: 450,
            margin: {
                top: 30,
                right: 60,
                bottom: 50,
                left: 70
            },
            color: d3.scale.category10().range(),
            duration: 500,
            yAxis1: {
                tickFormat: function (d) {
                    return d3.format(',.1f')(d);
                }
            },
            interpolate: false,
            legend: {
                align: false,
                height: 200,
                margin: {
                    top: 10,
                    bottom: 25,
                }
            },
        }
    };

    //insert data
    $scope.data0 = [{ key: 'Chartbook series', type: 'line', values: [{ 'x': 1975, 'y': 42.0, 'series': 0 }, { 'x': 1980, 'y': 44.5, 'series': 0 }, { 'x': 1986, 'y': 39.6, 'series': 0 }, { 'x': 1991, 'y': 37.9, 'series': 0 }, { 'x': 1996, 'y': 38.7, 'series': 0 }, { 'x': 2001, 'y': 37.1, 'series': 0 }, { 'x': 2006, 'y': 38.8, 'series': 0 }, { 'x': 2012, 'y': 41.4, 'series': 0 }, { 'x': 2017, 'y': 40.0, 'series': 0 }], yAxis: 1 }, { key: 'HBS - Disposable household income', type: 'scatter', values: [{ 'x': 1975, 'y': 42.0, 'series': 1 }, { 'x': 1980, 'y': 44.5, 'series': 1 }, { 'x': 1986, 'y': 39.6, 'series': 1 }, { 'x': 1991, 'y': 37.9, 'series': 1 }, { 'x': 1996, 'y': 38.7, 'series': 1 }, { 'x': 2001, 'y': 37.1, 'series': 1 }, { 'x': 2006, 'y': 38.8, 'series': 1 }, { 'x': 2012, 'y': 41.4, 'series': 1 }, { 'x': 2017, 'y': 40.0, 'series': 1 }], yAxis: 1 }];
    $scope.data1 = [{ key: 'Chartbook series', type: 'line', values: [{ 'x': 1980, 'y': 13.74, 'series': 0 }, { 'x': 1981, 'y': 13.74, 'series': 0 }, { 'x': 1982, 'y': 13.74, 'series': 0 }, { 'x': 1983, 'y': 13.74, 'series': 0 }, { 'x': 1984, 'y': 13.74, 'series': 0 }, { 'x': 1985, 'y': 13.74, 'series': 0 }, { 'x': 1986, 'y': 13.74, 'series': 0 }, { 'x': 1987, 'y': 13.74, 'series': 0 }, { 'x': 1988, 'y': 13.74, 'series': 0 }, { 'x': 1989, 'y': 13.74, 'series': 0 }, { 'x': 1990, 'y': 13.74, 'series': 0 }, { 'x': 1991, 'y': 13.74, 'series': 0 }, { 'x': 1992, 'y': 13.74, 'series': 0 }, { 'x': 1993, 'y': 13.74, 'series': 0 }, { 'x': 1994, 'y': 13.74, 'series': 0 }, { 'x': 1995, 'y': 13.74, 'series': 0 }, { 'x': 1996, 'y': 13.74, 'series': 0 }, { 'x': 1997, 'y': 13.74, 'series': 0 }, { 'x': 1998, 'y': 13.74, 'series': 0 }, { 'x': 1999, 'y': 13.74, 'series': 0 }, { 'x': 2000, 'y': 13.74, 'series': 0 }, { 'x': 2001, 'y': 13.74, 'series': 0 }, { 'x': 2002, 'y': 13.74, 'series': 0 }, { 'x': 2003, 'y': 13.74, 'series': 0 }, { 'x': 2004, 'y': 13.74, 'series': 0 }, { 'x': 2005, 'y': 13.74, 'series': 0 }, { 'x': 2006, 'y': 13.74, 'series': 0 }, { 'x': 2007, 'y': 14.29, 'series': 0 }, { 'x': 2008, 'y': 14.83, 'series': 0 }, { 'x': 2009, 'y': 15.38, 'series': 0 }, { 'x': 2010, 'y': 15.92, 'series': 0 }, { 'x': 2011, 'y': 16.47, 'series': 0 }, { 'x': 2012, 'y': 17.01, 'series': 0 }, { 'x': 2013, 'y': 16.79, 'series': 0 }, { 'x': 2014, 'y': 16.56, 'series': 0 }, { 'x': 2015, 'y': 16.34, 'series': 0 }, { 'x': 2016, 'y': 16.12, 'series': 0 }, { 'x': 2017, 'y': 15.89, 'series': 0 }, { 'x': 2018, 'y': 15.89, 'series': 0 }, { 'x': 2019, 'y': 15.89, 'series': 0 }, { 'x': 2020, 'y': 15.89, 'series': 0 }], yAxis: 1 }, { key: 'WID - Pre-tax national income (equal-split adults)', type: 'scatter', values: [{ 'x': 1980, 'y': 13.74, 'series': 1 }, { 'x': 1981, 'y': 13.74, 'series': 1 }, { 'x': 1982, 'y': 13.74, 'series': 1 }, { 'x': 1983, 'y': 13.74, 'series': 1 }, { 'x': 1984, 'y': 13.74, 'series': 1 }, { 'x': 1985, 'y': 13.74, 'series': 1 }, { 'x': 1986, 'y': 13.74, 'series': 1 }, { 'x': 1987, 'y': 13.74, 'series': 1 }, { 'x': 1988, 'y': 13.74, 'series': 1 }, { 'x': 1989, 'y': 13.74, 'series': 1 }, { 'x': 1990, 'y': 13.74, 'series': 1 }, { 'x': 1991, 'y': 13.74, 'series': 1 }, { 'x': 1992, 'y': 13.74, 'series': 1 }, { 'x': 1993, 'y': 13.74, 'series': 1 }, { 'x': 1994, 'y': 13.74, 'series': 1 }, { 'x': 1995, 'y': 13.74, 'series': 1 }, { 'x': 1996, 'y': 13.74, 'series': 1 }, { 'x': 1997, 'y': 13.74, 'series': 1 }, { 'x': 1998, 'y': 13.74, 'series': 1 }, { 'x': 1999, 'y': 13.74, 'series': 1 }, { 'x': 2000, 'y': 13.74, 'series': 1 }, { 'x': 2001, 'y': 13.74, 'series': 1 }, { 'x': 2002, 'y': 13.74, 'series': 1 }, { 'x': 2003, 'y': 13.74, 'series': 1 }, { 'x': 2004, 'y': 13.74, 'series': 1 }, { 'x': 2005, 'y': 13.74, 'series': 1 }, { 'x': 2006, 'y': 13.74, 'series': 1 }, { 'x': 2007, 'y': 14.29, 'series': 1 }, { 'x': 2008, 'y': 14.83, 'series': 1 }, { 'x': 2009, 'y': 15.38, 'series': 1 }, { 'x': 2010, 'y': 15.92, 'series': 1 }, { 'x': 2011, 'y': 16.47, 'series': 1 }, { 'x': 2012, 'y': 17.01, 'series': 1 }, { 'x': 2013, 'y': 16.79, 'series': 1 }, { 'x': 2014, 'y': 16.56, 'series': 1 }, { 'x': 2015, 'y': 16.34, 'series': 1 }, { 'x': 2016, 'y': 16.12, 'series': 1 }, { 'x': 2017, 'y': 15.89, 'series': 1 }, { 'x': 2018, 'y': 15.89, 'series': 1 }, { 'x': 2019, 'y': 15.89, 'series': 1 }, { 'x': 2020, 'y': 15.89, 'series': 1 }], yAxis: 1 }];
    $scope.data2 = [{ key: 'Chartbook series', type: 'line', values: [{ 'x': 1996, 'y': 8.2, 'series': 0 }, { 'x': 2001, 'y': 7.8, 'series': 0 }, { 'x': 2006, 'y': 8.5, 'series': 0 }, { 'x': 2012, 'y': 9.8, 'series': 0 }, { 'x': 2017, 'y': 10.3, 'series': 0 }], yAxis: 1 }, { key: 'HBS - Equivalised household income', type: 'scatter', values: [{ 'x': 1996, 'y': 8.2, 'series': 1 }, { 'x': 2001, 'y': 7.8, 'series': 1 }, { 'x': 2006, 'y': 8.5, 'series': 1 }, { 'x': 2012, 'y': 9.8, 'series': 1 }, { 'x': 2017, 'y': 10.3, 'series': 1 }], yAxis: 1 }]
});
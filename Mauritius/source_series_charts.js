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
    $scope.data0 = [
        {
            key: 'Chartbook series', type: 'line', values: [
                { 'x': 1975.0, 'y': 42.0, 'series': 0 },
                { 'x': 1980.0, 'y': 44.5, 'series': 0 },
                { 'x': 1986.0, 'y': 39.6, 'series': 0 },
                { 'x': 1991.0, 'y': 37.9, 'series': 0 },
                { 'x': 1996.0, 'y': 38.7, 'series': 0 },
                { 'x': 2001.0, 'y': 37.1, 'series': 0 },
                { 'x': 2006.0, 'y': 38.8, 'series': 0 },
                { 'x': 2012.0, 'y': 41.4, 'series': 0 },
                { 'x': 2017.0, 'y': 40.0, 'series': 0 }], yAxis: 1
        },
        {
            key: 'HBS - Disposable monthly household income', type: 'scatter', values: [
                { 'x': 1975.0, 'y': 42.0, 'series': 1 },
                { 'x': 1980.0, 'y': 44.5, 'series': 1 },
                { 'x': 1986.0, 'y': 39.6, 'series': 1 },
                { 'x': 1991.0, 'y': 37.9, 'series': 1 },
                { 'x': 1996.0, 'y': 38.7, 'series': 1 },
                { 'x': 2001.0, 'y': 37.1, 'series': 1 },
                { 'x': 2006.0, 'y': 38.8, 'series': 1 },
                { 'x': 2012.0, 'y': 41.4, 'series': 1 },
                { 'x': 2017.0, 'y': 40.0, 'series': 1 }], yAxis: 1
        }];
    $scope.data1 = [
        {
            key: 'Chartbook series', type: 'line', values: [
                { 'x': 1980.0, 'y': 13.7, 'series': 0 },
                { 'x': 1981.0, 'y': 13.7, 'series': 0 },
                { 'x': 1982.0, 'y': 13.7, 'series': 0 },
                { 'x': 1983.0, 'y': 13.7, 'series': 0 },
                { 'x': 1984.0, 'y': 13.7, 'series': 0 },
                { 'x': 1985.0, 'y': 13.7, 'series': 0 },
                { 'x': 1986.0, 'y': 13.7, 'series': 0 },
                { 'x': 1987.0, 'y': 13.7, 'series': 0 },
                { 'x': 1988.0, 'y': 13.7, 'series': 0 },
                { 'x': 1989.0, 'y': 13.7, 'series': 0 },
                { 'x': 1990.0, 'y': 13.7, 'series': 0 },
                { 'x': 1991.0, 'y': 13.7, 'series': 0 },
                { 'x': 1992.0, 'y': 13.7, 'series': 0 },
                { 'x': 1993.0, 'y': 13.7, 'series': 0 },
                { 'x': 1994.0, 'y': 13.7, 'series': 0 },
                { 'x': 1995.0, 'y': 13.7, 'series': 0 },
                { 'x': 1996.0, 'y': 13.7, 'series': 0 },
                { 'x': 1997.0, 'y': 13.7, 'series': 0 },
                { 'x': 1998.0, 'y': 13.7, 'series': 0 },
                { 'x': 1999.0, 'y': 13.7, 'series': 0 },
                { 'x': 2000.0, 'y': 13.7, 'series': 0 },
                { 'x': 2001.0, 'y': 13.7, 'series': 0 },
                { 'x': 2002.0, 'y': 13.7, 'series': 0 },
                { 'x': 2003.0, 'y': 13.7, 'series': 0 },
                { 'x': 2004.0, 'y': 13.7, 'series': 0 },
                { 'x': 2005.0, 'y': 13.7, 'series': 0 },
                { 'x': 2006.0, 'y': 13.7, 'series': 0 },
                { 'x': 2007.0, 'y': 14.3, 'series': 0 },
                { 'x': 2008.0, 'y': 14.8, 'series': 0 },
                { 'x': 2009.0, 'y': 15.4, 'series': 0 },
                { 'x': 2010.0, 'y': 15.9, 'series': 0 },
                { 'x': 2011.0, 'y': 16.5, 'series': 0 },
                { 'x': 2012.0, 'y': 17.0, 'series': 0 },
                { 'x': 2013.0, 'y': 16.8, 'series': 0 },
                { 'x': 2014.0, 'y': 16.6, 'series': 0 },
                { 'x': 2015.0, 'y': 16.3, 'series': 0 },
                { 'x': 2016.0, 'y': 16.1, 'series': 0 },
                { 'x': 2017.0, 'y': 15.9, 'series': 0 },
                { 'x': 2018.0, 'y': 15.9, 'series': 0 },
                { 'x': 2019.0, 'y': 15.9, 'series': 0 },
                { 'x': 2020.0, 'y': 15.9, 'series': 0 }], yAxis: 1
        },
        {
            key: 'WID - Pre-tax national income (equal-split adults)', type: 'scatter', values: [
                { 'x': 1980.0, 'y': 13.7, 'series': 1 },
                { 'x': 1981.0, 'y': 13.7, 'series': 1 },
                { 'x': 1982.0, 'y': 13.7, 'series': 1 },
                { 'x': 1983.0, 'y': 13.7, 'series': 1 },
                { 'x': 1984.0, 'y': 13.7, 'series': 1 },
                { 'x': 1985.0, 'y': 13.7, 'series': 1 },
                { 'x': 1986.0, 'y': 13.7, 'series': 1 },
                { 'x': 1987.0, 'y': 13.7, 'series': 1 },
                { 'x': 1988.0, 'y': 13.7, 'series': 1 },
                { 'x': 1989.0, 'y': 13.7, 'series': 1 },
                { 'x': 1990.0, 'y': 13.7, 'series': 1 },
                { 'x': 1991.0, 'y': 13.7, 'series': 1 },
                { 'x': 1992.0, 'y': 13.7, 'series': 1 },
                { 'x': 1993.0, 'y': 13.7, 'series': 1 },
                { 'x': 1994.0, 'y': 13.7, 'series': 1 },
                { 'x': 1995.0, 'y': 13.7, 'series': 1 },
                { 'x': 1996.0, 'y': 13.7, 'series': 1 },
                { 'x': 1997.0, 'y': 13.7, 'series': 1 },
                { 'x': 1998.0, 'y': 13.7, 'series': 1 },
                { 'x': 1999.0, 'y': 13.7, 'series': 1 },
                { 'x': 2000.0, 'y': 13.7, 'series': 1 },
                { 'x': 2001.0, 'y': 13.7, 'series': 1 },
                { 'x': 2002.0, 'y': 13.7, 'series': 1 },
                { 'x': 2003.0, 'y': 13.7, 'series': 1 },
                { 'x': 2004.0, 'y': 13.7, 'series': 1 },
                { 'x': 2005.0, 'y': 13.7, 'series': 1 },
                { 'x': 2006.0, 'y': 13.7, 'series': 1 },
                { 'x': 2007.0, 'y': 14.3, 'series': 1 },
                { 'x': 2008.0, 'y': 14.8, 'series': 1 },
                { 'x': 2009.0, 'y': 15.4, 'series': 1 },
                { 'x': 2010.0, 'y': 15.9, 'series': 1 },
                { 'x': 2011.0, 'y': 16.5, 'series': 1 },
                { 'x': 2012.0, 'y': 17.0, 'series': 1 },
                { 'x': 2013.0, 'y': 16.8, 'series': 1 },
                { 'x': 2014.0, 'y': 16.6, 'series': 1 },
                { 'x': 2015.0, 'y': 16.3, 'series': 1 },
                { 'x': 2016.0, 'y': 16.1, 'series': 1 },
                { 'x': 2017.0, 'y': 15.9, 'series': 1 },
                { 'x': 2018.0, 'y': 15.9, 'series': 1 },
                { 'x': 2019.0, 'y': 15.9, 'series': 1 },
                { 'x': 2020.0, 'y': 15.9, 'series': 1 }], yAxis: 1
        }];
    $scope.data2 = [
        {
            key: 'Chartbook series', type: 'line', values: [
                { 'x': 1980.0, 'y': 6.7, 'series': 0 },
                { 'x': 1981.0, 'y': 6.3, 'series': 0 },
                { 'x': 1982.0, 'y': 5.8, 'series': 0 },
                { 'x': 1983.0, 'y': 5.4, 'series': 0 },
                { 'x': 1984.0, 'y': 5.0, 'series': 0 },
                { 'x': 1985.0, 'y': 5.0, 'series': 0 },
                { 'x': 1986.0, 'y': 5.0, 'series': 0 },
                { 'x': 1987.0, 'y': 4.9, 'series': 0 },
                { 'x': 1988.0, 'y': 4.2, 'series': 0 },
                { 'x': 1989.0, 'y': 4.8, 'series': 0 },
                { 'x': 1990.0, 'y': 4.9, 'series': 0 },
                { 'x': 1991.0, 'y': 5.0, 'series': 0 },
                { 'x': 1993.0, 'y': 4.5, 'series': 0 },
                { 'x': 1994.0, 'y': 4.7, 'series': 0 },
                { 'x': 1995.0, 'y': 4.6, 'series': 0 },
                { 'x': 1996.0, 'y': 4.5, 'series': 0 },
                { 'x': 1997.0, 'y': 4.5, 'series': 0 },
                { 'x': 1998.0, 'y': 4.8, 'series': 0 },
                { 'x': 2001.0, 'y': 4.9, 'series': 0 },
                { 'x': 2002.0, 'y': 3.9, 'series': 0 },
                { 'x': 2003.0, 'y': 5.1, 'series': 0 },
                { 'x': 2004.0, 'y': 5.3, 'series': 0 },
                { 'x': 2005.0, 'y': 5.0, 'series': 0 },
                { 'x': 2006.0, 'y': 6.0, 'series': 0 },
                { 'x': 2007.0, 'y': 6.5, 'series': 0 },
                { 'x': 2008.0, 'y': 7.1, 'series': 0 },
                { 'x': 2010.0, 'y': 7.0, 'series': 0 },
                { 'x': 2011.0, 'y': 7.1, 'series': 0 }], yAxis: 1
        },
        {
            key: 'WID - Pre-tax fiscal income (tax units, excluding capital gains)', type: 'scatter', values: [
                { 'x': 1980.0, 'y': 6.7, 'series': 1 },
                { 'x': 1981.0, 'y': 6.3, 'series': 1 },
                { 'x': 1982.0, 'y': 5.8, 'series': 1 },
                { 'x': 1983.0, 'y': 5.4, 'series': 1 },
                { 'x': 1984.0, 'y': 5.0, 'series': 1 },
                { 'x': 1985.0, 'y': 5.0, 'series': 1 },
                { 'x': 1986.0, 'y': 5.0, 'series': 1 },
                { 'x': 1987.0, 'y': 4.9, 'series': 1 },
                { 'x': 1988.0, 'y': 4.2, 'series': 1 },
                { 'x': 1989.0, 'y': 4.8, 'series': 1 },
                { 'x': 1990.0, 'y': 4.9, 'series': 1 },
                { 'x': 1991.0, 'y': 5.0, 'series': 1 },
                { 'x': 1993.0, 'y': 4.5, 'series': 1 },
                { 'x': 1994.0, 'y': 4.7, 'series': 1 },
                { 'x': 1995.0, 'y': 4.6, 'series': 1 },
                { 'x': 1996.0, 'y': 4.5, 'series': 1 },
                { 'x': 1997.0, 'y': 4.5, 'series': 1 },
                { 'x': 1998.0, 'y': 4.8, 'series': 1 },
                { 'x': 2001.0, 'y': 4.9, 'series': 1 },
                { 'x': 2002.0, 'y': 3.9, 'series': 1 },
                { 'x': 2003.0, 'y': 5.1, 'series': 1 },
                { 'x': 2004.0, 'y': 5.3, 'series': 1 },
                { 'x': 2005.0, 'y': 5.0, 'series': 1 },
                { 'x': 2006.0, 'y': 6.0, 'series': 1 },
                { 'x': 2007.0, 'y': 6.5, 'series': 1 },
                { 'x': 2008.0, 'y': 7.1, 'series': 1 },
                { 'x': 2010.0, 'y': 7.0, 'series': 1 },
                { 'x': 2011.0, 'y': 7.1, 'series': 1 }], yAxis: 1
        }];
    $scope.data3 = [
        {
            key: 'Chartbook series', type: 'line', values: [
                { 'x': 1996.0, 'y': 8.2, 'series': 0 },
                { 'x': 2001.0, 'y': 7.8, 'series': 0 },
                { 'x': 2006.0, 'y': 8.5, 'series': 0 },
                { 'x': 2012.0, 'y': 9.8, 'series': 0 },
                { 'x': 2017.0, 'y': 10.3, 'series': 0 }], yAxis: 1
        },
        {
            key: 'HBS - Equivalised monthly household income', type: 'scatter', values: [
                { 'x': 1996.0, 'y': 8.2, 'series': 1 },
                { 'x': 2001.0, 'y': 7.8, 'series': 1 },
                { 'x': 2006.0, 'y': 8.5, 'series': 1 },
                { 'x': 2012.0, 'y': 9.8, 'series': 1 },
                { 'x': 2017.0, 'y': 10.3, 'series': 1 }], yAxis: 1
        }]
});
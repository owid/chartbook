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
                { 'x': 1993, 'y': 67.0, 'series': 0 },
                { 'x': 2000, 'y': 67.0, 'series': 0 },
                { 'x': 2005, 'y': 72.0, 'series': 0 },
                { 'x': 2006, 'y': 72.0, 'series': 0 },
                { 'x': 2009, 'y': 70.0, 'series': 0 },
                { 'x': 2011, 'y': 69.0, 'series': 0 },
                { 'x': 2015, 'y': 67.0, 'series': 0 }], yAxis: 1
        },
        {
            key: 'Whiteford & van Seventer (2000) Figure 1 - Household per capita income', type: 'scatter', values: [
                { 'x': 1975, 'y': 68.0, 'series': 1 },
                { 'x': 1991, 'y': 68.0, 'series': 1 },
                { 'x': 1993, 'y': null, 'series': 1 },
                { 'x': 1996, 'y': 69.0, 'series': 1 },
                { 'x': 2015, 'y': null, 'series': 1 }], yAxis: 1
        },
        {
            key: 'Leibbrandt et al (2010a) - Household per capita income', type: 'scatter', values: [
                { 'x': 1993, 'y': 67.0, 'series': 2 },
                { 'x': 2000, 'y': 67.0, 'series': 2 },
                { 'x': 2005, 'y': 72.0, 'series': 2 },
                { 'x': 2008, 'y': 70.0, 'series': 2 },
                { 'x': 2015, 'y': null, 'series': 2 }], yAxis: 1
        },
        {
            key: 'StatsSA - Household per capita income', type: 'scatter', values: [
                { 'x': 1993, 'y': null, 'series': 3 },
                { 'x': 2006, 'y': 72.0, 'series': 3 },
                { 'x': 2009, 'y': 70.0, 'series': 3 },
                { 'x': 2011, 'y': 69.0, 'series': 3 },
                { 'x': 2015, 'y': 67.0, 'series': 3 }], yAxis: 1
        }];
    $scope.data1 = [
        {
            key: 'Chartbook series', type: 'line', values: [
                { 'x': 1990, 'y': 9.9, 'series': 0 },
                { 'x': 1991, 'y': 10.5, 'series': 0 },
                { 'x': 1992, 'y': 10.6, 'series': 0 },
                { 'x': 1993, 'y': 10.3, 'series': 0 },
                { 'x': 2002, 'y': 16.6, 'series': 0 },
                { 'x': 2003, 'y': 16.9, 'series': 0 },
                { 'x': 2004, 'y': 17.1, 'series': 0 },
                { 'x': 2005, 'y': 18.0, 'series': 0 },
                { 'x': 2006, 'y': 19.0, 'series': 0 },
                { 'x': 2007, 'y': 20.1, 'series': 0 },
                { 'x': 2008, 'y': 19.5, 'series': 0 },
                { 'x': 2009, 'y': 18.3, 'series': 0 },
                { 'x': 2010, 'y': 18.5, 'series': 0 },
                { 'x': 2011, 'y': 18.5, 'series': 0 },
                { 'x': 2012, 'y': 19.2, 'series': 0 }], yAxis: 1
        },
        {
            key: 'WID  - Pre-tax fiscal income (tax units, individuals)', type: 'scatter', values: [
                { 'x': 1990, 'y': 9.9, 'series': 1 },
                { 'x': 1991, 'y': 10.5, 'series': 1 },
                { 'x': 1992, 'y': 10.6, 'series': 1 },
                { 'x': 1993, 'y': 10.3, 'series': 1 },
                { 'x': 2002, 'y': 16.6, 'series': 1 },
                { 'x': 2003, 'y': 16.9, 'series': 1 },
                { 'x': 2004, 'y': 17.1, 'series': 1 },
                { 'x': 2005, 'y': 18.0, 'series': 1 },
                { 'x': 2006, 'y': 19.0, 'series': 1 },
                { 'x': 2007, 'y': 20.1, 'series': 1 },
                { 'x': 2008, 'y': 19.5, 'series': 1 },
                { 'x': 2009, 'y': 18.3, 'series': 1 },
                { 'x': 2010, 'y': 18.5, 'series': 1 },
                { 'x': 2011, 'y': 18.5, 'series': 1 },
                { 'x': 2012, 'y': 19.2, 'series': 1 }], yAxis: 1
        }];
    $scope.data2 = [
        {
            key: 'Chartbook series', type: 'line', values: [
                { 'x': 1914, 'y': 22.0, 'series': 0 },
                { 'x': 1915, 'y': 21.9, 'series': 0 },
                { 'x': 1916, 'y': 22.0, 'series': 0 },
                { 'x': 1917, 'y': 22.8, 'series': 0 },
                { 'x': 1918, 'y': 21.0, 'series': 0 },
                { 'x': 1919, 'y': 19.0, 'series': 0 },
                { 'x': 1920, 'y': 20.3, 'series': 0 },
                { 'x': 1921, 'y': 21.8, 'series': 0 },
                { 'x': 1922, 'y': 19.2, 'series': 0 },
                { 'x': 1923, 'y': 19.5, 'series': 0 },
                { 'x': 1924, 'y': 19.9, 'series': 0 },
                { 'x': 1925, 'y': 20.6, 'series': 0 },
                { 'x': 1926, 'y': 20.1, 'series': 0 },
                { 'x': 1927, 'y': 19.9, 'series': 0 },
                { 'x': 1928, 'y': 20.0, 'series': 0 },
                { 'x': 1929, 'y': 20.1, 'series': 0 },
                { 'x': 1930, 'y': 20.5, 'series': 0 },
                { 'x': 1931, 'y': 20.3, 'series': 0 },
                { 'x': 1932, 'y': 19.7, 'series': 0 },
                { 'x': 1933, 'y': 19.4, 'series': 0 },
                { 'x': 1934, 'y': 18.5, 'series': 0 },
                { 'x': 1935, 'y': 18.8, 'series': 0 },
                { 'x': 1936, 'y': 18.4, 'series': 0 },
                { 'x': 1937, 'y': 17.7, 'series': 0 },
                { 'x': 1938, 'y': 17.0, 'series': 0 },
                { 'x': 1939, 'y': 16.0, 'series': 0 },
                { 'x': 1944, 'y': 18.2, 'series': 0 },
                { 'x': 1945, 'y': 20.4, 'series': 0 },
                { 'x': 1946, 'y': 23.5, 'series': 0 },
                { 'x': 1947, 'y': 21.2, 'series': 0 },
                { 'x': 1948, 'y': 22.0, 'series': 0 },
                { 'x': 1949, 'y': 17.7, 'series': 0 },
                { 'x': 1954, 'y': 14.1, 'series': 0 },
                { 'x': 1955, 'y': 14.4, 'series': 0 },
                { 'x': 1956, 'y': 13.9, 'series': 0 },
                { 'x': 1957, 'y': 13.5, 'series': 0 },
                { 'x': 1958, 'y': 12.9, 'series': 0 },
                { 'x': 1959, 'y': 12.6, 'series': 0 },
                { 'x': 1961, 'y': 11.8, 'series': 0 },
                { 'x': 1963, 'y': 13.2, 'series': 0 },
                { 'x': 1964, 'y': 13.6, 'series': 0 },
                { 'x': 1965, 'y': 13.2, 'series': 0 },
                { 'x': 1967, 'y': 12.6, 'series': 0 },
                { 'x': 1969, 'y': 13.3, 'series': 0 },
                { 'x': 1971, 'y': 12.9, 'series': 0 },
                { 'x': 1974, 'y': 12.9, 'series': 0 },
                { 'x': 1975, 'y': 12.1, 'series': 0 },
                { 'x': 1978, 'y': 10.3, 'series': 0 },
                { 'x': 1979, 'y': 9.9, 'series': 0 },
                { 'x': 1980, 'y': 10.9, 'series': 0 },
                { 'x': 1981, 'y': 11.3, 'series': 0 },
                { 'x': 1982, 'y': 12.0, 'series': 0 },
                { 'x': 1983, 'y': 11.3, 'series': 0 },
                { 'x': 1984, 'y': 11.3, 'series': 0 },
                { 'x': 1985, 'y': 10.6, 'series': 0 },
                { 'x': 1986, 'y': 10.3, 'series': 0 },
                { 'x': 1987, 'y': 8.8, 'series': 0 },
                { 'x': 1988, 'y': 9.9, 'series': 0 },
                { 'x': 1989, 'y': 10.1, 'series': 0 },
                { 'x': 1990, 'y': 10.1, 'series': 0 },
                { 'x': 1991, 'y': 10.8, 'series': 0 },
                { 'x': 1992, 'y': 10.8, 'series': 0 },
                { 'x': 1993, 'y': 10.6, 'series': 0 },
                { 'x': 1994, 'y': 11.3, 'series': 0 },
                { 'x': 1995, 'y': 12.0, 'series': 0 },
                { 'x': 1996, 'y': 12.7, 'series': 0 },
                { 'x': 1997, 'y': 13.4, 'series': 0 },
                { 'x': 1998, 'y': 14.1, 'series': 0 },
                { 'x': 1999, 'y': 14.8, 'series': 0 },
                { 'x': 2000, 'y': 15.4, 'series': 0 },
                { 'x': 2001, 'y': 16.2, 'series': 0 },
                { 'x': 2002, 'y': 16.9, 'series': 0 },
                { 'x': 2003, 'y': 17.2, 'series': 0 },
                { 'x': 2004, 'y': 17.4, 'series': 0 },
                { 'x': 2005, 'y': 18.3, 'series': 0 },
                { 'x': 2006, 'y': 19.3, 'series': 0 },
                { 'x': 2007, 'y': 20.3, 'series': 0 },
                { 'x': 2008, 'y': 19.8, 'series': 0 },
                { 'x': 2009, 'y': 18.6, 'series': 0 },
                { 'x': 2010, 'y': 18.8, 'series': 0 },
                { 'x': 2011, 'y': 18.7, 'series': 0 },
                { 'x': 2012, 'y': 19.3, 'series': 0 },
                { 'x': 2013, 'y': 19.3, 'series': 0 },
                { 'x': 2014, 'y': 19.3, 'series': 0 },
                { 'x': 2015, 'y': 19.3, 'series': 0 },
                { 'x': 2016, 'y': 19.3, 'series': 0 },
                { 'x': 2017, 'y': 19.3, 'series': 0 },
                { 'x': 2018, 'y': 19.3, 'series': 0 },
                { 'x': 2019, 'y': 19.3, 'series': 0 },
                { 'x': 2020, 'y': 21.9, 'series': 0 }], yAxis: 1
        },
        {
            key: 'WID  - Pre-tax national income (equal-split adults)', type: 'scatter', values: [
                { 'x': 1914, 'y': 22.0, 'series': 1 },
                { 'x': 1915, 'y': 21.9, 'series': 1 },
                { 'x': 1916, 'y': 22.0, 'series': 1 },
                { 'x': 1917, 'y': 22.8, 'series': 1 },
                { 'x': 1918, 'y': 21.0, 'series': 1 },
                { 'x': 1919, 'y': 19.0, 'series': 1 },
                { 'x': 1920, 'y': 20.3, 'series': 1 },
                { 'x': 1921, 'y': 21.8, 'series': 1 },
                { 'x': 1922, 'y': 19.2, 'series': 1 },
                { 'x': 1923, 'y': 19.5, 'series': 1 },
                { 'x': 1924, 'y': 19.9, 'series': 1 },
                { 'x': 1925, 'y': 20.6, 'series': 1 },
                { 'x': 1926, 'y': 20.1, 'series': 1 },
                { 'x': 1927, 'y': 19.9, 'series': 1 },
                { 'x': 1928, 'y': 20.0, 'series': 1 },
                { 'x': 1929, 'y': 20.1, 'series': 1 },
                { 'x': 1930, 'y': 20.5, 'series': 1 },
                { 'x': 1931, 'y': 20.3, 'series': 1 },
                { 'x': 1932, 'y': 19.7, 'series': 1 },
                { 'x': 1933, 'y': 19.4, 'series': 1 },
                { 'x': 1934, 'y': 18.5, 'series': 1 },
                { 'x': 1935, 'y': 18.8, 'series': 1 },
                { 'x': 1936, 'y': 18.4, 'series': 1 },
                { 'x': 1937, 'y': 17.7, 'series': 1 },
                { 'x': 1938, 'y': 17.0, 'series': 1 },
                { 'x': 1939, 'y': 16.0, 'series': 1 },
                { 'x': 1944, 'y': 18.2, 'series': 1 },
                { 'x': 1945, 'y': 20.4, 'series': 1 },
                { 'x': 1946, 'y': 23.5, 'series': 1 },
                { 'x': 1947, 'y': 21.2, 'series': 1 },
                { 'x': 1948, 'y': 22.0, 'series': 1 },
                { 'x': 1949, 'y': 17.7, 'series': 1 },
                { 'x': 1954, 'y': 14.1, 'series': 1 },
                { 'x': 1955, 'y': 14.4, 'series': 1 },
                { 'x': 1956, 'y': 13.9, 'series': 1 },
                { 'x': 1957, 'y': 13.5, 'series': 1 },
                { 'x': 1958, 'y': 12.9, 'series': 1 },
                { 'x': 1959, 'y': 12.6, 'series': 1 },
                { 'x': 1961, 'y': 11.8, 'series': 1 },
                { 'x': 1963, 'y': 13.2, 'series': 1 },
                { 'x': 1964, 'y': 13.6, 'series': 1 },
                { 'x': 1965, 'y': 13.2, 'series': 1 },
                { 'x': 1967, 'y': 12.6, 'series': 1 },
                { 'x': 1969, 'y': 13.3, 'series': 1 },
                { 'x': 1971, 'y': 12.9, 'series': 1 },
                { 'x': 1974, 'y': 12.9, 'series': 1 },
                { 'x': 1975, 'y': 12.1, 'series': 1 },
                { 'x': 1978, 'y': 10.3, 'series': 1 },
                { 'x': 1979, 'y': 9.9, 'series': 1 },
                { 'x': 1980, 'y': 10.9, 'series': 1 },
                { 'x': 1981, 'y': 11.3, 'series': 1 },
                { 'x': 1982, 'y': 12.0, 'series': 1 },
                { 'x': 1983, 'y': 11.3, 'series': 1 },
                { 'x': 1984, 'y': 11.3, 'series': 1 },
                { 'x': 1985, 'y': 10.6, 'series': 1 },
                { 'x': 1986, 'y': 10.3, 'series': 1 },
                { 'x': 1987, 'y': 8.8, 'series': 1 },
                { 'x': 1988, 'y': 9.9, 'series': 1 },
                { 'x': 1989, 'y': 10.1, 'series': 1 },
                { 'x': 1990, 'y': 10.1, 'series': 1 },
                { 'x': 1991, 'y': 10.8, 'series': 1 },
                { 'x': 1992, 'y': 10.8, 'series': 1 },
                { 'x': 1993, 'y': 10.6, 'series': 1 },
                { 'x': 1994, 'y': 11.3, 'series': 1 },
                { 'x': 1995, 'y': 12.0, 'series': 1 },
                { 'x': 1996, 'y': 12.7, 'series': 1 },
                { 'x': 1997, 'y': 13.4, 'series': 1 },
                { 'x': 1998, 'y': 14.1, 'series': 1 },
                { 'x': 1999, 'y': 14.8, 'series': 1 },
                { 'x': 2000, 'y': 15.4, 'series': 1 },
                { 'x': 2001, 'y': 16.2, 'series': 1 },
                { 'x': 2002, 'y': 16.9, 'series': 1 },
                { 'x': 2003, 'y': 17.2, 'series': 1 },
                { 'x': 2004, 'y': 17.4, 'series': 1 },
                { 'x': 2005, 'y': 18.3, 'series': 1 },
                { 'x': 2006, 'y': 19.3, 'series': 1 },
                { 'x': 2007, 'y': 20.3, 'series': 1 },
                { 'x': 2008, 'y': 19.8, 'series': 1 },
                { 'x': 2009, 'y': 18.6, 'series': 1 },
                { 'x': 2010, 'y': 18.8, 'series': 1 },
                { 'x': 2011, 'y': 18.7, 'series': 1 },
                { 'x': 2012, 'y': 19.3, 'series': 1 },
                { 'x': 2013, 'y': 19.3, 'series': 1 },
                { 'x': 2014, 'y': 19.3, 'series': 1 },
                { 'x': 2015, 'y': 19.3, 'series': 1 },
                { 'x': 2016, 'y': 19.3, 'series': 1 },
                { 'x': 2017, 'y': 19.3, 'series': 1 },
                { 'x': 2018, 'y': 19.3, 'series': 1 },
                { 'x': 2019, 'y': 19.3, 'series': 1 },
                { 'x': 2020, 'y': 21.9, 'series': 1 }], yAxis: 1
        }];
    $scope.data3 = [
        {
            key: 'Chartbook series', type: 'line', values: [
                { 'x': 1970, 'y': 52.9, 'series': 0 },
                { 'x': 1975, 'y': 46.4, 'series': 0 },
                { 'x': 1980, 'y': 41.3, 'series': 0 },
                { 'x': 1985, 'y': 41.2, 'series': 0 },
                { 'x': 1990, 'y': 37.5, 'series': 0 },
                { 'x': 1993, 'y': 40.6, 'series': 0 },
                { 'x': 2000, 'y': 41.3, 'series': 0 },
                { 'x': 2004, 'y': 33.2, 'series': 0 }], yAxis: 1
        },
        {
            key: 'van der Berg and Louw (2004) - Household per capita income', type: 'scatter', values: [
                { 'x': 1970, 'y': 49.8, 'series': 1 },
                { 'x': 1975, 'y': 43.7, 'series': 1 },
                { 'x': 1980, 'y': 38.9, 'series': 1 },
                { 'x': 1985, 'y': 38.8, 'series': 1 },
                { 'x': 1990, 'y': 35.3, 'series': 1 },
                { 'x': 1993, 'y': 38.2, 'series': 1 },
                { 'x': 1995, 'y': 38.8, 'series': 1 },
                { 'x': 2000, 'y': 37.5, 'series': 1 },
                { 'x': 2004, 'y': null, 'series': 1 }], yAxis: 1
        },
        {
            key: 'Leibbrandt et al (2010) - Household per capita income', type: 'scatter', values: [
                { 'x': 1970, 'y': null, 'series': 2 },
                { 'x': 1993, 'y': 40.6, 'series': 2 },
                { 'x': 2000, 'y': 41.3, 'series': 2 },
                { 'x': 2004, 'y': 33.2, 'series': 2 }], yAxis: 1
        }];
    $scope.data4 = [
        {
            key: 'Chartbook series', type: 'line', values: [
                { 'x': 2006, 'y': 66.6, 'series': 0 },
                { 'x': 2009, 'y': 62.1, 'series': 0 },
                { 'x': 2011, 'y': 53.2, 'series': 0 },
                { 'x': 2015, 'y': 55.5, 'series': 0 }], yAxis: 1
        },
        {
            key: 'StatsSA - Household per capita expenditure', type: 'scatter', values: [
                { 'x': 2006, 'y': 66.6, 'series': 1 },
                { 'x': 2009, 'y': 62.1, 'series': 1 },
                { 'x': 2011, 'y': 53.2, 'series': 1 },
                { 'x': 2015, 'y': 55.5, 'series': 1 }], yAxis: 1
        }];
    $scope.data5 = [
        {
            key: 'Chartbook series', type: 'line', values: [
                { 'x': 1993, 'y': 480.0, 'series': 0 },
                { 'x': 1997, 'y': 330.0, 'series': 0 },
                { 'x': 2001, 'y': 420.0, 'series': 0 },
                { 'x': 2005, 'y': 520.0, 'series': 0 },
                { 'x': 2008, 'y': 500.0, 'series': 0 }], yAxis: 1
        },
        {
            key: 'OECD - Individual gross monthly wages', type: 'scatter', values: [
                { 'x': 1993, 'y': 480.0, 'series': 1 },
                { 'x': 1997, 'y': 330.0, 'series': 1 },
                { 'x': 2001, 'y': 420.0, 'series': 1 },
                { 'x': 2005, 'y': 520.0, 'series': 1 },
                { 'x': 2008, 'y': 500.0, 'series': 1 }], yAxis: 1
        }];
    $scope.data6 = [
        {
            key: 'Chartbook series', type: 'line', values: [
                { 'x': 1993, 'y': 48.6, 'series': 0 },
                { 'x': 1994, 'y': 49.7, 'series': 0 },
                { 'x': 1995, 'y': 47.4, 'series': 0 },
                { 'x': 1996, 'y': 49.0, 'series': 0 },
                { 'x': 1997, 'y': 48.4, 'series': 0 },
                { 'x': 1998, 'y': 48.0, 'series': 0 },
                { 'x': 1999, 'y': 50.8, 'series': 0 },
                { 'x': 2000, 'y': 49.5, 'series': 0 },
                { 'x': 2001, 'y': 50.8, 'series': 0 },
                { 'x': 2002, 'y': 49.9, 'series': 0 },
                { 'x': 2003, 'y': 50.1, 'series': 0 },
                { 'x': 2004, 'y': 49.2, 'series': 0 },
                { 'x': 2005, 'y': 51.4, 'series': 0 },
                { 'x': 2006, 'y': 52.3, 'series': 0 },
                { 'x': 2007, 'y': 52.1, 'series': 0 },
                { 'x': 2008, 'y': 50.3, 'series': 0 },
                { 'x': 2009, 'y': 53.2, 'series': 0 },
                { 'x': 2010, 'y': 57.3, 'series': 0 },
                { 'x': 2011, 'y': 58.4, 'series': 0 },
                { 'x': 2012, 'y': 57.2, 'series': 0 },
                { 'x': 2013, 'y': 57.0, 'series': 0 },
                { 'x': 2014, 'y': 55.9, 'series': 0 },
                { 'x': 2015, 'y': 55.8, 'series': 0 },
                { 'x': 2016, 'y': 54.5, 'series': 0 },
                { 'x': 2017, 'y': 55.6, 'series': 0 },
                { 'x': 2018, 'y': 55.1, 'series': 0 },
                { 'x': 2019, 'y': 55.0, 'series': 0 },
                { 'x': 2020, 'y': 54.8, 'series': 0 },
                { 'x': 2021, 'y': 55.0, 'series': 0 }], yAxis: 1
        },
        {
            key: 'WID - Individual net wealth', type: 'scatter', values: [
                { 'x': 1993, 'y': 48.6, 'series': 1 },
                { 'x': 1994, 'y': 49.7, 'series': 1 },
                { 'x': 1995, 'y': 47.4, 'series': 1 },
                { 'x': 1996, 'y': 49.0, 'series': 1 },
                { 'x': 1997, 'y': 48.4, 'series': 1 },
                { 'x': 1998, 'y': 48.0, 'series': 1 },
                { 'x': 1999, 'y': 50.8, 'series': 1 },
                { 'x': 2000, 'y': 49.5, 'series': 1 },
                { 'x': 2001, 'y': 50.8, 'series': 1 },
                { 'x': 2002, 'y': 49.9, 'series': 1 },
                { 'x': 2003, 'y': 50.1, 'series': 1 },
                { 'x': 2004, 'y': 49.2, 'series': 1 },
                { 'x': 2005, 'y': 51.4, 'series': 1 },
                { 'x': 2006, 'y': 52.3, 'series': 1 },
                { 'x': 2007, 'y': 52.1, 'series': 1 },
                { 'x': 2008, 'y': 50.3, 'series': 1 },
                { 'x': 2009, 'y': 53.2, 'series': 1 },
                { 'x': 2010, 'y': 57.3, 'series': 1 },
                { 'x': 2011, 'y': 58.4, 'series': 1 },
                { 'x': 2012, 'y': 57.2, 'series': 1 },
                { 'x': 2013, 'y': 57.0, 'series': 1 },
                { 'x': 2014, 'y': 55.9, 'series': 1 },
                { 'x': 2015, 'y': 55.8, 'series': 1 },
                { 'x': 2016, 'y': 54.5, 'series': 1 },
                { 'x': 2017, 'y': 55.6, 'series': 1 },
                { 'x': 2018, 'y': 55.1, 'series': 1 },
                { 'x': 2019, 'y': 55.0, 'series': 1 },
                { 'x': 2020, 'y': 54.8, 'series': 1 },
                { 'x': 2021, 'y': 55.0, 'series': 1 }], yAxis: 1
        }]
});
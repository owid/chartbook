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
    $scope.data0 = [{ key: 'Chartbook series', type: 'line', values: [{ 'x': 1982, 'y': 27.2, 'series': 0 }, { 'x': 1984, 'y': 27.5, 'series': 0 }, { 'x': 1986, 'y': 27.0, 'series': 0 }, { 'x': 1988, 'y': 27.1, 'series': 0 }, { 'x': 1990, 'y': 30.2, 'series': 0 }, { 'x': 1992, 'y': 31.9, 'series': 0 }, { 'x': 1994, 'y': 32.2, 'series': 0 }, { 'x': 1996, 'y': 33.1, 'series': 0 }, { 'x': 1998, 'y': 33.0, 'series': 0 }, { 'x': 2001, 'y': 33.8, 'series': 0 }, { 'x': 2004, 'y': 33.4, 'series': 0 }, { 'x': 2007, 'y': 32.0, 'series': 0 }, { 'x': 2008, 'y': 33.3, 'series': 0 }, { 'x': 2009, 'y': 32.9, 'series': 0 }, { 'x': 2010, 'y': 32.4, 'series': 0 }, { 'x': 2011, 'y': 35.1, 'series': 0 }, { 'x': 2012, 'y': 32.4, 'series': 0 }, { 'x': 2013, 'y': 33.4, 'series': 0 }, { 'x': 2014, 'y': 34.2, 'series': 0 }, { 'x': 2015, 'y': 35.0, 'series': 0 }, { 'x': 2016, 'y': 33.6, 'series': 0 }, { 'x': 2017, 'y': 34.3, 'series': 0 }, { 'x': 2018, 'y': 34.1, 'series': 0 }], yAxis: 1 }, { key: 'Perry (2019) - Equivalised disposable household income', type: 'scatter', values: [{ 'x': 1982, 'y': 27.2, 'series': 1 }, { 'x': 1984, 'y': 27.5, 'series': 1 }, { 'x': 1986, 'y': 27.0, 'series': 1 }, { 'x': 1988, 'y': 27.1, 'series': 1 }, { 'x': 1990, 'y': 30.2, 'series': 1 }, { 'x': 1992, 'y': 31.9, 'series': 1 }, { 'x': 1994, 'y': 32.2, 'series': 1 }, { 'x': 1996, 'y': 33.1, 'series': 1 }, { 'x': 1998, 'y': 33.0, 'series': 1 }, { 'x': 2001, 'y': 33.8, 'series': 1 }, { 'x': 2004, 'y': 33.4, 'series': 1 }, { 'x': 2007, 'y': 32.0, 'series': 1 }, { 'x': 2008, 'y': 33.3, 'series': 1 }, { 'x': 2009, 'y': 32.9, 'series': 1 }, { 'x': 2010, 'y': 32.4, 'series': 1 }, { 'x': 2011, 'y': 35.1, 'series': 1 }, { 'x': 2012, 'y': 32.4, 'series': 1 }, { 'x': 2013, 'y': 33.4, 'series': 1 }, { 'x': 2014, 'y': 34.2, 'series': 1 }, { 'x': 2015, 'y': 35.0, 'series': 1 }, { 'x': 2016, 'y': 33.6, 'series': 1 }, { 'x': 2017, 'y': 34.3, 'series': 1 }, { 'x': 2018, 'y': 34.1, 'series': 1 }], yAxis: 1 }];
    $scope.data1 = [{ key: 'Chartbook series', type: 'line', values: [{ 'x': 1921, 'y': 17.82, 'series': 0 }, { 'x': 1922, 'y': 16.52, 'series': 0 }, { 'x': 1923, 'y': 17.22, 'series': 0 }, { 'x': 1924, 'y': 17.14, 'series': 0 }, { 'x': 1925, 'y': 17.4, 'series': 0 }, { 'x': 1926, 'y': 16.98, 'series': 0 }, { 'x': 1927, 'y': 16.66, 'series': 0 }, { 'x': 1928, 'y': 18.13, 'series': 0 }, { 'x': 1929, 'y': 17.23, 'series': 0 }, { 'x': 1930, 'y': 16.49, 'series': 0 }, { 'x': 1931, 'y': 16.69, 'series': 0 }, { 'x': 1932, 'y': 16.89, 'series': 0 }, { 'x': 1933, 'y': 17.1, 'series': 0 }, { 'x': 1934, 'y': 16.29, 'series': 0 }, { 'x': 1935, 'y': 16.16, 'series': 0 }, { 'x': 1936, 'y': 16.75, 'series': 0 }, { 'x': 1937, 'y': 13.03, 'series': 0 }, { 'x': 1938, 'y': 11.48, 'series': 0 }, { 'x': 1939, 'y': 12.3, 'series': 0 }, { 'x': 1940, 'y': 11.62, 'series': 0 }, { 'x': 1945, 'y': 10.78, 'series': 0 }, { 'x': 1946, 'y': 11.72, 'series': 0 }, { 'x': 1947, 'y': 12.05, 'series': 0 }, { 'x': 1948, 'y': 12.14, 'series': 0 }, { 'x': 1949, 'y': 12.54, 'series': 0 }, { 'x': 1950, 'y': 14.57, 'series': 0 }, { 'x': 1951, 'y': 12.27, 'series': 0 }, { 'x': 1952, 'y': 12.31, 'series': 0 }, { 'x': 1953, 'y': 12.31, 'series': 0 }, { 'x': 1954, 'y': 11.87, 'series': 0 }, { 'x': 1955, 'y': 10.91, 'series': 0 }, { 'x': 1956, 'y': 11.14, 'series': 0 }, { 'x': 1957, 'y': 10.86, 'series': 0 }, { 'x': 1958, 'y': 9.01, 'series': 0 }, { 'x': 1959, 'y': 9.46, 'series': 0 }, { 'x': 1960, 'y': 9.31, 'series': 0 }, { 'x': 1961, 'y': 9.2, 'series': 0 }, { 'x': 1962, 'y': 9.1, 'series': 0 }, { 'x': 1963, 'y': 9.15, 'series': 0 }, { 'x': 1964, 'y': 9.43, 'series': 0 }, { 'x': 1965, 'y': 8.44, 'series': 0 }, { 'x': 1966, 'y': 8.24, 'series': 0 }, { 'x': 1967, 'y': 8.28, 'series': 0 }, { 'x': 1968, 'y': 8.44, 'series': 0 }, { 'x': 1969, 'y': 8.43, 'series': 0 }, { 'x': 1970, 'y': 8.38, 'series': 0 }, { 'x': 1971, 'y': 8.14, 'series': 0 }, { 'x': 1972, 'y': 9.04, 'series': 0 }, { 'x': 1973, 'y': 9.55, 'series': 0 }, { 'x': 1974, 'y': 8.93, 'series': 0 }, { 'x': 1975, 'y': 7.29, 'series': 0 }, { 'x': 1976, 'y': 8.72, 'series': 0 }, { 'x': 1977, 'y': 7.01, 'series': 0 }, { 'x': 1978, 'y': 6.8, 'series': 0 }, { 'x': 1979, 'y': 6.47, 'series': 0 }, { 'x': 1980, 'y': 6.16, 'series': 0 }, { 'x': 1981, 'y': 6.13, 'series': 0 }, { 'x': 1982, 'y': 6.22, 'series': 0 }, { 'x': 1983, 'y': 6.97, 'series': 0 }, { 'x': 1984, 'y': 6.91, 'series': 0 }, { 'x': 1985, 'y': 6.57, 'series': 0 }, { 'x': 1986, 'y': 5.79, 'series': 0 }, { 'x': 1987, 'y': 6.35, 'series': 0 }, { 'x': 1988, 'y': 6.59, 'series': 0 }, { 'x': 1989, 'y': 8.14, 'series': 0 }, { 'x': 1990, 'y': 9.99, 'series': 0 }, { 'x': 1991, 'y': 8.68, 'series': 0 }, { 'x': 1992, 'y': 9.33, 'series': 0 }, { 'x': 1993, 'y': 9.86, 'series': 0 }, { 'x': 1994, 'y': 10.22, 'series': 0 }, { 'x': 1995, 'y': 10.32, 'series': 0 }, { 'x': 1996, 'y': 9.8, 'series': 0 }, { 'x': 1997, 'y': 10.52, 'series': 0 }, { 'x': 1998, 'y': 11.68, 'series': 0 }, { 'x': 1999, 'y': 13.16, 'series': 0 }, { 'x': 2000, 'y': 9.69, 'series': 0 }, { 'x': 2001, 'y': 10.42, 'series': 0 }, { 'x': 2002, 'y': 10.48, 'series': 0 }, { 'x': 2003, 'y': 11.22, 'series': 0 }, { 'x': 2004, 'y': 11.72, 'series': 0 }, { 'x': 2005, 'y': 10.27, 'series': 0 }, { 'x': 2006, 'y': 9.12, 'series': 0 }, { 'x': 2007, 'y': 9.13, 'series': 0 }, { 'x': 2008, 'y': 9.06, 'series': 0 }, { 'x': 2009, 'y': 9.94, 'series': 0 }, { 'x': 2010, 'y': 9.51, 'series': 0 }, { 'x': 2011, 'y': 10.26, 'series': 0 }, { 'x': 2012, 'y': 11.37, 'series': 0 }, { 'x': 2013, 'y': 10.19, 'series': 0 }, { 'x': 2014, 'y': 10.39, 'series': 0 }, { 'x': 2015, 'y': 10.96, 'series': 0 }, { 'x': 2016, 'y': 11.17, 'series': 0 }, { 'x': 2017, 'y': 11.77, 'series': 0 }, { 'x': 2018, 'y': 11.94, 'series': 0 }, { 'x': 2019, 'y': 11.87, 'series': 0 }], yAxis: 1 }, { key: 'WID - Pre-tax national income (equal-split adults)', type: 'scatter', values: [{ 'x': 1921, 'y': 17.82, 'series': 1 }, { 'x': 1922, 'y': 16.52, 'series': 1 }, { 'x': 1923, 'y': 17.22, 'series': 1 }, { 'x': 1924, 'y': 17.14, 'series': 1 }, { 'x': 1925, 'y': 17.4, 'series': 1 }, { 'x': 1926, 'y': 16.98, 'series': 1 }, { 'x': 1927, 'y': 16.66, 'series': 1 }, { 'x': 1928, 'y': 18.13, 'series': 1 }, { 'x': 1929, 'y': 17.23, 'series': 1 }, { 'x': 1930, 'y': 16.49, 'series': 1 }, { 'x': 1931, 'y': 16.69, 'series': 1 }, { 'x': 1932, 'y': 16.89, 'series': 1 }, { 'x': 1933, 'y': 17.1, 'series': 1 }, { 'x': 1934, 'y': 16.29, 'series': 1 }, { 'x': 1935, 'y': 16.16, 'series': 1 }, { 'x': 1936, 'y': 16.75, 'series': 1 }, { 'x': 1937, 'y': 13.03, 'series': 1 }, { 'x': 1938, 'y': 11.48, 'series': 1 }, { 'x': 1939, 'y': 12.3, 'series': 1 }, { 'x': 1940, 'y': 11.62, 'series': 1 }, { 'x': 1945, 'y': 10.78, 'series': 1 }, { 'x': 1946, 'y': 11.72, 'series': 1 }, { 'x': 1947, 'y': 12.05, 'series': 1 }, { 'x': 1948, 'y': 12.14, 'series': 1 }, { 'x': 1949, 'y': 12.54, 'series': 1 }, { 'x': 1950, 'y': 14.57, 'series': 1 }, { 'x': 1951, 'y': 12.27, 'series': 1 }, { 'x': 1952, 'y': 12.31, 'series': 1 }, { 'x': 1953, 'y': 12.31, 'series': 1 }, { 'x': 1954, 'y': 11.87, 'series': 1 }, { 'x': 1955, 'y': 10.91, 'series': 1 }, { 'x': 1956, 'y': 11.14, 'series': 1 }, { 'x': 1957, 'y': 10.86, 'series': 1 }, { 'x': 1958, 'y': 9.01, 'series': 1 }, { 'x': 1959, 'y': 9.46, 'series': 1 }, { 'x': 1960, 'y': 9.31, 'series': 1 }, { 'x': 1961, 'y': 9.2, 'series': 1 }, { 'x': 1962, 'y': 9.1, 'series': 1 }, { 'x': 1963, 'y': 9.15, 'series': 1 }, { 'x': 1964, 'y': 9.43, 'series': 1 }, { 'x': 1965, 'y': 8.44, 'series': 1 }, { 'x': 1966, 'y': 8.24, 'series': 1 }, { 'x': 1967, 'y': 8.28, 'series': 1 }, { 'x': 1968, 'y': 8.44, 'series': 1 }, { 'x': 1969, 'y': 8.43, 'series': 1 }, { 'x': 1970, 'y': 8.38, 'series': 1 }, { 'x': 1971, 'y': 8.14, 'series': 1 }, { 'x': 1972, 'y': 9.04, 'series': 1 }, { 'x': 1973, 'y': 9.55, 'series': 1 }, { 'x': 1974, 'y': 8.93, 'series': 1 }, { 'x': 1975, 'y': 7.29, 'series': 1 }, { 'x': 1976, 'y': 8.72, 'series': 1 }, { 'x': 1977, 'y': 7.01, 'series': 1 }, { 'x': 1978, 'y': 6.8, 'series': 1 }, { 'x': 1979, 'y': 6.47, 'series': 1 }, { 'x': 1980, 'y': 6.16, 'series': 1 }, { 'x': 1981, 'y': 6.13, 'series': 1 }, { 'x': 1982, 'y': 6.22, 'series': 1 }, { 'x': 1983, 'y': 6.97, 'series': 1 }, { 'x': 1984, 'y': 6.91, 'series': 1 }, { 'x': 1985, 'y': 6.57, 'series': 1 }, { 'x': 1986, 'y': 5.79, 'series': 1 }, { 'x': 1987, 'y': 6.35, 'series': 1 }, { 'x': 1988, 'y': 6.59, 'series': 1 }, { 'x': 1989, 'y': 8.14, 'series': 1 }, { 'x': 1990, 'y': 9.99, 'series': 1 }, { 'x': 1991, 'y': 8.68, 'series': 1 }, { 'x': 1992, 'y': 9.33, 'series': 1 }, { 'x': 1993, 'y': 9.86, 'series': 1 }, { 'x': 1994, 'y': 10.22, 'series': 1 }, { 'x': 1995, 'y': 10.32, 'series': 1 }, { 'x': 1996, 'y': 9.8, 'series': 1 }, { 'x': 1997, 'y': 10.52, 'series': 1 }, { 'x': 1998, 'y': 11.68, 'series': 1 }, { 'x': 1999, 'y': 13.16, 'series': 1 }, { 'x': 2000, 'y': 9.69, 'series': 1 }, { 'x': 2001, 'y': 10.42, 'series': 1 }, { 'x': 2002, 'y': 10.48, 'series': 1 }, { 'x': 2003, 'y': 11.22, 'series': 1 }, { 'x': 2004, 'y': 11.72, 'series': 1 }, { 'x': 2005, 'y': 10.27, 'series': 1 }, { 'x': 2006, 'y': 9.12, 'series': 1 }, { 'x': 2007, 'y': 9.13, 'series': 1 }, { 'x': 2008, 'y': 9.06, 'series': 1 }, { 'x': 2009, 'y': 9.94, 'series': 1 }, { 'x': 2010, 'y': 9.51, 'series': 1 }, { 'x': 2011, 'y': 10.26, 'series': 1 }, { 'x': 2012, 'y': 11.37, 'series': 1 }, { 'x': 2013, 'y': 10.19, 'series': 1 }, { 'x': 2014, 'y': 10.39, 'series': 1 }, { 'x': 2015, 'y': 10.96, 'series': 1 }, { 'x': 2016, 'y': 11.17, 'series': 1 }, { 'x': 2017, 'y': 11.77, 'series': 1 }, { 'x': 2018, 'y': 11.94, 'series': 1 }, { 'x': 2019, 'y': 11.87, 'series': 1 }], yAxis: 1 }];
    $scope.data2 = [{ key: 'Chartbook series', type: 'line', values: [{ 'x': 1982, 'y': 14.0, 'series': 0 }, { 'x': 1984, 'y': 13.0, 'series': 0 }, { 'x': 1986, 'y': 13.0, 'series': 0 }, { 'x': 1988, 'y': 12.0, 'series': 0 }, { 'x': 1990, 'y': 12.0, 'series': 0 }, { 'x': 1992, 'y': 14.0, 'series': 0 }, { 'x': 1994, 'y': 15.0, 'series': 0 }, { 'x': 1996, 'y': 13.0, 'series': 0 }, { 'x': 1998, 'y': 13.0, 'series': 0 }, { 'x': 2001, 'y': 16.0, 'series': 0 }, { 'x': 2004, 'y': 21.0, 'series': 0 }, { 'x': 2007, 'y': 18.0, 'series': 0 }, { 'x': 2008, 'y': 18.0, 'series': 0 }, { 'x': 2009, 'y': 17.0, 'series': 0 }, { 'x': 2010, 'y': 18.0, 'series': 0 }, { 'x': 2011, 'y': 19.0, 'series': 0 }, { 'x': 2012, 'y': 16.0, 'series': 0 }, { 'x': 2013, 'y': 17.0, 'series': 0 }, { 'x': 2014, 'y': 19.0, 'series': 0 }, { 'x': 2015, 'y': 19.0, 'series': 0 }, { 'x': 2016, 'y': 17.0, 'series': 0 }, { 'x': 2017, 'y': 19.0, 'series': 0 }, { 'x': 2018, 'y': 20.0, 'series': 0 }], yAxis: 1 }, { key: 'Perry (2019) - Equivalised disposable household income (before deducting housing costs)', type: 'scatter', values: [{ 'x': 1982, 'y': 14.0, 'series': 1 }, { 'x': 1984, 'y': 13.0, 'series': 1 }, { 'x': 1986, 'y': 13.0, 'series': 1 }, { 'x': 1988, 'y': 12.0, 'series': 1 }, { 'x': 1990, 'y': 12.0, 'series': 1 }, { 'x': 1992, 'y': 14.0, 'series': 1 }, { 'x': 1994, 'y': 15.0, 'series': 1 }, { 'x': 1996, 'y': 13.0, 'series': 1 }, { 'x': 1998, 'y': 13.0, 'series': 1 }, { 'x': 2001, 'y': 16.0, 'series': 1 }, { 'x': 2004, 'y': 21.0, 'series': 1 }, { 'x': 2007, 'y': 18.0, 'series': 1 }, { 'x': 2008, 'y': 18.0, 'series': 1 }, { 'x': 2009, 'y': 17.0, 'series': 1 }, { 'x': 2010, 'y': 18.0, 'series': 1 }, { 'x': 2011, 'y': 19.0, 'series': 1 }, { 'x': 2012, 'y': 16.0, 'series': 1 }, { 'x': 2013, 'y': 17.0, 'series': 1 }, { 'x': 2014, 'y': 19.0, 'series': 1 }, { 'x': 2015, 'y': 19.0, 'series': 1 }, { 'x': 2016, 'y': 17.0, 'series': 1 }, { 'x': 2017, 'y': 19.0, 'series': 1 }, { 'x': 2018, 'y': 20.0, 'series': 1 }], yAxis: 1 }];
    $scope.data3 = [{ key: 'Chartbook series', type: 'line', values: [{ 'x': 1958, 'y': 148.0, 'series': 0 }, { 'x': 1959, 'y': 149.0, 'series': 0 }, { 'x': 1960, 'y': 150.0, 'series': 0 }, { 'x': 1962, 'y': 149.0, 'series': 0 }, { 'x': 1963, 'y': 149.0, 'series': 0 }, { 'x': 1964, 'y': 149.0, 'series': 0 }, { 'x': 1965, 'y': 150.0, 'series': 0 }, { 'x': 1966, 'y': 150.0, 'series': 0 }, { 'x': 1967, 'y': 153.0, 'series': 0 }, { 'x': 1968, 'y': 152.0, 'series': 0 }, { 'x': 1969, 'y': 154.0, 'series': 0 }, { 'x': 1970, 'y': 156.0, 'series': 0 }, { 'x': 1971, 'y': 157.0, 'series': 0 }, { 'x': 1972, 'y': 157.0, 'series': 0 }, { 'x': 1973, 'y': 156.0, 'series': 0 }, { 'x': 1984, 'y': 151.8362, 'series': 0 }, { 'x': 1986, 'y': 148.559, 'series': 0 }, { 'x': 1988, 'y': 149.5842, 'series': 0 }, { 'x': 1990, 'y': 155.3117, 'series': 0 }, { 'x': 1992, 'y': 155.4512, 'series': 0 }, { 'x': 1994, 'y': 156.7068, 'series': 0 }, { 'x': 1995, 'y': 154.8445, 'series': 0 }, { 'x': 1996, 'y': 162.6926, 'series': 0 }, { 'x': 1997, 'y': 170.4444, 'series': 0 }, { 'x': 1998, 'y': 165.9441, 'series': 0 }, { 'x': 1999, 'y': 169.7931, 'series': 0 }, { 'x': 2000, 'y': 168.9189, 'series': 0 }, { 'x': 2001, 'y': 175.8, 'series': 0 }, { 'x': 2002, 'y': 173.9441, 'series': 0 }, { 'x': 2003, 'y': 180.6452, 'series': 0 }, { 'x': 2004, 'y': 175.6449, 'series': 0 }, { 'x': 2005, 'y': 176.6512, 'series': 0 }, { 'x': 2006, 'y': 177.7778, 'series': 0 }, { 'x': 2007, 'y': 182.4818, 'series': 0 }, { 'x': 2008, 'y': 187.0, 'series': 0 }, { 'x': 2009, 'y': 182.9594, 'series': 0 }, { 'x': 2010, 'y': 182.4838, 'series': 0 }, { 'x': 2011, 'y': 185.2727, 'series': 0 }, { 'x': 2012, 'y': 187.5111, 'series': 0 }, { 'x': 2013, 'y': 186.3931, 'series': 0 }, { 'x': 2014, 'y': 188.4632, 'series': 0 }, { 'x': 2015, 'y': 188.9573, 'series': 0 }, { 'x': 2016, 'y': 187.52, 'series': 0 }, { 'x': 2017, 'y': 185.2066, 'series': 0 }, { 'x': 2018, 'y': 184.2624, 'series': 0 }, { 'x': 2019, 'y': 185.3912, 'series': 0 }, { 'x': 2020, 'y': 185.8186, 'series': 0 }], yAxis: 1 }, { key: "Atkinson (2008) 'Easton' - Gross individual earnings", type: 'scatter', values: [{ 'x': 1958, 'y': 148.0, 'series': 1 }, { 'x': 1959, 'y': 149.0, 'series': 1 }, { 'x': 1960, 'y': 150.0, 'series': 1 }, { 'x': 1962, 'y': 149.0, 'series': 1 }, { 'x': 1963, 'y': 149.0, 'series': 1 }, { 'x': 1964, 'y': 149.0, 'series': 1 }, { 'x': 1965, 'y': 150.0, 'series': 1 }, { 'x': 1966, 'y': 150.0, 'series': 1 }, { 'x': 1967, 'y': 153.0, 'series': 1 }, { 'x': 1968, 'y': 152.0, 'series': 1 }, { 'x': 1969, 'y': 154.0, 'series': 1 }, { 'x': 1970, 'y': 156.0, 'series': 1 }, { 'x': 1971, 'y': 157.0, 'series': 1 }, { 'x': 1972, 'y': 157.0, 'series': 1 }, { 'x': 1973, 'y': 156.0, 'series': 1 }, { 'x': 2020, 'y': null, 'series': 0 }], yAxis: 1 }, { key: 'OECD - Gross individual earnings', type: 'scatter', values: [{ 'x': 1958, 'y': null, 'series': 0 }, { 'x': 1984, 'y': 151.8362, 'series': 2 }, { 'x': 1986, 'y': 148.559, 'series': 2 }, { 'x': 1988, 'y': 149.5842, 'series': 2 }, { 'x': 1990, 'y': 155.3117, 'series': 2 }, { 'x': 1992, 'y': 155.4512, 'series': 2 }, { 'x': 1994, 'y': 156.7068, 'series': 2 }, { 'x': 1995, 'y': 154.8445, 'series': 2 }, { 'x': 1996, 'y': 162.6926, 'series': 2 }, { 'x': 1997, 'y': 170.4444, 'series': 2 }, { 'x': 1998, 'y': 165.9441, 'series': 2 }, { 'x': 1999, 'y': 169.7931, 'series': 2 }, { 'x': 2000, 'y': 168.9189, 'series': 2 }, { 'x': 2001, 'y': 175.8, 'series': 2 }, { 'x': 2002, 'y': 173.9441, 'series': 2 }, { 'x': 2003, 'y': 180.6452, 'series': 2 }, { 'x': 2004, 'y': 175.6449, 'series': 2 }, { 'x': 2005, 'y': 176.6512, 'series': 2 }, { 'x': 2006, 'y': 177.7778, 'series': 2 }, { 'x': 2007, 'y': 182.4818, 'series': 2 }, { 'x': 2008, 'y': 187.0, 'series': 2 }, { 'x': 2009, 'y': 182.9594, 'series': 2 }, { 'x': 2010, 'y': 182.4838, 'series': 2 }, { 'x': 2011, 'y': 185.2727, 'series': 2 }, { 'x': 2012, 'y': 187.5111, 'series': 2 }, { 'x': 2013, 'y': 186.3931, 'series': 2 }, { 'x': 2014, 'y': 188.4632, 'series': 2 }, { 'x': 2015, 'y': 188.9573, 'series': 2 }, { 'x': 2016, 'y': 187.52, 'series': 2 }, { 'x': 2017, 'y': 185.2066, 'series': 2 }, { 'x': 2018, 'y': 184.2624, 'series': 2 }, { 'x': 2019, 'y': 185.3912, 'series': 2 }, { 'x': 2020, 'y': 185.8186, 'series': 2 }], yAxis: 1 }];
    $scope.data4 = [{ key: 'Chartbook series', type: 'line', values: [{ 'x': 1956, 'y': 25.4, 'series': 0 }, { 'x': 1966, 'y': 18.0, 'series': 0 }, { 'x': 2015, 'y': 22.0, 'series': 0 }, { 'x': 2018, 'y': 20.0, 'series': 0 }], yAxis: 1 }, { key: 'Easton (1983) - Individual net wealth', type: 'scatter', values: [{ 'x': 1956, 'y': 25.4, 'series': 1 }, { 'x': 1966, 'y': 18.0, 'series': 1 }, { 'x': 2018, 'y': null, 'series': 0 }], yAxis: 1 }, { key: 'NZ.stat - Individual net wealth', type: 'scatter', values: [{ 'x': 1956, 'y': null, 'series': 0 }, { 'x': 2015, 'y': 22.0, 'series': 2 }, { 'x': 2018, 'y': 20.0, 'series': 2 }], yAxis: 1 }]
});
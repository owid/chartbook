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
{key: 'Chartbook series', type: 'line', values: [
{'x': 1961, 'y': 24.70528025, 'series': 0},
 {'x': 1967, 'y': 23.55619745, 'series': 0},
 {'x': 1972, 'y': 22.55075, 'series': 0},
 {'x': 1975, 'y': 24.84891561, 'series': 0},
 {'x': 1978, 'y': 24.2743742, 'series': 0},
 {'x': 1981, 'y': 22.55075, 'series': 0},
 {'x': 1982, 'y': 22.09987, 'series': 0},
 {'x': 1983, 'y': 22.21818, 'series': 0},
 {'x': 1984, 'y': 22.16563, 'series': 0},
 {'x': 1985, 'y': 23.07028, 'series': 0},
 {'x': 1986, 'y': 23.13722, 'series': 0},
 {'x': 1987, 'y': 23.20756, 'series': 0},
 {'x': 1988, 'y': 23.94392, 'series': 0},
 {'x': 1989, 'y': 24.00769, 'series': 0},
 {'x': 1990, 'y': 23.96607, 'series': 0},
 {'x': 1991, 'y': 24.31866, 'series': 0},
 {'x': 1992, 'y': 24.14415, 'series': 0},
 {'x': 1993, 'y': 23.61355, 'series': 0},
 {'x': 1994, 'y': 24.21269, 'series': 0},
 {'x': 1995, 'y': 24.37723, 'series': 0},
 {'x': 1996, 'y': 24.18753, 'series': 0},
 {'x': 1997, 'y': 23.98138, 'series': 0},
 {'x': 1998, 'y': 24.36877, 'series': 0},
 {'x': 1999, 'y': 23.77982, 'series': 0},
 {'x': 2000, 'y': 24.55987, 'series': 0},
 {'x': 2001, 'y': 24.82806, 'series': 0},
 {'x': 2002, 'y': 25.54128, 'series': 0},
 {'x': 2003, 'y': 25.21783, 'series': 0},
 {'x': 2004, 'y': 25.21678, 'series': 0},
 {'x': 2005, 'y': 25.87057, 'series': 0},
 {'x': 2006, 'y': 24.78479, 'series': 0},
 {'x': 2007, 'y': 25.42535, 'series': 0},
 {'x': 2008, 'y': 25.44301, 'series': 0}], yAxis: 1},
 {key: 'Tachibanaki (2006) - Equivalised disposable household income', type: 'scatter', values: [
{'x': 1961, 'y': 34.4, 'series': 1},
 {'x': 1967, 'y': 32.8, 'series': 1},
 {'x': 1972, 'y': 31.4, 'series': 1},
 {'x': 1975, 'y': 34.6, 'series': 1},
 {'x': 1978, 'y': 33.8, 'series': 1},
 {'x': 1981, 'y': 31.4, 'series': 1},
 {'x': 1984, 'y': 34.3, 'series': 1},
 {'x': 1987, 'y': 33.8, 'series': 1},
 {'x': 1990, 'y': 36.4, 'series': 1},
 {'x': 1993, 'y': 36.5, 'series': 1},
 {'x': 1996, 'y': 36.1, 'series': 1},
 {'x': 1999, 'y': 38.1, 'series': 1},
 {'x': 2002, 'y': 38.1, 'series': 1},
 {'x': 2008, 'y': null, 'series': 1}], yAxis: 1},
 {key: 'Lise (2013) - Equivalised disposable household income', type: 'scatter', values: [
{'x': 1961, 'y': null, 'series': 2},
 {'x': 1981, 'y': 22.55075, 'series': 2},
 {'x': 1982, 'y': 22.09987, 'series': 2},
 {'x': 1983, 'y': 22.21818, 'series': 2},
 {'x': 1984, 'y': 22.16563, 'series': 2},
 {'x': 1985, 'y': 23.07028, 'series': 2},
 {'x': 1986, 'y': 23.13722, 'series': 2},
 {'x': 1987, 'y': 23.20756, 'series': 2},
 {'x': 1988, 'y': 23.94392, 'series': 2},
 {'x': 1989, 'y': 24.00769, 'series': 2},
 {'x': 1990, 'y': 23.96607, 'series': 2},
 {'x': 1991, 'y': 24.31866, 'series': 2},
 {'x': 1992, 'y': 24.14415, 'series': 2},
 {'x': 1993, 'y': 23.61355, 'series': 2},
 {'x': 1994, 'y': 24.21269, 'series': 2},
 {'x': 1995, 'y': 24.37723, 'series': 2},
 {'x': 1996, 'y': 24.18753, 'series': 2},
 {'x': 1997, 'y': 23.98138, 'series': 2},
 {'x': 1998, 'y': 24.36877, 'series': 2},
 {'x': 1999, 'y': 23.77982, 'series': 2},
 {'x': 2000, 'y': 24.55987, 'series': 2},
 {'x': 2001, 'y': 24.82806, 'series': 2},
 {'x': 2002, 'y': 25.54128, 'series': 2},
 {'x': 2003, 'y': 25.21783, 'series': 2},
 {'x': 2004, 'y': 25.21678, 'series': 2},
 {'x': 2005, 'y': 25.87057, 'series': 2},
 {'x': 2006, 'y': 24.78479, 'series': 2},
 {'x': 2007, 'y': 25.42535, 'series': 2},
 {'x': 2008, 'y': 25.44301, 'series': 2}], yAxis: 1}]; 
$scope.data1 = [
{key: 'Chartbook series', type: 'line', values: [
{'x': 1923, 'y': 50.5, 'series': 0},
 {'x': 1930, 'y': 51.2, 'series': 0},
 {'x': 1937, 'y': 54.7, 'series': 0}], yAxis: 1},
 {key: 'Minami (1998) - Pre-tax household income', type: 'scatter', values: [
{'x': 1923, 'y': 50.5, 'series': 1},
 {'x': 1930, 'y': 51.2, 'series': 1},
 {'x': 1937, 'y': 54.7, 'series': 1}], yAxis: 1}]; 
$scope.data2 = [
{key: 'Chartbook series', type: 'line', values: [
{'x': 1900, 'y': 20.75, 'series': 0},
 {'x': 1901, 'y': 21.61, 'series': 0},
 {'x': 1902, 'y': 22.96, 'series': 0},
 {'x': 1903, 'y': 22.4, 'series': 0},
 {'x': 1904, 'y': 21.16, 'series': 0},
 {'x': 1905, 'y': 23.06, 'series': 0},
 {'x': 1906, 'y': 23.12, 'series': 0},
 {'x': 1907, 'y': 23.3, 'series': 0},
 {'x': 1908, 'y': 24.16, 'series': 0},
 {'x': 1909, 'y': 23.92, 'series': 0},
 {'x': 1910, 'y': 24.09, 'series': 0},
 {'x': 1911, 'y': 22.96, 'series': 0},
 {'x': 1912, 'y': 22.86, 'series': 0},
 {'x': 1913, 'y': 22.27, 'series': 0},
 {'x': 1914, 'y': 23.68, 'series': 0},
 {'x': 1915, 'y': 25.02, 'series': 0},
 {'x': 1916, 'y': 24.91, 'series': 0},
 {'x': 1917, 'y': 23.85, 'series': 0},
 {'x': 1918, 'y': 21.21, 'series': 0},
 {'x': 1919, 'y': 19.46, 'series': 0},
 {'x': 1920, 'y': 21.81, 'series': 0},
 {'x': 1921, 'y': 23.59, 'series': 0},
 {'x': 1922, 'y': 24.95, 'series': 0},
 {'x': 1923, 'y': 25.17, 'series': 0},
 {'x': 1924, 'y': 25.16, 'series': 0},
 {'x': 1925, 'y': 23.38, 'series': 0},
 {'x': 1926, 'y': 23.67, 'series': 0},
 {'x': 1927, 'y': 22.84, 'series': 0},
 {'x': 1928, 'y': 23.62, 'series': 0},
 {'x': 1929, 'y': 23.42, 'series': 0},
 {'x': 1930, 'y': 21.42, 'series': 0},
 {'x': 1931, 'y': 22.18, 'series': 0},
 {'x': 1932, 'y': 22.41, 'series': 0},
 {'x': 1933, 'y': 23.32, 'series': 0},
 {'x': 1934, 'y': 24.2, 'series': 0},
 {'x': 1935, 'y': 23.92, 'series': 0},
 {'x': 1936, 'y': 23.83, 'series': 0},
 {'x': 1937, 'y': 24.59, 'series': 0},
 {'x': 1938, 'y': 25.43, 'series': 0},
 {'x': 1939, 'y': 22.91, 'series': 0},
 {'x': 1940, 'y': 21.0, 'series': 0},
 {'x': 1941, 'y': 21.28, 'series': 0},
 {'x': 1942, 'y': 19.28, 'series': 0},
 {'x': 1943, 'y': 17.39, 'series': 0},
 {'x': 1944, 'y': 13.71, 'series': 0},
 {'x': 1945, 'y': 8.2, 'series': 0},
 {'x': 1947, 'y': 9.41, 'series': 0},
 {'x': 1948, 'y': 10.0, 'series': 0},
 {'x': 1949, 'y': 10.13, 'series': 0},
 {'x': 1950, 'y': 9.84, 'series': 0},
 {'x': 1951, 'y': 10.27, 'series': 0},
 {'x': 1952, 'y': 11.06, 'series': 0},
 {'x': 1953, 'y': 10.52, 'series': 0},
 {'x': 1954, 'y': 10.16, 'series': 0},
 {'x': 1955, 'y': 9.76, 'series': 0},
 {'x': 1956, 'y': 10.45, 'series': 0},
 {'x': 1957, 'y': 10.94, 'series': 0},
 {'x': 1958, 'y': 11.06, 'series': 0},
 {'x': 1959, 'y': 11.56, 'series': 0},
 {'x': 1960, 'y': 12.08, 'series': 0},
 {'x': 1961, 'y': 12.64, 'series': 0},
 {'x': 1962, 'y': 12.8, 'series': 0},
 {'x': 1963, 'y': 11.5, 'series': 0},
 {'x': 1964, 'y': 11.18, 'series': 0},
 {'x': 1965, 'y': 10.54, 'series': 0},
 {'x': 1966, 'y': 10.27, 'series': 0},
 {'x': 1967, 'y': 10.35, 'series': 0},
 {'x': 1968, 'y': 10.22, 'series': 0},
 {'x': 1969, 'y': 12.81, 'series': 0},
 {'x': 1970, 'y': 13.67, 'series': 0},
 {'x': 1971, 'y': 16.58, 'series': 0},
 {'x': 1972, 'y': 15.52, 'series': 0},
 {'x': 1973, 'y': 17.64, 'series': 0},
 {'x': 1974, 'y': 10.66, 'series': 0},
 {'x': 1975, 'y': 11.47, 'series': 0},
 {'x': 1976, 'y': 9.62, 'series': 0},
 {'x': 1977, 'y': 9.75, 'series': 0},
 {'x': 1978, 'y': 10.09, 'series': 0},
 {'x': 1979, 'y': 10.72, 'series': 0},
 {'x': 1980, 'y': 10.89, 'series': 0},
 {'x': 1981, 'y': 10.54, 'series': 0},
 {'x': 1982, 'y': 10.48, 'series': 0},
 {'x': 1983, 'y': 10.43, 'series': 0},
 {'x': 1984, 'y': 10.59, 'series': 0},
 {'x': 1985, 'y': 10.88, 'series': 0},
 {'x': 1986, 'y': 11.41, 'series': 0},
 {'x': 1987, 'y': 12.77, 'series': 0},
 {'x': 1988, 'y': 13.05, 'series': 0},
 {'x': 1989, 'y': 14.05, 'series': 0},
 {'x': 1990, 'y': 14.82, 'series': 0},
 {'x': 1991, 'y': 13.86, 'series': 0},
 {'x': 1992, 'y': 10.14, 'series': 0},
 {'x': 1993, 'y': 10.33, 'series': 0},
 {'x': 1994, 'y': 10.16, 'series': 0},
 {'x': 1995, 'y': 10.57, 'series': 0},
 {'x': 1996, 'y': 11.27, 'series': 0},
 {'x': 1997, 'y': 10.67, 'series': 0},
 {'x': 1998, 'y': 10.55, 'series': 0},
 {'x': 1999, 'y': 10.81, 'series': 0},
 {'x': 2000, 'y': 11.52, 'series': 0},
 {'x': 2001, 'y': 11.76, 'series': 0},
 {'x': 2002, 'y': 12.07, 'series': 0},
 {'x': 2003, 'y': 12.56, 'series': 0},
 {'x': 2004, 'y': 13.39, 'series': 0},
 {'x': 2005, 'y': 13.83, 'series': 0},
 {'x': 2006, 'y': 13.97, 'series': 0},
 {'x': 2007, 'y': 14.0, 'series': 0},
 {'x': 2008, 'y': 13.22, 'series': 0},
 {'x': 2009, 'y': 12.46, 'series': 0},
 {'x': 2010, 'y': 13.08, 'series': 0},
 {'x': 2011, 'y': 12.87, 'series': 0},
 {'x': 2012, 'y': 12.96, 'series': 0},
 {'x': 2013, 'y': 13.15, 'series': 0},
 {'x': 2014, 'y': 13.11, 'series': 0},
 {'x': 2015, 'y': 13.22, 'series': 0},
 {'x': 2016, 'y': 13.15, 'series': 0},
 {'x': 2017, 'y': 13.11, 'series': 0},
 {'x': 2018, 'y': 13.11, 'series': 0},
 {'x': 2019, 'y': 13.11, 'series': 0}], yAxis: 1},
 {key: 'WID - Pre-tax national income (equal-split adults)', type: 'scatter', values: [
{'x': 1900, 'y': 20.75, 'series': 1},
 {'x': 1901, 'y': 21.61, 'series': 1},
 {'x': 1902, 'y': 22.96, 'series': 1},
 {'x': 1903, 'y': 22.4, 'series': 1},
 {'x': 1904, 'y': 21.16, 'series': 1},
 {'x': 1905, 'y': 23.06, 'series': 1},
 {'x': 1906, 'y': 23.12, 'series': 1},
 {'x': 1907, 'y': 23.3, 'series': 1},
 {'x': 1908, 'y': 24.16, 'series': 1},
 {'x': 1909, 'y': 23.92, 'series': 1},
 {'x': 1910, 'y': 24.09, 'series': 1},
 {'x': 1911, 'y': 22.96, 'series': 1},
 {'x': 1912, 'y': 22.86, 'series': 1},
 {'x': 1913, 'y': 22.27, 'series': 1},
 {'x': 1914, 'y': 23.68, 'series': 1},
 {'x': 1915, 'y': 25.02, 'series': 1},
 {'x': 1916, 'y': 24.91, 'series': 1},
 {'x': 1917, 'y': 23.85, 'series': 1},
 {'x': 1918, 'y': 21.21, 'series': 1},
 {'x': 1919, 'y': 19.46, 'series': 1},
 {'x': 1920, 'y': 21.81, 'series': 1},
 {'x': 1921, 'y': 23.59, 'series': 1},
 {'x': 1922, 'y': 24.95, 'series': 1},
 {'x': 1923, 'y': 25.17, 'series': 1},
 {'x': 1924, 'y': 25.16, 'series': 1},
 {'x': 1925, 'y': 23.38, 'series': 1},
 {'x': 1926, 'y': 23.67, 'series': 1},
 {'x': 1927, 'y': 22.84, 'series': 1},
 {'x': 1928, 'y': 23.62, 'series': 1},
 {'x': 1929, 'y': 23.42, 'series': 1},
 {'x': 1930, 'y': 21.42, 'series': 1},
 {'x': 1931, 'y': 22.18, 'series': 1},
 {'x': 1932, 'y': 22.41, 'series': 1},
 {'x': 1933, 'y': 23.32, 'series': 1},
 {'x': 1934, 'y': 24.2, 'series': 1},
 {'x': 1935, 'y': 23.92, 'series': 1},
 {'x': 1936, 'y': 23.83, 'series': 1},
 {'x': 1937, 'y': 24.59, 'series': 1},
 {'x': 1938, 'y': 25.43, 'series': 1},
 {'x': 1939, 'y': 22.91, 'series': 1},
 {'x': 1940, 'y': 21.0, 'series': 1},
 {'x': 1941, 'y': 21.28, 'series': 1},
 {'x': 1942, 'y': 19.28, 'series': 1},
 {'x': 1943, 'y': 17.39, 'series': 1},
 {'x': 1944, 'y': 13.71, 'series': 1},
 {'x': 1945, 'y': 8.2, 'series': 1},
 {'x': 1947, 'y': 9.41, 'series': 1},
 {'x': 1948, 'y': 10.0, 'series': 1},
 {'x': 1949, 'y': 10.13, 'series': 1},
 {'x': 1950, 'y': 9.84, 'series': 1},
 {'x': 1951, 'y': 10.27, 'series': 1},
 {'x': 1952, 'y': 11.06, 'series': 1},
 {'x': 1953, 'y': 10.52, 'series': 1},
 {'x': 1954, 'y': 10.16, 'series': 1},
 {'x': 1955, 'y': 9.76, 'series': 1},
 {'x': 1956, 'y': 10.45, 'series': 1},
 {'x': 1957, 'y': 10.94, 'series': 1},
 {'x': 1958, 'y': 11.06, 'series': 1},
 {'x': 1959, 'y': 11.56, 'series': 1},
 {'x': 1960, 'y': 12.08, 'series': 1},
 {'x': 1961, 'y': 12.64, 'series': 1},
 {'x': 1962, 'y': 12.8, 'series': 1},
 {'x': 1963, 'y': 11.5, 'series': 1},
 {'x': 1964, 'y': 11.18, 'series': 1},
 {'x': 1965, 'y': 10.54, 'series': 1},
 {'x': 1966, 'y': 10.27, 'series': 1},
 {'x': 1967, 'y': 10.35, 'series': 1},
 {'x': 1968, 'y': 10.22, 'series': 1},
 {'x': 1969, 'y': 12.81, 'series': 1},
 {'x': 1970, 'y': 13.67, 'series': 1},
 {'x': 1971, 'y': 16.58, 'series': 1},
 {'x': 1972, 'y': 15.52, 'series': 1},
 {'x': 1973, 'y': 17.64, 'series': 1},
 {'x': 1974, 'y': 10.66, 'series': 1},
 {'x': 1975, 'y': 11.47, 'series': 1},
 {'x': 1976, 'y': 9.62, 'series': 1},
 {'x': 1977, 'y': 9.75, 'series': 1},
 {'x': 1978, 'y': 10.09, 'series': 1},
 {'x': 1979, 'y': 10.72, 'series': 1},
 {'x': 1980, 'y': 10.89, 'series': 1},
 {'x': 1981, 'y': 10.54, 'series': 1},
 {'x': 1982, 'y': 10.48, 'series': 1},
 {'x': 1983, 'y': 10.43, 'series': 1},
 {'x': 1984, 'y': 10.59, 'series': 1},
 {'x': 1985, 'y': 10.88, 'series': 1},
 {'x': 1986, 'y': 11.41, 'series': 1},
 {'x': 1987, 'y': 12.77, 'series': 1},
 {'x': 1988, 'y': 13.05, 'series': 1},
 {'x': 1989, 'y': 14.05, 'series': 1},
 {'x': 1990, 'y': 14.82, 'series': 1},
 {'x': 1991, 'y': 13.86, 'series': 1},
 {'x': 1992, 'y': 10.14, 'series': 1},
 {'x': 1993, 'y': 10.33, 'series': 1},
 {'x': 1994, 'y': 10.16, 'series': 1},
 {'x': 1995, 'y': 10.57, 'series': 1},
 {'x': 1996, 'y': 11.27, 'series': 1},
 {'x': 1997, 'y': 10.67, 'series': 1},
 {'x': 1998, 'y': 10.55, 'series': 1},
 {'x': 1999, 'y': 10.81, 'series': 1},
 {'x': 2000, 'y': 11.52, 'series': 1},
 {'x': 2001, 'y': 11.76, 'series': 1},
 {'x': 2002, 'y': 12.07, 'series': 1},
 {'x': 2003, 'y': 12.56, 'series': 1},
 {'x': 2004, 'y': 13.39, 'series': 1},
 {'x': 2005, 'y': 13.83, 'series': 1},
 {'x': 2006, 'y': 13.97, 'series': 1},
 {'x': 2007, 'y': 14.0, 'series': 1},
 {'x': 2008, 'y': 13.22, 'series': 1},
 {'x': 2009, 'y': 12.46, 'series': 1},
 {'x': 2010, 'y': 13.08, 'series': 1},
 {'x': 2011, 'y': 12.87, 'series': 1},
 {'x': 2012, 'y': 12.96, 'series': 1},
 {'x': 2013, 'y': 13.15, 'series': 1},
 {'x': 2014, 'y': 13.11, 'series': 1},
 {'x': 2015, 'y': 13.22, 'series': 1},
 {'x': 2016, 'y': 13.15, 'series': 1},
 {'x': 2017, 'y': 13.11, 'series': 1},
 {'x': 2018, 'y': 13.11, 'series': 1},
 {'x': 2019, 'y': 13.11, 'series': 1}], yAxis: 1}]; 
$scope.data3 = [
{key: 'Chartbook series', type: 'line', values: [
{'x': 1900, 'y': 16.26, 'series': 0},
 {'x': 1901, 'y': 16.93, 'series': 0},
 {'x': 1902, 'y': 17.99, 'series': 0},
 {'x': 1903, 'y': 17.55, 'series': 0},
 {'x': 1904, 'y': 16.58, 'series': 0},
 {'x': 1905, 'y': 18.07, 'series': 0},
 {'x': 1906, 'y': 18.11, 'series': 0},
 {'x': 1907, 'y': 18.25, 'series': 0},
 {'x': 1908, 'y': 18.93, 'series': 0},
 {'x': 1909, 'y': 18.74, 'series': 0},
 {'x': 1910, 'y': 18.88, 'series': 0},
 {'x': 1911, 'y': 17.99, 'series': 0},
 {'x': 1912, 'y': 17.91, 'series': 0},
 {'x': 1913, 'y': 17.45, 'series': 0},
 {'x': 1914, 'y': 18.55, 'series': 0},
 {'x': 1915, 'y': 19.6, 'series': 0},
 {'x': 1916, 'y': 19.52, 'series': 0},
 {'x': 1917, 'y': 18.68, 'series': 0},
 {'x': 1918, 'y': 16.62, 'series': 0},
 {'x': 1919, 'y': 15.25, 'series': 0},
 {'x': 1920, 'y': 17.09, 'series': 0},
 {'x': 1921, 'y': 18.48, 'series': 0},
 {'x': 1922, 'y': 19.55, 'series': 0},
 {'x': 1923, 'y': 19.72, 'series': 0},
 {'x': 1924, 'y': 19.72, 'series': 0},
 {'x': 1925, 'y': 18.32, 'series': 0},
 {'x': 1926, 'y': 18.55, 'series': 0},
 {'x': 1927, 'y': 17.89, 'series': 0},
 {'x': 1928, 'y': 18.51, 'series': 0},
 {'x': 1929, 'y': 18.35, 'series': 0},
 {'x': 1930, 'y': 16.78, 'series': 0},
 {'x': 1931, 'y': 17.38, 'series': 0},
 {'x': 1932, 'y': 17.56, 'series': 0},
 {'x': 1933, 'y': 18.28, 'series': 0},
 {'x': 1934, 'y': 18.96, 'series': 0},
 {'x': 1935, 'y': 18.74, 'series': 0},
 {'x': 1936, 'y': 18.68, 'series': 0},
 {'x': 1937, 'y': 19.26, 'series': 0},
 {'x': 1938, 'y': 19.92, 'series': 0},
 {'x': 1939, 'y': 17.95, 'series': 0},
 {'x': 1940, 'y': 16.45, 'series': 0},
 {'x': 1941, 'y': 16.67, 'series': 0},
 {'x': 1942, 'y': 15.11, 'series': 0},
 {'x': 1943, 'y': 13.63, 'series': 0},
 {'x': 1944, 'y': 10.74, 'series': 0},
 {'x': 1945, 'y': 6.43, 'series': 0},
 {'x': 1947, 'y': 7.38, 'series': 0},
 {'x': 1948, 'y': 7.84, 'series': 0},
 {'x': 1949, 'y': 7.94, 'series': 0},
 {'x': 1950, 'y': 7.71, 'series': 0},
 {'x': 1951, 'y': 8.05, 'series': 0},
 {'x': 1952, 'y': 8.67, 'series': 0},
 {'x': 1953, 'y': 8.24, 'series': 0},
 {'x': 1954, 'y': 7.96, 'series': 0},
 {'x': 1955, 'y': 7.65, 'series': 0},
 {'x': 1956, 'y': 8.19, 'series': 0},
 {'x': 1957, 'y': 8.57, 'series': 0},
 {'x': 1958, 'y': 8.67, 'series': 0},
 {'x': 1959, 'y': 9.05, 'series': 0},
 {'x': 1960, 'y': 9.47, 'series': 0},
 {'x': 1961, 'y': 9.91, 'series': 0},
 {'x': 1962, 'y': 10.03, 'series': 0},
 {'x': 1963, 'y': 9.01, 'series': 0},
 {'x': 1964, 'y': 8.76, 'series': 0},
 {'x': 1965, 'y': 8.26, 'series': 0},
 {'x': 1966, 'y': 8.04, 'series': 0},
 {'x': 1967, 'y': 8.11, 'series': 0},
 {'x': 1968, 'y': 8.01, 'series': 0},
 {'x': 1969, 'y': 10.03, 'series': 0},
 {'x': 1970, 'y': 10.71, 'series': 0},
 {'x': 1971, 'y': 12.99, 'series': 0},
 {'x': 1972, 'y': 12.16, 'series': 0},
 {'x': 1973, 'y': 13.82, 'series': 0},
 {'x': 1974, 'y': 8.35, 'series': 0},
 {'x': 1975, 'y': 8.99, 'series': 0},
 {'x': 1976, 'y': 7.54, 'series': 0},
 {'x': 1977, 'y': 7.64, 'series': 0},
 {'x': 1978, 'y': 7.91, 'series': 0},
 {'x': 1979, 'y': 8.4, 'series': 0},
 {'x': 1980, 'y': 8.36, 'series': 0},
 {'x': 1981, 'y': 8.25, 'series': 0},
 {'x': 1982, 'y': 8.22, 'series': 0},
 {'x': 1983, 'y': 8.23, 'series': 0},
 {'x': 1984, 'y': 8.25, 'series': 0},
 {'x': 1985, 'y': 8.38, 'series': 0},
 {'x': 1986, 'y': 8.87, 'series': 0},
 {'x': 1987, 'y': 10.3, 'series': 0},
 {'x': 1988, 'y': 10.57, 'series': 0},
 {'x': 1989, 'y': 11.9, 'series': 0},
 {'x': 1990, 'y': 12.98, 'series': 0},
 {'x': 1991, 'y': 12.14, 'series': 0},
 {'x': 1992, 'y': 8.42, 'series': 0},
 {'x': 1993, 'y': 8.64, 'series': 0},
 {'x': 1994, 'y': 8.55, 'series': 0},
 {'x': 1995, 'y': 8.67, 'series': 0},
 {'x': 1996, 'y': 8.9, 'series': 0},
 {'x': 1997, 'y': 8.4, 'series': 0},
 {'x': 1998, 'y': 8.47, 'series': 0},
 {'x': 1999, 'y': 8.74, 'series': 0},
 {'x': 2000, 'y': 9.06, 'series': 0},
 {'x': 2001, 'y': 9.38, 'series': 0},
 {'x': 2002, 'y': 9.51, 'series': 0},
 {'x': 2003, 'y': 9.8, 'series': 0},
 {'x': 2004, 'y': 10.47, 'series': 0},
 {'x': 2005, 'y': 11.04, 'series': 0},
 {'x': 2006, 'y': 11.31, 'series': 0},
 {'x': 2007, 'y': 11.35, 'series': 0},
 {'x': 2008, 'y': 10.9, 'series': 0},
 {'x': 2009, 'y': 10.42, 'series': 0},
 {'x': 2010, 'y': 10.44, 'series': 0}], yAxis: 1},
 {key: 'WID - Pre-tax fiscal income (individuals) (excluding capital gains)', type: 'scatter', values: [
{'x': 1900, 'y': 16.26, 'series': 1},
 {'x': 1901, 'y': 16.93, 'series': 1},
 {'x': 1902, 'y': 17.99, 'series': 1},
 {'x': 1903, 'y': 17.55, 'series': 1},
 {'x': 1904, 'y': 16.58, 'series': 1},
 {'x': 1905, 'y': 18.07, 'series': 1},
 {'x': 1906, 'y': 18.11, 'series': 1},
 {'x': 1907, 'y': 18.25, 'series': 1},
 {'x': 1908, 'y': 18.93, 'series': 1},
 {'x': 1909, 'y': 18.74, 'series': 1},
 {'x': 1910, 'y': 18.88, 'series': 1},
 {'x': 1911, 'y': 17.99, 'series': 1},
 {'x': 1912, 'y': 17.91, 'series': 1},
 {'x': 1913, 'y': 17.45, 'series': 1},
 {'x': 1914, 'y': 18.55, 'series': 1},
 {'x': 1915, 'y': 19.6, 'series': 1},
 {'x': 1916, 'y': 19.52, 'series': 1},
 {'x': 1917, 'y': 18.68, 'series': 1},
 {'x': 1918, 'y': 16.62, 'series': 1},
 {'x': 1919, 'y': 15.25, 'series': 1},
 {'x': 1920, 'y': 17.09, 'series': 1},
 {'x': 1921, 'y': 18.48, 'series': 1},
 {'x': 1922, 'y': 19.55, 'series': 1},
 {'x': 1923, 'y': 19.72, 'series': 1},
 {'x': 1924, 'y': 19.72, 'series': 1},
 {'x': 1925, 'y': 18.32, 'series': 1},
 {'x': 1926, 'y': 18.55, 'series': 1},
 {'x': 1927, 'y': 17.89, 'series': 1},
 {'x': 1928, 'y': 18.51, 'series': 1},
 {'x': 1929, 'y': 18.35, 'series': 1},
 {'x': 1930, 'y': 16.78, 'series': 1},
 {'x': 1931, 'y': 17.38, 'series': 1},
 {'x': 1932, 'y': 17.56, 'series': 1},
 {'x': 1933, 'y': 18.28, 'series': 1},
 {'x': 1934, 'y': 18.96, 'series': 1},
 {'x': 1935, 'y': 18.74, 'series': 1},
 {'x': 1936, 'y': 18.68, 'series': 1},
 {'x': 1937, 'y': 19.26, 'series': 1},
 {'x': 1938, 'y': 19.92, 'series': 1},
 {'x': 1939, 'y': 17.95, 'series': 1},
 {'x': 1940, 'y': 16.45, 'series': 1},
 {'x': 1941, 'y': 16.67, 'series': 1},
 {'x': 1942, 'y': 15.11, 'series': 1},
 {'x': 1943, 'y': 13.63, 'series': 1},
 {'x': 1944, 'y': 10.74, 'series': 1},
 {'x': 1945, 'y': 6.43, 'series': 1},
 {'x': 1947, 'y': 7.38, 'series': 1},
 {'x': 1948, 'y': 7.84, 'series': 1},
 {'x': 1949, 'y': 7.94, 'series': 1},
 {'x': 1950, 'y': 7.71, 'series': 1},
 {'x': 1951, 'y': 8.05, 'series': 1},
 {'x': 1952, 'y': 8.67, 'series': 1},
 {'x': 1953, 'y': 8.24, 'series': 1},
 {'x': 1954, 'y': 7.96, 'series': 1},
 {'x': 1955, 'y': 7.65, 'series': 1},
 {'x': 1956, 'y': 8.19, 'series': 1},
 {'x': 1957, 'y': 8.57, 'series': 1},
 {'x': 1958, 'y': 8.67, 'series': 1},
 {'x': 1959, 'y': 9.05, 'series': 1},
 {'x': 1960, 'y': 9.47, 'series': 1},
 {'x': 1961, 'y': 9.91, 'series': 1},
 {'x': 1962, 'y': 10.03, 'series': 1},
 {'x': 1963, 'y': 9.01, 'series': 1},
 {'x': 1964, 'y': 8.76, 'series': 1},
 {'x': 1965, 'y': 8.26, 'series': 1},
 {'x': 1966, 'y': 8.04, 'series': 1},
 {'x': 1967, 'y': 8.11, 'series': 1},
 {'x': 1968, 'y': 8.01, 'series': 1},
 {'x': 1969, 'y': 10.03, 'series': 1},
 {'x': 1970, 'y': 10.71, 'series': 1},
 {'x': 1971, 'y': 12.99, 'series': 1},
 {'x': 1972, 'y': 12.16, 'series': 1},
 {'x': 1973, 'y': 13.82, 'series': 1},
 {'x': 1974, 'y': 8.35, 'series': 1},
 {'x': 1975, 'y': 8.99, 'series': 1},
 {'x': 1976, 'y': 7.54, 'series': 1},
 {'x': 1977, 'y': 7.64, 'series': 1},
 {'x': 1978, 'y': 7.91, 'series': 1},
 {'x': 1979, 'y': 8.4, 'series': 1},
 {'x': 1980, 'y': 8.36, 'series': 1},
 {'x': 1981, 'y': 8.25, 'series': 1},
 {'x': 1982, 'y': 8.22, 'series': 1},
 {'x': 1983, 'y': 8.23, 'series': 1},
 {'x': 1984, 'y': 8.25, 'series': 1},
 {'x': 1985, 'y': 8.38, 'series': 1},
 {'x': 1986, 'y': 8.87, 'series': 1},
 {'x': 1987, 'y': 10.3, 'series': 1},
 {'x': 1988, 'y': 10.57, 'series': 1},
 {'x': 1989, 'y': 11.9, 'series': 1},
 {'x': 1990, 'y': 12.98, 'series': 1},
 {'x': 1991, 'y': 12.14, 'series': 1},
 {'x': 1992, 'y': 8.42, 'series': 1},
 {'x': 1993, 'y': 8.64, 'series': 1},
 {'x': 1994, 'y': 8.55, 'series': 1},
 {'x': 1995, 'y': 8.67, 'series': 1},
 {'x': 1996, 'y': 8.9, 'series': 1},
 {'x': 1997, 'y': 8.4, 'series': 1},
 {'x': 1998, 'y': 8.47, 'series': 1},
 {'x': 1999, 'y': 8.74, 'series': 1},
 {'x': 2000, 'y': 9.06, 'series': 1},
 {'x': 2001, 'y': 9.38, 'series': 1},
 {'x': 2002, 'y': 9.51, 'series': 1},
 {'x': 2003, 'y': 9.8, 'series': 1},
 {'x': 2004, 'y': 10.47, 'series': 1},
 {'x': 2005, 'y': 11.04, 'series': 1},
 {'x': 2006, 'y': 11.31, 'series': 1},
 {'x': 2007, 'y': 11.35, 'series': 1},
 {'x': 2008, 'y': 10.9, 'series': 1},
 {'x': 2009, 'y': 10.42, 'series': 1},
 {'x': 2010, 'y': 10.44, 'series': 1}], yAxis: 1}]; 
$scope.data4 = [
{key: 'Chartbook series', type: 'line', values: [
{'x': 1985, 'y': 18.0, 'series': 0},
 {'x': 1995, 'y': 19.8, 'series': 0},
 {'x': 2000, 'y': 21.4, 'series': 0},
 {'x': 2003, 'y': 20.8, 'series': 0},
 {'x': 2006, 'y': 21.7, 'series': 0},
 {'x': 2009, 'y': 22.1, 'series': 0},
 {'x': 2012, 'y': 21.9, 'series': 0},
 {'x': 2015, 'y': 21.7, 'series': 0},
 {'x': 2018, 'y': 21.2, 'series': 0}], yAxis: 1},
 {key: 'OECD - Equivalised disposable household income', type: 'scatter', values: [
{'x': 1985, 'y': 18.0, 'series': 1},
 {'x': 1995, 'y': 19.8, 'series': 1},
 {'x': 2000, 'y': 21.4, 'series': 1},
 {'x': 2003, 'y': 20.8, 'series': 1},
 {'x': 2006, 'y': 21.7, 'series': 1},
 {'x': 2009, 'y': 22.1, 'series': 1},
 {'x': 2012, 'y': 21.9, 'series': 1},
 {'x': 2015, 'y': 21.7, 'series': 1},
 {'x': 2018, 'y': 21.2, 'series': 1}], yAxis: 1}]; 
$scope.data5 = [
{key: 'Chartbook series', type: 'line', values: [
{'x': 1951, 'y': 215.0135153, 'series': 0},
 {'x': 1952, 'y': 217.0809529, 'series': 0},
 {'x': 1953, 'y': 230.5192976, 'series': 0},
 {'x': 1954, 'y': 225.3507035, 'series': 0},
 {'x': 1955, 'y': 221.2158282, 'series': 0},
 {'x': 1956, 'y': 226.3844224, 'series': 0},
 {'x': 1957, 'y': 229.4855788, 'series': 0},
 {'x': 1958, 'y': 228.45186, 'series': 0},
 {'x': 1959, 'y': 225.3507035, 'series': 0},
 {'x': 1960, 'y': 225.3507035, 'series': 0},
 {'x': 1961, 'y': 220.1821094, 'series': 0},
 {'x': 1962, 'y': 215.0135153, 'series': 0},
 {'x': 1963, 'y': 209.8449212, 'series': 0},
 {'x': 1964, 'y': 206.7437647, 'series': 0},
 {'x': 1965, 'y': 201.5751706, 'series': 0},
 {'x': 1966, 'y': 199.5077329, 'series': 0},
 {'x': 1967, 'y': 194.3391388, 'series': 0},
 {'x': 1968, 'y': 193.30542, 'series': 0},
 {'x': 1969, 'y': 190.2042635, 'series': 0},
 {'x': 1970, 'y': 187.1031071, 'series': 0},
 {'x': 1971, 'y': 182.9682318, 'series': 0},
 {'x': 1972, 'y': 184.0019506, 'series': 0},
 {'x': 1973, 'y': 180.9007941, 'series': 0},
 {'x': 1974, 'y': 176.7659188, 'series': 0},
 {'x': 1975, 'y': 175.7322, 'series': 0},
 {'x': 1976, 'y': 176.2913, 'series': 0},
 {'x': 1977, 'y': 175.4804, 'series': 0},
 {'x': 1978, 'y': 176.0665, 'series': 0},
 {'x': 1979, 'y': 175.6997, 'series': 0},
 {'x': 1980, 'y': 175.5926, 'series': 0},
 {'x': 1981, 'y': 176.7652, 'series': 0},
 {'x': 1982, 'y': 179.0899, 'series': 0},
 {'x': 1983, 'y': 181.808, 'series': 0},
 {'x': 1984, 'y': 183.2335, 'series': 0},
 {'x': 1985, 'y': 181.0273, 'series': 0},
 {'x': 1986, 'y': 182.8484, 'series': 0},
 {'x': 1987, 'y': 183.8822, 'series': 0},
 {'x': 1988, 'y': 185.0659, 'series': 0},
 {'x': 1989, 'y': 186.475, 'series': 0},
 {'x': 1990, 'y': 187.2312, 'series': 0},
 {'x': 1991, 'y': 185.9155, 'series': 0},
 {'x': 1992, 'y': 185.0351, 'series': 0},
 {'x': 1993, 'y': 184.37, 'series': 0},
 {'x': 1994, 'y': 184.7518, 'series': 0},
 {'x': 1995, 'y': 184.8946, 'series': 0},
 {'x': 1996, 'y': 184.7041, 'series': 0},
 {'x': 1997, 'y': 184.9315, 'series': 0},
 {'x': 1998, 'y': 184.0486, 'series': 0},
 {'x': 1999, 'y': 183.5094, 'series': 0},
 {'x': 2000, 'y': 183.6213, 'series': 0},
 {'x': 2001, 'y': 182.5603, 'series': 0},
 {'x': 2002, 'y': 183.3145, 'series': 0},
 {'x': 2003, 'y': 181.982, 'series': 0},
 {'x': 2004, 'y': 182.2909, 'series': 0},
 {'x': 2005, 'y': 186.1678, 'series': 0},
 {'x': 2006, 'y': 185.6765, 'series': 0},
 {'x': 2007, 'y': 185.7849, 'series': 0},
 {'x': 2008, 'y': 183.7848, 'series': 0},
 {'x': 2009, 'y': 184.5794, 'series': 0},
 {'x': 2010, 'y': 183.2111, 'series': 0},
 {'x': 2011, 'y': 184.0865, 'series': 0},
 {'x': 2012, 'y': 185.2725, 'series': 0},
 {'x': 2013, 'y': 184.0591, 'series': 0},
 {'x': 2014, 'y': 184.1459, 'series': 0},
 {'x': 2015, 'y': 185.2316, 'series': 0},
 {'x': 2016, 'y': 182.1752, 'series': 0},
 {'x': 2017, 'y': 181.9691, 'series': 0},
 {'x': 2018, 'y': 181.7875, 'series': 0},
 {'x': 2019, 'y': 180.6933, 'series': 0},
 {'x': 2020, 'y': 180.6512, 'series': 0}], yAxis: 1},
 {key: 'Alvaredo - Earnings', type: 'scatter', values: [
{'x': 1951, 'y': 208.0, 'series': 1},
 {'x': 1952, 'y': 210.0, 'series': 1},
 {'x': 1953, 'y': 223.0, 'series': 1},
 {'x': 1954, 'y': 218.0, 'series': 1},
 {'x': 1955, 'y': 214.0, 'series': 1},
 {'x': 1956, 'y': 219.0, 'series': 1},
 {'x': 1957, 'y': 222.0, 'series': 1},
 {'x': 1958, 'y': 221.0, 'series': 1},
 {'x': 1959, 'y': 218.0, 'series': 1},
 {'x': 1960, 'y': 218.0, 'series': 1},
 {'x': 1961, 'y': 213.0, 'series': 1},
 {'x': 1962, 'y': 208.0, 'series': 1},
 {'x': 1963, 'y': 203.0, 'series': 1},
 {'x': 1964, 'y': 200.0, 'series': 1},
 {'x': 1965, 'y': 195.0, 'series': 1},
 {'x': 1966, 'y': 193.0, 'series': 1},
 {'x': 1967, 'y': 188.0, 'series': 1},
 {'x': 1968, 'y': 187.0, 'series': 1},
 {'x': 1969, 'y': 184.0, 'series': 1},
 {'x': 1970, 'y': 181.0, 'series': 1},
 {'x': 1971, 'y': 177.0, 'series': 1},
 {'x': 1972, 'y': 178.0, 'series': 1},
 {'x': 1973, 'y': 175.0, 'series': 1},
 {'x': 1974, 'y': 171.0, 'series': 1},
 {'x': 1975, 'y': 170.0, 'series': 1},
 {'x': 1976, 'y': 169.0, 'series': 1},
 {'x': 1977, 'y': 169.0, 'series': 1},
 {'x': 1978, 'y': 168.0, 'series': 1},
 {'x': 1979, 'y': 169.0, 'series': 1},
 {'x': 1980, 'y': 169.0, 'series': 1},
 {'x': 1981, 'y': 170.0, 'series': 1},
 {'x': 1982, 'y': 168.0, 'series': 1},
 {'x': 1983, 'y': 168.0, 'series': 1},
 {'x': 1984, 'y': 170.0, 'series': 1},
 {'x': 1985, 'y': 169.0, 'series': 1},
 {'x': 1986, 'y': 170.0, 'series': 1},
 {'x': 1987, 'y': 171.0, 'series': 1},
 {'x': 1988, 'y': 172.0, 'series': 1},
 {'x': 1989, 'y': 173.0, 'series': 1},
 {'x': 1990, 'y': 174.0, 'series': 1},
 {'x': 1991, 'y': 174.0, 'series': 1},
 {'x': 1992, 'y': 175.0, 'series': 1},
 {'x': 1993, 'y': 174.0, 'series': 1},
 {'x': 1994, 'y': 173.0, 'series': 1},
 {'x': 1995, 'y': 173.0, 'series': 1},
 {'x': 1996, 'y': 171.0, 'series': 1},
 {'x': 1997, 'y': 171.0, 'series': 1},
 {'x': 1998, 'y': 172.0, 'series': 1},
 {'x': 1999, 'y': 173.0, 'series': 1},
 {'x': 2000, 'y': 173.0, 'series': 1},
 {'x': 2001, 'y': 173.0, 'series': 1},
 {'x': 2002, 'y': 173.0, 'series': 1},
 {'x': 2003, 'y': 175.0, 'series': 1},
 {'x': 2004, 'y': 177.0, 'series': 1},
 {'x': 2005, 'y': 177.0, 'series': 1},
 {'x': 2006, 'y': 180.0, 'series': 1},
 {'x': 2007, 'y': 180.0, 'series': 1},
 {'x': 2008, 'y': 181.0, 'series': 1},
 {'x': 2009, 'y': 183.0, 'series': 1},
 {'x': 2010, 'y': 184.0, 'series': 1},
 {'x': 2020, 'y': null, 'series': 1}], yAxis: 1},
 {key: 'OECD - Gross individual earnings', type: 'scatter', values: [
{'x': 1951, 'y': null, 'series': 2},
 {'x': 1975, 'y': 175.7322, 'series': 2},
 {'x': 1976, 'y': 176.2913, 'series': 2},
 {'x': 1977, 'y': 175.4804, 'series': 2},
 {'x': 1978, 'y': 176.0665, 'series': 2},
 {'x': 1979, 'y': 175.6997, 'series': 2},
 {'x': 1980, 'y': 175.5926, 'series': 2},
 {'x': 1981, 'y': 176.7652, 'series': 2},
 {'x': 1982, 'y': 179.0899, 'series': 2},
 {'x': 1983, 'y': 181.808, 'series': 2},
 {'x': 1984, 'y': 183.2335, 'series': 2},
 {'x': 1985, 'y': 181.0273, 'series': 2},
 {'x': 1986, 'y': 182.8484, 'series': 2},
 {'x': 1987, 'y': 183.8822, 'series': 2},
 {'x': 1988, 'y': 185.0659, 'series': 2},
 {'x': 1989, 'y': 186.475, 'series': 2},
 {'x': 1990, 'y': 187.2312, 'series': 2},
 {'x': 1991, 'y': 185.9155, 'series': 2},
 {'x': 1992, 'y': 185.0351, 'series': 2},
 {'x': 1993, 'y': 184.37, 'series': 2},
 {'x': 1994, 'y': 184.7518, 'series': 2},
 {'x': 1995, 'y': 184.8946, 'series': 2},
 {'x': 1996, 'y': 184.7041, 'series': 2},
 {'x': 1997, 'y': 184.9315, 'series': 2},
 {'x': 1998, 'y': 184.0486, 'series': 2},
 {'x': 1999, 'y': 183.5094, 'series': 2},
 {'x': 2000, 'y': 183.6213, 'series': 2},
 {'x': 2001, 'y': 182.5603, 'series': 2},
 {'x': 2002, 'y': 183.3145, 'series': 2},
 {'x': 2003, 'y': 181.982, 'series': 2},
 {'x': 2004, 'y': 182.2909, 'series': 2},
 {'x': 2005, 'y': 186.1678, 'series': 2},
 {'x': 2006, 'y': 185.6765, 'series': 2},
 {'x': 2007, 'y': 185.7849, 'series': 2},
 {'x': 2008, 'y': 183.7848, 'series': 2},
 {'x': 2009, 'y': 184.5794, 'series': 2},
 {'x': 2010, 'y': 183.2111, 'series': 2},
 {'x': 2011, 'y': 184.0865, 'series': 2},
 {'x': 2012, 'y': 185.2725, 'series': 2},
 {'x': 2013, 'y': 184.0591, 'series': 2},
 {'x': 2014, 'y': 184.1459, 'series': 2},
 {'x': 2015, 'y': 185.2316, 'series': 2},
 {'x': 2016, 'y': 182.1752, 'series': 2},
 {'x': 2017, 'y': 181.9691, 'series': 2},
 {'x': 2018, 'y': 181.7875, 'series': 2},
 {'x': 2019, 'y': 180.6933, 'series': 2},
 {'x': 2020, 'y': 180.6512, 'series': 2}], yAxis: 1}]; 
$scope.data6 = [
{key: 'Chartbook series', type: 'line', values: [
{'x': 1983, 'y': 66.8, 'series': 0},
 {'x': 1984, 'y': 66.8, 'series': 0},
 {'x': 1985, 'y': 66.8, 'series': 0},
 {'x': 1986, 'y': 67.2, 'series': 0},
 {'x': 1987, 'y': 70.4, 'series': 0},
 {'x': 1988, 'y': 73.4, 'series': 0},
 {'x': 1989, 'y': 72.6, 'series': 0},
 {'x': 1990, 'y': 72.3, 'series': 0}], yAxis: 1},
 {key: 'Tachibanaki (2005) - Net wealth', type: 'scatter', values: [
{'x': 1983, 'y': 66.8, 'series': 1},
 {'x': 1984, 'y': 66.8, 'series': 1},
 {'x': 1985, 'y': 66.8, 'series': 1},
 {'x': 1986, 'y': 67.2, 'series': 1},
 {'x': 1987, 'y': 70.4, 'series': 1},
 {'x': 1988, 'y': 73.4, 'series': 1},
 {'x': 1989, 'y': 72.6, 'series': 1},
 {'x': 1990, 'y': 72.3, 'series': 1}], yAxis: 1}]; 
$scope.data7 = [
{key: 'Chartbook series', type: 'line', values: [
{'x': 1984, 'y': 10.3, 'series': 0},
 {'x': 1989, 'y': 13.77, 'series': 0},
 {'x': 1994, 'y': 10.11, 'series': 0},
 {'x': 1999, 'y': 9.61, 'series': 0},
 {'x': 2004, 'y': 9.34, 'series': 0},
 {'x': 2009, 'y': 9.5, 'series': 0},
 {'x': 2014, 'y': 10.18, 'series': 0}], yAxis: 1},
 {key: 'Kitao & Yamada (2019) - Net household financial wealth', type: 'scatter', values: [
{'x': 1984, 'y': 10.3, 'series': 1},
 {'x': 1989, 'y': 13.77, 'series': 1},
 {'x': 1994, 'y': 10.11, 'series': 1},
 {'x': 1999, 'y': 9.61, 'series': 1},
 {'x': 2004, 'y': 9.34, 'series': 1},
 {'x': 2009, 'y': 9.5, 'series': 1},
 {'x': 2014, 'y': 10.18, 'series': 1}], yAxis: 1}]
});
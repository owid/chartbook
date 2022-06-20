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
                { 'x': 1950.0, 'y': 35.1, 'series': 0 },
                { 'x': 1952.0, 'y': 35.4, 'series': 0 },
                { 'x': 1954.0, 'y': 35.7, 'series': 0 },
                { 'x': 1956.0, 'y': 35.4, 'series': 0 },
                { 'x': 1958.0, 'y': 37.2, 'series': 0 },
                { 'x': 1960.0, 'y': 38.7, 'series': 0 },
                { 'x': 1962.0, 'y': 40.2, 'series': 0 },
                { 'x': 1964.0, 'y': 39.6, 'series': 0 },
                { 'x': 1966.0, 'y': 39.8, 'series': 0 },
                { 'x': 1968.0, 'y': 39.2, 'series': 0 }], yAxis: 1
        },
        {
            key: 'Abele & Lüthi (1977) - Income (tax units)', type: 'scatter', values: [
                { 'x': 1950.0, 'y': 35.1, 'series': 1 },
                { 'x': 1952.0, 'y': 35.4, 'series': 1 },
                { 'x': 1954.0, 'y': 35.7, 'series': 1 },
                { 'x': 1956.0, 'y': 35.4, 'series': 1 },
                { 'x': 1958.0, 'y': 37.2, 'series': 1 },
                { 'x': 1960.0, 'y': 38.7, 'series': 1 },
                { 'x': 1962.0, 'y': 40.2, 'series': 1 },
                { 'x': 1964.0, 'y': 39.6, 'series': 1 },
                { 'x': 1966.0, 'y': 39.8, 'series': 1 },
                { 'x': 1968.0, 'y': 39.2, 'series': 1 }], yAxis: 1
        }];
    $scope.data1 = [
        {
            key: 'Chartbook series', type: 'line', values: [
                { 'x': 1982.0, 'y': 31.6, 'series': 0 },
                { 'x': 1992.0, 'y': 31.0, 'series': 0 },
                { 'x': 2000.0, 'y': 28.1, 'series': 0 },
                { 'x': 2002.0, 'y': 27.3, 'series': 0 },
                { 'x': 2004.0, 'y': 26.7, 'series': 0 }], yAxis: 1
        },
        {
            key: 'LIS - Equivalised disposable household income', type: 'scatter', values: [
                { 'x': 1982.0, 'y': 31.6, 'series': 1 },
                { 'x': 1992.0, 'y': 31.0, 'series': 1 },
                { 'x': 2000.0, 'y': 28.1, 'series': 1 },
                { 'x': 2002.0, 'y': 27.3, 'series': 1 },
                { 'x': 2004.0, 'y': 26.7, 'series': 1 }], yAxis: 1
        }];
    $scope.data2 = [
        {
            key: 'Chartbook series', type: 'line', values: [
                { 'x': 2006.0, 'y': 30.4, 'series': 0 },
                { 'x': 2007.0, 'y': 31.1, 'series': 0 },
                { 'x': 2008.0, 'y': 30.7, 'series': 0 },
                { 'x': 2009.0, 'y': 29.6, 'series': 0 },
                { 'x': 2010.0, 'y': 29.7, 'series': 0 },
                { 'x': 2011.0, 'y': 28.8, 'series': 0 },
                { 'x': 2012.0, 'y': 28.5, 'series': 0 },
                { 'x': 2013.0, 'y': 29.5, 'series': 0 },
                { 'x': 2014.0, 'y': 29.6, 'series': 0 },
                { 'x': 2015.0, 'y': 29.4, 'series': 0 },
                { 'x': 2016.0, 'y': 30.1, 'series': 0 },
                { 'x': 2017.0, 'y': 29.7, 'series': 0 },
                { 'x': 2018.0, 'y': 30.6, 'series': 0 },
                { 'x': 2019.0, 'y': 31.2, 'series': 0 }], yAxis: 1
        },
        {
            key: 'Eurostat - Equivalised disposable household income', type: 'scatter', values: [
                { 'x': 2006.0, 'y': 30.4, 'series': 1 },
                { 'x': 2007.0, 'y': 31.1, 'series': 1 },
                { 'x': 2008.0, 'y': 30.7, 'series': 1 },
                { 'x': 2009.0, 'y': 29.6, 'series': 1 },
                { 'x': 2010.0, 'y': 29.7, 'series': 1 },
                { 'x': 2011.0, 'y': 28.8, 'series': 1 },
                { 'x': 2012.0, 'y': 28.5, 'series': 1 },
                { 'x': 2013.0, 'y': 29.5, 'series': 1 },
                { 'x': 2014.0, 'y': 29.6, 'series': 1 },
                { 'x': 2015.0, 'y': 29.4, 'series': 1 },
                { 'x': 2016.0, 'y': 30.1, 'series': 1 },
                { 'x': 2017.0, 'y': 29.7, 'series': 1 },
                { 'x': 2018.0, 'y': 30.6, 'series': 1 },
                { 'x': 2019.0, 'y': 31.2, 'series': 1 }], yAxis: 1
        }];
    $scope.data3 = [
        {
            key: 'Chartbook series', type: 'line', values: [
                { 'x': 1933.0, 'y': 12.6, 'series': 0 },
                { 'x': 1934.0, 'y': 12.2, 'series': 0 },
                { 'x': 1936.0, 'y': 12.5, 'series': 0 },
                { 'x': 1939.0, 'y': 14.9, 'series': 0 },
                { 'x': 1941.0, 'y': 13.3, 'series': 0 },
                { 'x': 1943.0, 'y': 13.2, 'series': 0 },
                { 'x': 1945.0, 'y': 12.6, 'series': 0 },
                { 'x': 1947.0, 'y': 12.6, 'series': 0 },
                { 'x': 1949.0, 'y': 12.6, 'series': 0 },
                { 'x': 1951.0, 'y': 12.4, 'series': 0 },
                { 'x': 1953.0, 'y': 12.4, 'series': 0 },
                { 'x': 1955.0, 'y': 12.8, 'series': 0 },
                { 'x': 1957.0, 'y': 13.3, 'series': 0 },
                { 'x': 1959.0, 'y': 13.7, 'series': 0 },
                { 'x': 1961.0, 'y': 13.8, 'series': 0 },
                { 'x': 1963.0, 'y': 13.5, 'series': 0 },
                { 'x': 1965.0, 'y': 13.7, 'series': 0 },
                { 'x': 1967.0, 'y': 13.9, 'series': 0 },
                { 'x': 1969.0, 'y': 13.6, 'series': 0 },
                { 'x': 1971.0, 'y': 12.3, 'series': 0 },
                { 'x': 1973.0, 'y': 11.1, 'series': 0 },
                { 'x': 1975.0, 'y': 10.7, 'series': 0 },
                { 'x': 1977.0, 'y': 10.6, 'series': 0 },
                { 'x': 1979.0, 'y': 10.6, 'series': 0 },
                { 'x': 1980.0, 'y': 10.7, 'series': 0 },
                { 'x': 1981.0, 'y': 10.7, 'series': 0 },
                { 'x': 1982.0, 'y': 11.0, 'series': 0 },
                { 'x': 1983.0, 'y': 11.3, 'series': 0 },
                { 'x': 1984.0, 'y': 11.3, 'series': 0 },
                { 'x': 1985.0, 'y': 11.3, 'series': 0 },
                { 'x': 1986.0, 'y': 11.4, 'series': 0 },
                { 'x': 1987.0, 'y': 11.4, 'series': 0 },
                { 'x': 1988.0, 'y': 11.2, 'series': 0 },
                { 'x': 1989.0, 'y': 10.9, 'series': 0 },
                { 'x': 1990.0, 'y': 10.9, 'series': 0 },
                { 'x': 1991.0, 'y': 10.3, 'series': 0 },
                { 'x': 1992.0, 'y': 9.6, 'series': 0 },
                { 'x': 1993.0, 'y': 9.7, 'series': 0 },
                { 'x': 1994.0, 'y': 9.9, 'series': 0 },
                { 'x': 1995.0, 'y': 9.8, 'series': 0 },
                { 'x': 1996.0, 'y': 10.9, 'series': 0 },
                { 'x': 1997.0, 'y': 11.4, 'series': 0 },
                { 'x': 1998.0, 'y': 11.5, 'series': 0 },
                { 'x': 1999.0, 'y': 11.0, 'series': 0 },
                { 'x': 2000.0, 'y': 11.3, 'series': 0 },
                { 'x': 2001.0, 'y': 10.5, 'series': 0 },
                { 'x': 2002.0, 'y': 9.5, 'series': 0 },
                { 'x': 2003.0, 'y': 11.3, 'series': 0 },
                { 'x': 2004.0, 'y': 11.8, 'series': 0 },
                { 'x': 2005.0, 'y': 12.8, 'series': 0 },
                { 'x': 2006.0, 'y': 13.3, 'series': 0 },
                { 'x': 2007.0, 'y': 11.8, 'series': 0 },
                { 'x': 2008.0, 'y': 10.1, 'series': 0 },
                { 'x': 2009.0, 'y': 10.5, 'series': 0 },
                { 'x': 2010.0, 'y': 12.1, 'series': 0 },
                { 'x': 2011.0, 'y': 12.4, 'series': 0 },
                { 'x': 2012.0, 'y': 11.3, 'series': 0 },
                { 'x': 2013.0, 'y': 11.2, 'series': 0 },
                { 'x': 2014.0, 'y': 11.3, 'series': 0 },
                { 'x': 2015.0, 'y': 11.7, 'series': 0 },
                { 'x': 2016.0, 'y': 11.6, 'series': 0 },
                { 'x': 2017.0, 'y': 10.8, 'series': 0 },
                { 'x': 2018.0, 'y': 11.0, 'series': 0 },
                { 'x': 2019.0, 'y': 11.5, 'series': 0 },
                { 'x': 2020.0, 'y': 11.5, 'series': 0 },
                { 'x': 2021.0, 'y': 11.5, 'series': 0 }], yAxis: 1
        },
        {
            key: 'WID - Pre-tax national income (equal-split adults)', type: 'scatter', values: [
                { 'x': 1933.0, 'y': 12.6, 'series': 1 },
                { 'x': 1934.0, 'y': 12.2, 'series': 1 },
                { 'x': 1936.0, 'y': 12.5, 'series': 1 },
                { 'x': 1939.0, 'y': 14.9, 'series': 1 },
                { 'x': 1941.0, 'y': 13.3, 'series': 1 },
                { 'x': 1943.0, 'y': 13.2, 'series': 1 },
                { 'x': 1945.0, 'y': 12.6, 'series': 1 },
                { 'x': 1947.0, 'y': 12.6, 'series': 1 },
                { 'x': 1949.0, 'y': 12.6, 'series': 1 },
                { 'x': 1951.0, 'y': 12.4, 'series': 1 },
                { 'x': 1953.0, 'y': 12.4, 'series': 1 },
                { 'x': 1955.0, 'y': 12.8, 'series': 1 },
                { 'x': 1957.0, 'y': 13.3, 'series': 1 },
                { 'x': 1959.0, 'y': 13.7, 'series': 1 },
                { 'x': 1961.0, 'y': 13.8, 'series': 1 },
                { 'x': 1963.0, 'y': 13.5, 'series': 1 },
                { 'x': 1965.0, 'y': 13.7, 'series': 1 },
                { 'x': 1967.0, 'y': 13.9, 'series': 1 },
                { 'x': 1969.0, 'y': 13.6, 'series': 1 },
                { 'x': 1971.0, 'y': 12.3, 'series': 1 },
                { 'x': 1973.0, 'y': 11.1, 'series': 1 },
                { 'x': 1975.0, 'y': 10.7, 'series': 1 },
                { 'x': 1977.0, 'y': 10.6, 'series': 1 },
                { 'x': 1979.0, 'y': 10.6, 'series': 1 },
                { 'x': 1980.0, 'y': 10.7, 'series': 1 },
                { 'x': 1981.0, 'y': 10.7, 'series': 1 },
                { 'x': 1982.0, 'y': 11.0, 'series': 1 },
                { 'x': 1983.0, 'y': 11.3, 'series': 1 },
                { 'x': 1984.0, 'y': 11.3, 'series': 1 },
                { 'x': 1985.0, 'y': 11.3, 'series': 1 },
                { 'x': 1986.0, 'y': 11.4, 'series': 1 },
                { 'x': 1987.0, 'y': 11.4, 'series': 1 },
                { 'x': 1988.0, 'y': 11.2, 'series': 1 },
                { 'x': 1989.0, 'y': 10.9, 'series': 1 },
                { 'x': 1990.0, 'y': 10.9, 'series': 1 },
                { 'x': 1991.0, 'y': 10.3, 'series': 1 },
                { 'x': 1992.0, 'y': 9.6, 'series': 1 },
                { 'x': 1993.0, 'y': 9.7, 'series': 1 },
                { 'x': 1994.0, 'y': 9.9, 'series': 1 },
                { 'x': 1995.0, 'y': 9.8, 'series': 1 },
                { 'x': 1996.0, 'y': 10.9, 'series': 1 },
                { 'x': 1997.0, 'y': 11.4, 'series': 1 },
                { 'x': 1998.0, 'y': 11.5, 'series': 1 },
                { 'x': 1999.0, 'y': 11.0, 'series': 1 },
                { 'x': 2000.0, 'y': 11.3, 'series': 1 },
                { 'x': 2001.0, 'y': 10.5, 'series': 1 },
                { 'x': 2002.0, 'y': 9.5, 'series': 1 },
                { 'x': 2003.0, 'y': 11.3, 'series': 1 },
                { 'x': 2004.0, 'y': 11.8, 'series': 1 },
                { 'x': 2005.0, 'y': 12.8, 'series': 1 },
                { 'x': 2006.0, 'y': 13.3, 'series': 1 },
                { 'x': 2007.0, 'y': 11.8, 'series': 1 },
                { 'x': 2008.0, 'y': 10.1, 'series': 1 },
                { 'x': 2009.0, 'y': 10.5, 'series': 1 },
                { 'x': 2010.0, 'y': 12.1, 'series': 1 },
                { 'x': 2011.0, 'y': 12.4, 'series': 1 },
                { 'x': 2012.0, 'y': 11.3, 'series': 1 },
                { 'x': 2013.0, 'y': 11.2, 'series': 1 },
                { 'x': 2014.0, 'y': 11.3, 'series': 1 },
                { 'x': 2015.0, 'y': 11.7, 'series': 1 },
                { 'x': 2016.0, 'y': 11.6, 'series': 1 },
                { 'x': 2017.0, 'y': 10.8, 'series': 1 },
                { 'x': 2018.0, 'y': 11.0, 'series': 1 },
                { 'x': 2019.0, 'y': 11.5, 'series': 1 },
                { 'x': 2020.0, 'y': 11.5, 'series': 1 },
                { 'x': 2021.0, 'y': 11.5, 'series': 1 }], yAxis: 1
        }];
    $scope.data4 = [
        {
            key: 'Chartbook series', type: 'line', values: [
                { 'x': 1980.0, 'y': 9.8, 'series': 0 },
                { 'x': 1981.0, 'y': 9.8, 'series': 0 },
                { 'x': 1982.0, 'y': 10.1, 'series': 0 },
                { 'x': 1983.0, 'y': 10.0, 'series': 0 },
                { 'x': 1984.0, 'y': 10.1, 'series': 0 },
                { 'x': 1985.0, 'y': 10.4, 'series': 0 },
                { 'x': 1986.0, 'y': 9.6, 'series': 0 },
                { 'x': 1987.0, 'y': 10.1, 'series': 0 },
                { 'x': 1988.0, 'y': 10.0, 'series': 0 },
                { 'x': 1989.0, 'y': 9.8, 'series': 0 },
                { 'x': 1990.0, 'y': 10.0, 'series': 0 },
                { 'x': 1991.0, 'y': 8.9, 'series': 0 },
                { 'x': 1992.0, 'y': 7.7, 'series': 0 },
                { 'x': 1993.0, 'y': 8.4, 'series': 0 },
                { 'x': 1994.0, 'y': 8.4, 'series': 0 },
                { 'x': 1995.0, 'y': 8.4, 'series': 0 },
                { 'x': 1996.0, 'y': 9.3, 'series': 0 },
                { 'x': 1997.0, 'y': 9.3, 'series': 0 },
                { 'x': 1998.0, 'y': 10.9, 'series': 0 },
                { 'x': 1999.0, 'y': 8.8, 'series': 0 },
                { 'x': 2000.0, 'y': 8.6, 'series': 0 },
                { 'x': 2001.0, 'y': 8.2, 'series': 0 },
                { 'x': 2002.0, 'y': 7.2, 'series': 0 },
                { 'x': 2003.0, 'y': 8.7, 'series': 0 },
                { 'x': 2004.0, 'y': 9.2, 'series': 0 },
                { 'x': 2005.0, 'y': 11.1, 'series': 0 },
                { 'x': 2006.0, 'y': 11.5, 'series': 0 },
                { 'x': 2007.0, 'y': 10.3, 'series': 0 },
                { 'x': 2008.0, 'y': 9.0, 'series': 0 },
                { 'x': 2009.0, 'y': 9.0, 'series': 0 },
                { 'x': 2010.0, 'y': 10.0, 'series': 0 },
                { 'x': 2011.0, 'y': 8.8, 'series': 0 },
                { 'x': 2012.0, 'y': 9.3, 'series': 0 },
                { 'x': 2013.0, 'y': 8.7, 'series': 0 },
                { 'x': 2014.0, 'y': 9.2, 'series': 0 },
                { 'x': 2015.0, 'y': 9.6, 'series': 0 },
                { 'x': 2016.0, 'y': 9.4, 'series': 0 },
                { 'x': 2017.0, 'y': 9.0, 'series': 0 },
                { 'x': 2018.0, 'y': 9.0, 'series': 0 },
                { 'x': 2019.0, 'y': 9.5, 'series': 0 },
                { 'x': 2020.0, 'y': 9.4, 'series': 0 }], yAxis: 1
        },
        {
            key: 'WID - Post-tax national income (equal-split adults)', type: 'scatter', values: [
                { 'x': 1980.0, 'y': 9.8, 'series': 1 },
                { 'x': 1981.0, 'y': 9.8, 'series': 1 },
                { 'x': 1982.0, 'y': 10.1, 'series': 1 },
                { 'x': 1983.0, 'y': 10.0, 'series': 1 },
                { 'x': 1984.0, 'y': 10.1, 'series': 1 },
                { 'x': 1985.0, 'y': 10.4, 'series': 1 },
                { 'x': 1986.0, 'y': 9.6, 'series': 1 },
                { 'x': 1987.0, 'y': 10.1, 'series': 1 },
                { 'x': 1988.0, 'y': 10.0, 'series': 1 },
                { 'x': 1989.0, 'y': 9.8, 'series': 1 },
                { 'x': 1990.0, 'y': 10.0, 'series': 1 },
                { 'x': 1991.0, 'y': 8.9, 'series': 1 },
                { 'x': 1992.0, 'y': 7.7, 'series': 1 },
                { 'x': 1993.0, 'y': 8.4, 'series': 1 },
                { 'x': 1994.0, 'y': 8.4, 'series': 1 },
                { 'x': 1995.0, 'y': 8.4, 'series': 1 },
                { 'x': 1996.0, 'y': 9.3, 'series': 1 },
                { 'x': 1997.0, 'y': 9.3, 'series': 1 },
                { 'x': 1998.0, 'y': 10.9, 'series': 1 },
                { 'x': 1999.0, 'y': 8.8, 'series': 1 },
                { 'x': 2000.0, 'y': 8.6, 'series': 1 },
                { 'x': 2001.0, 'y': 8.2, 'series': 1 },
                { 'x': 2002.0, 'y': 7.2, 'series': 1 },
                { 'x': 2003.0, 'y': 8.7, 'series': 1 },
                { 'x': 2004.0, 'y': 9.2, 'series': 1 },
                { 'x': 2005.0, 'y': 11.1, 'series': 1 },
                { 'x': 2006.0, 'y': 11.5, 'series': 1 },
                { 'x': 2007.0, 'y': 10.3, 'series': 1 },
                { 'x': 2008.0, 'y': 9.0, 'series': 1 },
                { 'x': 2009.0, 'y': 9.0, 'series': 1 },
                { 'x': 2010.0, 'y': 10.0, 'series': 1 },
                { 'x': 2011.0, 'y': 8.8, 'series': 1 },
                { 'x': 2012.0, 'y': 9.3, 'series': 1 },
                { 'x': 2013.0, 'y': 8.7, 'series': 1 },
                { 'x': 2014.0, 'y': 9.2, 'series': 1 },
                { 'x': 2015.0, 'y': 9.6, 'series': 1 },
                { 'x': 2016.0, 'y': 9.4, 'series': 1 },
                { 'x': 2017.0, 'y': 9.0, 'series': 1 },
                { 'x': 2018.0, 'y': 9.0, 'series': 1 },
                { 'x': 2019.0, 'y': 9.5, 'series': 1 },
                { 'x': 2020.0, 'y': 9.4, 'series': 1 }], yAxis: 1
        }];
    $scope.data5 = [
        {
            key: 'Chartbook series', type: 'line', values: [
                { 'x': 1933.0, 'y': 10.0, 'series': 0 },
                { 'x': 1934.0, 'y': 9.7, 'series': 0 },
                { 'x': 1936.0, 'y': 9.9, 'series': 0 },
                { 'x': 1939.0, 'y': 11.8, 'series': 0 },
                { 'x': 1941.0, 'y': 10.5, 'series': 0 },
                { 'x': 1943.0, 'y': 10.5, 'series': 0 },
                { 'x': 1945.0, 'y': 10.0, 'series': 0 },
                { 'x': 1947.0, 'y': 10.0, 'series': 0 },
                { 'x': 1949.0, 'y': 9.9, 'series': 0 },
                { 'x': 1951.0, 'y': 9.8, 'series': 0 },
                { 'x': 1953.0, 'y': 9.8, 'series': 0 },
                { 'x': 1955.0, 'y': 10.1, 'series': 0 },
                { 'x': 1957.0, 'y': 10.5, 'series': 0 },
                { 'x': 1959.0, 'y': 10.9, 'series': 0 },
                { 'x': 1961.0, 'y': 10.9, 'series': 0 },
                { 'x': 1963.0, 'y': 10.7, 'series': 0 },
                { 'x': 1965.0, 'y': 10.9, 'series': 0 },
                { 'x': 1967.0, 'y': 11.0, 'series': 0 },
                { 'x': 1969.0, 'y': 10.8, 'series': 0 },
                { 'x': 1971.0, 'y': 9.8, 'series': 0 },
                { 'x': 1973.0, 'y': 8.8, 'series': 0 },
                { 'x': 1975.0, 'y': 8.5, 'series': 0 },
                { 'x': 1977.0, 'y': 8.4, 'series': 0 },
                { 'x': 1979.0, 'y': 8.4, 'series': 0 },
                { 'x': 1981.0, 'y': 8.4, 'series': 0 },
                { 'x': 1983.0, 'y': 9.1, 'series': 0 },
                { 'x': 1985.0, 'y': 9.1, 'series': 0 },
                { 'x': 1987.0, 'y': 9.2, 'series': 0 },
                { 'x': 1989.0, 'y': 8.6, 'series': 0 },
                { 'x': 1991.0, 'y': 8.5, 'series': 0 },
                { 'x': 1993.0, 'y': 8.0, 'series': 0 },
                { 'x': 1995.0, 'y': 8.3, 'series': 0 },
                { 'x': 1996.0, 'y': 9.1, 'series': 0 },
                { 'x': 1997.0, 'y': 9.5, 'series': 0 },
                { 'x': 1998.0, 'y': 9.6, 'series': 0 },
                { 'x': 1999.0, 'y': 9.8, 'series': 0 },
                { 'x': 2000.0, 'y': 9.9, 'series': 0 },
                { 'x': 2001.0, 'y': 9.9, 'series': 0 },
                { 'x': 2002.0, 'y': 9.3, 'series': 0 },
                { 'x': 2003.0, 'y': 9.5, 'series': 0 },
                { 'x': 2004.0, 'y': 9.7, 'series': 0 },
                { 'x': 2005.0, 'y': 10.0, 'series': 0 },
                { 'x': 2006.0, 'y': 10.4, 'series': 0 },
                { 'x': 2007.0, 'y': 11.1, 'series': 0 },
                { 'x': 2008.0, 'y': 11.0, 'series': 0 },
                { 'x': 2009.0, 'y': 10.7, 'series': 0 },
                { 'x': 2010.0, 'y': 10.8, 'series': 0 },
                { 'x': 2011.0, 'y': 11.9, 'series': 0 },
                { 'x': 2012.0, 'y': 10.4, 'series': 0 },
                { 'x': 2013.0, 'y': 10.7, 'series': 0 },
                { 'x': 2014.0, 'y': 11.3, 'series': 0 }], yAxis: 1
        },
        {
            key: 'WID - Pre-tax fiscal income (tax units, excluding capital gains)', type: 'scatter', values: [
                { 'x': 1933.0, 'y': 10.0, 'series': 1 },
                { 'x': 1934.0, 'y': 9.7, 'series': 1 },
                { 'x': 1936.0, 'y': 9.9, 'series': 1 },
                { 'x': 1939.0, 'y': 11.8, 'series': 1 },
                { 'x': 1941.0, 'y': 10.5, 'series': 1 },
                { 'x': 1943.0, 'y': 10.5, 'series': 1 },
                { 'x': 1945.0, 'y': 10.0, 'series': 1 },
                { 'x': 1947.0, 'y': 10.0, 'series': 1 },
                { 'x': 1949.0, 'y': 9.9, 'series': 1 },
                { 'x': 1951.0, 'y': 9.8, 'series': 1 },
                { 'x': 1953.0, 'y': 9.8, 'series': 1 },
                { 'x': 1955.0, 'y': 10.1, 'series': 1 },
                { 'x': 1957.0, 'y': 10.5, 'series': 1 },
                { 'x': 1959.0, 'y': 10.9, 'series': 1 },
                { 'x': 1961.0, 'y': 10.9, 'series': 1 },
                { 'x': 1963.0, 'y': 10.7, 'series': 1 },
                { 'x': 1965.0, 'y': 10.9, 'series': 1 },
                { 'x': 1967.0, 'y': 11.0, 'series': 1 },
                { 'x': 1969.0, 'y': 10.8, 'series': 1 },
                { 'x': 1971.0, 'y': 9.8, 'series': 1 },
                { 'x': 1973.0, 'y': 8.8, 'series': 1 },
                { 'x': 1975.0, 'y': 8.5, 'series': 1 },
                { 'x': 1977.0, 'y': 8.4, 'series': 1 },
                { 'x': 1979.0, 'y': 8.4, 'series': 1 },
                { 'x': 1981.0, 'y': 8.4, 'series': 1 },
                { 'x': 1983.0, 'y': 9.1, 'series': 1 },
                { 'x': 1985.0, 'y': 9.1, 'series': 1 },
                { 'x': 1987.0, 'y': 9.2, 'series': 1 },
                { 'x': 1989.0, 'y': 8.6, 'series': 1 },
                { 'x': 1991.0, 'y': 8.5, 'series': 1 },
                { 'x': 1993.0, 'y': 8.0, 'series': 1 },
                { 'x': 1995.0, 'y': 8.3, 'series': 1 },
                { 'x': 1996.0, 'y': 9.1, 'series': 1 },
                { 'x': 1997.0, 'y': 9.5, 'series': 1 },
                { 'x': 1998.0, 'y': 9.6, 'series': 1 },
                { 'x': 1999.0, 'y': 9.8, 'series': 1 },
                { 'x': 2000.0, 'y': 9.9, 'series': 1 },
                { 'x': 2001.0, 'y': 9.9, 'series': 1 },
                { 'x': 2002.0, 'y': 9.3, 'series': 1 },
                { 'x': 2003.0, 'y': 9.5, 'series': 1 },
                { 'x': 2004.0, 'y': 9.7, 'series': 1 },
                { 'x': 2005.0, 'y': 10.0, 'series': 1 },
                { 'x': 2006.0, 'y': 10.4, 'series': 1 },
                { 'x': 2007.0, 'y': 11.1, 'series': 1 },
                { 'x': 2008.0, 'y': 11.0, 'series': 1 },
                { 'x': 2009.0, 'y': 10.7, 'series': 1 },
                { 'x': 2010.0, 'y': 10.8, 'series': 1 },
                { 'x': 2011.0, 'y': 11.9, 'series': 1 },
                { 'x': 2012.0, 'y': 10.4, 'series': 1 },
                { 'x': 2013.0, 'y': 10.7, 'series': 1 },
                { 'x': 2014.0, 'y': 11.3, 'series': 1 }], yAxis: 1
        }];
    $scope.data6 = [
        {
            key: 'Chartbook series', type: 'line', values: [
                { 'x': 2006.0, 'y': 15.2, 'series': 0 },
                { 'x': 2007.0, 'y': 15.9, 'series': 0 },
                { 'x': 2008.0, 'y': 15.7, 'series': 0 },
                { 'x': 2009.0, 'y': 15.0, 'series': 0 },
                { 'x': 2010.0, 'y': 15.1, 'series': 0 },
                { 'x': 2011.0, 'y': 16.0, 'series': 0 },
                { 'x': 2012.0, 'y': 14.6, 'series': 0 },
                { 'x': 2013.0, 'y': 13.9, 'series': 0 },
                { 'x': 2014.0, 'y': 15.8, 'series': 0 },
                { 'x': 2015.0, 'y': 14.9, 'series': 0 },
                { 'x': 2016.0, 'y': 15.7, 'series': 0 },
                { 'x': 2017.0, 'y': 15.0, 'series': 0 },
                { 'x': 2018.0, 'y': 16.2, 'series': 0 },
                { 'x': 2019.0, 'y': 15.6, 'series': 0 }], yAxis: 1
        },
        {
            key: 'Eurostat - Equivalised disposable household income', type: 'scatter', values: [
                { 'x': 2006.0, 'y': 15.2, 'series': 1 },
                { 'x': 2007.0, 'y': 15.9, 'series': 1 },
                { 'x': 2008.0, 'y': 15.7, 'series': 1 },
                { 'x': 2009.0, 'y': 15.0, 'series': 1 },
                { 'x': 2010.0, 'y': 15.1, 'series': 1 },
                { 'x': 2011.0, 'y': 16.0, 'series': 1 },
                { 'x': 2012.0, 'y': 14.6, 'series': 1 },
                { 'x': 2013.0, 'y': 13.9, 'series': 1 },
                { 'x': 2014.0, 'y': 15.8, 'series': 1 },
                { 'x': 2015.0, 'y': 14.9, 'series': 1 },
                { 'x': 2016.0, 'y': 15.7, 'series': 1 },
                { 'x': 2017.0, 'y': 15.0, 'series': 1 },
                { 'x': 2018.0, 'y': 16.2, 'series': 1 },
                { 'x': 2019.0, 'y': 15.6, 'series': 1 }], yAxis: 1
        }];
    $scope.data7 = [
        {
            key: 'Chartbook series', type: 'line', values: [
                { 'x': 1991.0, 'y': 160.9, 'series': 0 },
                { 'x': 1992.0, 'y': 158.9, 'series': 0 },
                { 'x': 1993.0, 'y': 159.0, 'series': 0 },
                { 'x': 1994.0, 'y': 159.5, 'series': 0 },
                { 'x': 1995.0, 'y': 164.9, 'series': 0 },
                { 'x': 1996.0, 'y': 164.4, 'series': 0 },
                { 'x': 1998.0, 'y': 169.6, 'series': 0 },
                { 'x': 2000.0, 'y': 172.5, 'series': 0 },
                { 'x': 2002.0, 'y': 173.3, 'series': 0 },
                { 'x': 2004.0, 'y': 176.3, 'series': 0 },
                { 'x': 2006.0, 'y': 179.5, 'series': 0 },
                { 'x': 2008.0, 'y': 182.3, 'series': 0 },
                { 'x': 2010.0, 'y': 183.5, 'series': 0 },
                { 'x': 2012.0, 'y': 184.5, 'series': 0 },
                { 'x': 2014.0, 'y': 178.2, 'series': 0 },
                { 'x': 2016.0, 'y': 178.4, 'series': 0 },
                { 'x': 2018.0, 'y': 182.5, 'series': 0 },
                { 'x': 2020.0, 'y': 184.8, 'series': 0 }], yAxis: 1
        },
        {
            key: "Atkinson (2008) 'OECD LMS' - Gross individual earnings", type: 'scatter', values: [
                { 'x': 1991.0, 'y': 169.2, 'series': 1 },
                { 'x': 1992.0, 'y': 167.0, 'series': 1 },
                { 'x': 1993.0, 'y': 167.1, 'series': 1 },
                { 'x': 1994.0, 'y': 167.7, 'series': 1 },
                { 'x': 1995.0, 'y': 173.3, 'series': 1 },
                { 'x': 1996.0, 'y': 172.8, 'series': 1 },
                { 'x': 1997.0, 'y': 168.6, 'series': 1 },
                { 'x': 1998.0, 'y': 166.7, 'series': 1 },
                { 'x': 2020.0, 'y': null, 'series': 1 }], yAxis: 1
        },
        {
            key: 'OECD - Gross individual earnings', type: 'scatter', values: [
                { 'x': 1991.0, 'y': null, 'series': 2 },
                { 'x': 1996.0, 'y': 164.4, 'series': 2 },
                { 'x': 1998.0, 'y': 169.6, 'series': 2 },
                { 'x': 2000.0, 'y': 172.5, 'series': 2 },
                { 'x': 2002.0, 'y': 173.3, 'series': 2 },
                { 'x': 2004.0, 'y': 176.3, 'series': 2 },
                { 'x': 2006.0, 'y': 179.5, 'series': 2 },
                { 'x': 2008.0, 'y': 182.3, 'series': 2 },
                { 'x': 2010.0, 'y': 183.5, 'series': 2 },
                { 'x': 2012.0, 'y': 184.5, 'series': 2 },
                { 'x': 2014.0, 'y': 178.2, 'series': 2 },
                { 'x': 2016.0, 'y': 178.4, 'series': 2 },
                { 'x': 2018.0, 'y': 182.5, 'series': 2 },
                { 'x': 2020.0, 'y': 184.8, 'series': 2 }], yAxis: 1
        }];
    $scope.data8 = [
        {
            key: 'Chartbook series', type: 'line', values: [
                { 'x': 1913.0, 'y': 46.7, 'series': 0 },
                { 'x': 1915.0, 'y': 42.3, 'series': 0 },
                { 'x': 1919.0, 'y': 36.4, 'series': 0 },
                { 'x': 1921.0, 'y': 38.1, 'series': 0 },
                { 'x': 1925.0, 'y': 40.7, 'series': 0 },
                { 'x': 1929.0, 'y': 42.0, 'series': 0 },
                { 'x': 1934.0, 'y': 40.4, 'series': 0 },
                { 'x': 1936.0, 'y': 40.1, 'series': 0 },
                { 'x': 1938.0, 'y': 44.4, 'series': 0 },
                { 'x': 1940.0, 'y': 40.4, 'series': 0 },
                { 'x': 1941.0, 'y': 41.5, 'series': 0 },
                { 'x': 1945.0, 'y': 37.1, 'series': 0 },
                { 'x': 1947.0, 'y': 38.3, 'series': 0 },
                { 'x': 1949.0, 'y': 37.8, 'series': 0 },
                { 'x': 1951.0, 'y': 39.0, 'series': 0 },
                { 'x': 1953.0, 'y': 40.0, 'series': 0 },
                { 'x': 1955.0, 'y': 41.5, 'series': 0 },
                { 'x': 1957.0, 'y': 41.9, 'series': 0 },
                { 'x': 1969.0, 'y': 41.6, 'series': 0 },
                { 'x': 1981.0, 'y': 33.0, 'series': 0 },
                { 'x': 1991.0, 'y': 33.6, 'series': 0 },
                { 'x': 1997.0, 'y': 34.8, 'series': 0 },
                { 'x': 2006.0, 'y': 37.9, 'series': 0 },
                { 'x': 2007.0, 'y': 40.2, 'series': 0 },
                { 'x': 2008.0, 'y': 38.4, 'series': 0 }], yAxis: 1
        },
        {
            key: 'Roine & Waldenström (2015) - Individual net wealth', type: 'scatter', values: [
                { 'x': 1913.0, 'y': 46.7, 'series': 1 },
                { 'x': 1915.0, 'y': 42.3, 'series': 1 },
                { 'x': 1919.0, 'y': 36.4, 'series': 1 },
                { 'x': 1921.0, 'y': 38.1, 'series': 1 },
                { 'x': 1925.0, 'y': 40.7, 'series': 1 },
                { 'x': 1929.0, 'y': 42.0, 'series': 1 },
                { 'x': 1934.0, 'y': 40.4, 'series': 1 },
                { 'x': 1936.0, 'y': 40.1, 'series': 1 },
                { 'x': 1938.0, 'y': 44.4, 'series': 1 },
                { 'x': 1940.0, 'y': 40.4, 'series': 1 },
                { 'x': 1941.0, 'y': 41.5, 'series': 1 },
                { 'x': 1945.0, 'y': 37.1, 'series': 1 },
                { 'x': 1947.0, 'y': 38.3, 'series': 1 },
                { 'x': 1949.0, 'y': 37.8, 'series': 1 },
                { 'x': 1951.0, 'y': 39.0, 'series': 1 },
                { 'x': 1953.0, 'y': 40.0, 'series': 1 },
                { 'x': 1955.0, 'y': 41.5, 'series': 1 },
                { 'x': 1957.0, 'y': 41.9, 'series': 1 },
                { 'x': 1969.0, 'y': 41.6, 'series': 1 },
                { 'x': 1981.0, 'y': 33.0, 'series': 1 },
                { 'x': 1991.0, 'y': 33.6, 'series': 1 },
                { 'x': 1997.0, 'y': 34.8, 'series': 1 },
                { 'x': 2006.0, 'y': 37.9, 'series': 1 },
                { 'x': 2007.0, 'y': 40.2, 'series': 1 },
                { 'x': 2008.0, 'y': 38.4, 'series': 1 }], yAxis: 1
        }]
});
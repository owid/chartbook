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
            //useInteractiveGuideline: true,
            duration: 500,
            // xAxis: {
            //     tickFormat: function (d) {
            //         return d3.format(',f')(d);
            //     }
            // },
            yAxis1: {
                tickFormat: function (d) {
                    return d3.format(',.1f')(d);
                }
            },
            interpolate: false,
            //useInteractiveGuideline: true,
        }
    };

    $scope.data = [{ key: "Gini coefficient - Equivalised disposable household income", type: "line", values: [{ 'x': '1959', 'y': '32.59968039', 'series': '0' }, { 'x': '1970', 'y': '28.68771874', 'series': '0' }, { 'x': '1977', 'y': '25.73201439', 'series': '0' }, { 'x': '1981', 'y': '25.93705036', 'series': '0' }, { 'x': '1985', 'y': '25.83453237', 'series': '0' }, { 'x': '1989', 'y': '26.85971223', 'series': '0' }, { 'x': '1990', 'y': '28.39748201', 'series': '0' }, { 'x': '1991', 'y': '28.39748201', 'series': '0' }, { 'x': '1992', 'y': '28.19244604', 'series': '0' }, { 'x': '1993', 'y': '28.29496403', 'series': '0' }, { 'x': '1994', 'y': '28.08992806', 'series': '0' }, { 'x': '1995', 'y': '27.88489209', 'series': '0' }, { 'x': '1996', 'y': '28.29496403', 'series': '0' }, { 'x': '1997', 'y': '27.98741007', 'series': '0' }, { 'x': '1998', 'y': '28.19244604', 'series': '0' }, { 'x': '1999', 'y': '28.39748201', 'series': '0' }, { 'x': '2000', 'y': '28.5', 'series': '0' }, { 'x': '2001', 'y': '27.8', 'series': '0' }, { 'x': '2002', 'y': '27.9', 'series': '0' }, { 'x': '2003', 'y': '27.8', 'series': '0' }, { 'x': '2004', 'y': '28.1', 'series': '0' }, { 'x': '2005', 'y': '28.1', 'series': '0' }, { 'x': '2006', 'y': '27.6', 'series': '0' }, { 'x': '2007', 'y': '29', 'series': '0' }, { 'x': '2008', 'y': '28.2', 'series': '0' }, { 'x': '2009', 'y': '28.1', 'series': '0' }, { 'x': '2010', 'y': '27.9', 'series': '0' }, { 'x': '2011', 'y': '27.8', 'series': '0' }, { 'x': '2012', 'y': '28', 'series': '0' }, { 'x': '2013', 'y': '28.2', 'series': '0' }, { 'x': '2014', 'y': '29.2', 'series': '0' }, { 'x': '2015', 'y': '27.84635762', 'series': '0' }, { 'x': '2016', 'y': '27.94304636', 'series': '0' }, { 'x': '2017', 'y': '28.61986755', 'series': '0' }, { 'x': '2018', 'y': '28.0397351', 'series': '0' }, { 'x': '2019', 'y': '28.23311258', 'series': '0' }], yAxis: 1 }
        , {
        key: "Gini coefficient - Unequivalised disposable income (tax units)", type: "scatter", values: [{ 'x': '1959', 'y': '37.5', 'series': '1' }, { 'x': '1970', 'y': '33', 'series': '1' }, { 'x': '1977', 'y': '29.6', 'series': '1' }, { 'x': '1985', 'y': '29', 'series': '1' }, { 'x': '1990', 'y': '31.2', 'series': '1' }, { 'x': '2016', 'y': '37.5', 'series': '1' }], yAxis: 1
    }
        , {
        key: "Gini coefficient - Equivalised disposable household income 2", type: "scatter", values: [{ 'x': '1977', 'y': '25.1', 'series': '2' }, { 'x': '1981', 'y': '25.3', 'series': '2' }, { 'x': '1985', 'y': '25.2', 'series': '2' }, { 'x': '1989', 'y': '26.2', 'series': '2' }, { 'x': '1990', 'y': '27.7', 'series': '2' }, { 'x': '1991', 'y': '27.7', 'series': '2' }, { 'x': '1992', 'y': '27.5', 'series': '2' }, { 'x': '1993', 'y': '27.6', 'series': '2' }, { 'x': '1994', 'y': '27.4', 'series': '2' }, { 'x': '1995', 'y': '27.2', 'series': '2' }, { 'x': '1996', 'y': '27.6', 'series': '2' }, { 'x': '1997', 'y': '27.3', 'series': '2' }, { 'x': '1998', 'y': '27.5', 'series': '2' }, { 'x': '1999', 'y': '27.7', 'series': '2' }, { 'x': '2000', 'y': '27.8', 'series': '2' }, { 'x': '2001', 'y': '26.8', 'series': '2' }, { 'x': '2002', 'y': '26.9', 'series': '2' }, { 'x': '2003', 'y': '26.9', 'series': '2' }, { 'x': '2004', 'y': '27.2', 'series': '2' }, { 'x': '2005', 'y': '27', 'series': '2' }, { 'x': '2006', 'y': '26.4', 'series': '2' }, { 'x': '2007', 'y': '28.1', 'series': '2' }, { 'x': '2008', 'y': '28', 'series': '2' }], yAxis: 1
    }
        , {
        key: "Gini coefficient - Equivalised disposable household income 3", type: "scatter", values: [{ 'x': '2000', 'y': '28.5', 'series': '3' }, { 'x': '2001', 'y': '27.8', 'series': '3' }, { 'x': '2002', 'y': '27.9', 'series': '3' }, { 'x': '2003', 'y': '27.8', 'series': '3' }, { 'x': '2004', 'y': '28.1', 'series': '3' }, { 'x': '2005', 'y': '28.1', 'series': '3' }, { 'x': '2006', 'y': '27.6', 'series': '3' }, { 'x': '2007', 'y': '29', 'series': '3' }, { 'x': '2008', 'y': '28.2', 'series': '3' }, { 'x': '2009', 'y': '28.1', 'series': '3' }, { 'x': '2010', 'y': '27.9', 'series': '3' }, { 'x': '2011', 'y': '27.8', 'series': '3' }, { 'x': '2012', 'y': '28', 'series': '3' }, { 'x': '2013', 'y': '28.2', 'series': '3' }, { 'x': '2014', 'y': '29.2', 'series': '3' }], yAxis: 1,
    }, {
        key: "Gini coefficient - Equivalised disposable household income 4", type: "scatter", values:
            [{ 'x': '2011', 'y': '28.6', 'series': '4' }, { 'x': '2012', 'y': '28.8', 'series': '4' }, { 'x': '2013', 'y': '28.8', 'series': '4' }, { 'x': '2014', 'y': '30.2', 'series': '4' }, { 'x': '2015', 'y': '28.8', 'series': '4' }, { 'x': '2016', 'y': '28.9', 'series': '4' }, { 'x': '2017', 'y': '29.6', 'series': '4' }, { 'x': '2018', 'y': '29', 'series': '4' }, { 'x': '2019', 'y': '29.2', 'series': '4' }], yAxis: 1,
    }
    ]
    //$scope.data = generateData()


    // [{ key: "Series", values: [{'year': '1986', 'F1': '20.4', 'series': '0'}, {'year': '1987', 'F1': '20.2', 'series': '0'}, {'year': '1988', 'F1': '20.7', 'series': '0'}, {'year': '1989', 'F1': '21', 'series': '0'}, {'year': '1990', 'F1': '20.8', 'series': '0'}, {'year': '1991', 'F1': '20.7', 'series': '0'}, {'year': '1992', 'F1': '20.5', 'series': '0'}, {'year': '1993', 'F1': '20.9', 'series': '0'}, {'year': '1994', 'F1': '20.8', 'series': '0'}, {'year': '1995', 'F1': '21.4', 'series': '0'}, {'year': '1996', 'F1': '21.9', 'series': '0'}, {'year': '1997', 'F1': '23', 'series': '0'}, {'year': '1998', 'F1': '23.8', 'series': '0'}, {'year': '1999', 'F1': '24.5', 'series': '0'}, {'year': '2000', 'F1': '24.9', 'series': '0'}, {'year': '2001', 'F1': '25.7', 'series': '0'}, {'year': '2002', 'F1': '25.2', 'series': '0'}, {'year': '2003', 'F1': '25.6', 'series': '0'}, {'year': '2004', 'F1': '26.1', 'series': '0'}, {'year': '2005', 'F1': '25.9', 'series': '0'}, {'year': '2006', 'F1': '26.2', 'series': '0'}, {'year': '2007', 'F1': '26.4', 'series': '0'}, {'year': '2008', 'F1': '26', 'series': '0'}, {'year': '2009', 'F1': '25.5', 'series': '0'}, {'year': '2010', 'F1': '25.9', 'series': '0'}, {'year': '2011', 'F1': '25.9', 'series': '0'}, {'year': '2012', 'F1': '25.5', 'series': '0'}, {'year': '2013', 'F1': '25.6', 'series': '0'}, {'year': '2014', 'F1': '25.2', 'series': '0'}, {'year': '2015', 'F1': '25.5', 'series': '0'}, {'year': '2016', 'F1': '25.4', 'series': '0'}, {'year': '2017', 'F1': '26', 'series': '0'}, {'year': '2018', 'F1': '26.3', 'series': '0'}, {'year': '2019', 'F1': '26.6', 'series': '0'}] }]
    // key: "Stream0"
    // originalKey: "Stream0"
    // type: "line" 
    // values: {x: 0, y: -1.264083335746186, series: 0}
    console.log($scope.data)

    function generateData() {
        var test = stream_layers(7, 10 + Math.random() * 100, .1).map(function (data, i) {
            return {
                key: 'Stream' + i,
                values: data.map(function (a) { a.y = a.y * (i <= 1 ? -1 : 1); return a })
            };
        });

        test[0].type = "line"
        test[0].yAxis = 1
        test[1].type = "scatter"
        test[1].yAxis = 1


        return test;
    }

    /* Inspired by Lee Byron's test data generator. */
    function stream_layers(n, m, o) {
        if (arguments.length < 3) o = 0;
        function bump(a) {
            var x = 1 / (.1 + Math.random()),
                y = 2 * Math.random() - .5,
                z = 10 / (.1 + Math.random());
            for (var i = 0; i < m; i++) {
                var w = (i / m - y) * z;
                a[i] += x * Math.exp(-w * w);
            }
        }
        return d3.range(n).map(function () {
            var a = [], i;
            for (i = 0; i < m; i++) a[i] = o + o * Math.random();
            for (i = 0; i < 5; i++) bump(a);
            return a.map(stream_index);
        });
    }

    function stream_index(d, i) {
        return { x: i, y: Math.max(0, d) };
    }
});

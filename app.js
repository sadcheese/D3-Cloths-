/**
 * @author Sam
 */

var app = angular.module("homeApp", ['nvd3ChartDirectives']);

function mainCtrl($scope) {
	$scope.donutData = [1, 2, 3, 4, 5, 6];
	$scope.writtenData = [1, 2, 3, 4, 5, 6];
	$scope.clothes = ["Shirts", "Pants", "Glasses", "Watches", "Shoes", "Scarfs"];
	//bar chart begins
	var w = 400;
	var h = 250;
	var bars = "";
	var sampleArray = "";
	barGraph();
	function barGraph() {
		var canvas = "";

		var canvas = d3.select("#graphed").append("svg").attr("width", w).attr("height", h);
		sampleArray = $scope.donutData;
		bars = canvas.selectAll("rect").data(sampleArray).enter().append("rect").attr("width", 50).attr("height", function(d) {
			return 0;
		}).attr("x", function(d, i) {
			return i * 60;
		}).attr("y", function(d) {
			return 0;
		}).attr("fill", "rgb(250, 250, 250)").attr("height", function(d) {
			return d * 20;
		});
	}


	$scope.yFunc = function() {
		return function(d) {
			return d;
		};
	};
	//bar chart ends

	$scope.refresh = function() {
		$scope.donutData = [];
		var a = Math.round(Math.random() * 10);

		var b = Math.round(Math.random() * 10);
		var c = Math.round(Math.random() * 10);
		var d = Math.round(Math.random() * 10);
		var e = Math.round(Math.random() * 10);
		var f = Math.round(Math.random() * 10);
		$scope.writtenData = [a, b, c, d, e, f];

		$scope.donutData = [a, b, c, d, e, f];

		bars.transition().duration(600).attr("height", function(d, i) {
			return $scope.donutData[i] * 10;
		});

	};

}

function donutCtrl($scope) {
	$scope.donutData = [3, 8];
	$scope.writtenData = [1, 2, 3, 4, 5, 6];
	var colorArray = ['#222222', 'green'];
	var colorArray2 = ['#222222', 'red'];
	var colorArray3 = ['#222222', 'blue'];
	var colorArray4 = ['#222222', 'teal'];
	var colorArray5 = ['#222222', 'pink'];
	var colorArray6 = ['#222222', 'orange'];
	$scope.figures = ["2()", "3()"];
	$scope.colors = colorArray;
	$scope.colorFunction = function(x) {
		return function(d, i) {
			return colorArray[i];
			$scope.colors = colorArray;
		};
	};
	$scope.colorFunction2 = function() {
		return function(d, i) {
			return colorArray2[i];
		};
	};
	$scope.colorFunction3 = function() {
		return function(d, i) {
			return colorArray3[i];
		};
	};
	$scope.colorFunction4 = function() {
		return function(d, i) {
			return colorArray4[i];
		};
	};
	$scope.colorFunction5 = function() {
		return function(d, i) {
			return colorArray5[i];
		};
	};
	$scope.colorFunction6 = function() {
		return function(d, i) {
			return colorArray6[i];
		};
	};

	$scope.yFunc = function() {
		return function(d) {
			return d;
		};
	};

	$scope.refresh = function() {
		$scope.donutData = [];
		var a = Math.random();
		var b = Math.random();
		var c = Math.random();
		var d = Math.random();
		var e = Math.random();
		var f = Math.random();
		$scope.donutData = [a, b];
	};

}

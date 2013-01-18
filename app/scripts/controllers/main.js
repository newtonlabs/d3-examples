'use strict';

animationsApp.controller('MainCtrl', ['$scope', 'EnterUpdateExit', function($scope, draw) {
  $scope.data = [{r: 10, x: 100, y:30,  color: 'steelblue'},
    {r: 20, x: 200, y:100, color: 'darkred'},
    {r: 30, x: 300, y:200, color: 'forestgreen'}];

  var svg = d3.select("#example").append("svg").attr("width", 1000).attr("height", 500);

  $scope.reset = function() {
    draw.draw(svg, []);
  };

  $scope.draw = function(data) {
    draw.draw(svg, $scope.data);
  };
}]);

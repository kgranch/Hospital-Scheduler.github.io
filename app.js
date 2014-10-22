var app = angular.module('app', []);


app.controller('dataCtrl', ['$scope',  function ($scope) {

    $scope.currentPage = 'Home';
    $scope.changeArea = function(area){
        $scope.currentPage = area;
    }

}]);

var app = angular.module('toolbar', ['ngMaterial']);

app.directive('toolbar', function() {

    return {
        $scope: {},
        restric: 'AE',
        replace: 'true',
        templateUrl: 'app/components/toolbar/toolbar.html'
    };
});

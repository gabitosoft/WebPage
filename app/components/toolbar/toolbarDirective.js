var app = angular.module('toolbar', []);

app.directive('toolbar', function() {

    return {
        $scope: {},
        restric: 'AE',
        replace: 'true',
        templateUrl: 'app/components/toolbar/toolbar.html'
    };
});

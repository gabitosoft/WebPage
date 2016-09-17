var app = angular.module('listForm', []);

app.directive('listForm', function() {

    return {
        $scope: {},
        restric: 'AE',
        replace: 'true',
        templateUrl: 'app/components/form/list.html'
    };
});

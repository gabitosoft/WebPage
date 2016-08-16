var app = angular.module('gabitosoft', []);

app.directive('setForm', function() {

    return {
        $scope: {},
        restric: 'AE',
        replace: 'true',
        templateUrl: 'app/components/login/login.html'
    };
});

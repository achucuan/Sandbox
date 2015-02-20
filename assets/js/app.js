(function () {

    var app = angular.module('appSandbox', []);

    app.controller('NavbarController', function ($scope, $http) {
        $http.get('data/navbar.json').success(function(data) {
            $scope.navbar = data;
        });
    });

    app.controller('NewsController', function ($scope, $http) {
        $http.get('data/news.json').success(function(data) {
            $scope.articles = data;
        });
    });

})();
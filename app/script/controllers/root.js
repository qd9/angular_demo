angular.module("myApp").controller("loginCtrl", ["$scope", function($scope) {
        console.log("contr");
        $scope.lists = [{
            id: 1,
            name: "login",
            route:"root.login",
            icon: "glyphicon glyphicon-hourglass"
        }, {
            id: 2,
            name: "work",
            route:"root.work",
            icon: "glyphicon glyphicon-briefcase"
        }, {
            id: 3,
            name: "pruducer",
            route:"root.producer",
            icon: "glyphicon glyphicon-cd"
        }, {
            id: 4,
            name: "demo",
            route:"root.demo",
            icon: "glyphicon glyphicon-folder-open"
        }, {
            id: 5,
            name: "message",
            route:"root.message",
            icon: "glyphicon glyphicon-comment"
        }];
        



    }]);
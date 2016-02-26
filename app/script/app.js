var app = angular.module('myApp',['ui.router']);
app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('root', {
        url: '/root',
        templateUrl: 'templates/root.html'
    })
    .state("root.login",{
    	url:"/login",
    	templateUrl:"templates/login.html"
    	
    });
    
    $urlRouterProvider.otherwise('/root');
});
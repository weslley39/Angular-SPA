/**
 * Created by Weslleeyy on 22/06/14.
 */

var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider, $locationProvider){
    //remove o # da url

    $locationProvider.html5Mode(true);

    $routeProvider

    //para a rota '/', carregaremos o template home.html e o controler HomeController

    .when('/', {
        templateUrl : '/home.html',
        controller : 'HomeController'
    })

    .when('/sobre', {
        templateUrl: '/sobre.html',
        controller: 'SobreController'
    })

    //para a rota '/contato', carregaremos o template contato.html e o controller ContatoController
    .when('/contato', {
        templateUrl: '/contato.html',
        controller: 'ContatoController'
    })

    //caso não seja nenhuma dessas rotas, redicionamos para a rota principal '/'
        .otherwise({redirectTo : '/'});
});

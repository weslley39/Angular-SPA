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
        templateUrl : 'Codes/SPA/views/home.html',
        controller : 'HomeController'
    })

    .when('/sobre', {
        templateUrl: 'Codes/SPA/views/sobre.html',
        controller: 'SobreController'
    })

    //para a rota '/contato', carregaremos o template contato.html e o controller ContatoController
    .when('/contato', {
        templateUrl: 'Codes/SPA/views/contato.html',
        controller: 'ContatoController'
    })

    //caso não seja nenhuma dessas rotas, redicionamos para a rota principal '/'
        .otherwise({redirectTo : '/'});
});

(function() {
    "use strict";

    /**
     * @ngdoc Config
     * @name SystemConfig
     * @module immiApp.system
     * @description
     *
     *
     * @author Ideas2IT Technologies
     * @copyright
     */
    angular
        .module("login")
        .config(config);

    config.$inject = [
        "$stateProvider",
        "$urlRouterProvider"
    ];

    function config($stateProvider, $urlRouterProvider) {

      //  $urlRouterProvider.otherwise("/login");

        /*$locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });*/

        $stateProvider
        .state("landing", {
                url: "",
                abstract: true,
                /**
                * TODO Role based system.html should be defined according to the Role
                * Beneficiary, lawyer or corporate specialist, System Administrator
                */
                templateUrl: "app/login/views/log-main.html",
            })
            .state("landing.login", {
                url: "/login",
                templateUrl: "app/login/views/login.html",
                controller: "LoginController",
                controllerAs: "logCtrl",
                resolve : {
                  data : ["$state", function($state){


                  }]
                }
            })
            .state("landing.signup", {
                url: "/signup",
                templateUrl: "app/login/views/login.html",
                controller: "LoginController",
                controllerAs: "logCtrl",
                reloadOnSearch: false
            })
            .state("landing.404", {
                url: "/404",
                templateUrl: "app/login/views/404.html"
            });
    }

})();

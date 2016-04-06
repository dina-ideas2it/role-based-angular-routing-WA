(function() {
    'use strict';

    angular
        .module('login')
        .controller('LoginController', LoginController);

    /**
     * @ngdoc Injector
     * @name LoginController
     * @private
     * @module ModuleName
     * @description
     * //Description goes here
     * @author Ideas2IT Technologies
     * @copyright
     */
    LoginController.$inject = ["$http", "$rootScope", "$state"];

    /**
     * @ngdoc Controller
     * @name LoginController
     * @module ModuleName
     * @requires
     * @description
     * //Description goes here
     * @author Ideas2IT Technologies
     * @copyright
     */
    function LoginController($http, $rootScope, $state) {
        var vm = this;
        try{
          if(localStorage.getItem("cred")){
            $state.go("contact.list");
          }
        }catch(e){
          console.error(e);
        }
        vm.user = {};

        vm.login = function(){
          localStorage.setItem("cred", vm.user);
          var k = $http({
            "url" : "app/contact/routes/routes.json",
            "method" : "GET"
          });

          k.then(function success(response){
            var routes = response.data;
            console.log(routes,"success");
            angular.module("contact").config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider){
              for(var state in routes){
                console.log(state);
                $stateProvider
                .state(state, routes[state]);
              }
            }]);
            //bootstrapAngular();
            $("#login-body").remove();

            angular.bootstrap(document.getElementById('main-body'), ['contact']);
            $rootScope.$destroy();

          },
          function error(response){
            console.log(response.data, "error");
          });



        }
    }
})();

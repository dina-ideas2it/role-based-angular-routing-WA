(function() {
    'use strict';

    angular
        .module('login')
        .controller('SignupController', SignupController);

    /**
     * @ngdoc Injector
     * @name SignupController
     * @private
     * @module ModuleName
     * @description
     * //Description goes here
     * @author Ideas2IT Technologies
     * @copyright
     */
    SignupController.$inject = [];

    /**
     * @ngdoc Controller
     * @name SignupController
     * @module ModuleName
     * @requires
     * @description
     * //Description goes here
     * @author Ideas2IT Technologies
     * @copyright
     */
    function SignupController() {
        var vm = this;

        activate();

        function activate() {

        }
    }
})();

(function() {
    'use strict';

    angular
        .module('contact')
        .controller('ContactDetailController', ContactDetailController);

    /**
     * @ngdoc Injector
     * @name ContactDetailController
     * @private
     * @module ModuleName
     * @description
     * //Description goes here
     * @author Ideas2IT Technologies
     * @copyright
     */
    ContactDetailController.$inject = ["ContactService"];

    /**
     * @ngdoc Controller
     * @name ContactDetailController
     * @module ModuleName
     * @requires
     * @description
     * //Description goes here
     * @author Ideas2IT Technologies
     * @copyright
     */
    function ContactDetailController(ContactService) {
        var vm = this;

        vm.contact = {};

        vm.getContactById = function(){
          ContactService.getContactsById(1, function(data){
            vm.contact = data;
          })
        }
    }
})();

(function() {
    'use strict';

    angular
        .module('contact')
        .controller('ContactListController', ContactListController);

    /**
     * @ngdoc Injector
     * @name ContactListController
     * @private
     * @module ModuleName
     * @description
     * //Description goes here
     * @author Ideas2IT Technologies
     * @copyright
     */
    ContactListController.$inject = ["ContactService"];

    /**
     * @ngdoc Controller
     * @name ContactListController
     * @module ModuleName
     * @requires
     * @description
     * //Description goes here
     * @author Ideas2IT Technologies
     * @copyright
     */
    function ContactListController(ContactService) {
        var vm = this;

        vm.contacts = {};

        vm.getContacts = function(){
          ContactService.getContacts(function(data){
            vm.contacts = data;
          })
        }

        vm.getContacts()
    }
})();

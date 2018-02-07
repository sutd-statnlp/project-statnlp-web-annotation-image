(function() {
    'use strict';

    angular
        .module('statnlpApp')
        .controller('SidenavController', SidenavController);

    SidenavController.$inject = ['$scope', '$state','$ocLazyLoad','ImageService'];

    function SidenavController ($scope, $state,$ocLazyLoad,ImageService) {
        var vm = this;
        
        vm.image = {
            image_id: null,
            image_rl: null,
            objects: []
        };
       

        loadImages();

        function loadImages() {
            ImageService.getAll({}, onSuccess, onError);

            function onSuccess(data) {
                vm.image = data[0];
            }
        }

        function onError(error) {
            console.log(error);
        }
    }
})();

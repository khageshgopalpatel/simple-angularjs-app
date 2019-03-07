(function(){
    'use strict';

    angular
        .module('app')
        .controller('PostController', PostController)

    PostController.$inject = ['PostService'];

    function PostController(PostService) {
        /* jshint validthis:true */
        var vm = this;

        vm.query = {
            order: 'id',
            limit: 5,
            page: 1
        };
        vm.posts = [];

        vm.getPosts = function () {
            vm.promise = PostService.getPosts(vm.query);
            vm.promise.then(function (response) {
                vm.posts = response.data;
            }, function (response) {
                console.error(response.data);
            })
        }
        vm.getPosts();
    }
})();
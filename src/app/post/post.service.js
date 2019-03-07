(function () {
    'use strict';

    angular
        .module('post.module')
        .factory('PostService', PostService)

    PostService.$inject = ['$http'];

    function PostService($http) {
        var service = {
            getPosts: getPosts
        };

        return service;

        function getPosts(query) {
            var queryStr = [
                '_page=' + query.page,
                '_limit=' + query.limit,
                '_sort=' + query.order.replace('-', ''),
                '_order=' + (query.order.includes('-') ? 'desc' : 'asc')
            ];
            return $http.get('http://jsonplaceholder.typicode.com/posts?' + queryStr.join('&'));
        }
    }
})();
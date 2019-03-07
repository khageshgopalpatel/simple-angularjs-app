(function () {
    'use strict';

    angular
        .module('post.module')
        .component('post', {
            template: require('./post.template.html'),
            controller: 'PostController'
        })
})();
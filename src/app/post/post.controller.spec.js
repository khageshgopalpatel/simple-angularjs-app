'use strict';

describe('Controller: PostController', function () {
    var controller;

    beforeEach(function () {
        angular.mock.module('app');
    });

    beforeEach(inject(['$controller', function ($controller) {
        controller = $controller('PostController');
    }]));

    it('should not be undefined', function () {
        expect(controller).toBeDefined();
    });

    it('should contain varible query', function () {
        expect(controller.query).toBeDefined();
        expect(controller.query.page).toEqual(1);
    });

});
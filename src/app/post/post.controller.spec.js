'use strict';

describe('Controller: PostController', () => {
    var controller;

    beforeEach(() => {
        angular.mock.module('app');
    });

    beforeEach(inject(['$controller', ($controller) => {
        controller = $controller('PostController');
    }]));

    it('should not be undefined', () => {
        expect(controller).toBeDefined();
    });

    it('should contain varible query', () => {
        expect(controller.query).toBeDefined();
        expect(controller.query.page).toEqual(1);
    });

});
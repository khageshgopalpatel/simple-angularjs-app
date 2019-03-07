'use strict';

describe('Service: PostService', () => {
    var postService;

    beforeEach(() => {
        angular.mock.module('app');
    });

    beforeEach(inject(['PostService', (PostService) => {
        postService = PostService;
    }]));

    it('should not be undefined', () => {
        expect(postService).toBeDefined();
    });

    it('should contain method getPosts', () => {
        expect(postService.getPosts).toBeDefined();
    });

});
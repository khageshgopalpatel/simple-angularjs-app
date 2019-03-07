'use strict';

describe('Service: PostService', function() {
    var postService, httpBackend;

    beforeEach(function() {
        angular.mock.module('app');
    });

    beforeEach(inject(['PostService','$httpBackend', function (PostService, $httpBackend) {
        postService = PostService;
        httpBackend = $httpBackend;

        var data = [{
            "userId": 1,
            "id": 1,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        }];
        spyOn(PostService, 'getPosts').and.returnValue(Promise.resolve(data));
    }]));

    it('should not be undefined', function() {
        expect(postService).toBeDefined();
    });

    it('should contain method getPosts', function() {
        expect(postService.getPosts).toBeDefined();
    });

    it('should return a promise', (done) => {
        var query = {
            order: 'id',
            limit: 5,
            page: 1
        };
        postService.getPosts(query).then(function(response){
            expect(Array.isArray(response)).toBe(true);
            expect(response.length).toBe(1);
            expect(response[0].id).toBe(1);
        });
        expect(postService.getPosts).toHaveBeenCalledWith(query);
        done();
    });

});
'use strict';

describe('Component: PostComponent', () => {
    var compile, scope, httpBackend;

    beforeEach(() => {
        angular.mock.module('app');
    });

    beforeEach(inject(['$rootScope', '$compile', '$httpBackend', ($rootScope, $compile, $httpBackend) => {
        scope = $rootScope.$new();
        compile = $compile;
        httpBackend = $httpBackend;
        httpBackend.whenGET('http://jsonplaceholder.typicode.com/posts?_page=1&_limit=5&_sort=id&_order=asc')
        .respond(200, [{
            "userId": 1,
            "id": 1,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        }]);
    }]));

    it('should compile home component', () => {
        const el = angular.element('<post></post>');
        var element = compile(el)(scope);
        scope.$digest()
        expect(element[0].querySelector('md-table-container')).toBeDefined();
    });
});
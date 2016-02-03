describe("greet module", function(){
    beforeEach(module('myApp.greet'));

    describe("greetController", function(){
       it("Should initilize name with an empty string", inject(function($controller){
           var dummyScope = {};
           $controller('greetController', {$scope : dummyScope});

           expect(dummyScope.name).toBe('');
       }));
       it("Should initilize message with an empty string", inject(function($controller){
           var dummyScope = {};
           $controller('greetController', {$scope : dummyScope});

           expect(dummyScope.message).toBe('');
       }));
       it("Should populate a message when greeted", inject(function($controller){
           var dummyScope = {};
           $controller('greetController', {$scope : dummyScope});

           dummyScope.name = 'Magesh';
           dummyScope.greet();
           expect(dummyScope.message).toBe('Hi Magesh, Have a nice day!');
       }));
    });

    describe("trimText Filter", function(){
        it("Should return the given string if short", inject(function($filter){
            //Arrange
            var trimTextFilter = $filter('trimText');
            var shortstring = 'juz this';
            var expectedResult = shortstring;

            //Act
            var result = trimTextFilter(shortstring);

            //Assert
            expect(result).toBe(expectedResult);
        }));
    })
});

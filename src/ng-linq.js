(function(){
    angular
    .module('ngLinq', [])
    .factory('$linq', function(){
        return Enumerable;
    })
    .factory('$from', function(){
        return Enumerable.from;
    });

})();
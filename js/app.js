
(function(){

    var gotQuiz = angular
    .module("gotQuiz", []);

        // Pop up Modal on page load//
        gotQuiz.controller("myController", function($scope, $window){
        $window.onload = function() {
        $('#myModal').modal('show');
        };


  });

})();

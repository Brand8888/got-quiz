
// IIFE to avoid polution of the global namespace.//

(function(){
    /*
     * Creating List controller and attaching it to the main gotQuiz module
     */
    angular
        .module("gotQuiz")
        .controller("listCtrl", ListController);

    /*
     * Dependency injection.
     * This allows the script to be minified and uglified without breaking the code.
     * parsing dependencies to the controller using a string in an array via $inject method- Similiar to 'require' in Ruby.
     */
    ListController.$inject = ['quizMetrics', 'DataService'];


    function ListController(quizMetrics, DataService){
        var vm = this;

        /*
         * The interface for the controller. The below code shows all the
         * variables that are available from inside the view. References to
         * named functions are used instead of inline anon functions. This
         * increases readability of the code.
         *
         * The interface is at the top to provide a quick overview of what is
         * available in the controller while the implementation remains at the
         * bottom.
         */
        vm.quizMetrics = quizMetrics; // Controllers reference to the quiz data from factory
        vm.data = DataService.charactersData; // Controller reference to the character info created in the factory
        vm.activeCharacter = {}; // will be used in the view to hold the data of currently active character
        vm.changeActiveCharacter = changeActiveCharacter; // reference to a named function below
        vm.activateQuiz = activateQuiz; // reference to named function below
        vm.search = ""; // holds the search query when user uses search bar

        function changeActiveCharacter(index){
            // simple function to attach the data of the character clicked on to
            // the active Character object
            vm.activeCharacter = index;
        }

        function activateQuiz(){
            /*
             * changeState is a function attached onto the quizMetrics object
             * returned from the factory It takes two arguments. 1. what to
             * change state of (quiz or results) 2. what new state should be.
             */
            quizMetrics.changeState("quiz", true);
        }
    }


})();

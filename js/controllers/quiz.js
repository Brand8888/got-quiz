(function(){

    /*
     * Call the angular module called gotQuiz that was created in js/app.js
     * then attach the controller quizCtrl to it.
     *
     * The quiz controller is added as a named function instead of an anon func
     * to keep the code clean and readable.
     */
    angular
        .module("gotQuiz")
        .controller("quizCtrl", QuizController);


    QuizController.$inject = ['quizMetrics', 'DataService'];


    function QuizController(quizMetrics, DataService){

        var vm = this;

        vm.quizMetrics = quizMetrics; // Attaching the quizMetrics object to the view model
        vm.dataService = DataService;
        vm.questionAnswered = questionAnswered; // as a named function defined below
        vm.setActiveQuestion = setActiveQuestion; // setActiveQuestion is a named function below
        vm.selectAnswer = selectAnswer; // as a named function
        vm.finaliseAnswers = finaliseAnswers; //as a named function
        vm.activeQuestion = 0; // currently active question in the quiz
        vm.error = false; // error flag. Will be set when user tries to finish quiz with
        vm.finalise = false; // finalise flag. Will be set to show prompt to end quiz with
                             // all questions answered

        var numQuestionsAnswered = 0; // This is not needed by the view so is only declared using var

        /*
         * setActiveQuestion takes one optional argument.
         *
         * If no argument is passed it will set the active question in the quiz
         * to the next question that has yet to be answered. This allows the
         * user to skip questions and come back to them later, even by clicking
         * the "continue" button. It will still take them to the unanswered
         * question.
         *
         * If an argument is passed into the function then it will simply set
         * the activeQuestion to the number that was passed in as an argument
         */
        function setActiveQuestion(index){
            // no argument passed, data = undefined.
            if(index === undefined){
                var breakOut = false;

                /*
                 * quizLength is set to 1 less than the length of the quiz as it
                 * is always referenced against the variable activeQuestion.
                 */
                var quizLength = DataService.quizQuestions.length - 1;

                /*
                 * This while loop will loop continuously until an unanswered
                 * question is found. Going back to the first question if the
                 * last question is reached witout finding an unanswered question
                 */
                while(!breakOut){
                    // check if last question is reach, if not increment. If it
                    // has go back to start.
                    vm.activeQuestion = vm.activeQuestion < quizLength?++vm.activeQuestion:0;

                    /*
                     * activeQuestion has looped back to start. Meaning user has
                     * skipped past questions without answering them. Therefore
                     * show a warning. This is done by setting the error flag to
                     * true.
                     */
                    if(vm.activeQuestion === 0){
                        vm.error = true;
                    }

                    // if current active question has not been selected, break
                    // out the while loop
                    if(DataService.quizQuestions[vm.activeQuestion].selected === null){
                        breakOut = true;
                    }
                }
            }else{
                // Data was passed into the function therefore
                // Set activeQuestion to the index of the button pressed
                vm.activeQuestion = index;
            }

        }

        /*
         * This method will be triggered everytime the user clicks continue in
         * the quiz.
         *
         * It will then check if the current question as been answered, if it
         * has it will increment the local numQuestionsAnswered variable. Then
         * it checks if the numQuestionsAnswered is equal to the total number
         * of questions in the quiz, meaning the user has complected the quiz.
         *
         * If the quiz has been completed then it sets the finalise flag to
         * true, which removes the quiz from the view and displays a prompt to
         * ensure the user is finished. Then returns from the function
         *
         * If all the questions have not been answered or the current question
         * has not been selected the setActiveQuestion method is called to
         * increment the active question to the next unanswered question. If
         * the current question is the only unanswered question then it will
         * remain on that question
         */
        function questionAnswered(){

            var quizLength = DataService.quizQuestions.length;

            if(DataService.quizQuestions[vm.activeQuestion].selected !== null){
                numQuestionsAnswered++;
                if(numQuestionsAnswered >= quizLength){
                    // final check to ensure all questions are actuall answered
                    for(var i = 0; i < quizLength; i++){
                        /*
                         * if find a question that is not answered, set it to
                         * active question then return from this function
                         * to ensure finalise flag is not set
                         */
                        if(DataService.quizQuestions[i].selected === null){
                            setActiveQuestion(i);
                            return;
                        }
                    }
                    // set finalise flag and remove any existing warnings
                    vm.error = false;
                    vm.finalise = true;
                    return;
                }
            }
            /*
             * There are still questions to answer so increment to next
             * unanswered question using the setActiveQuestion method
             */
            vm.setActiveQuestion();
        }

        /*
         * When a user clicks an answer, this method will set that answer as
         * their selection for that question on the quizMetrics object. This
         * then allows the view to add classes to the answer to indicate it is
         * the current selection
         */
        function selectAnswer(index){
            DataService.quizQuestions[vm.activeQuestion].selected = index;
        }

        /*
         * When the final prompt is shown to the user, if they decide they are
         * finished and click yes, this method is called.
         *
         * This method:
         *          -removes the finalise flag, which will remove the prompt
         *              from the screen.
         *          -Resets the local numQuestionsAnswered variable
         *          -Sets the active question back to 0 (for future use)
         *          -Calls the markQuiz method from the quizMetrics Object
         *              created in the factory
         *          -removes quiz from the view by changing quiz state to false
         *          -displays the results in the view by setting the results
         *              state to true
         */
        function finaliseAnswers(){
            vm.finalise = false;
            numQuestionsAnswered = 0;
            vm.activeQuestion = 0;
            quizMetrics.markQuiz();
            quizMetrics.changeState("quiz", false);
            quizMetrics.changeState("results", true);
        }
    }

})();
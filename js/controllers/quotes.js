function rando(min, max) {
  return (Math.floor(Math.random() * (max - min + 1)) + min);
}

var quoteSource = {
  0: {"quote":"Wasted 10 mins of my life playing this quiz.", "character":"~ Lousy friend"},
  1: {"quote":"Hodor?",  "character":"~ Hodor"},
  2:{"quote":"The gods have no mercy, that's why they're gods.", "character":"~ Cersei Lannister"},
  3:{"quote":"Money buys a man's silence for a time. A bolt in the heart buys it forever.", "character":"~ Peter Littlefinger"},
  4:{"quote":"How can mirrors be real if your eyes aren't real", "character":"Jaden Smith"},
  5:{"quote":"It's not easy being drunk all the time. If it were easy, everyone would do it.", "character":"~ Tyrion Lannister"},
  6:{"quote":"Oh, It's truth you want? Be careful, my lady. Tyrion says that people often claim to hunger for the truth, but seldom like the taste when it's served up.", "character":" ~ George R.R Martin"},
  7:{"quote":"The lowest among us are no different from the highest if you give them a chance and approach them with an open heart.", "character":"~ Margaery Tyrell"},
  8:{"quote":"Someone who's forgotten fear has forgotten how to hide.", "character":"~ Daario Naharis"}
  };
var changeUrl = function() { //jquery function to change url of tweet button

 $('.getQuote').click($("#tweetthis").attr("href","http://www.twitter.com/home/?status="+$(".theQuote").text()));
};

$(document).ready(function() {
  $('#getQuote').on('click', function() {

    var num = rando(0, 8);
 $('#quote').text(quoteSource[num].quote);
$('#character').text(quoteSource[num].character);



  });

});

// your code here!


function calculateWords () {

	$('#js-submit').submit(function (event) {
    	event.preventDefault();


		var txt = $('#user-text').val();
		var words = txt.split(" ");
		var sentences = txt.split(".");
		var sentenceSum = 0;
		var wordsSum = 0;
		var distinctWords = [];


		for (var i = sentences.length - 1; i >= 0; i--) {
			sentenceSum += sentences[i].length;
		}

		for (var i = words.length - 1; i >= 0; i--) {
			wordsSum += words[i].length;
		}

  		for (var i=0; i<words.length; i++) {
    		if (distinctWords.indexOf(words[i]) === -1) {
      			distinctWords.push(words[i]);
    		}
  		}

        $('.js-result').removeClass('hidden');
		$('.js-word-count').text(words.length);
		$('.js-unique-word-count').text(distinctWords.length);
		$('.js-word-length').text((wordsSum/words.length).toFixed(2));
		$('.js-sentence-length').text((sentenceSum/sentences.length).toFixed(2));
	});
}

$(document).ready(calculateWords);

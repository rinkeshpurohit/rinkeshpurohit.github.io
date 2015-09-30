$(function(){
		$('.container').hover(function() {
			$(this).find('.bottom').slideDown('slow');
		}, function() {
			$(this).find('.bottom').slideUp('slow');
		});
	})
(function() {
	var $clickMe = $("#me"),
		$warning = $("#warning"),
		$content = $("#content");
		$clickMe.on("click",function(e){
			$warning.removeClass('hidden');
		});
		$warning.on('click',function(e){
			var target = e.target,id = target.id;
			if($(target).data('action') === "cancel" || id === "warning"){
				$warning.addClass('hidden');
			} 
		});
})();
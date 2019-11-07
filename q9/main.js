$(function () {
	$('body').on('click','#create-btn', function () {
		var box1 = $("#chk1").prop('checked');
		var box2 = $("#chk2").prop('checked');
		var box3 = $("#chk3").prop('checked');

		if(box3 && box2 && box1){
			var $li = $('<li>');
			$li.html('black').addClass('black');
			$('ul').append($li);
		}else if(box1 && box2){
			var $li = $('<li>');
			$li.html('purple = blue + red').addClass('purple');
			$('ul').append($li);

			$li.html('green = blue + yellow').addClass('green');
			$('ul').append($li);

			$li.html('purple = blue + red').addClass('purple');
			$('ul').append($li);
		}

		//If 2 of the checkboxes are checked add 
		//(purple = blue + red), (green = blue + yellow), (orange = red + yellow)
	});
});
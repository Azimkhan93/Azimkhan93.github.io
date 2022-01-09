$(function() {
	
	$('#toggle-btn').on('click', function(event) {
		handleSidebarVisibility()
	})
	
	$('.list-item-toggle').on('click', function(event){
		handleSidebarVisibility()
	})

	$('#backdrop').on('click', function(){
		handleSidebarVisibility()
	})
	
	function handleSidebarVisibility() {
		$('#sidebar').toggleClass('active');
		$('#backdrop').toggleClass('active');
	};
})


// //E-mail Ajax Send
// 	$("form.callback").on("submit",function() { //Change
// 		var th = $(this);
// 		$.ajax({
// 			type: "POST",
// 			url: "mail.php", //Change
// 			data: th.serialize()
// 		}).done(function() {
// 			$(th).find('.success').addClass('active').css('display','flex').hide().fadeIn();
// 			setTimeout(function() {
// 				$(th).find('.success').removeClass('active').fadeOut();
// 				// Done Functions
// 				th.trigger("reset");
// 			}, 3000);
// 		});
// 		return false;
// 	});

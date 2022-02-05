$(function() {
	$('#preloader').fadeOut(500);

	$('.button-lang').on('click', function(event) {
		chooselanguage();
	})

	$('.button-date').on('click', function(event){
		$('.button-date').removeClass('active')
		$(this).addClass('active')
		$('.table-schedule').removeClass('active')
		const tableId = $(this).data("table")
		$(`#${tableId}`).addClass('active')
	})
	
	function chooselanguage() {
		$('#lang-choice').fadeOut(500);
	};
})



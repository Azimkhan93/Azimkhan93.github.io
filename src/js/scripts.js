$(function() {
	$('#preloader').fadeOut(500);
	
	$('.button-lang').on('click', function(event) {
		chooselanguage();
	})
	
	$('#qualify-button').on('click', function(event) {
		qualify();
	})

	$('.button-date').on('click', function(event){
		$('.button-date').removeClass('active')
		$(this).addClass('active')
		$('.table-schedule').removeClass('active')
		const tableId = $(this).data("table")
		$(`#${tableId}`).addClass('active')
	})
})


function qualify() {
	$('#modalka').fadeOut(500);
	$('.backdrop').fadeOut(500)	
}

function chooselanguage() {
	$('#lang-choice').fadeOut(500);
	$('.backdrop').fadeOut(500)	
};


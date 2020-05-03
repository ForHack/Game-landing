$(function() {

	$('.about__carousel').slick({
		variableWidth: true,
		centerPadding: true,
		responsive: [
			{
				breakpoint: 1070,
				settings: {
					centerPadding: false,
					variableWidth: false
				}
			}
		]
	})


	$('.burger').on('click', () => {
		$('.header .menu').toggleClass('show-menu')
	})

	$('.close').on('click', () => {
		$('.header .menu').removeClass('show-menu')
	})

});
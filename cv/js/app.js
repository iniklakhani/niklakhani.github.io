(function(){

	$('.piece').each(function(){
		var percentage = $(this).attr('data-offset');
	});

	$('.view-it').on('click', function(){
		var value = $(this).attr('data-content');
		value = value.replace(/\//g, '');
		$(this).html(value);
		$(this).removeClass('view-it');
	});

	$('.skill-bar').each(function(){
		var percentage = $(this).attr('data-fill');
		$(this).find('div').css('width', percentage + '%');
	});

})();

equalHeight();
function equalHeight() {
	$('[data-equal-columns="true"]').each(function() {
		var t=0;
		$('[class*=col-]',this).each(function() {
			$(this).height()>t&&(t=$(this).height())
		}), $('[class*=col-]',this).height(t)
	});
}
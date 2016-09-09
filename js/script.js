var i = 0;

$(function() {
	$('.page').hide();
	$('#welcome').show();
	i = 1;
	setInterval(slideHomepage, 5000);
});

function show(id) {
	if(id == 'portal') {
		$("#beep")[0].play();
	}
	$('.page').hide();
	$('#' + id).show();
}

function slideHomepage() {
	++i;
	if(i > 3) {
		i = 1;
	}
	if($('#welcome').is(':visible')) {
		$('#welcome').css('background-image', 'url(img/welcome_' + i + '.png)');
	}
}
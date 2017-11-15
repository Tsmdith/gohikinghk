var $logo = $('.logo');
var $win= $(window);

$win.on('scroll',function(){
	var top = $win.scrolltop()/3;
	$logo.css('transform','rotate(' + top + 'deg)');
});
// JavaScript Document
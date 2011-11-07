$(document).ready(function() {
	var duration
	$($('audio').get(0))
	.bind("loadedmetadata", function(){
		duration = $(this).get(0).duration;
		var timeline = new Timeline('audio', 'sound_visualisation', duration,{}, 'scale', 'scroll');
	})
})

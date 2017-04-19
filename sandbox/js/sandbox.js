(function($) {
    $(document).ready(function() {
        $('#clouds').pan({fps: 30, speed: 0.5, dir: 'left', depth: 5});
        $('#wave_back').pan({fps: 30, speed: 0.7, dir: 'left', depth: 10});
        $('#wave_front').pan({fps: 30, speed: 1, dir: 'left', depth: 40});
        $('#wave_front, #wave_back, #clouds').spRelSpeed(8);
        $('#helicopter').sprite({fps: 12, no_of_frames: 4});
    });

    $('#control').click(function() {
    	var control = $(this).text();
    	$(this).text(control == 'Play' ? 'Pause' : 'Play');
    	$('#clouds').spToggle();
    	$('#wave_back').spToggle();
    	$('#wave_front').spToggle();
    	$('#helicopter').spToggle();
    });

    $("[data-toggle='tooltip']").tooltip();
})(jQuery);



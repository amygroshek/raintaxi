//   rt-custom.js
//   Custom javascript functionality
//   Written by Amy Groshek
//   2011-06-28
//
//
jQuery(document).ready( function($) {
	
	$('input.gsc-input').click( function(e) {
		console.log(e);
        console.log('focus');
    });
	
    //console.log('is ready');
    var changePr = {
        isPrompt: false,
        // Has prompt already been changed
        check: function() {
            // Check for presence of prompt, if exists, change val, if not, reset timer
            //console.log('check');
            // if exists from google, then we change the input
            if (jQuery('input.gsc-input').length >= 1 && changePr.isPrompt == false) {
                //console.log('exists');
                changePr.isPrompt = true;
                var searchPrompt = 'Search Rain Taxi...';
                var valObj = jQuery('input.gsc-input').val(searchPrompt);
                var addClass = jQuery('input.gsc-search-button').addClass('button rtgradient');
            } else {
                changePr.timer();
            }
        },
        timer: function() {
            setTimeout(changePr.check, 1000);
        }
    };
    changePr.timer();

console.log('log');
    $('input.gsc-input').focus( function(e) {
		console.log(e);
        console.log('focus');
    });
console.log('log2');

});

/* 
   Custom javascript functionality
   Written by Amy Groshek
   2011-06-28
 */

// Facebook icon click
jQuery('#likeonfb .clickicon').click(function(e) {
	//console.log('fb click');
	window.open('http://www.facebook.com/raintaxi','','width=400,height=600');
});

// Twitter icon click
jQuery('#followontwitter .clickicon').click(function(e){
	//console.log('twitter click');
	window.open('http://www.twitter.com/RainTaxiReview','','width=400,height=600');
});

// Join mailing list click
jQuery('#joinmailinglist .clickicon').click( function(e){
	//console.log('mailing click');
	window.open('http://raintaxi.com/contact.shtml','','width=400,height=600');
});

// Donate click
jQuery('#donate .clickicon').click( function(){
	//console.log('mailing click');
	window.open(' http://www.raintaxi.com/support.shtml','','width=400,height=600');
});

jQuery('.searchform input').click( function(){
	//console.log('input click');
	jQuery(this).attr('value','');
});


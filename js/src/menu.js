
$(function(){

	// set up some variables.
	var win = $(window),
		body = $("body"),
		nav = $("nav"),
		menu = nav.find("ul");


	// menu toggle click event
	$(".menu-toggle").click( function(){

		if ( menu.hasClass( "open" ) ) {

			// remove open classes
			menu.removeClass( "open" );
			body.removeClass( "open" );

		} else {
			
			// add open classes
			menu.addClass( "open" );
			body.addClass( "open" );

		}

	} );

});

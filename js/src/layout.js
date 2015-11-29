
$(function(){

	// set up some variables.
	var win = $(window),
		menu = $("nav ul"),
		header = $(".header"),

		// set the header height
		set_header_height = function(){

			if ( matchMedia('only screen and (min-width: 768px)').matches  ) {

				header.height(
					win.height() - menu.height() - 
					header.css("padding-top").replace("px","") - 
					header.css("padding-bottom").replace("px","") 
				);

			} else {

				header.height( 
					win.height() - 
					header.css("padding-top").replace("px","") - 
					header.css("padding-bottom").replace("px","") 
				);

			}

		},

		// set project heights
		set_shutter_heights = function() {
			shutter = $(".shutter"),
			shutter_caption = $(".shutter .caption"),
			shutter_width = shutter.width(),
			shutter_end_height = shutter_width - 
				shutter_caption.css("padding-top").replace("px","") - 
				shutter_caption.css("padding-bottom").replace("px","");

			// set some project heights
			shutter.height( shutter_width );
			shutter_caption.height( shutter_end_height );
		};


	// set heights on load
	set_header_height();
	set_shutter_heights();

	// header height on resize
	win.resize(function(){

		// set header heights
		set_header_height();

		// set project heights
		set_shutter_heights();

	});

});

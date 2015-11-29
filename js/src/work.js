
$(function(){
	
	if ( Modernizr.touch ) {

		$(".project img").on('touchstart', function(){

			$(".project.open").removeClass( "open" );

			$(this).parent(".project").addClass( "open" );

		});
		
	}

});

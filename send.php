<?php

// include phpmailer
include( "lib/phpmailer/class.phpmailer.php" );


// email validation function
function valid_email( $email ) {
	$email_valid=filter_var( $email, FILTER_VALIDATE_EMAIL);
	if ( $email_valid ) {
		return true;
	}
	return false;
}


// message validation
function valid_message( $message ) {
	$processed_message=str_replace( " ", "", $message );
	if ( !empty( $processed_message ) ) {
		return true;
	}
	return false;
}


if ( isset( $_POST["email"] ) ) {

	// check and die if either are invalid
	if ( !valid_email( $_POST["email"] ) ) die( "invalid email" );
	if ( !valid_message( $_POST["description"] ) ) die( "invalid message" );


	// message content
	$message_content = "<h2>Twoscore.biz Inquiry</h2><hr />" .
		"<p><strong>First Name:</strong><br />" . $_REQUEST["fname"] . "</p>" .
		"<p><strong>Last Name:</strong><br />".$_REQUEST["lname"] . "</p>" .
		"<p><strong>CU Name:</strong><br />".$_REQUEST["cu_name"] . "</p>" .
		"<p><strong>Title:</strong><br />".$_REQUEST["title"] . "</p>" .
		"<p><strong>Email:</strong><br />".$_REQUEST["email"] . "</p>" .
		"<p><strong>Phone:</strong><br />".$_REQUEST["phone"] . "</p>" .
		"<p><strong>Message:</strong><br />".$_REQUEST["description"] . "</p>" .
		"<hr />" . 
		"<p><small>This message was generated by twoscore.biz.</small></p>";


	// instantiate the mailer script
	$mail = new PHPMailer();
	$mail->IsSMTP();
	$mail->CharSet = 'UTF-8';

	include( 'config.php' );

	$mail->Host       = SMTPHost;
	$mail->SMTPDebug  = 0;
	$mail->SMTPAuth   = SMTPAuth;
	$mail->SMTPSecure = SMTPSecure;
	$mail->Port       = SMTPPort;
	$mail->Username   = SMTPUsername;
	$mail->Password   = SMTPPassword;

	$mail->From = 'amanda@twoscore.biz';
	$mail->FromName = 'twoscore.biz';
	$mail->addAddress( 'amanda@twoscore.biz' );

	$mail->SMTPDebug  = 0;                       // enables SMTP debug information (for testing)
	$mail->WordWrap = 50;                        // Set word wrap to 50 characters
	$mail->isHTML(true);                         // Set email format to HTML

	$mail->Subject = '[twoscore.biz] Website Inquiry';
	$mail->Body    = $message_content;
	$mail->AltBody = str_replace("<br />","
	", $message_content );

	if( !$mail->send() ) {
		die( $mail->ErrorInfo );
	} else {
		die( 'success' );
	}

}


?>
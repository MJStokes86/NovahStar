<?php 

$name = $_POST['g52-name'];
$email = $_POST['g52-email'];
$intro = $_POST['g52-subject'];
$message = $_POST['g52-message'];


$mail_to = 'michael@mjstokes.com';
$subject = 'Message from '. $name;


$body_message = 'From: ' .$name. "\n";
$body_message .= 'E-mail: ' .$email. "\n";
$body_message .= 'Subject: ' .$intro. "\n";
$body_message .= 'Message: ' .$message;

$headers = 'From: '.$email."\r\n";
$headers .= 'Replay-To: '.$email."\r\n";

$mail_status = mail($mail_to, $subject, $body_message, $headers);
header("Location: thank_you.html");



if ($mail_status) { ?>

	<script language="javascript" type="text/javascript">
		alert('Thank you for the message. We will contact you shortly.');
		history.back(1);
		
	</script>
	
	<?php 

}

else { ?>
	<script language="javascript" type="text/javascript">
		alert('Message failed. Please, send an email to michael@mjstokes.com');

		history.back(1);
	</script>
	<?php 

}

	 ?>
		 










 ?>
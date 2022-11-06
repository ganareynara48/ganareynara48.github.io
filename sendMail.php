<?php

include('./phpmailer/classes/class.phpmailer.php');

$name   = ($_POST['name']!=NULL) ? $_POST['name'] : "";
$email  = ($_POST['email']!=NULL) ? $_POST['email'] : "";
$phone  = ($_POST['phone']!=NULL) ? $_POST['phone'] : "";
$help   = ($_POST['help']!=NULL) ? $_POST['help'] : "";

$branding           = ($_POST['branding']!=NULL) ? $_POST['branding'] : "";
$social_media       = ($_POST['social_media']!=NULL) ? $_POST['social_media'] : "";
$digital_marketing  = ($_POST['digital_marketing']!=NULL) ? $_POST['digital_marketing'] : "";
$others             = ($_POST['others']!=NULL) ? $_POST['others'] : "";

$penerima   = "reynaragana@gmail.com";    
$subjek     = "I Need Your Help~";
$pesan      = "Need : " . $help . "\n" .
                "Services : " . $branding . $social_media . $digital_marketing . $others;  
$headers    = "From :" . $email;

$mail = new PHPMailer;

$mail->IsSMTP();

$mail->SMTPSecure = 'ssl';

$mail->Host = "smtp.gmail.com"; //hostname masing-masing provider email
$mail->SMTPDebug = 2;
$mail->Port = 465;
$mail->SMTPAuth = true;

$mail->Timeout = 60; // timeout pengiriman (dalam detik)
$mail->SMTPKeepAlive = true; 

$mail->Username = "ganareynara@gmail.com"; //user email
$mail->Password = "Gana6699"; //password email

$mail->SetFrom($email,"From : "); //set email pengirim

$mail->Subject = $subjek; //subyek email

$mail->AddAddress("reynaragana@gmail.com","To : "); //tujuan email

$mail->MsgHTML($pesan);

if($mail->Send()) echo json_encode(array("statusCode"=>200));
else echo "Failed to sending message";
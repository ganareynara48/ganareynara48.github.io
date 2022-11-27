<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

include('./phpmailer/Exception.php');
include('./phpmailer/PHPMailer.php');
include('./phpmailer/SMTP.php');


$name   = ($_POST['name']!=NULL) ? $_POST['name'] : "";
$email  = ($_POST['email']!=NULL) ? $_POST['email'] : "";
$phone  = ($_POST['phone']!=NULL) ? $_POST['phone'] : "";
$help   = ($_POST['help']!=NULL) ? $_POST['help'] : "";

$branding           = ($_POST['branding']!=NULL) ? $_POST['branding'] : "";
$social_media       = ($_POST['social_media']!=NULL) ? $_POST['social_media'] : "";
$digital_marketing  = ($_POST['digital_marketing']!=NULL) ? $_POST['digital_marketing'] : "";
$others             = ($_POST['others']!=NULL) ? $_POST['others'] : "";


$subjek     = "I Need Your Help~";
$pesan      = "Need : " . $help . "\n" .
                "Services : " . $branding . $social_media . $digital_marketing . $others;  
// $headers    = "From :" . $email;

$mail = new PHPMailer;
$mail->isSMTP();
$mail->Host = 'smtp.gmail.com';
$mail->Username = 'thrivedesignagency@gmail.com'; // Email Pengirim
$mail->Password = 'ABCdef123'; // Isikan dengan Password email pengirim
$mail->Port = 465;
$mail->SMTPAuth = true;
$mail->SMTPSecure = 'ssl';
// $mail->SMTPDebug = 2; // Aktifkan untuk melakukan debugging
$mail->Subject = $subjek;
$mail->Content = $pesan;
$mail->setFrom('thrivedesignagency@gmail.com', $name);
$mail->addAddress('ganareynara@gmail.com', '');
$send = $mail->Send();

if ($send) {
    echo json_encode(array("statusCode"=>200));
} else {
    echo json_encode(array("statusCode"=>402));
}
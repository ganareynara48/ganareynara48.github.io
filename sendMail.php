<?php     

$name   = ($_POST['name']!=NULL) ? $_POST['name'] : "";
$email  = ($_POST['email']!=NULL) ? $_POST['email'] : "";
$phone  = ($_POST['phone']!=NULL) ? $_POST['phone'] : "";
$help   = ($_POST['help']!=NULL) ? $_POST['help'] : "";
$services           = ($_POST['services']!=NULL) ? $_POST['services'] : "";


$subject     = "I Need Your Help~";
$message      = "Need : " . $help . "\n" .
                "Services : " . $services . "\n" .
                "Name : " . $name . "\n" .
                "Phone : " . $phone . "\n";  

$to_email = 'contact@thrivedesignagency.com';
$headers = 'From: ' . $email;

mail($to_email,$subject,$message,$headers);

echo json_encode(array("statusCode"=>200));
?>
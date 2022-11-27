<?php
    ini_set( 'display_errors', 1 );   
    error_reporting( E_ALL );    

    $name   = ($_POST['name']!=NULL) ? $_POST['name'] : "";
    $email  = ($_POST['email']!=NULL) ? $_POST['email'] : "";
    $phone  = ($_POST['phone']!=NULL) ? $_POST['phone'] : "";
    $help   = ($_POST['help']!=NULL) ? $_POST['help'] : "";

    $branding           = ($_POST['branding']!=NULL) ? $_POST['branding'] : "";
    $social_media       = ($_POST['social_media']!=NULL) ? $_POST['social_media'] : "";
    $digital_marketing  = ($_POST['digital_marketing']!=NULL) ? $_POST['digital_marketing'] : "";
    $others             = ($_POST['others']!=NULL) ? $_POST['others'] : "";


    $subject     = "I Need Your Help~";
    $message      = "Need : " . $help . "\n" .
                    "Services : " . $branding . $social_media . $digital_marketing . $others . "\n" .
                    "Name :" . $name . "\n" .
                    "Email :" . $email . "\n" .
                    "Phone :" . $phone . "\n";  

    $headers    = "From :" . $email;
   
    $to = "thrivedesignagency@domain.com";

    mail($to,$subject,$message, $headers);
        
    echo json_encode(array("statusCode"=>200));
?>
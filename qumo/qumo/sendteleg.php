<?php

/* https://api.telegram.org/bot2092522216:AAEMSA-eJ81xbL-1YRHLdtMTwEPocjWIo-0/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$token = "2092522216:AAEMSA-eJ81xbL-1YRHLdtMTwEPocjWIo-0";
$chat_id = "-605960171";
$arr = array(
    'Имя: '=> $name,
    'Email '=> $email,
    'Заказ '=> $message
);

foreach($arr as $key => $value){
    $txt .= "<b>".$key."</b> ".$value."%0A"; 
}

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('<h1>Ваша заявка отправлена</h1>');
} else {
  echo "Error";
}

?>
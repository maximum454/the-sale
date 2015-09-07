<?
$phone = trim(htmlspecialchars($_POST["phone"]));
$ch = $_POST["checkbox"];
$s=0;
foreach($ch as $value):
$s++;	
	$v.="$s - $value <br>";
endforeach;

if(!empty($phone)){

	// формируем заголовок и тело письма
 $headers  = "Content-type: text/html; charset=utf-8 \r\n"; 
 $headers .= "From: $name <$phone@phonenumber.com>\r\n"; 
 $thm = "Сообщение";
 $msg= "  
		  <strong>Телефон:</strong> $phone<br />
			<strong>$v</strong>
		  ";
$mail_to  = 'maximum@petrit.org';
 // Отправляем почтовое сообщение
 if(empty($picture)) mail($mail_to, $thm, $msg, $headers);
 echo "<div class='succes'>Спасибо! Ваша заявка принята</div>";
}else{
echo "<div class='error'>Введите номер!</div>";
}

?>
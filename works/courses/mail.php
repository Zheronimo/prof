<?php 
$recepient = 'kirichenko.e.o@gmail.com';
$sitename = 'prokurs';

$name = trim($_POST['name']);
$phone = trim($_POST['tel']);
$city = trime($_POST['cityname']);
$massege = "Имя: $name \nТелефон: $phone \nГород: $city";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $massege, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
	

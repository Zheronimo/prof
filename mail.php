<?php 
	$recepient = 'kirichenko.e.o@gmail.com';
	$sitename = 'portfolio';

	$name = trim($_POST['name']);
	$email = trim($_POST['email']);
	$massege = trime($_POST['massege']);
	$user_massege = "Имя: $name \nТелефон: $phone \nГород: $massege";

	$pagetitle = "Новая заявка с сайта \"$sitename\"";

	if (!empty($_POST['name']) AND !empty($_POST['email']) AND !empty($_POST['massege'])) {
		mail($recepient, $pagetitle, $user_massege, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
	} else {
		
	}
	
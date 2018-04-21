<?
if((isset($_POST['name'])&&$_POST['name']!="")&&(isset($_POST['phone'])&&$_POST['phone']!="")){ //Проверка отправилось ли наше поля name и не пустые ли они
    if(isset($_POST['name'])){$name=$_POST['name'];}
    if(isset($_POST['phone'])){$phone=$_POST['phone'];}
    if(isset($_POST['email'])){$email=$_POST['email'];}

    if(isset($_POST['comment'])){$comment=$_POST['comment'];}
    if(isset($_POST['diameter'])){$diam=$_POST['diameter'];
                $diameter = implode(",", $diam);}

    if(isset($_POST['question'])){$question=$_POST['question'];}

    if(isset($_POST['message'])){$message=$_POST['message'];}

    if(isset($_POST['subject'])){$subject=$_POST['subject'];};

    
        $to = 'susiewitch@gmail.com'; //Почта получателя, через запятую можно указать сколько угодно адресов
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Имя: '.$name.'</p>
                        <p>Телефон: '.$phone.'</p>
                        <p>Эл.почта: '.$email.'</p>
                        <p>Комментарий к заявке: '.$comment.'</p>
                        <p>Диаметр: '.$diameter.'</p>
                        <p>Вопрос: '.$question.'</p>
                        <p>Сообщение: '.$message.'</p>
                                               
                    </body>
                </html>'; //Текст нащего сообщения можно использовать HTML теги
        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
        $headers .= "From: Отправитель <from@example.com>\r\n"; //Наименование и почта отправителя
        mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
}

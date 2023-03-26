<?php


if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    // Validate input data here (e.g. check for empty fields, validate email format, etc.)

    // Send email
    $to = 'bojkoburgas@abv.bg';
    $headers = "From: $name <$email>";
    $body = "Subject: $subject\n\n$message";
    mail($to, $subject, $body, $headers);

    header('Location: index.html');
    exit;
}

?>

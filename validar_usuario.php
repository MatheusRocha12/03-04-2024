<?php
require_once('./conexoes.php');

$txtLogin = $_POST['txtLogin'];
$txtSenha = $_POST['txtSenha'];

echo "<br/>";
echo "<Login: $txtLogin, Senha: $txtSenha";

?>
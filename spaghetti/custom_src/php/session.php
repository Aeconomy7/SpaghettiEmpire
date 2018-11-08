<?php
session_start();

function regenerate() {
    $_SESSION['code'] = uniqid();
    $_SESSION['code_time'] = time();
}
if (empty($_SESSION['code']) || time() - $_SESSION['code_time'] > 3600)
    //if there's no code, or the code has expired
    regenerate();
echo "Your code is " . $_SESSION['code'] . " it was generated on " . date('m/d/Y h:i:s a', $_SESSION['code_time']);
?>

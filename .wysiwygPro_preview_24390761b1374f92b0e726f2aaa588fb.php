<?php
if ($_GET['randomId'] != "4N1BtU8HQMQ5VsVN5nWrLg280ZP0J5xkAiNVQGeAWQE9MTPlKiTWjAsD7CONvgG_") {
    echo "Access Denied";
    exit();
}

// display the HTML code:
echo stripslashes($_POST['wproPreviewHTML']);

?>  

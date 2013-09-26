<?php
    
    $p = $_POST["query"];

    //query using $p
    
    $stuff = array(0,1);
    print json_encode($stuff); // send in JSON format to JS
    exit;

?>
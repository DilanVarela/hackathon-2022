<?php
$post_data = $_POST;
session_start();
//Create session for display success message
$_SESSION['success'] = "$post_data[full_name], has sido inscrito exitosamente en el Hackathon Taxis Libres 2022";
//Return with focus in register 
header("Location: https://hackathon-2022.herokuapp.com/#registro-al-evento");exit();
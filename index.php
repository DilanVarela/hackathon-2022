<?php

session_start();
$success = empty($_SESSION) ? '' : $_SESSION['success'];
include('home.html');
session_destroy();
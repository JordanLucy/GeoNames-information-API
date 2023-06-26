<?php

    $executionStartTime = microtime(true);

    //Ocean API url
    $url = "http://api.geonames.org/oceanJSON?lat=" . $_REQUEST['latitude2'] . "&lng=" . $_REQUEST['longitude2'] . "&username=flightltd&style=full";

    //Initialize a cURL session
    $curl = curl_init($url);
    //Set the curl URL option
    curl_setopt($curl, CURLOPT_URL, $url);
    //This option will return data as a string instead of direct output
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

    //Execute curl and store data in a variable
    $result = curl_exec($curl);

    curl_close($curl);

    $decode = json_decode($result, true);

    $output['status']['code'] = "200";
    $output['status']['name'] = "ok";
    $output['status']['description'] = "success";
    $output['status']['returnedIn'] = intval((microtime(true) - $executionStartTime) * 1000) . " ms";
    $output['data'] = $decode;

    header('Content-Type: application/json; charset=UTF-8');

    header("Access-Control-Allow-Origin: *");

    echo json_encode($output);

?>
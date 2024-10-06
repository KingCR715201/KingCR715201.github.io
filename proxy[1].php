<?php
header("Access-Control-Allow-Origin: *"); // Allow all origins
header("Content-Type: application/json"); // Set content type to JSON

$apiKey = '67d222e6094ffefd4cc64e9dda0d8b1af3cfa7523df286177f4d49399b2d0297';
$url = 'https://api.openaq.org/v1/latest?location=Budapest%20Gilice%20t%C3%A9r&parameter=pm25&parameter=pm10&parameter=co&parameter=no2&parameter=o3';

// Use cURL to fetch the data from the OpenAQ API
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'X-API-Key: ' . $apiKey,
    'Content-Type: application/json'
]);

$response = curl_exec($ch);
if ($response === false) {
    // Log cURL error
    $error = curl_error($ch);
    echo json_encode(['error' => 'cURL error: ' . $error]);
    exit;
}

curl_close($ch);

// Check if the response is valid JSON
$jsonResponse = json_decode($response);
if (json_last_error() !== JSON_ERROR_NONE) {
    echo json_encode(['error' => 'Invalid JSON response: ' . json_last_error_msg()]);
    exit;
}

// Return the response from OpenAQ
echo $response;
?>

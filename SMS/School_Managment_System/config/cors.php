<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Laravel CORS Options
    |--------------------------------------------------------------------------
    |
    | The following settings are used to configure Cross-Origin Resource Sharing
    | (CORS) for your application. These settings can be adjusted to
    | meet the needs of your specific use case.
    |
    */

    'paths' => ['api/*', 'register', 'login'], // Add your specific paths here

    'allowed_methods' => ['*'], // All methods are allowed

    'allowed_origins' => ['*'], // All origins are allowed

    'allowed_origins_patterns' => ['*'],

    'allowed_headers' => ['*'], // All headers are allowed

    'exposed_headers' => [],

    'max_age' => 0,

    'supports_credentials' => false,

];

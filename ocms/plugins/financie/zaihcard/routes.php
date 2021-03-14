<?php
 use Financie\Zaihcard\Models\Zaihcard;

Route::get('api/zaihcard', function(){

    $zaihcard = Zaihcard::all();

    return $zaihcard;
});

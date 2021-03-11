<?php
 use Financie\Zaicard\Models\Zaicard;

Route::get('api/zaicard', function(){

    $zaicard = Zaicard::all();

    return $zaicard;
});
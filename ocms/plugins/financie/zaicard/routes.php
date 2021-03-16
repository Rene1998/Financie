<?php
 use Financie\Zaicard\Models\ZAICard;

Route::get('api/zaicard', function(){

    $zaicard = ZAICard::all();

    return $zaicard;
});
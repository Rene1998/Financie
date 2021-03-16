<?php
 use Financie\Zaihcard\Models\ZAIHCard;

Route::get('api/zaihcard', function(){

    $zaihcard = ZAIHCard::all();

    return $zaihcard;
});

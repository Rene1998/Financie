<?php
 use Financie\Zicard\Models\ZICard;

Route::get('api/zicard', function(){

    $zicard = ZICard::all();

    return $zicard;
});

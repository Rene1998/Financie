<?php
 use Financie\Ztcard\Models\ZTCard;

Route::get('api/ztcard', function(){

    $ztcard = ZTCard::all();

    return $ztcard;
});
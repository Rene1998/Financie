<?php
 use Financie\Ztcard\Models\Ztcard;

Route::get('api/ztcard', function(){

    $ztcard = Ztcard::all();

    return $ztcard;
});
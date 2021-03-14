<?php
 use Financie\Zicard\Models\Zicard;

Route::get('api/zicard', function(){

    $zicard = Zicard::all();

    return $zicard;
});

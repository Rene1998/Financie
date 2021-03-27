<?php

use Financie\Linkcard\Models\Linkcard;

Route::get('api/linkCard', function(){

    $linkCard = Linkcard::all();

    return $linkCard;
});
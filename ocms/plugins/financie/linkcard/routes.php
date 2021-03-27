<?php

use Financie\Linkcard\Models\LinkCard;

Route::get('api/linkCard', function(){

    $linkCard = LinkCard::all();

    return $linkCard;
});
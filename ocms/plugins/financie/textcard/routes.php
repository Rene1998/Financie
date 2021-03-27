<?php
 use Financie\Textcard\Models\textCard;

Route::get('api/textCard', function(){

    $textCard = textCard::all();

    return $textCard;
});
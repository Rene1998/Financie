<?php
 use Financie\Textcard\Models\TextCard;

Route::get('api/textCard', function(){

    $textCard = TextCard::all();

    return $textCard;
});
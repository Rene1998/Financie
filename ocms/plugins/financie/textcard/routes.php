<?php
 use Financie\Textcard\Models\Textcard;

Route::get('api/textCard', function(){

    $textCard = Textcard::all();

    return $textCard;
});
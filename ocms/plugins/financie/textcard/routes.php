<?php
 use Financie\Textcard\Models\Textcard;

Route::get('api/textCard', function(){
    return $textCard = Textcard::all();
});
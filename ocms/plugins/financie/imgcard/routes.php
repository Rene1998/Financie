<?php
 use Financie\Imgcard\Models\imgCard;

Route::get('api/imgCard', function(){

    $imgCard = imgCard::all();

    return $imgCard;
});

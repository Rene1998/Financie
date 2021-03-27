<?php
 use Financie\Imgcard\Models\ImgCard;

Route::get('api/imgCard', function(){

    $imgCard = ImgCard::all();

    return $imgCard;
});

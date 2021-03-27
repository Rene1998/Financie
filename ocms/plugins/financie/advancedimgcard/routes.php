<?php
 use Financie\Advancedimgcard\Models\advancedImgCard;

Route::get('api/advancedImgCard', function(){

    $advancedImgCard = advancedImgCard::all();

    return $advancedImgCard;
});
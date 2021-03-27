<?php
 use Financie\Advancedimgcard\Models\AdvancedImgCard;

Route::get('api/advancedImgCard', function(){

    $advancedImgCard = AdvancedImgCard::all();

    return $advancedImgCard;
});
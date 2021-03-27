<?php
 use Financie\Advancedimgcard\Models\Advancedimgcard;

Route::get('api/advancedImgCard', function(){

    $advancedImgCard = Advancedimgcard::all();

    return $advancedImgCard;
});
<?php
 use Financie\Advancedimghomecard\Models\advancedImgHomeCard;

Route::get('api/advancedImgHomeCard', function(){

    $advancedImgHomeCard = advancedImgHomeCard::all();

    return $advancedImgHomeCard;
});

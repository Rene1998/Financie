<?php
 use Financie\Advancedimghomecard\Models\AdvancedImgHomeCard;

Route::get('api/advancedImgHomeCard', function(){

    $advancedImgHomeCard = AdvancedImgHomeCard::all();

    return $advancedImgHomeCard;
});

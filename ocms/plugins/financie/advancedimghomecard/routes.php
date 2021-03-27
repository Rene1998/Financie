<?php
 use Financie\Advancedimghomecard\Models\Advancedimghomecard;

Route::get('api/advancedImgHomeCard', function(){

    $advancedImgHomeCard = Advancedimghomecard::all();

    return $advancedImgHomeCard;
});

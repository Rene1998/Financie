<?php
 use Financie\Advancedimghomecard\Models\Advancedimghomecard;

Route::get('api/advancedImgHomeCard', function(){
    return $advancedImgHomeCard = Advancedimghomecard::all();
});

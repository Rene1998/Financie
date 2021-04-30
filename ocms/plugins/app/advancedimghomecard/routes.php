<?php
 use App\Advancedimghomecard\Models\Advancedimghomecard;

Route::get('api/advancedImgHomeCard', function(){
    return $advancedImgHomeCard = Advancedimghomecard::all();
});

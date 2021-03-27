<?php
 use Financie\Imgcard\Models\Imgcard;

Route::get('api/imgCard', function(){

    $imgCard = Imgcard::all();

    return $imgCard;
});

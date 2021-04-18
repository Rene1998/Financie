<?php
 use Financie\Imgcard\Models\Imgcard;
 use Financie\Imgcard\Models\Category;

Route::get('api/imgCard', function(){

    $imgCard = Imgcard::all();

    return $imgCard;
});

Route::get('api/imgCard/categories', function(){
    return Category::all();
});


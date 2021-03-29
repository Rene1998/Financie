<?php
 use Financie\Advancedimgcard\Models\Advancedimgcard;
 use Financie\Advancedimgcard\Models\Category;

Route::get('api/advancedImgCard', function(){

    $advancedImgCard = Advancedimgcard::all();

    return $advancedImgCard;
});

Route::get('api/categories', function(){
    return Category::all();
});

Route::get('api/categories/{id}', function($id){
    return Category::findOrFail($id);
});


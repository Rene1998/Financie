<?php
 use App\Advancedimgcard\Models\Advancedimgcard;
 use App\Advancedimgcard\Models\Category;
 use App\Advancedimgcard\Models\Year_category;

Route::get('api/advancedImgCard', function(){
    return $advancedImgCard = Advancedimgcard::all();
});

Route::get('api/categories', function(){
    return Category::all();
});

Route::get('api/categories/{id}', function($id){
    return Category::findOrFail($id);
});

Route::get('api/categories/slug/{slug}', function($slug){
    return Category::where('slug', $slug)->firstOrFail();
});


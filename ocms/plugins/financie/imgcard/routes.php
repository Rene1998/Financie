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

Route::get('api/blog/categories/{id}', function($id){
    return Category::findOrFail($id);
});
Route::get('api/blog/categories/slug/{slug}', function($slug){
    return Category::where('slug', $slug)->firstOrFail();
});

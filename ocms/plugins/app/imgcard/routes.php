<?php
 use App\Imgcard\Models\Imgcard;
 use App\Imgcard\Models\Category;

Route::get('api/imgCard', function(){
    return $imgCard = Imgcard::all();
});

Route::get('api/imgCard/categories', function(){
    return Category::all();
});

Route::get('api/imgCard/categories/{id}', function($id){
    return Category::findOrFail($id);
});

Route::get('api/imgCard/categories/slug/{slug}', function($slug){
    return Category::where('slug', $slug)->firstOrFail();
});
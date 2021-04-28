<?php

use Financie\Linkcard\Models\Linkcard;
use Financie\Linkcard\Models\Category;

Route::get('api/linkCard', function(){
    return $linkCard = Linkcard::all();
});

Route::get('api/linkCard/categories', function(){
    return Category::all();
});

Route::get('api/linkCard/categories/{id}', function($id){
    return Category::findOrFail($id);
});

Route::get('api/linkCard/categories/slug/{slug}', function($slug){
    return Category::where('slug', $slug)->firstOrFail();
});

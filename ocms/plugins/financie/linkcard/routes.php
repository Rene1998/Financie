<?php

use Financie\Linkcard\Models\Linkcard;
use Financie\Linkcard\Models\Category;

Route::get('api/linkCard', function(){

    $linkCard = Linkcard::all();

    return $linkCard;
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

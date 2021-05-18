<?php
 use App\Blog\Models\Blog;
 use App\Blog\Http\Resources\BlogResource;
 use App\Blog\Models\Category;

Route::get('api/blog', function(){
    return $blog = BlogResource::collection(Blog::all());
});

Route::get('api/blog/categories', function(){
    return Category::all();
});

Route::get('api/blog/categories/{id}', function($id){
    return Category::findOrFail($id);
});
Route::get('api/blog/categories/slug/{slug}', function($slug){
    return Category::where('slug', $slug)->firstOrFail();
});


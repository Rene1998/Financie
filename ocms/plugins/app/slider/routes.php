<?php
 use App\Slider\Models\Slider;

Route::get('api/slider', function(){
    return $slider = Slider::all();
});
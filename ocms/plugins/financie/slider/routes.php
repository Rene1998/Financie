<?php
 use Financie\Slider\Models\Slider;

Route::get('api/slider', function(){

    $slider = Slider::all();

    return $slider;
});
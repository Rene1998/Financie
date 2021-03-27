<?php
 use Financie\Slider\Models\slider;

Route::get('api/slider', function(){

    $slider = slider::all();

    return $slider;
});
<?php
 use Financie\Zslider\Models\ZSlider;

Route::get('api/zslider', function(){

    $zslider = ZSlider::all();

    return $zslider;
});
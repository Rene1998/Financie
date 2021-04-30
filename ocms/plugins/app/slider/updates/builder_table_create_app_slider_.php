<?php namespace App\Slider\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateAppSlider extends Migration
{
    public function up()
    {
        Schema::create('app_slider_', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id')->unsigned();
            $table->text('content');
            $table->timestamps();
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('app_slider_');
    }
}

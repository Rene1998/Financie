<?php namespace Financie\Slider\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateFinancieSlider extends Migration
{
    public function up()
    {
        Schema::create('financie_slider_', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id')->unsigned();
            $table->text('content');
            $table->timestamps();
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('financie_slider_');
    }
}

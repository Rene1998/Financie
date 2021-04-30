<?php namespace App\Advancedimgcard\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateAppAdvancedimgcardCategories extends Migration
{
    public function up()
    {
        Schema::create('app_advancedimgcard_categories', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id')->unsigned();
            $table->string('category_title');
            $table->string('slug');
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('app_advancedimgcard_categories');
    }
}

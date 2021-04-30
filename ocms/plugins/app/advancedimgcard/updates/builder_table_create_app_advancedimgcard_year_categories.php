<?php namespace App\Advancedimgcard\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateAppAdvancedimgcardYearCategories extends Migration
{
    public function up()
    {
        Schema::create('app_advancedimgcard_year_categories', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->string('category_title');
            $table->string('slug');
            $table->integer('category_id');
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('app_advancedimgcard_year_categories');
    }
}

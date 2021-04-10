<?php namespace Financie\Advancedimgcard\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateFinancieAdvancedimgcardYearCategories extends Migration
{
    public function up()
    {
        Schema::create('financie_advancedimgcard_year_categories', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->string('category_title');
            $table->string('slug');
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('financie_advancedimgcard_year_categories');
    }
}

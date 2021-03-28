<?php namespace Financie\Linkcard\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateFinancieLinkcardCategories extends Migration
{
    public function up()
    {
        Schema::create('financie_linkcard_categories', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id')->unsigned();
            $table->string('category_title');
            $table->string('slug');
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('financie_linkcard_categories');
    }
}

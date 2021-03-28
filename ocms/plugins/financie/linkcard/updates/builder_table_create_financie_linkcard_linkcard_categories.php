<?php namespace Financie\Linkcard\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateFinancieLinkcardLinkcardCategories extends Migration
{
    public function up()
    {
        Schema::create('financie_linkcard_linkcard_categories', function($table)
        {
            $table->engine = 'InnoDB';
            $table->integer('linkcard_id');
            $table->integer('category_id');
            $table->primary(['linkcard_id','category_id']);
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('financie_linkcard_linkcard_categories');
    }
}

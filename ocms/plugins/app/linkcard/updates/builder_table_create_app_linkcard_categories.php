<?php namespace App\Linkcard\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateAppLinkcardCategories extends Migration
{
    public function up()
    {
        Schema::create('app_linkcard_categories', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id')->unsigned();
            $table->string('category_title');
            $table->string('slug');
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('app_linkcard_categories');
    }
}

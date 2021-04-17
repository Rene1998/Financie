<?php namespace Financie\Blog\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableDeleteFinancieBlogCategories extends Migration
{
    public function up()
    {
        Schema::dropIfExists('financie_blog_categories');
    }
    
    public function down()
    {
        Schema::create('financie_blog_categories', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->string('slug', 255);
            $table->string('category_title', 255);
        });
    }
}

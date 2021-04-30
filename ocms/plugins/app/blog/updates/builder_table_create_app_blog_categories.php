<?php namespace App\Blog\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateAppBlogCategories extends Migration
{
    public function up()
    {
        Schema::create('app_blog_categories', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id')->unsigned();
            $table->string('category_title');
            $table->string('slug');
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('app_blog_categories');
    }
}

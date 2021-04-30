<?php namespace App\Blog\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateAppBlog extends Migration
{
    public function up()
    {
        Schema::create('app_blog_', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id')->unsigned();
            $table->string('title');
            $table->text('content');
            $table->string('slug');
            $table->timestamp('created_at')->nullable();
            $table->timestamp('updated_at')->nullable();
            $table->integer('time');
            $table->integer('category_id')->index();
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('app_blog_');
    }
}

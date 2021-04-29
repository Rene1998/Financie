<?php namespace Financie\Blog\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateFinancieBlog5 extends Migration
{
    public function up()
    {
        Schema::table('financie_blog_', function($table)
        {
            $table->integer('category_id')->nullable(false)->change();
        });
    }
    
    public function down()
    {
        Schema::table('financie_blog_', function($table)
        {
            $table->integer('category_id')->nullable()->change();
        });
    }
}

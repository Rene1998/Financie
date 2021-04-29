<?php namespace Financie\Blog\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateFinancieBlog6 extends Migration
{
    public function up()
    {
        Schema::table('financie_blog_', function($table)
        {
            $table->integer('category_id')->index()->change();
        });
    }
    
    public function down()
    {
        Schema::table('financie_blog_', function($table)
        {
            $table->integer('category_id')->index(false)->change();
        });
    }
}
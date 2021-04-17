<?php namespace Financie\Blog\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateFinancieBlogCategories extends Migration
{
    public function up()
    {
        Schema::table('financie_blog_categories', function($table)
        {
            $table->renameColumn('title', 'category_title');
        });
    }
    
    public function down()
    {
        Schema::table('financie_blog_categories', function($table)
        {
            $table->renameColumn('category_title', 'title');
        });
    }
}

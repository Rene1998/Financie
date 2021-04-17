<?php namespace Financie\Blog\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateFinancieBlog2 extends Migration
{
    public function up()
    {
        Schema::table('financie_blog_', function($table)
        {
            $table->string('category_id')->nullable();
        });
    }
    
    public function down()
    {
        Schema::table('financie_blog_', function($table)
        {
            $table->dropColumn('category_id');
        });
    }
}

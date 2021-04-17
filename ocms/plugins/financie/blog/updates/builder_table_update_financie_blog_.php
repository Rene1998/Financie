<?php namespace Financie\Blog\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateFinancieBlog extends Migration
{
    public function up()
    {
        Schema::table('financie_blog_', function($table)
        {
            $table->string('time')->nullable();
        });
    }
    
    public function down()
    {
        Schema::table('financie_blog_', function($table)
        {
            $table->dropColumn('time');
        });
    }
}

<?php namespace Financie\Blog\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateFinancieBlog4 extends Migration
{
    public function up()
    {
        Schema::table('financie_blog_', function($table)
        {
            $table->text('content')->nullable(false)->unsigned(false)->default(null)->change();
        });
    }
    
    public function down()
    {
        Schema::table('financie_blog_', function($table)
        {
            $table->string('content', 255)->nullable(false)->unsigned(false)->default(null)->change();
        });
    }
}

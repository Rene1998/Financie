<?php namespace Financie\Blog\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateFinancieBlog7 extends Migration
{
    public function up()
    {
        Schema::table('financie_blog_', function($table)
        {
            $table->integer('time')->nullable(false)->unsigned(false)->default(null)->change();
        });
    }
    
    public function down()
    {
        Schema::table('financie_blog_', function($table)
        {
            $table->string('time', 255)->nullable()->unsigned(false)->default(null)->change();
        });
    }
}

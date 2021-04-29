<?php namespace Financie\Linkcard\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateFinancieLinkcard2 extends Migration
{
    public function up()
    {
        Schema::table('financie_linkcard_', function($table)
        {
            $table->integer('category_id')->nullable(false)->change();
        });
    }
    
    public function down()
    {
        Schema::table('financie_linkcard_', function($table)
        {
            $table->integer('category_id')->nullable()->change();
        });
    }
}

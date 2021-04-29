<?php namespace Financie\Linkcard\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateFinancieLinkcard3 extends Migration
{
    public function up()
    {
        Schema::table('financie_linkcard_', function($table)
        {
            $table->integer('time')->nullable(false)->unsigned(false)->default(null)->change();
        });
    }
    
    public function down()
    {
        Schema::table('financie_linkcard_', function($table)
        {
            $table->string('time', 255)->nullable(false)->unsigned(false)->default(null)->change();
        });
    }
}

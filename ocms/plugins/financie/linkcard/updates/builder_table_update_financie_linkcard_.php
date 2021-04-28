<?php namespace Financie\Linkcard\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateFinancieLinkcard extends Migration
{
    public function up()
    {
        Schema::table('financie_linkcard_', function($table)
        {
            $table->text('content')->nullable(false)->unsigned(false)->default(null)->change();
        });
    }
    
    public function down()
    {
        Schema::table('financie_linkcard_', function($table)
        {
            $table->string('content')->nullable(false)->unsigned(false)->default(null)->change();
        });
    }
}

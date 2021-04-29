<?php namespace Financie\Textcard\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateFinancieTextcard extends Migration
{
    public function up()
    {
        Schema::table('financie_textcard_', function($table)
        {
            $table->integer('time')->nullable(false)->unsigned(false)->default(null)->change();
        });
    }
    
    public function down()
    {
        Schema::table('financie_textcard_', function($table)
        {
            $table->string('time')->nullable(false)->unsigned(false)->default(null)->change();
        });
    }
}

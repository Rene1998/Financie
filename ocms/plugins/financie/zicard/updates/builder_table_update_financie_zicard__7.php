<?php namespace Financie\Zicard\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateFinancieZicard7 extends Migration
{
    public function up()
    {
        Schema::table('financie_zicard_', function($table)
        {
            $table->string('image')->nullable();
        });
    }
    
    public function down()
    {
        Schema::table('financie_zicard_', function($table)
        {
            $table->dropColumn('image');
        });
    }
}

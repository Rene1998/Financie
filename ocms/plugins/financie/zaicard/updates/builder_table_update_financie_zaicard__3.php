<?php namespace Financie\Zaicard\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateFinancieZaicard3 extends Migration
{
    public function up()
    {
        Schema::table('financie_zaicard_', function($table)
        {
            $table->dropColumn('doc1');
        });
    }
    
    public function down()
    {
        Schema::table('financie_zaicard_', function($table)
        {
            $table->string('doc1', 255)->nullable();
        });
    }
}

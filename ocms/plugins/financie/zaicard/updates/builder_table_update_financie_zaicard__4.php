<?php namespace Financie\Zaicard\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateFinancieZaicard4 extends Migration
{
    public function up()
    {
        Schema::table('financie_zaicard_', function($table)
        {
            $table->dropColumn('doc2');
        });
    }
    
    public function down()
    {
        Schema::table('financie_zaicard_', function($table)
        {
            $table->string('doc2', 255)->nullable();
        });
    }
}

<?php namespace Financie\Zaicard\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateFinancieZaicard2 extends Migration
{
    public function up()
    {
        Schema::table('financie_zaicard_', function($table)
        {
            $table->dropColumn('video');
        });
    }
    
    public function down()
    {
        Schema::table('financie_zaicard_', function($table)
        {
            $table->string('video', 255)->nullable();
        });
    }
}

<?php namespace Financie\Zaicard\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateFinancieZaicard5 extends Migration
{
    public function up()
    {
        Schema::table('financie_zaicard_', function($table)
        {
            $table->string('image')->nullable();
        });
    }
    
    public function down()
    {
        Schema::table('financie_zaicard_', function($table)
        {
            $table->dropColumn('image');
        });
    }
}

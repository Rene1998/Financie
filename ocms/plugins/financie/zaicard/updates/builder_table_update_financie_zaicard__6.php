<?php namespace Financie\Zaicard\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateFinancieZaicard6 extends Migration
{
    public function up()
    {
        Schema::table('financie_zaicard_', function($table)
        {
            $table->string('image')->nullable(false)->default('null')->change();
        });
    }
    
    public function down()
    {
        Schema::table('financie_zaicard_', function($table)
        {
            $table->string('image')->nullable()->default(null)->change();
        });
    }
}

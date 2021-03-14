<?php namespace Financie\Zaihcard\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateFinancieZaihcard2 extends Migration
{
    public function up()
    {
        Schema::table('financie_zaihcard_', function($table)
        {
            $table->string('image', 255)->nullable(false)->default('null')->change();
        });
    }
    
    public function down()
    {
        Schema::table('financie_zaihcard_', function($table)
        {
            $table->string('image', 255)->nullable()->default(null)->change();
        });
    }
}

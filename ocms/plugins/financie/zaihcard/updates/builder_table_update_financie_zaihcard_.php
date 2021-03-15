<?php namespace Financie\Zaihcard\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateFinancieZaihcard extends Migration
{
    public function up()
    {
        Schema::table('financie_zaihcard_', function($table)
        {
            $table->string('image')->nullable()->change();
        });
    }
    
    public function down()
    {
        Schema::table('financie_zaihcard_', function($table)
        {
            $table->string('image')->nullable(false)->change();
        });
    }
}

<?php namespace Financie\Zaicard\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateFinancieZaicard extends Migration
{
    public function up()
    {
        Schema::table('financie_zaicard_', function($table)
        {
            $table->string('doc1')->nullable()->change();
            $table->string('doc2')->nullable()->change();
            $table->string('video')->nullable()->change();
        });
    }
    
    public function down()
    {
        Schema::table('financie_zaicard_', function($table)
        {
            $table->string('doc1')->nullable(false)->change();
            $table->string('doc2')->nullable(false)->change();
            $table->string('video')->nullable(false)->change();
        });
    }
}

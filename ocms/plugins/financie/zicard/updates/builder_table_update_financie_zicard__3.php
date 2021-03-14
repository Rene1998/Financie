<?php namespace Financie\Zicard\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateFinancieZicard3 extends Migration
{
    public function up()
    {
        Schema::table('financie_zicard_', function($table)
        {
            $table->string('image', 255)->nullable(false)->default('null')->change();
        });
    }
    
    public function down()
    {
        Schema::table('financie_zicard_', function($table)
        {
            $table->string('image', 255)->nullable()->default(null)->change();
        });
    }
}

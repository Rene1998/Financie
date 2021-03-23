<?php namespace Financie\Zslider\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateFinancieZslider extends Migration
{
    public function up()
    {
        Schema::table('financie_zslider_', function($table)
        {
            $table->string('content', 56)->change();
        });
    }
    
    public function down()
    {
        Schema::table('financie_zslider_', function($table)
        {
            $table->string('content')->change();
        });
    }
}

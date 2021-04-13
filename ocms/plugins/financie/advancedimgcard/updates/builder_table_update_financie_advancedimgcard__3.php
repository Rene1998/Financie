<?php namespace Financie\Advancedimgcard\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateFinancieAdvancedimgcard3 extends Migration
{
    public function up()
    {
        Schema::table('financie_advancedimgcard_', function($table)
        {
            $table->string('type')->nullable();
        });
    }
    
    public function down()
    {
        Schema::table('financie_advancedimgcard_', function($table)
        {
            $table->dropColumn('type');
        });
    }
}

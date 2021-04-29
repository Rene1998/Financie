<?php namespace Financie\Advancedimgcard\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateFinancieAdvancedimgcard6 extends Migration{

public function up()
{
    Schema::table('financie_advancedimgcard_', function($table)
    {
        $table->integer('year_category_id')->index()->change();
    });
}

public function down()
{
    Schema::table('financie_advancedimgcard_', function($table)
    {
        $table->integer('year_category_id')->index(false)->change();
    });
}
}
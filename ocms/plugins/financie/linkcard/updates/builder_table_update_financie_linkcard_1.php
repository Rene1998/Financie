<?php namespace Financie\Advancedimgcard\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateFinancieLinkcard1 extends Migration{

public function up()
{
    Schema::table('financie_linkcard_', function($table)
    {
        $table->integer('category_id')->index()->change();
    });
}

public function down()
{
    Schema::table('financie_linkcard_', function($table)
    {
        $table->integer('category_id')->index(false)->change();
    });
}
}
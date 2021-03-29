<?php namespace Financie\Advancedimgcard\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateFinancieAdvancedimgcard extends Migration
{
    public function up()
    {
        Schema::table('financie_advancedimgcard_', function($table)
        {
            $table->renameColumn('categories_id', 'category_id');
        });
    }
    
    public function down()
    {
        Schema::table('financie_advancedimgcard_', function($table)
        {
            $table->renameColumn('category_id', 'categories_id');
        });
    }
}

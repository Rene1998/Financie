<?php namespace Financie\Advancedimgcard\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateFinancieAdvancedimgcardYearCategories extends Migration
{
    public function up()
    {
        Schema::table('financie_advancedimgcard_year_categories', function($table)
        {
            $table->integer('category_id')->nullable();
        });
    }
    
    public function down()
    {
        Schema::table('financie_advancedimgcard_year_categories', function($table)
        {
            $table->dropColumn('category_id');
        });
    }
}

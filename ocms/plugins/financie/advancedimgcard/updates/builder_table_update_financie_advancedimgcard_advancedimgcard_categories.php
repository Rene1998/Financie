<?php namespace Financie\Advancedimgcard\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateFinancieAdvancedimgcardAdvancedimgcardCategories extends Migration
{
    public function up()
    {
        Schema::table('financie_advancedimgcard_advancedimgcard_categories', function($table)
        {
            $table->dropPrimary(['card_id','category_id']);
            $table->renameColumn('card_id', 'advancedimgcard_id');
            $table->primary(['advancedimgcard_id','category_id']);
        });
    }
    
    public function down()
    {
        Schema::table('financie_advancedimgcard_advancedimgcard_categories', function($table)
        {
            $table->dropPrimary(['advancedimgcard_id','category_id']);
            $table->renameColumn('advancedimgcard_id', 'card_id');
            $table->primary(['card_id','category_id']);
        });
    }
}

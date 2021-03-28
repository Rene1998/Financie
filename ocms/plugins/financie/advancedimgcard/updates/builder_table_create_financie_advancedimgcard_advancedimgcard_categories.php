<?php namespace Financie\Advancedimgcard\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateFinancieAdvancedimgcardAdvancedimgcardCategories extends Migration
{
    public function up()
    {
        Schema::create('financie_advancedimgcard_advancedimgcard_categories', function($table)
        {
            $table->engine = 'InnoDB';
            $table->integer('card_id');
            $table->integer('category_id');
            $table->primary(['card_id','category_id']);
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('financie_advancedimgcard_advancedimgcard_categories');
    }
}

<?php namespace Financie\Imgcard\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateFinancieImgcardImgcardCategories4 extends Migration
{
    public function up()
    {
        Schema::table('financie_imgcard_imgcard_categories', function($table)
        {
            $table->primary(['imgcard_id','category_id']);
        });
    }
    
    public function down()
    {
        Schema::table('financie_imgcard_imgcard_categories', function($table)
        {
            $table->dropPrimary(['imgcard_id','category_id']);
        });
    }
}

<?php namespace Financie\Imgcard\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateFinancieImgcardImgcardCategories2 extends Migration
{
    public function up()
    {
        Schema::table('financie_imgcard_imgcard_categories', function($table)
        {
            $table->dropColumn('categories_id');
        });
    }
    
    public function down()
    {
        Schema::table('financie_imgcard_imgcard_categories', function($table)
        {
            $table->integer('categories_id');
        });
    }
}

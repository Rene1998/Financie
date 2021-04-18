<?php namespace Financie\Imgcard\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateFinancieImgcardImgcardCategories extends Migration
{
    public function up()
    {
        Schema::table('financie_imgcard_imgcard_categories', function($table)
        {
            $table->integer('category_id')->nullable();
            $table->primary(['imgcard_id','categories_id']);
        });
    }
    
    public function down()
    {
        Schema::table('financie_imgcard_imgcard_categories', function($table)
        {
            $table->dropPrimary(['imgcard_id','categories_id']);
            $table->dropColumn('category_id');
        });
    }
}

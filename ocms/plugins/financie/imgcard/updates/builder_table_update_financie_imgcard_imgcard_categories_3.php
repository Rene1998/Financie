<?php namespace Financie\Imgcard\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateFinancieImgcardImgcardCategories3 extends Migration
{
    public function up()
    {
        Schema::table('financie_imgcard_imgcard_categories', function($table)
        {
            $table->integer('category_id')->nullable(false)->change();
            $table->primary(['imgcard_id','category_id']);
        });
    }
    
    public function down()
    {
        Schema::table('financie_imgcard_imgcard_categories', function($table)
        {
            $table->dropPrimary(['imgcard_id','category_id']);
            $table->integer('category_id')->nullable()->change();
        });
    }
}

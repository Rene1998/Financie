<?php namespace Financie\Imgcard\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableDeleteFinancieImgcardImgcardCategories2 extends Migration
{
    public function up()
    {
        Schema::dropIfExists('financie_imgcard_imgcard_categories');
    }
    
    public function down()
    {
        Schema::create('financie_imgcard_imgcard_categories', function($table)
        {
            $table->engine = 'InnoDB';
            $table->integer('imgcard_id');
            $table->integer('category_id');
        });
    }
}

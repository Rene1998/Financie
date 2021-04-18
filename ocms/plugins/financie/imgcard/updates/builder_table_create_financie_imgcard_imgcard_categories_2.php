<?php namespace Financie\Imgcard\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateFinancieImgcardImgcardCategories2 extends Migration
{
    public function up()
    {
        Schema::create('financie_imgcard_imgcard_categories', function($table)
        {
            $table->engine = 'InnoDB';
            $table->integer('imgcard_id');
            $table->integer('categories_id');
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('financie_imgcard_imgcard_categories');
    }
}

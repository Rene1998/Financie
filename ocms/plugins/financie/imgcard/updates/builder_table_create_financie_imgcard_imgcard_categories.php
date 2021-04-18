<?php namespace Financie\Imgcard\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateFinancieImgcardImgcardCategories extends Migration
{
    public function up()
    {
        Schema::create('financie_imgcard_imgcard_categories', function($table)
        {
            $table->engine = 'InnoDB';
            $table->integer('imgcard_id');
            $table->integer('category_id');
            $table->primary(['imgcard_id','category_id']);
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('financie_imgcard_imgcard_categories');
    }
}

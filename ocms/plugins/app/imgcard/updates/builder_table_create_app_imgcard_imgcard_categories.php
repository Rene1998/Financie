<?php namespace App\Imgcard\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateAppImgcardImgcardCategories extends Migration
{
    public function up()
    {
        Schema::create('app_imgcard_imgcard_categories', function($table)
        {
            $table->engine = 'InnoDB';
            $table->integer('imgcard_id');
            $table->integer('category_id');
            $table->primary(['imgcard_id','category_id']);
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('app_imgcard_imgcard_categories');
    }
}

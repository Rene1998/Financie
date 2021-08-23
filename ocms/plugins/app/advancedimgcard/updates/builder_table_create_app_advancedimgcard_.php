<?php namespace App\Advancedimgcard\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateAppAdvancedimgcard extends Migration
{
    public function up()
    {
        Schema::create('app_advancedimgcard_', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id')->unsigned();
            $table->string('title');
            $table->text('content');
            $table->string('doc1_link');
            $table->string('doc2_link');
            $table->string('video_link');
            $table->string('video_show');
            $table->timestamp('created_at')->nullable();
            $table->timestamp('updated_at')->nullable();
            $table->string('type');
            $table->integer('category_id')->index();
            $table->integer('year_category_id')->nullable()->index();

        });
    }
    
    public function down()
    {
        Schema::dropIfExists('app_advancedimgcard_');
    }
}

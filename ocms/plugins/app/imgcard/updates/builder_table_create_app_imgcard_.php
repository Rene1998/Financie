<?php namespace App\Imgcard\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateAppImgcard extends Migration
{
    public function up()
    {
        Schema::create('app_imgcard_', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id')->unsigned();
            $table->string('title');
            $table->text('content');
            $table->timestamps();
            $table->integer('time');
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('app_imgcard_');
    }
}

<?php namespace Financie\Imgcard\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateFinancieImgcard extends Migration
{
    public function up()
    {
        Schema::create('financie_imgcard_', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id')->unsigned();
            $table->string('title');
            $table->text('content');
            $table->timestamps();
            $table->string('time');
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('financie_imgcard_');
    }
}

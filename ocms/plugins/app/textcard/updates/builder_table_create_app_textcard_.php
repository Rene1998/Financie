<?php namespace App\Textcard\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateAppTextcard extends Migration
{
    public function up()
    {
        Schema::create('app_textcard_', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id')->unsigned();
            $table->text('content');
            $table->timestamp('created_at')->nullable();
            $table->timestamp('updated_at')->nullable();
            $table->integer('time');
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('app_textcard_');
    }
}

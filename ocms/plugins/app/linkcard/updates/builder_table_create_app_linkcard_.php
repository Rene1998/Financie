<?php namespace App\Linkcard\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateAppLinkcard extends Migration
{
    public function up()
    {
        Schema::create('app_linkcard_', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id')->unsigned();
            $table->text('content');
            $table->timestamp('created_at')->nullable();
            $table->timestamp('updated_at')->nullable();
            $table->integer('time');
            $table->integer('category_id')->index();
            $table->string('link');
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('app_linkcard_');
    }
}

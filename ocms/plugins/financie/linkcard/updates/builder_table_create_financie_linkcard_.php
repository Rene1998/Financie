<?php namespace Financie\Linkcard\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateFinancieLinkcard extends Migration
{
    public function up()
    {
        Schema::create('financie_linkcard_', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id')->unsigned();
            $table->string('content');
            $table->timestamp('created_at')->nullable();
            $table->timestamp('updated_at')->nullable();
            $table->string('time');
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('financie_linkcard_');
    }
}

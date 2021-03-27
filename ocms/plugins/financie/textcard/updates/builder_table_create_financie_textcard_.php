<?php namespace Financie\Textcard\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateFinancieTextcard extends Migration
{
    public function up()
    {
        Schema::create('financie_textcard_', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id')->unsigned();
            $table->text('content');
            $table->timestamp('created_at')->nullable();
            $table->timestamp('updated_at')->nullable();
            $table->string('time');
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('financie_textcard_');
    }
}

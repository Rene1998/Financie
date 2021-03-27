<?php namespace Financie\Advancedimghomecard\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateFinancieAdvancedimghomecard extends Migration
{
    public function up()
    {
        Schema::create('financie_advancedimghomecard_', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id')->unsigned();
            $table->string('title');
            $table->text('content');
            $table->string('link1');
            $table->string('link2');
            $table->string('link3');
            $table->string('link4');
            $table->string('link1_link');
            $table->string('link2_link');
            $table->string('link3_link');
            $table->string('link4_link');
            $table->timestamp('created_at')->nullable();
            $table->timestamp('updated_at')->nullable();
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('financie_advancedimghomecard_');
    }
}

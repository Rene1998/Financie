<?php namespace Financie\Zslider\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateFinancieZslider extends Migration
{
    public function up()
    {
        Schema::create('financie_zslider_', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id')->unsigned();
            $table->string('content');
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('financie_zslider_');
    }
}

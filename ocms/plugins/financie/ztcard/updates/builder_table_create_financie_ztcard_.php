<?php namespace Financie\Ztcard\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateFinancieZtcard extends Migration
{
    public function up()
    {
        Schema::create('financie_ztcard_', function($table)
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
        Schema::dropIfExists('financie_ztcard_');
    }
}

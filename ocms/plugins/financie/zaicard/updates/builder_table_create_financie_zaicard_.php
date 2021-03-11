<?php namespace Financie\Zaicard\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateFinancieZaicard extends Migration
{
    public function up()
    {
        Schema::create('financie_zaicard_', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id')->unsigned();
            $table->string('title');
            $table->text('content');
            $table->string('doc1');
            $table->string('doc1_link_download');
            $table->string('doc1_link_show');
            $table->string('doc2');
            $table->string('doc2_link_download');
            $table->string('doc2_link_show');
            $table->string('video');
            $table->string('video_show');
            $table->timestamp('created_at')->nullable();
            $table->timestamp('updated_at')->nullable();
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('financie_zaicard_');
    }
}

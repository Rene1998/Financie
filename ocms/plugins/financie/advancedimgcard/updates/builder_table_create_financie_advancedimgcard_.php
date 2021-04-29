<?php namespace Financie\Advancedimgcard\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateFinancieAdvancedimgcard extends Migration
{
    public function up()
    {
        Schema::create('financie_advancedimgcard_', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id')->unsigned();
            $table->string('title');
            $table->text('content');
            $table->string('doc1_link');
            $table->string('doc1_link_download');
            $table->string('doc1_link_show');
            $table->string('doc2_link');
            $table->string('doc2_link_download');
            $table->string('doc2_link_show');
            $table->string('video_link');
            $table->string('video_show');
            $table->timestamp('created_at')->nullable();
            $table->timestamp('updated_at')->nullable();
            $table->string('type');
            $table->integer('category_id')->index();
            $table->integer('year_category_id')->nullable()->index();

        });
    }
    
    public function down()
    {
        Schema::dropIfExists('financie_advancedimgcard_');
    }
}

<?php namespace Financie\Imgcard\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateFinancieImgcard8 extends Migration
{
    public function up()
    {
        Schema::table('financie_imgcard_', function($table)
        {
            $table->integer('category_id')->nullable(false)->change();
        });
    }
    
    public function down()
    {
        Schema::table('financie_imgcard_', function($table)
        {
            $table->integer('category_id')->nullable()->change();
        });
    }
}

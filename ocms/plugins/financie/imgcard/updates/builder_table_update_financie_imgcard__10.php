<?php namespace Financie\Imgcard\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateFinancieImgcard10 extends Migration
{
    public function up()
    {
        Schema::table('financie_imgcard_', function($table)
        {
            $table->dropColumn('category_id');
        });
    }
    
    public function down()
    {
        Schema::table('financie_imgcard_', function($table)
        {
            $table->integer('category_id')->nullable();
        });
    }
}

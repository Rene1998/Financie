<?php namespace Financie\Imgcard\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateFinancieImgcard extends Migration
{
    public function up()
    {
        Schema::table('financie_imgcard_', function($table)
        {
            $table->string('type')->nullable();
        });
    }
    
    public function down()
    {
        Schema::table('financie_imgcard_', function($table)
        {
            $table->dropColumn('type');
        });
    }
}

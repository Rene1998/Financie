<?php namespace Financie\Imgcard\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateFinancieImgcard7 extends Migration
{
    public function up()
    {
        Schema::table('financie_imgcard_', function($table)
        {
            $table->renameColumn('categories_id', 'category_id');
        });
    }
    
    public function down()
    {
        Schema::table('financie_imgcard_', function($table)
        {
            $table->renameColumn('category_id', 'categories_id');
        });
    }
}

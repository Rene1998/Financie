<?php namespace App\Linkcard\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateAppLinkcard extends Migration
{
    public function up()
    {
        Schema::table('app_linkcard_', function($table)
        {
            $table->string('link')->nullable();
        });
    }
    
    public function down()
    {
        Schema::table('app_linkcard_', function($table)
        {
            $table->dropColumn('link');
        });
    }
}

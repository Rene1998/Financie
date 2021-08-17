<?php namespace App\Linkcard\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateAppLinkcard2 extends Migration
{
    public function up()
    {
        Schema::table('app_linkcard_', function($table)
        {
            $table->string('link')->nullable(false)->default('null')->change();
        });
    }
    
    public function down()
    {
        Schema::table('app_linkcard_', function($table)
        {
            $table->string('link')->nullable()->default(null)->change();
        });
    }
}

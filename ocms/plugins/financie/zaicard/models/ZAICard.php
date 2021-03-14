<?php namespace Financie\Zaicard\Models;

use Model;

/**
 * Model
 */
class ZAICard extends Model
{
    use \October\Rain\Database\Traits\Validation;
    

    /**
     * @var string The database table used by the model.
     */
    public $table = 'financie_zaicard_';

    /**
     * @var array Validation rules
     */
    public $rules = [
    ];



}



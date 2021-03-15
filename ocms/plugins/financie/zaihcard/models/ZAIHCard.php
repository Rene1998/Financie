<?php namespace Financie\Zaihcard\Models;

use Model;

/**
 * Model
 */
class ZAIHCard extends Model
{
    use \October\Rain\Database\Traits\Validation;
    

    /**
     * @var string The database table used by the model.
     */
    public $table = 'financie_zaihcard_';

    /**
     * @var array Validation rules
     */
    public $rules = [
    ];

    public $attachOne = [
        'image' => 'System\Models\File'
    ];
    public $with = [
        'image'
    ];
 
}

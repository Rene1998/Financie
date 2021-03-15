<?php namespace Financie\Zicard\Models;

use Model;

/**
 * Model
 */
class ZICard extends Model
{
    use \October\Rain\Database\Traits\Validation;
    

    /**
     * @var string The database table used by the model.
     */
    public $table = 'financie_zicard_';

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

<?php namespace Financie\Linkcard\Models;

use Model;

/**
 * Model
 */
class Category extends Model
{
    use \October\Rain\Database\Traits\Validation;
    
    /*
     * Disable timestamps by default.
     * Remove this line if timestamps are defined in the database table.
     */
    public $timestamps = false;


    /**
     * @var string The database table used by the model.
     */
    public $table = 'financie_linkcard_categories';

    /**
     * @var array Validation rules
     */
    public $rules = [
    ];

    public $hasMany = [
        'linkCards' => [
            'Financie\Linkcard\Models\Linkcard',
            'delete' => 'true'
            ]
    ];

    public $with = [
        'linkCards'
    ];
}

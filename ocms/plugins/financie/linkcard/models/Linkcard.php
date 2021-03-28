<?php namespace Financie\Linkcard\Models;

use Model;

/**
 * Model
 */
class Linkcard extends Model
{
    use \October\Rain\Database\Traits\Validation;
    

    /**
     * @var string The database table used by the model.
     */
    public $table = 'financie_linkcard_';

    /**
     * @var array Validation rules
     */
    public $rules = [
    ];

    public $belongsToMany = [
        'categories' => [
            'Financie\Linkcard\Models\Category',
            'table' => 'financie_linkcard_linkcard_categories',
            'order' => 'category_title'
        ]
    ];
}

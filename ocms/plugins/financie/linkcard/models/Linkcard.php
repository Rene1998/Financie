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
        'content' => 'required'
    ];
    public $customMessages = [
        'content.required' => 'Musíte zadať obsah.'
    ];

    public $belongsTo =[
        'category' => [
            'Financie\Linkcard\Models\Category',
            'order' => 'id'
        ]
    ];
}

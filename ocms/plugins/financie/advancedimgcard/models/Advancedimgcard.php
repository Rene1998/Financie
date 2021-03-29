<?php namespace Financie\Advancedimgcard\Models;

use Model;

/**
 * Model
 */
class Advancedimgcard extends Model
{
    use \October\Rain\Database\Traits\Validation;
    

    /**
     * @var string The database table used by the model.
     */
    public $table = 'financie_advancedimgcard_';

    /**
     * @var array Validation rules
     */
    public $rules = [
    ];

    public $belongsTo =[
        'category' => [
            'Financie\Advancedimgcard\Models\Category',
            'order' => 'category_title'
        ]
    ];

    public $attachOne = [
        'image' => 'System\Models\File'
    ];
    public $with = [
        'image'
    ];

}

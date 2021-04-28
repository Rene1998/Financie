<?php namespace Financie\Advancedimgcard\Models;

use Model;

/**
 * Model
 */
class Year_category extends Model
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
    public $table = 'financie_advancedimgcard_year_categories';

    /**
     * @var array Validation rules
     */
    public $rules = [
        'category_title' => 'required'
    ];

    public $customMessages = [
        'category_title.required' => 'Musíte zadať názov kategórie.'
    ];

    public $belongsTo = [
        'category' => [
            'Financie\Advancedimgcard\Models\Category',
        ]
    ];

    public $hasMany = [
        'advancedImgCards' => [
            'Financie\Advancedimgcard\Models\Advancedimgcard',
            'delete' => true
        ]
    ];

    public $with = [
        'advancedImgCards'
    ];
}

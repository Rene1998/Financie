<?php namespace App\Advancedimgcard\Models;

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
    public $table = 'app_advancedimgcard_categories';

    /**
     * @var array Validation rules
     */
    public $rules = [
        'category_title' => 'required'
    ];

    public $customMessages = [
        'category_title.required' => 'Musíte zadať názov kategórie.'
    ];

    public $hasMany = [
        'year_category' => [
            'App\Advancedimgcard\Models\Year_category',
            'delete' => 'true'
        ]
    ];

    public $with = [
        'year_category'
    ];
}

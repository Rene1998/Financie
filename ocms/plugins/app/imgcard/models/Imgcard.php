<?php namespace App\Imgcard\Models;

use Model;

/**
 * Model
 */
class Imgcard extends Model
{
    use \October\Rain\Database\Traits\Validation;
    

    /**
     * @var string The database table used by the model.
     */
    public $table = 'app_imgcard_';

    /**
     * @var array Validation rules
     */
    public $rules = [
        'title' => 'required',
        'image' => 'required'
    ];

    public $customMessages = [
        'title.required' => 'Musíte zadať názov karty.',
        'image.required' => 'Musíte zadať obrázok.'
    ];

    public $attachOne = [
        'image' => 'System\Models\File'
    ];
    public $with = [
        'image',
        'category'
    ];

    public $belongsToMany =[
        
        'category' => [
            'App\Imgcard\Models\Category',
            'table' => 'app_imgcard_imgcard_categories',

        ]
    ];
    
}

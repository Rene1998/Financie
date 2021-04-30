<?php namespace App\Blog\Models;

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
    public $table = 'app_blog_categories';

    /**
     * @var array Validation rules
     */
    public $rules = [
        'category_title' => 'required'
    ];

    public $customMessages = [
        'category_title.required' => 'Musíte zadať názov kategorie.'
    ];

    public $hasMany = [
        'blog' => [
            'App\Blog\Models\Blog',
            'delete' => 'true'
        ]
    ];

    public $with = [
        'blog'
    ];
}

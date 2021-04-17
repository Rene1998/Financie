<?php namespace Financie\Blog\Models;

use Model;

/**
 * Model
 */
class Blog extends Model
{
    use \October\Rain\Database\Traits\Validation;
    

    /**
     * @var string The database table used by the model.
     */
    public $table = 'financie_blog_';

    /**
     * @var array Validation rules
     */
    public $rules = [
    ];

    public $belongsTo =[
        
        'category' => [
            'Financie\Blog\Models\Category',
        ]
    ];

}

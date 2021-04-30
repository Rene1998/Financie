<?php namespace App\Blog\Models;

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
    public $table = 'app_blog_';

    /**
     * @var array Validation rules
     */
    public $rules = [
        'title' => 'required',
        'thumbnail_image' => 'required',
        'content' => 'required'
    ];

    public $customMessages = [
        'title.required' => 'Musíte zadať názov článku.',
        'thumbnail_image.required' => 'Musíte zadať obrázok miniatúry.',
        'content' => 'Pole článku nesmie byť prázdne'
    ];

    public $attachOne = [
        'thumbnail_image' => 'System\Models\File'
    ];
    public $with = [
        'thumbnail_image'
    ];

    protected $appends = [
        'short_content'
    ];


    public $belongsTo =[
        
        'category' => [
            'App\Blog\Models\Category',
        ]
    ];

    public function getShortContentAttribute(){
        return str_limit($this->content, 180);
    }

}

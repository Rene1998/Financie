<?php namespace App\Textcard\Models;

use Model;

/**
 * Model
 */
class Textcard extends Model
{
    use \October\Rain\Database\Traits\Validation;
    

    /**
     * @var string The database table used by the model.
     */
    public $table = 'app_textcard_';

    /**
     * @var array Validation rules
     */
    public $rules = [
        'content' => 'required'
    ];
    public $customMessages = [
        'content.required' => 'Musíte zadať obsah.'
    ];
}

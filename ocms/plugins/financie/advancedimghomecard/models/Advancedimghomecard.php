<?php namespace Financie\Advancedimghomecard\Models;

use Model;

/**
 * Model
 */
class Advancedimghomecard extends Model
{
    use \October\Rain\Database\Traits\Validation;
    

    /**
     * @var string The database table used by the model.
     */
    public $table = 'financie_advancedimghomecard_';

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
        'image'
    ];
}

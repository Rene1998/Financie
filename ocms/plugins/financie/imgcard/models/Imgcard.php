<?php namespace Financie\Imgcard\Models;

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
    public $table = 'financie_imgcard_';

    /**
     * @var array Validation rules
     */
    public $rules = [
    ];

    public $attachOne = [
        'image' => 'System\Models\File'
    ];
    public $with = [
        'image'
    ];

    public function getTypeOptions(){
        return [
            'preSkoly' => 'Pre-školy stránka',
            'osobneFinancie' => 'Osobné-financie stránka',
        ];
    }
}

<?php namespace Financie\Zslider\Models;

use Model;

/**
 * Model
 */
class ZSlider extends Model
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
    public $table = 'financie_zslider_';

    /**
     * @var array Validation rules
     */
    public $rules = [
    ];
}

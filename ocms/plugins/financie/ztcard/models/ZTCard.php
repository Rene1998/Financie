<?php namespace Financie\Ztcard\Models;

use Model;

/**
 * Model
 */
class ZTCard extends Model
{
    use \October\Rain\Database\Traits\Validation;
    

    /**
     * @var string The database table used by the model.
     */
    public $table = 'financie_ztcard_';

    /**
     * @var array Validation rules
     */
    public $rules = [
    ];

    
}

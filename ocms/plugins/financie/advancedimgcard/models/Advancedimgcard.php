<?php namespace Financie\Advancedimgcard\Models;
use Model;

/**
 * Model
 */
class Advancedimgcard extends Model
{
    use \October\Rain\Database\Traits\Validation;
    

    /**
     * @var string The database table used by the model.
     */
    public $table = 'financie_advancedimgcard_';

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
    

    public $belongsTo =[
        'year_category' => [
            'Financie\Advancedimgcard\Models\Year_category',
            'order' => 'id'
        ],
        'category' => [
            'Financie\Advancedimgcard\Models\Category',
        ]
    ];

    public $attachOne = [
        'image' => 'System\Models\File'
    ];
    public $with = [
        'image'
    ];

    public function getYearCategoryOptions(){
        return Year_category::where('category_id', $this->category_id)->lists('category_title', 'id');
    }

    public function getTypeOptions(){
        return [
            'advancedImgCardLink' => 'Karta s linkmi',
            'advancedImgCardVideo' => 'Video karta',
        ];
    }

}



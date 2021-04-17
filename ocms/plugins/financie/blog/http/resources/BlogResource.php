<?php namespace Financie\Blog\Http\Resources;

use Illuminate\Http\Resources\Json\Resource;

use Illuminate\Support\Facades\URL;

class BlogResource extends Resource
{
    public function toArray($request)
    {
        return [
            'title' => $this->title,
            'slug' => $this->slug,
            'content' => self::_parseUrl($this->content),
            'time' => $this->time,
            'category_id' => $this->category_id,
        ];
    }

    private static function _parseUrl($html){
        $base_url = URL::to('');
        return preg_replace("~src=[\"]([^']+)[\"]~", 'src="' . $base_url .'$1' . '"', $html);
    }
}
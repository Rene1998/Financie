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
            'content' => $this->content,
            'time' => $this->time,
            'category_id' => $this->category_id,
            'short_content' => $this->short_content,
        ];
    }
}
<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserCollection;
use App\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    public function index()
    {
        $pageSize = request()->get('results');
        $sortField = request()->get('sortField');
        $sortOrder = request()->get('sortOrder');
        $searchQuery = request()->get('searchQuery');

        if (!empty($sortField)) {
            $sortOrder = empty($sortOrder) ? 'ascend' : $sortOrder;
            $sortOrder = $sortOrder === 'ascend' ? 'asc' : 'desc';
        }

        $userBuilder = User::orderBy($sortField, $sortOrder);

        if ($searchQuery) {
            $userBuilder = $userBuilder->where('name', 'like', '%' . $searchQuery . '%')
                ->orWhere('email', 'like', '%' . $searchQuery . '%');
        }

        $collections = $userBuilder->paginate($pageSize);

        return new UserCollection($collections);
    }
}

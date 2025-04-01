<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
// use Illuminate\Container\Attributes\DB;
use Illuminate\Support\Facades\DB;
class ContactController extends Controller
{
    //
    public function register(Request $request){
        $request->validate([
              'name'=>'required',
              'email'=>'required|email'
        ]);

        $name=$request['name'];
        $email=$request['email'];
        $message=$request['message'];

        DB::Insert("insert into users_message(name,email,message) values(?,?,?)",[$name,$email,$message]);
         
        return back()->with('success', 'Message received successfully!');
    }
}

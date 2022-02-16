import React from "react";
import './log-in-form.css';

export default class LogInForm extends React.Component {
    render() {
        return (
            <div class="container text-center">
                <div class="row m-4">
                    <h1>Log In </h1>
                </div>
            </div>,
            
            <div class="container">
                <form id="login-form" class="p-4 m-4 row">
                <div class="form-group col-md-4 my-2">
                    <label for="name">Username</label>
                    <input required autocomplete="off" type="text" id="name" class="form-control" placeholder="e.g., Your Username"></input>
                </div>
                <div class="form-group col-md-4 my-2">
                    <label for="password">Password</label>
                    <input required autocomplete="off" type="text" id="password" class="form-control" placeholder="e.g., HOOPLAH"></input>
                </div>
                </form>
            </div>        
             )
    }
}
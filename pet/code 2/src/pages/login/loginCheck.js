/**
 * Created by fsg on 2018/4/5.
 */

import React, {Component} from 'react';

class LoginCheck extends  Component{
    render(){
        var userId = localStorage.getItem("userId");
        return(
            <div>
                get user {
                userId
            }
            </div>
        );
    }
}

export default LoginCheck;
/**
 * Created by fsg on 2018/4/5.
 */

import React, {Component} from 'react';

class LoginStorage extends  Component{
    render(){
        localStorage.setItem("userId", 1);
        return(
            <div>
                store user
            </div>
        );
    }
}

export default LoginStorage;
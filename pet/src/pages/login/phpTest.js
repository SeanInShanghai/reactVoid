
import React, {Component} from 'react';
import axios from 'axios';

import $ from 'jquery';

class PhpTest extends  Component{


    componentDidMount() {
        // this.fetch();
        var host = "http://localhost/test.php";
        // $.ajax({
        //     type:'GET',
        //     url: 'http://127.0.0.1/test.php',
        //     async: false,
        //     dataType: 'text',
        //     success: function(data) {
        //         alert("success");
        //     },
        //     error: function(xhr, status, err) {
        //         alert("dsds");
        //     }
        // });

        // var data = $.get('http://127.0.0.1/test.php', function(result){
        //     alert("ok");
        // });
        // alert(data.data);

        // axios.get({
        //     url: 'http://127.0.0.1/test.php',
        //     method: 'get'
        // }).then( res => {
        //     alert("ok");
        // }).catch(error => {
        //     alert("error");
        // });

        axios({
            method: 'get',
            url: `${host}`
        }).then( response => {
            alert("ok");
            alert(response.data);
        }).catch(error => {
            alert("error");
        });
    }

    fetch() {
        var jsonp = require('jsonp');
        // jsonp({
        //     method: 'get',
        //     url: 'http://127.0.0.1/test.php',
        //     withCredentials:true
        // }).then( response => {
        //     alert(response);
        // }).catch(error => {
        //     alert("error"+error);
        // });
        alert("ok");

        jsonp('http://127.0.0.1/test.php', null, function (err, data) {
            if (err) {
                alert("error");
            } else {
                alert("success");
            }
        });
        alert("sdss");
    }


    render(){
        localStorage.setItem("userId", 1);
        return(
            <div>
                store user
            </div>
        );
    }
}

export default PhpTest;
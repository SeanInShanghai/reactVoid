/**
 * Created by fsg on 2018/3/31.
 */
import React, {Component} from 'react';
import {Layout, Menu, Icon} from 'antd';
import MyHeader from '../../CurHeader';
import axios from 'axios';
import { History } from 'react-router';
import { Route, Redirect } from 'react-router';
import { Modal} from 'antd';
require('../css/style.css');
require('../css/slider.css');
require('../js/login');

class Login extends Component{

    constructor(props) {
        super(props);
        this.state = {
            user: null,
            password: null,
            modelVis: false,
            modelContent: null
        };
    }

    process = (e) =>{
        var user = document.querySelectorAll(`input[name="user"]`)[0].value;
        var password = document.querySelectorAll(`input[name="key"]`)[0].value;

        var host = "http://localhost/VisPethos/php/login.php";

        let result = "fail";

        var bodyFormData = new FormData();
        bodyFormData.set('user', user);
        bodyFormData.set('key', password);

        axios({
            method: 'post',
            url: `${host}`,
            data: bodyFormData,
            userPass: false,
            keyPass: false,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
        }).then( response => {
            result = response.data;

            if(result === "ok"){
                localStorage.setItem("user", user);//记住当前用户
                // alert(localStorage.getItem("user"));

                this.props.history.push("/index");
            }else if(result === "fail"){

                var modelContent = "用户名不存在，请重新检查";
                this.setState({modelContent: modelContent});
                this.setState({modelVis: true});

                this.props.history.push("/login");
            }else {
                var modelContent = "密码错误";
                this.setState({modelContent: modelContent});
                this.setState({modelVis: true});

                this.props.history.push("/login");
            }

        }).catch(error => {
            alert("error");
            this.props.history.push("/login");
        });

    }


    handleUserBlur = (e) => {
        var input = e.target;
        var userName = input.value;

        if(!userName){
            this.setState({userPass:true});
        }else{
            this.setState({userPass:false});
        }

    }

    handlePassBlur = (e) => {
        var input = e.target;
        var key = input.value;
        if(!key){
            this.setState({keyPass:true});
        }else{
            this.setState({keyPass:false});
        }
    }

    handleModel= (e) => {
        this.setState({modelVis:false});
    }


    render(){
        return(

            <Layout>
                <MyHeader/>

                <Modal title="您还未登录" visible={this.state.modelVis}
                       onOk={this.handleModel} onCancel={this.handleModel}>
                    <p>{
                        this.state.modelContent
                    }</p>
                </Modal>

                <div class="main">
                    <div class="content-top">
                        <div class="wrap">




                        </div>
                    </div>
                    <div class="content-bottom">
                        <div class="wrap">
                            <div class="col span_2_of_3">
                                <div class="login-form">

                                    <h3>欢迎您！</h3>



                                        <div>
                                            <span><input name="user" id="user" type="text" class="textbox" placeholder="请输入账户" onblur="checkUser()" onBlur={this.handleUserBlur} style={{height:'40px'}} /></span>
                                            {
                                                !this.state.userPass ?
                                                    <span id="user_pass"></span>
                                                    :
                                                    <span id="user_pass" style={{fontSize:'13px', width:'98%', height:'2em', lineHeight:'2em', color:'red'}}>你还没有填写用户名哦。</span>
                                            }
                                            <br/>
                                        </div>
                                        <div>
                                            <span><input name="key" id="key" type="password" class="textbox" placeholder="请输入密码" onblur="checkKey()" onBlur={this.handlePassBlur} style={{height:'40px'}}/></span>
                                            {
                                                !this.state.keyPass ?
                                                    <span id="key_pass"></span>
                                                    :
                                                    <span id="user_pass" style={{fontSize:'13px', width:'98%', height:'2em', lineHeight:'2em', color:'red'}}>你还没有填写密码哦。</span>
                                            }
                                            <br/>
                                        </div>
                                        <div>
                                            <span><input type="submit" id="submit" value="登录" onClick={(e) => this.process(e)} /></span>
                                            <br/>
                                        </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}

export default Login;
/**
 * Created by fsg on 2018/3/31.
 */
import React, {Component} from 'react';
import {Layout, Menu, Icon} from 'antd';
import MyHeader from '../../CurHeader';
import axios from 'axios';
import { Modal} from 'antd';

require('../css/style.css');
require('../css/slider.css');
require('../js/register');

class Register extends Component{


    constructor(props) {
        super(props);
        this.state = {
            userPass:false,
            keyPass:false,
            conFirm:false,
            passEqual:true,
            modelVis: false,
            modelContent: null
        }
    }


    handeOnClick = (e) => {
        var user = document.querySelectorAll(`input[name="user"]`)[0].value;
        var password = document.querySelectorAll(`input[name="key"]`)[0].value;
        var confirmPassword = document.querySelectorAll(`input[name="comfirm_key"]`)[0].value;



        if(password != confirmPassword){
            this.setState({passEqual:false});
            return;
        }else{
            this.setState({passEqual:true});
        }


        var bodyFormData = new FormData();
        bodyFormData.set('user', user);
        bodyFormData.set('key', password);
        bodyFormData.set('comfirm_key', confirmPassword);

        var host = "http://localhost/VisPethos/php/register.php";
        var result = "";
        axios({
            method: 'post',
            url: `${host}`,
            data: bodyFormData,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
        }).then( response => {
            result = response.data;
            // alert(result);
            // alert("success");

            if(result === "dup"){//
                var modelContent = "不能重复注册";
                this.setState({modelContent: modelContent});
                this.setState({modelVis: true});
                this.props.history.push("/register");
            }else if(result === "inserterror"){
                var modelContent = "注册失败";
                this.setState({modelContent: modelContent});
                this.setState({modelVis: true});
                this.props.history.push("/register");

            }else{
                this.props.history.push("/login");
            }

        }).catch(error => {
            // alert("error");
            // this.props.history.push("/register");
        });

        if(result == "success"){
            this.props.history.push("/login");
        }else {
            this.props.history.push("/register");
        }


    }

    handleUser = (e) => {
        var input = e.target;
        var userName = input.value;
        if(!userName){
            this.setState({userPass:true});
        }else {
            this.setState({userPass:false});
        }
    }

    handlePass = (e) => {
        var input = e.target;
        var keyPass = input.value;
        if(!keyPass){
            this.setState({keyPass:true});
        }else {
            this.setState({keyPass:false});
        }
    }

    handleConfirm = (e) => {
        var input = e.target;
        var confirm = input.value;
        if(!confirm){
            this.setState({conFirm:true});
        }else {
            this.setState({conFirm:false});
        }
    }

    handleModel= (e) => {
        this.setState({modelVis:false});
    }

    render(){
        return(

            <Layout>
                <MyHeader/>

                <Modal title="注册失败" visible={this.state.modelVis}
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
                                <div class="register-form">
                                    <h3>欢迎您！</h3>



                                        <div>

                                            <span><input name="user" id="user" type="text" class="textbox" placeholder="请输入用户名" onblur="checkUser()" onBlur={(e) => this.handleUser(e)} style={{height:'40px'}}/></span>
                                            {
                                                !this.state.userPass ?
                                                    <span id="user_pass"></span>
                                                    :
                                                    <span id="user_pass" style={{fontSize:'13px', width:'98%', height:'2em', lineHeight:'2em', color:'red'}}>你还没有填写用户名哦。</span>
                                            }
                                            <br/>
                                        </div>
                                        <div>

                                            <span><input name="key" id="key" type="password" class="textbox" placeholder="请输入密码" onblur="checkKey()" onBlur={(e) => this.handlePass(e)} style={{height:'40px'}}/></span>
                                            {
                                                !this.state.keyPass ?
                                                    <span id="user_pass"></span>
                                                    :
                                                    <span id="user_pass" style={{fontSize:'13px', width:'98%', height:'2em', lineHeight:'2em', color:'red'}}>你还没有填写密码哦。</span>
                                            }
                                            <br/>
                                        </div>
                                        <div>

                                            <span><input name="comfirm_key" id="comfirm_key" type="password" class="textbox" placeholder="请确认密码" onblur="comfirm_key()" onBlur={(e) => this.handleConfirm(e)} style={{height:'40px'}}/></span>
                                            {
                                                !this.state.conFirm ?
                                                    <span id="user_pass"></span>
                                                    :
                                                    <span id="user_pass" style={{fontSize:'13px', width:'98%', height:'2em', lineHeight:'2em', color:'red'}}>你还没有确认输入密码哦。</span>
                                            }
                                            {
                                                this.state.passEqual ?
                                                    <span id="user_pass"></span>
                                                    :
                                                    <span id="user_pass" style={{fontSize:'13px', width:'98%', height:'2em', lineHeight:'2em', color:'red'}}>两次输入密码不一致，请重新输入。</span>
                                            }
                                            <br/>
                                        </div>
                                        <div>
                                            <span><input id="submit" type="submit" value="注册" onClick={(e) => this.handeOnClick(e)} /></span>
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

export default Register;
/**
 * Created by fsg on 2018/3/31.
 */
import React, {Component} from 'react';
import {Layout, Menu, Icon} from 'antd';
import MyHeader from '../../CurHeader';

require('../css/style.css');
require('../css/slider.css');

class ZhunBei extends Component{
    componentDidMount() {
        var user = localStorage.getItem('user');
        if(user == null){
            this.props.history.push("/index");
        }
    }
    render(){
        return(

            <Layout>
                <MyHeader/>

                <div class="main">
                    <div class="content-top">
                        <div class="wrap">


                            <div class="demo">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-md-6 col-sm-6">
                                            <div class="box">
                                                <div class="box-img">
                                                    <img src={require('../images/zhunbei1.jpg')} alt="" />
                                                </div>
                                                <div class="box-content">

                                                    <p class="description">手术准备室中需要完成手术前的一系列准备工作，譬如注射麻药、吸入麻醉、麻前给药。</p>

                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-md-6 col-sm-6">
                                            <div class="box">
                                                <div class="box-img">
                                                    <img src={require('../images/zhunbei2.jpg')} alt="" />
                                                </div>
                                                <div class="box-content">

                                                    <p class="description">针对手术人员，必须在这里完成消毒、穿戴手术衣等术前准备工作。</p>

                                                </div>
                                            </div>
                                        </div>


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

export default ZhunBei;
/**
 * Created by fsg on 2018/3/31.
 */
import React, {Component} from 'react';
import {Layout, Menu, Icon} from 'antd';
import MyHeader from './CurHeader';

require('../css/style.css');
require('../css/slider.css');

class ZhenShi extends Component{
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
                                                    <img src={require('../images/zhenshi1.jpg')} alt="" />
                                                </div>
                                                <div class="box-content">

                                                    <p class="description">诊室是医生对宠物进行诊疗的主要场所，诊室包括了问诊台，治疗台以及小型手术台。其主要业务首先是对宠物进行最基本的面诊，包括视、听、触、嗅等基本方式。</p>

                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-md-6 col-sm-6">
                                            <div class="box">
                                                <div class="box-img">
                                                    <img src={require('../images/zhenshi2.jpg')} alt="" />
                                                </div>
                                                <div class="box-content">

                                                    <p class="description">医生根据其专业知识，依照面诊分析的宠物身体状况制定后续治疗方案，征得宠物主人同意后可以进行后续治疗。</p>

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

export default ZhenShi;
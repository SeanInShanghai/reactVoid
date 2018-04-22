/**
 * Created by fsg on 2018/3/31.
 */
import React, {Component} from 'react';
import {Layout, Menu, Icon} from 'antd';
import MyHeader from './CurHeader';

require('../css/style.css');
require('../css/slider.css');

class ZhuaYuan extends Component{
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
                                                    <img src={require('../images/zhuyuan1.jpg')} alt="" />
                                                </div>
                                                <div class="box-content">

                                                    <p class="description">我院为入院接受治疗的宠物提供了贴心的就诊环境，对于病情稍事严重的宝贝们，我们还提供住院服务。</p>

                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-md-6 col-sm-6">
                                            <div class="box">
                                                <div class="box-img">
                                                    <img src={require('../images/zhuyuan2.jpg')} alt="" />
                                                </div>
                                                <div class="box-content">

                                                    <p class="description">住院部为猫狗分隔区，其中VIP病房为我院的特色。</p>

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

export default ZhuaYuan;
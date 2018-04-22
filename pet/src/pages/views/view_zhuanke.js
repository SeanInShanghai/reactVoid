/**
 * Created by fsg on 2018/3/31.
 */
import React, {Component} from 'react';
import {Layout, Menu, Icon} from 'antd';
import MyHeader from './CurHeader';

require('../css/style.css');
require('../css/slider.css');

class Zhuanke extends Component{
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
                                                    <img src={require('../images/zhuanke1.jpg')} alt="" />
                                                </div>
                                                <div class="box-content">

                                                    <p class="description">专科检查室为分项对每一特定疾病制定的治疗室，其各配备有特定的检查器械。</p>

                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-md-6 col-sm-6">
                                            <div class="box">
                                                <div class="box-img">
                                                    <img src={require('../images/zhuanke2.jpg')} alt="" />
                                                </div>
                                                <div class="box-content">

                                                    <p class="description">专科检查室包括对眼科、骨科、神经科、心脏科等专科疾病的检查，如眼科（检眼镜检查、眼压检查、裂隙灯检查、眼底检查、泪液分泌量检查等）、心脏科检查（心脏听诊、心电图检查等）、神经学检查（步态检查、各种反射检查等）等。</p>

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

export default Zhuanke;
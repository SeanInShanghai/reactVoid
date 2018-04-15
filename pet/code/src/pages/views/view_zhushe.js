/**
 * Created by fsg on 2018/3/31.
 */
import React, {Component} from 'react';
import {Layout, Menu, Icon} from 'antd';
import MyHeader from '../../CurHeader';

require('../css/style.css');
require('../css/slider.css');

class ZhunBei extends Component{
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
                                                    <img src={require('../images/zhushe1.jpg')} alt="" />
                                                </div>
                                                <div class="box-content">

                                                    <p class="description">注射是对宠物医院治疗手段中比较常见的一种，其对安全性要求比较高，需要医师及助理在操作前进行规范化的消毒。</p>

                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-md-6 col-sm-6">
                                            <div class="box">
                                                <div class="box-img">
                                                    <img src={require('../images/zhushe2.jpg')} alt="" />
                                                </div>
                                                <div class="box-content">

                                                    <p class="description">注射室包括静脉注射、皮下注射、肌肉注射、局部封闭注射等操作。医师与助理必须清晰知晓常见问题的处理方法，输液泵、加热垫的使用方法等操作规范。</p>

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
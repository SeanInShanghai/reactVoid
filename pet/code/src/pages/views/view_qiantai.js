/**
 * Created by fsg on 2018/3/31.
 */
import React, {Component} from 'react';
import {Layout, Menu, Icon} from 'antd';
import MyHeader from '../../CurHeader';

require('../css/style.css');
require('../css/slider.css');

class Mianyi extends Component{
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
                                                    <img src={require('../images/qiantai1.jpg')} alt="" />
                                                </div>
                                                <div class="box-content">

                                                    <p class="description">前台是宠物医院的最基础部门。其涉及业务主要有问诊信息管理、接待挂号、导医咨询、病例档案发出与回收、收费等。</p>

                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-md-6 col-sm-6">
                                            <div class="box">
                                                <div class="box-img">
                                                    <img src={require('../images/qiantai2.jpg')} alt="" />
                                                </div>
                                                <div class="box-content">

                                                    <p class="description">前台在医院的运营中起到了形象展示的作用，也是医院对外公关的主要职责部门。日常的工作范围也包含了对医院内部员工的培训，以及日常的各种销售报表制作，为医院的正常运作提供了良好的保障。</p>

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

export default Mianyi;
/**
 * Created by fsg on 2018/3/31.
 */
import React, {Component} from 'react';
import {Layout, Menu, Icon} from 'antd';
import MyHeader from '../../CurHeader';

require('../css/style.css');
require('../css/slider.css');

class Learn extends Component{
    render(){
        return(

            <Layout>
                <MyHeader/>

                <div class="main">
                    <div class="content-bottom">
                        <div class="wrap">
                            <div class="section group">

                                <div class="lsidebar span_1_of_2 offers_list">
                                    <div class="learn_box">
                                        <h3>业务流程学习</h3>
                                        <p><span class="quotes"></span>请选择您的工作岗位，然后您可以进入各科室，对于您所在的岗位在不同科室的工作内容、岗位责任和业务流程进行系统化的学习。<span class="quotes-down"></span></p>
                                    </div>
                                </div>
                                <div class="lsidebar span_1_of_2 offers_list">
                                    <div class="learn_box">
                                        <h3>病例学习</h3>
                                        <p><span class="quotes"></span>您可以通过病例目录，根据疾病种类、疾病名称对病例进行有针对性的学习，了解宠物医院对患病宠物治疗的全过程。<span class="quotes-down"></span></p>
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

export default Learn;
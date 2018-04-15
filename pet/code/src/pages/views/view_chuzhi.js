/**
 * Created by fsg on 2018/3/31.
 */
/**
 * Created by fsg on 2018/3/31.
 */
import React, {Component} from 'react';
import {Layout, Menu, Icon} from 'antd';
import MyHeader from '../../CurHeader';

require('../css/style.css');
require('../css/slider.css');

class ChuZhi extends Component{
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
                                                    <img src={require('../images/chuzhi1.jpg')} alt="" />
                                                </div>
                                                <div class="box-content">
                                                    <p class="description">处置室是对宠物进行除手术外，较简易的治疗操作的场所。处置室包括包括口服投药、换药、清洗耳道、挤肛门腺、修剪指甲、鼻饲管放置、灌肠、安乐死等基本处置操作。</p>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-sm-6">
                                            <div class="box">
                                                <div class="box-img">
                                                    <img src={require('../images/chuzhi2.jpg')} alt="" />
                                                </div>
                                                <div class="box-content">

                                                    <p class="description">处置室包括包括口服投药、换药、清洗耳道、挤肛门腺、修剪指甲、鼻饲管放置、灌肠、安乐死等基本处置操作。</p>

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

export default ChuZhi;
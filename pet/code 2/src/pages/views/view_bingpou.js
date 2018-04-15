/**
 * Created by fsg on 2018/3/31.
 */
import React, {Component} from 'react';
import {Layout, Menu, Icon} from 'antd';
import MyHeader from '../../CurHeader';

require('../css/style.css');
require('../css/slider.css');

class Bingpou extends Component{
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
                                        <div class="col-md-12 col-sm-6">
                                            <div class="box">
                                                <div class="box-img">
                                                    <img src={require('../images/bingpou.jpg')} alt="" />
                                                </div>
                                                <div class="box-content">
                                                    <h4 class="title">病理剖检室</h4>

                                                    <p class="description">病理剖检室主要用于处理病死或被执行安乐死的动物遗体，我们会在处理过程中尽可能做到人道主义关怀。</p>

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

export default Bingpou;
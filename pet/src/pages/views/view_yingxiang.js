/**
 * Created by fsg on 2018/3/31.
 */
import React, {Component} from 'react';
import {Layout, Menu, Icon} from 'antd';
import MyHeader from './CurHeader';

require('../css/style.css');
require('../css/slider.css');

class YingXiang extends Component{
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
                                                    <img src={require('../images/yingxiang1.jpg')} alt="" />
                                                </div>
                                                <div class="box-content">

                                                    <p class="description">影像室，顾名思义，是对动物拍片后进行相片处理的场所。作为较为直观了解宠物内部身体构造的部门，其也是医院中的“技术担当”部门了。</p>

                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-md-6 col-sm-6">
                                            <div class="box">
                                                <div class="box-img">
                                                    <img src={require('../images/yingxiang2.jpg')} alt="" />
                                                </div>
                                                <div class="box-content">

                                                    <p class="description">影像室中可以进行包括X线检查、B超检查以及CT、MRI检查等的常规检查。</p>

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

export default YingXiang;
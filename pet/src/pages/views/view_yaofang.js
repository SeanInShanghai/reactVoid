/**
 * Created by fsg on 2018/3/31.
 */
import React, {Component} from 'react';
import {Layout, Menu, Icon} from 'antd';
import MyHeader from '../../CurHeader';

require('../css/style.css');
require('../css/slider.css');

class Mianyi extends Component{
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
                                                    <img src={require('../images/yaofang1.jpg')} alt="" />
                                                </div>
                                                <div class="box-content">

                                                    <p class="description">药房是医院储存放置药品的重要场所，是医院得以运营相当关键的一环。药房必须保持干燥，避免一些可燃性药物的存放不安全。</p>

                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-md-6 col-sm-6">
                                            <div class="box">
                                                <div class="box-img">
                                                    <img src={require('../images/yaofang2.jpg')} alt="" />
                                                </div>
                                                <div class="box-content">

                                                    <p class="description">药房的负责人必须熟知药物的存放要求，并在发药时，认真审核处方，正确可靠地发放药品，并对宠物主人进行合理地提示，温馨告知他们药品的使用说明及存放原则等。</p>

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
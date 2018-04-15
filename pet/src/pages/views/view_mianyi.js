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
                                                    <img src={require('../images/mianyi1.jpg')} alt="" />
                                                </div>
                                                <div class="box-content">

                                                    <p class="description">免疫室主要负责宠物的疫苗接种。在操作之前，必须与宠物主人沟通清楚，所有注意事项，与宠物的过敏症状。</p>

                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-md-6 col-sm-6">
                                            <div class="box">
                                                <div class="box-img">
                                                    <img src={require('../images/mianyi2.jpg')} alt="" />
                                                </div>
                                                <div class="box-content">

                                                    <p class="description">免疫室同时也需要对并发症进行适当的处理，并将注意事项告知宠物主人。</p>

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
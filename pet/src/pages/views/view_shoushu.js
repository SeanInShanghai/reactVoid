/**
 * Created by fsg on 2018/3/31.
 */
import React, {Component} from 'react';
import {Layout, Menu, Icon} from 'antd';
import MyHeader from './CurHeader';

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
                                        <div class="col-md-12 col-sm-6">
                                            <div class="box">
                                                <div class="box-img">
                                                    <img src={require('../images/shoushu.jpg')} alt="" />
                                                </div>
                                                <div class="box-content">
                                                    <h4 class="title">手术室</h4>
                                                    <p class="description">手术室为宠物进行手术的场所，会定期进行清理，确保无菌的手术环境，达到常规手术、特殊手术的相应标准。</p>

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
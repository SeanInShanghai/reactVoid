/**
 * Created by fsg on 2018/3/31.
 */
import React, {Component} from 'react';
import {Layout, Menu, Icon} from 'antd';
import MyHeader from './CurHeader';

require('../css/style.css');
require('../css/slider.css');

class Huayan extends Component{
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
                                                    <img src={require('../images/huayan1.jpg')} alt="" />
                                                </div>
                                                <div class="box-content">
                                                    <h4 class="title">化验室</h4>

                                                    <p class="description">为了使对宠物病状有更加清晰的判断，化验室需要对相应样本进行血常规、血液生化、电解质、血气、血凝指标、激素指标、尿常规、微生物学检查、药敏、皮肤刮片、粪便检查、传染病检查等检查，必要时，也需要对送检样本进行预处理。</p>

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

export default Huayan;
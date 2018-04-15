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

class Dangan extends Component{
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
                                                    <img src={require('../images/dangan1.jpg')} alt="" />
                                                </div>
                                                <div class="box-content">

                                                    <p class="description">档案室是医院管理病例档案的科室。其保存的病例可以追溯到十年前，且绝对对外保密。</p>

                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-md-6 col-sm-6">
                                            <div class="box">
                                                <div class="box-img">
                                                    <img src={require('../images/dangan2.jpg')} alt="" />
                                                </div>
                                                <div class="box-content">

                                                    <p class="description">由于档案种类繁多，且病种数据也复杂。工作人员还需要定期对数据进行统计与管理，为医院研究工作做出贡献。</p>

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

export default Dangan;
/**
 * Created by fsg on 2018/4/10.
 */
import React from 'react';
import {Component} from 'react';
import axios from 'axios';
import { Player, ControlBar } from 'video-react';
import ReactPlayer from 'react-player';
import {Layout, Menu, Icon} from 'antd';

import {Switch, Route, Link} from 'react-router-dom';
import MyHeader from '../CurHeader';

const {Header, Content, Footer, Sider} = Layout;
class CaseDescription extends Component {

    constructor(props) {
        super(props);
        this.state = {
            caseId:null,
            caseDesc: "",
            data:[]
        };
    }



    componentDidMount() {
        // alert("ok");

        var user = localStorage.getItem('user');
        if(user == null){
            this.props.history.push("/index");
        }

        var host = "http://localhost/VisPethos/php/getSpecificCase.php";
        var caseId = this.props.match.params.caseId;

        var bodyFormData = new FormData();
        bodyFormData.set('caseId', caseId);

        axios({
            method: 'post',
            url: `${host}`,
            data: bodyFormData,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
        }).then( response => {
            var datas = response.data;
            this.setState({data:datas});
            // alert(this.state.data);
        }).catch(error => {
            // alert("error");
            this.props.history.push("/login");
        });


    }

    render(){
        // var tmp = this.state.data[0].caseid;
        var tmp = 1;
        return(
            <div>
                <Layout>
                    <Header className="header" style={{backgroundColor:'#65A360', height:'180px'}}>
                        <div className="logo" />
                        <div class="header">
                            <div class="wrap">
                                <div class="header-top">
                                    <div class="logo">
                                        <Link to="/casestudy"><img src={require('./images/logo.png')} alt=""/></Link>
                                    </div>
                                    <div class="cart">
                                        <div class="span6 header-sidebar" data-motopress-type="dynamic-sidebar" data-motopress-sidebar-id="footer-sidebar-4">
                                            <div id="text-6" class="visible-all-devices " style={{width:'357.11px', height:'53px'}}>
                                                <div class="textwidget">
                                                    <div class="section group" style={{display:'none'}}>
                                                        <a href="#" class="login-btn">注册</a>
                                                        <a href="#" class="register-btn">登录</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div><img style={{width:'auto'}} src={require('./images/footprint.png')} alt="" /></div>

                                        </div>

                                    </div>
                                    <div class="clear"></div>
                                </div>
                            </div>
                        </div>
                    </Header>

                    <Header className="header" style={{backgroundColor:'#232323'}}>

                    </Header>

                </Layout>

                <div style={{width:'60%', marginLeft:'20%'}}>
                    {

                        this.state.data.map((item) => {
                            var dataType = item.datatype;
                            if(dataType == "视频"){
                                var fullPath = "http://115.159.148.70:8086"+ item.content+"/"+item.dataname;
                                // return <Player ref="player"
                                //         src={fullPath}
                                //         width={123}
                                //                height={100}>
                                //
                                //     <source src={fullPath} />
                                //     <ControlBar autoHide={true} />
                                // </Player>;
                                /*return <div className='player-wrapper'>
                                    <ReactPlayer
                                        playing
                                        playsinline
                                        className='react-player'
                                        url={fullPath}
                                        width='100%'
                                        height='100%'
                                    />
                                </div>*/
                                return <div ><p style={{width:'70%', marginLeft:'15%'}}> 视频介绍</p><video class="video-container video-container-overlay" controls autoplay="" loop="" muted="" data-reactid=".0.1.0.0" style={{width:'70%', marginLeft:'15%'}}>
                                    <source type="video/mp4" data-reactid=".0.1.0.0.0" src={fullPath}/>
                                </video></div>;
                            }else if(dataType == "图片"){
                                var fullPath = "http://115.159.148.70:8086"+ item.content+"/"+item.dataname;
                                return <div><p style={{width:'70%', marginLeft:'15%'}}>图片介绍</p><img style={{width:'70%', marginLeft:'15%'}} src={fullPath}/></div>;
                            }else if(dataType == "概述"){
                                var content = item.content;
                                return <div><p style={{width:'70%', marginLeft:'15%'}}>概述</p><div style={{width:'70%', marginLeft:'15%'}}>{content}</div></div>
                            }
                        })
                    }

                </div>
            </div>
        );
    }
}

export default CaseDescription;
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
class CaseDescriptionNew extends Component {

    constructor(props) {
        super(props);
        this.state = {
            caseId:null,
            caseDesc: "",
            data:[],
            caseId:"",
            caseData:[]
        };
    }



    componentDidMount() {
        // alert("ok");

        var user = localStorage.getItem('user');
        if(user == null){
            this.props.history.push("/index");
        }

        var host = "http://localhost/VisPethos/php/getCasesFromIll.php";
        var caseId = this.props.match.params.caseId;

        var bodyFormData = new FormData();
        bodyFormData.set('illId', caseId);

        axios({
            method: 'post',
            url: `${host}`,
            data: bodyFormData,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
        }).then( response => {
            var datas = response.data;
            var caseId = datas[0].caseid;
            var caseData = datas[0].caseData;
            // alert(caseData[0].casephaseid);
            this.setState({caseId: caseId});
            this.setState({caseData: caseData});
            this.setState({data:datas});
            // alert(this.state.data);
        }).catch(error => {
            // alert("error");
            // this.props.history.push("/login");
        });


    }

    handleClick = (e) => {
        console.log('click ', e);
        // alert(e.key);
        var curData = this.state.data[e.key-1];

        var curCaseData = curData.caseData;

        this.setState({
            caseData: curCaseData,
        });
    }

    render(){
        // var tmp = this.state.data[0].caseid;
        var tmp = 1;
        var videoCount = 0;
        var imgCount = 0;
        var textCount = 0;
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

                <Layout>

                    <Sider
                           width={350}

                           breakpoint="md"
                           collapsedWidth="0"
                           onCollapse={(collapsed, type) => {
                               console.log(collapsed, type);
                           }}
                           style={{backgroundColor:'#fff', height:'100%', textAlign:'center'}}>
                        <Menu theme="light" mode="inline" defaultSelectedKeys={['1']} onClick={this.handleClick} >
                            {/*<Menu.Item key="1" className="Menu-item">
                                <Link to="/newTest/getTest/101" class="Menu-link"  params={{ testId: "101"}} onClick={() => this.refreshPage()}>
                                    <span className="nav-text">前台</span>
                                </Link>
                            </Menu.Item>*/}
                            {
                                this.state.data.map(function (item) {
                                    return <Menu.Item key={item.key} className="Menu-item" width={900} >

                                            <span className="nav-text"  >{item.caseName}</span>

                                    </Menu.Item>;
                                })
                            }
                        </Menu>
                    </Sider>

                    <Content>
                        <div class="main">
                            {
                                this.state.caseData.map((item) => {
                                    var dataType = item.datatype;


                                    if(dataType == "视频"){
                                        var fullPath = "http://115.159.148.70:8086"+ item.content+"/"+item.dataname;
                                        videoCount += 1;

                                        return <div style={{marginTop:'30px'}}><p style={{width:'70%', marginLeft:'15%'}}><b>视频介绍{videoCount}</b></p><video class="video-container video-container-overlay" controls autoplay="" loop="" muted="" data-reactid=".0.1.0.0" style={{width:'70%', marginLeft:'15%'}}>
                                            <source type="video/mp4" data-reactid=".0.1.0.0.0" src={fullPath}/>
                                        </video></div>;
                                    }
                                    else
                                        if(dataType == "图片"){
                                        imgCount += 1;
                                        var fullPath = "http://115.159.148.70:8086"+ item.content+"/"+item.dataname;
                                        return <div style={{marginTop:'30px'}}><p style={{width:'70%', marginLeft:'15%'}}><b>图片介绍{imgCount}</b></p><img style={{width:'70%', marginLeft:'15%'}} src={fullPath}/></div>;
                                    }
                                    else if(dataType == "概述"){
                                        var content = item.content;
                                        textCount += 1;
                                        return <div style={{marginTop:'30px'}}><p style={{width:'70%', marginLeft:'15%'}}><b>文字描述{textCount}</b></p><div style={{width:'70%', marginLeft:'15%'}}>{content}</div></div>
                                        // return <div>sds</div>
                                        // return <div><p style={{width:'70%', marginLeft:'15%'}}>概述</p><div style={{width:'70%', marginLeft:'15%'}}>sds</div></div>
                                    }
                                })
                            }

                        </div>
                    </Content>
                </Layout>
            </div>
        );
    }
}

export default CaseDescriptionNew;
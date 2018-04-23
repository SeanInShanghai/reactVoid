/**
 * Created by fsg on 2018/3/21.
 */

import React from 'react';
import {Component} from 'react';
import {Layout, Menu, Icon} from 'antd';
import { Row, Col } from 'antd';
import {Switch, Route, Link} from 'react-router-dom';
import { Tag } from 'antd';
import axios from 'axios';
import $ from 'jquery';
import './Test.css';
import MyHeader from '../CurHeader';
import './CaseStudy.css';
const {Header, Content, Footer, Sider} = Layout;

// const host = "http://localhost:8011/getIllnessCases";
// const host = "http://localhost/VisPethos/php/getIllnessCases.php";
const host = "http://localhost/VisPethos/php/getCases.php";
const head = {
    headers: { 'Content-Type': 'application/json' }
};
const illness = [
    {'key':1, 'name':'传染病', 'cases':['犬瘟热', '犬细小病毒', '犬传染性肝炎', '犬冠状病毒', '猫泛白细胞减少症', '猫病毒性病气管炎', '皮肤真菌感染']},
    {'key':2, 'name':'寄生虫病', 'cases':['蛔虫病', '钩虫病', '绦虫病', '球虫病', '疥螨虫病', '蚤病']},
    {'key':3, 'name':'内科病例', 'cases':['口炎', '肠炎', '肠便秘', '胰腺炎', '肝炎', '腹膜炎', '肛门腺炎', '感冒', '鼻炎', '气管支气管炎', '肺炎', '心力衰竭', '尿道感染', '尿结石', '膀胱炎', '肾炎', '佝偻病', '有机磷中毒', '糖尿病', '耳血肿', '中耳炎', '眼睑内翻', '结膜炎', '角膜炎']},
    {'key':4, 'name':'外产科病例', 'cases':['外伤', '外科感染', '骨折', '关节脱位', '湿疹', '皮炎', '脓皮病', '脱毛症', '趾间囊肿', '疝', '阴道炎', '阴道脱出', '子宫蓄脓', '难产', '乳房炎']},
    {'key':5, 'name':'常用手术', 'cases':['绝育', '剖腹产', '瞬膜腺增生物切除', '眼球摘除', '立耳术', '断尾术']},
    {'key':6, 'name':'免疫', 'cases':['犬', '猫免疫程序']}];

//病例学习
class CaseStudy extends Component {
    //
    // data: illness,
    // label: illness[0]['cases']
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            label: []
        };
    }

    componentDidMount() {

        var user = localStorage.getItem('user');
        if(user == null){
            this.props.history.push("/index");
        }

        this.fetch();
    }

    fetch() {
        axios({
            method: 'get',
            url: `${host}`,
        }).then( response => {
            var data = response.data;

            // var str = '[{"id":1,"name":"Test1"},{"id":2,"name":"Test2"}]';

            // const dataObj = JSON.parse(str);
            // alert(dataObj[0].id);
            // alert(response.json());
            // var repDatan = JSON.parse(response.data);
            // alert(repDatan);
            const repData = response.data;


            this.setState({data: repData});
            this.setState({label: repData[0]['cases']});
        }).catch(error => {
            alert("error");
            this.setState({data: [
                {'key':1, 'name':'传染病', 'cases':['犬瘟热', '犬细小病毒', '犬传染性肝炎', '犬冠状病毒', '猫泛白细胞减少症', '猫病毒性病气管炎', '皮肤真菌感染']}]});
            this.setState({label: this.state.data[0]['cases']});
        });
    }


    handleClick = (e) => {
        console.log('click ', e);
        // alert(e.key);
        var curData = this.state.data[e.key-1];
        var curLabel = curData.cases;


        this.setState({
            label: curLabel,
        });
    }


    render(){

        let menus = this.state.data;

        var curLabels = this.state.label;

        return(
            <Layout>
                {/*<MyHeader/>*/}
                <Layout>
                    <Header className="header" style={{backgroundColor:'#65A360', height:'180px'}}>
                        <div className="logo" />
                        <div class="header">
                            <div class="wrap">
                                <div class="header-top">
                                    <div class="logo">
                                        <Link to="/learn"><img src={require('./images/logo.png')} alt=""/></Link>
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
                        breakpoint="md"
                        collapsedWidth="0"
                        onCollapse={(collapsed, type) => {
                            console.log(collapsed, type);
                        }}
                        style={{textAlign:'center', height:'100%', backgroundColor:'#fff'}}>

                        <div className="logo" />
                        <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}  onClick={this.handleClick}>

                            {
                                this.state.data.map(function(item){
                                    return <Menu.Item key={item.key} className="Menu-item" >
                                            <Link to="/casestudy" class="Menu-link">
                                            <span className="nav-text" >{item.name}</span>
                                            </Link>
                                           </Menu.Item>;

                                    })
                            }

                        </Menu>
                    </Sider>
                    <Layout>
                        <div style={{marginTop:'10px', marginLeft:'10px', marginRight:'10px'}}>
                            <Row style={{textAlign:'center'}} gutter={16}>
                                {

                                    this.state.label.map(function (item) {
                                        var idInfo = "/caseDescriptionNew/"+item.key;
                                        // return <Col style={{backgroundColor:'#00a0e9b3'}} xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>{item}</Col>
                                        return <Col style={{marginBottom:'10px'}} className="gutter-row" span={8}> <Link to={idInfo} style={{color:'#fff'}}><div className="gutter-box" style={{backgroundColor:"#4f9c6ca6"}}>{item.name}</div></Link> </Col>
                                    })
                                }

                            </Row>
                        </div>

                    </Layout>
                </Layout>
            </Layout>
        );
    }
}

export default CaseStudy;
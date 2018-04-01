/**
 * Created by fsg on 2018/3/21.
 */

import React from 'react';
import {Component} from 'react';
import {Layout, Menu, Icon} from 'antd';
import { Row, Col } from 'antd';
import {Switch, Route, Link} from 'react-router-dom';
import { Tag } from 'antd';
import './Test.css';
import MyHeader from '../CurHeader';
import './CaseStudy.css';
const {Header, Content, Footer, Sider} = Layout;


const illness = [
    {'key':1, 'name':'传染病', 'cases':['犬瘟热', '犬细小病毒', '犬传染性肝炎', '犬冠状病毒', '猫泛白细胞减少症', '猫病毒性病气管炎', '皮肤真菌感染']},
    {'key':2, 'name':'寄生虫病', 'cases':['蛔虫病', '钩虫病', '绦虫病', '球虫病', '疥螨虫病', '蚤病']},
    {'key':3, 'name':'内科病例', 'cases':['口炎', '肠炎', '肠便秘', '胰腺炎', '肝炎', '腹膜炎', '肛门腺炎', '感冒', '鼻炎', '气管支气管炎', '肺炎', '心力衰竭', '尿道感染', '尿结石', '膀胱炎', '肾炎', '佝偻病', '有机磷中毒', '糖尿病', '耳血肿', '中耳炎', '眼睑内翻', '结膜炎', '角膜炎']},
    {'key':4, 'name':'外产科病例', 'cases':['外伤', '外科感染', '骨折', '关节脱位', '湿疹', '皮炎', '脓皮病', '脱毛症', '趾间囊肿', '疝', '阴道炎', '阴道脱出', '子宫蓄脓', '难产', '乳房炎']},
    {'key':5, 'name':'常用手术', 'cases':['绝育', '剖腹产', '瞬膜腺增生物切除', '眼球摘除', '立耳术', '断尾术']},
    {'key':6, 'name':'免疫', 'cases':['犬', '猫免疫程序']}];

//病例学习
class CaseStudy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: illness,
            label: illness[1]['cases']
        };
    }


    handleClick = (e) => {
        console.log('click ', e);
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
                <MyHeader/>
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
                        <div style={{marginTop:'10px'}}>
                            <Row style={{textAlign:'center'}}>
                                {
                                    this.state.label.map(function (item) {
                                        return <Col style={{backgroundColor:'#00a0e9b3'}} xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>{item}</Col>
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
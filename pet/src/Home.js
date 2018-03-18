/**
 * Created by fsg on 2018/3/16.
 */
import React from 'react';
import {Component} from 'react';
import {Layout, Menu, Icon} from 'antd';
import FrontDesk from './FrontDesk';
import {Switch, Route, Link} from 'react-router-dom';
import 'antd/lib/layout/style/css';
import 'antd/lib/menu/style/css';
import 'antd/lib/icon/style/css';
const {Header, Content, Footer, Sider} = Layout;


class Home extends Component {
    render(){
        return (
            <Layout>

                <Sider
                    breakpoint="md"
                    collapsedWidth="0"
                    onCollapse={(collapsed, type) => {
                        console.log(collapsed, type);
                    }}
                >

                    <div className="logo"/>
                    <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">

                                <Icon type="bars"/>
                                <span className="nav-text">前台</span>

                        </Menu.Item>
                        <Menu.Item key="2">

                                <Icon type="frown-o"/>
                                <span className="nav-text">档案室</span>

                        </Menu.Item>
                        <Menu.Item key="3">

                                <Icon type="smile" />
                                <span className="nav-text">诊室</span>

                        </Menu.Item>
                        <Menu.Item key="4">
                            <Icon type="smile" />
                            <span className="nav-text">免疫室</span>
                        </Menu.Item>
                        <Menu.Item key="5">
                            <Icon type="smile" />
                            <span className="nav-text">化验室</span>
                        </Menu.Item>
                        <Menu.Item key="6">
                            <Icon type="smile" />
                            <span className="nav-text">影响室</span>
                        </Menu.Item>
                        <Menu.Item key="7">
                            <Icon type="smile" />
                            <span className="nav-text">专科检查室</span>
                        </Menu.Item>
                        <Menu.Item key="8">
                            <Icon type="smile" />
                            <span className="nav-text">处置室</span>
                        </Menu.Item>
                        <Menu.Item key="9">
                            <Icon type="smile" />
                            <span className="nav-text">药房</span>
                        </Menu.Item>
                        <Menu.Item key="10">
                            <Icon type="smile" />
                            <span className="nav-text">注射室</span>
                        </Menu.Item>
                        <Menu.Item key="11">
                            <Icon type="smile" />
                            <span className="nav-text">手术准备室</span>
                        </Menu.Item>
                        <Menu.Item key="12">
                            <Icon type="smile" />
                            <span className="nav-text">手术室</span>
                        </Menu.Item>
                        <Menu.Item key="13">
                            <Icon type="smile" />
                            <span className="nav-text">住院部</span>
                        </Menu.Item>
                        <Menu.Item key="14">
                            <Icon type="smile" />
                            <span className="nav-text">病理剖析室</span>
                        </Menu.Item>

                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{background: '#fff', padding: 0, textAlign: 'right', paddingRight: '20px'}}></Header>
                    <Content style={{margin: '24px 16px 0'}}>
                        <div style={{padding: 24, background: '#fff', minHeight: 500}}>
                            <Switch>
                                <Route exact path="/" component={FrontDesk}/>
                                <Route path="/frontdesk" component={FrontDesk}/>
                            </Switch>
                        </div>
                    </Content>
                    <Footer style={{textAlign: 'center'}}>
                        Workflow Design By YXL ©2018
                    </Footer>
                </Layout>

            </Layout>
        );
    }
}

export default Home;
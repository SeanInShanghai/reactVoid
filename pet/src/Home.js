/**
 * Created by fsg on 2018/3/16.
 */
import React from 'react';
import {Component} from 'react';
import {Layout, Menu, Icon} from 'antd';
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
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">

                                <Icon type="bars"/>
                                <span className="nav-text">你好</span>

                        </Menu.Item>
                        <Menu.Item key="2">

                                <Icon type="frown-o"/>
                                <span className="nav-text">Hello</span>

                        </Menu.Item>
                        <Menu.Item key="3">

                                <Icon type="smile" />
                                <span className="nav-text">看病</span>

                        </Menu.Item>
                    </Menu>
                </Sider>
            </Layout>
        );
    }
}

export default Home;
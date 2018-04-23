/**
 * Created by fsg on 2018/3/16.
 */
import React from 'react';
import {Component} from 'react';
import {Layout, Menu, Icon} from 'antd';
import FrontDesk from './pages/FrontDesk';
import ArchivesRoom from './pages/ArchivesRoom';
import AffectRoom from './pages/AffectRoom';
import ConsultingRoom from './pages/ConsultingRoom';
import DisposeRoom from './pages/DisposeRoom';
import ImmunityRoom from './pages/ImmunityRoom';
import InjectionRoom from './pages/InjectionRoom';
import InpatientRoom from './pages/InpatientRoom';
import LaboratoryRoom from './pages/LaboratoryRoom';
import OperationPrepareRoom from './pages/OperationPrepareRoom';
import OperationRoom from './pages/OperationRoom';
import PathologyAnalysisRoom from './pages/PathologyAnalysisRoom';
import PharmacyRoom from './pages/PharmacyRoom';
import SpecialConsulitingRoom from './pages/SpecialConsultingRoom';
import RouterPages from './RounterPages';

import Test from './pages/FrontDesk';
import MyHeader from './CurHeader';
import {Switch, Route, Link} from 'react-router-dom';
import 'antd/lib/layout/style/css';
import 'antd/lib/menu/style/css';
import './Home.css';
require('./pages/css/style.css');
require('./pages/css/slider.css');
// import 'antd/lib/icon/style/css';
const {Header, Content, Footer, Sider} = Layout;



class Home extends Component {

    componentDidMount() {
        var user = localStorage.getItem('user');
        if(user == null){
            this.props.history.push("/index");
        }
    }

    render(){
        return (
        <Layout>
            <MyHeader />
            <Layout>

                <Sider
                    breakpoint="md"
                    collapsedWidth="0"
                    onCollapse={(collapsed, type) => {
                        console.log(collapsed, type);
                    }}
                    style={{textAlign:'center', height:'100%', backgroundColor:'#fff'}}>

                    <div className="logo" />
                    <Menu theme="light" mode="inline" defaultSelectedKeys={['1']} >

                        <Menu.Item key="1" className="Menu-item">
                            <Link to="/home/frontdesk" class="Menu-link">
                                <span className="nav-text">前台</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="2" className="Menu-item">
                            <Link to="/home/archivesroom" class="Menu-link">
                                <span className="nav-text">档案室</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="3" className="Menu-item">
                            <Link to="/home/consulting" class="Menu-link">
                                <span className="nav-text">诊室</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="4" className="Menu-item">
                            <Link to="/home/immunity" class="Menu-link">
                                <span className="nav-text">免疫室</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="5" className="Menu-item">
                            <Link to="/home/laboratory" class="Menu-link">
                                <span className="nav-text">化验室</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="6" className="Menu-item">
                            <Link to="/home/affect" class="Menu-link">
                                <span className="nav-text">影像室</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="7" className="Menu-item">
                            <Link to="/home/specialconsulting" class="Menu-link">
                                <span className="nav-text">专科检查室</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="8" className="Menu-item">
                            <Link to="/home/dispose" class="Menu-link">
                                <span className="nav-text">处置室</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="9" className="Menu-item">
                            <Link to="/home/pharmacy" class="Menu-link">
                                <span className="nav-text">药房</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="10" className="Menu-item">
                            <Link to="/home/injection" class="Menu-link">
                                <span className="nav-text">注射室</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="11" className="Menu-item">
                            <Link to="/home/operationprepare" class="Menu-link">
                                <span className="nav-text">手术准备室</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="12" className="Menu-item">
                            <Link to="/home/operation" class="Menu-link">
                                <span className="nav-text">手术室</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="13" className="Menu-item">
                            <Link to="/home/inpatient" class="Menu-link">
                                <span className="nav-text">住院部</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="14" className="Menu-item">
                            <Link to="/home/pathologyanalysis" class="Menu-link">
                                <span className="nav-text">病理剖检室</span>
                            </Link>
                        </Menu.Item>

                    </Menu>
                </Sider>
                <Layout>
                    {/*<Header style={{background: '#fff', padding: 0, textAlign: 'right', paddingRight: '20px'}}></Header>*/}

                    <Content >
                        <div>
                            <Switch>
                                <Route exact path="/home" component={FrontDesk}/>
                                <Route path="/home/frontdesk" component={FrontDesk}/>
                                <Route path="/home/archivesroom" component={ArchivesRoom}/>
                                <Route path="/home/consulting" component={ConsultingRoom}/>
                                <Route path="/home/immunity" component={ImmunityRoom}/>
                                <Route path="/home/laboratory" component={LaboratoryRoom}/>
                                <Route path="/home/affect" component={AffectRoom}/>
                                <Route path="/home/specialconsulting" component={SpecialConsulitingRoom}/>
                                <Route path="/home/dispose" component={DisposeRoom}/>
                                <Route path="/home/pharmacy" component={PharmacyRoom}/>
                                <Route path="/home/injection" component={InjectionRoom}/>
                                <Route path="/home/operationprepare" component={OperationPrepareRoom}/>
                                <Route path="/home/operation" component={OperationRoom}/>
                                <Route path="/home/inpatient" component={InpatientRoom}/>
                                <Route path="/home/pathologyanalysis" component={PathologyAnalysisRoom}/>
                            </Switch>

                        </div>
                    </Content>
                    <Footer style={{textAlign: 'center'}}>
                        Pet Hospital Website Designed By GROUP23 ©2018
                    </Footer>
                </Layout>

            </Layout>

        </Layout>
        );
    }
}

export default Home;
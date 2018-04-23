/**
 * Created by fsg on 2018/3/31.
 */
import React, {Component} from 'react';
import {Layout, Menu, Icon} from 'antd';
import { Modal, Button } from 'antd';
import axios from 'axios';
import {Switch, Route, Link} from 'react-router-dom';
import FrontDesk from '../FrontDesk';
import GetTestId from './getTestWithId';
import MyHeader from '../../CurHeader';

require('../css/style.css');
require('../css/slider.css');

const SubMenu = Menu.SubMenu;

const {Header, Content, Footer, Sider} = Layout;

class NewTest extends Component{


    rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
    // state = {
    //
    // };
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            // rootSubmenuKeys : ['sub1', 'sub2', 'sub4'],
            openKeys: ['sub1'],
        };
    }
    //
    componentDidMount() {
        var user = localStorage.getItem('user');
        if(user == null){
            this.props.history.push("/index");
        }
        var host = "http://localhost/VisPethos/php/getIllnessAll.php";

        // var testId = this.props.match.params.testId;
        // if(testId != null){
        //     // alert(testId);
        // }


        axios({
            method: 'get',
            url: `${host}`
        }).then( response => {
            var fullData = response.data;
            // alert(fullData[0]);
            this.setState({data:fullData});
        }).catch(error => {

        });

    }






    onOpenChange = (openKeys) => {
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({ openKeys });
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : [],
            });
        }
    }

     refreshPage = () => {
        window.location.reload();
    }

    render(){

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
                        <Menu theme="light" mode="inline" defaultSelectedKeys={['1']} >

                            {/*<Menu.Item key="1" className="Menu-item">
                                <Link to="/newTest/getTest/101" class="Menu-link"  params={{ testId: "101"}} onClick={() => this.refreshPage()}>
                                    <span className="nav-text">前台</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="1" className="Menu-item">
                                <Link to="/newTest/getTest/102" class="Menu-link"  params={{ testId: "102"}}>
                                    <span className="nav-text">前台2</span>
                                </Link>
                            </Menu.Item>*/}

                            {
                                this.state.data.map(function(item){
                                    return <SubMenu key={item.illId} title={<span><span style={{color:"#0A0A0A"}}>{item.illName}</span></span>}>
                                        {/*{
                                            item.test.map(function (test) {
                                                    return <div>{test.testName}</div>
                                                }

                                            )
                                        }*/}
                                        {
                                            item.test.map(function (test) {
                                                    return  <Menu.Item key={test.testId}>
                                                        <Link to={"/newTest/getTest/" + test.testId} class="Menu-link" params={{ testId: test.testId}} ><span style={{color:"#0A0A0A"}}>{test.testName}</span></Link>
                                                    </Menu.Item>
                                                }

                                            )
                                        }

                                        {/*<Menu.Item key={item.test[0].testId}>*/}
                                            {/*/!*{link} = {"/newTest/getTest/"}+{item.test[0].testId}*!/*/}
                                            {/*<Link to={"/newTest/getTest/" + item.test[0].testId} class="Menu-link" params={{ testId: item.test[0].testId}} ><span style={{color:"#0A0A0A"}}>{item.test[0].testName}</span></Link>*/}
                                        {/*</Menu.Item>*/}
                                        {/*<Menu.Item key={item.test[1].testId}>*/}
                                            {/*/!*{link} = {"/newTest/getTest/"}+{item.test[0].testId}*!/*/}
                                            {/*<Link to={"/newTest/getTest/" + item.test[1].testId} class="Menu-link" params={{ testId: item.test[1].testId}} ><span style={{color:"#0A0A0A"}}>{item.test[1].testName}</span></Link>*/}
                                        {/*</Menu.Item>*/}


                                    </SubMenu>;

                                })
                            }

                        </Menu>
                    </Sider>
                <Layout>
                    <Content >
                        <div>
                            <Switch>
                                {/*<Route exact path="/newTest/123" component={GetTestId}/>*/}
                                <Route path="/newTest/getTest/:testId" component={GetTestId}/>
                                {/*<Route path="/newTest/frontdesk" component={FrontDesk}/>*/}
                            </Switch>
                        </div>
                    </Content>
                </Layout>
                </Layout>


            </Layout>
        );
    }
}

export default NewTest;
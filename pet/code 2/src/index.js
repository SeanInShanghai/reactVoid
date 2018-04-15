import React from 'react';
import ReactDOM from 'react-dom';
import CaseStudy from './pages/CaseStudy';
import './index.css';
import Home from './learn_flow';
import Initial from './Initial';
import {HashRouter} from 'react-router-dom';
import {Switch, Route, Link, Router} from 'react-router-dom';
import View from './pages/views/view';
import Binggou from './pages/views/view_bingpou';
import Chuzhi from './pages/views/view_chuzhi';
import Dangan from './pages/views/view_dangan';
import Huayan from './pages/views/view_huayan';
import Mianyi from './pages/views/view_mianyi';
import Qiantai from './pages/views/view_qiantai';
import Shoushu from './pages/views/view_shoushu';
import Yaofang from './pages/views/view_yaofang';
import Yingxiang from './pages/views/view_yingxiang';
import Zhenshi from './pages/views/view_zhenshi';
import Zhuanke from './pages/views/view_zhuanke';
import Zhunbei from './pages/views/view_zhunbei';
import Zhushe from './pages/views/view_zhushe';
import Zhuyuan from './pages/views/view_zhuyuan';
import PorIndex from './ProIndex';
import Learn from './pages/learn/learn';
import Test from './pages/test/test';
import Home1 from './learn_flow_1';
import Home2 from './learn_flow_2';
import Home3 from './learn_flow_3';
import LoginStorage from './pages/login/loginStorage';
import LoginCheck from './pages/login/loginCheck';
import PhpTest from './pages/login/phpTest';
import Login from './pages/login/login';
import Register from './pages/login/register';
// import RounterPages from "./RounterPages";
// import Switch from "antd/lib/switch/index.d";

ReactDOM.render(
    <HashRouter>
        {/*<Initial />*/}
{/*        <div>
            <Route exact path="/" component={Initial} />
            <Route path="/home" component={Home} />
        </div>*/}
        {/*<Home/>*/}
        <div>
            <Switch>
                <Route path="/home" component={Home} />
                <Route path="/view/view" component={View}/>
                <Route path="/view/binggou" component={Binggou}/>
                <Route path="/view/chuzhi" component={Chuzhi}/>
                <Route path="/view/dangan" component={Dangan}/>
                <Route path="/view/huayan" component={Huayan}/>
                <Route path="/view/mianyi" component={Mianyi}/>
                <Route path="/view/qiantai" component={Qiantai}/>
                <Route path="/view/shoushu" component={Shoushu}/>
                <Route path="/view/yaofang" component={Yaofang}/>
                <Route path="/view/yingxiang" component={Yingxiang}/>
                <Route path="/view/zhenshi" component={Zhenshi}/>
                <Route path="/view/zhuanke" component={Zhuanke}/>
                <Route path="/view/zhunbei" component={Zhunbei}/>
                <Route path="/view/zhushe" component={Zhushe}/>
                <Route path="/view/zhuyuan" component={Zhuyuan}/>
                {/*<Route path="/" component={PorIndex}/>*/}
                {/*<Route exact path="/" component={PorIndex}/>*/}
                <Route path="/index" component={PorIndex}/>
                <Route path="/learn" component={Learn}/>
                <Route path="/test" component={Test}/>
                <Route path="/casestudy" component={CaseStudy}/>
                <Route path="/home1" component={Home1}/>
                <Route path="/home2" component={Home2}/>
                <Route path="/home3" component={Home3}/>
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/phpTest" component={PhpTest} />
                {/*<Route path="/LoginStorage" component={LoginStorage} />*/}
                {/*<Route path="/LoginCheck" component={LoginCheck} />*/}
            </Switch>
        </div>
        {/*<CaseStudy/>*/}
        {/*<div>*/}
            {/*<Route path='/' component={Home}/>*/}
            {/*/!*<RounterPages />*!/*/}
            {/*<Route path='/view' component={View}/>*/}
        {/*</div>*/}
        {/*<RounterPages/>*/}
    </HashRouter>
    ,
    document.getElementById('root'));
// registerServiceWorker();

// ReactDOM.render(
//     <Test/>
//     ,
//     document.getElementById('root'));

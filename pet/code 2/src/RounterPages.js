/**
 * Created by fsg on 2018/3/31.
 */

import React, {Component} from 'react';
import {Switch, Route, Link, hashHistory} from 'react-router-dom';
import View from './pages/views/view';
import MyHeader from './CurHeader';
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



class RounterPages extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/view" component={View}/>
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
                </Switch>
            </div>
        );
    }
}

export default RounterPages;
/**
 * Created by fsg on 2018/3/31.
 */
import React, {Component} from 'react';
import {Layout, Menu, Icon} from 'antd';
import {Switch, Route, Link} from 'react-router-dom';
import MyHeader from '../../CurHeader';
import Binggou from '../views/view_bingpou';
require('../css/style.css');
require('../css/slider.css');

/**
 * to do：插入svg
 */

class View extends Component{
    render(){
        return(

            <Layout>
                <MyHeader/>

                <div class="main">
                    <div class="content-top">
                        <div class="wrap" >
                            <div class="itemCon" >
                                <div id="hospitalMap"></div>
                                <div id="stateTip" ></div>
                            </div>


                            <svg
                                width="900"
                                height="820"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                fill="none"
                                stroke="#0000FF"
                            >
                                <defs>
                                    <linearGradient id="linearGradient">

                                    </linearGradient>
                                </defs>
                                <Link to="/view/zhushe"><path id="zhushe" d="M9 10L158 10L158 110L9 110L9 10Z" fill="#CCCCCC" fill-opacity="1" stroke="none" xmlns="http://www.w3.org/2000/svg" />
                                <text id="zhushe" x="43" y="54"  font-family="Microsoft YaHei UI" font-size="12" fill="none" fill-opacity="0" stroke="#0000FF">
                                    注射室</text></Link>
                                <Link to="/view/chuzhi"><path id="chuzhi" d="M169 11L298 11L298 110L169 110L169 11Z" fill="#CCCCCC" stroke="none" stroke-opacity="1" xmlns="http://www.w3.org/2000/svg" />
                                <text id="chuzhi" x="192" y="51"  font-family="Microsoft YaHei UI" font-size="12" fill="none" stroke="#0000FF" fill-opacity="0" baseline-shift="baseline">
                                    处置室</text></Link>
                                <Link to="/view/shoushu"><path id="shoushu" d="M378 10L578 10L578 109L378 109L378 10Z" fill="#CCCCCC" fill-opacity="1" stroke="none" xmlns="http://www.w3.org/2000/svg" />
                                <text id="shoushu" x="395" y="44" font-family="Microsoft YaHei UI" font-size="12" fill="none" fill-opacity="0" stroke="#0000FF" baseline-shift="baseline">
                                    手术室</text></Link>
                                <Link to="/view/dangan"><path id="dangan" d="M170 120L319 120L319 219L170 219L170 120Z" fill="#CCCCCC" fill-opacity="1" stroke="none" xmlns="http://www.w3.org/2000/svg" />
                                <text id="dangan" x="199" y="165"  font-family="Microsoft YaHei UI" font-size="12" fill="none" fill-opacity="0" stroke="#0000FF" baseline-shift="baseline">
                                    档案室</text></Link>
                                <Link to="/view/zhunbei"><path id="zhunbei" d="M309 10L368 10L368 109L309 109L309 10Z" fill="#CCCCCC" fill-opacity="1" stroke="none" xmlns="http://www.w3.org/2000/svg" />
                                <text id="zhunbei" x="316" y="44" font-family="Microsoft YaHei UI" font-size="12" fill="none" fill-opacity="0" stroke="#0000FF" baseline-shift="baseline">
                                    手术准备室</text></Link>
                                <Link to="/view/yaofang"><path id="yaofang" d="M169 230L318 230L318 329L169 329L169 230Z" fill="#CCCCCC" fill-opacity="1" stroke="none" xmlns="http://www.w3.org/2000/svg" />
                                <text id="yaofang" x="203" y="276" font-family="Microsoft YaHei UI" font-size="12" fill="none" fill-opacity="0" stroke="#0000FF" baseline-shift="baseline">
                                    药房</text></Link>
                                <Link to="/view/zhenshi"><path id="zhenshi" d="M169 340L320 340L320 640L169 640L169 340Z" fill="#CCCCCC" fill-opacity="1" stroke="none" xmlns="http://www.w3.org/2000/svg" />
                                <text id="zhenshi" x="208" y="493" font-family="Microsoft YaHei UI" font-size="12" fill="none" fill-opacity="0" stroke="#0000FF" baseline-shift="baseline">
                                    诊室</text></Link>
                                <Link to="/view/huayan"><path id="huayan" d="M329 119L579 119L579 270L329 270L329 119Z" fill="#CCCCCC" fill-opacity="1" stroke="none" xmlns="http://www.w3.org/2000/svg" />
                                <text id="huayan" x="402" y="185" font-family="Microsoft YaHei UI" font-size="12" fill="none" fill-opacity="0" stroke="#0000FF" baseline-shift="baseline">
                                    化验室</text></Link>
                                <Link to="/view/mianyi"><path id="mianyi" d="M8 650L208 650L208 810L8 810L8 650Z" fill="#CCCCCC" fill-opacity="1" stroke="none" xmlns="http://www.w3.org/2000/svg" />
                                <text id="mianyi" x="47" y="730" font-family="Microsoft YaHei UI" font-size="12" fill="none" fill-opacity="0" stroke="#0000FF" baseline-shift="baseline">
                                    免疫室</text></Link>
                                <Link to="/view/bingpou"><path id="bingpou" d="M218 650L418 650L418 810L218 810L218 650Z" fill="#CCCCCC" fill-opacity="1" stroke="none" xmlns="http://www.w3.org/2000/svg" />
                                <text id="bingpou" x="253" y="734" font-family="Microsoft YaHei UI" font-size="12" fill="none" fill-opacity="0" stroke="#0000FF" baseline-shift="baseline">
                                    病理剖检室</text></Link>
                                <Link to="/view/zhuanke"><path id="zhuanke" d="M428 651L628 651L629 809L429 809L428 651Z" fill="#CCCCCC" fill-opacity="1" stroke="none" xmlns="http://www.w3.org/2000/svg" />
                                <text id="zhuanke" x="463" y="737" font-family="Microsoft YaHei UI" font-size="12" fill="none" fill-opacity="0" stroke="#0000FF" baseline-shift="baseline">
                                    专科检查室</text></Link>
                                <Link to="/view/qiantai"><path id="qiantai" d="M8 120L158 120L158 641L8 641L8 120Z" fill="#CCCCCC" fill-opacity="1" stroke="none" xmlns="http://www.w3.org/2000/svg" />
                                <text id="qiantai" x="48" y="314" font-family="Microsoft YaHei UI" font-size="12" fill="none" fill-opacity="0" stroke="#0000FF" baseline-shift="baseline">
                                    前台</text></Link>
                                <Link to="/view/yingxiang"><path id="yingxiang" d="M588 79L718 79L718 558L590 558L588 79Z" fill="#CCCCCC" fill-opacity="1" stroke="none" xmlns="http://www.w3.org/2000/svg" />
                                <text id="yingxiang" x="619" y="278" font-family="Microsoft YaHei UI" font-size="12" fill="none" fill-opacity="0" stroke="#0000FF" baseline-shift="baseline">
                                    影像室</text></Link>
                                <Link to="/view/zhuyuan"><path id="zhuyuan" d="M589 10L888 10L888 809L639 809L639 650L729 650L729 71L589 71L589 10Z" fill="#CCCCCC" fill-opacity="1" stroke="none" xmlns="http://www.w3.org/2000/svg" />
                                <text id="zhuyuan" x="763" y="274" font-family="Microsoft YaHei UI" font-size="12" fill="none" fill-opacity="0" stroke="#0000FF" baseline-shift="baseline">
                                    住院部</text></Link>

                            </svg>



                        </div>
                    </div>
                </div>

            </Layout>
        );
    }
}

export default View;
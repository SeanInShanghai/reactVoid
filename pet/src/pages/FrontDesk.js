/**
 * Created by fsg on 2018/3/20.
 */

import React from 'react';
import {Component} from 'react';
import {Carousel} from 'antd';
import './frontdesk.css';
require('./css/style.css');
require('./css/slider.css');

//前台


function onChange(a, b, c) {
    console.log(a, b, c);
}

class Test extends Component {
    render(){
        return(

            <div>

{/*                 <div class="header">
                     <div class="wrap">
                         <div class="header-top">
                             <div class="logo">
                                <a href="index.html"><img src={require('./images/logo.png')} alt=""/> </a>
                             </div>
                             <div class="cart">
                                 <div class="span6 header-sidebar" data-motopress-type="dynamic-sidebar" data-motopress-sidebar-id="footer-sidebar-4">
                                     <div id="text-6" class="visible-all-devices "><div class="textwidget">
                                         <div class="section group">
                                             <a href="#" class="login-btn">注册</a>
                                             <a href="#" class="register-btn">登录</a></div>
                                     </div></div>
                                     <div><img src={require('./images/footprint.png')} alt="" /></div>

                                 </div>

                             </div>
                             <div class="clear"></div>
                         </div>
                     </div>
                 </div>
                <div class="header-bottom">
                    <div class="wrap">
                        <div id='cssmenu'>

                        </div>

                        <div class="clear"></div>
                    </div>
                </div>*/}


                {/*<div style={{marginTop:'3px'}}>
                    <Carousel autoplay>
                        <div><h3><img style={{width:'100%'}} src={require('./images/banner1.jpg')}/></h3></div>
                        <div><h3><img style={{width:'100%'}} src={require('./images/banner2.jpg')}/></h3></div>
                        <div><h3><img style={{width:'100%'}} src={require('./images/banner3.jpg')}/></h3></div>
                        <div><h3><img style={{width:'100%'}} src={require('./images/banner4.jpg')}/></h3></div>
                        <div><h3><img style={{width:'100%'}} src={require('./images/banner5.jpg')}/></h3></div>
                    </Carousel>
                </div>*/}
                <div class="main" style={{width:'80%', marginLeft:'10%'}}>
                    <p class="titlePara"><center><span class="title" ><b>前台业务流程</b></span></center></p>


                    <p class="paragraph" style={{width:'50%', marginLeft:'15%'}}>
                        <span class="description" >
                            <ul>
                                <li>
                            1、病历档案的建立与管理并完善管理模式；</li>
                                <li>
                            2、来电接听、预约安排、售后通知等，疫苗客户提醒及会员客户的回访维护；
                                    </li>
                                <li>
                            3、核查患病动物入院、出院等手续是否完整；
                                    </li>
                                <li>
                            4、接待客户并引领服务，完善客户接待流程；
                                    </li>
                                <li>
                            5、前台超市区的产品销售并参与院内市场策划和推广；
                                    </li>
                                <li>
                            6、提高医院形象;
                                    <ul style={{marginLeft:'10%'}}>
                                        <li>
                                a.  院内员工的客户接待流程、超市产品认识、销售技巧、形象礼仪等培训；
                                            </li>
                                        <li>
                                b. 保持前台、超市区、接待区域的舒适、整洁和安全防范工作；
                                            </li>
                                        <li>
                                c. 以专业的知识和热情的态度接听电话并处理相关事宜；
                                            </li>
                                        <li>
                                d.  维持前台区域的工作秩序。
                                            </li>
                                        </ul>
                                    </li>
                                <li>
                            7、合理应用医院电脑软件程序，对前台的办公设备进行保养；
                                    </li>
                                <li>
                            8、各种销售报表的制作；
                                    </li>
                                <li>
                            9、完成院长交办的工作任务；
                                    </li>
                                <li>
                            10、不断提升自身能力以胜任本职工作。
                                    </li>
                            </ul>
                        </span>
                    </p>

                    <center><img src={require('../pages/descimg/处置室.jpeg')}/></center>
                </div>



             </div>
        );
    }
}

export default Test;
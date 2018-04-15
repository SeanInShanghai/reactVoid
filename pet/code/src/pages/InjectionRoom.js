/**
 * Created by fsg on 2018/3/19.
 */
import React from 'react';
import {Component} from 'react';
require('./PageContent.css');
//注射室
class InjectionRoom extends Component {
    render(){
        return(
            <div class="main" >
                <p class="titlePara"><center><span class="title" ><b>注射室</b></span></center></p>


                <p class="paragraph"><span class="description" >执业兽医师负责注射工作包括：静脉注射、皮下注射、肌肉注射、局部封闭注射的操作流程，常见问题的处理方法，输液泵、加热垫的使用方法，注射室的消毒流程。助理负责协助执业兽医师进行注射工作。</span>
                </p>

                <center><img src={require('../pages/descimg/注射室.jpeg')}/></center>
                <br/>
                <center><img src={require('../pages/descimg/注射室2.jpeg')}/></center>
            </div>
        );
    }
}

export default InjectionRoom;
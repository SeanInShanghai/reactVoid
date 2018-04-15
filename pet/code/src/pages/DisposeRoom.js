/**
 * Created by fsg on 2018/3/19.
 */
import React from 'react';
import {Component} from 'react';
require('./PageContent.css');
//处置室
class DisposeRoom extends Component {
    render(){
        return(
            <div class="main" >
                <p class="titlePara"><center><span class="title" ><b>处置室</b></span></center></p>


                <p class="paragraph"><span class="description" >口服投药、换药、清洗耳道、挤肛门腺、修剪指甲、鼻饲管放置、灌肠、安乐死等基本处置操作流程。</span>
                </p>

                <center><img src={require('../pages/descimg/处置室.jpeg')}/></center>
            </div>
        );
    }
}

export default DisposeRoom;
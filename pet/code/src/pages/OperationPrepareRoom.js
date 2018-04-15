/**
 * Created by fsg on 2018/3/19.
 */
import React from 'react';
import {Component} from 'react';
//手术准备室
class OperationPrepareRoom extends Component {
    render(){
        return(
            <div>

                <div class="main" >
                    <p class="titlePara"><center><span class="title" ><b>手术准备室</b></span></center></p>


                    <p class="paragraph"><span class="description" >医助、执业兽医师负责手术前准备工作包括：术前对宠物进行麻前给药、注射麻醉、吸入麻醉的流程，保定、剃毛、消毒的流程，常见手术器械的介绍，手术器械包的准备、灭菌流程，手术人员的消毒、穿戴手术衣流程等。</span>
                    </p>

                    <center><img src={require('../pages/descimg/手术准备室.jpeg')}/></center>
                </div>
            </div>
        );
    }
}

export default OperationPrepareRoom;
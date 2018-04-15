/**
 * Created by fsg on 2018/3/19.
 */
import React from 'react';
import {Component} from 'react';
//手术室
class OperationRoom extends Component {
    render(){
        return(
            <div>

                <div class="main" >
                    <p class="titlePara"><center><span class="title" ><b>手术室</b></span></center></p>


                    <center><p class="paragraph"><span class="description" >兽医负责手术工作包括：手术无菌要求，常规手术、特殊手术等的操作规范。</span>
                    </p></center>

                    <center><img src={require('../pages/descimg/手术室.jpeg')}/></center>
                </div>
            </div>
        );
    }
}

export default OperationRoom;
/**
 * Created by fsg on 2018/3/19.
 */
import React from 'react';
import {Component} from 'react';
//影像室
class AffectRoom extends Component {
    render(){
        return(
            <div>

                <div class="main" >
                    <p class="titlePara"><center><span class="title" ><b>影像室业务流程</b></span></center></p>



                    <ul class="list">
                        <li>X线检查、B超检查以及CT、MRI检查。
                        </li>
                        <li>X线检查：X光机的结构功能介绍、全身各部位的摆位、拍摄条件的选择、拍摄流程、洗片的操作流程。
                        </li>

                        <li>B超检查：扫查探头的选择、全身各个部位扫查的摆位、腹部扫查流程。
                        </li>
                    </ul>
                    <center><img src={require('../pages/descimg/影像室.jpeg')}/></center>
                </div>
            </div>
        );
    }
}

export default AffectRoom;
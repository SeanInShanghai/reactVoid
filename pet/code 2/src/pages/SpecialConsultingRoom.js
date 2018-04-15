/**
 * Created by fsg on 2018/3/19.
 */
import React from 'react';
import {Component} from 'react';
//专科检查室
class SpecialConsultingRoom extends Component {
    render(){
        return(
            <div>

                <div class="main" >
                    <div style={{marginLeft:'15%',marginRight:'15%'}}>
                        <p class="titlePara"><center><span class="title" ><b>住院部</b></span></center></p>
                        <center><span style={{fontSize:'18px'}} ><b>眼科、骨科、神经科、心脏科等专科疾病的检查</b></span></center>
                        <br/>
                        <ul class="list">

                            <li class="subli"><span style={{fontSize:'18px', marginBottom:'10px'}}>眼科</span>
                                <li>眼睛检查、眼压检查、裂隙灯检查、眼底检查、泪液分泌量检查等
                                </li>
                            </li>

                            <li class="subli"><span style={{fontSize:'18px', marginBottom:'10px'}}>心脏科检查</span>
                                <li>心脏听诊、心电图检查等</li>
                            </li>
                            <li class="subli"><span style={{fontSize:'18px', marginBottom:'10px'}}>神经学检查</span>
                                <li>步态检查、各种反射检查等</li>
                            </li>

                        </ul>
                    </div>
                    <center><img src={require('../pages/descimg/住院部.jpg')}/></center>
                </div>
            </div>
        );
    }
}

export default SpecialConsultingRoom;
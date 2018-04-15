/**
 * Created by fsg on 2018/3/19.
 */
import React from 'react';
import {Component} from 'react';
require('./PageContent.css');
//诊室
class ConsultingRoom extends Component {
    render(){
        return(
            <div>

                <div class="main" >
                    <p class="titlePara"><center><span class="title" ><b>诊室业务流程</b></span></center></p>


                    <p class="paragraph"><span class="description" >对宠物进行临床基本检查（视、听、触、嗅等）、疾病诊断；与宠物主人交流并根据情况开具处方。</span>
                    </p>

                    <center><img src={require('../pages/descimg/病理剖检室.jpg')}/></center>
                </div>
            </div>
        );
    }
}

export default ConsultingRoom;
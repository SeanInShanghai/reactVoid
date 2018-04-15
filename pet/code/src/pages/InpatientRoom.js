/**
 * Created by fsg on 2018/3/19.
 */
import React from 'react';
import {Component} from 'react';
require('./PageContent.css');
//住院部
class InpatientRoom extends Component {
    render(){
        return(
            <div>

                <div class="main" >
                    <div style={{marginLeft:'15%',marginRight:'15%'}}>
                        <p class="titlePara"><center><span class="title" ><b>住院部</b></span></center></p>


                        <ul class="list">
                            <li class="subli"><span style={{fontSize:'18px', marginBottom:'10px'}}>传染性疾囊的护理</span>
                                <li><b>基础护理</b>：病情较轻，护理人员根据宠物病情按照医嘱，对宠物进行治疗：喂药、打针、输液等。
                                </li>
                                <li><b>特别护理</b>：病情较重或有生命危险，需要连续监测其各项生命指标(如体温、呼吸、心率、血氧饱和度等)。
                                </li>
                            </li>

                            <li class="subli"><span style={{fontSize:'18px', marginBottom:'10px'}}>非传染性疾病的护理基础护理</span>
                                <li>病情较轻，护理人员根据宠物病情按照医279嘱，对宠物进行治疗：喂药、打针、输液等。
                                </li>
                                <li><b>特别护理</b>：病情较重或有生命危险，需要连续监测其各项生命指标(如体温、呼吸、心率、血氧饱和度等)。
                                </li>
                            </li>

                            <li class="subli"><span style={{fontSize:'18px', marginBottom:'10px'}}>病历的记曩、归档与管理</span>
                                <li><b>病历记录</b>：对每一个入院病历进行认真记录：入院时间、蓄主的详细联系方式、患病动物的基本情况、治疗过程等等。</li>
                                <li><b>归档</b>：住院部应有完整的病历，每月注意检查是否完整，同时要填写好索引，依序整理，编号存档。</li>
                                <li><b>管理</b>：专人对档案进行管理，制定—个借阅制度。</li>
                            </li>

                        </ul>
                    </div>
                    <center><img src={require('../pages/descimg/住院部.jpg')}/></center>
                </div>
            </div>
        );
    }
}

export default InpatientRoom;
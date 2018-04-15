/**
 * Created by fsg on 2018/3/19.
 */
import React from 'react';
import {Component} from 'react';
//化验室
class LaboratoryRoom extends Component {
    render(){
        return(
            <div>

                <div class="main" >
                    <p class="titlePara"><center><span class="title" ><b>化验室业务流程</b></span></center></p>


                    <p class="paragraph"><span class="description" >对送检样本进行预处理，对相应样本进行血常规、血液生化、电解质、血气、血凝指标、激素指标、尿常规、微生物学检查、药敏、皮肤刮片、粪便检查、传染病检查等检查操作流程。</span>
                    </p>
                    <p>具体工作流程：</p>
                    <ul class="list">
                        <li>1、原料验收
                        </li>
                        <li>2、取样
                        </li>

                        <li>3、样品登记
                        </li>
                        <li>4、样品检验
                        </li>
                        <li>5、填写记录
                        </li>
                        <li>6、出具检验报告单
                        </li>
                        <li>7、检验报告上报
                        </li>
                    </ul>
                    <center><img src={require('../pages/descimg/病理剖检室.jpg')}/></center>
                </div>
            </div>
        );
    }
}

export default LaboratoryRoom;
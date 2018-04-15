/**
 * Created by fsg on 2018/3/19.
 */
import React from 'react';
import {Component} from 'react';
import { Tooltip } from 'antd';
require('./PageContent.css');

//病理分析室
class PathologyAnalysisRoom extends Component {
    render(){
        return(
            <div>

                <div class="main" >
                    <p class="titlePara"><center><span class="title" ><b>病理剖检室</b></span></center></p>


                    <p class="paragraph"><span class="description" >剖检前的准备工作 剖检者必须了解病死动物的病史， 包括发病时间、 临床症状、 免疫情况及用何种药及效果，做到心中有数。准备剖检器械及所 需药品。
                    剖检常用的器械有：刀（剥皮刀，解剖刀，外科手术刀） ，剪（外科剪，肠剪，骨剪） ，镊子，骨锯，斧子。一般情况下，有一把手术刀、一把剪子和一把镊子即可工作。
                    剖检最常用的药品有：圣碘、联灭、高锰酸钾、甘油生理盐水、 固定液（福尔马林）和贮存病料的容器等。</span>
                    </p>
                    <ul class="list">
                        <li>1．尸体剖检前，先用圣碘消毒液清洗尸体体表，防止体表病变被污泥覆盖和剖检时体表尘土、 羽毛扬起。 特别对死于传染病尸体时，要慎重，严防病原扩散、危害动物和人体健康。
                        </li>
                        <li>2. 剖检过程中应穿好工作服、胶靴，戴好口罩、工作帽，戴好乳胶手套。剖检操作时要稳妥，万一不慎割破皮肤，应立即停止剖检，以圣碘抹伤口，换人。仔细观察表皮、内脏器官的病变，并对猪场的老板或技术人员进行讲解。
                            剖检后
                        </li>

                        <li>3. 剖检完毕，应立即将尸体、垫料进行焚烧。剖检后器械先用清水冲洗干净，再用圣碘浸泡至少半个小时消毒，然后在密闭的室内进行熏蒸，待干燥后包装待用。剖检完毕后，将用具、衣物清洗干净、消毒，一次性物品消毒后深埋或焚烧。
                        </li>
                        <li>4. 确定用药方案
                        临床兽医根据当地疫病的流行特点，结合临床症状和病理剖检，初步做出诊断，开具用药方案，并告诉具体的使用剂量和使用方法。定期回访防治效果。
                        </li>
                    </ul>
                    <center><img src={require('../pages/descimg/病理剖检室.jpg')}/></center>
                </div>
            </div>
        );
    }
}

export default PathologyAnalysisRoom;
/**
 * Created by fsg on 2018/3/19.
 */
import React from 'react';
import {Component} from 'react';

class ArchivesRoom extends Component {
    render(){
        return(
            <div>

                <div class="main" >
                    <p class="titlePara"><center><span class="title" ><b>档案室</b></span></center></p>


                    <p class="paragraph"><span class="description" >档案收集</span>
                        <span>收集本院文书、科研、基建、设备、会计等具有保存价值的文件及声像、实物材料</span>
                    </p>
                    <p class="paragraph"><span class="description" >档案整理</span>
                        <ul class="list">
                            <li>1.装订
                            </li>
                            <li>2.分类
                            </li>

                            <li>3.排列
                            </li>
                            <li>4.编号
                            </li>
                            <li>5.编目
                            </li>
                            <li>6.装盒
                            </li>
                            <li>7.上架
                            </li>
                            <li>8.装订目录、
                            </li>
                        </ul>
                    </p>
                    <p class="paragraph"><span class="description" >档案鉴定</span>
                        <ul class="list">
                            <li>鉴定组织领导
                            </li>
                            <li>鉴定程序标准
                            </li>
                            <li>档案销毁制度
                            </li>

                        </ul>
                    </p>
                    <p class="paragraph"><span class="description" >档案保管</span>
                        <ul class="list">
                            <li>档案库房管理
                            </li>
                            <li>档案案例保护
                            </li>
                            <li>延长档案寿命的技术措施
                            </li>

                        </ul>
                    </p>
                    <p class="paragraph"><span class="description" >档案检索</span>
                        <ul class="list">
                            <li>制检索工具及建立检索系统
                            </li>
                            <li>利用检索工具检索
                            </li>
                        </ul>
                    </p>
                    <p class="paragraph"><span class="description" >档案编研</span>
                        <ul class="list">
                            <li>1.选题
                            </li>
                            <li>2.选材
                            </li>
                            <li>3.加工编辑
                            </li>
                            <li>4.总纂
                            </li>
                            <li>5.审核
                            </li>
                        </ul>
                    </p>
                    <p class="paragraph"><span class="description" >档案利用</span>
                        <ul class="list">
                            <li>1.档案阅览
                            </li>
                            <li>2.档案外借
                            </li>
                            <li>3.电话查档
                            </li>
                            <li>4.网络查询
                            </li>
                            <li>5.档案复制供应
                            </li>
                            <li>6.档案陈列展览
                            </li>
                            <li>7.档案咨询服务
                            </li>

                        </ul>
                    </p>
                    <center><img src={require('../pages/descimg/档案室.jpeg')}/></center>
                </div>
            </div>
        );
    }
}

export default ArchivesRoom;
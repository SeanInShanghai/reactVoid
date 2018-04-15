/**
 * Created by fsg on 2018/3/19.
 */
import React from 'react';
import {Component} from 'react';
//免疫室
class ImmunityRoom extends Component {
    render(){
        return(
            <div class="main" >
                <p class="titlePara"><center><span class="title" ><b>免疫室业务流程</b></span></center></p>


                <p class="paragraph" style={{width:'50%', marginLeft:'15%'}}><span class="description" >
                    <div><p>犬</p>
                        <ul>
                            <li>
首免：仔狗出生5-6周，接种六联苗或七联苗
                                </li>
                            <li>
二免：进行首免2周后，接种六联苗或七联苗
                                </li>
                            <li>
三免：进行二免2周后，接种六联苗或七联苗   成年后（1岁以上）：每年两次（春、秋）注射疫苗。
                                </li>
                            </ul>
<p>说明：</p>
                        <ul>
                            <li>
1、六联苗包含：犬瘟热、细小病毒、传染性肝炎、副流感、传染性支气管炎、狂犬病；
                                </li>
                            <li>
2、七联苗包含：犬瘟热、细小病毒、传染性肝炎、副流感、传染  性气管炎、狂犬病、钩端螺旋体、狂犬病。
                                </li>
                            </ul>
</div>
                    <div>
                    <p>猫</p>
                        <ul>
                            <li>
                    首免：仔猫出生5-6周，接种猫二联苗和猫三联苗
                                </li>
                            <li>
                    二免：进行首免2周后，接种猫二联苗或猫三联苗
                                </li>
                            <li>
                    三免：进行二免2周后，接种猫六联苗或猫七联苗
                                </li>
                            </ul>
                    <p>说明：</p>
                        <ul>
                            <li>
                    1、猫二联苗包括：猫瘟，狂犬病；
                                </li>
                            <li>
                    2、猫三联苗包括：猫瘟、猫传染性鼻气管炎、猫杯状病毒
                                </li>
                            </ul>

                    <p>对于宠物免疫，要注意以下几点：</p>
                        <ul>
                            <li>
                    1、宠物必须定期注射疫苗，免疫力才能提高，预防机会才可接近百分之百，否则仍有机会收到感染；
                                </li>
                            <li>
                    2、疫苗只能用于健康  犬、猫的预防注射，不能用于已经发生疫情的紧急预防与治疗，孕犬、孕猫禁用；
                                </li>
                            <li>
                    3、宠物必须定期驱虫，每年需2-3次。
                                </li>
                    <b>执业兽医师负责进行疫苗注射。
                    助理负责协助执业兽医师进行疫苗注射。</b>
                            </ul>
                        </div>
                </span>
                </p>

                <center><img src={require('../pages/descimg/免疫室.jpg')}/></center>

            </div>
        );
    }
}

export default ImmunityRoom;
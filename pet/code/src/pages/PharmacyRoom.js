/**
 * Created by fsg on 2018/3/19.
 */
import React from 'react';
import {Component} from 'react';
require('./PageContent.css');
//药房
class PharmacyRoom extends Component {
    render(){
        return(
            <div>

                <div class="main" >
                    <p class="titlePara"><center><span class="title" ><b>药房业务流程</b></span></center></p>


                    <p class="paragraph"><span class="description" >对各种药物的存放要求、处方的审核流程、药物的发放流程、常见药物的使用说明等</span>
                    </p>

                    <center><img src={require('../pages/descimg/药房.jpg')}/></center>
                </div>
            </div>
        );
    }
}

export default PharmacyRoom;
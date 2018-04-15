/**
 * Created by fsg on 2018/4/10.
 */
import React from 'react';
import {Component} from 'react';
import axios from 'axios';
import { Player, ControlBar } from 'video-react';
import ReactPlayer from 'react-player';
import MyHeader from '../CurHeader';

class CaseDescription extends Component {

    constructor(props) {
        super(props);
        this.state = {
            caseId:null,
            caseDesc: "",
            data:[]
        };
    }



    componentDidMount() {
        // alert("ok");
        var host = "http://localhost/VisPethos/php/getSpecificCase.php";
        var caseId = this.props.match.params.caseId;

        var bodyFormData = new FormData();
        bodyFormData.set('caseId', caseId);

        axios({
            method: 'post',
            url: `${host}`,
            data: bodyFormData,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
        }).then( response => {
            var datas = response.data;
            this.setState({data:datas});
            // alert(this.state.data);
        }).catch(error => {
            // alert("error");
            this.props.history.push("/login");
        });


    }

    render(){
        // var tmp = this.state.data[0].caseid;
        var tmp = 1;
        return(
            <div style={{textAlign:'center'}}>
                <MyHeader/>
                <div style={{width:'60%', textAlign:'center', marginLeft:'20%'}}>
                    {

                        this.state.data.map((item) => {
                            var dataType = item.datatype;
                            if(dataType == "视频"){
                                var fullPath = "http://115.159.148.70:8086"+ item.content+"/"+item.dataname;
                                // return <Player ref="player"
                                //         src={fullPath}
                                //         width={123}
                                //                height={100}>
                                //
                                //     <source src={fullPath} />
                                //     <ControlBar autoHide={true} />
                                // </Player>;
                                /*return <div className='player-wrapper'>
                                    <ReactPlayer
                                        playing
                                        playsinline
                                        className='react-player'
                                        url={fullPath}
                                        width='100%'
                                        height='100%'
                                    />
                                </div>*/
                                return <video class="video-container video-container-overlay" controls autoplay="" loop="" muted="" data-reactid=".0.1.0.0" style={{width:'70%'}}>
                                    <source type="video/mp4" data-reactid=".0.1.0.0.0" src={fullPath}/>
                                </video>;
                            }else if(dataType == "图片"){
                                var fullPath = "http://115.159.148.70:8086"+ item.content+"/"+item.dataname;
                                return <img src={fullPath}/>;
                            }else if(dataType == "概述"){
                                var content = item.content;
                                return <div>{content}</div>
                            }
                        })
                    }

                </div>
            </div>
        );
    }
}

export default CaseDescription;
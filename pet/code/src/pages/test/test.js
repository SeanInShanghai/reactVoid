/**
 * Created by fsg on 2018/3/31.
 */
import React, {Component} from 'react';
import {Layout, Menu, Icon} from 'antd';
import { Modal, Button } from 'antd';
import axios from 'axios';
import MyHeader from '../../CurHeader';

require('../css/style.css');
require('../css/slider.css');

class Test extends Component{

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            label: [],
            answers: [],
            results:[],
            modelVis: false,
            modelContent: null
        };
    }

    componentDidMount() {
        var host = "http://localhost/VisPethos/php/getQuestions.php";

        axios({
            method: 'get',
            url: `${host}`
        }).then( response => {
            var fullData = response.data;
            this.setState({data:fullData});
        }).catch(error => {

        });
    }

    testFunction = (e) => {
        var data = this.state.data;
        var results = this.state.results;
        var dataLeh = data.length;
        var i = 0;
        var rightNum = 0;
        while(i < results.length){
            var tmpData = data[i];

            var id = tmpData.examid;
            var correctAnswer = tmpData.correct_answer;
            var res = results[i];
            // alert(JSON.stringify(res));
            // alert(JSON.stringify(res.key));
            // alert(JSON.stringify(results));
            if((correctAnswer == "D" && res.value == 3) || (correctAnswer == "C" && res.value == 2) || (correctAnswer == "B" && res.value == 1) || (correctAnswer == "A" && res.value == 1)){
                rightNum += 1;
            }
            i++;

        }
        this.setState({modelContent:"您回答正确数目："+rightNum});
        this.setState({modelVis:true});
    }


    onRadioChange = (e) =>{
        var input = e.target;
        var name = input.name;
        var radios = document.querySelectorAll(`input[name="${name}"]`);
        var result = [];

        Array.prototype.map.call(radios, (radio, index) => {
            if(radio.checked){
                var tmp = {'key': name, 'value':index}
                result.push(tmp);
            }
        })
        // alert(result[0].key);
        // alert(result[0].value);
        // alert(JSON.stringify(result));

        var results = this.state.results;
        results.push(result[0]);
        // alert(results[0].key);
        // alert(results[0].value);
        this.setState({results:results});
        // alert(results[0].value);


    }

    handleModel= (e) => {
        this.setState({modelVis:false});
    }

    render(){

        return(

            <Layout>
                <MyHeader/>



                <div class="main">

                    <div class="questionBox">
                        {
                            this.state.data.map((item) => {
                                return <div><div>
                                    <div style={{float:'left'}} class="quesNo">{item.examid}</div>
                                    <div style={{float:'left'}} class="question">{item.question}</div>
                                    <div class="clear"></div>
                                    </div>

                                    <div>
                                        <label><input name={item.examid} ref="radio1" type="radio" value="" style={{float:'left'}} class="optNo" onChange={this.onRadioChange} /></label>
                                        <div style={{float:'left'}} class="option">A.{item.alternativea}</div>
                                        <div class="clear"></div>
                                    </div>
                                    <div>
                                        <label><input name={item.examid} ref="radio2" type="radio" value="" style={{float:'left'}} class="optNo" onChange={this.onRadioChange}/></label>
                                        <div style={{float:'left'}} class="option">B.{item.alternativeb}</div>
                                        <div class="clear"></div>
                                    </div>
                                    <div>
                                        <label><input name={item.examid} ref="radio3" type="radio" value="" style={{float:'left'}} class="optNo" onChange={this.onRadioChange}/></label>
                                        <div style={{float:'left'}} class="option">C.{item.alternativec}</div>
                                        <div class="clear"></div>
                                    </div>
                                    <div>
                                        <label><input name={item.examid} ref="radio4" type="radio" value="" style={{float:'left'}} class="optNo" onChange={this.onRadioChange}/></label>
                                        <div style={{float:'left'}} class="option">D.{item.alternatived}</div>
                                        <div class="clear"></div>
                                    </div>

                                    </div>
                            })


                        }
                    </div>


                    <Modal title="答题结果" visible={this.state.modelVis}
                           onOk={this.handleModel} onCancel={this.handleModel}>
                        <p>{
                               this.state.modelContent
                        }</p>
                    </Modal>

                    <div>
                        <span><input id="submit" type="submit" value="考试结束，可以交卷啦！"  class="testBtn" onClick={(e) => this.testFunction(e)} /></span>
                        <br/>
                    </div>


                </div>
            </Layout>
        );
    }
}

export default Test;
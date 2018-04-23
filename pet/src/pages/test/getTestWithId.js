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

class GetTestId extends Component{
    componentDidMount() {
        var user = localStorage.getItem('user');
        if(user == null){
            this.props.history.push("/index");
        }
    }


    constructor(props) {
        super(props);
        this.state = {
            data: [],
            label: [],
            answers: [],
            results:[],
            modelVis: false,
            modelContent: null,
            errorInfo:[],
            errorIds: [],
            testId:0,
            checked:false
        };
    }

    componentDidMount() {
        var host = "http://localhost/VisPethos/php/getExamWithTest.php";
        // alert("ok");

        var testId = this.props.match.params.testId;
        // alert(this.props.match.params);
        // alert(testId);

        var bodyFormData = new FormData();
        bodyFormData.set('testId', testId);
        this.setState({testId:testId});


        axios({
            method: 'post',
            url: `${host}`,
            data: bodyFormData,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
        }).then( response => {
            var fullData = response.data;

            this.setState({data:fullData});
        }).catch(error => {

        });
    }

    componentDidUpdate(prevProps, prevState) {
        /**
         * this is the initial render
         * without a previous prop change
         */
        if(prevProps == undefined) {
            return false
        }



        /**
         * new Project in town ?
         */
        if (this.state.testId != this.props.match.params.testId) {
            // this.refs.radio1.checked = false;
            // this.refs.radio2.checked = false;
            // this.refs.radio3.checked = false;
            // this.refs.radio4.checked = false;
            // alert("update");
            var radios = document.querySelectorAll("input[class=optNo");
            Array.prototype.map.call(radios, (radio, index) => {
                radio.checked = false;

            })
            // alert(this.refs.radio1.checked);
            // this.props.dispatch(fetchProject(this.props.router.params.id))
            var host = "http://localhost/VisPethos/php/getExamWithTest.php";
            // alert("ok");

            var testId = this.props.match.params.testId;
            // alert(this.props.match.params);
            // alert(testId);

            var bodyFormData = new FormData();
            bodyFormData.set('testId', testId);
            this.setState({testId:testId});



            axios({
                method: 'post',
                url: `${host}`,
                data: bodyFormData,
                config: { headers: {'Content-Type': 'multipart/form-data' }}
            }).then( response => {
                var fullData = response.data;

                this.setState({data:fullData});
            }).catch(error => {

            });
            this.setState({results:[]});



        }

    }

    testFunction = (e) => {
        var data = this.state.data;
        var results = this.state.results;
        var dataLeh = data.length;
        var i = 0;
        var rightNum = 0;
        var content = [];
        var errorIds = [];
        var errCount = 0;

        /*for(var j = 0; j < results.length; j++){
         var tmpR = results[j];
         var keyValue = tmpR['key'];
         var value = tmpR['value'];
         var id = tmpR['id'];
         alert(keyValue + " " + value + " " + id);

         }*/

        var noAswCount = 0;
        var noAswContent = [];

        while(i < data.length){

            var tmpData = data[i];

            var id = tmpData.examid;
            var exId = tmpData.id;
            var correctAnswer = tmpData.correct_answer;

            var tmpRes = this.getResultById(results, exId);
            if(tmpRes == null){//说明这道题目没有回答

                noAswContent[noAswCount] = "第"+exId+"题目没有回答，正确答案："+correctAnswer;
                noAswCount += 1;
                i++;
                // alert(exId + " no asw");
                continue;
            }
            var res = tmpRes;
            // alert(JSON.stringify(res));
            // alert(JSON.stringify(res.key));
            // alert(JSON.stringify(results));
            if((correctAnswer == "D" && res.value == 3) || (correctAnswer == "C" && res.value == 2) || (correctAnswer == "B" && res.value == 1) || (correctAnswer == "A" && res.value == 0)){
                rightNum += 1;
                tmpData['result'] = true;
            }else{//错误题目
                // alert("error question");

                content[errCount] = "第"+exId+"题目错误，正确答案："+correctAnswer;

                errorIds[errCount] = exId;
                tmpData['result'] = false;
                errCount += 1;
            }
            data[i] = tmpData;
            i++;

        }

        for(var k = 0; k < noAswContent.length; k++){
            var tmpNoAsw = noAswContent[k];

            content[errCount] = tmpNoAsw;
            errCount += 1;
        }


        var totoalNumber = rightNum * 10;
        var modelContent = "";
        this.setState({errorInfo:content});
        if(content == ""){
            modelContent = "您回答正确数目："+rightNum + "; 您的总分为："+totoalNumber +"\n"+ "你的回答完全正确";
        }else{
            modelContent = "您回答正确数目："+rightNum + "; 您的总分为："+totoalNumber;
        }


        this.setState({modelContent:"您回答正确数目："+rightNum + "; 您的总分为："+totoalNumber});
        this.setState({modelVis:true});
    }

    getResultById = (result, id) => {
        for(var i = 0; i < result.length; i++){
            var tmpR = result[i];
            var keyValue = tmpR['key'];
            var value = tmpR['value'];
            var myId = tmpR['id'];
            if(id == myId){
                return tmpR;
            }

        }
        return null;
    }

    isKeyIn = (result, key) => {
        if(result.length == 0){
            return false;
        }
        for(var i = 0; i < result.length; i++){
            var tmpR = result[i];
            var keyValue = tmpR['key'];
            if(key == keyValue){
                return true;
            }

        }
        return false;
    }


    onRadioChange = (e) =>{
        var input = e.target;
        var name = input.name;
        var id = input.id;//第几道题目
        var radios = document.querySelectorAll(`input[name="${name}"]`);
        // var result = [];
        var result = this.state.results;

        Array.prototype.map.call(radios, (radio, index) => {
            if(radio.checked){//首先遍历
                var tmp = {'key': name, 'value':index, 'id':id}
                // alert(name);
                // alert(result);
                // alert(this.isKeyIn(result, name));
                if(this.isKeyIn(result, name)){
                    for(var i = 0; i < result.length; i++){
                        var tmpR = result[i];
                        var keyValue = tmpR['key'];
                        if(name == keyValue){
                            tmpR['value'] = index;
                            // alert("fixed:"+index);
                        }

                    }
                }else{
                    result.push(tmp);
                    // alert("pushed");
                }


            }
        })

        /*for(var i = 0; i < result.length; i++){
            var tmpR = result[i];
            var keyValue = tmpR['key'];
            var value = tmpR['value'];
            var id = tmpR['id'];
            alert(keyValue + " " + value + " " + id);

        }*/

        // alert(result[0].key);
        // alert(result[0].value);
        // alert(JSON.stringify(result));

        // var results = this.state.results;
        // results.push(result[0]);
        // alert(results[0].key);
        // alert(results[0].value);
        this.setState({results:result});
        // alert(results[0].value);


    }


    handleModel= (e) => {
        this.setState({modelVis:false});
        this.forceUpdate();

    }

    render(){

        return(

            <Layout>
                {/*<MyHeader/>*/}



                <div class="main">

                    <div class="questionBox">
                        {
                            this.state.data.map((item) => {
                                var testId = "test"+item.id;
                                var isWrong = this.state.errorIds.indexOf(item.id);
                                return <div><div>
                                    <div style={{float:'left'}} class="quesNo">{item.id}</div>
                                    <div id={item.id} style={{float:'left'}}  class="question">{item.question}</div>
                                    <div class="clear"></div>
                                    </div>

                                    <div>
                                        <label><input id={item.id} name={item.examid} ref="radio1" type="radio" value="" style={{float:'left'}} class="optNo" onChange={this.onRadioChange} /></label>
                                        <div style={{float:'left'}} class="option">A.{item.alternativea}</div>
                                        <div class="clear"></div>
                                    </div>
                                    <div>
                                        <label><input id={item.id} name={item.examid} ref="radio2" type="radio" value="" style={{float:'left'}} class="optNo" onChange={this.onRadioChange}/></label>
                                        <div style={{float:'left'}} class="option">B.{item.alternativeb}</div>
                                        <div class="clear"></div>
                                    </div>
                                    <div>
                                        <label><input id={item.id} name={item.examid} ref="radio3" type="radio" value="" style={{float:'left'}} class="optNo" onChange={this.onRadioChange}/></label>
                                        <div style={{float:'left'}} class="option">C.{item.alternativec}</div>
                                        <div class="clear"></div>
                                    </div>
                                    <div>
                                        <label><input id={item.id} name={item.examid} ref="radio4" type="radio" value="" style={{float:'left'}} class="optNo" onChange={this.onRadioChange}/></label>
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

                        }<br/><br/>
                        {
                            this.state.errorInfo.map((item) => {
                                return <p>{item}</p>;
                                }

                            )
                        }
                        </p>
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

export default GetTestId;
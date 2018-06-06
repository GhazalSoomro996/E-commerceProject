import React from "react"

import axios from "axios";
export default class Userref  extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username:''
        }
        this.username = this.username.bind(this);
    }
    async username(){
        console.log(this.state);
        axios({
            method:'post',
            url:'http://localhost:9000/userref',
            data:{
                username:this.state.username
            },
            headers:{
              'Access-Control-Allow-Origin':'http://localhost:9000'
            }
        }).then((response)=>{
            if(response === ''){
              alert('unsuccesful');
            }
            else{
              console.log(response.data);
            }
        }).catch((err)=>{
            console.log(err);
        })
    }
    render(){
        return(
            <div>
              <p>username</p>
                        <input type='text' name='category'  onChange={(e)=>this.setState({username:e.target.value})} />
              
                    <button onClick={this.category} block>Submit</button>
             
            </div>
        )
    }
}
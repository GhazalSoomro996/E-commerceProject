import React from  "react";
import axios from "axios";
// import logo from "../Images/logo.png"

export default class extends React.Component{

    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',
            selectedFile:''
        }
        this.handleSignup = this.handleSignup.bind(this);
    }



    async handleSignup(){

        let formData = new FormData();
        formData.append('username', this.state.username);
        formData.append('password', this.state.password);
        formData.append('selectedFile', this.state.selectedFile);

        axios({
            method:'post',
            url:'http://localhost:9000/signup',
            data:formData,
            headers:{
                'Access-Control-Allow-Origin':'http://localhost:9000/'
            }
        }).then((response)=>{
            // if(response === ''){
            //     alert("user is already exits")
            // }
            // else{
                this.props.history.push(response.data.path);
                // console.log(this.props.history.push('/login'));
            // }
            // console.log(response);
            
        }).catch((err)=>{
            console.log(err);
        })


        
    }
    
    render(){
        return(
            <div>
                <input 
                    type='text' 
                    name='username' 
                    placeholder='username' 
                    onChange={(e) => this.setState({ username: e.target.value})}     
                />
            
                <input 
                    type='text' 
                    name='password' 
                    placeholder='password'
                    onChange={(e) => this.setState({ password: e.target.value})} 
                />
              
                <input type="file" id="file" name="avatar" onChange={(e) => this.setState({ selectedFile: e.target.files[0]})} />
                
                
                <button onClick={this.handleSignup}>Signup</button>

                <div>
                    <a href='/login' >Login</a>
                </div>
            </div>
        )
    }
}
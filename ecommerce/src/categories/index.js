import React from "react"

import axios from "axios";
export default class Categories  extends React.Component{
    constructor(props){
        super(props);
        this.state={
            category:''
        }
        this.category = this.category.bind(this);
    }
    async category(){
        console.log(this.state);
        axios({
            method:'post',
            url:'http://localhost:9000/categories',
            data:{
                category:this.state.category
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
              
                        <input type='text' name='category'  onChange={(e)=>this.setState({category:e.target.value})} />
              
                    <button onClick={this.category} block>Submit</button>
             
            </div>
        )
    }
}
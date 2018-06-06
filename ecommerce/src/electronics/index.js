import React from "react"
import axios from "axios";
export default class Electronics  extends React.Component{
    constructor(props){
        super(props);
        this.state={
            cname:'',
            name:'',
            size:'',
            picture:'',
            description:'',
            price:'',
            company_name:'',
            quantity:''
        }
        this.smartphone = this.smartphone.bind(this);
    }
    async smartphone(){
        console.log(this.state);
        axios({
            method:'post',
            url:'http://localhost:9000/electronics',
            data:{
                cname:this.state.cname,
                name:this.state.name,
                size:this.state.size,
                picture:this.state.picture,
                description:this.state.description,
                price:this.state.price,
                company_name:this.state.company_name,
                quantity:this.state.quantity
           
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
                
                  
                <br /> <br />
                        <label  > Add electronics</label>
                        <input type='text'  onChange={(e)=>this.setState({cname:e.target.value})} /><br /><br />
                
                        <label htmlFor='city' >Name</label>
                        <input type='text' onChange={(e)=>this.setState({name:e.target.value})} /><br />

                        <label htmlFor='city' >Size</label>
                        <input type='text' onChange={(e)=>this.setState({size:e.target.value})} /><br />
                   
                        <label htmlFor='city' >Desc:</label>
                        <input type='text'  onChange={(e)=>this.setState({description:e.target.value})} /><br />
                      
                        <label htmlFor='city' >Price</label>
                        <input type='text'  onChange={(e)=>this.setState({price:e.target.value})} />  <br />                


                        <label htmlFor='city' >Quantity</label>
                        <input type='text'  onChange={(e)=>this.setState({quantity:e.target.value})} /><br />

                        <label htmlFor='city' >company</label>
                        <input type='text' onChange={(e)=>this.setState({company_name:e.target.value})} /><br />

                        <input type="file" id="file" name="avatar" onChange={(e) => this.setState({ picture: e.target.files[0]})} />
                
                    <button color="primary" size="lg" onClick={this.smartphone} block>Submit</button>
               
            </div>
        )
    }
}
import React from "react"
import axios from "axios";
export default class Groceries  extends React.Component{
    constructor(props){
        super(props);
        this.state={
           cname:'',
           name:'',
           picture:'',
           description:'',
           price:'',
           company_name:'',
           quantity:''
        }
        this.groceries = this.groceries.bind(this);
    }
    async groceries(){
        console.log(this.state);
        axios({
            method:'post',
            url:'http://localhost:9000/groceries',
            data:{
                cname:this.state.cname,
                name:this.state.name,
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
                this.props.history.push(response.data.path);
            //   console.log(response.data.path);
            }
        }).catch((err)=>{
            console.log(err);
        })
    }
    render(){
        return(
            <div>
                
                <br /> <br />
                        <label  > Add Groceries</label>
                        <input type='text'  onChange={(e)=>this.setState({cname:e.target.value})} /><br /><br />
                
                        <label htmlFor='city' >Name</label>
                        <input type='text' onChange={(e)=>this.setState({name:e.target.value})} /><br />
                   
                        <label htmlFor='city' >Desc:</label>
                        <input type='text'  onChange={(e)=>this.setState({description:e.target.value})} /><br />
                      
                        <label htmlFor='city' >Price</label>
                        <input type='text'  onChange={(e)=>this.setState({price:e.target.value})} />  <br />                


                        <label htmlFor='city' >Quantity</label>
                        <input type='text'  onChange={(e)=>this.setState({quantity:e.target.value})} /><br />

                        <label htmlFor='city' >company</label>
                        <input type='text' onChange={(e)=>this.setState({company_name:e.target.value})} /><br />

                        <input type="file" id="file" name="avatar" onChange={(e) => this.setState({ picture: e.target.files[0]})} />
                


                    <button color="primary" size="lg" onClick={this.groceries} block>Submit</button>
               
            </div>
        )
    }
}
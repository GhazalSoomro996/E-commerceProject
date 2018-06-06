import React from 'react';
import axios from "axios"
import Userref from '../userref/index.js'
import Categories from '../categories/index.js'
import Smartphone from '../smartphone/index.js'
import Groceries from '../groceries/index.js'
import Garments from '../garments/index.js'
import Electronics from '../electronics/index.js'
export default class extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={
//             name:'',
//             model:'',
//             response:''
//         }
//         this.handleLogin = this.handleLogin.bind(this);
//     }
//   async handleLogin(){
//        console.log(this.state.name + this.state.model)
//         axios({
//              method:'post',
//             url:'http://localhost:9000/empaddproduct',
//           data:{
//                  name:this.state.name,
//                 model:this.state.model
//             },
//            headers:{
//                  'Access-Control-Allow-Origin':'http://localhost:9000/'
//              }
//         }).then((res)=>{
//          if(res === ''){
//                 alert("user pass is wrong")
//           }
//           else{
//                this.props.history.push(res.data.path);
//             }
            
//        }).catch((err)=>{
//             console.log(err);
//       })
//     }

//     componentDidMount(){
//       //   axios.get('http://localhost:9000/getData')
//       //   .then((res)=>{
//       //     this.setState({response:res.data})  
//       //   }).catch((err)=>{
//       //       console.log(err);
//       //   })
//   }

    render(){
        return(
                 <div>
                     {/* <Userref /> */}
                     <Categories />
                     <Smartphone />
                     <Groceries />
                     <Garments />
                     <Electronics />
                 {/* <div>
                    <input 
                        type='text' 
                        name='name' 
                        placeholder='name' 
                        onChange={(e)=> this.setState({name:e.target.value})}  
                    />
                    <input 
                        type='text' 
                        name='model' 
                        placeholder='model' 
                        onChange={(e)=> this.setState({model:e.target.value})} 
                    />
                    <button 
                        onClick={this.handleLogin} 
                    >
                        Login
                    </button>
                </div>
                <div>
                    <a href='/adminsignup' >Signup</a> 
               </div> 
                 <div>{this.state.response}</div>  */}
            </div>

        )
    }
}
